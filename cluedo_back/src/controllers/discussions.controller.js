import { findCharacterById } from "../repositories/characters.repository.js";
import { createDiscussion } from "../repositories/discussions.repository.js";
import { queryCharacterAnswer } from '../scripts/chatGPT.js';

export async function postDiscussion(req, res) {
  try {
    const prompt = req.body.prompt;
    const characterId = req.body.characterId;

    const { investigation, discussions, ...characterData } = await findCharacterById(characterId);

    const answer = await queryCharacterAnswer(investigation, discussions, characterData, prompt);
    await createDiscussion({ prompt, answer, characterId })
    res.status(200).send(answer)

    return;
  } catch (error) {
    res.status(500).send(`Server encountered an error: ${error}`);
    console.log(error)
  }
}