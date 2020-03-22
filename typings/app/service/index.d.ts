// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRole = require('../../../app/service/role');
import ExportSubject = require('../../../app/service/subject');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    role: ExportRole;
    subject: ExportSubject;
    user: ExportUser;
  }
}
