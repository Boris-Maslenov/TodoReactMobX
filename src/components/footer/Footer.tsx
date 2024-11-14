import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import Filters from "../filters/Filters";
import FreeCount from "../free-count/FreeCount";
import { footerSx } from "./Footer.styles";

const Footer = () => {
  return (
    <Box sx={footerSx}>
      <FreeCount />
      <Filters />
    </Box>
  );
};

export default observer(Footer);
