import { FC } from "react";
import {
  ButtonGroup,
  Button,
  Stack,
  Checkbox,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ItemTextIcon, RemoveIcon } from "../icons";
import { TodoListItemProps } from "../../types/types";
import {
  itemBlockSx,
  buttonTextIconSx,
  buttonDeleteIconSx,
  textFieldMixin,
} from "./TodoListItem.styles";

export const TodoListItem: FC<TodoListItemProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  const { id, value, isCompleted } = data;

  return (
    <ListItem disablePadding sx={itemBlockSx}>
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
          <Button disabled={isCompleted} sx={buttonTextIconSx}>
            <ItemTextIcon />
          </Button>
        </ButtonGroup>
        <ListItemText sx={textFieldMixin(isCompleted)}>{value}</ListItemText>
        <Button onClick={() => onDelete(id)} sx={buttonDeleteIconSx}>
          <RemoveIcon />
        </Button>
      </Stack>
    </ListItem>
  );
};
