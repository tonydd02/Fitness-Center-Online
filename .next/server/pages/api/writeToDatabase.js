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
            Liked_By: 1
          });
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
          }); // Router.push('/')

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
              totalTime: 0
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


          res.status(200).json({
            message: "did not branch!"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3dyaXRlVG9EYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL21vbmdvZGIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiXSwibmFtZXMiOlsiZGlmZiIsInN0YXJ0IiwiZW5kIiwiY29uc29sZSIsImxvZyIsImdldFRpbWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsIm1ldGhvZCIsImJvZHkiLCJuYW1lIiwiYWN0aW9uIiwibGlrZSIsImxpa2VkQnkiLCJwYXNzd29yZCIsIm5pY2tuYW1lIiwiaWQiLCJPYmplY3RJZCIsIl9pZCIsInRyZWFkbWlsbCIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwic3RhdHVzIiwid2hvX29jY3VwaWVkIiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwidG90YWxUaW1lIiwidXNlcl9vY2N1cHkiLCJoYXNfb2NjdXBpZWQiLCJEYXRlIiwidXBkYXRlT25lIiwiJHNldCIsInVzZXIiLCJMaWtlZF9CeSIsImpzb24iLCJtZXNzYWdlIiwiaWQyIiwidHJlYWRtaWxsX2xpa2UiLCJpbmRleCIsImluZGV4T2YiLCJwdXNoIiwic3BsaWNlIiwidXNlcm5hbWUiLCJpbnNlcnRPbmUiLCJNT05HT0RCX1VSSSIsIk1PTkdPREJfREIiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsIm1vbmdvIiwiY29ubiIsInByb21pc2UiLCJvcHRzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwidGhlbiIsImNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3dyaXRlVG9EYXRhYmFzZS5qc1wiKTtcbiIsImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vdXRpbC9tb25nb2RiJ1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbi8qaGVscGVyIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBhIHVzZXIncyB0b3RhbCBleGVyY2lzZSB0aW1lIG9uIGEgdHJlYWRtaWxsKi9cclxuICBmdW5jdGlvbiBkaWZmIChzdGFydCwgZW5kKSB7XHJcbiAgICAvLyB2YXIgc3RhcnRfZGF0ZSA9IG5ldyBEYXRlKEpTT04uc3RyaW5naWZ5KHN0YXJ0KSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgc3RhcnRfZGF0ZTogJHtzdGFydF9kYXRlfWApXHJcbiAgICAvLyB2YXIgZW5kX2RhdGUgPSBuZXcgRGF0ZShKU09OLnN0cmluZ2lmeShlbmQpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBlbmRfZGF0ZTogJHtlbmRfZGF0ZX1gKVxyXG4gICAgY29uc29sZS5sb2coYHN0YXJ0X2RhdGU6ICR7c3RhcnR9YClcclxuICAgIGNvbnNvbGUubG9nKGBlbmRfZGF0ZTogJHtlbmR9YClcclxuICAgIHZhciBkaWZmID0gZW5kLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKTtcclxuICAgIGNvbnNvbGUubG9nKGBkaWZmOiAke2RpZmZ9YClcclxuICAgIHJldHVybiBkaWZmO1xyXG4gICAgLy8gdmFyIGRpZmZfaCA9IE1hdGguZmxvb3IoZGlmZiAvIDEwMDAgLyA2MCAvIDYwKTtcclxuICAgIC8vIGRpZmYgLT0gZGlmZl9oICogMTAwMCAqIDYwICogNjA7XHJcbiAgICAvLyB2YXIgZGlmZl9tID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCAvIDYwKTtcclxuICAgIC8vIGRpZmYgLT0gZGlmZl9tICogMTAwMCAqIDYwO1xyXG4gICAgLy8gdmFyIGRpZmZfcyA9IE1hdGguZmxvb3IoZGlmZiAvIDEwMDApO1xyXG4gICAgLy8gdmFyIGRpZmZfbXMgPSBkaWZmIC0gZGlmZl9zICogMTAwMDtcclxuXHJcbiAgICAvLyByZXR1cm4gKGRpZmZfaCA8PSA5ID8gXCIwXCI6XCJcIikgKyBkaWZmX2ggKyBcIjpcIiArIChkaWZmX20gPD0gOSA/IFwiMFwiOlwiXCIpICsgZGlmZl9tICsgXCI6XCIgKyAoZGlmZl9zIDw9IDkgPyBcIjBcIjpcIlwiKSArIGRpZmZfcyArIFwiOlwiICsgKGRpZmZfbXMgPD0gOSA/IFwiMFwiOlwiXCIpICsgZGlmZl9tcztcclxuICB9XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcykge1xyXG4gIC8vY29ubmVjdCB0byBNb25nb0RCXHJcbiAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKVxyXG4gIC8vY29uc29sZS5sb2coZGIpXHJcbiAgY29uc3QgeyBtZXRob2QsIGJvZHkgfSA9IHJlcTtcclxuXHJcblxyXG4gIGNvbnN0IG5hbWUgPSBib2R5Lm5hbWU7XHJcbiAgY29uc3QgYWN0aW9uID0gYm9keS5hY3Rpb247XHJcbiAgY29uc3QgbGlrZSA9IGJvZHkubGlrZWRCeTtcclxuICBjb25zdCBwYXNzd29yZCA9IGJvZHkucGFzc3dvcmQ7XHJcbiAgY29uc3Qgbmlja25hbWUgPSBib2R5Lm5pY2tuYW1lO1xyXG5cclxuICBzd2l0Y2goIG1ldGhvZCApIHtcclxuICAgIC8vd3JpdGUgaW50byBkYXRhIGJhc2VcclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIC8vY29uc3QgdHJlYWQgPSAgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIikuZmluZCh7X2lkOiBpZH0pXHJcbiAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgLy9vY2N1cHkgYSB0cmVhZG1pbGxcclxuICAgICAgICBjYXNlIFwib2NjdXB5XCI6XHJcbiAgICAgICAgICBjb25zdCBpZCA9IG5ldyBPYmplY3RJZChib2R5Ll9pZCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICAgIGNvbnN0IHRyZWFkbWlsbCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpLmZpbmRPbmUoXHJcbiAgICAgICAgICAgIHtfaWQgOiBpZH0sIFxyXG4gICAgICAgICAgICB7IHN0YXR1czogMSwgXHJcbiAgICAgICAgICAgICAgd2hvX29jY3VwaWVkOiAxLFxyXG4gICAgICAgICAgICAgIHN0YXJ0X3RpbWU6IDEsXHJcbiAgICAgICAgICAgICAgZW5kX3RpbWU6IDEsXHJcbiAgICAgICAgICAgICAgdG90YWxUaW1lOiAxLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc3QgdXNlcl9vY2N1cHkgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5maW5kT25lKFxyXG4gICAgICAgICAgICB7IG5pY2tuYW1lOiBuaWNrbmFtZSB9LFxyXG4gICAgICAgICAgICB7IHN0YXJ0X3RpbWU6IDEgLFxyXG4gICAgICAgICAgICAgaGFzX29jY3VwaWVkOiAxfSlcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJmaW5kIHRoZSB0cmVhZG1pbGxcIilcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodHJlYWRtaWxsKSlcclxuICAgICAgICAgIC8vY29uc29sZS5sb2codHJlYWRtaWxsLnN0YXR1cylcclxuICAgICAgICAgIGlmICh0cmVhZG1pbGwuc3RhdHVzID09PSAxICYmIHVzZXJfb2NjdXB5Lmhhc19vY2N1cGllZCA9PT0gMClcclxuICAgICAgICAgICAgeyBjb25zb2xlLmxvZyhcIkkgYW0gaW4gYnJhbmNoIHRoYXQgd2lsbCBvY2N1cHlcIilcclxuICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0YXJ0KSlcclxuICAgICAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKS51cGRhdGVPbmUoXHJcbiAgICAgICAgICAgICAgICB7IF9pZDogaWQgfSxcclxuICAgICAgICAgICAgICAgIHsgJHNldDogeyBzdGF0dXM6IDAsIHdob19vY2N1cGllZDogbmlja25hbWV9fSlcclxuICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlVzZXJcIikuZmluZE9uZShcclxuICAgICAgICAgICAgICB7IG5pY2tuYW1lOiBuaWNrbmFtZSB9LFxyXG4gICAgICAgICAgICAgIHsgc3RhcnRfdGltZTogMSB9KVxyXG4gICAgICAgICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJVc2VyXCIpLnVwZGF0ZU9uZShcclxuICAgICAgICAgICAgICAgIHsgbmlja25hbWU6IG5pY2tuYW1lIH0sXHJcbiAgICAgICAgICAgICAgICB7ICRzZXQ6IHsgc3RhcnRfdGltZSA6IHN0YXJ0LCBoYXNfb2NjdXBpZWQ6IDF9fSxcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdGFydCB0aW1lOiAke3VzZXIuc3RhcnRfdGltZX1gKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXsgXHJcbiAgICAgICAgICAgIGlmICh0cmVhZG1pbGwud2hvX29jY3VwaWVkID09PSBuaWNrbmFtZSAmJiB1c2VyX29jY3VweS5oYXNfb2NjdXBpZWQgPT09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW4gYnJhbmNoIHRoYXQgd2lsbCB1bm9jY3VweVwiKVxyXG4gICAgICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVuZCkpXHJcbiAgICAgICAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIikudXBkYXRlT25lKFxyXG4gICAgICAgICAgICAgICAgeyBfaWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICB7ICRzZXQ6IHsgc3RhdHVzOiAxLCB3aG9fb2NjdXBpZWQ6IFwiXCIsIExpa2VkX0J5OiBbXX19KVxyXG5cclxuICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlVzZXJcIikuZmluZE9uZShcclxuICAgICAgICAgICAgICAgIHsgbmlja25hbWU6IG5pY2tuYW1lIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRvdGFsVGltZTogMSAsXHJcbiAgICAgICAgICAgICAgICAgc3RhcnRfdGltZTogMSxcclxuICAgICAgICAgICAgICAgICBlbmRfdGltZTogMX0gKVxyXG4gICAgICAgICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJVc2VyXCIpLnVwZGF0ZU9uZShcclxuICAgICAgICAgICAgICAgIHsgbmlja25hbWU6IG5pY2tuYW1lIH0sXHJcbiAgICAgICAgICAgICAgICB7ICRzZXQ6IFxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3RhbFRpbWU6IHVzZXIudG90YWxUaW1lICsgZGlmZih1c2VyLnN0YXJ0X3RpbWUsIGVuZCksIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X3RpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kX3RpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzX29jY3VwaWVkOiAwfX0sXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGB0b3RhbCB0aW1lOiAke3VzZXIudG90YWxUaW1lfWApLFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgc3RhcnQgdGltZTogJHt1c2VyLnN0YXJ0X3RpbWV9YCksXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBlbmQgdGltZTogJHt1c2VyLmVuZF90aW1lfWApXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC8vcmVzLnN0YXR1c01lc3NhZ2UgPSBcIlRoaXMgbWFjaGluZSBoYXMgYWxyZWFkeSBiZWVuIG9jY3VwaWVkIGJ5IG90aGVyc1wiO1xyXG4gICAgICAgICAgICAgIC8vcmVzLnN0YXR1cygzMTcpLmVuZCgpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGluIGJyYW5jaCB0aGF0IHdpbGwgYWxlcnRcIilcclxuICAgICAgICAgICAgICAvLyB0aGUgYWxlcnQgc3RpbGwgZG9lcyBub3Qgd29yaywgdHJ5IHNvbWV0aGluZyBlbHNlIGxhdGVyXHJcbiAgICAgICAgICAgICAgLy8gd2luZG93LmFsZXJ0KFwiVGhpcyBtYWNoaW5lIGhhcyBhbHJlYWR5IGJlZW4gb2NjdXBpZWQgYnkgb3RoZXJzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSSBleGl0ZWQgdGhlIGJyYW5jaCBhbmQgcmV0dXJuIDIwMFwiKVxyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcImVxdWlwbWVudCBvY2N1cGllZFwifSlcclxuICAgICAgICAgIC8vIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsaWtlXCI6XHJcbiAgICAgICAgICBjb25zdCBpZDIgPSBuZXcgT2JqZWN0SWQoYm9keS5faWQpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhsaWtlKVxyXG4gICAgICAgICAgLy9saWtlIG90aGVyJ3MgZXhlcmNpc2Ugb24gdGhpcyB0cmVhZG1pbGzjgIFcclxuICAgICAgICAgIGNvbnN0IHRyZWFkbWlsbF9saWtlID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIikuZmluZE9uZShcclxuICAgICAgICAgICAge19pZCA6IGlkMn0sIFxyXG4gICAgICAgICAgICB7IExpa2VkX0J5OjF9KVxyXG4gICAgICAgICAgbGV0IGluZGV4ID0gdHJlYWRtaWxsX2xpa2UuTGlrZWRfQnkuaW5kZXhPZihuaWNrbmFtZSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgICAgaWYoIGluZGV4ID09PSAtMSlcclxuICAgICAgICAgIHsgLy9jb25zb2xlLmxvZyhcImxpa2VcIilcclxuICAgICAgICAgICAgdHJlYWRtaWxsX2xpa2UuTGlrZWRfQnkucHVzaChuaWNrbmFtZSl9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAvL2NhbmNlbCBsaWtlXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYW5jZWwgbGlrZVwiKVxyXG4gICAgICAgICAgICB0cmVhZG1pbGxfbGlrZS5MaWtlZF9CeS5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRyZWFkbWlsbF9saWtlLkxpa2VkX0J5KVxyXG4gICAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIikudXBkYXRlT25lKFxyXG4gICAgICAgICAgICB7IF9pZDogaWQyIH0sXHJcbiAgICAgICAgICAgIHsgJHNldDogeyBMaWtlZF9CeTogdHJlYWRtaWxsX2xpa2UuTGlrZWRfQnl9fVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnTGlrZWQgZXhlcmNpc2UhJ30pXHJcbiAgICAgICAgICAvLyBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic2lnbnVwXCI6XHJcbiAgICAgICAgICAvLyB0cnkgdG8gZmluZCB0aGUgdXNlciBwYXNzZWQgaW5cclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5maW5kT25lKFxyXG4gICAgICAgICAgICB7IHVzZXJuYW1lOiBuYW1lfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiAxLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiAxLFxyXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiAxLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgIC8vY2Fubm90IGZpbmQgYW4gZXhpc3RpbmcgdXNlciB3aXRoIHRoZSB0eXBlZCBpbiB1c2VybmFtZVxyXG4gICAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5pbnNlcnRPbmUoXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICBzdGFydF90aW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgZW5kX3RpbWU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWU6IDAsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ29uZ3JhdHMhIFlvdSBoYXZlIHN1Y2Nlc3NmdWxseSBTaWduZWQgVXAhXFxuIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICBZb3VyIFVzZXJuYW1lIGlzICR7bmFtZX1cXG4gXFxcclxuICAgICAgICAgICAgICAgICAgICAgIFlvdXIgUGFzc3dvcmQgaXMgJHtwYXNzd29yZH1cXG5cclxuICAgICAgICAgICAgICAgICAgICAgIFlvdXIgTmlja25hbWUgaXMgJHtuaWNrbmFtZX0uLi5gKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiY3JlYXRlZCBvbmVcIn0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgLy8gICAvLyBjaGVjayBwYXNzd29yZCBpZiBleGlzdFxyXG4gICAgICAgICAgLy8gICBpZiAodXNlci5wYXNzd29yZCA9PT0gcGFzc3dvcmQpe1xyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwibG9nZWQgaW5cIilcclxuICAgICAgICAgIC8vICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImluY29ycmVjdCBwYXNzd29yZFwiKVxyXG4gICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHVzZXIudXNlcm5hbWUsIHVzZXIucGFzc3dvcmQpXHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiZGlkIG5vdCBicmFuY2ghXCJ9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICAvL3JlYWQgb25seSAgIFxyXG4gICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAvKm90aGVyIGNhc2VzIGhlcmUqL1xyXG4gICAgICBcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7IiwiXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gXCJtb25nb2RiK3NydjovL2NzOTdfZ3JvdXA6Z3ltdHJhY2tlckBlcXVpcG1lbnRzLnZra2t1Lm1vbmdvZGIubmV0L1RyZWFkbWlsbHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuY29uc3QgTU9OR09EQl9EQiA9IFwiVHJlYWRtaWxsc1wiXHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xyXG4gIClcclxufVxyXG5cclxuaWYgKCFNT05HT0RCX0RCKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXHJcbiAgKVxyXG59XHJcblxyXG4vKipcclxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xyXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWF0bGx5XHJcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXHJcbiAqL1xyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvXHJcbmlmICghY2FjaGVkKSBjYWNoZWQgPSBnbG9iYWwubW9uZ28gPSB7fVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikgcmV0dXJuIGNhY2hlZC5jb25uXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3QgY29ubiA9IHt9XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH1cclxuICAgIGNhY2hlZC5wcm9taXNlID0gTW9uZ29DbGllbnQuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cylcclxuICAgICAgLnRoZW4oKGNsaWVudCkgPT4ge1xyXG4gICAgICAgIGNvbm4uY2xpZW50ID0gY2xpZW50XHJcbiAgICAgICAgcmV0dXJuIGNsaWVudC5kYihNT05HT0RCX0RCKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZGIpID0+IHtcclxuICAgICAgICBjb25uLmRiID0gZGJcclxuICAgICAgICBjYWNoZWQuY29ubiA9IGNvbm5cclxuICAgICAgfSlcclxuICB9XHJcbiAgYXdhaXQgY2FjaGVkLnByb21pc2VcclxuICByZXR1cm4gY2FjaGVkLmNvbm5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=