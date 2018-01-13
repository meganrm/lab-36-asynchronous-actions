'use strict';

const basicHttp = require(__dirname + '/../lib/basic-http');
const jsonParser = require('body-parser').json();
const userHandler = require('./user-auth-middleware');

const authRouter = module.exports = require('express').Router();

authRouter.post(
  '/signup',
  jsonParser,
  userHandler.createUser
);

authRouter.get(
  '/signin',
  basicHttp,
  userHandler.getUserByName,
  userHandler.signIn
);
