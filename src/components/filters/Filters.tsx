import { Box, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import todoStore from "../../store/todoStore";
import { observer } from "mobx-react-lite";
import { Filter } from "../../types/types";

const Filters = () => {
  const activeFilter = todoStore.activeFilter;
  const filtersDisabled = !todoStore.todos.length;

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as Filter;
    todoStore.activeFilter = value;
  };

  return (
    <Box>
      <RadioGroup
        row
        name="filters"
        value={activeFilter}
        onChange={handleFilterChange}
      >
        {todoStore.filters.map((filter, i) => (
          <FormControlLabel
            key={filter + i}
            value={filter}
            control={<Radio />}
            label={filter}
            disabled={filtersDisabled}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default observer(Filters);
