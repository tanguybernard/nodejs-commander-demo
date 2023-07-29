
export default class InMemoryService {

  constructor(conf) {
    this.conf = conf;
  }

  getTodoList(){

    return this.conf.get('todo-list')
  }

}
