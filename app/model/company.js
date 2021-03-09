'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CompanySchema = new Schema({
    id: String,
    compName: String,
    status: String,
    address: String,
    bossName: String,
    bossPhone: String,
    dueDate: Date
  });
  return mongoose.model('Company', CompanySchema);
};
