import fs from "fs";
import { stringify } from 'csv-stringify';


export const exportCsv = (httpService) => {

  const todoList = httpService.getTodoList();

  if (todoList && todoList.length) {
    // Looping through Todolist
    const data = [];
    todoList.forEach((
      task) => {
      data.push({task: task.text, done: task.done ? 'true' : 'false'})

    })
    console.log(data);


    stringify(data, {
      header : true,
      columns : { task : "Tache", done : "Fini" }
    }, (err, output) => {
      fs.writeFileSync("todolist-exported.csv", output);
      console.log("OK");
    });
  }









}
