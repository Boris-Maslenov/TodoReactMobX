import { Box, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import TodoStore from "../../Store/TodoStore";
import { observer } from "mobx-react-lite";
import { Filter } from "../../Store/TodoStore";

const Filters = () => {
  const activeFilter = TodoStore.activeFilter;
  const filtersDisabled = !TodoStore.todos.length;

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as Filter;
    TodoStore.activeFilter = value;
  };

  return (
    <Box>
      <RadioGroup
        row
        name="filters"
        value={activeFilter}
        onChange={handleFilterChange}
      >
        {TodoStore.filters.map((filter, i) => (
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
