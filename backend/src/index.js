const express = require("express");
const setupDatabase = require("./setup/database");
const setupMiddleware = require("./setup/middleware");
const setupRouter = require("./setup/router");

const app = express();
setupMiddleware(app);
setupRouter(app);

setupDatabase()
  .then((client) => {
    app.listen(6000, () => {
      console.log("Server started on port 6000");
    });
  })
  .catch(console.error);
