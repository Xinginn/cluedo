import bodyParser from "body-parser";
import { getUser, getUsers, postUser } from "../controllers/users.controller.js";

export function userRoute(app) {
  app.get('/users', getUsers);
  app.get('/users/:id', getUser);

  app.post('/users', bodyParser.json(), postUser);
}