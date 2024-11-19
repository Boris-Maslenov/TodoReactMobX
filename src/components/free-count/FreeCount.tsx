import { Box } from "@mui/material";
import todoStore from "../../store/todoStore";
import { observer } from "mobx-react-lite";
import { plurRus } from "../../utils/plur-rus";

const FreeCount = () => {
  const freeCount = todoStore.getFreeTodosCount;
  const freeCountProcent = todoStore.getFreeTodosProcent;
  const text = plurRus(freeCount, "задачу", "задачи", "задач");

  return (
    <Box>{`Осталось выполнить ${freeCount} ${text} | Выполнено: ${Math.floor(
      freeCountProcent
    )}%`}</Box>
  );
};

export default observer(FreeCount);
