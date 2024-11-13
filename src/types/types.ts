export interface TodoDto {
  id: string;
  value: string;
  isCompleted: boolean;
}

export interface TodoListItemProps {
  data: TodoDto;
  onDelete: (id: string) => void;
  onEdit: (data: TodoDto) => void;
}

export type Filter = "ALL" | "ACTIVE" | "COMPLETED";
