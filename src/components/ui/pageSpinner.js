import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function PageSpinner() {
    return (
        <Box className="flex justify-center py-4">
            <CircularProgress />
        </Box>
    );
};

export default PageSpinner;