import { makeAutoObservable } from "mobx";
import { TodoDto } from "../types/types";

const todosDefault = [
  {
    id: "0",
    value: "Изучить Linux",
    isComplited: false,
  },
  {
    id: "1",
    value: "Изучить Docker",
    isComplited: true,
  },
];

class TodoStore {
  _todos: TodoDto[];

  constructor() {
    this._todos = todosDefault;
    makeAutoObservable(this);
  }

  get todos() {
    return this._todos;
  }

  set todos(data: TodoDto[]) {
    this._todos = data;
  }

  addItem(item: TodoDto) {
    this._todos = this._todos.concat(item);
  }

  updateItem(newTodo: TodoDto) {
    this._todos = this._todos.map((todo) =>
      todo.id === newTodo.id ? { ...todo, ...newTodo } : todo
    );
  }

  removeItem(id: string) {
    this._todos = this._todos.filter((todo) => todo.id !== id);
  }
}

const TodoStoreInstance = new TodoStore();
export default TodoStoreInstance;
