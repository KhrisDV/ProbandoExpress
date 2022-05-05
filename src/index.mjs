import express from "express";
import {
  getAllTasksController,
  postTaskController,
  putTaskController,
  deleteTaskController,
} from "./controllers/tasksControllers.mjs";
import {
  validateNewTaskJSON,
  validateTaskJSON,
  validateDeleteTaskJSON,
  validateUserJSON,
  validateDeleteUserJSON,
} from "./middlewares/jsonValidator.mjs";
import {
  postUserController,
  getAllUsersController,
  deleteUserController,
} from "./controllers/usersControllers.mjs";
import { authMiddleware } from "./middlewares/authorization.mjs";

const app = express();
const HOST = "/api/v0.0";
const jsonParser = express.json();

//-----------------------Users
app.get(HOST + "/users/", jsonParser, getAllUsersController);
app.post(HOST + "/users/", validateUserJSON, jsonParser, postUserController);
app.delete(
  HOST + "/users/",
  validateDeleteUserJSON,
  jsonParser,
  deleteUserController
);

//-----------------------Tareas
app.get(HOST + "/tasks/", getAllTasksController);
app.post(
  HOST + "/task/",
  authMiddleware,
  validateNewTaskJSON,
  jsonParser,
  postTaskController
);
app.put(
  HOST + "/task/",
  authMiddleware,
  validateTaskJSON,
  jsonParser,
  putTaskController
);
app.delete(
  HOST + "/task/",
  authMiddleware,
  validateDeleteTaskJSON,
  jsonParser,
  deleteTaskController
);

app.listen(process.env.PORT || 3000, () => {
  console.log("Express running...");
});
