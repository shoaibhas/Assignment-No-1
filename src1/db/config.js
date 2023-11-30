import { Sequelize } from "sequelize";
const envDATA = process.env;
const sequelizes = new Sequelize(
  envDATA.DB_NAME,
  envDATA.DB_USER,
  envDATA.DB_PASSWORD,
  {
    host: envDATA.DB_HOST,
    port: envDATA.DB_PORT,
    dialect: envDATA.DB_DIALECT,
    logging: false,
  }
);
export const connectDB = async () => {
  try {
    await sequelizes.authenticate();
    console.log("conection successfull");
  } catch (err) {
    console.log("not connect", err);
  }
};
export default sequelizes;
