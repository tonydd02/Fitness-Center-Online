import { connectToDatabase } from '../../util/mongodb'

async function handler (req, res) {
  //console.log(db)
  const { method, body } = req;
  

  const day = body.day;
  const time = body.time;

  switch( method ) {
    case 'POST':
      if(day==0||time==0){
        res.status(200).send("Please select both day and time");
      }
      else{
        const { db } = await connectToDatabase()
        const item= await db.collection("History").findOne(
        {Day:day,Time:time},
        {_id:0,Usage:1}
      );
        if(item!=null){
          const result=item.Usage;
		  res.status(200).send( `The usage on this day and time is: ${result}`);
          //.log("The usage on this day is: "+result);
        }
        else{
		  res.status(200).send("Sorry, equipment usage on this day is unavailable");
          //console.log("Sorry, equipment usage on this day is unavailable");
        }
      }
  }
}


export default handler;