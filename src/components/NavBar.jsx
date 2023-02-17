import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import Box from "@mui/material/Box";
import LogoutIcon from '@mui/icons-material/Logout';

export default function NavBar(props) {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{background: "#6c63ff"}}>
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        WEBSITE LOGO
                    </Typography>
                    <Button color="inherit" onClick={props.handleLogout} endIcon={<LogoutIcon />}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}