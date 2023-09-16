#!/usr/bin/env node
//La ligne au dessus permet d'utiliser le script via bin
import {program} from 'commander';
import Conf from 'conf';

import {list} from "./commands/list.js"
import InMemoryService from './services/in-memory-service.js';
import {exportTodo} from './commands/export.js';

const conf = new Conf({projectName: 'todolist'})

const service = new InMemoryService(new Conf({projectName: 'todolist'}));
const myList = () => { list(service)}

conf.set('todo-list',[
  {
    text: "Do something", //string, the text of the todo task
    done: false, //boolean, whether the todo task is marked done or not
  },
  {
    text: "Search your kids", //string, the text of the todo task
    done: true, //boolean, whether the todo task is marked done or not
  },
  {
    text: "Eat your kids", //string, the text of the todo task
    done: true, //boolean, whether the todo task is marked done or not
  }
]);


program
  .command('list')
  .description('List all the TODO tasks')
  .action(myList)


program
  .command('export')
  .description('Export all the TODO tasks')
  .option('-e, --excel', 'Export to Excel')
  .option('-c --csv', 'Export to CSV')
  .action(async (option) => {
    await exportTodo(service, option)}
  )


program.parse()

