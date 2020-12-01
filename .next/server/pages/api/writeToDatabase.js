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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ \"./util/mongodb.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nasync function handler(req, res) {\n  //connect to MongoDB\n  const {\n    db\n  } = await Object(_util_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"connectToDatabase\"])(); //console.log(db)\n\n  const {\n    method,\n    body\n  } = req;\n  const name = body.name;\n  const action = body.action;\n  const like = body.likedBy;\n  const password = body.password;\n  const nickname = body.nickname;\n\n  switch (method) {\n    //write into data base\n    case \"POST\":\n      //const tread =  db.collection(\"Treadmills\").find({_id: id})\n      switch (action) {\n        //occupy a treadmill\n        case \"occupy\":\n          const id = new mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"](body._id);\n          await db.collection(\"Treadmills\").updateOne({\n            _id: id\n          }, {\n            $set: {\n              status: 0\n            }\n          });\n          res.status(200).json({\n            message: \"equipment occupied\"\n          });\n          break;\n\n        case \"like\":\n          const id2 = new mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"](body._id);\n          console.log(like); //like other's exercise on this treadmill\n\n          await db.collection(\"Treadmills\").updateOne({\n            _id: id2\n          }, {\n            $set: {\n              Liked_By: like + 1\n            }\n          });\n          res.status(200).json({\n            message: 'Liked exercise!'\n          });\n          break;\n\n        case \"signup\":\n          // try to find the user passed in\n          const user = await db.collection(\"User\").findOne({\n            username: name\n          }, {\n            username: 1,\n            password: 1,\n            nickname: 1\n          });\n\n          if (!user) {\n            //cannot find an existing user with the typed in username\n            await db.collection(\"User\").insertOne({\n              username: name,\n              password: password,\n              nickname: nickname\n            });\n            console.log(`Congrats! You have successfully Signed Up!\\n \\\n                      Your Username is ${name}\\n \\\n                      Your Password is ${password}\\n\n                      Your Nickname is ${nickname}...`);\n            res.status(200).json({\n              message: \"created one\"\n            });\n          } // else {\n          //   // check password if exist\n          //   if (user.password === password){\n          //     console.log(\"loged in\")\n          //   } else {\n          //     console.log(\"incorrect password\")\n          //   }\n          //   // console.log(user.username, user.password)\n          // }\n\n\n          res.status(200).json({\n            message: \"did not branch!\"\n          });\n          break;\n      }\n\n      break;\n    //read only   \n\n    case \"GET\":\n      /*other cases here*/\n      break;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvd3JpdGVUb0RhdGFiYXNlLmpzP2E0YmQiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImRiIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJtZXRob2QiLCJib2R5IiwibmFtZSIsImFjdGlvbiIsImxpa2UiLCJsaWtlZEJ5IiwicGFzc3dvcmQiLCJuaWNrbmFtZSIsImlkIiwiT2JqZWN0SWQiLCJfaWQiLCJjb2xsZWN0aW9uIiwidXBkYXRlT25lIiwiJHNldCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiaWQyIiwiY29uc29sZSIsImxvZyIsIkxpa2VkX0J5IiwidXNlciIsImZpbmRPbmUiLCJ1c2VybmFtZSIsImluc2VydE9uZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLGVBQWVBLE9BQWYsQ0FBd0JDLEdBQXhCLEVBQTZCQyxHQUE3QixFQUFrQztBQUNoQztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFTLE1BQU1DLHVFQUFpQixFQUF0QyxDQUZnQyxDQUdoQzs7QUFDQSxRQUFNO0FBQUVDLFVBQUY7QUFBVUM7QUFBVixNQUFtQkwsR0FBekI7QUFHQSxRQUFNTSxJQUFJLEdBQUdELElBQUksQ0FBQ0MsSUFBbEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0UsTUFBcEI7QUFDQSxRQUFNQyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksT0FBbEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdMLElBQUksQ0FBQ0ssUUFBdEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdOLElBQUksQ0FBQ00sUUFBdEI7O0FBRUEsVUFBUVAsTUFBUjtBQUNFO0FBQ0EsU0FBSyxNQUFMO0FBQ0U7QUFDQSxjQUFRRyxNQUFSO0FBQ0U7QUFDQSxhQUFLLFFBQUw7QUFDRSxnQkFBTUssRUFBRSxHQUFHLElBQUlDLGdEQUFKLENBQWFSLElBQUksQ0FBQ1MsR0FBbEIsQ0FBWDtBQUNBLGdCQUFNWixFQUFFLENBQUNhLFVBQUgsQ0FBYyxZQUFkLEVBQTRCQyxTQUE1QixDQUNKO0FBQUVGLGVBQUcsRUFBRUY7QUFBUCxXQURJLEVBRUo7QUFBRUssZ0JBQUksRUFBRTtBQUFFQyxvQkFBTSxFQUFFO0FBQVY7QUFBUixXQUZJLENBQU47QUFJQWpCLGFBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBckI7QUFDQTs7QUFDRixhQUFLLE1BQUw7QUFDRSxnQkFBTUMsR0FBRyxHQUFHLElBQUlSLGdEQUFKLENBQWFSLElBQUksQ0FBQ1MsR0FBbEIsQ0FBWjtBQUNBUSxpQkFBTyxDQUFDQyxHQUFSLENBQVlmLElBQVosRUFGRixDQUdFOztBQUNBLGdCQUFNTixFQUFFLENBQUNhLFVBQUgsQ0FBYyxZQUFkLEVBQTRCQyxTQUE1QixDQUNKO0FBQUVGLGVBQUcsRUFBRU87QUFBUCxXQURJLEVBRUo7QUFBRUosZ0JBQUksRUFBRTtBQUFFTyxzQkFBUSxFQUFFaEIsSUFBSSxHQUFHO0FBQW5CO0FBQVIsV0FGSSxDQUFOO0FBSUFQLGFBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBckI7QUFDQTs7QUFDRixhQUFLLFFBQUw7QUFDRTtBQUNBLGdCQUFNSyxJQUFJLEdBQUcsTUFBTXZCLEVBQUUsQ0FBQ2EsVUFBSCxDQUFjLE1BQWQsRUFBc0JXLE9BQXRCLENBQ2pCO0FBQUVDLG9CQUFRLEVBQUVyQjtBQUFaLFdBRGlCLEVBRWpCO0FBQ0VxQixvQkFBUSxFQUFFLENBRFo7QUFFRWpCLG9CQUFRLEVBQUUsQ0FGWjtBQUdFQyxvQkFBUSxFQUFFO0FBSFosV0FGaUIsQ0FBbkI7O0FBT0EsY0FBSSxDQUFDYyxJQUFMLEVBQVc7QUFDVDtBQUNBLGtCQUFNdkIsRUFBRSxDQUFDYSxVQUFILENBQWMsTUFBZCxFQUFzQmEsU0FBdEIsQ0FDSjtBQUNFRCxzQkFBUSxFQUFFckIsSUFEWjtBQUVFSSxzQkFBUSxFQUFFQSxRQUZaO0FBR0VDLHNCQUFRLEVBQUVBO0FBSFosYUFESSxDQUFOO0FBT0FXLG1CQUFPLENBQUNDLEdBQVIsQ0FBYTtBQUN6Qix5Q0FBeUNqQixJQUFLO0FBQzlDLHlDQUF5Q0ksUUFBUztBQUNsRCx5Q0FBeUNDLFFBQVMsS0FIdEM7QUFJQVYsZUFBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLHFCQUFPLEVBQUU7QUFBWCxhQUFyQjtBQUVELFdBeEJILENBeUJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FuQixhQUFHLENBQUNpQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsbUJBQU8sRUFBRTtBQUFYLFdBQXJCO0FBQ0E7QUF2REo7O0FBeURBO0FBQ0Y7O0FBQ0EsU0FBSyxLQUFMO0FBQ0U7QUFFQTtBQWxFSjtBQXFFRDs7QUFFY3JCLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3dyaXRlVG9EYXRhYmFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vdXRpbC9tb25nb2RiJ1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiXG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIgKHJlcSwgcmVzKSB7XG4gIC8vY29ubmVjdCB0byBNb25nb0RCXG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKClcbiAgLy9jb25zb2xlLmxvZyhkYilcbiAgY29uc3QgeyBtZXRob2QsIGJvZHkgfSA9IHJlcTtcblxuXG4gIGNvbnN0IG5hbWUgPSBib2R5Lm5hbWU7XG4gIGNvbnN0IGFjdGlvbiA9IGJvZHkuYWN0aW9uO1xuICBjb25zdCBsaWtlID0gYm9keS5saWtlZEJ5O1xuICBjb25zdCBwYXNzd29yZCA9IGJvZHkucGFzc3dvcmQ7XG4gIGNvbnN0IG5pY2tuYW1lID0gYm9keS5uaWNrbmFtZTtcblxuICBzd2l0Y2goIG1ldGhvZCApIHtcbiAgICAvL3dyaXRlIGludG8gZGF0YSBiYXNlXG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIC8vY29uc3QgdHJlYWQgPSAgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIikuZmluZCh7X2lkOiBpZH0pXG4gICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAvL29jY3VweSBhIHRyZWFkbWlsbFxuICAgICAgICBjYXNlIFwib2NjdXB5XCI6XG4gICAgICAgICAgY29uc3QgaWQgPSBuZXcgT2JqZWN0SWQoYm9keS5faWQpO1xuICAgICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpLnVwZGF0ZU9uZShcbiAgICAgICAgICAgIHsgX2lkOiBpZCB9LFxuICAgICAgICAgICAgeyAkc2V0OiB7IHN0YXR1czogMH0gfVxuICAgICAgICAgIClcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiZXF1aXBtZW50IG9jY3VwaWVkXCJ9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGlrZVwiOlxuICAgICAgICAgIGNvbnN0IGlkMiA9IG5ldyBPYmplY3RJZChib2R5Ll9pZCk7XG4gICAgICAgICAgY29uc29sZS5sb2cobGlrZSlcbiAgICAgICAgICAvL2xpa2Ugb3RoZXIncyBleGVyY2lzZSBvbiB0aGlzIHRyZWFkbWlsbFxuICAgICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpLnVwZGF0ZU9uZShcbiAgICAgICAgICAgIHsgX2lkOiBpZDIgfSxcbiAgICAgICAgICAgIHsgJHNldDogeyBMaWtlZF9CeTogbGlrZSArIDF9fVxuICAgICAgICAgIClcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdMaWtlZCBleGVyY2lzZSEnfSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNpZ251cFwiOlxuICAgICAgICAgIC8vIHRyeSB0byBmaW5kIHRoZSB1c2VyIHBhc3NlZCBpblxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5maW5kT25lKFxuICAgICAgICAgICAgeyB1c2VybmFtZTogbmFtZX0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVzZXJuYW1lOiAxLFxuICAgICAgICAgICAgICBwYXNzd29yZDogMSxcbiAgICAgICAgICAgICAgbmlja25hbWU6IDEsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgLy9jYW5ub3QgZmluZCBhbiBleGlzdGluZyB1c2VyIHdpdGggdGhlIHR5cGVkIGluIHVzZXJuYW1lXG4gICAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5pbnNlcnRPbmUoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIFxuICAgICAgICAgICAgY29uc29sZS5sb2coYENvbmdyYXRzISBZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgU2lnbmVkIFVwIVxcbiBcXFxuICAgICAgICAgICAgICAgICAgICAgIFlvdXIgVXNlcm5hbWUgaXMgJHtuYW1lfVxcbiBcXFxuICAgICAgICAgICAgICAgICAgICAgIFlvdXIgUGFzc3dvcmQgaXMgJHtwYXNzd29yZH1cXG5cbiAgICAgICAgICAgICAgICAgICAgICBZb3VyIE5pY2tuYW1lIGlzICR7bmlja25hbWV9Li4uYClcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJjcmVhdGVkIG9uZVwifSlcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0gXG4gICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgLy8gICAvLyBjaGVjayBwYXNzd29yZCBpZiBleGlzdFxuICAgICAgICAgIC8vICAgaWYgKHVzZXIucGFzc3dvcmQgPT09IHBhc3N3b3JkKXtcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJsb2dlZCBpblwiKVxuICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJpbmNvcnJlY3QgcGFzc3dvcmRcIilcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHVzZXIudXNlcm5hbWUsIHVzZXIucGFzc3dvcmQpXG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJkaWQgbm90IGJyYW5jaCFcIn0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICAvL3JlYWQgb25seSAgIFxuICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgIC8qb3RoZXIgY2FzZXMgaGVyZSovXG4gICAgICBcbiAgICAgIGJyZWFrO1xuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/writeToDatabase.js\n");

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