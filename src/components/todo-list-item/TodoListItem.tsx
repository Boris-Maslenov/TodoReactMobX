import { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ButtonGroup, Button, Stack, Checkbox } from "@mui/material";
import { ItemTextIcon, RemoveIcon } from "../icons";
import { TodoListItemProps } from "../../types/types";

export const TodoListItem: FC<TodoListItemProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  const { id, value, isCompleted } = data;
  return (
    <ListItem
      disablePadding
      sx={{
        border: "1px solid #cdcdcd",
        display: "block",
        marginBottom: "7px",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <ButtonGroup>
          <Checkbox
            checked={isCompleted}
            onChange={(e) => onEdit({ ...data, isCompleted: e.target.checked })}
            size="small"
          />
          <Button disabled={isCompleted} sx={{ border: "none!important" }}>
            <ItemTextIcon />
          </Button>
        </ButtonGroup>
        <ListItemText
          sx={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {value}
        </ListItemText>
        <Button
          onClick={() => onDelete(id)}
          sx={{ border: "none", marginLeft: "auto" }}
        >
          <RemoveIcon />
        </Button>
      </Stack>
    </ListItem>
  );
};
