

import chalk from 'chalk';

export function list (httpService) {
  const todoList = httpService.getTodoList();
  if (todoList && todoList.length) {
    console.log(
      chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
    )
    todoList.forEach((
      task, index) => {
      if (task.done) {
        console.log(
          chalk.greenBright(`${index}. ${task.text}`)
        )
      } else {
        console.log(
          chalk.yellowBright(`${index}. ${task.text}`)
        )
      }
    })
  } else {
    console.log(
      chalk.red.bold('You don\'t have any tasks yet.')
    )
  }
}

