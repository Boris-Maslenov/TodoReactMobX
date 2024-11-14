import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import TodoStore from "../../Store/TodoStore";
import { genUuid } from "../../utils/genUuid";
import { formSx } from "./TodoBuilder.styles";

const TodoBuilder = () => {
  const [value, setValue] = useState("");

  const clear = () => {
    setValue("");
  };

  const onCreate = () => {
    const newTodo = {
      id: genUuid(),
      isCompleted: false,
      value,
    };

    TodoStore.addItem(newTodo);
    clear();
  };

  return (
    <Box component={"form"} sx={formSx}>
      <TextField
        sx={{ width: "50%" }}
        size="small"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="новое задание..."
      />
      <Button
        disabled={!value.trim()}
        variant="contained"
        size="small"
        onClick={onCreate}
        sx={{ height: "39px" }}
      >
        Добавить
      </Button>
    </Box>
  );
};

export default TodoBuilder;
