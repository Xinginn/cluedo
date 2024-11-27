import jwt from "jsonwebtoken" 
import { findUserById } from '../repositories/users.repository.js'

export async function verifUser(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ message: "No token provided or invalid format" });
  }

  const token = authHeader.split(" ")[1];

  if(!token){
    res.status(401).send(`No token send`)
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_KEY)
    try {
      const user = await findUserById(decode.id)
      if(!user){
        res.status(403).send(`Invalid user`)
      }
      req.user = user
      next()
    } catch (error) {
      res.status(403).send(`Invalid user`)
    }
  } catch (error) {
    res.status(403).send(`Invalid token`)
  }
}