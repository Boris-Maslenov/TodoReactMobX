import { makeAutoObservable } from "mobx";
import { TodoDto, Filter } from "../types/types";

class TodoStore {
  _todos: TodoDto[] = [];
  _filters: Filter[] = ["ALL", "ACTIVE", "COMPLETED"];
  _activeFilter: Filter = "ALL";

  constructor() {
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

  get getFreeTodosCount() {
    return this.filteredTodos.filter((todo) => !todo.isCompleted).length;
  }

  get getFreeTodosProcent() {
    if (this.filteredTodos.length === 0) return 0;

    const complitedCount = this.filteredTodos.filter(
      (todo) => todo.isCompleted
    ).length;

    return (complitedCount * 100) / this.filteredTodos.length;
  }

  get filters() {
    return this._filters;
  }

  get activeFilter() {
    return this._activeFilter;
  }

  set activeFilter(filter: Filter) {
    this._activeFilter = filter;
  }

  get filteredTodos() {
    if (this._activeFilter === "ALL") return this._todos;

    return this.todos.filter((todo) =>
      this._activeFilter === "COMPLETED" ? todo.isCompleted : !todo.isCompleted
    );
  }
}

export default new TodoStore();
