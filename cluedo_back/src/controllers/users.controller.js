import { createUser, findUserById, findManyUsers } from "../repositories/users.repository.js";
import bcrypt from 'bcrypt'

export async function getUsers(req, res) {
  try {
    const result = await findManyUsers();
    res.status(200).send(result);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send(`Server encountered an error: ${error}`)
    return;
  }
}

export async function getUser(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      res.status(401).send("No id was provided");
      return
    }
    const result = await findUserById(id);
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

export async function postUser(req, res) {
  try {
    const { username, password } = req.body
    const hash = bcrypt.hashSync(password, 10)
    let user = await createUser({username, password: hash});
    res.status(201).send()
    return;
  } catch (error) {
    console.log(error)
    res.status(500).send(`Server encountered an error: ${error}`);
  }
}