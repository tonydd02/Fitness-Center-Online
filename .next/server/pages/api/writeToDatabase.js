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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ \"./util/mongodb.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nasync function handler(req, res) {\n  //connect to MongoDB\n  const {\n    db\n  } = await Object(_util_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"connectToDatabase\"])(); //console.log(db)\n\n  const {\n    method,\n    body\n  } = req;\n  const name = body.name;\n  const action = body.action;\n  const like = body.likedBy;\n  const password = body.password;\n  const nickname = body.nickname;\n\n  switch (method) {\n    //write into data base\n    case \"POST\":\n      //const tread =  db.collection(\"Treadmills\").find({_id: id})\n      switch (action) {\n        //occupy a treadmill\n        case \"occupy\":\n          const id = new mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"](body._id);\n          console.log(id);\n          const treadmill = await db.collection(\"Treadmills\").findOne({\n            _id: id\n          }, {\n            status: 1,\n            who_occupied: 1\n          });\n          console.log(\"find the threadmill\");\n          console.log(JSON.stringify(treadmill));\n          console.log(treadmill.status);\n\n          if (treadmill.status === 1) {\n            console.log(\"I am in branch that will occupy\");\n            await db.collection(\"Treadmills\").updateOne({\n              _id: id\n            }, {\n              $set: {\n                status: 0,\n                who_occupied: nickname\n              }\n            });\n          } else {\n            if (treadmill.who_occupied === nickname) {\n              console.log(\"I am in branch that will unoccupy\");\n              await db.collection(\"Treadmills\").updateOne({\n                _id: id\n              }, {\n                $set: {\n                  status: 1,\n                  who_occupied: \"\"\n                }\n              });\n            } else {\n              console.log(\"I am in branch that will alert\"); // the alert still does not work, try something else later\n\n              window.alert(\"This machine has already been occupied by others\");\n            }\n          }\n\n          res.status(200).json({\n            message: \"equipment occupied\"\n          });\n          break;\n\n        case \"like\":\n          const id2 = new mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"](body._id); //console.log(like)\n          //like other's exercise on this treadmill\n\n          await db.collection(\"Treadmills\").updateOne({\n            _id: id2\n          }, {\n            $set: {\n              Liked_By: like + 1\n            }\n          });\n          res.status(200).json({\n            message: 'Liked exercise!'\n          });\n          break;\n\n        case \"signup\":\n          // try to find the user passed in\n          const user = await db.collection(\"User\").findOne({\n            username: name\n          }, {\n            username: 1,\n            password: 1,\n            nickname: 1\n          });\n\n          if (!user) {\n            //cannot find an existing user with the typed in username\n            await db.collection(\"User\").insertOne({\n              username: name,\n              password: password,\n              nickname: nickname\n            });\n            console.log(`Congrats! You have successfully Signed Up!\\n \\\n                      Your Username is ${name}\\n \\\n                      Your Password is ${password}\\n\n                      Your Nickname is ${nickname}...`);\n            res.status(200).json({\n              message: \"created one\"\n            });\n          } // else {\n          //   // check password if exist\n          //   if (user.password === password){\n          //     console.log(\"loged in\")\n          //   } else {\n          //     console.log(\"incorrect password\")\n          //   }\n          //   // console.log(user.username, user.password)\n          // }\n\n\n          res.status(200).json({\n            message: \"did not branch!\"\n          });\n          break;\n      }\n\n      break;\n    //read only   \n\n    case \"GET\":\n      /*other cases here*/\n      break;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvd3JpdGVUb0RhdGFiYXNlLmpzP2E0YmQiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImRiIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJtZXRob2QiLCJib2R5IiwibmFtZSIsImFjdGlvbiIsImxpa2UiLCJsaWtlZEJ5IiwicGFzc3dvcmQiLCJuaWNrbmFtZSIsImlkIiwiT2JqZWN0SWQiLCJfaWQiLCJjb25zb2xlIiwibG9nIiwidHJlYWRtaWxsIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJzdGF0dXMiLCJ3aG9fb2NjdXBpZWQiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlT25lIiwiJHNldCIsIndpbmRvdyIsImFsZXJ0IiwianNvbiIsIm1lc3NhZ2UiLCJpZDIiLCJMaWtlZF9CeSIsInVzZXIiLCJ1c2VybmFtZSIsImluc2VydE9uZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLGVBQWVBLE9BQWYsQ0FBd0JDLEdBQXhCLEVBQTZCQyxHQUE3QixFQUFrQztBQUNoQztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFTLE1BQU1DLHVFQUFpQixFQUF0QyxDQUZnQyxDQUdoQzs7QUFDQSxRQUFNO0FBQUVDLFVBQUY7QUFBVUM7QUFBVixNQUFtQkwsR0FBekI7QUFHQSxRQUFNTSxJQUFJLEdBQUdELElBQUksQ0FBQ0MsSUFBbEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0UsTUFBcEI7QUFDQSxRQUFNQyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksT0FBbEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdMLElBQUksQ0FBQ0ssUUFBdEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdOLElBQUksQ0FBQ00sUUFBdEI7O0FBRUEsVUFBUVAsTUFBUjtBQUNFO0FBQ0EsU0FBSyxNQUFMO0FBQ0U7QUFDQSxjQUFRRyxNQUFSO0FBQ0U7QUFDQSxhQUFLLFFBQUw7QUFDRSxnQkFB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SFosYUFESSxDQUFOO0FBT0FJLG1CQUFPLENBQUNDLEdBQVIsQ0FBYTtBQUN6Qix5Q0FBeUNWLElBQUs7QUFDOUMseUNBQXlDSSxRQUFTO0FBQ2xELHlDQUF5Q0MsUUFBUyxLQUh0QztBQUlBVixlQUFHLENBQUNtQixNQUFKLENBQVcsR0FBWCxFQUFnQlEsSUFBaEIsQ0FBcUI7QUFBRUMscUJBQU8sRUFBRTtBQUFYLGFBQXJCO0FBRUQsV0F4QkgsQ0F5QkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTVCLGFBQUcsQ0FBQ21CLE1BQUosQ0FBVyxHQUFYLEVBQWdCUSxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBckI7QUFDQTtBQWpGSjs7QUFtRkE7QUFDRjs7QUFDQSxTQUFLLEtBQUw7QUFDRTtBQUVBO0FBNUZKO0FBK0ZEOztBQUVjOUIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvd3JpdGVUb0RhdGFiYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICcuLi8uLi91dGlsL21vbmdvZGInXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCJcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlciAocmVxLCByZXMpIHtcbiAgLy9jb25uZWN0IHRvIE1vbmdvREJcbiAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKVxuICAvL2NvbnNvbGUubG9nKGRiKVxuICBjb25zdCB7IG1ldGhvZCwgYm9keSB9ID0gcmVxO1xuXG5cbiAgY29uc3QgbmFtZSA9IGJvZHkubmFtZTtcbiAgY29uc3QgYWN0aW9uID0gYm9keS5hY3Rpb247XG4gIGNvbnN0IGxpa2UgPSBib2R5Lmxpa2VkQnk7XG4gIGNvbnN0IHBhc3N3b3JkID0gYm9keS5wYXNzd29yZDtcbiAgY29uc3Qgbmlja25hbWUgPSBib2R5Lm5pY2tuYW1lO1xuXG4gIHN3aXRjaCggbWV0aG9kICkge1xuICAgIC8vd3JpdGUgaW50byBkYXRhIGJhc2VcbiAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgLy9jb25zdCB0cmVhZCA9ICBkYi5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKS5maW5kKHtfaWQ6IGlkfSlcbiAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIC8vb2NjdXB5IGEgdHJlYWRtaWxsXG4gICAgICAgIGNhc2UgXCJvY2N1cHlcIjpcbiAgICAgICAgICBjb25zdCBpZCA9IG5ldyBPYmplY3RJZChib2R5Ll9pZCk7XG4gICAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgICAgY29uc3QgdHJlYWRtaWxsID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIikuZmluZE9uZShcbiAgICAgICAgICAgIHtfaWQgOiBpZH0sIFxuICAgICAgICAgICAgeyBzdGF0dXM6IDEsIFxuICAgICAgICAgICAgICB3aG9fb2NjdXBpZWQ6MSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2coXCJmaW5kIHRoZSB0aHJlYWRtaWxsXCIpXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodHJlYWRtaWxsKSlcbiAgICAgICAgICBjb25zb2xlLmxvZyh0cmVhZG1pbGwuc3RhdHVzKVxuICAgICAgICAgIGlmICh0cmVhZG1pbGwuc3RhdHVzID09PSAxKVxuICAgICAgICAgIHtjb25zb2xlLmxvZyhcIkkgYW0gaW4gYnJhbmNoIHRoYXQgd2lsbCBvY2N1cHlcIilcbiAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKS51cGRhdGVPbmUoXG4gICAgICAgICAgICB7IF9pZDogaWQgfSxcbiAgICAgICAgICAgIHsgJHNldDogeyBzdGF0dXM6IDAsIHdob19vY2N1cGllZDogbmlja25hbWV9IH1cbiAgICAgICAgICApfVxuICAgICAgICAgIGVsc2V7IFxuICAgICAgICAgICAgaWYgKHRyZWFkbWlsbC53aG9fb2NjdXBpZWQgPT09IG5pY2tuYW1lKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW4gYnJhbmNoIHRoYXQgd2lsbCB1bm9jY3VweVwiKVxuICAgICAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKS51cGRhdGVPbmUoXG4gICAgICAgICAgICAgIHsgX2lkOiBpZCB9LFxuICAgICAgICAgICAgICB7ICRzZXQ6IHsgc3RhdHVzOiAxLCB3aG9fb2NjdXBpZWQ6IFwiXCJ9fSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGluIGJyYW5jaCB0aGF0IHdpbGwgYWxlcnRcIilcbiAgICAgICAgICAgICAgLy8gdGhlIGFsZXJ0IHN0aWxsIGRvZXMgbm90IHdvcmssIHRyeSBzb21ldGhpbmcgZWxzZSBsYXRlclxuICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGlzIG1hY2hpbmUgaGFzIGFscmVhZHkgYmVlbiBvY2N1cGllZCBieSBvdGhlcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJlcXVpcG1lbnQgb2NjdXBpZWRcIn0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsaWtlXCI6XG4gICAgICAgICAgY29uc3QgaWQyID0gbmV3IE9iamVjdElkKGJvZHkuX2lkKTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGxpa2UpXG4gICAgICAgICAgLy9saWtlIG90aGVyJ3MgZXhlcmNpc2Ugb24gdGhpcyB0cmVhZG1pbGxcbiAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKS51cGRhdGVPbmUoXG4gICAgICAgICAgICB7IF9pZDogaWQyIH0sXG4gICAgICAgICAgICB7ICRzZXQ6IHsgTGlrZWRfQnk6IGxpa2UgKyAxfX1cbiAgICAgICAgICApXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnTGlrZWQgZXhlcmNpc2UhJ30pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzaWdudXBcIjpcbiAgICAgICAgICAvLyB0cnkgdG8gZmluZCB0aGUgdXNlciBwYXNzZWQgaW5cbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlVzZXJcIikuZmluZE9uZShcbiAgICAgICAgICAgIHsgdXNlcm5hbWU6IG5hbWV9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1c2VybmFtZTogMSxcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IDEsXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiAxLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIC8vY2Fubm90IGZpbmQgYW4gZXhpc3RpbmcgdXNlciB3aXRoIHRoZSB0eXBlZCBpbiB1c2VybmFtZVxuICAgICAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbihcIlVzZXJcIikuaW5zZXJ0T25lKFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb25ncmF0cyEgWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IFNpZ25lZCBVcCFcXG4gXFxcbiAgICAgICAgICAgICAgICAgICAgICBZb3VyIFVzZXJuYW1lIGlzICR7bmFtZX1cXG4gXFxcbiAgICAgICAgICAgICAgICAgICAgICBZb3VyIFBhc3N3b3JkIGlzICR7cGFzc3dvcmR9XFxuXG4gICAgICAgICAgICAgICAgICAgICAgWW91ciBOaWNrbmFtZSBpcyAke25pY2tuYW1lfS4uLmApXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiY3JlYXRlZCBvbmVcIn0pXG4gICAgICAgICAgICBcbiAgICAgICAgICB9IFxuICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgIC8vICAgLy8gY2hlY2sgcGFzc3dvcmQgaWYgZXhpc3RcbiAgICAgICAgICAvLyAgIGlmICh1c2VyLnBhc3N3b3JkID09PSBwYXNzd29yZCl7XG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwibG9nZWQgaW5cIilcbiAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiaW5jb3JyZWN0IHBhc3N3b3JkXCIpXG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyLnVzZXJuYW1lLCB1c2VyLnBhc3N3b3JkKVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiZGlkIG5vdCBicmFuY2ghXCJ9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgLy9yZWFkIG9ubHkgICBcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAvKm90aGVyIGNhc2VzIGhlcmUqL1xuICAgICAgXG4gICAgICBicmVhaztcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/writeToDatabase.js\n");

/***/ }),

/***/ "./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = \"mongodb+srv://cs97_group:gymtracker@equipments.vkkku.mongodb.net/Treadmills?retryWrites=true&w=majority\";\nconst MONGODB_DB = \"Treadmills\";\n\nif (!MONGODB_URI) {\n  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\n\nif (!MONGODB_DB) {\n  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentiatlly\n * during API Route usage.\n */\n\n\nlet cached = global.mongo;\nif (!cached) cached = global.mongo = {};\nasync function connectToDatabase() {\n  if (cached.conn) return cached.conn;\n\n  if (!cached.promise) {\n    const conn = {};\n    const opts = {\n      useNewUrlParser: true,\n      useUnifiedTopology: true\n    };\n    cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(MONGODB_URI, opts).then(client => {\n      conn.client = client;\n      return client.db(MONGODB_DB);\n    }).then(db => {\n      conn.db = db;\n      cached.conn = conn;\n    });\n  }\n\n  await cached.promise;\n  return cached.conn;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL21vbmdvZGIuanM/MWRmYyJdLCJuYW1lcyI6WyJNT05HT0RCX1VSSSIsIk1PTkdPREJfREIiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsIm1vbmdvIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25uIiwicHJvbWlzZSIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ0aGVuIiwiY2xpZW50IiwiZGIiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxXQUFXLEdBQUcseUdBQXBCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5COztBQUVBLElBQUksQ0FBQ0QsV0FBTCxFQUFrQjtBQUNoQixRQUFNLElBQUlFLEtBQUosQ0FDSixzRUFESSxDQUFOO0FBR0Q7O0FBRUQsSUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2YsUUFBTSxJQUFJQyxLQUFKLENBQ0oscUVBREksQ0FBTjtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQXBCO0FBQ0EsSUFBSSxDQUFDRixNQUFMLEVBQWFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxLQUFQLEdBQWUsRUFBeEI7QUFFTixlQUFlQyxpQkFBZixHQUFtQztBQUN4QyxNQUFJSCxNQUFNLENBQUNJLElBQVgsRUFBaUIsT0FBT0osTUFBTSxDQUFDSSxJQUFkOztBQUNqQixNQUFJLENBQUNKLE1BQU0sQ0FBQ0ssT0FBWixFQUFxQjtBQUNuQixVQUFNRCxJQUFJLEdBQUcsRUFBYjtBQUNBLFVBQU1FLElBQUksR0FBRztBQUNYQyxxQkFBZSxFQUFFLElBRE47QUFFWEMsd0JBQWtCLEVBQUU7QUFGVCxLQUFiO0FBSUFSLFVBQU0sQ0FBQ0ssT0FBUCxHQUFpQkksbURBQVcsQ0FBQ0MsT0FBWixDQUFvQmIsV0FBcEIsRUFBaUNTLElBQWpDLEVBQ2RLLElBRGMsQ0FDUkMsTUFBRCxJQUFZO0FBQ2hCUixVQUFJLENBQUNRLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQU9BLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVZixVQUFWLENBQVA7QUFDRCxLQUpjLEVBS2RhLElBTGMsQ0FLUkUsRUFBRCxJQUFRO0FBQ1pULFVBQUksQ0FBQ1MsRUFBTCxHQUFVQSxFQUFWO0FBQ0FiLFlBQU0sQ0FBQ0ksSUFBUCxHQUFjQSxJQUFkO0FBQ0QsS0FSYyxDQUFqQjtBQVNEOztBQUNELFFBQU1KLE1BQU0sQ0FBQ0ssT0FBYjtBQUNBLFNBQU9MLE1BQU0sQ0FBQ0ksSUFBZDtBQUNEIiwiZmlsZSI6Ii4vdXRpbC9tb25nb2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXG5cbmNvbnN0IE1PTkdPREJfVVJJID0gXCJtb25nb2RiK3NydjovL2NzOTdfZ3JvdXA6Z3ltdHJhY2tlckBlcXVpcG1lbnRzLnZra2t1Lm1vbmdvZGIubmV0L1RyZWFkbWlsbHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbmNvbnN0IE1PTkdPREJfREIgPSBcIlRyZWFkbWlsbHNcIlxuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gIClcbn1cblxuaWYgKCFNT05HT0RCX0RCKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCdcbiAgKVxufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYXRsbHlcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXG4gKi9cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29cbmlmICghY2FjaGVkKSBjYWNoZWQgPSBnbG9iYWwubW9uZ28gPSB7fVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWQuY29ubikgcmV0dXJuIGNhY2hlZC5jb25uXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBjb25uID0ge31cbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH1cbiAgICBjYWNoZWQucHJvbWlzZSA9IE1vbmdvQ2xpZW50LmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpXG4gICAgICAudGhlbigoY2xpZW50KSA9PiB7XG4gICAgICAgIGNvbm4uY2xpZW50ID0gY2xpZW50XG4gICAgICAgIHJldHVybiBjbGllbnQuZGIoTU9OR09EQl9EQilcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGIpID0+IHtcbiAgICAgICAgY29ubi5kYiA9IGRiXG4gICAgICAgIGNhY2hlZC5jb25uID0gY29ublxuICAgICAgfSlcbiAgfVxuICBhd2FpdCBjYWNoZWQucHJvbWlzZVxuICByZXR1cm4gY2FjaGVkLmNvbm5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/mongodb.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });