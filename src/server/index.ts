const { Sequelize } = require("sequelize");

  export const sequelize = new Sequelize("example", "root", "3011", {
    host: "localhost",
    dialect: "mysql",
  });

// export const connectToDatabase = async () => {
//   const sequelize = new Sequelize("example", "root", "3011", {
//     host: "localhost",
//     dialect: "mysql",
//   });

//   try {
//     await sequelize.authenticate();
//     console.log("соединение с базой данных было успешно установлено");
//   } catch (e) {
//     console.log("Невозможно выполнить подключение к базе данных:", e);
//   }
// };