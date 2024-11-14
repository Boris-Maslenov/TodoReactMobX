import { FC } from "react";
import { observer } from "mobx-react-lite";
import List from "@mui/material/List";
import { TodoListItem } from "../todo-list-item/TodoListItem";
import TodoStore from "../../Store/TodoStore";
import { TodoDto } from "../../types/types";
import SimpleBar from "simplebar-react";
import { simplebarSx } from "./TodoList.styles";

const TodoList: FC = () => {
  const todos = TodoStore.filteredTodos;

  const onEdit = (data: TodoDto) => {
    TodoStore.updateItem(data);
  };

  const onDelete = (id: string): void => {
    TodoStore.removeItem(id);
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
