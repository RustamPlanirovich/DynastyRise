// src/components/CustomToolbar.js
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import React from 'react';
import {useHistory} from "react-router-dom";

const AppToolbar = () => {
    const history = useHistory();
    const logout = () => {
        // Сохраните состояние авторизации в localStorage
        localStorage.setItem('authenticated', 'false');
        history.push('/login');
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Your App Name
                </Typography>
                <Button color="inherit" onClick={() => logout()}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};


export default AppToolbar