import { connectToDatabase } from '../../util/mongodb'
import { ObjectId } from "mongodb"
import Router from 'next/router'

/*helper function to calculate a user's total exercise time on a treadmill*/
  function diff (start, end) {
    // var start_date = new Date(JSON.stringify(start));
    // console.log(`start_date: ${start_date}`)
    // var end_date = new Date(JSON.stringify(end));
    // console.log(`end_date: ${end_date}`)
    console.log(`start_date: ${start}`)
    console.log(`end_date: ${end}`)
    var diff = end.getTime() - start.getTime();
    console.log(`diff: ${diff}`)
    return diff;
    // var diff_h = Math.floor(diff / 1000 / 60 / 60);
    // diff -= diff_h * 1000 * 60 * 60;
    // var diff_m = Math.floor(diff / 1000 / 60);
    // diff -= diff_m * 1000 * 60;
    // var diff_s = Math.floor(diff / 1000);
    // var diff_ms = diff - diff_s * 1000;

    // return (diff_h <= 9 ? "0":"") + diff_h + ":" + (diff_m <= 9 ? "0":"") + diff_m + ":" + (diff_s <= 9 ? "0":"") + diff_s + ":" + (diff_ms <= 9 ? "0":"") + diff_ms;
  }

async function handler (req, res) {
  //connect to MongoDB
  const { db } = await connectToDatabase()
  //console.log(db)
  const { method, body } = req;


  const name = body.name;
  const action = body.action;
  const like = body.likedBy;
  const password = body.password;
  const nickname = body.nickname;

  switch( method ) {
    //write into data base
    case "POST":
      //const tread =  db.collection("Treadmills").find({_id: id})
      switch (action) {
        //occupy a treadmill
        case "occupy":
          const id = new ObjectId(body._id);
          console.log(id)
          const treadmill = await db.collection("Treadmills").findOne(
            {_id : id}, 
            { status: 1, 
              who_occupied: 1,
              start_time: 1,
              end_time: 1,
              totalTime: 1,
            })
          const user_occupy = await db.collection("User").findOne(
            { nickname: nickname },
            { start_time: 1 },
            { has_occupied: 1})
          //console.log("find the treadmill")
          //console.log(JSON.stringify(treadmill))
          //console.log(treadmill.status)
          if (treadmill.status === 1 && user_occupy.has_occupied === 0)
            { console.log("I am in branch that will occupy")
              const start = new Date()
              //console.log(JSON.stringify(start))
              await db.collection("Treadmills").updateOne(
                { _id: id },
                { $set: { status: 0, who_occupied: nickname}})
              const user = await db.collection("User").findOne(
              { nickname: nickname },
              { start_time: 1 })
              await db.collection("User").updateOne(
                { nickname: nickname },
                { $set: { start_time : start, has_occupied: 1}},
                console.log(`start time: ${user.start_time}`))
            }
          else{ 
            if (treadmill.who_occupied === nickname && user_occupy.has_occupied === 1)
            {
              console.log("I am in branch that will unoccupy")
              const end = new Date()
              //console.log(JSON.stringify(end))
              await db.collection("Treadmills").updateOne(
                { _id: id },
                { $set: { status: 1, who_occupied: "", Liked_By: 0}})

              const user = await db.collection("User").findOne(
                { nickname: nickname },
                { totalTime: 1 },
                { start_time: 1},
                { end_time: 1} )
              await db.collection("User").updateOne(
                { nickname: nickname },
                { $set: 
                    {totalTime: user.totalTime + diff(user.start_time, end), 
                    start_time: new Date(),
                    end_time: new Date(),
                    has_occupied: 0}},
                //console.log(`total time: ${user.totalTime}`),
                //console.log(`start time: ${user.start_time}`),
                //console.log(`end time: ${user.end_time}`)
              )
            }
            else
            {
              //res.statusMessage = "This machine has already been occupied by others";
              //res.status(317).end()
              console.log("I am in branch that will alert")
              // the alert still does not work, try something else later
              // window.alert("This machine has already been occupied by others");
            }
          }
          //console.log("I exited the branch and return 200")
          res.status(200).json({ message: "equipment occupied"})
          // Router.push('/')
          break;
        case "like":
          const id2 = new ObjectId(body._id);
          //console.log(like)
          //like other's exercise on this treadmill
          await db.collection("Treadmills").updateOne(
            { _id: id2 },
            { $set: { Liked_By: like + 1}}
          )
          res.status(200).json({ message: 'Liked exercise!'})
          // Router.push('/')
          break;
        case "signup":
          // try to find the user passed in
          const user = await db.collection("User").findOne(
            { username: name},
            {
              username: 1,
              password: 1,
              nickname: 1,
            })
          if (!user) {
            //cannot find an existing user with the typed in username
            await db.collection("User").insertOne(
              {
                username: name,
                password: password,
                nickname: nickname,
                start_time: new Date(),
                end_time: new Date(),
                totalTime: 0,
              }
            ) 
            console.log(`Congrats! You have successfully Signed Up!\n \
                      Your Username is ${name}\n \
                      Your Password is ${password}\n
                      Your Nickname is ${nickname}...`)
            res.status(200).json({ message: "created one"})
            
          } 
          // else {
          //   // check password if exist
          //   if (user.password === password){
          //     console.log("loged in")
          //   } else {
          //     console.log("incorrect password")
          //   }
          //   // console.log(user.username, user.password)
          // }
          res.status(200).json({ message: "did not branch!"})
          break;
      }
      break;
    //read only   
    case "GET":
      /*other cases here*/
      
      break;
  }
}



export default handler;