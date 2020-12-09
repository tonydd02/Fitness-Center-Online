import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";

export default function loginPage() {
    console.log("inside login page")

    const initialFormData = Object.freeze({
        usr_email: "",
        login_password: ""
    });

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData.usr_email);
        // ... submit to API or something
        fetch(
            "http://localhost:3000/api/writeToDatabase",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.usr_email,
                    _id: "useless",
                    likedBy: "useless",
                    action: "signup",
                    password: formData.login_password,
                    nickname: formData.user_nickname,
                }),
            }
        ).then(() => {
            //window.alert("Successfully Signed Up! Please Go back and log in...")
            console.log("loading...")
            Router.push("http://localhost:3000")
        })
    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div>
                <top >
                <Grid spacing={7}>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                </Grid>
                </top>
                <form id="signup">
                    <Paper elevation={0} >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="example@xxx.xxx"
                                name="usr_email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="login_password"
                                label="8-digit"
                                type="inputStr"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="user_nickname"
                                label="preferred_name"
                                autoComplete="nickname"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    {/*<Grid container spacing={2}>*/}
                    {/*</Grid>*/}
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href=".." variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                    </Paper>
                </form>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Sign Up
                </Button>
                <style jsx> {`
                Typography {
                background: #3399ff;
                color: #ffffff;
                }
                `}</style>
            </div>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({

    paper: {
        margin: "auto",
        maxWidth: 400,
        padding: theme.spacing(3),
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    top: {
        margin:"auto",
        padding: theme.spacing(3),
    }
    // avatar: {
    //     margin: theme.spacing(1),
    //     backgroundColor: theme.palette.secondary.main,
    // },
    // form: {
    //     //width: '100%', // Fix IE 11 issue.
    //     //marginTop: theme.spacing(3),
    // },
    // submit: {
    //     margin: theme.spacing(3, 0, 2),
    // },
}));

