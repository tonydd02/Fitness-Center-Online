import { connectToDatabase } from '../../util/mongodb'
import { ObjectId } from "mongodb"

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
              who_occupied:1,
            })
          console.log("find the threadmill")
          console.log(JSON.stringify(treadmill))
          console.log(treadmill.status)
          if (treadmill.status === 1)
          {console.log("I am in branch that will occupy")
          await db.collection("Treadmills").updateOne(
            { _id: id },
            { $set: { status: 0, who_occupied: nickname} }
          )}
          else{ 
            if (treadmill.who_occupied === nickname)
            {
              console.log("I am in branch that will unoccupy")
              await db.collection("Treadmills").updateOne(
              { _id: id },
              { $set: { status: 1, who_occupied: ""}})
            }
            else
            {
              console.log("I am in branch that will alert")
              // the alert still does not work, try something else later
              window.alert("This machine has already been occupied by others");
            }
          }
          res.status(200).json({ message: "equipment occupied"})
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