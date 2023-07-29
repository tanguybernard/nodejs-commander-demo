
import InMemoryService from '../services/in-memory-service.js';

import {list} from '../commands/list.js';

import { describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';


//https://dev.to/zsevic/spies-and-mocking-with-node-test-runner-nodetest-4l61




mock.method(InMemoryService.prototype, 'getTodoList', async () => [{text: "ee"}]);

mock.method(console, "log")




describe("Test", () => {

  it("is empty", () => {

    assert.equal("toto","toto");
  });

  it('Code should be 1', async () => {

    list(new InMemoryService({}));
    assert.equal(InMemoryService.prototype.getTodoList.mock.calls.length, 1);

    const args = console.log.mock.calls[0].arguments;
    assert.deepEqual(args[0], "You don't have any tasks yet.");
  })

})
