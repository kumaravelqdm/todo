import React from "react";
import { LoginComponent } from './component';
import { Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from "../../route/routes"
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

export const SignIn = () => {
    const navigate = useNavigate()

    const submit = (state) => {
        if (state.email === 'root@gmail.com'
            && state.password === 'admin@12345') {
                  navigate(AppRoutes.home)
        }else{
            enqueueSnackbar('Invalid Credentials!!!', {
                variant: 'error',
                autoHideDuration: 5000
              })
        }
    }
    return <div style={{ backgroundColor: "#d3d3d31a", height: "100vh" }}>
        <SnackbarProvider />
        <Grid container spacing={2} style={{ height: "100vh" }}>
            <Grid item md={4} sm={6} xs={12} style={{ margin: "auto" }}>
                <Paper style={{ padding: 20 }}>
                    <LoginComponent
                        title='Sign in'
                        field={[
                            {
                                id: 0,
                                label: 'Email',
                                type: 'email',
                                placeholder: 'Enter your email',
                                fullWidth: true,
                                key: 'email',
                                value: ''
                            },
                            {
                                id: 1,
                                label: 'Password',
                                type: 'password',
                                placeholder: 'Enter your password',
                                fullWidth: true,
                                key: 'password',
                                value: ''
                            },
                            {
                                id: 2,
                                type: 'forgotpassword',
                                key: 'forgotpassword',
                                value: ''
                            },
                            {
                                id: 3,
                                type: 'button',
                                variant: 'contained',
                                color: 'primary',
                                actionBtnName: 'SIGN IN',
                                fullWidth: true
                            }
                        ]}
                        onSubmit={submit}
                    />
                </Paper>
            </Grid>
        </Grid>
    </div>
}
