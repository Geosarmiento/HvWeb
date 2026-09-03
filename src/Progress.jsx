import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%'  } }>
      <LinearProgress aria-label="Loading…" color="#0000"  />
       
    </Box>
  );
}