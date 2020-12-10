import Link from 'next/link'
import Router from 'next/router'
import { connectToDatabase } from '../util/mongodb'
import { useSession, getSession } from 'next-auth/client'
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

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
