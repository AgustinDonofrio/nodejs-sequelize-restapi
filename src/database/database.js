import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "postgres", 
    "postgres", 
    "admin", {
        host: "localhost",
        dialect: "postgres"
    }
);