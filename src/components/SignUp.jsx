import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MuiPhoneNumber from 'material-ui-phone-number-2'
import {useState} from "react";
import { useNavigate  } from 'react-router-dom';

function ShowError(props) {
    return (<Typography sx={{color: 'red', pt: 1}}>
        {props.text}
    </Typography>)
}

export default function SignUp() {
    const navigateTo = useNavigate();

    const [checkEmail, setCheckEmail] = useState(false);
    const [checkPasswordSymbols, setCheckPasswordSymbols] = useState(false);
    const [checkPasswordUpperCase, setCheckPasswordUpperCase] = useState(false);
    const [checkPasswordLength, setCheckPasswordLength] = useState(false);
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    const [checkConfirmPassword, setCheckConfirmPassword] = useState(false);

    const handleTermsCondition = (event) => {
        setTermsAndConditions(event.target.checked);
    }

    const handleEmail = () => {
        // https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(event.target.value)) {
            setCheckEmail(false);
        } else {
            setCheckEmail(true);
        }
    }

    const handleSubmit = () => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            confirm_password: data.get('confirm-password')
        });
        localStorage.setItem('user', JSON.stringify({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            phone: data.get('phone')
        }));

        navigateTo('/profile');
    };

    const handlePassword = () => {
        const symbols = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const passwordValue = event.target.value;

        console.log()

        if (passwordValue != passwordValue.toLowerCase()) {
            setCheckPasswordUpperCase(false);
        } else {
            setCheckPasswordUpperCase(true);
        }

        if (symbols.test(passwordValue)) {
            setCheckPasswordSymbols(false);
        } else {
            setCheckPasswordSymbols(true);
        }

        if (passwordValue.length >= 8) {
            setCheckPasswordLength(false);
        } else {
            setCheckPasswordLength(true);
        }
    }

    const handleConfirmPassword = () => {
        const password = document.getElementById('password').value;
        const confirmPassword = event.target.value;
        if (password != confirmPassword) {
            setCheckConfirmPassword(true);
        } else {
            setCheckConfirmPassword(false);
        }
    }

    return (<Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
            sx={{
                marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}
        >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            {/*SignUp Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{mt: 3}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="email"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleEmail}
                            error={checkEmail}
                        />
                        {checkEmail && <ShowError text="Email is invalid"/>}
                    </Grid>
                    <Grid item xs={12}>
                        <MuiPhoneNumber
                            fullWidth
                            name="phone"
                            label="Phone number"
                            variant="outlined"
                            defaultCountry="us"
                            autoComplete="phone"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="password"
                            onChange={handlePassword}
                            error={checkPasswordSymbols || checkPasswordUpperCase || checkPasswordLength}
                        />
                        {checkPasswordUpperCase && <ShowError text="Password must have at least 1 uppercase letter"/>}
                        {checkPasswordSymbols && <ShowError text="Password must contain special symbols"/>}
                        {checkPasswordLength && <ShowError text="Password length should be more than 8 letters"/>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="confirm-password"
                            label="Confirm password"
                            type="password"
                            id="confirm-password"
                            autoComplete="confirm-password"
                            onChange={handleConfirmPassword}
                            error={checkConfirmPassword}
                        />
                        {checkConfirmPassword && <ShowError text="Make sure the password matches"/>}
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel required control={<Checkbox name="terms" id="terms"
                                                                      onClick={handleTermsCondition}/>}
                                          label="I accept the terms and conditions"/>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    disabled={!termsAndConditions || checkConfirmPassword || checkPasswordSymbols || checkPasswordUpperCase || checkPasswordLength || checkEmail}
                    id="submit-btn"
                >
                    Sign Up
                </Button>
            </Box>
        </Box>
    </Container>);
}