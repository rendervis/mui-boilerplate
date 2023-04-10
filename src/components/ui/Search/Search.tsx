import { IconSearch} from '@tabler/icons'
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';

const Search = () => (
  <Card sx={{ p: 2 }}>
    <OutlinedInput
      defaultValue=""
      fullWidth
      placeholder="Search..."
      startAdornment={(
        <InputAdornment position="start">
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <IconSearch />
          </SvgIcon>
        </InputAdornment>
      )}
      sx={{ maxWidth: 500 }}
    />
  </Card>
);


export default Search
