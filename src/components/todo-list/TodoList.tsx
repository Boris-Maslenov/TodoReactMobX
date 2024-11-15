import { FC } from "react";
import { observer } from "mobx-react-lite";
import List from "@mui/material/List";
import { TodoListItem } from "../todo-list-item/TodoListItem";
import { TodoDto } from "../../types/types";
import SimpleBar from "simplebar-react";
import todoStore from "../../store/todoStore";
import { simplebarSx } from "./TodoList.styles";

const TodoList: FC = () => {
  const todos = todoStore.filteredTodos;

  const onEdit = (data: TodoDto) => {
    todoStore.updateItem(data);
  };

  const onDelete = (id: string): void => {
    todoStore.removeItem(id);
  };

  return (
    <SimpleBar style={simplebarSx}>
      {todos.length > 0 ? (
        <List>
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              data={todo}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </List>
      ) : (
        "в списке нет заданий"
      )}
    </SimpleBar>
  );
};

export default observer(TodoList);
