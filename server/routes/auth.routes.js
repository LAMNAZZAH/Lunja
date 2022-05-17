const express = require('express')

const authControllers = require('../controllers/auth.controllers'); 

const authRouter = (pool) => {
  const router = express.Router(); 

  //const { signUpController } = authControllers(pool)

  router.get('/signup', authControllers.signUpController)

  return router
}

module.exports = authRouter;
