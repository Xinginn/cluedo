import { findCharacterById } from "../repositories/characters.repository.js";
import { queryCharacterAnswer } from '../scripts/chatGPT.js';

export async function postDiscussion(req, res) {
  try {
    const question = req.body.prompt;
    const characterId = req.body.characterId;

    const { investigation, ...characterData} = await findCharacterById(characterId);
    const result = await queryCharacterAnswer(investigation.events, characterData, question);

    res.status(200).send(result)

  } catch (error) {
    res.status(500).send(`Server encountered an error: ${error}`);
  }
}