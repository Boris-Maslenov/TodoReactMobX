import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import TodoStore from "../../Store/TodoStore";
import { genUuid } from "../../utils/genUuid";

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
    <Box
      component={"form"}
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100px",
        gap: "15px",
      }}
    >
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
