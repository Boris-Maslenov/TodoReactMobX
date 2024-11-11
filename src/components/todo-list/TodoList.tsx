import { FC } from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import { TodoListItem } from "../todo-list-item/TodoListItem";
import todoStore from "../../Store/TodoStore";

export const TodoList: FC = () => {
  const todos = todoStore.todos;
  return (
    <Box>
      <List>
        {todos.map((todo) => (
          <TodoListItem data={todo} />
        ))}
      </List>
    </Box>
  );
};
