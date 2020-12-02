import Router from 'next/router'

/* pass in data from user and define the display structure of Treadmill*/
function Treadmill({ treadmill, session }) {
  return (

    <div>

        <button className={treadmill.status===1 ? "treadmillFree" : "treadmillOccupied"}
          onClick={() => fetch ("https://GroupProjectGYM.zihaodong.repl.co/api/writeToDatabase", {
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
              }),
            }).then(
              console.log("Reloading..."),
              Router.push("https://GroupProjectGYM.zihaodong.repl.co")
            )}>
          <div>{treadmill.name}</div>
        </button>

        <button className="likeButton"
          onClick={() => fetch("https://GroupProjectGYM.zihaodong.repl.co/api/writeToDatabase", {
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
              }),
            }).then(
              Router.reload("/")
            )}> <div> Power Up ! </div> 
        </button>

        <li className="treadInfo">
        Status: {treadmill.status===1?
        "free":"occupied by ".concat(`${treadmill.who_occupied}`)}</li>
        <li className="treadInfo">Powered Up By {treadmill.Liked_By} Users</li>
        <br />
      <style jsx>{`
        .treadmillFree {
          background: #99ccff;
          width: 100px;
          height: 60px;
          margin-top: 5px;
          margin-left: 5px;
          margin-right: 5px;
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
        }
        .treadmillOccupied:hover {
          background: #ffff00;
        }
        .treadInfo {
          margin-left: 20px;
          color: #0000ff;
        }
        .likeButton {
          background: #00ff00;
          width: 90px;
          height: 30px;
          margin-top: 5px;
          margin-left: 5px;
          margin-right: 5px;
        }
        .likeButton:hover {
          background: #00cc00;
        }
      `}</style>
    </div>
  )
}

export default Treadmill