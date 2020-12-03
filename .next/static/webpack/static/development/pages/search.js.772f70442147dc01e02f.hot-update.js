webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/runner/GroupProjectGYM/pages/search.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, SelectProps } from '@material-ui/core';
// import { Field, Form, Formik, useField, useFormikContext } from 'formik';
// import FormHelperText from '@material-ui/core/FormHelperText';
// 
// // function HomePage() {
// //   return <div>Welcome to Next.js!</div>
// // }
// // export default HomePage
// var day=0;
// var time=0;
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     margin: "auto",
//     maxWidth: 400,
//     padding: theme.spacing(3)
//   }
// }));
// // async function handleClick() {
// //     alert("Searching for occupancy");
// // }
// export async function handleClick(){
//   if(day==0||time==0){
//     alert("Please select both day and time")
//   }
//   else{
//     // alert("Searching for occupancy on "+day+" "+time);
//     const{ db }=await connectToDatabase();
//     const {item}= await db.collection("History").findOne(
//       {"Day":day,"Time":time},
//       {"Usage":1}
//     );
//     if(result!=null){
//       const result=item.Usage;
//       alert("The usage on this day is: "+result);
//     }
//     else{
//       alert("Sorry, equipment usage on this day is unavailable");
//     }
//   }
// }
// // function handleClick(){
// //   const result= db.collection("History").findOne(
// //     {Day:day,Time:time},
// //     {Usage:1}
// //   );
// // }
// const handleSelectDay = (event) => {
//     day=event.target.value;
//     console.log(day);
//     //console.log(event.target.value); 
// }
// const handleSelectTime = (event) => {
//     time=event.target.value;
//     console.log(time);
//     //console.log(event.target.value); 
// }
// export default function Home(){
//   const classes=useStyles();
//   return (
//     <Formik initialValues={{}} onSubmit={()=>{}}>
//       {({values})=>(
//         <Form>
//           <Paper elevation={5} className={classes.paper}>
//             <Grid container spacing = {3}>
//               <Grid item xs={12} sm={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="search-day">Day</InputLabel>
//                   <Select
//                     labelId="search-day"
//                     label="Day"
//                     onChange={handleSelectDay}
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={"Sunday"}>Sunday</MenuItem>
//                     <MenuItem value={"Monday"}>Monday</MenuItem>
//                     <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
//                     <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
//                     <MenuItem value={"Thursday"}>Thursday</MenuItem>
//                     <MenuItem value={"Friday"}>Friday</MenuItem>
//                     <MenuItem value={"Saturday"}>Saturday</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="search-time">Time</InputLabel>
//                   <Select
//                     labelId="search-time"
//                     label="Time"
//                     onChange={handleSelectTime}
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={"8-10"}>8am-10am</MenuItem>
//                     <MenuItem value={"10-12"}>10am-12pm</MenuItem>
//                     <MenuItem value={"12-2"}>12pm-2pm</MenuItem>
//                     <MenuItem value={"14-4"}>2pm-4pm</MenuItem>
//                     <MenuItem value={"16-18"}>4pm-6pm</MenuItem>
//                     <MenuItem value={"18-20"}>6pm-8pm</MenuItem>
//                     <MenuItem value={"20-22"}>8pm-10pm</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <Button type="submit" variant="contained" 
//                   color="primary" fullWidth id="Search" 
//                   onClick={()=>handleClick()}
//                   >Search for Occupancy</Button>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Form>
//       )}
//     </Formik>
//   );
// }
//import { connectToDatabase } from '../util/mongodb'
var occupancy = 0;
function page() {
  // getData();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 10
    }
  }, "The occupancy is ", occupancy);
} // async function getData(){
//   const {db}=await connectToDatabase();
//   const {item}= await db.collection("History").findOne({Day:"Monday"});
//   occupancy=item.Usage;
// }

/***/ })

})
//# sourceMappingURL=search.js.772f70442147dc01e02f.hot-update.js.map