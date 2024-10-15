import bodyParser from "body-parser";
import { getInvestigation, getInvestigations, postInvestigation } from "../controllers/investigations.controller.js";

export function investigationsRoute(app) {
  app.get('/investigations', getInvestigations);
  app.get('/investigations/:id', getInvestigation);

  app.post('/investigations', bodyParser.json(), postInvestigation);
}