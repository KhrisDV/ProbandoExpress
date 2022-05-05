import { db } from "../models/db.mjs";

export function getAllTasksController(request, response) {
  db.all(`SELECT id, description, done FROM tasks`, (error, data) => {
    if (error) {
      console.error(error);
      response.sendStatus(500);
    } else {
      response.json(data);
    }
  });
}

export function getOneTaskController(request, response) {
  db.get(
    `SELECT id, description, done FROM tasks WHERE id= ${request.params.id}`,
    (error, data) => {
      if (error) {
        console.error(error);
        response.sendStatus(500);
      } else if (data) {
        response.json(data);
      }
    }
  );
}

export function postTaskController(request, response) {
  const { description, done } = request.body;
  db.run(
    `INSERT INTO tasks(description, done) VALUES ("${description}", ${done})`,
    (error) => {
      if (error) {
        console.error(error);
        response.sendStatus(500);
      } else {
        response.sendStatus(201);
      }
    }
  );
}

export function putTaskController(request, response) {
  db.run(
    `UPDATE tasks SET description = "${request.body.description}" , done = ${request.body.done} WHERE id = "${request.body.id}"`,
    (error) => {
      if (error) {
        console.error(error);
        response.sendStatus(500);
      } else {
        response.sendStatus(201);
      }
    }
  );
}

export function deleteTaskController(request, response) {
  db.run(`DELETE FROM tasks WHERE id = "${request.body.id}"`, (error) => {
    if (error) {
      console.error(error);
      response.sendStatus(500);
    } else {
      response.sendStatus(201);
    }
  });
}
