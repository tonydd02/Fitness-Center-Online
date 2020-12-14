import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react'
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
import 'bootstrap/dist/css/bootstrap.css';

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

	const [isCollapsed, setIsCollapsed] = useState(false);
	const handleCollapse = () => setIsCollapsed(!isCollapsed);
	return(
		<div className="body">
		  <>
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-secondary">
			  <div className="container">
			  <a className="navbar-brand" href="#"><img className="logo" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/131332214_385203949381880_8224267459901597667_n.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=AQyHzYI9HAkAX-x7eVJ&_nc_ht=scontent-lax3-1.xx&oh=1c4533dfa5d6745e11084bae57dc4464&oe=5FFA7BE4" alt="Treadmills at JWC"/></a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse"
			  data-target="#navbarResponsive" aria-controls="navbarResponsive"  aria-expanded={!isCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleCollapse}>
				  <span className="navbar-toggler-icon"></span>
				</button>
			  <div className={`${isCollapsed? "collapse":""} "navbar-collapse"`} id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
				<li className="nav-item active">
				  <a className="nav-link" href="http://localhost:3000">Sign In</a>
				</li>
				</ul>
			  </div>
			  </div>
			</nav>
			<div className="head">
			</div>
			<div className="contain">
			  <div className="contain">
				<div className="contain">
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
								<Paper elevation={10} className={classes.paper}>
								<Grid container spacing={3}>
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
						</div>
					</Container>
				</div>
			  </div>
			</div>
			<div className="blank">
			</div>
			</>
			<style jsx>{`
				  Typography {
					background: #3399ff;
					color: #ffffff;
				  }
				  .contain{
				  	  background: transparent;
				  }
				  .logo{
					height: 70px;
				  }
				  .body{
					background: url(https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/130220227_384431162792492_8983059439161377899_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=yViejv2y34sAX_pj0He&_nc_ht=scontent-lax3-2.xx&oh=204583bd60d5b5fffc95cdf3c3bcaa4d&oe=5FFC29B7) repeat center center fixed;
					background-size: cover;
				  }
				  .head{
					height: 40px;
					visibility: hidden;
				  }
				  .blank{
					height: 500px;
					visibility: hidden;
				  }`
				}
			</style>
		</div>
  );
}


