import { createInvestigation, findInvestigationById, findManyInvestigations } from "../repositories/investigations.repository.js";

import { queryStructuredInvestigationDetails, queryStructuredSuspects } from '../scripts/chatGPT.js';
import { shuffle } from "../scripts/commons.js";

export async function getInvestigations(req, res) {
  try {
    const result = await findManyInvestigations();
    res.status(200).send(result);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send(`Server encountered an error: ${error}`)
    return;
  }
}

export async function getInvestigation(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      res.status(401).send("No id was provided");
      return
    }
    const result = await findInvestigationById(id);
    if (!result) {
      res.status(404).send(`No case found with id ${id}`);
      return;
    }
    res.status(200).send(result);
    return;
  } catch (error) {
    res.status(500).send(`Server encountered an error: ${error}`);
  }
}

export async function postInvestigation(req, res) {
  try {
    const investigationString = await queryStructuredInvestigationDetails();
    const investigationData = { ...JSON.parse(investigationString), userId: req.user.id }


    const charactersNumber = 8;
    const charactersString = await queryStructuredSuspects(investigationData.events, charactersNumber);
    let characters = JSON.parse(charactersString).suspects;
    shuffle(characters);

    // randomly assign character visuals
    // populate arrays
    const spriteNumbers = 8;
    var availableSprites = { male: [], female: [] };
    for (let i = 1; i <= spriteNumbers; i++) {
      availableSprites.male.push(i);
      availableSprites.female.push(i);
    }

    // pick and assign sprites
    for (let character of characters) {
      const sourceArray = availableSprites[character.gender];
      if (sourceArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * sourceArray.length);
        const randomSpriteNumber = sourceArray[randomIndex];
        sourceArray.splice(randomIndex, 1)
        character.face = `face_${randomSpriteNumber}.webp`;
        character.body = `body_${randomSpriteNumber}.webp`;
      } else {
        character.face = "default.webp";
        character.body = "default.webp";
      }
    }

    // create invesigation in DB
    let investigation = await createInvestigation({ ...investigationData, characters });
    res.status(201).send(investigation)
    return;
  } catch (error) {
    console.log(error)
    res.status(500).send(`Server encountered an error: ${error}`);
  }
}