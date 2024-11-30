import bodyParser from "body-parser";
import { postDiscussion } from "../controllers/discussions.controller.js";
import { verifUser } from "../middleware/verifUser.js";

export function discussionsRoute(app) {
  app.post('/discussions', bodyParser.json(), verifUser,postDiscussion);
}