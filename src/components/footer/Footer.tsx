import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import Filters from "../filters/Filters";
import FreeCount from "../free-count/FreeCount";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "50px",
        display: "flex",
        maxWidth: "calc((100% / 3) * 2)",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FreeCount />
      <Filters />
    </Box>
  );
};

export default observer(Footer);
