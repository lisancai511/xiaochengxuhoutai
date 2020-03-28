// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportRole = require('../../../app/controller/role');
import ExportSpecialExercises = require('../../../app/controller/specialExercises');
import ExportSubject = require('../../../app/controller/subject');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    role: ExportRole;
    specialExercises: ExportSpecialExercises;
    subject: ExportSubject;
    user: ExportUser;
  }
}
