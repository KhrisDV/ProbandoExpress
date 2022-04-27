import { tasks } from "../models/tasksModels.mjs";

export function getHolaMundoController(request, response) {
  response.send("Hola mundo");
}

export function getTaskController(request, response) {
  response.json(tasks);
}

export function postTaskController(request, response) {
  tasks.push(request.body);
  response.sendStatus(201);
}
