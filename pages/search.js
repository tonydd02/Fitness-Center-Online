import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, SelectProps } from '@material-ui/core';
import { Field, Form, Formik, useField, useFormikContext } from 'formik';
import FormHelperText from '@material-ui/core/FormHelperText';

var day=0;
var time=0;

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "auto",
    maxWidth: 400,
    padding: theme.spacing(3)
  }
}));


function handleClick(){
    alert("The Occupancy is 80%");
}

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
  const classes=useStyles();
  return (
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
                    <MenuItem value={7}>Sunday</MenuItem>
                    <MenuItem value={1}>Monday</MenuItem>
                    <MenuItem value={2}>Tuesday</MenuItem>
                    <MenuItem value={3}>Wednesday</MenuItem>
                    <MenuItem value={4}>Thursday</MenuItem>
                    <MenuItem value={5}>Friday</MenuItem>
                    <MenuItem value={6}>Saturday</MenuItem>
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
                    <MenuItem value={"12-2"}>12pm-2pm</MenuItem>
                    <MenuItem value={"14-4"}>2pm-4pm</MenuItem>
                    <MenuItem value={"16-18"}>4pm-6pm</MenuItem>
                    <MenuItem value={"18-20"}>6pm-8pm</MenuItem>
                    <MenuItem value={"20-22"}>8pm-10pm</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" 
                  color="primary" fullWidth id="Search" 
                  onClick={()=>handleClick()}
                  >Search for Occupancy</Button>
              </Grid>
            </Grid>
          </Paper>
        </Form>
      )}
    </Formik>
  );
}