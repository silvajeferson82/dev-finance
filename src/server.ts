import express from "express";
import { db } from "./config/database";

const app = express();

app.listen(process.env.PORT, async () => {
  await db.sync();
  console.log(`App ${process.env.PROJECT_NAME}rodando em ${process.env.PORT}`);
});
