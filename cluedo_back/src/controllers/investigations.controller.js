import { createInvestigation, findInvestigationById, findManyInvestigations } from "../repositories/investigations.repository.js";

import { queryStructuredInvestigationDetails, queryStructuredSuspects } from '../scripts/chatGPT.js';

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
    const investigationData = JSON.parse(investigationString)

    // roll suspects number, from 5 up to 8 
    //const charactersNumber = Math.ceil(Math.random() * 2) + 2;
    const charactersNumber = 8;
    const charactersString = await queryStructuredSuspects(investigationData.events, charactersNumber);
    const characters = JSON.parse(charactersString).suspects;

    let investigation = await createInvestigation({ ...investigationData, characters });
    res.status(201).send(investigation)
    return;
  } catch (error) {
    console.log(error)
    res.status(500).send(`Server encountered an error: ${error}`);
  }
}