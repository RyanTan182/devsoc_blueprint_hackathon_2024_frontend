import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
    return (
        <Box className = 'p-8'>
            <Box className='h-8 w-[300px] bg-white flex' sx={{borderRadius: 2, borderColor: 'white'}}>
                <input className='text-black w-[300px] border-0'/>

                <Box className='ml-auto bg-violet-950 p-1'  sx={{border: 1, borderRadius: 2}}>

                    <SearchIcon />
                </Box>
            </Box>
        </Box>
    )
};

export default SearchBar;