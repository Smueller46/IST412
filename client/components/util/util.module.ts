'use strict';
const angular = require('angular');
import {UtilService} from './util.service';

export default angular.module('project2App.util', [])
  .factory('Util', UtilService)
  .name;
