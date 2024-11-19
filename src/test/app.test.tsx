import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import todoStore from "../store/todoStore.ts";
import { TodoDto } from "../types/types.ts";
import App from "../App.tsx";

const mockTodo = [{ id: "0", value: "new todo", isCompleted: false }];
const mockTodos = [
  { id: "0", value: "Задание 1", isCompleted: false },
  { id: "1", value: "Задание 2", isCompleted: false },
  { id: "2", value: "Задание 3", isCompleted: true },
];

const mockStoreData = (todo: TodoDto[]) => {
  todoStore.todos = todo;
};

describe("Todos list tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it("Отображение при пустом списке", async () => {
    expect(screen.getByText(/в списке нет заданий/gi)).toBeInTheDocument();
  });

  it("Добавление нового задания", async () => {
    const button = screen.getByRole("button", { name: "Добавить" });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    const input = screen.getByPlaceholderText(/новое задание/gi);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
    await userEvent.type(input, "new todo");
    expect(button).toBeEnabled();
    await userEvent.click(button);
    expect(button).toBeDisabled();
    expect(input).toHaveValue("");
    expect(screen.getByText(/new todo/gi)).toBeInTheDocument();
    expect(
      screen.getByTestId("todos-list").querySelectorAll("li")
    ).toHaveLength(1);
  });

  it("Удаление задания", async () => {
    mockStoreData(mockTodo);
    const todosWrap = await screen.findByTestId("todos-list");
    const todoElements = todosWrap.querySelectorAll("li");
    expect(todoElements).toHaveLength(1);
    const deleteButton = todoElements[0].querySelector(
      "[data-delete]"
    ) as HTMLElement;
    await userEvent.click(deleteButton);
    expect(screen.getByText(/в списке нет заданий/gi)).toBeInTheDocument();
  });

  it("Клик на чек бокс выполнено/не выполнено", async () => {
    mockStoreData(mockTodo);
    const todosWrap = await screen.findByTestId("todos-list");
    const todoElements = todosWrap.querySelectorAll("li");
    expect(todoElements).toHaveLength(1);
    expect(screen.getByText(/Осталось выполнить 1 задачу/gi));
    const checkbox = todoElements[0].querySelector("input[type=checkbox]")!;
    expect(checkbox).not.toBeChecked();
    const icon = todoElements[0].querySelector("[data-list]");
    expect(icon).toBeEnabled();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(icon).toBeDisabled();
    expect(screen.getByText(/Осталось выполнить 0 задач/gi));
  });

  it("Клик на чек бокс выполнено/не выполнено", async () => {
    mockStoreData(mockTodos);
    const todosWrap = await screen.findByTestId("todos-list");
    const todoElements = todosWrap.querySelectorAll("li");
    expect(todoElements).toHaveLength(3);
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
    {
      await userEvent.click(radios[1]);
      const todosWrap = await screen.findByTestId("todos-list");
      const todoElements = todosWrap.querySelectorAll("li");
      expect(todoElements).toHaveLength(2);
    }
    {
      await userEvent.click(radios[2]);
      const todosWrap = await screen.findByTestId("todos-list");
      const todoElements = todosWrap.querySelectorAll("li");
      expect(todoElements).toHaveLength(1);
    }
  });
});
