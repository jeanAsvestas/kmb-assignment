import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const SearchBox = (props: {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { setSearchInput } = props;
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTimeout(() => {
            setSearchInput(event.target.value);
          }, 300);
        }}
      />
    </Box>
  );
};
