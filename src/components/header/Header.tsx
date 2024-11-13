import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        height: "100px",
        fontSize: "25px",
        background: "#005596",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      TODOS test app
    </Box>
  );
};

export default Header;
