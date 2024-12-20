import axios from "axios";

// this method is a wrapper for prompting ChatGPT with a prompt that has been constructed in methods below
export async function promptGPT(messages, response_format = undefined, temperature = 0.5, model = "gpt-4o-mini") {
  const payload = {
    model,
    messages,
    response_format,
    temperature,
  }

  const headers = { Authorization: `Bearer ${process.env.OPENAI_KEY}` }
  const response = await axios.post('https://api.openai.com/v1/chat/completions?Content-Type=application/json', payload, { headers });
  return response.data.choices[0].message.content;
}


export async function queryStructuredInvestigationDetails() {
  const messages = [
    {
      role: "system",
      content: "Tu es l'assistant d'un écrivain qui écrit un roman policier. Ta tâche est d'imaginer un crime en respectant le schéma. Il faut imaginer le nom de la victime (victimName), comment s'est déroulé le crime (events) en 150 mots maximums, et le rapport d'autopsie (autopsy) en 75 mots maximum. Pour le descriptif des evenements du crime, imagine les fait, qui a tué la victime, comment s'est passé le crime, et le lieux. Pas d'introduction, uniquement les faits. Invente les prénom et nom complets des personnages si besoin. Pour l'autopsie, sois bref, donne juste où le corps a été retrouvé et l'analyse neutre du corps, ne donne pas d'éléments qui permettraient immédiatement au lecteur de trouver le coupable.`"
    },
    {
      role: "user",
      content: "L'intrigue se passe en 1920, ambiance film noir. La victime a été tuée par un de ses proches. Imagine les evenements et l'autopsie."
    }
  ];

  const response_format = {
    type: "json_schema",
    json_schema: {
      name: "output",
      strict: true,
      schema: {
        type: "object",
        properties: {
          events: {
            type: "string"
          },
          autopsy: {
            type: "string"
          },
          victimName: {
            type: "string"
          }
        },
        required: [
          "events",
          "autopsy",
          "victimName"
        ],
        additionalProperties: false
      }

    }
  }
  const result = await promptGPT(messages, response_format, 0.7)

  return result;
}

export async function queryStructuredSuspects(events, suspectsNumber = 4, wordCount = 60) {
  const messages = [
    {
      role: "system",
      content: `Tu es un l'assistant d'un écrivain qui écrit un roman policier se déroulant dans les années 1920. Tu dois générer une liste de suspects à partir de la description du crime, en respectant le schéma. Pour chaque suspect, tu dois inventer un nom et prénom (name), définir son genre 'male' ou 'female' (gender), son role dans l'affaire (role) par exemple 'Oncle de la vicitime' ou 'Serveuse au bar', sa personalité (personality) en trois adjectifs, son historique relatif au moment du crime avec ses préocupations et secrets (description) en ${wordCount} mots maximum, et si il ou elle a tué la vicitime ou non (isKiller). Il doit obligatoirement y avoir un seul tueur ou tueuse (mais il peut y avoir un complice, eventuellement). Ne décris pas la victime, seulement les suspects. Ne génére par d'enquêteur, d'inspecteur ou de membre des forces de police comme role.`
    },
    {
      role: "user",
      content: `Génère ${suspectsNumber} suspects. Voici la description de crime: '${events}'`
    }
  ];

  const response_format = {
    type: "json_schema",
    json_schema: {
      name: "suspects",
      strict: true,
      schema: {
        type: "object",
        properties: {
          suspects: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string"
                },
                gender: {
                  type: "string"
                },
                role: {
                  type: "string"
                },
                personality: {
                  type: "string"
                },
                description: {
                  type: "string"
                },
                isKiller: {
                  type: "boolean"
                }
              },
              required: [
                "name",
                "gender",
                "personality",
                "role",
                "description",
                "isKiller"
              ],
              additionalProperties: false
            }
          }
        },
        required: [
          "suspects"
        ],
        additionalProperties: false
      }
    }
  }

  const result = await promptGPT(messages, response_format)
  return result
}

export async function queryCharacterAnswer(investigation, discussions, character, question, wordCount = 30) {
  const culpabilityString = character.isKiller ? 'Tu es le tueur' : 'Tu es innocent';
  const cautionInstruction = character.isKiller ? "Tu dois éviter à tout prix d'être découvert. N'avoue jamais ton crime, même s'il faut mentir, ou parfois détourner l'attention sur d'autres personnes." : "Ne revèle pas tes secrets, sauf si l'enquêteur te confronte à des éléments concrets du descriptif de l'enquête"

  const discussionHistoryString = discussions.reduce((stack, current) => {
    const newLine = current.prompt ? `(Enqueteur) ${current.prompt} (${character.name}) ${current.answer}` : `(${character.name}) ${current.answer}`
    return `${stack} ${newLine}`
  }, "");

  const otherCharactersString = investigation.characters.reduce((stack, current) => {
    return current.id === character.id ? stack : `${stack} ${current.name}, ${current.role};`
  }, "");

  const messages = [
    {
      role: "system",
      content: `Tu es l'un des suspect dans une affaire criminelle dont la description est: '${investigation.events}'. Tu es ${character.name}, ${character.role}. ${culpabilityString}. Les autres protagonistes sont: '${otherCharactersString}'. Ta personalité est '${character.personality}'. Ton implication dans cette affaire est: '${character.description}'. Tu dois répondre à la dernière question de l'enquêteur en ${wordCount} ou moins, selon ta personalité et selon la discussion jusqu'à mainteant. ${cautionInstruction}. Réponds directement, sans préfixer par ton nom. Répond uniquement à la dernière question, pas aux précédentes. Si tu es innocent, tu as 20% de chances de parler de lui si c'est pertinent, et 20% de chances de donner une fausse piste sur un autre personnage. Sinon, parle de quelqu'un d'autre. Si la question n'a pas de sens, répond simplement que tu n'as pas compris. Si la question ne semble pas porter sur l'enquête, tu n'as pas besoin de parler de l'enquete, répond naturellement.`
    },
    {
      role: "user",
      content: `${discussionHistoryString} (Enqueteur)${question}`,
    },
  ];

  const result = await promptGPT(messages)

  return result;
}
