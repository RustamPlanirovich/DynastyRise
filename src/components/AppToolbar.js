// src/components/CustomToolbar.js
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import React from 'react';

const AppToolbar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Your App Name
                </Typography>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
};


export default AppToolbar