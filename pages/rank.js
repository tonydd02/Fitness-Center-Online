import Link from 'next/link'
import Router from 'next/router'
import { connectToDatabase } from '../util/mongodb'
import { useSession, getSession } from 'next-auth/client'



function User ({user}) {
    
    function time(totalTime) {
        console.log(totalTime)
        var days = Math.floor(totalTime/24/1000/60/60)
        totalTime -= days*24*1000*60*60
        var hours = Math.floor(totalTime/1000/60/60)
        totalTime -= hours*1000*60*60
        var mins = Math.floor(totalTime/1000/60)
        totalTime -= mins*1000*60
        var secs = Math.floor(totalTime/1000)
        var ms = totalTime - secs/1000
        return (
            (days<=9?" ":"")+days+" day "+(hours<=9?" ":"")+hours+" h "+(mins<=9?" ":"")+mins+" min "+(secs<=9?" ":"")+secs + " s "
        )
    }
    console.log(user.totalTime)
    const totaltime = time(user.totalTime)
  return (
    <div>
      <div>
        <table className="tableRank"> 
          <tr>
            <td className="user">
                {user.nickname} 
            </td>
            <td className="time">
            {
                totaltime
            }
            </td>
          </tr>
        </table>
      </div>
      <style jsx>{`
      .user {
        background: #99ccff;
        border-style: outset;
        border-width: 2px;
        border-color: #0080ff;
        width: 120px;
        height: 30px;
      }
      .name {
        color: #000000;
      }
      .time {
        background: #ffff88;
        width: 200px;
        border-style: outset;
        border-width: 2px;
        border-color: #ffff00;
      }
      .tableRank {
        margin-left: 20px;
      }
      `}</style>
    </div>
  )
}

/*new page and a chart*/
/*may link to searching */
export default function ranking ({data}){
    return (
      <dev>
        <h1>
            <div className="UCLA">UCLA</div>
            <div className="Title"> Treadmills At JWC</div>
            <button className="homeButton">
                <Link href="/"> Home </Link>
            </button>
        </h1>
        <div>
        {data.map((user) => (
          <User className="user" key={user._id} user={user}/>
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
        .homeButton {
          background: #ffff00;
          position: absolute;
          top: 25px;
          right: 25px;
          width: 80px;
          height: 35px;
        }
        .homeButton:hover {
          background: #3399ff;
        }
        .Title {
            padding-left: 5px;
        }
        .UCLA {
            font-style: italic;
            color: #ffff00;
        }
        .user {
          margin-top: 10px;
        }
        `}</style>
      </dev>
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