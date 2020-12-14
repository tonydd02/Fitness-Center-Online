import Link from 'next/link'
import Router from 'next/router'
import { connectToDatabase } from '../util/mongodb'
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { signIn, signOut, useSession, getSession } from 'next-auth/client';

function User ({user}) {

    function time(totalTime) {
        console.log(totalTime)
        var days = Math.floor(totalTime / 24 / 1000 / 60 / 60)
        totalTime -= days * 24 * 1000 * 60 * 60
        var hours = Math.floor(totalTime / 1000 / 60 / 60)
        totalTime -= hours * 1000 * 60 * 60
        var mins = Math.floor(totalTime / 1000 / 60)
        totalTime -= mins * 1000 * 60
        var secs = Math.floor(totalTime / 1000)
        var ms = totalTime - secs / 1000
        return (
            (days <= 9 ? " " : "") + days + " day " + (hours <= 9 ? " " : "") + hours + " h " + (mins <= 9 ? " " : "") + mins + " min " + (secs <= 9 ? " " : "") + secs + " s "
        )
    }

    console.log(user.totalTime)
    const totaltime = time(user.totalTime)
    const classes = useStyles();
    return (
        <div>
            <Grid id="top_row" container spacing={24}>
                <Grid item xs={5} style={{backgroundColor: '#b3e5fc'}}>
                    <Paper className={classes.paper}>
                        {user.nickname}
                    </Paper>
                </Grid>
                <Grid item xs={7} style={{backgroundColor: '#fff59d'}}>
                    <Paper className={classes.paper}>
                        {totaltime}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

/*new page and a chart*/
/*may link to searching */
export default function ranking ({data}){
	const [isCollapsed, setIsCollapsed] = useState(false);
    const handleCollapse = () => setIsCollapsed(!isCollapsed);
	const [ session, loading ] = useSession();
	return(
	session ? (
    <div className="body">
      <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-secondary">
          <div className="container">
          <a className="navbar-brand" href="./"><img className="logo" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/131332214_385203949381880_8224267459901597667_n.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=AQyHzYI9HAkAX-x7eVJ&_nc_ht=scontent-lax3-1.xx&oh=1c4533dfa5d6745e11084bae57dc4464&oe=5FFA7BE4" alt="Treadmills at JWC"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarResponsive" aria-controls="navbarResponsive"  aria-expanded={!isCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleCollapse}>
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className={`${isCollapsed? "collapse":""} "navbar-collapse"`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
			 <li className="nav-item">
              <Link href="./rank"><a className="nav-link">Rank
                </a>
			  </Link>
            </li>
            <li className="nav-item">
              <Link href="./search">
				<a className="nav-link">Search
				</a>
			  </Link>
            </li>
            <li className="nav-item">
              <Link href="./friends"><a className="nav-link">Friends</a></Link>
            </li>
            <li className="nav-item active">
				<Button variant="contained" color="primary" onClick={signOut}>Sign Out</Button>
            </li>
            </ul>
          </div>
          </div>
        </nav>
        <div className="head">
        </div>
        <div className="container">
          <div className="card border-0 shadow my-5">
            <div className="card-body p-5">
              <div>
                {data.map((user) => (
                    <User className="user" key={user._id} user={user}/>
                ))}
            </div>
            </div>
          </div>
        </div>
        <div className="head">
        </div>
        </>
        <style jsx>{`
			  .user {
				margin-top: 10px;
			  }
              .logo{
                height: 70px;
              }
              .body{
                background: url(https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/130220227_384431162792492_8983059439161377899_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=yViejv2y34sAX_pj0He&_nc_ht=scontent-lax3-2.xx&oh=204583bd60d5b5fffc95cdf3c3bcaa4d&oe=5FFC29B7) repeat center center fixed;
                background-size: cover;
              }
              .head{
                height: 80px;
                visibility: hidden;
              }
              .blank{
                height: 700px;
                visibility: hidden;
              }`
            }
        </style>
    </div>) : (
	<div className="body">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-secondary">
          <div className="container">
          <a className="navbar-brand" href="#"><img className="logo" src="/images/treadmills.png" alt="Treadmills at JWC"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarResponsive" aria-controls="navbarResponsive"  aria-expanded={!isCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleCollapse}>
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className={`${isCollapsed? "collapse":""} "navbar-collapse"`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
				<li className="nav-item">
				  <Link href="#"><a className="nav-link">Sign In
					</a>
				  </Link>
				</li>
				<li className="nav-item active">
				  <Link href="../signUp/signup"><a className="nav-link">Sign Up</a></Link>
				</li>
            </ul>
          </div>
          </div>
        </nav>
        <div className="head">
        </div>
        <div className="container">
          <div className="card border-0 shadow my-5">
            <div className="card-body p-5">
			  <p>You are not permitted to see this page. Please Sign in or Sign up...</p>
			  <button className="signin" onClick={signIn} > <p className="text">Sign in</p></button>
			  <button className="signUp" onClick={() => {Router.push("./signUp/signup")}}>
				{/* <Link href="./signUp/signup"> */}
				<p className="text">
				  Sign up
				</p>
				{/* </Link> */}
			  </button>
            </div>
          </div>
        </div>
        <div className="blank">
        </div>
        <style jsx>{`
			.logo{
			height: 70px;
			}
			.body{
			background: url(/images/JWC.jpg) repeat center center fixed;
			background-size: cover;
			}
			.head{
			height: 80px;
			visibility: hidden;
			}
			.blank{
			height: 300px;
			visibility: hidden;
              }
			.signUp {
				margin-left: 20px;
				background-color: #2389EF;
				border: none;
				height: 35px;
				width 100px;
			}
			.signUp:hover {
				background-color: #318AE2;
			}
			.signin {
				margin-left: 10px;
				background-color: #2389EF;
				border: none;
				height: 35px;
				width: 100px;
			}
			.signin:hover {
				background-color: #318AE2;
			}
			p {
				color: #00000
			}`
            }
        </style>
    </div>
	)
  )
}

/* Get data from mongodb Database so that it can be displayed */
export async function getServerSideProps(context){
    const { db } = await connectToDatabase()
    const data = await db
        .collection("User")
        .find()
        .sort({totalTime: -1})
        .toArray()
    return {
        props: {
            data: JSON.parse(JSON.stringify(data)),
            session: await getSession(context)
        }
    }
}

/* Styling */
const useStyles = makeStyles((theme) => ({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: `${theme.spacing.unit * 15}px`
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: "center",
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap",
        marginBottom: theme.spacing.unit
    },
    divider: {
        margin: `${theme.spacing.unit * 15}px 0`
    }
}))
