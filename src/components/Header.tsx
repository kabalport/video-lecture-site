import React, { useState } from "react";
import { Link as RouterLink} from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
});


const Header: React.FC = () => {
    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <RouterLink to="/">Video Lecture Site</RouterLink>
                    </Typography>
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="/lectures">Lectures</Button>
                    <Button color="inherit" href="/about">About</Button>
                    {isLoggedIn ? (
                        <div>
                            <span>User@email.com</span>
                            <Button style={{backgroundColor: "yellow"}} onClick={handleLoginLogout}>Logout</Button>
                        </div>
                    ) : (
                        <button onClick={handleLoginLogout}>Login</button>
                    )}

                </Toolbar>
            </AppBar>




        </div>



    );
};

export default Header;
