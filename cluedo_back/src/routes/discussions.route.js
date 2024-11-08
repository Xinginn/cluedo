import bodyParser from "body-parser";
import { postDiscussion } from "../controllers/discussions.controller.js";

export function discussionsRoute(app) {
  app.post('/discussions', bodyParser.json(), postDiscussion);
}