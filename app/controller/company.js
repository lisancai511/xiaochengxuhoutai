'use strict';

const Controller = require('egg').Controller;

class CompanyController extends Controller {
  async list() {
    const ctx = this.ctx;
    const query = ctx.query;
    const filter = {
    };
    const limit = parseInt(query.limit || 10);
    const offset = (parseInt(query.page || 1) - 1) * limit;
    this.ctx.body = await this.ctx.service.company.list(filter, limit, offset);
  }
  async get() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    ctx.body = await ctx.service.company.get(id);
  }
  async add() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.company.add(ctx.request.body);
  }
  async remove() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    ctx.body = await ctx.service.company.remove(id);
  }
  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    ctx.body = await ctx.service.company.update(id, ctx.request.body);
  }
}

module.exports = CompanyController;
