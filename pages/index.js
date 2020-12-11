
//import Treadmill from '../components/Treadmill'

//This is test for commit using replit
import { connectToDatabase } from '../util/mongodb'
import Link from 'next/link'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import Router from 'next/router'
import { useRouter, withRouter } from 'next/router'
//import Image from 'next/image'
//import Treadmill from '../components/Treadmill'
// import { handler } from './api/writeToDatabase'
 
/* pass in data from user and define the display structure of Treadmill*/
function Treadmill({ treadmill, session }) {
  return (

    <div>

        <button className={treadmill.status===1?"treadmillFree":"treadmillOccupied"}
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
            })}>
          <div>{treadmill.name}</div>
        </button>

        <button className="likeButton"
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
        </button>
        <li className="treadInfo">
        Status: {treadmill.status===1?
        "free":"occupied by ".concat(`${treadmill.who_occupied}`)}</li>
        <li className="treadInfo">
        {treadmill.Liked_By.length===0 ? "No one has liked yet!"
        : "Powered Up By ".concat(`${treadmill.Liked_By.join(', ')}`)}</li>
        <br />
      <style jsx>{`
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
      `}</style>
    </div>
  )
}


/* Styling and formating the page */ 
export default function equipments({ data }) {
  // Router.push("https://GroupProjectGYM.zihaodong.repl.co")
  console.log(data)
  const [ session, loading ] = useSession()
  //console.log(session?"session":"not session")
  return (
    session ? 
    // <button onClick={() => (window.alert("occupy treadmill"))}>
    //   "Treadmill 1"
    (
    <div>
      <h1>
        <div className="UCLA">UCLA</div>
        <div className="Title"> JWC Online </div>
        <div className="welcome"> Welcome, {session.user.name} </div>
        <button className="rankingButton">
          <Link href="./rank"> Rank </Link>
        </button>
        <button className="searchButton">
          <Link href="./search"> Search </Link>
        </button>
        <button className="loginButton" onClick={signOut}>
          sign out
        </button>
      </h1>
      
      <div className="page">
        {/* <div className="page">
          <img src="/images/night.jpg" />
        </div> */}
        {data.map((treadmill) => (
          <Treadmill key={treadmill._id} treadmill={treadmill} session= {session}/>
       ))}
      </div>
      
      <style jsx>{`
        h1 {
          background: #3399ff;
          color: #ffffff;
        }
        .Title {
          padding-left: 5px;
        }
        .loginButton {
          background: #ffff00;
          position: absolute;
          top: 25px;
          right: 25px;
          width: 80px;
          height: 35px;
        }
        .loginButton:hover {
          background: #3399ff;
        }
        .searchButton {
          background: #ffff00;
          position: absolute;
          top: 25px;
          right: 110px;
          width: 80px;
          height: 35px;
        }
        .searchButton:hover {
          background: #3399ff;
        }
        .rankingButton {
          background: #ffff00;
          position: absolute;
          top: 25px;
          right: 195px;
          width: 80px;
          height: 35px;
        }
        .rankingButton:hover {
          background: #3399ff;
        }
        Link {
          color: #000000;
        }
        .JWC {
          position: absolute;
          top: 120px;
          right: 20px;
          height: 800px;
          width: 500px;
        }
        .UCLA {
          font-style: italic;
          color: #ffff00;
        }
        .welcome {
          position: absolute;
          top: 30px;
          right: 280px;
          font-size: medium;
        }
        .IMG {
          position: absolute;
          top: 105px;
          left: 8px;
          opacity: 0.5;
        }
        .page {
          // background-image: url("/images/outwindow.png");
          // background-repeat: no-repeat;
          // height: 1080px;
          // width: 1400px;
          // opacity: 0.3;
        }
      `}</style>
    </div>
    ) : (
      <div>
          <h1>
            <div className="UCLA">UCLA</div>
            <div className="Title"> Treadmills At JWC</div>
          </h1>
          <p>You are not permitted to see this page. Please Sign in or Sign up...</p>
          <button onClick={signIn}>Sign in</button>
          <button className = "signUp">
            <Link href="./signUp/signup">
              Sign up
            </Link>
          </button>
          <style jsx>{`
            .signUp {
              margin-left: 10px;
            }
            h1 {
              background: #3399ff;
              color: #ffffff;
            }
            .Title {
              padding-left: 5px;
            }
            .UCLA {
              font-style: italic;
              color: #ffff00;
            }
          `}</style>
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
  
  // const data = collection.json()
  // console.log(data)
  // console.log(data)
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      session: await getSession(context)
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