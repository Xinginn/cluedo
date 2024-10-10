export function getRoot(app) {
  app.get('/', (req, res) => {
    res.status(200).send("Hello world");
  });
}