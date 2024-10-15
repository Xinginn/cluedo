import express from 'express';
import cors from 'cors';
import { getRoot } from './routes/getRoot.route.js';
import { investigationsRoute } from './routes/investigations.route.js';

function main() {
  const app = express();

  app.use(cors());

  // routes
  getRoot(app);
  investigationsRoute(app);

  const port = process.env.PORT || 5678;
  app.listen(port, () => {
    console.log(`\nServer is runnning on port ${port}`)
  });
}

main();