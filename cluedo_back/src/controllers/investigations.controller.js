import { createInvestigation, findInvestigationById, findManyInvestigations } from "../repositories/investigations.repository.js";

import { queryInvestigationAutopsy, queryInvestigationEvents, querySuspects } from '../scripts/chatGPT.js';

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
    const data = req.body;
    const events = await queryInvestigationEvents();
    data.events = events;
    const autopsy = await queryInvestigationAutopsy(events);
    data.autopsy = autopsy;

    // roll suspects number, from 5 up to 8 
    const charactersNumber = Math.ceil(Math.random() * 2) + 2;
    const charactersString = await querySuspects(events, charactersNumber);
    // suspects list is a string, each suspects being separated by 'µ', each category in character separated by '/'.
    let characters = charactersString.split('µ').reduce((stack, current) => {
      const splits = current.split('/');
      const characterData = {
        name: splits[0],
        role: splits[1],
        personality: splits[2],
        description: splits[3],
      };
      return [...stack, characterData];
    }, []);
    
    data.characters = characters
    let investigation = await createInvestigation(data);
    res.status(201).send(investigation)
    return;
  } catch (error) {
    res.status(500).send(`Server encountered an error: ${error}`);
  }
}