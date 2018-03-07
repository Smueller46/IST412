'use strict';
const angular = require('angular');
import LoginController from './login.controller';

export default angular.module('project2App.login', [])
  .controller('LoginController', LoginController)
  .name;
