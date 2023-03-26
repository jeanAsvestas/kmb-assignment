import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SortingOption } from '../../model/main.types';

export const SortingMenu = (props: {
  setSortingOption: React.Dispatch<React.SetStateAction<SortingOption>>;
}) => {
  const { setSortingOption } = props;
  const [option, setOption] = useState<SortingOption>('newest-first');
  // const [sortingOption, setSortingOption] = useState
  const handleChange = (event: SelectChangeEvent) => {
    const selectedOption = event.target.value as SortingOption;
    setSortingOption(selectedOption);
    setOption(selectedOption);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Choose Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={'newest-first'}>Newest first</MenuItem>
          <MenuItem value={'oldest-first'}>Oldest first</MenuItem>
          <MenuItem value={'grouped-source'}>Grouped by source</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
