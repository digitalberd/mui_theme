import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";


const DesktopComponent: React.FC = () => {
    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component={NavLink}
                            to="/"
                            sx={{ flexGrow: 1 }}
                        >
                            MUI ThemeProvider
                        </Typography>
                        <Button component={NavLink} to="/" variant="text" color="inherit" >Main Page</Button>
                        <Button component={NavLink} to="/second" variant="text" color="inherit" >Second Page</Button>
                        <Button component={NavLink} to="/040" variant="text" color="inherit" >404 Page</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default DesktopComponent;
