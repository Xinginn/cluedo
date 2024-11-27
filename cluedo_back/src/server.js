import express from 'express';
import cors from 'cors';
import { getRoot } from './routes/getRoot.route.js';
import { investigationsRoute } from './routes/investigations.route.js';
import { discussionsRoute } from './routes/discussions.route.js';
import { userRoute } from './routes/users.route.js';

function main() {
  const app = express();

  app.use(cors());

  // routes
  getRoot(app);
  investigationsRoute(app);
  discussionsRoute(app);
  userRoute(app);

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`\nServer is runnning on port ${port}`)
  });
}

main();