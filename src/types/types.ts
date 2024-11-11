export interface TodoDto {
  id: string;
  value: string;
  isComplited: boolean;
}

export interface TodoListItemProps {
  data: TodoDto;
  onDelete: () => void;
  onRemove: () => void;
  onEdit: () => void;
  onComplite: () => void;
}
