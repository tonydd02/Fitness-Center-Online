module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "@material-ui/core/FormHelperText");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_3__);
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


 // function HomePage() {
//   return <div>Welcome to Next.js!</div>
// }
// export default HomePage

var day = 0;
var time = 0;
const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  paper: {
    margin: "auto",
    maxWidth: 400,
    padding: theme.spacing(3)
  }
}));

async function handleClick() {
  if (day == 0 || time == 0) {
    alert("Please select both day and time");
  } else {
    alert("Searching for occupancy on " + day + " " + time); // const item= db.collection("History").findOne(
    //   {"Day":day,"Time":time},
    //   {"Usage":1}
    // );
    // if(result!=null){
    //   const result=item.Usage;
    //   alert("The usage on this day is: "+result);
    // }
    // else{
    //   alert("Sorry, equipment usage on this day is unavailable");
    // }
  }
} // function handleClick(){
//   const result= db.collection("History").findOne(
//     {Day:day,Time:time},
//     {Usage:1}
//   );
// }


const handleSelectDay = event => {
  day = event.target.value;
  console.log(day); //console.log(event.target.value); 
};

const handleSelectTime = event => {
  time = event.target.value;
  console.log(time); //console.log(event.target.value); 
};

function Home() {
  const classes = useStyles();
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {},
    onSubmit: () => {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }
  }, ({
    values
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 5,
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    fullWidth: true,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], {
    id: "search-day",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, "Day"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    labelId: "search-day",
    label: "Day",
    onChange: handleSelectDay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 23
    }
  }, "None")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "Sunday",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }, "Sunday"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "Monday",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }, "Monday"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "Tuesday",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  }, "Tuesday"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "Wednesday",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, "Wednesday"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "Thursday",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, "Thursday"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "Friday",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }, "Friday"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "Saturday",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }, "Saturday")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    fullWidth: true,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], {
    id: "search-time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  }, "Time"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    labelId: "search-time",
    label: "Time",
    onChange: handleSelectTime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }, __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 23
    }
  }, "None")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "8-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }, "8am-10am"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "10-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }, "10am-12pm"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "12-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }, "12pm-2pm"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "14-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 21
    }
  }, "2pm-4pm"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "16-18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  }, "4pm-6pm"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "18-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, "6pm-8pm"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "20-22",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }, "8pm-10pm")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    fullWidth: true,
    id: "Search",
    onClick: () => handleClick(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, "Search for Occupancy"))))));
}

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/GroupProjectGYM/pages/search.js */"./pages/search.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/FormHelperText":
/*!***************************************************!*\
  !*** external "@material-ui/core/FormHelperText" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map