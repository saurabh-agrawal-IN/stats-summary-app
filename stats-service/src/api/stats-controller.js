const StatsService = require("../services/stats-services");
const userAuth = require("./middlewares/auth");

module.exports = (app) => {
  const service = new StatsService();

  app.post("/stats/new", userAuth, async (req, res, next) => {
    const {
        name,
        salary,
        currency,
        onContract,
        department,
        subDepartment
    } = req.body;
    // validation
    const { data } = await service.createRecord({
        name,
        salary,
        currency,
        onContract,
        department,
        subDepartment
    });
    return res.json(data);
  });

  app.delete("/stats/:name", userAuth, async (req, res, next) => {
    const name = req.params.name;
    const { data } = await service.removeRecord(name);
    res.status(200).json({status: 'OK'});
  });

  app.get("/category/:type", async (req, res, next) => {
  });
};
