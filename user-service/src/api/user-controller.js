const UserService = require('../services/user-services');

module.exports = (app) => {
  const service = new UserService();

  app.post('/users/login',  async (req, res, next) => {  
    const { userName, password } = req.body;
    const { data } = await service.signIn({ userName, password});
    res.json(data);
  });
};