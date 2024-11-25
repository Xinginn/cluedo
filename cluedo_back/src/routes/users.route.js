import bodyParser from "body-parser";
import { getUserByUsername, getUsers, postUser, connectUser } from "../controllers/users.controller.js";

export function userRoute(app) {
  app.get('/users', getUsers);
  app.get('/users/:username', getUserByUsername);

  app.post('/users', bodyParser.json(), postUser);
  app.post('/connect', bodyParser.json(), connectUser)
}