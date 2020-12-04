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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/mongodb */ "./util/mongodb.js");



const options = {
  // Configure one or more authentication providers
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: "Credentials",
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      username: {
        label: "Username",
        type: "text",
        placeholder: "email@example.com"
      },
      password: {
        label: "Password",
        type: "password"
      }
    },
    authorize: async credentials => {
      //console.log("Enter the function.")
      const {
        db
      } = await Object(_util_mongodb__WEBPACK_IMPORTED_MODULE_2__["connectToDatabase"])(); //console.log("Successful connection to database.")

      const user = await db.collection("User").findOne({
        username: credentials.username
      }, {
        username: 1,
        password: 1
      }); //console.log("Successful get user")

      if (!user) {
        //cannot find an existing user with the typed in username
        //console.log("cannot find user in database")
        return Promise.resolve(null);
      } else {
        //console.log(`user: ${user}`)
        //console.log(`credentials_password: ${credentials.password}`)
        //console.log(`database_password: ${user.password}`)
        // check password if exist
        if (credentials.password === user.password) {
          //console.log(`password: ${credentials.password}`)
          //console.log(`user: ${JSON.stringify(user)}`)
          return Promise.resolve(user);
        } else {
          //console.log(`password: ${credentials.password}`)
          return Promise.resolve(null);
        }
      }
    }
  })],
  // database: process.env.DATABASE_URL, 
  callbacks: {
    session: async (session, user) => {
      session.user.email = user.user.username;
      session.user.name = user.user.nickname;
      session.user.image = null; //console.log(`session_session: ${JSON.stringify(session)}`)
      //console.log(`session_user: ${JSON.stringify(user)}`)
      //console.log(`session_Token: ${JSON.stringify(sessionToken)}`)
      // session.user = {email: session.user.email, name:session.user.name, image: null}

      return Promise.resolve(session);
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      if (user) {
        token.user = user;
      } //console.log(`jwt_token: ${JSON.stringify(token)}`)
      //console.log(`jwt_profile: ${JSON.stringify(profile)}`)      
      //console.log(`jwt_account: ${JSON.stringify(account)}`)      
      //console.log(`jwt_user: ${JSON.stringify(user)}`)


      return Promise.resolve(token);
    }
  } // session: {
  //   jwt = true
  // }
  // jwt {
  //   signingKey: process.env.SECRET,
  // },
  //database: process.env.DATABASE_URL

};
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options)); // For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

/*
const options = {
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/database
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a seperate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    // jwt: true,
    
    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens 
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw', 
    
    // Set to true to use encryption (default: false)
    // encryption: true,

    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in pages.
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/api/auth/signin',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks 
  callbacks: { 
    // signIn: async (user, account, profile) => { return Promise.resolve(true) },
    // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
    // session: async (session, user) => { return Promise.resolve(session) },
    // jwt: async (token, user, account, profile, isNewUser) => { return Promise.resolve(token) }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: { },

  // Enable debug messages in the console if you are having problems
  debug: false,
}*/

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

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/providers");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL21vbmdvZGIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJuYW1lcyI6WyJvcHRpb25zIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiQ3JlZGVudGlhbHMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJkYiIsImNvbm5lY3RUb0RhdGFiYXNlIiwidXNlciIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwiZW1haWwiLCJuaWNrbmFtZSIsImltYWdlIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImlzTmV3VXNlciIsInJlcSIsInJlcyIsIk5leHRBdXRoIiwiTU9OR09EQl9VUkkiLCJNT05HT0RCX0RCIiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJtb25nbyIsImNvbm4iLCJwcm9taXNlIiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsInRoZW4iLCJjbGllbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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LHFFQURJLENBQU47QUFHRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxLQUFwQjtBQUNBLElBQUksQ0FBQ0YsTUFBTCxFQUFhQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBUCxHQUFlLEVBQXhCO0FBRU4sZUFBZXhCLGlCQUFmLEdBQW1DO0FBQ3hDLE1BQUlzQixNQUFNLENBQUNHLElBQVgsRUFBaUIsT0FBT0gsTUFBTSxDQUFDRyxJQUFkOztBQUNqQixNQUFJLENBQUNILE1BQU0sQ0FBQ0ksT0FBWixFQUFxQjtBQUNuQixVQUFNRCxJQUFJLEdBQUcsRUFBYjtBQUNBLFVBQU1FLElBQUksR0FBRztBQUNYQyxxQkFBZSxFQUFFLElBRE47QUFFWEMsd0JBQWtCLEVBQUU7QUFGVCxLQUFiO0FBSUFQLFVBQU0sQ0FBQ0ksT0FBUCxHQUFpQkksbURBQVcsQ0FBQ0MsT0FBWixDQUFvQlosV0FBcEIsRUFBaUNRLElBQWpDLEVBQ2RLLElBRGMsQ0FDUkMsTUFBRCxJQUFZO0FBQ2hCUixVQUFJLENBQUNRLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQU9BLE1BQU0sQ0FBQ2xDLEVBQVAsQ0FBVXFCLFVBQVYsQ0FBUDtBQUNELEtBSmMsRUFLZFksSUFMYyxDQUtSakMsRUFBRCxJQUFRO0FBQ1owQixVQUFJLENBQUMxQixFQUFMLEdBQVVBLEVBQVY7QUFDQXVCLFlBQU0sQ0FBQ0csSUFBUCxHQUFjQSxJQUFkO0FBQ0QsS0FSYyxDQUFqQjtBQVNEOztBQUNELFFBQU1ILE1BQU0sQ0FBQ0ksT0FBYjtBQUNBLFNBQU9KLE1BQU0sQ0FBQ0csSUFBZDtBQUNELEM7Ozs7Ozs7Ozs7O0FDOUNELG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanNcIik7XG4iLCJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvbW9uZ29kYlwiXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFByb3ZpZGVycy5DcmVkZW50aWFscyh7XHJcbiAgICAgIC8vIFRoZSBuYW1lIHRvIGRpc3BsYXkgb24gdGhlIHNpZ24gaW4gZm9ybSAoZS5nLiAnU2lnbiBpbiB3aXRoLi4uJylcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICAvLyBUaGUgY3JlZGVudGlhbHMgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIHN1aXRhYmxlIGZvcm0gb24gdGhlIHNpZ24gaW4gcGFnZS5cclxuICAgICAgLy8gWW91IGNhbiBzcGVjaWZ5IHdoYXRldmVyIGZpZWxkcyB5b3UgYXJlIGV4cGVjdGluZyB0byBiZSBzdWJtaXR0ZWQuXHJcbiAgICAgIC8vIGUuZy4gZG9tYWluLCB1c2VybmFtZSwgcGFzc3dvcmQsIDJGQSB0b2tlbiwgZXRjLlxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJlbWFpbEBleGFtcGxlLmNvbVwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGF1dGhvcml6ZTogYXN5bmMgKGNyZWRlbnRpYWxzKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkVudGVyIHRoZSBmdW5jdGlvbi5cIilcclxuICAgICAgICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWwgY29ubmVjdGlvbiB0byBkYXRhYmFzZS5cIilcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlVzZXJcIikuZmluZE9uZShcclxuICAgICAgICAgIHsgdXNlcm5hbWU6IGNyZWRlbnRpYWxzLnVzZXJuYW1lfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IDEsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAxLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bCBnZXQgdXNlclwiKVxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIC8vY2Fubm90IGZpbmQgYW4gZXhpc3RpbmcgdXNlciB3aXRoIHRoZSB0eXBlZCBpbiB1c2VybmFtZVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjYW5ub3QgZmluZCB1c2VyIGluIGRhdGFiYXNlXCIpXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGB1c2VyOiAke3VzZXJ9YClcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coYGNyZWRlbnRpYWxzX3Bhc3N3b3JkOiAke2NyZWRlbnRpYWxzLnBhc3N3b3JkfWApXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGBkYXRhYmFzZV9wYXNzd29yZDogJHt1c2VyLnBhc3N3b3JkfWApXHJcbiAgICAgICAgICAvLyBjaGVjayBwYXNzd29yZCBpZiBleGlzdFxyXG4gICAgICAgICAgaWYgKGNyZWRlbnRpYWxzLnBhc3N3b3JkID09PSB1c2VyLnBhc3N3b3JkKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgcGFzc3dvcmQ6ICR7Y3JlZGVudGlhbHMucGFzc3dvcmR9YClcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgdXNlcjogJHtKU09OLnN0cmluZ2lmeSh1c2VyKX1gKVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpXHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYHBhc3N3b3JkOiAke2NyZWRlbnRpYWxzLnBhc3N3b3JkfWApXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgXHJcbiAgLy8gZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCwgXHJcblxyXG4gIGNhbGxiYWNrczp7XHJcbiAgICBzZXNzaW9uOiBhc3luYyAoc2Vzc2lvbiwgdXNlcikgPT4ge1xyXG4gICAgICBzZXNzaW9uLnVzZXIuZW1haWw9IHVzZXIudXNlci51c2VybmFtZVxyXG4gICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHVzZXIudXNlci5uaWNrbmFtZVxyXG4gICAgICBzZXNzaW9uLnVzZXIuaW1hZ2UgPSBudWxsXHJcbiAgICAgIC8vY29uc29sZS5sb2coYHNlc3Npb25fc2Vzc2lvbjogJHtKU09OLnN0cmluZ2lmeShzZXNzaW9uKX1gKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGBzZXNzaW9uX3VzZXI6ICR7SlNPTi5zdHJpbmdpZnkodXNlcil9YClcclxuICAgICAgLy9jb25zb2xlLmxvZyhgc2Vzc2lvbl9Ub2tlbjogJHtKU09OLnN0cmluZ2lmeShzZXNzaW9uVG9rZW4pfWApXHJcbiAgICAgIC8vIHNlc3Npb24udXNlciA9IHtlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsLCBuYW1lOnNlc3Npb24udXNlci5uYW1lLCBpbWFnZTogbnVsbH1cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKVxyXG4gICAgfSxcclxuICAgIGp3dDogYXN5bmMgKHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHt0b2tlbi51c2VyID0gdXNlcn1cclxuICAgICAgLy9jb25zb2xlLmxvZyhgand0X3Rva2VuOiAke0pTT04uc3RyaW5naWZ5KHRva2VuKX1gKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGBqd3RfcHJvZmlsZTogJHtKU09OLnN0cmluZ2lmeShwcm9maWxlKX1gKSAgICAgIFxyXG4gICAgICAvL2NvbnNvbGUubG9nKGBqd3RfYWNjb3VudDogJHtKU09OLnN0cmluZ2lmeShhY2NvdW50KX1gKSAgICAgIFxyXG4gICAgICAvL2NvbnNvbGUubG9nKGBqd3RfdXNlcjogJHtKU09OLnN0cmluZ2lmeSh1c2VyKX1gKVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRva2VuKVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBzZXNzaW9uOiB7XHJcbiAgLy8gICBqd3QgPSB0cnVlXHJcbiAgICBcclxuICAvLyB9XHJcbiAgLy8gand0IHtcclxuICAvLyAgIHNpZ25pbmdLZXk6IHByb2Nlc3MuZW52LlNFQ1JFVCxcclxuICAvLyB9LFxyXG4gIC8vZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IE5leHRBdXRoKHJlcSwgcmVzLCBvcHRpb25zKVxyXG5cclxuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZWFjaCBvcHRpb24gKGFuZCBhIGZ1bGwgbGlzdCBvZiBvcHRpb25zKSBnbyB0b1xyXG4vLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zXHJcbi8qXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vcHJvdmlkZXJzXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBQcm92aWRlcnMuR29vZ2xlKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICBQcm92aWRlcnMuR2l0SHViKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxyXG4gICAgfSlcclxuICBdLFxyXG4gIC8vIERhdGFiYXNlIG9wdGlvbmFsLiBNeVNRTCwgTWFyaWEgREIsIFBvc3RncmVzIGFuZCBNb25nb0RCIGFyZSBzdXBwb3J0ZWQuXHJcbiAgLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vZGF0YWJhc2VcclxuICAvL1xyXG4gIC8vIE5vdGVzOlxyXG4gIC8vICogWW91IG11c3QgdG8gaW5zdGFsbCBhbiBhcHByb3ByaWF0ZSBub2RlX21vZHVsZSBmb3IgeW91ciBkYXRhYmFzZVxyXG4gIC8vICogVGhlIEVtYWlsIHByb3ZpZGVyIHJlcXVpcmVzIGEgZGF0YWJhc2UgKE9BdXRoIHByb3ZpZGVycyBkbyBub3QpXHJcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcclxuXHJcbiAgLy8gVGhlIHNlY3JldCBzaG91bGQgYmUgc2V0IHRvIGEgcmVhc29uYWJseSBsb25nIHJhbmRvbSBzdHJpbmcuXHJcbiAgLy8gSXQgaXMgdXNlZCB0byBzaWduIGNvb2tpZXMgYW5kIHRvIHNpZ24gYW5kIGVuY3J5cHQgSlNPTiBXZWIgVG9rZW5zLCB1bmxlc3NcclxuICAvLyBhIHNlcGVyYXRlIHNlY3JldCBpcyBkZWZpbmVkIGV4cGxpY2l0bHkgZm9yIGVuY3J5cHRpbmcgdGhlIEpXVC5cclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcclxuXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgLy8gVXNlIEpTT04gV2ViIFRva2VucyBmb3Igc2Vzc2lvbiBpbnN0ZWFkIG9mIGRhdGFiYXNlIHNlc3Npb25zLlxyXG4gICAgLy8gVGhpcyBvcHRpb24gY2FuIGJlIHVzZWQgd2l0aCBvciB3aXRob3V0IGEgZGF0YWJhc2UgZm9yIHVzZXJzL2FjY291bnRzLlxyXG4gICAgLy8gTm90ZTogYGp3dGAgaXMgYXV0b21hdGljYWxseSBzZXQgdG8gYHRydWVgIGlmIG5vIGRhdGFiYXNlIGlzIHNwZWNpZmllZC5cclxuICAgIC8vIGp3dDogdHJ1ZSxcclxuICAgIFxyXG4gICAgLy8gU2Vjb25kcyAtIEhvdyBsb25nIHVudGlsIGFuIGlkbGUgc2Vzc2lvbiBleHBpcmVzIGFuZCBpcyBubyBsb25nZXIgdmFsaWQuXHJcbiAgICAvLyBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBkYXlzXHJcblxyXG4gICAgLy8gU2Vjb25kcyAtIFRocm90dGxlIGhvdyBmcmVxdWVudGx5IHRvIHdyaXRlIHRvIGRhdGFiYXNlIHRvIGV4dGVuZCBhIHNlc3Npb24uXHJcbiAgICAvLyBVc2UgaXQgdG8gbGltaXQgd3JpdGUgb3BlcmF0aW9ucy4gU2V0IHRvIDAgdG8gYWx3YXlzIHVwZGF0ZSB0aGUgZGF0YWJhc2UuXHJcbiAgICAvLyBOb3RlOiBUaGlzIG9wdGlvbiBpcyBpZ25vcmVkIGlmIHVzaW5nIEpTT04gV2ViIFRva2VucyBcclxuICAgIC8vIHVwZGF0ZUFnZTogMjQgKiA2MCAqIDYwLCAvLyAyNCBob3Vyc1xyXG4gIH0sXHJcblxyXG4gIC8vIEpTT04gV2ViIHRva2VucyBhcmUgb25seSB1c2VkIGZvciBzZXNzaW9ucyBpZiB0aGUgYGp3dDogdHJ1ZWAgc2Vzc2lvblxyXG4gIC8vIG9wdGlvbiBpcyBzZXQgLSBvciBieSBkZWZhdWx0IGlmIG5vIGRhdGFiYXNlIGlzIHNwZWNpZmllZC5cclxuICAvLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zI2p3dFxyXG4gIGp3dDoge1xyXG4gICAgLy8gQSBzZWNyZXQgdG8gdXNlIGZvciBrZXkgZ2VuZXJhdGlvbiAoeW91IHNob3VsZCBzZXQgdGhpcyBleHBsaWNpdGx5KVxyXG4gICAgLy8gc2VjcmV0OiAnSU5wOEl2ZEl5ZU1jb0dBZ0ZHb0E2MURkQmdsd3dTcW5YSlprZ3o4UFNudycsIFxyXG4gICAgXHJcbiAgICAvLyBTZXQgdG8gdHJ1ZSB0byB1c2UgZW5jcnlwdGlvbiAoZGVmYXVsdDogZmFsc2UpXHJcbiAgICAvLyBlbmNyeXB0aW9uOiB0cnVlLFxyXG5cclxuICAgIC8vIFlvdSBjYW4gZGVmaW5lIHlvdXIgb3duIGVuY29kZS9kZWNvZGUgZnVuY3Rpb25zIGZvciBzaWduaW5nIGFuZCBlbmNyeXB0aW9uXHJcbiAgICAvLyBpZiB5b3Ugd2FudCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIuXHJcbiAgICAvLyBlbmNvZGU6IGFzeW5jICh7IHNlY3JldCwgdG9rZW4sIG1heEFnZSB9KSA9PiB7fSxcclxuICAgIC8vIGRlY29kZTogYXN5bmMgKHsgc2VjcmV0LCB0b2tlbiwgbWF4QWdlIH0pID0+IHt9LFxyXG4gIH0sXHJcblxyXG4gIC8vIFlvdSBjYW4gZGVmaW5lIGN1c3RvbSBwYWdlcyB0byBvdmVycmlkZSB0aGUgYnVpbHQtaW4gcGFnZXMuXHJcbiAgLy8gVGhlIHJvdXRlcyBzaG93biBoZXJlIGFyZSB0aGUgZGVmYXVsdCBVUkxzIHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gYSBjdXN0b21cclxuICAvLyBwYWdlcyBpcyBub3Qgc3BlY2lmaWVkIGZvciB0aGF0IHJvdXRlLlxyXG4gIC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL3BhZ2VzXHJcbiAgcGFnZXM6IHtcclxuICAgIC8vIHNpZ25JbjogJy9hcGkvYXV0aC9zaWduaW4nLCAgLy8gRGlzcGxheXMgc2lnbmluIGJ1dHRvbnNcclxuICAgIC8vIHNpZ25PdXQ6ICcvYXBpL2F1dGgvc2lnbm91dCcsIC8vIERpc3BsYXlzIGZvcm0gd2l0aCBzaWduIG91dCBidXR0b25cclxuICAgIC8vIGVycm9yOiAnL2FwaS9hdXRoL2Vycm9yJywgLy8gRXJyb3IgY29kZSBwYXNzZWQgaW4gcXVlcnkgc3RyaW5nIGFzID9lcnJvcj1cclxuICAgIC8vIHZlcmlmeVJlcXVlc3Q6ICcvYXBpL2F1dGgvdmVyaWZ5LXJlcXVlc3QnLCAvLyBVc2VkIGZvciBjaGVjayBlbWFpbCBwYWdlXHJcbiAgICAvLyBuZXdVc2VyOiBudWxsIC8vIElmIHNldCwgbmV3IHVzZXJzIHdpbGwgYmUgZGlyZWN0ZWQgaGVyZSBvbiBmaXJzdCBzaWduIGluXHJcbiAgfSxcclxuXHJcbiAgLy8gQ2FsbGJhY2tzIGFyZSBhc3luY2hyb25vdXMgZnVuY3Rpb25zIHlvdSBjYW4gdXNlIHRvIGNvbnRyb2wgd2hhdCBoYXBwZW5zXHJcbiAgLy8gd2hlbiBhbiBhY3Rpb24gaXMgcGVyZm9ybWVkLlxyXG4gIC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL2NhbGxiYWNrcyBcclxuICBjYWxsYmFja3M6IHsgXHJcbiAgICAvLyBzaWduSW46IGFzeW5jICh1c2VyLCBhY2NvdW50LCBwcm9maWxlKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSkgfSxcclxuICAgIC8vIHJlZGlyZWN0OiBhc3luYyAodXJsLCBiYXNlVXJsKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoYmFzZVVybCkgfSxcclxuICAgIC8vIHNlc3Npb246IGFzeW5jIChzZXNzaW9uLCB1c2VyKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoc2Vzc2lvbikgfSxcclxuICAgIC8vIGp3dDogYXN5bmMgKHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIpID0+IHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0b2tlbikgfVxyXG4gIH0sXHJcblxyXG4gIC8vIEV2ZW50cyBhcmUgdXNlZnVsIGZvciBsb2dnaW5nXHJcbiAgLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vZXZlbnRzXHJcbiAgZXZlbnRzOiB7IH0sXHJcblxyXG4gIC8vIEVuYWJsZSBkZWJ1ZyBtZXNzYWdlcyBpbiB0aGUgY29uc29sZSBpZiB5b3UgYXJlIGhhdmluZyBwcm9ibGVtc1xyXG4gIGRlYnVnOiBmYWxzZSxcclxufSovIiwiXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gXCJtb25nb2RiK3NydjovL2NzOTdfZ3JvdXA6Z3ltdHJhY2tlckBlcXVpcG1lbnRzLnZra2t1Lm1vbmdvZGIubmV0L1RyZWFkbWlsbHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuY29uc3QgTU9OR09EQl9EQiA9IFwiVHJlYWRtaWxsc1wiXHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xyXG4gIClcclxufVxyXG5cclxuaWYgKCFNT05HT0RCX0RCKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXHJcbiAgKVxyXG59XHJcblxyXG4vKipcclxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xyXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWF0bGx5XHJcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXHJcbiAqL1xyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvXHJcbmlmICghY2FjaGVkKSBjYWNoZWQgPSBnbG9iYWwubW9uZ28gPSB7fVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikgcmV0dXJuIGNhY2hlZC5jb25uXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3QgY29ubiA9IHt9XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH1cclxuICAgIGNhY2hlZC5wcm9taXNlID0gTW9uZ29DbGllbnQuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cylcclxuICAgICAgLnRoZW4oKGNsaWVudCkgPT4ge1xyXG4gICAgICAgIGNvbm4uY2xpZW50ID0gY2xpZW50XHJcbiAgICAgICAgcmV0dXJuIGNsaWVudC5kYihNT05HT0RCX0RCKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZGIpID0+IHtcclxuICAgICAgICBjb25uLmRiID0gZGJcclxuICAgICAgICBjYWNoZWQuY29ubiA9IGNvbm5cclxuICAgICAgfSlcclxuICB9XHJcbiAgYXdhaXQgY2FjaGVkLnByb21pc2VcclxuICByZXR1cm4gY2FjaGVkLmNvbm5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=