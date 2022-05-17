const router = require('express').Router();

const authControllers = require('../controllers/auth.controllers'); 

const authRouter = (pool) => {
  const router = express.Router(); 

  const {} = authControllers(pool)

  router.post('/login', loginController)

  return router
}

module.exports = authRouter;
