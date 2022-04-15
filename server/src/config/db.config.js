module.exports = {
  HOST: "localhost",
  USER: "vult",
  PASSWORD: "admin",
  DB: "testjwt",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};