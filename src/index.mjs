import express from "express";
import {
  getHolaMundoController,
  getTaskController,
  postTaskController,
} from "./controllers/tasksControllers.mjs";

const app = express();
const HOST = "/api/v0.0";
const jsonParser = express.json();

app.get(HOST + "/", getHolaMundoController);

app.get(HOST + "/tasks/", getTaskController);
app.post(HOST + "/task/", jsonParser, postTaskController);

app.listen(process.env.PORT || 3000, () => {
  console.log("Express running...");
});
