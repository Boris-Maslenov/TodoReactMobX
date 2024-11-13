import { Box } from "@mui/material";
import TodoStore from "../../Store/TodoStore";
import { observer } from "mobx-react-lite";

const FreeCount = () => {
  const freeCount = TodoStore.getFreeTodosCount;

  return <Box>{freeCount} Items left</Box>;
};

export default observer(FreeCount);
