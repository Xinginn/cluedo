import axios from "axios";

// this method is a wrapper for prompting ChatGPT with a prompt that has been constructed in methods below
export async function promptGPT(prompt, temperature = 0.5) {
  const payload = {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: prompt
      }
    ],
    temperature,
  }

  const headers = { Authorization: `Bearer ${process.env.OPENAI_KEY}`}
  const response = await axios.post('https://api.openai.com/v1/chat/completions?Content-Type=application/json', payload, {headers});
  return response.data.choices[0].message.content;
}



export async function queryInvestigationEvents(victimName = 'May Upwhorth', wordCount = 100) {
  const prompt = `Meutre dans les années 1920. La victime, ${victimName} a été tué(e) par un de ses proches. Imagine les evenements qui se sont passés et qu'un joueur doit éludicer. Uniquement les evenements cachés, pas d'introduction, uniquement les faits. ${wordCount} mots maximums, un seul paragraphe. Invente les prenom et nom complets des personnages si besoin.`

  const result = await promptGPT(prompt);
  return result;
}

export async function queryInvestigationAutopsy(events, wordCount = 50) {
  const prompt = `Voici un descriptif de crime: '${events}'. Donne moi un rapport d'autopsie, en ${wordCount} mots ou moins. Sois bref. Donne seulement la cause du décès. Seulement le contenu, pas d'introduction.`
  const result = await promptGPT(prompt);

  return result;
}

export async function querySuspects(events, suspectsNumber = 4, wordCount = 75) {
  const prompt = `Voici un descriptif de crime: '${events}'. Décris les ${suspectsNumber} suspects (mais pas victime) dans cette affaire (mais pas la victime, et pas de membres de la police). Donne le nom, la relation avec la victime, la personnalité en quelques adjectifs, et une description du personnage avec son historique, ses préoccupation et ses secrets. Nom, relation, personnalité et description doivent être séparés par le symbole '/'. Utilise ${wordCount} mots maximum par personnage. Uniquement le texte, pas de mise en forme. Attrention! Sépare chaque descriptif de personnage par le symbole 'µ', c'est impératif.`
  const result = await promptGPT(prompt);

  return result;
}

export async function queryCharacterAnswer(events, character, question, wordCount = 70) {
 
  const cautionInstruction = character.isKiller ? "Tu cherche a éviter d'être découvert. N'avoue jamais ton crime, même s'il faut mentir pour cela" : "Ne revèle pas tes secrets, sauf si l'enquêteur te confronte à des éléments concrets du descriptif de l'enquête"
  const prompt = `"Nous sommes dans un jeu d'enquête sur un meurtre dont voici le descriptif (qui sont cachés pour l'enquêteur): '${events}'. Tu es ${character.name}, ${character.role}. Tes traits de charactère sont: '${character.personality}'. Ton implication dans l'enquête est: '${character.description}'. Voici la question de l'enquêteur: '${question}'. ${cautionInstruction}. Répond directement en ${wordCount} mots maximum."`;
  const result = await promptGPT(prompt);

  return result;
}