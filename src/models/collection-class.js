"use strict";

class Collection {
  constructor(model) {
    this.model = model;
  }

  async createRecord(obj) {
    return await this.model.create(obj);
  }

  async readRecord(id) {
    return await this.model.findOne({ where: { id: id } });
  }

  async readAllRecords(id) {
    return await this.model.findAll();
  }

  async updateRecord(id) {
    return await this.model.update(req.body, { where: { id: id } });
  }

  async deleteRecord(id) {
    return await this.model.destroy({ where: { id: id } });
  }

}

module.exports = Collection;