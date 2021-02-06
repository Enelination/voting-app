const Router = require("express").Router;
const createPolls = require("../handlers/create-polls");

module.exports = (app) => {
  const router = new Router();

  router.post("/polls", createPolls);

  app.use(router);
};
