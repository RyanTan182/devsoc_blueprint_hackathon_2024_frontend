import Toolbar from "@mui/material/Toolbar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';


export default function Header() {
    const navigate = useNavigate();
    // const p = useColorModeValue(palette.light, palette.dark);
    // const { colorMode, toggleColorMode } = useColorMode();

    // const height = "45pt";

    return (
        <Toolbar
            className="h-16 px-2 flex bg-slate-950" 
            disableGutters
        >
            <Typography variant="h6" component="div" className="text-white px-5" sx={{ flexGrow: 1 }}>
                HireMe
            </Typography>

            <Stack direction="row" spacing={3} className="pr-10">
                <Button 
                    color="outlined" 
                    disableRipple
                    onClick={() => navigate('/products')}
                    sx= {{
                        color: "white"
                    }}
                >
                    Explore
                </Button>

                <Button 
                    color="outlined" 
                    disableRipple
                    onClick={() => navigate('/createproducts')}
                    sx= {{
                        color: "white"
                    }}
                >
                    Post a service
                </Button>

                <Button 
                    color="outlined" 
                    disableRipple
                    onClick={() => navigate('/')}
                    sx= {{
                        color: "white"
                    }}
                >
                    About us
                </Button>
            </Stack> 

            <div>
                {/* <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                    <NotificationsIcon />
                </IconButton>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton> */}

                

                <IconButton>
                    <PersonIcon className="text-white"/>
                </IconButton>
            </div>
        </Toolbar>
        // <Toolbar 
        //     className="h-16 px-2 flex bg-slate-950" 
        //     disableGutters
        // >
        //     <Box className="flex items-stretch">
        //         {/* <IconButton></IconButton> */}

                



        //         {/* <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
        //             <Button color ="primary" variant="contained">
        //                 Sign up
        //             </Button>
        //             <Box className = "flex flex-end">

        //             </Box>
        //             <Button color ="primary" variant="contained" >
        //                 Login
        //             </Button>
        //         </Stack> */}

        //         <IconButton />
        //     </Box>
        // </Toolbar>
        
    )
}