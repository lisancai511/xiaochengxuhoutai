// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRole = require('../../../app/model/role');
import ExportSubject = require('../../../app/model/subject');
import ExportSubjectFour = require('../../../app/model/subjectFour');
import ExportSubjectOne = require('../../../app/model/subjectOne');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Role: ReturnType<typeof ExportRole>;
    Subject: ReturnType<typeof ExportSubject>;
    SubjectFour: ReturnType<typeof ExportSubjectFour>;
    SubjectOne: ReturnType<typeof ExportSubjectOne>;
    User: ReturnType<typeof ExportUser>;
  }
}
