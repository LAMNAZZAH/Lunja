const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const { verifyToken } = require('./middlewares/Authentication');
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3000',
}

const apiRouter = require('./routes/api.route')


require('dotenv').config();

const App = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(cors(corsOptions));

  
  app.use(verifyToken);
  
  app.get('/', async (req, res) => {
    res.send({ message: 'Awesome it works' });
  });
  
  app.use('/api', apiRouter);
  
  app.use('*', (req, res, next) => {
    next(createError.NotFound());
  });
  
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      status: err.status || 500,
      message: err.message || 'Something went wrong please try again.',
    });
  });

  return app
}



module.exports = App;