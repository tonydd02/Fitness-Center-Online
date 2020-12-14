import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, SelectProps } from '@material-ui/core';
import { Field, Form, Formik, useField, useFormikContext } from 'formik';
import FormHelperText from '@material-ui/core/FormHelperText';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import { signIn, signOut, useSession, getSession } from 'next-auth/client';


var day=0;
var time=0;

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "auto",
    maxWidth: 400,
    padding: theme.spacing(3)
  },
}));

async function handleClick(){
  if(day==0||time==0){
    alert("Please select both day and time")
  }
  else{
    await fetch(URL, )
    alert("Searching for occupancy on "+day+" "+time);






    // const item= db.collection("History").findOne(
    //   {"Day":day,"Time":time},
    //   {"Usage":1}
    // );
    // if(result!=null){
    //   const result=item.Usage;
    //   alert("The usage on this day is: "+result);
    // }
    // else{
    //   alert("Sorry, equipment usage on this day is unavailable");
    // }

//////
  }
}
///////
// function handleClick(){
//   const result= db.collection("History").findOne(
//     {Day:day,Time:time},
//     {Usage:1}
//   );
//}
  
  
////////////////////////////////////////////////////////

const handleSelectDay = (event) => {
    day=event.target.value;
    console.log(day);
    //console.log(event.target.value); 
}

const handleSelectTime = (event) => {
    time=event.target.value;
    console.log(time);
    //console.log(event.target.value); 
}

export default function Home(){
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => setIsCollapsed(!isCollapsed);
  const [ session, loading ] = useSession()
  const classes=useStyles();
  return (
	session ? (
    <div className="body">
      <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-secondary">
          <div className="container">
          <a className="navbar-brand" href="../"><img className="logo" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/131332214_385203949381880_8224267459901597667_n.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=AQyHzYI9HAkAX-x7eVJ&_nc_ht=scontent-lax3-1.xx&oh=1c4533dfa5d6745e11084bae57dc4464&oe=5FFA7BE4" alt="Treadmills at JWC"/></a>
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
        <Formik initialValues={{}} onSubmit={()=>{}}>
				  {({values})=>(
					<Form>
					  <Paper elevation={5} className={classes.paper}>
						<Grid container spacing = {3}>
						  <Grid item xs={12} sm={6}>
							<FormControl fullWidth variant="outlined">
							  <InputLabel id="search-day">Day</InputLabel>
							  <Select
								labelId="search-day"
								label="Day"
								onChange={handleSelectDay}
							  >
								<MenuItem value="">
								  <em>None</em>
								</MenuItem>
								<MenuItem value={"Sunday"}>Sunday</MenuItem>
								<MenuItem value={"Monday"}>Monday</MenuItem>
								<MenuItem value={"Tuesday"}>Tuesday</MenuItem>
								<MenuItem value={"Wednesday"}>Wednesday</MenuItem>
								<MenuItem value={"Thursday"}>Thursday</MenuItem>
								<MenuItem value={"Friday"}>Friday</MenuItem>
								<MenuItem value={"Saturday"}>Saturday</MenuItem>
							  </Select>
							</FormControl>
						  </Grid>
						  <Grid item xs={12} sm={6}>
							<FormControl fullWidth variant="outlined">
							  <InputLabel id="search-time">Time</InputLabel>
							  <Select
								labelId="search-time"
								label="Time"
								onChange={handleSelectTime}
							  >
								<MenuItem value="">
								  <em>None</em>
								</MenuItem>
								<MenuItem value={"8-10"}>8am-10am</MenuItem>
								<MenuItem value={"10-12"}>10am-12pm</MenuItem>
								<MenuItem value={"12-14"}>12pm-2pm</MenuItem>
								<MenuItem value={"14-16"}>2pm-4pm</MenuItem>
								<MenuItem value={"16-18"}>4pm-6pm</MenuItem>
								<MenuItem value={"18-20"}>6pm-8pm</MenuItem>
								<MenuItem value={"20-22"}>8pm-10pm</MenuItem>
							  </Select>
							</FormControl>
						  </Grid>
						  <Grid item xs={12}>
							<Button type="submit" variant="contained" 
							  color="primary" fullWidth id="Search" 
							  onClick={()=>fetch(
								"http://localhost:3000/api/searchHistory",{
								  method:'POST',
								  headers: {
									'Content-Type': 'application/json',
								  },
								  body: JSON.stringify({
									day:day,
									time:time,
								  }),
								}
							  ).then(function(body){
							  return body.text()
							  }
							  ).then(function(data){
								alert(data)
							  })
							  }
							  >Search for Occupancy</Button>
						  </Grid>
						</Grid>
					  </Paper>
					</Form>
				  )}
				</Formik>
        <div className="blank">
        </div>
        </>
        <style jsx>{`
              .logo{
                height: 70px;
              }
              .body{
                background: url(https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/130220227_384431162792492_8983059439161377899_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=yViejv2y34sAX_pj0He&_nc_ht=scontent-lax3-2.xx&oh=204583bd60d5b5fffc95cdf3c3bcaa4d&oe=5FFC29B7) repeat center center fixed;
                background-size: cover;
              }
              .head{
                height: 150px;
                visibility: hidden;
              }
              .blank{
                height: 350px;
                visibility: hidden;
              }`
            }
        </style>
    </div>):(
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
				<li className="nav-item active">
				  <Link href="../signUp/signup"><a className="nav-link">Sign Up</a></Link>
				</li>
				<li className="nav-item">
				  <Button variant="contained" color="primary" onClick={signIn}>Sign In</Button>
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
  );
}


// function HomePage() {
//   return <div>Welcome to Next.js!</div>
// }

// export default HomePage