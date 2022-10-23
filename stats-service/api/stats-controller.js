const { CUSTOMER_SERVICE, SHOPPING_SERVICE } = require("../config");
const StatsService = require("../services/stats-service");
const UserAuth = require("./middlewares/auth");

module.exports = (app, channel) => {
  const service = new StatsService();

  app.post("/stats/new", async (req, res, next) => {
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

  app.get("/category/:type", async (req, res, next) => {
  });
};
