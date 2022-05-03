import express from "express";
import {
  getAllTasksController,
  postTaskController,
  putTaskController,
  deleteTaskController,
} from "./controllers/tasksControllers.mjs";
import { postUserController } from "./controllers/usersControllers.mjs";
import { authMiddleware } from "./middlewares/authorization.mjs";

const app = express();
const HOST = "/api/v0.0";
const jsonParser = express.json();

app.post(HOST + "/users/", jsonParser, postUserController);

app.get(HOST + "/tasks/", getAllTasksController);
app.post(HOST + "/task/", jsonParser, authMiddleware, postTaskController);
app.post(HOST + "/task/", jsonParser, authMiddleware, postTaskController);
app.put(HOST + "/task/", jsonParser, authMiddleware, putTaskController);
app.delete(HOST + "/task/", jsonParser, authMiddleware, deleteTaskController);

app.listen(process.env.PORT || 3000, () => {
  console.log("Express running...");
});
