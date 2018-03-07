'use strict';
const angular = require('angular');
import SignupController from './signup.controller';

export default angular.module('project2App.signup', [])
    .controller('SignupController', SignupController)
    .name;
