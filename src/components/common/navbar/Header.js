import Toolbar from "@mui/material/Toolbar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { LOGOUT_API } from "../../../requests/requestConfig";
import { authActions } from "../../../store/authSlice";
import { userActions } from "../../../store/userSlice";
import { Image } from "@mui/icons-material";


export default function Header(props) {
    const { username, isAuthenticated } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const p = useColorModeValue(palette.light, palette.dark);
    // const { colorMode, toggleColorMode } = useColorMode();

    // const height = "45pt";

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () =>  {
        setAnchorEl(null);
    }
    
    const handleLogin = () => {
        navigate("/login");
        setAnchorEl(null);
    };

    const handleSignUp = () => {
        navigate("/account/register");
        setAnchorEl(null);
    };

    const handleClickLogo = () => {
        navigate("/");
    }

    const handleSignOut = async() => {
        try {
            const res = await axios.post(LOGOUT_API);

            if (res.status === 200) {
                // dispatch(snackbarActions.setSnackbarState({
                //     open: true,
                //     type: "success",
                //     message: "Successfully logged out."
                // }))
    
                dispatch(authActions.logout());

                dispatch(userActions.reinitialize());

                navigate("/");
            }
        } catch(err) {
            // dispatch(snackbarActions.setSnackbarState({
            //     open: true , 
            //     type: "error", 
            //     message: "Oops... Something went wrong."
            // }))
        }
    };

    return (
        <Toolbar
            className="h-16 px-2 flex bg-slate-950" 
            sx={{ 
                borderBottom: 1,
                borderColor: "white"
             }}
            disableGutters
        >
            <Typography onClick={handleClickLogo} variant="h6" component="div" className="text-white px-5" sx={{ flexGrow: 1 }}>
                HireMe
            </Typography>
            
            {/* <Box onClick={handleClickLogo} className="text-white px-5" sx={{ flexGrow: 1 }}>
                <Button className="hover:bg-white ml-1 flex-none" disableRipple>
                    <div className="ml-16px">
                        <Image 
                            src="/public/logo.png"
                            alt="HireMe"
                            width={130}
                            height={70}
                        />
                    </div>
                </Button>
            </Box> */}


            <Stack direction="row" spacing={3} className="pr-10">
                <Button 
                    color="outlined" 
                    disableRipple
                    onClick={() => navigate('/explore')}
                    sx= {{
                        color: "white"
                    }}
                >
                    Explore
                </Button>

                <Button 
                    color="outlined" 
                    disableRipple
                    onClick={() => navigate('/product/create')}
                    sx= {{
                        color: "white"
                    }}
                >
                    Post a service
                </Button>

                <Button 
                    color="outlined" 
                    disableRipple
                    onClick={() => navigate('/about-us')}
                    sx= {{
                        color: "white"
                    }}
                >
                    About us
                </Button>
            </Stack> 

            <div>
                <IconButton
                    className="normal-case text-white h-56px flex-none"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <PersonIcon className="text-white"/>
                </IconButton>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                
                    {isAuthenticated ?
                        <MenuItem 
                            onClick={handleSignOut}   
                            sx={{ 
                                justifyContent: "center",
                                "&:hover": {
                                    backgroundColor: "white"
                                },
                                py: 1
                            }}
                            divider={isAuthenticated ? false : true}
                            disableRipple
                        >
                            <Button variant="outlined" onClick={handleSignOut}>
                                Sign out
                            </Button>
                        </MenuItem> :

                        <MenuItem 
                            onClick={handleLogin}   
                            sx={{ 
                                justifyContent: "center",
                                "&:hover": {
                                    backgroundColor: "white"
                                },
                                py: 1
                            }}
                            divider={isAuthenticated ? false : true}
                            disableRipple
                        >
                            <Button variant="outlined" >
                                Login
                            </Button>
                        </MenuItem>
                    }

                    {!isAuthenticated &&
            
                        <MenuItem 
                            onClick={handleSignUp}   
                            sx={{ 
                                justifyContent: "center",
                                "&:hover": {
                                    backgroundColor: "white"
                                } 
                            }}
                            disableRipple
                        >
                            <Button variant="contained" >
                                Sign Up
                            </Button>
                        </MenuItem>               

                    }
                </Menu>
            </div>
        </Toolbar>
    )
}