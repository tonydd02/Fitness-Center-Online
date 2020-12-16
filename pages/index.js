import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react'
import Link from 'next/link'
import { connectToDatabase } from '../util/mongodb'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import Router from 'next/router'
import { useRouter, withRouter } from 'next/router'
import { Card, Button, DropdownButton, Dropdown, ButtonGroup, Form} from "react-bootstrap"
import styled from 'styled-components'
import { Button as Butt } from "@material-ui/core"

var day = ""
var time = ""
const handleSelectDay=(e)=>{
  console.log(e);
  day = e
  Router.push("/")
}

const handleSelectTime=(e)=>{
  console.log(e);
  time = e
  Router.push("/")
}

const sorter = {
  "Mo": 1,
  "Tu": 2,
  "We": 3,
  "Th": 4,
  "Fr": 5,
  "Sa": 6,
  "Su": 7
}

function Treadmill({ treadmill, session }) {
  return (

    // <td className="item">
      <Card style={{width: "16rem", height:"35rem", marginRight:"5px", marginTop:"5px"}}>
        <Card.Img variant="top" src={treadmill.status===0?"/images/bearOnTread.jpg": "/images/emptyTread.jpg"} style={{height:"200px"}}/>
        <Card.Body>
        <ul  class="list-group-flash">
          <li class="list-group-item">
            <Button className={treadmill.status===1?"treadmillFree":"treadmillOccupied"}
              onClick={() => fetch ("http://localhost:3000/api/writeToDatabase", {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: treadmill.name,
                  _id: treadmill._id,
                  likedBy: treadmill.Liked_By,
                  action: "occupy",
                  password: "n/a",
                  nickname: session.user.name,
                  // start_time: new Date(),
                  // end_time: new Date(),
                  // totalTime: 0,
                  }),
                }).then(() => {
                  console.log("loading...")
                  Router.push(window.location.href)
                  switch(treadmill.error)
                  {
                  case 1:
                    window.alert("You cannot occupy two machines at the same time!")
                    break
                  case 2:
                    window.alert("This machine is currently occupied by others!")
                    break
                  case 3:
                    window.alert("There is some internal errors, please contact developer!")
                    break
                  default:
                  }
                })}>
              <div> {treadmill.name} </div>
            </Button>
          </li>
          <li class="list-group-item">
            <Button className="likeButton"
              onClick={() => fetch("http://localhost:3000/api/writeToDatabase", {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: treadmill.name,
                  _id: treadmill._id,
                  likedBy: treadmill.Liked_By,
                  action: "like",
                  password: "n/a",
                  nickname: session.user.name,
                  // start_time: new Date(),
                  // end_time: new Date(),
                  // totalTime: "n/a",
                }),
                }).then(() => {
                  console.log("loading...")
                  Router.push(window.location.href)
                })}> <div> Power Up ! </div> 
            </Button>
          </li>
          <li class="list-group-item">
          Status: {treadmill.status===1?
          "free":"occupied by ".concat(`${treadmill.who_occupied}`)}</li>
          <li class="list-group-item">
          {treadmill.Liked_By.length===0 ? "No one has liked yet!"
          : (treadmill.Liked_By.length>3 ? "Liked By ".concat(`${treadmill.Liked_By.slice(0,3).join(',')} ...`)
            :"Liked By ".concat(`${treadmill.Liked_By.join(', ')}`))}</li>
      </ul>
      </Card.Body>
      {/* <style jsx>{`
        .treadmillFree {
          background: #99ccff;
          width: 100px;
          height: 60px;
          margin-top: 5px;
          margin-left: 5px;
          margin-right: 5px;
          border-style: outset;
          border-width: 2px;
          border-color: #0080ff;
        }
        .treadmillFree:hover {
          background: #3399ff;
        }
        .treadmillOccupied {
          background: #ffff99;
          width: 100px;
          height: 60px;
          margin-top: 5px;
          margin-left: 5px;
          margin-right: 5px;
          order-style: outset;
          border-width: 2px;
          border-color: #ffff00;
        }
        .treadmillOccupied:hover {
          background: #ffff00;
        }
        // .Treadmill_2 {
        //   background: #99ccff;
        //   position: absolute;
        //   margin-top: 100px;
        //   margin-left: 250px;
        //   width: 100px;
        //   height: 60px;
        // }
        .treadInfo {
          margin-left: 20px;
          color: #0000ff;
        }
        .likeButton {
          background: #FF8000;
          width: 90px;
          height: 30px;
          margin-top: 5px;
          margin-left: 5px;
          margin-right: 5px;
        }
        .likeButton:hover {
          background: #FF9933;
        }
        .item {
          width: 400px;
        }
      `}</style> */}
      </Card>
    // </td>
  )
}
const StyledLink = styled(Link)`
  color: red;
`
export default function equipments({ data, user }) {
  // Router.push("https://GroupProjectGYM.zihaodong.repl.co")
  console.log(data)
  
  const [ session, loading ] = useSession()
  //console.log(session?"session":"not session")
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => setIsCollapsed(!isCollapsed);
  return (
    session ? 
    // <button onClick={() => (window.alert("occupy treadmill"))}>
    //   "Treadmill 1"
    (
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
					<Butt variant="contained" color="primary" onClick={signOut}>Sign Out</Butt>
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
				<table className="page">
				{/* <div className="page">
					<img src="/images/night.jpg" />
				</div> */}
				<tbody>
				<tr>
					{data.slice(0, 3).map((treadmill) => (
						<td key={treadmill._id}><Treadmill  treadmill={treadmill} session= {session}/></td>
					))} 
					<td key="add">
						<Card border="primary" variant="top" style={{width:"17rem", height:"35rem", marginTop:"5px", marginLeft:"auto", marginRight:"20px"}}>
						<Card.Header>Planning your weekly exercise</Card.Header>
						<Card.Body>
							<p> Add an exercise plan </p>
							<Form.Row>
							<DropdownButton variant="primary" as={ButtonGroup} title={day?day:"day"} onSelect={handleSelectDay} style={{marginRight:"5px"}}>
								<Dropdown.Item eventKey="Mon.">Mon.</Dropdown.Item>
								<Dropdown.Item eventKey="Tue.">Tue.</Dropdown.Item>
								<Dropdown.Item eventKey="Wed.">Wed.</Dropdown.Item>
								<Dropdown.Item eventKey="Thu.">Thu.</Dropdown.Item>
								<Dropdown.Item eventKey="Fri.">Fri.</Dropdown.Item>
								<Dropdown.Item eventKey="Sat.">Sat.</Dropdown.Item>
								<Dropdown.Item eventKey="Sun.">Sun.</Dropdown.Item>
							</DropdownButton>
							<DropdownButton variant="primary" as={ButtonGroup} title={time?time:"time"} onSelect={handleSelectTime} style={{marginRight:"5px"}}>
								<Dropdown.Item eventKey="08-10">08-10</Dropdown.Item>
								<Dropdown.Item eventKey="10-12">10-12</Dropdown.Item>
								<Dropdown.Item eventKey="12-14">12-14</Dropdown.Item>
								<Dropdown.Item eventKey="14-16">14-16</Dropdown.Item>
								<Dropdown.Item eventKey="16-18">16-18</Dropdown.Item>
								<Dropdown.Item eventKey="18-20">18-20</Dropdown.Item>
								<Dropdown.Item eventKey="20-22">20-22</Dropdown.Item>
							</DropdownButton>
							<Button variant="success" onClick={()=> fetch("http://localhost:3000/api/writeToDatabase",
								{
								method:'POST',
									headers: {
										'Content-Type': 'application/json',
									},
									body: JSON.stringify({
										nickname: session.user.name,
										action: "add",
										plan: day+" "+time,
										currentPlan: user[0].plan
									}),
								}).then(() => {
								Router.push(window.location.href)
								})}> Add </Button>
							</Form.Row>
							<br />
							<div>Your exercise plan</div>
							<div style={{height:"22rem", overflow:"scroll"}}>
							<table class="table">
							<tbody>
							{ (user[0].plan)?
								user[0].plan.sort(function sortByDay(a, b) {
								let day1 = a[0]+a[1]
								let day2 = b[0]+b[1]
								if (sorter[day1] - sorter[day2] !== 0)
									return sorter[day1] - sorter[day2]
								else{
									let index1 = a.indexOf(" ")
									let index2 = a.indexOf(" ")
									return Number(a[index1+1]+a[index1+2]) - Number(b[index2+1]+b[index2+2])
								}
								}).map((p) =>
								<tr> 
								<th> <Button variant="outline-primary" style={{height:"35px",width:"125px", marginTop:"10px",}}> {p} </Button> </th>
								<th> <Button variant="danger" style={{height:"35px", marginTop:"10px"}} 
								onClick={()=> fetch("http://localhost:3000/api/writeToDatabase",
								{
									method:'POST',
										headers: {
										'Content-Type': 'application/json',
										},
										body: JSON.stringify({
										nickname: session.user.name,
										action: "add",
										plan: p,
										currentPlan: user[0].plan
										}),
								}).then(() => {
									Router.push(window.location.href)
								})}> DEL </Button> </th>
								</tr>
								):"No Plans Yet"
							} 
							</tbody>
							</table>
							</div>
						</Card.Body>
					</Card>
					</td>
				</tr>

					<tr>
					{data.slice(3, 6).map((treadmill) => (
						<td key={treadmill._id}><Treadmill  treadmill={treadmill} session= {session}/></td>
					))} 
				</tr>
				</tbody>
				</table>
            </div>
          </div>
        </div>
		<div className="head">
        </div>
        <style jsx>{`
			.IMG {
				position: absolute;
				top: 105px;
				left: 8px;
				opacity: 0.5;
			}
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
                height: 700px;
                visibility: hidden;
              }`
            }
        </style>
    </div>
    ) : (
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
				  <Butt variant="contained" color="primary" onClick={signIn}>Sign In</Butt>
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
    .collection("Treadmills")
    .find()
    .sort({name: 1})
    .toArray()
  const session = await getSession(context)
  if(session){
    const nick_name = session.user.name
    const user = await db
      .collection("User")
      .find(
        { nickname: nick_name}
      )
      .toArray()
    // const data = collection.json()
    // console.log(data)
    // console.log(data)
    return {
      props: {
        data: JSON.parse(JSON.stringify(data)),
        session: session,
        user: JSON.parse(JSON.stringify(user))
      }
    }
  }
  else {
    return {
      props: {
        data: JSON.parse(JSON.stringify(data)),
        session: session,
        user: null
      }
    }
  }
  
  
}

/////////////////////////////////////////////////////////////////////////////11_18_2020/////////////////////////////////////////////////////////////////////////////////////////////
/*
export async function createTreadmill(client, treadmill){
  const { db } = await connectToDatabase()
  const result = await db
    .collection("Treadmills")
    .insertOne(treadmill);
  console.log(`New Treadmill created with the following id: ${result.insertedId}`);
}
export async function createTreadmills(newTreadmills){
  const { db } = await connectToDatabase()
  const result = await db.collection("Treadmills").insertMany(newTreadmills);
  console.log(`${result.insertedCount} new treadmill(s) created with the following id(s):`)
  console.log(result.insertedIds);
}
export async function upsertTreadmill(treadmill, updatedTreadmill) 
//update if exists, insert if not
{
  const { db } = await connectToDatabase()
  const result = await db
    .collection("Treadmills")
    .updateOne({ name: treadmill },
              { $set: updatedTreadmill },
              { upsert: true });
    console.log(`${result.matchedCount} Treadmill(s) matched the name.`);
  if (result.upsertedCount > 0) {
      console.log(`One treadmill was inserted with the id ${result.upsertedId._id}`);
  } else {
      console.log(`${result.modifiedCount} treadmill(s) was/were updated.`);
  }
}
export async function updateTreadmill(treadmill, updatedTreadmill) 
//only update, no insertion
{
  const { db } = await connectToDatabase()
  const result = await db
        .collection("Treadmills")
        .updateOne({ name: treadmill }, 
        { $set: updatedTreadmill });
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}
export async function deleteTreadmills(treadmills) 
//delete all treadmills with a specific name
{
  const { db } = await connectToDatabase()
  result = await db.collection("Treadmills")
          .deleteMany({ "name": treadmills });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}
*/

function HomePage(){
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => setIsCollapsed(!isCollapsed);
	return(
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
				  <Link href="../signUp/signup"><a className="nav-link">Sign Out</a></Link>
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
              <h1 className="font-weight-light">Here should be the main content of the page. Treadmills, like-buttons, etc.</h1>
              <p className="lead">The background should be a nice photo, but I still haven't successfully imported yet.</p>
              <p className="lead">Scroll down...</p>
              <div className="blank"></div>
              <p className="lead mb-0">The end!</p>
            </div>
          </div>
        </div>
        <div className="head">
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
                height: 700px;
                visibility: hidden;
              }`
            }
        </style>
    </div>
	)
}