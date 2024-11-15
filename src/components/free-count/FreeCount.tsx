import { Box } from "@mui/material";
import TodoStore from "../../store/TodoStore";
import { observer } from "mobx-react-lite";
import { plurRus } from "../../utils/plur-rus";

const FreeCount = () => {
  const freeCount = TodoStore.getFreeTodosCount;
  const freeCountProcent = TodoStore.getFreeTodosProcent;
  const text = plurRus(freeCount, "задачу", "задачи", "задач");

  return (
    <Box>{`Осталось выполнить ${freeCount} ${text} | Выполнено: ${freeCountProcent}%`}</Box>
  );
};

export default observer(FreeCount);
