export const itemBlockSx = {
  border: "1px solid #cdcdcd",
  display: "block",
  marginBottom: "7px",
};

export const buttonTextIconSx = { border: "none!important" };

export const buttonDeleteIconSx = { border: "none", marginLeft: "auto" };

export const textFieldMixin = (isCompleted: boolean) => () => ({
  textDecoration: isCompleted ? "line-through" : "none",
  ".MuiListItemText-primary": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});
