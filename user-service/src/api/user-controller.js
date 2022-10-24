const UserService = require('../services/user-services');

module.exports = (app) => {
  const service = new UserService();

  app.post('/users/signup', async (req, res, next) => {
    const { email, password, name } = req.body;
    const { data } = await service.signUp({ email, password, name}); 
    res.json(data);
  });

  app.post('/users/login',  async (req, res, next) => {  
    const { userName, password } = req.body;
    const { data } = await service.signIn({ userName, password});
    res.json(data);
  });
};