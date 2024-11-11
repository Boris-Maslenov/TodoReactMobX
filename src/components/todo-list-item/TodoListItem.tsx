import { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { TodoListItemProps } from "../../types/types";

export const TodoListItem: FC<TodoListItemProps> = ({
  data,
  onDelete,
  onRemove,
  onEdit,
  onComplite,
}) => {
  const { id, value, isComplited } = data;
  return (
    <ListItem disablePadding>
      <ListItemText>{value}</ListItemText>
    </ListItem>
  );
};
