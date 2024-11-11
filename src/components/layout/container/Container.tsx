import { ReactNode } from "react";
import { FC } from "react";
import { Container as ContainerMUI } from "@mui/material";
import { containerSx } from "./Container.styles";

interface IProps {
  children: ReactNode;
}

export const Container: FC<IProps> = ({ children }) => {
  return <ContainerMUI sx={containerSx}>{children}</ContainerMUI>;
};
