import * as React from 'react';
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import NavBar from "./NavBar.jsx";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import EmailIcon from '@mui/icons-material/Email';
import {Card, CardContent, Chip, Divider, List, ListItem, ListItemText, Stack} from "@mui/material";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Profile() {
    const [userData, setUserData] = useState(null);


    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            if (!localStorage.getItem('user')) {
                alert('Kindly, login first to access this webpage.');
                navigate('/');
                window.location.reload()
            }
            console.log(JSON.parse(localStorage.getItem('user')));
            setUserData(JSON.parse(localStorage.getItem('user')));
        };
    }, []);


    function handleLogout() {
        localStorage.clear();
        window.location.reload()
    }

    return (<div>
        <NavBar handleLogout={handleLogout}/>
        {userData && <Box sx={{p: 5}}>
            <Grid container alignContent="center" xs={12} margin="auto">
                <Grid item sm={6}>
                    <img src="/background.svg" alt="Logo" style={{width: '100%'}}/>
                </Grid>
                <Grid item sm={6} margin="auto">
                    <Box component="form">
                        <Card sx={{maxWidth: 500, margin: "auto"}}>
                            <CardContent>
                                <Typography variant="overline" style={{fontSize: "20px", color: "#6c63ff"}}
                                            gutterbottom>Profile</Typography>
                                <Divider variant="outlined"/>
                                <ListItem>
                                    <AccountCircleIcon/>&emsp;
                                    <ListItemText primary={userData.firstName + ' ' + userData.lastName}/>
                                </ListItem>
                                <Divider variant="inset"/>
                                <ListItem>
                                    <EmailIcon/>&emsp;
                                    <ListItemText primary={userData.email}/>
                                </ListItem>
                                <Divider variant="inset"/>
                                {userData.phone && <ListItem>
                                    <PermPhoneMsgIcon/>&emsp;
                                    <ListItemText primary={userData.phone}/>
                                </ListItem>}
                                <Divider variant="outlined"/>
                                <Typography variant="overline" style={{fontSize: "15px", color: "#6c63ff"}}
                                            gutterbottom
                                            component="div">Skills</Typography>
                                <Stack direction="row" spacing={1}>
                                    <Chip color="success" label="Python"/>
                                    <Chip label="Java"/>
                                    <Chip label="Cloud"/>
                                    <Chip label="React"/>
                                </Stack>

                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>}
    </div>);
}
