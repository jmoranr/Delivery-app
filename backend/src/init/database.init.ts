import mongoose from "mongoose";
const dotenv = require("dotenv");

dotenv.config();

export function initMainDatabase(): any {
  const method: string = "initMainDatabase";
  const database: string = String(process.env.DELIVERY_DB);
  dotenv.config();
  mongoose
    .connect(database)

    .then((db) => {
      console.info(method, "Connected to main DB: " + database);
    })
    .catch((err) => {
      console.error(
        method,
        "Error on connect to main DB " + database + "=>" + err
      );
    });
}
