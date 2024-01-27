import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "projectsdb", 
    "postgres", 
    "admin", {
        host: "localhost",
        dialect: "postgres"
    }
);