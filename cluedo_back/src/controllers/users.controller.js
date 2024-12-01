import { createUser, findManyUsers, findUserByUsername } from "../repositories/users.repository.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

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

export async function getUserByUsername(req, res) {
  try {
    const username = req.params.username;
    if (!username) {
      res.status(401).send("No username was provided");
      return
    }
    const result = await findUserByUsername(username);
    if (!result) {
      res.status(404).send(`No case found with username ${username}`);
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
    if(user){
      const token = jwt.sign(user, process.env.JWT_KEY)
      res.status(201).send(token)
    } else
      res.status(500).send(`Server encountered an error: ${error}`);
    return;
  } catch (error) {
    console.log(error)
    res.status(500).send(`Server encountered an error: ${error}`);
  }
}

export async function connectUser(req, res) {
  try {
    const { username, password } = req.body
    const {password: hash, ...user} = await findUserByUsername(username)
    const isOk = await bcrypt.compare(password, hash)
    if(isOk){
      const token = jwt.sign(user, process.env.JWT_KEY)
      res.status(200).send(token)
    }else
      res.status(404).send(`No account with username: ${username}`)
  }
  catch (error){
    res.status(500).send(`Server encountered an error: ${error}`)
  }
}