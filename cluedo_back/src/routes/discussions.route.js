import bodyParser from "body-parser";
import { postDiscussion } from "../controllers/discussion.controller.js";

export function discussionsRoute(app) {
  app.post('/discussions', bodyParser.json(), postDiscussion);
}