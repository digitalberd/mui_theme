import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const SecondPage: React.FC = () => {
    return(
        <>
            <CssBaseline />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Paper />
            <Typography variant="h1" gutterBottom>
                Second page
            </Typography>
            <Button
                variant="contained"
                sx={{ width: 200, padding: 1, margin: 2 }}
            >Button</Button>
    </Box>
    </>
)
}

export default SecondPage;
