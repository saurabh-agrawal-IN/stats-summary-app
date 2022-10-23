const UserService = require('../services/user-services');

module.exports = (app, channel) => {
  const service = new UserService();

  app.post('/login',  async (req, res, next) => {  
    const { userName, password } = req.body;
    const { data } = await service.signIn({ userName, password});
    res.json(data);
  });
};