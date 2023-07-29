import path from 'path';
import * as child_process from 'child_process';
import {jest} from '@jest/globals'
import InMemoryService from '../services/in-memory-service.js';
import {Command} from 'commander';
import {list} from '../commands/list.js';
import chalk from 'chalk';




const spy = jest.spyOn(InMemoryService.prototype, 'getTodoList')
  .mockReturnValue([{done: false,text: "Do something great"}]);


describe("Test Command Todo Tasks", () => {

  /*it('launch real cli', async () => {

    let result = await  cli(['list'], '.');

    console.log(result)
    expect(result.code).toBe(0);
    expect(result).toBe("0. Do something...");

  })*/

  it('should ', async () => {

    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    list(new InMemoryService({}));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(logSpy).toBeCalledTimes(2)
    expect(console.log).toHaveBeenLastCalledWith(chalk.yellowBright("0. Do something great"))

    expect(logSpy.mock.calls).toEqual([
      [chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')],
      [chalk.yellowBright("0. Do something great")]
    ]);



  })

})








function cli(args, cwd) {
  return new Promise(resolve => {
    child_process.exec(`node ${path.resolve('./index')} ${args.join(' ')}`,
      { cwd },
      (error, stdout, stderr) => { resolve({
        code: error && error.code ? error.code : 0,
        error,
        stdout,
        stderr })
      })
  })}
