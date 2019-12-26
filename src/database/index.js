import Sequelize from "sequelize";

import User from "../app/models/User";

import databaseConfig from "../config/database";

const models = [User];

//conexão com o banco

class Database {
  constructor() {
    this.initi();
  }
  //faz a conexão com o banco e carrega os modulos
  initi() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
