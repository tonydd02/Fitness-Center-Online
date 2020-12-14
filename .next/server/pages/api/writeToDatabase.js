module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/writeToDatabase.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/writeToDatabase.js":
/*!**************************************!*\
  !*** ./pages/api/writeToDatabase.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ "./util/mongodb.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



/*helper function to calculate a user's total exercise time on a treadmill*/

function diff(start, end) {
  // var start_date = new Date(JSON.stringify(start));
  // console.log(`start_date: ${start_date}`)
  // var end_date = new Date(JSON.stringify(end));
  // console.log(`end_date: ${end_date}`)
  console.log(`start_date: ${start}`);
  console.log(`end_date: ${end}`);
  var diff = end.getTime() - start.getTime();
  console.log(`diff: ${diff}`);
  return diff; // var diff_h = Math.floor(diff / 1000 / 60 / 60);
  // diff -= diff_h * 1000 * 60 * 60;
  // var diff_m = Math.floor(diff / 1000 / 60);
  // diff -= diff_m * 1000 * 60;
  // var diff_s = Math.floor(diff / 1000);
  // var diff_ms = diff - diff_s * 1000;
  // return (diff_h <= 9 ? "0":"") + diff_h + ":" + (diff_m <= 9 ? "0":"") + diff_m + ":" + (diff_s <= 9 ? "0":"") + diff_s + ":" + (diff_ms <= 9 ? "0":"") + diff_ms;
}

async function handler(req, res) {
  //connect to MongoDB
  const {
    db
  } = await Object(_util_mongodb__WEBPACK_IMPORTED_MODULE_0__["connectToDatabase"])(); //console.log(db)

  const {
    method,
    body
  } = req;
  const name = body.name;
  const action = body.action;
  const like = body.likedBy;
  const password = body.password;
  const nickname = body.nickname;

  switch (method) {
    //write into data base
    case "POST":
      //const tread =  db.collection("Treadmills").find({_id: id})
      switch (action) {
        //occupy a treadmill
        case "occupy":
          const id = new mongodb__WEBPACK_IMPORTED_MODULE_1__["ObjectId"](body._id);
          console.log(id);
          const treadmill = await db.collection("Treadmills").findOne({
            _id: id
          }, {
            status: 1,
            who_occupied: 1,
            start_time: 1,
            end_time: 1,
            totalTime: 1
          });
          const user_occupy = await db.collection("User").findOne({
            nickname: nickname
          }, {
            start_time: 1,
            has_occupied: 1
          }); //console.log("find the treadmill")
          //console.log(JSON.stringify(treadmill))
          //console.log(treadmill.status)

          if (treadmill.status === 1 && user_occupy.has_occupied === 0) {
            console.log("I am in branch that will occupy");
            const start = new Date(); //console.log(JSON.stringify(start))

            await db.collection("Treadmills").updateOne({
              _id: id
            }, {
              $set: {
                status: 0,
                who_occupied: nickname
              }
            });
            const user = await db.collection("User").findOne({
              nickname: nickname
            }, {
              start_time: 1
            });
            await db.collection("User").updateOne({
              nickname: nickname
            }, {
              $set: {
                start_time: start,
                has_occupied: 1
              }
            }, console.log(`start time: ${user.start_time}`));
          } else {
            if (treadmill.who_occupied === nickname && user_occupy.has_occupied === 1) {
              console.log("I am in branch that will unoccupy");
              const end = new Date(); //console.log(JSON.stringify(end))

              await db.collection("Treadmills").updateOne({
                _id: id
              }, {
                $set: {
                  status: 1,
                  who_occupied: "",
                  Liked_By: []
                }
              });
              const user = await db.collection("User").findOne({
                nickname: nickname
              }, {
                totalTime: 1,
                start_time: 1,
                end_time: 1
              });
              await db.collection("User").updateOne({
                nickname: nickname
              }, {
                $set: {
                  totalTime: user.totalTime + diff(user.start_time, end),
                  start_time: new Date(),
                  end_time: new Date(),
                  has_occupied: 0
                }
              } //console.log(`total time: ${user.totalTime}`),
              //console.log(`start time: ${user.start_time}`),
              //console.log(`end time: ${user.end_time}`)
              );
            } else {
              //res.statusMessage = "This machine has already been occupied by others";
              //res.status(317).end()
              console.log("I am in branch that will alert"); // the alert still does not work, try something else later
              // window.alert("This machine has already been occupied by others");
            }
          } //console.log("I exited the branch and return 200")


          res.status(200).json({
            message: "equipment occupied"
          }); // Router.push('/')

          break;

        case "like":
          const id2 = new mongodb__WEBPACK_IMPORTED_MODULE_1__["ObjectId"](body._id); //console.log(like)
          //like other's exercise on this treadmill、

          const treadmill_like = await db.collection("Treadmills").findOne({
            _id: id2
          }, {
            Liked_By: 1,
            status: 1
          });

          if (treadmill_like.status === 0) {
            let index = treadmill_like.Liked_By.indexOf(nickname);
            console.log(index);

            if (index === -1) {
              //console.log("like")
              treadmill_like.Liked_By.push(nickname);
            } else {
              //cancel like
              //console.log("cancel like")
              treadmill_like.Liked_By.splice(index, 1);
            } //console.log(treadmill_like.Liked_By)


            await db.collection("Treadmills").updateOne({
              _id: id2
            }, {
              $set: {
                Liked_By: treadmill_like.Liked_By
              }
            });
            res.status(200).json({
              message: 'Liked exercise!'
            });
          } else {
            res.status(200).json({
              message: "No one occupied yet"
            });
          } // Router.push('/')


          break;

        case "signup":
          // try to find the user passed in
          const user = await db.collection("User").findOne({
            username: name
          }, {
            username: 1,
            password: 1,
            nickname: 1
          });

          if (!user) {
            //cannot find an existing user with the typed in username
            await db.collection("User").insertOne({
              username: name,
              password: password,
              nickname: nickname,
              start_time: new Date(),
              end_time: new Date(),
              totalTime: 0,
              plan: new Set()
            });
            console.log(`Congrats! You have successfully Signed Up!\n \
                      Your Username is ${name}\n \
                      Your Password is ${password}\n
                      Your Nickname is ${nickname}...`);
            res.status(200).json({
              message: "created one"
            });
          } // else {
          //   // check password if exist
          //   if (user.password === password){
          //     console.log("loged in")
          //   } else {
          //     console.log("incorrect password")
          //   }
          //   // console.log(user.username, user.password)
          // }
          else {
              res.status(200).json({
                message: "User already exist!"
              });
            }

          break;

        case "add":
          const plan = body.plan;
          console.log(plan);
          console.log(body.currentPlan);
          var currentPlan = body.currentPlan;
          const index = currentPlan.indexOf(plan);

          if (index === -1 && plan !== " " && plan.length === 10) {
            currentPlan.push(plan);
          } else if (index !== -1 && plan !== " " && plan.length === 10) {
            currentPlan.splice(index, 1);
          }

          await db.collection("User").updateOne({
            nickname: nickname
          }, {
            $set: {
              plan: currentPlan
            }
          });
          res.status(200).json({
            message: "added a new exercise plan"
          });
          break;
      }

      break;
    //read only   

    case "GET":
      /*other cases here*/
      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = "mongodb+srv://cs97_group:gymtracker@equipments.vkkku.mongodb.net/Treadmills?retryWrites=true&w=majority";
const MONGODB_DB = "Treadmills";

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentiatlly
 * during API Route usage.
 */


let cached = global.mongo;
if (!cached) cached = global.mongo = {};
async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const conn = {};
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect(MONGODB_URI, opts).then(client => {
      conn.client = client;
      return client.db(MONGODB_DB);
    }).then(db => {
      conn.db = db;
      cached.conn = conn;
    });
  }

  await cached.promise;
  return cached.conn;
}

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3dyaXRlVG9EYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL21vbmdvZGIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiXSwibmFtZXMiOlsiZGlmZiIsInN0YXJ0IiwiZW5kIiwiY29uc29sZSIsImxvZyIsImdldFRpbWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsIm1ldGhvZCIsImJvZHkiLCJuYW1lIiwiYWN0aW9uIiwibGlrZSIsImxpa2VkQnkiLCJwYXNzd29yZCIsIm5pY2tuYW1lIiwiaWQiLCJPYmplY3RJZCIsIl9pZCIsInRyZWFkbWlsbCIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwic3RhdHVzIiwid2hvX29jY3VwaWVkIiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwidG90YWxUaW1lIiwidXNlcl9vY2N1cHkiLCJoYXNfb2NjdXBpZWQiLCJEYXRlIiwidXBkYXRlT25lIiwiJHNldCIsInVzZXIiLCJMaWtlZF9CeSIsImpzb24iLCJtZXNzYWdlIiwiaWQyIiwidHJlYWRtaWxsX2xpa2UiLCJpbmRleCIsImluZGV4T2YiLCJwdXNoIiwic3BsaWNlIiwidXNlcm5hbWUiLCJpbnNlcnRPbmUiLCJwbGFuIiwiU2V0IiwiY3VycmVudFBsYW4iLCJsZW5ndGgiLCJNT05HT0RCX1VSSSIsIk1PTkdPREJfREIiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsIm1vbmdvIiwiY29ubiIsInByb21pc2UiLCJvcHRzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwidGhlbiIsImNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7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QU0sQ0FBQ0csSUFBZDtBQUNELEM7Ozs7Ozs7Ozs7O0FDOUNELG9DOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL2FwaS93cml0ZVRvRGF0YWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS93cml0ZVRvRGF0YWJhc2UuanNcIik7XG4iLCJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJy4uLy4uL3V0aWwvbW9uZ29kYidcclxuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG4vKmhlbHBlciBmdW5jdGlvbiB0byBjYWxjdWxhdGUgYSB1c2VyJ3MgdG90YWwgZXhlcmNpc2UgdGltZSBvbiBhIHRyZWFkbWlsbCovXHJcbiAgZnVuY3Rpb24gZGlmZiAoc3RhcnQsIGVuZCkge1xyXG4gICAgLy8gdmFyIHN0YXJ0X2RhdGUgPSBuZXcgRGF0ZShKU09OLnN0cmluZ2lmeShzdGFydCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYHN0YXJ0X2RhdGU6ICR7c3RhcnRfZGF0ZX1gKVxyXG4gICAgLy8gdmFyIGVuZF9kYXRlID0gbmV3IERhdGUoSlNPTi5zdHJpbmdpZnkoZW5kKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgZW5kX2RhdGU6ICR7ZW5kX2RhdGV9YClcclxuICAgIGNvbnNvbGUubG9nKGBzdGFydF9kYXRlOiAke3N0YXJ0fWApXHJcbiAgICBjb25zb2xlLmxvZyhgZW5kX2RhdGU6ICR7ZW5kfWApXHJcbiAgICB2YXIgZGlmZiA9IGVuZC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCk7XHJcbiAgICBjb25zb2xlLmxvZyhgZGlmZjogJHtkaWZmfWApXHJcbiAgICByZXR1cm4gZGlmZjtcclxuICAgIC8vIHZhciBkaWZmX2ggPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwIC8gNjAgLyA2MCk7XHJcbiAgICAvLyBkaWZmIC09IGRpZmZfaCAqIDEwMDAgKiA2MCAqIDYwO1xyXG4gICAgLy8gdmFyIGRpZmZfbSA9IE1hdGguZmxvb3IoZGlmZiAvIDEwMDAgLyA2MCk7XHJcbiAgICAvLyBkaWZmIC09IGRpZmZfbSAqIDEwMDAgKiA2MDtcclxuICAgIC8vIHZhciBkaWZmX3MgPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcclxuICAgIC8vIHZhciBkaWZmX21zID0gZGlmZiAtIGRpZmZfcyAqIDEwMDA7XHJcblxyXG4gICAgLy8gcmV0dXJuIChkaWZmX2ggPD0gOSA/IFwiMFwiOlwiXCIpICsgZGlmZl9oICsgXCI6XCIgKyAoZGlmZl9tIDw9IDkgPyBcIjBcIjpcIlwiKSArIGRpZmZfbSArIFwiOlwiICsgKGRpZmZfcyA8PSA5ID8gXCIwXCI6XCJcIikgKyBkaWZmX3MgKyBcIjpcIiArIChkaWZmX21zIDw9IDkgPyBcIjBcIjpcIlwiKSArIGRpZmZfbXM7XHJcbiAgfVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlciAocmVxLCByZXMpIHtcclxuICAvL2Nvbm5lY3QgdG8gTW9uZ29EQlxyXG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKClcclxuICAvL2NvbnNvbGUubG9nKGRiKVxyXG4gIGNvbnN0IHsgbWV0aG9kLCBib2R5IH0gPSByZXE7XHJcblxyXG5cclxuICBjb25zdCBuYW1lID0gYm9keS5uYW1lO1xyXG4gIGNvbnN0IGFjdGlvbiA9IGJvZHkuYWN0aW9uO1xyXG4gIGNvbnN0IGxpa2UgPSBib2R5Lmxpa2VkQnk7XHJcbiAgY29uc3QgcGFzc3dvcmQgPSBib2R5LnBhc3N3b3JkO1xyXG4gIGNvbnN0IG5pY2tuYW1lID0gYm9keS5uaWNrbmFtZTtcclxuXHJcbiAgc3dpdGNoKCBtZXRob2QgKSB7XHJcbiAgICAvL3dyaXRlIGludG8gZGF0YSBiYXNlXHJcbiAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAvL2NvbnN0IHRyZWFkID0gIGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpLmZpbmQoe19pZDogaWR9KVxyXG4gICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgIC8vb2NjdXB5IGEgdHJlYWRtaWxsXHJcbiAgICAgICAgY2FzZSBcIm9jY3VweVwiOlxyXG4gICAgICAgICAgY29uc3QgaWQgPSBuZXcgT2JqZWN0SWQoYm9keS5faWQpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgICBjb25zdCB0cmVhZG1pbGwgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKS5maW5kT25lKFxyXG4gICAgICAgICAgICB7X2lkIDogaWR9LCBcclxuICAgICAgICAgICAgeyBzdGF0dXM6IDEsIFxyXG4gICAgICAgICAgICAgIHdob19vY2N1cGllZDogMSxcclxuICAgICAgICAgICAgICBzdGFydF90aW1lOiAxLFxyXG4gICAgICAgICAgICAgIGVuZF90aW1lOiAxLFxyXG4gICAgICAgICAgICAgIHRvdGFsVGltZTogMSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIGNvbnN0IHVzZXJfb2NjdXB5ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlVzZXJcIikuZmluZE9uZShcclxuICAgICAgICAgICAgeyBuaWNrbmFtZTogbmlja25hbWUgfSxcclxuICAgICAgICAgICAgeyBzdGFydF90aW1lOiAxICxcclxuICAgICAgICAgICAgIGhhc19vY2N1cGllZDogMX0pXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZmluZCB0aGUgdHJlYWRtaWxsXCIpXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRyZWFkbWlsbCkpXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRyZWFkbWlsbC5zdGF0dXMpXHJcbiAgICAgICAgICBpZiAodHJlYWRtaWxsLnN0YXR1cyA9PT0gMSAmJiB1c2VyX29jY3VweS5oYXNfb2NjdXBpZWQgPT09IDApXHJcbiAgICAgICAgICAgIHsgY29uc29sZS5sb2coXCJJIGFtIGluIGJyYW5jaCB0aGF0IHdpbGwgb2NjdXB5XCIpXHJcbiAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzdGFydCkpXHJcbiAgICAgICAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIikudXBkYXRlT25lKFxyXG4gICAgICAgICAgICAgICAgeyBfaWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICB7ICRzZXQ6IHsgc3RhdHVzOiAwLCB3aG9fb2NjdXBpZWQ6IG5pY2tuYW1lfX0pXHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJVc2VyXCIpLmZpbmRPbmUoXHJcbiAgICAgICAgICAgICAgeyBuaWNrbmFtZTogbmlja25hbWUgfSxcclxuICAgICAgICAgICAgICB7IHN0YXJ0X3RpbWU6IDEgfSlcclxuICAgICAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS51cGRhdGVPbmUoXHJcbiAgICAgICAgICAgICAgICB7IG5pY2tuYW1lOiBuaWNrbmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgeyAkc2V0OiB7IHN0YXJ0X3RpbWUgOiBzdGFydCwgaGFzX29jY3VwaWVkOiAxfX0sXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnQgdGltZTogJHt1c2VyLnN0YXJ0X3RpbWV9YCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7IFxyXG4gICAgICAgICAgICBpZiAodHJlYWRtaWxsLndob19vY2N1cGllZCA9PT0gbmlja25hbWUgJiYgdXNlcl9vY2N1cHkuaGFzX29jY3VwaWVkID09PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGluIGJyYW5jaCB0aGF0IHdpbGwgdW5vY2N1cHlcIilcclxuICAgICAgICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlbmQpKVxyXG4gICAgICAgICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpLnVwZGF0ZU9uZShcclxuICAgICAgICAgICAgICAgIHsgX2lkOiBpZCB9LFxyXG4gICAgICAgICAgICAgICAgeyAkc2V0OiB7IHN0YXR1czogMSwgd2hvX29jY3VwaWVkOiBcIlwiLCBMaWtlZF9CeTogW119fSlcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJVc2VyXCIpLmZpbmRPbmUoXHJcbiAgICAgICAgICAgICAgICB7IG5pY2tuYW1lOiBuaWNrbmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgeyB0b3RhbFRpbWU6IDEgLFxyXG4gICAgICAgICAgICAgICAgIHN0YXJ0X3RpbWU6IDEsXHJcbiAgICAgICAgICAgICAgICAgZW5kX3RpbWU6IDF9IClcclxuICAgICAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS51cGRhdGVPbmUoXHJcbiAgICAgICAgICAgICAgICB7IG5pY2tuYW1lOiBuaWNrbmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgeyAkc2V0OiBcclxuICAgICAgICAgICAgICAgICAgICB7dG90YWxUaW1lOiB1c2VyLnRvdGFsVGltZSArIGRpZmYodXNlci5zdGFydF90aW1lLCBlbmQpLCBcclxuICAgICAgICAgICAgICAgICAgICBzdGFydF90aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZF90aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc19vY2N1cGllZDogMH19LFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgdG90YWwgdGltZTogJHt1c2VyLnRvdGFsVGltZX1gKSxcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYHN0YXJ0IHRpbWU6ICR7dXNlci5zdGFydF90aW1lfWApLFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgZW5kIHRpbWU6ICR7dXNlci5lbmRfdGltZX1gKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvL3Jlcy5zdGF0dXNNZXNzYWdlID0gXCJUaGlzIG1hY2hpbmUgaGFzIGFscmVhZHkgYmVlbiBvY2N1cGllZCBieSBvdGhlcnNcIjtcclxuICAgICAgICAgICAgICAvL3Jlcy5zdGF0dXMoMzE3KS5lbmQoKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBpbiBicmFuY2ggdGhhdCB3aWxsIGFsZXJ0XCIpXHJcbiAgICAgICAgICAgICAgLy8gdGhlIGFsZXJ0IHN0aWxsIGRvZXMgbm90IHdvcmssIHRyeSBzb21ldGhpbmcgZWxzZSBsYXRlclxyXG4gICAgICAgICAgICAgIC8vIHdpbmRvdy5hbGVydChcIlRoaXMgbWFjaGluZSBoYXMgYWxyZWFkeSBiZWVuIG9jY3VwaWVkIGJ5IG90aGVyc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkkgZXhpdGVkIHRoZSBicmFuY2ggYW5kIHJldHVybiAyMDBcIilcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJlcXVpcG1lbnQgb2NjdXBpZWRcIn0pXHJcbiAgICAgICAgICAvLyBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibGlrZVwiOlxyXG4gICAgICAgICAgY29uc3QgaWQyID0gbmV3IE9iamVjdElkKGJvZHkuX2lkKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2cobGlrZSlcclxuICAgICAgICAgIC8vbGlrZSBvdGhlcidzIGV4ZXJjaXNlIG9uIHRoaXMgdHJlYWRtaWxs44CBXHJcbiAgICAgICAgICBjb25zdCB0cmVhZG1pbGxfbGlrZSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpLmZpbmRPbmUoXHJcbiAgICAgICAgICAgIHtfaWQgOiBpZDJ9LCBcclxuICAgICAgICAgICAgeyBMaWtlZF9CeToxLCBzdGF0dXM6IDF9KVxyXG4gICAgICAgICAgaWYodHJlYWRtaWxsX2xpa2Uuc3RhdHVzPT09MCl7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRyZWFkbWlsbF9saWtlLkxpa2VkX0J5LmluZGV4T2Yobmlja25hbWUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgICAgICBpZiggaW5kZXggPT09IC0xKVxyXG4gICAgICAgICAgICB7IC8vY29uc29sZS5sb2coXCJsaWtlXCIpXHJcbiAgICAgICAgICAgICAgdHJlYWRtaWxsX2xpa2UuTGlrZWRfQnkucHVzaChuaWNrbmFtZSl9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgLy9jYW5jZWwgbGlrZVxyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYW5jZWwgbGlrZVwiKVxyXG4gICAgICAgICAgICAgIHRyZWFkbWlsbF9saWtlLkxpa2VkX0J5LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRyZWFkbWlsbF9saWtlLkxpa2VkX0J5KVxyXG4gICAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKS51cGRhdGVPbmUoXHJcbiAgICAgICAgICAgICAgeyBfaWQ6IGlkMiB9LFxyXG4gICAgICAgICAgICAgIHsgJHNldDogeyBMaWtlZF9CeTogdHJlYWRtaWxsX2xpa2UuTGlrZWRfQnl9fVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0xpa2VkIGV4ZXJjaXNlISd9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIk5vIG9uZSBvY2N1cGllZCB5ZXRcIn0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic2lnbnVwXCI6XHJcbiAgICAgICAgICAvLyB0cnkgdG8gZmluZCB0aGUgdXNlciBwYXNzZWQgaW5cclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5maW5kT25lKFxyXG4gICAgICAgICAgICB7IHVzZXJuYW1lOiBuYW1lfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiAxLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiAxLFxyXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiAxLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgIC8vY2Fubm90IGZpbmQgYW4gZXhpc3RpbmcgdXNlciB3aXRoIHRoZSB0eXBlZCBpbiB1c2VybmFtZVxyXG4gICAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5pbnNlcnRPbmUoXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICBzdGFydF90aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgZW5kX3RpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWU6IDAsXHJcbiAgICAgICAgICAgICAgICBwbGFuOiBuZXcgU2V0KClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb25ncmF0cyEgWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IFNpZ25lZCBVcCFcXG4gXFxcclxuICAgICAgICAgICAgICAgICAgICAgIFlvdXIgVXNlcm5hbWUgaXMgJHtuYW1lfVxcbiBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgWW91ciBQYXNzd29yZCBpcyAke3Bhc3N3b3JkfVxcblxyXG4gICAgICAgICAgICAgICAgICAgICAgWW91ciBOaWNrbmFtZSBpcyAke25pY2tuYW1lfS4uLmApXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJjcmVhdGVkIG9uZVwifSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAvLyAgIC8vIGNoZWNrIHBhc3N3b3JkIGlmIGV4aXN0XHJcbiAgICAgICAgICAvLyAgIGlmICh1c2VyLnBhc3N3b3JkID09PSBwYXNzd29yZCl7XHJcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJsb2dlZCBpblwiKVxyXG4gICAgICAgICAgLy8gICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiaW5jb3JyZWN0IHBhc3N3b3JkXCIpXHJcbiAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgIC8vICAgLy8gY29uc29sZS5sb2codXNlci51c2VybmFtZSwgdXNlci5wYXNzd29yZClcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJVc2VyIGFscmVhZHkgZXhpc3QhXCJ9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImFkZFwiOlxyXG4gICAgICAgICAgY29uc3QgcGxhbiA9IGJvZHkucGxhblxyXG4gICAgICAgICAgY29uc29sZS5sb2cocGxhbilcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHkuY3VycmVudFBsYW4pXHJcbiAgICAgICAgICB2YXIgY3VycmVudFBsYW4gPSBib2R5LmN1cnJlbnRQbGFuXHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRQbGFuLmluZGV4T2YocGxhbilcclxuICAgICAgICAgIGlmKGluZGV4PT09LTEgJiYgcGxhbiE9PVwiIFwiICYmIHBsYW4ubGVuZ3RoPT09MTApe1xyXG4gICAgICAgICAgICBjdXJyZW50UGxhbi5wdXNoKHBsYW4pXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ICE9PSAtMSAmJiBwbGFuIT09XCIgXCIgJiYgcGxhbi5sZW5ndGg9PT0xMCl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQbGFuLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJVc2VyXCIpLnVwZGF0ZU9uZShcclxuICAgICAgICAgICAge25pY2tuYW1lOiBuaWNrbmFtZX0sXHJcbiAgICAgICAgICAgIHsgJHNldDp7cGxhbjogY3VycmVudFBsYW59fVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcImFkZGVkIGEgbmV3IGV4ZXJjaXNlIHBsYW5cIiB9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICAvL3JlYWQgb25seSAgIFxyXG4gICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAvKm90aGVyIGNhc2VzIGhlcmUqL1xyXG4gICAgICBcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7IiwiXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gXCJtb25nb2RiK3NydjovL2NzOTdfZ3JvdXA6Z3ltdHJhY2tlckBlcXVpcG1lbnRzLnZra2t1Lm1vbmdvZGIubmV0L1RyZWFkbWlsbHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuY29uc3QgTU9OR09EQl9EQiA9IFwiVHJlYWRtaWxsc1wiXHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xyXG4gIClcclxufVxyXG5cclxuaWYgKCFNT05HT0RCX0RCKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXHJcbiAgKVxyXG59XHJcblxyXG4vKipcclxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xyXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWF0bGx5XHJcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXHJcbiAqL1xyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvXHJcbmlmICghY2FjaGVkKSBjYWNoZWQgPSBnbG9iYWwubW9uZ28gPSB7fVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikgcmV0dXJuIGNhY2hlZC5jb25uXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3QgY29ubiA9IHt9XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH1cclxuICAgIGNhY2hlZC5wcm9taXNlID0gTW9uZ29DbGllbnQuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cylcclxuICAgICAgLnRoZW4oKGNsaWVudCkgPT4ge1xyXG4gICAgICAgIGNvbm4uY2xpZW50ID0gY2xpZW50XHJcbiAgICAgICAgcmV0dXJuIGNsaWVudC5kYihNT05HT0RCX0RCKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZGIpID0+IHtcclxuICAgICAgICBjb25uLmRiID0gZGJcclxuICAgICAgICBjYWNoZWQuY29ubiA9IGNvbm5cclxuICAgICAgfSlcclxuICB9XHJcbiAgYXdhaXQgY2FjaGVkLnByb21pc2VcclxuICByZXR1cm4gY2FjaGVkLmNvbm5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=