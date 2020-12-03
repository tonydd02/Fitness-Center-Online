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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return equipments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/mongodb */ "./util/mongodb.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/runner/GroupProjectGYM/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
//import Treadmill from '../components/Treadmill'
//This is test for commit using replit




 //import Treadmill from '../components/Treadmill'
// import { handler } from './api/writeToDatabase'

/* pass in data from user and define the display structure of Treadmill*/

function Treadmill({
  treadmill,
  session
}) {
  return __jsx("div", {
    className: "jsx-1127658955",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: () => fetch("https://GroupProjectGYM.zihaodong.repl.co/api/writeToDatabase", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: treadmill.name,
        _id: treadmill._id,
        likedBy: treadmill.Liked_By,
        action: "occupy",
        password: "n/a",
        nickname: session.user.name // start_time: new Date(),
        // end_time: new Date(),
        // totalTime: 0,

      })
    }).then(() => {
      console.log("loading...");
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(window.location.href);
    }),
    className: "jsx-1127658955" + " " + ((treadmill.status === 1 ? "treadmillFree" : "treadmillOccupied") || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1127658955",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, treadmill.name)), __jsx("button", {
    onClick: () => fetch("https://GroupProjectGYM.zihaodong.repl.co/api/writeToDatabase", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: treadmill.name,
        _id: treadmill._id,
        likedBy: treadmill.Liked_By,
        action: "like",
        password: "n/a",
        nickname: session.user.name // start_time: new Date(),
        // end_time: new Date(),
        // totalTime: "n/a",

      })
    }).then(() => {
      console.log("loading...");
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(window.location.href);
    }),
    className: "jsx-1127658955" + " " + "likeButton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, " ", __jsx("div", {
    className: "jsx-1127658955",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 18
    }
  }, " Power Up ! ")), __jsx("li", {
    className: "jsx-1127658955" + " " + "treadInfo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "Status: ", treadmill.status === 1 ? "free" : "occupied by ".concat(`${treadmill.who_occupied}`)), __jsx("li", {
    className: "jsx-1127658955" + " " + "treadInfo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Powered Up By ", treadmill.Liked_By, " Users"), __jsx("br", {
    className: "jsx-1127658955",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1127658955",
    __self: this
  }, ".treadmillFree.jsx-1127658955{background:#99ccff;width:100px;height:60px;margin-top:5px;margin-left:5px;margin-right:5px;}.treadmillFree.jsx-1127658955:hover{background:#3399ff;}.treadmillOccupied.jsx-1127658955{background:#ffff99;width:100px;height:60px;margin-top:5px;margin-left:5px;margin-right:5px;}.treadmillOccupied.jsx-1127658955:hover{background:#ffff00;}.treadInfo.jsx-1127658955{margin-left:20px;color:#0000ff;}.likeButton.jsx-1127658955{background:#00ff00;width:90px;height:30px;margin-top:5px;margin-left:5px;margin-right:5px;}.likeButton.jsx-1127658955:hover{background:#00cc00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci9Hcm91cFByb2plY3RHWU0vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VrQixBQUc4QixBQVFBLEFBR0EsQUFRQSxBQUdGLEFBSUUsQUFRQSxpQkFYTCxFQXRCRixBQVFkLEFBR2MsQUFRZCxBQU9hLEFBUWIsV0FQYyxDQTFCQSxBQVdBLEFBV2QsV0FLaUIsQ0ExQkEsQUFXQSxjQWdCQyxDQTFCQSxBQVdBLGVBZ0JDLENBMUJBLEFBV0EsZ0JBZ0JuQixDQTFCQSxBQVdBIiwiZmlsZSI6Ii9ob21lL3J1bm5lci9Hcm91cFByb2plY3RHWU0vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vaW1wb3J0IFRyZWFkbWlsbCBmcm9tICcuLi9jb21wb25lbnRzL1RyZWFkbWlsbCdcblxuLy9UaGlzIGlzIHRlc3QgZm9yIGNvbW1pdCB1c2luZyByZXBsaXRcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vdXRpbC9tb25nb2RiJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbi8vaW1wb3J0IFRyZWFkbWlsbCBmcm9tICcuLi9jb21wb25lbnRzL1RyZWFkbWlsbCdcbi8vIGltcG9ydCB7IGhhbmRsZXIgfSBmcm9tICcuL2FwaS93cml0ZVRvRGF0YWJhc2UnXG4gXG4vKiBwYXNzIGluIGRhdGEgZnJvbSB1c2VyIGFuZCBkZWZpbmUgdGhlIGRpc3BsYXkgc3RydWN0dXJlIG9mIFRyZWFkbWlsbCovXG5mdW5jdGlvbiBUcmVhZG1pbGwoeyB0cmVhZG1pbGwsIHNlc3Npb24gfSkge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dHJlYWRtaWxsLnN0YXR1cz09PTEgPyBcInRyZWFkbWlsbEZyZWVcIiA6IFwidHJlYWRtaWxsT2NjdXBpZWRcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmZXRjaCAoXCJodHRwczovL0dyb3VwUHJvamVjdEdZTS56aWhhb2RvbmcucmVwbC5jby9hcGkvd3JpdGVUb0RhdGFiYXNlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIG5hbWU6IHRyZWFkbWlsbC5uYW1lLFxuICAgICAgICAgICAgICBfaWQ6IHRyZWFkbWlsbC5faWQsXG4gICAgICAgICAgICAgIGxpa2VkQnk6IHRyZWFkbWlsbC5MaWtlZF9CeSxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcIm9jY3VweVwiLFxuICAgICAgICAgICAgICBwYXNzd29yZDogXCJuL2FcIixcbiAgICAgICAgICAgICAgbmlja25hbWU6IHNlc3Npb24udXNlci5uYW1lLFxuICAgICAgICAgICAgICAvLyBzdGFydF90aW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAvLyBlbmRfdGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgLy8gdG90YWxUaW1lOiAwLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcuLi5cIilcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2god2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgICAgICAgICB9KX0+XG4gICAgICAgICAgPGRpdj57dHJlYWRtaWxsLm5hbWV9PC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibGlrZUJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZmV0Y2goXCJodHRwczovL0dyb3VwUHJvamVjdEdZTS56aWhhb2RvbmcucmVwbC5jby9hcGkvd3JpdGVUb0RhdGFiYXNlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIG5hbWU6IHRyZWFkbWlsbC5uYW1lLFxuICAgICAgICAgICAgICBfaWQ6IHRyZWFkbWlsbC5faWQsXG4gICAgICAgICAgICAgIGxpa2VkQnk6IHRyZWFkbWlsbC5MaWtlZF9CeSxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImxpa2VcIixcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwibi9hXCIsXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiBzZXNzaW9uLnVzZXIubmFtZSxcbiAgICAgICAgICAgICAgLy8gc3RhcnRfdGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgLy8gZW5kX3RpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgIC8vIHRvdGFsVGltZTogXCJuL2FcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZy4uLlwiKVxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICAgICAgICAgIH0pfT4gPGRpdj4gUG93ZXIgVXAgISA8L2Rpdj4gXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVhZEluZm9cIj5cbiAgICAgICAgU3RhdHVzOiB7dHJlYWRtaWxsLnN0YXR1cz09PTE/XG4gICAgICAgIFwiZnJlZVwiOlwib2NjdXBpZWQgYnkgXCIuY29uY2F0KGAke3RyZWFkbWlsbC53aG9fb2NjdXBpZWR9YCl9PC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyZWFkSW5mb1wiPlBvd2VyZWQgVXAgQnkge3RyZWFkbWlsbC5MaWtlZF9CeX0gVXNlcnM8L2xpPlxuICAgICAgICA8YnIgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRyZWFkbWlsbEZyZWUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM5OWNjZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAudHJlYWRtaWxsRnJlZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzMzOTlmZjtcbiAgICAgICAgfVxuICAgICAgICAudHJlYWRtaWxsT2NjdXBpZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmOTk7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAudHJlYWRtaWxsT2NjdXBpZWQ6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnRyZWFkSW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICMwMDAwZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmxpa2VCdXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGZmMDA7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5saWtlQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjYzAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG4vKiBTdHlsaW5nIGFuZCBmb3JtYXRpbmcgdGhlIHBhZ2UgKi8gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlcXVpcG1lbnRzKHsgZGF0YSB9KSB7XG4gIC8vIFJvdXRlci5wdXNoKFwiaHR0cHM6Ly9Hcm91cFByb2plY3RHWU0uemloYW9kb25nLnJlcGwuY29cIilcbiAgY29uc29sZS5sb2coZGF0YSlcbiAgY29uc3QgWyBzZXNzaW9uLCBsb2FkaW5nIF0gPSB1c2VTZXNzaW9uKClcbiAgLy9jb25zb2xlLmxvZyhzZXNzaW9uP1wic2Vzc2lvblwiOlwibm90IHNlc3Npb25cIilcbiAgcmV0dXJuIChcbiAgICBzZXNzaW9uID8gXG4gICAgLy8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiAod2luZG93LmFsZXJ0KFwib2NjdXB5IHRyZWFkbWlsbFwiKSl9PlxuICAgIC8vICAgXCJUcmVhZG1pbGwgMVwiXG4gICAgKFxuICAgIDxkaXY+XG4gICAgICA8aDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVUNMQVwiPlVDTEE8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZVwiPiBUcmVhZG1pbGxzIEF0IEpXQzwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaEJ1dHRvblwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIuL3NlYXJjaFwiPiBTZWFyY2ggPC9MaW5rPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbkJ1dHRvblwiIG9uQ2xpY2s9e3NpZ25PdXR9PlxuICAgICAgICAgIHNpZ24gb3V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXY+IGxvZ2dlZCBpbiBhcyB7c2Vzc2lvbi51c2VyLm5hbWV9IDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2RhdGEubWFwKCh0cmVhZG1pbGwpID0+IChcbiAgICAgICAgICA8VHJlYWRtaWxsIGtleT17dHJlYWRtaWxsLl9pZH0gdHJlYWRtaWxsPXt0cmVhZG1pbGx9IHNlc3Npb249IHtzZXNzaW9ufS8+XG4gICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzk5ZmY7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLlRpdGxlIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAubG9naW5CdXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2luQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM5OWZmO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2hCdXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICByaWdodDogMTEwcHg7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2hCdXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzk5ZmY7XG4gICAgICAgIH1cbiAgICAgICAgTGluayB7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLkpXQyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTIwcHg7XG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4MDBweDtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLlVDTEEge1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBjb2xvcjogI2ZmZmYwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgICkgOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVUNMQVwiPlVDTEE8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVcIj4gVHJlYWRtaWxscyBBdCBKV0M8L2Rpdj5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwPllvdSBhcmUgbm90IHBlcm1pdHRlZCB0byBzZWUgdGhpcyBwYWdlLiBQbGVhc2UgU2lnbiBpbiBvciBTaWduIHVwLi4uPC9wPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2lnbklufT5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSBcInNpZ25VcFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi4vc2lnblVwL3NpZ251cFwiPlxuICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnNpZ25VcCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM5OWZmO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5UaXRsZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLlVDTEEge1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgKVxufVxuXG4vKiBHZXQgZGF0YSBmcm9tIG1vbmdvZGIgRGF0YWJhc2Ugc28gdGhhdCBpdCBjYW4gYmUgZGlzcGxheWVkICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYlxuICAgIC5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKVxuICAgIC5maW5kKClcbiAgICAuc29ydCh7bmFtZTogMX0pXG4gICAgLnRvQXJyYXkoKVxuICBcbiAgLy8gY29uc3QgZGF0YSA9IGNvbGxlY3Rpb24uanNvbigpXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGE6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpLFxuICAgICAgc2Vzc2lvbjogYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuICAgIH1cbiAgfVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzExXzE4XzIwMjAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHJlYWRtaWxsKGNsaWVudCwgdHJlYWRtaWxsKXtcbiAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYlxuICAgIC5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKVxuICAgIC5pbnNlcnRPbmUodHJlYWRtaWxsKTtcbiAgY29uc29sZS5sb2coYE5ldyBUcmVhZG1pbGwgY3JlYXRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgaWQ6ICR7cmVzdWx0Lmluc2VydGVkSWR9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUcmVhZG1pbGxzKG5ld1RyZWFkbWlsbHMpe1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpLmluc2VydE1hbnkobmV3VHJlYWRtaWxscyk7XG4gIGNvbnNvbGUubG9nKGAke3Jlc3VsdC5pbnNlcnRlZENvdW50fSBuZXcgdHJlYWRtaWxsKHMpIGNyZWF0ZWQgd2l0aCB0aGUgZm9sbG93aW5nIGlkKHMpOmApXG4gIGNvbnNvbGUubG9nKHJlc3VsdC5pbnNlcnRlZElkcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cHNlcnRUcmVhZG1pbGwodHJlYWRtaWxsLCB1cGRhdGVkVHJlYWRtaWxsKSBcbi8vdXBkYXRlIGlmIGV4aXN0cywgaW5zZXJ0IGlmIG5vdFxue1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiXG4gICAgLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpXG4gICAgLnVwZGF0ZU9uZSh7IG5hbWU6IHRyZWFkbWlsbCB9LFxuICAgICAgICAgICAgICB7ICRzZXQ6IHVwZGF0ZWRUcmVhZG1pbGwgfSxcbiAgICAgICAgICAgICAgeyB1cHNlcnQ6IHRydWUgfSk7XG4gICAgY29uc29sZS5sb2coYCR7cmVzdWx0Lm1hdGNoZWRDb3VudH0gVHJlYWRtaWxsKHMpIG1hdGNoZWQgdGhlIG5hbWUuYCk7XG5cbiAgaWYgKHJlc3VsdC51cHNlcnRlZENvdW50ID4gMCkge1xuICAgICAgY29uc29sZS5sb2coYE9uZSB0cmVhZG1pbGwgd2FzIGluc2VydGVkIHdpdGggdGhlIGlkICR7cmVzdWx0LnVwc2VydGVkSWQuX2lkfWApO1xuICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYCR7cmVzdWx0Lm1vZGlmaWVkQ291bnR9IHRyZWFkbWlsbChzKSB3YXMvd2VyZSB1cGRhdGVkLmApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUcmVhZG1pbGwodHJlYWRtaWxsLCB1cGRhdGVkVHJlYWRtaWxsKSBcbi8vb25seSB1cGRhdGUsIG5vIGluc2VydGlvblxue1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKVxuICAgICAgICAudXBkYXRlT25lKHsgbmFtZTogdHJlYWRtaWxsIH0sIFxuICAgICAgICB7ICRzZXQ6IHVwZGF0ZWRUcmVhZG1pbGwgfSk7XG4gIGNvbnNvbGUubG9nKGAke3Jlc3VsdC5tYXRjaGVkQ291bnR9IGRvY3VtZW50KHMpIG1hdGNoZWQgdGhlIHF1ZXJ5IGNyaXRlcmlhLmApO1xuICBjb25zb2xlLmxvZyhgJHtyZXN1bHQubW9kaWZpZWRDb3VudH0gZG9jdW1lbnQocykgd2FzL3dlcmUgdXBkYXRlZC5gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRyZWFkbWlsbHModHJlYWRtaWxscykgXG4vL2RlbGV0ZSBhbGwgdHJlYWRtaWxscyB3aXRoIGEgc3BlY2lmaWMgbmFtZVxue1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG4gIHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpXG4gICAgICAgICAgLmRlbGV0ZU1hbnkoeyBcIm5hbWVcIjogdHJlYWRtaWxscyB9KTtcbiAgY29uc29sZS5sb2coYCR7cmVzdWx0LmRlbGV0ZWRDb3VudH0gZG9jdW1lbnQocykgd2FzL3dlcmUgZGVsZXRlZC5gKTtcbn1cbiovIl19 */\n/*@ sourceURL=/home/runner/GroupProjectGYM/pages/index.js */"));
}
/* Styling and formating the page */


function equipments({
  data
}) {
  // Router.push("https://GroupProjectGYM.zihaodong.repl.co")
  console.log(data);
  const [session, loading] = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_4__["useSession"])(); //console.log(session?"session":"not session")

  return session ? // <button onClick={() => (window.alert("occupy treadmill"))}>
  //   "Treadmill 1"
  __jsx("div", {
    className: "jsx-3350707949",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-3350707949",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3350707949" + " " + "UCLA",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "UCLA"), __jsx("div", {
    className: "jsx-3350707949" + " " + "Title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, " Treadmills At JWC"), __jsx("button", {
    className: "jsx-3350707949" + " " + "searchButton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, " Search ")), __jsx("button", {
    onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_4__["signOut"],
    className: "jsx-3350707949" + " " + "loginButton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, "sign out")), __jsx("div", {
    className: "jsx-3350707949",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, " logged in as ", session.user.name, " "), __jsx("div", {
    className: "jsx-3350707949",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, data.map(treadmill => __jsx(Treadmill, {
    key: treadmill._id,
    treadmill: treadmill,
    session: session,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3350707949",
    __self: this
  }, "h1.jsx-3350707949{background:#3399ff;color:#ffffff;}.Title.jsx-3350707949{padding-left:5px;}.loginButton.jsx-3350707949{background:#ffff00;position:absolute;top:25px;right:25px;width:80px;height:35px;}.loginButton.jsx-3350707949:hover{background:#3399ff;}.searchButton.jsx-3350707949{background:#ffff00;position:absolute;top:25px;right:110px;width:80px;height:35px;}.searchButton.jsx-3350707949:hover{background:#3399ff;}Link.jsx-3350707949{color:#000000;}.JWC.jsx-3350707949{position:absolute;top:120px;right:20px;height:800px;width:500px;}.UCLA.jsx-3350707949{font-style:italic;color:#ffff00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci9Hcm91cFByb2plY3RHWU0vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOElrQixBQUc4QixBQUlGLEFBR0UsQUFRQSxBQUdBLEFBUUEsQUFHTCxBQUdJLEFBT0EsY0FUcEIsR0F6QkEsQ0E0QlksQUFPSSxDQXZDQSxBQU9JLEFBUXBCLEFBR29CLEFBUXBCLFNBT2EsSUFPYixDQXZDQSxJQU9XLEFBV0EsRUFlSSxPQXpCRixBQVdDLE1BZUEsS0F6QkQsQ0FXQSxNQWViLElBekJjLENBV0EsV0FWZCxDQVdBIiwiZmlsZSI6Ii9ob21lL3J1bm5lci9Hcm91cFByb2plY3RHWU0vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vaW1wb3J0IFRyZWFkbWlsbCBmcm9tICcuLi9jb21wb25lbnRzL1RyZWFkbWlsbCdcblxuLy9UaGlzIGlzIHRlc3QgZm9yIGNvbW1pdCB1c2luZyByZXBsaXRcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vdXRpbC9tb25nb2RiJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbi8vaW1wb3J0IFRyZWFkbWlsbCBmcm9tICcuLi9jb21wb25lbnRzL1RyZWFkbWlsbCdcbi8vIGltcG9ydCB7IGhhbmRsZXIgfSBmcm9tICcuL2FwaS93cml0ZVRvRGF0YWJhc2UnXG4gXG4vKiBwYXNzIGluIGRhdGEgZnJvbSB1c2VyIGFuZCBkZWZpbmUgdGhlIGRpc3BsYXkgc3RydWN0dXJlIG9mIFRyZWFkbWlsbCovXG5mdW5jdGlvbiBUcmVhZG1pbGwoeyB0cmVhZG1pbGwsIHNlc3Npb24gfSkge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dHJlYWRtaWxsLnN0YXR1cz09PTEgPyBcInRyZWFkbWlsbEZyZWVcIiA6IFwidHJlYWRtaWxsT2NjdXBpZWRcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmZXRjaCAoXCJodHRwczovL0dyb3VwUHJvamVjdEdZTS56aWhhb2RvbmcucmVwbC5jby9hcGkvd3JpdGVUb0RhdGFiYXNlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIG5hbWU6IHRyZWFkbWlsbC5uYW1lLFxuICAgICAgICAgICAgICBfaWQ6IHRyZWFkbWlsbC5faWQsXG4gICAgICAgICAgICAgIGxpa2VkQnk6IHRyZWFkbWlsbC5MaWtlZF9CeSxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcIm9jY3VweVwiLFxuICAgICAgICAgICAgICBwYXNzd29yZDogXCJuL2FcIixcbiAgICAgICAgICAgICAgbmlja25hbWU6IHNlc3Npb24udXNlci5uYW1lLFxuICAgICAgICAgICAgICAvLyBzdGFydF90aW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAvLyBlbmRfdGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgLy8gdG90YWxUaW1lOiAwLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcuLi5cIilcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2god2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgICAgICAgICB9KX0+XG4gICAgICAgICAgPGRpdj57dHJlYWRtaWxsLm5hbWV9PC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibGlrZUJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZmV0Y2goXCJodHRwczovL0dyb3VwUHJvamVjdEdZTS56aWhhb2RvbmcucmVwbC5jby9hcGkvd3JpdGVUb0RhdGFiYXNlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIG5hbWU6IHRyZWFkbWlsbC5uYW1lLFxuICAgICAgICAgICAgICBfaWQ6IHRyZWFkbWlsbC5faWQsXG4gICAgICAgICAgICAgIGxpa2VkQnk6IHRyZWFkbWlsbC5MaWtlZF9CeSxcbiAgICAgICAgICAgICAgYWN0aW9uOiBcImxpa2VcIixcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwibi9hXCIsXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiBzZXNzaW9uLnVzZXIubmFtZSxcbiAgICAgICAgICAgICAgLy8gc3RhcnRfdGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgLy8gZW5kX3RpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgIC8vIHRvdGFsVGltZTogXCJuL2FcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZy4uLlwiKVxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICAgICAgICAgIH0pfT4gPGRpdj4gUG93ZXIgVXAgISA8L2Rpdj4gXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0cmVhZEluZm9cIj5cbiAgICAgICAgU3RhdHVzOiB7dHJlYWRtaWxsLnN0YXR1cz09PTE/XG4gICAgICAgIFwiZnJlZVwiOlwib2NjdXBpZWQgYnkgXCIuY29uY2F0KGAke3RyZWFkbWlsbC53aG9fb2NjdXBpZWR9YCl9PC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyZWFkSW5mb1wiPlBvd2VyZWQgVXAgQnkge3RyZWFkbWlsbC5MaWtlZF9CeX0gVXNlcnM8L2xpPlxuICAgICAgICA8YnIgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRyZWFkbWlsbEZyZWUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM5OWNjZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAudHJlYWRtaWxsRnJlZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzMzOTlmZjtcbiAgICAgICAgfVxuICAgICAgICAudHJlYWRtaWxsT2NjdXBpZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmOTk7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAudHJlYWRtaWxsT2NjdXBpZWQ6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnRyZWFkSW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICMwMDAwZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmxpa2VCdXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGZmMDA7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5saWtlQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjYzAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG4vKiBTdHlsaW5nIGFuZCBmb3JtYXRpbmcgdGhlIHBhZ2UgKi8gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlcXVpcG1lbnRzKHsgZGF0YSB9KSB7XG4gIC8vIFJvdXRlci5wdXNoKFwiaHR0cHM6Ly9Hcm91cFByb2plY3RHWU0uemloYW9kb25nLnJlcGwuY29cIilcbiAgY29uc29sZS5sb2coZGF0YSlcbiAgY29uc3QgWyBzZXNzaW9uLCBsb2FkaW5nIF0gPSB1c2VTZXNzaW9uKClcbiAgLy9jb25zb2xlLmxvZyhzZXNzaW9uP1wic2Vzc2lvblwiOlwibm90IHNlc3Npb25cIilcbiAgcmV0dXJuIChcbiAgICBzZXNzaW9uID8gXG4gICAgLy8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiAod2luZG93LmFsZXJ0KFwib2NjdXB5IHRyZWFkbWlsbFwiKSl9PlxuICAgIC8vICAgXCJUcmVhZG1pbGwgMVwiXG4gICAgKFxuICAgIDxkaXY+XG4gICAgICA8aDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVUNMQVwiPlVDTEE8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZVwiPiBUcmVhZG1pbGxzIEF0IEpXQzwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaEJ1dHRvblwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIuL3NlYXJjaFwiPiBTZWFyY2ggPC9MaW5rPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbkJ1dHRvblwiIG9uQ2xpY2s9e3NpZ25PdXR9PlxuICAgICAgICAgIHNpZ24gb3V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXY+IGxvZ2dlZCBpbiBhcyB7c2Vzc2lvbi51c2VyLm5hbWV9IDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2RhdGEubWFwKCh0cmVhZG1pbGwpID0+IChcbiAgICAgICAgICA8VHJlYWRtaWxsIGtleT17dHJlYWRtaWxsLl9pZH0gdHJlYWRtaWxsPXt0cmVhZG1pbGx9IHNlc3Npb249IHtzZXNzaW9ufS8+XG4gICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzk5ZmY7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLlRpdGxlIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAubG9naW5CdXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2luQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM5OWZmO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2hCdXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICByaWdodDogMTEwcHg7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2hCdXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzk5ZmY7XG4gICAgICAgIH1cbiAgICAgICAgTGluayB7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLkpXQyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTIwcHg7XG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4MDBweDtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLlVDTEEge1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBjb2xvcjogI2ZmZmYwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgICkgOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVUNMQVwiPlVDTEE8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVcIj4gVHJlYWRtaWxscyBBdCBKV0M8L2Rpdj5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwPllvdSBhcmUgbm90IHBlcm1pdHRlZCB0byBzZWUgdGhpcyBwYWdlLiBQbGVhc2UgU2lnbiBpbiBvciBTaWduIHVwLi4uPC9wPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2lnbklufT5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSBcInNpZ25VcFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi4vc2lnblVwL3NpZ251cFwiPlxuICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnNpZ25VcCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM5OWZmO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5UaXRsZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLlVDTEEge1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgKVxufVxuXG4vKiBHZXQgZGF0YSBmcm9tIG1vbmdvZGIgRGF0YWJhc2Ugc28gdGhhdCBpdCBjYW4gYmUgZGlzcGxheWVkICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYlxuICAgIC5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKVxuICAgIC5maW5kKClcbiAgICAuc29ydCh7bmFtZTogMX0pXG4gICAgLnRvQXJyYXkoKVxuICBcbiAgLy8gY29uc3QgZGF0YSA9IGNvbGxlY3Rpb24uanNvbigpXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGE6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpLFxuICAgICAgc2Vzc2lvbjogYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuICAgIH1cbiAgfVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzExXzE4XzIwMjAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHJlYWRtaWxsKGNsaWVudCwgdHJlYWRtaWxsKXtcbiAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYlxuICAgIC5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKVxuICAgIC5pbnNlcnRPbmUodHJlYWRtaWxsKTtcbiAgY29uc29sZS5sb2coYE5ldyBUcmVhZG1pbGwgY3JlYXRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgaWQ6ICR7cmVzdWx0Lmluc2VydGVkSWR9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUcmVhZG1pbGxzKG5ld1RyZWFkbWlsbHMpe1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpLmluc2VydE1hbnkobmV3VHJlYWRtaWxscyk7XG4gIGNvbnNvbGUubG9nKGAke3Jlc3VsdC5pbnNlcnRlZENvdW50fSBuZXcgdHJlYWRtaWxsKHMpIGNyZWF0ZWQgd2l0aCB0aGUgZm9sbG93aW5nIGlkKHMpOmApXG4gIGNvbnNvbGUubG9nKHJlc3VsdC5pbnNlcnRlZElkcyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cHNlcnRUcmVhZG1pbGwodHJlYWRtaWxsLCB1cGRhdGVkVHJlYWRtaWxsKSBcbi8vdXBkYXRlIGlmIGV4aXN0cywgaW5zZXJ0IGlmIG5vdFxue1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiXG4gICAgLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpXG4gICAgLnVwZGF0ZU9uZSh7IG5hbWU6IHRyZWFkbWlsbCB9LFxuICAgICAgICAgICAgICB7ICRzZXQ6IHVwZGF0ZWRUcmVhZG1pbGwgfSxcbiAgICAgICAgICAgICAgeyB1cHNlcnQ6IHRydWUgfSk7XG4gICAgY29uc29sZS5sb2coYCR7cmVzdWx0Lm1hdGNoZWRDb3VudH0gVHJlYWRtaWxsKHMpIG1hdGNoZWQgdGhlIG5hbWUuYCk7XG5cbiAgaWYgKHJlc3VsdC51cHNlcnRlZENvdW50ID4gMCkge1xuICAgICAgY29uc29sZS5sb2coYE9uZSB0cmVhZG1pbGwgd2FzIGluc2VydGVkIHdpdGggdGhlIGlkICR7cmVzdWx0LnVwc2VydGVkSWQuX2lkfWApO1xuICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYCR7cmVzdWx0Lm1vZGlmaWVkQ291bnR9IHRyZWFkbWlsbChzKSB3YXMvd2VyZSB1cGRhdGVkLmApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUcmVhZG1pbGwodHJlYWRtaWxsLCB1cGRhdGVkVHJlYWRtaWxsKSBcbi8vb25seSB1cGRhdGUsIG5vIGluc2VydGlvblxue1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiVHJlYWRtaWxsc1wiKVxuICAgICAgICAudXBkYXRlT25lKHsgbmFtZTogdHJlYWRtaWxsIH0sIFxuICAgICAgICB7ICRzZXQ6IHVwZGF0ZWRUcmVhZG1pbGwgfSk7XG4gIGNvbnNvbGUubG9nKGAke3Jlc3VsdC5tYXRjaGVkQ291bnR9IGRvY3VtZW50KHMpIG1hdGNoZWQgdGhlIHF1ZXJ5IGNyaXRlcmlhLmApO1xuICBjb25zb2xlLmxvZyhgJHtyZXN1bHQubW9kaWZpZWRDb3VudH0gZG9jdW1lbnQocykgd2FzL3dlcmUgdXBkYXRlZC5gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRyZWFkbWlsbHModHJlYWRtaWxscykgXG4vL2RlbGV0ZSBhbGwgdHJlYWRtaWxscyB3aXRoIGEgc3BlY2lmaWMgbmFtZVxue1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG4gIHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpXG4gICAgICAgICAgLmRlbGV0ZU1hbnkoeyBcIm5hbWVcIjogdHJlYWRtaWxscyB9KTtcbiAgY29uc29sZS5sb2coYCR7cmVzdWx0LmRlbGV0ZWRDb3VudH0gZG9jdW1lbnQocykgd2FzL3dlcmUgZGVsZXRlZC5gKTtcbn1cbiovIl19 */\n/*@ sourceURL=/home/runner/GroupProjectGYM/pages/index.js */")) : __jsx("div", {
    className: "jsx-427384923",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-427384923",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-427384923" + " " + "UCLA",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, "UCLA"), __jsx("div", {
    className: "jsx-427384923" + " " + "Title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, " Treadmills At JWC")), __jsx("p", {
    className: "jsx-427384923",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, "You are not permitted to see this page. Please Sign in or Sign up..."), __jsx("button", {
    onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_4__["signIn"],
    className: "jsx-427384923",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, "Sign in"), __jsx("button", {
    className: "jsx-427384923" + " " + "signUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./signUp/signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, "Sign up")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "427384923",
    __self: this
  }, ".signUp.jsx-427384923{margin-left:10px;}h1.jsx-427384923{background:#3399ff;color:#ffffff;}.Title.jsx-427384923{padding-left:5px;}.UCLA.jsx-427384923{font-style:italic;color:#ffff00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci9Hcm91cFByb2plY3RHWU0vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeU1zQixBQUdnQyxBQUdFLEFBSUYsQUFHQyxpQkFUcEIsQUFPQSxDQUdnQixDQVBBLGFBUWhCLENBUEEiLCJmaWxlIjoiL2hvbWUvcnVubmVyL0dyb3VwUHJvamVjdEdZTS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy9pbXBvcnQgVHJlYWRtaWxsIGZyb20gJy4uL2NvbXBvbmVudHMvVHJlYWRtaWxsJ1xuXG4vL1RoaXMgaXMgdGVzdCBmb3IgY29tbWl0IHVzaW5nIHJlcGxpdFxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICcuLi91dGlsL21vbmdvZGInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuLy9pbXBvcnQgVHJlYWRtaWxsIGZyb20gJy4uL2NvbXBvbmVudHMvVHJlYWRtaWxsJ1xuLy8gaW1wb3J0IHsgaGFuZGxlciB9IGZyb20gJy4vYXBpL3dyaXRlVG9EYXRhYmFzZSdcbiBcbi8qIHBhc3MgaW4gZGF0YSBmcm9tIHVzZXIgYW5kIGRlZmluZSB0aGUgZGlzcGxheSBzdHJ1Y3R1cmUgb2YgVHJlYWRtaWxsKi9cbmZ1bmN0aW9uIFRyZWFkbWlsbCh7IHRyZWFkbWlsbCwgc2Vzc2lvbiB9KSB7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0cmVhZG1pbGwuc3RhdHVzPT09MSA/IFwidHJlYWRtaWxsRnJlZVwiIDogXCJ0cmVhZG1pbGxPY2N1cGllZFwifVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZldGNoIChcImh0dHBzOi8vR3JvdXBQcm9qZWN0R1lNLnppaGFvZG9uZy5yZXBsLmNvL2FwaS93cml0ZVRvRGF0YWJhc2VcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgbmFtZTogdHJlYWRtaWxsLm5hbWUsXG4gICAgICAgICAgICAgIF9pZDogdHJlYWRtaWxsLl9pZCxcbiAgICAgICAgICAgICAgbGlrZWRCeTogdHJlYWRtaWxsLkxpa2VkX0J5LFxuICAgICAgICAgICAgICBhY3Rpb246IFwib2NjdXB5XCIsXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBcIm4vYVwiLFxuICAgICAgICAgICAgICBuaWNrbmFtZTogc2Vzc2lvbi51c2VyLm5hbWUsXG4gICAgICAgICAgICAgIC8vIHN0YXJ0X3RpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgIC8vIGVuZF90aW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAvLyB0b3RhbFRpbWU6IDAsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZy4uLlwiKVxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICA8ZGl2Pnt0cmVhZG1pbGwubmFtZX08L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsaWtlQnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmZXRjaChcImh0dHBzOi8vR3JvdXBQcm9qZWN0R1lNLnppaGFvZG9uZy5yZXBsLmNvL2FwaS93cml0ZVRvRGF0YWJhc2VcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgbmFtZTogdHJlYWRtaWxsLm5hbWUsXG4gICAgICAgICAgICAgIF9pZDogdHJlYWRtaWxsLl9pZCxcbiAgICAgICAgICAgICAgbGlrZWRCeTogdHJlYWRtaWxsLkxpa2VkX0J5LFxuICAgICAgICAgICAgICBhY3Rpb246IFwibGlrZVwiLFxuICAgICAgICAgICAgICBwYXNzd29yZDogXCJuL2FcIixcbiAgICAgICAgICAgICAgbmlja25hbWU6IHNlc3Npb24udXNlci5uYW1lLFxuICAgICAgICAgICAgICAvLyBzdGFydF90aW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAvLyBlbmRfdGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgLy8gdG90YWxUaW1lOiBcIm4vYVwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nLi4uXCIpXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgICAgICAgICAgfSl9PiA8ZGl2PiBQb3dlciBVcCAhIDwvZGl2PiBcbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyZWFkSW5mb1wiPlxuICAgICAgICBTdGF0dXM6IHt0cmVhZG1pbGwuc3RhdHVzPT09MT9cbiAgICAgICAgXCJmcmVlXCI6XCJvY2N1cGllZCBieSBcIi5jb25jYXQoYCR7dHJlYWRtaWxsLndob19vY2N1cGllZH1gKX08L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHJlYWRJbmZvXCI+UG93ZXJlZCBVcCBCeSB7dHJlYWRtaWxsLkxpa2VkX0J5fSBVc2VyczwvbGk+XG4gICAgICAgIDxiciAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudHJlYWRtaWxsRnJlZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzk5Y2NmZjtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC50cmVhZG1pbGxGcmVlOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM5OWZmO1xuICAgICAgICB9XG4gICAgICAgIC50cmVhZG1pbGxPY2N1cGllZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmY5OTtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC50cmVhZG1pbGxPY2N1cGllZDpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcbiAgICAgICAgfVxuICAgICAgICAudHJlYWRJbmZvIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBjb2xvcjogIzAwMDBmZjtcbiAgICAgICAgfVxuICAgICAgICAubGlrZUJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwZmYwMDtcbiAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxpa2VCdXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGNjMDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbi8qIFN0eWxpbmcgYW5kIGZvcm1hdGluZyB0aGUgcGFnZSAqLyBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVxdWlwbWVudHMoeyBkYXRhIH0pIHtcbiAgLy8gUm91dGVyLnB1c2goXCJodHRwczovL0dyb3VwUHJvamVjdEdZTS56aWhhb2RvbmcucmVwbC5jb1wiKVxuICBjb25zb2xlLmxvZyhkYXRhKVxuICBjb25zdCBbIHNlc3Npb24sIGxvYWRpbmcgXSA9IHVzZVNlc3Npb24oKVxuICAvL2NvbnNvbGUubG9nKHNlc3Npb24/XCJzZXNzaW9uXCI6XCJub3Qgc2Vzc2lvblwiKVxuICByZXR1cm4gKFxuICAgIHNlc3Npb24gPyBcbiAgICAvLyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+ICh3aW5kb3cuYWxlcnQoXCJvY2N1cHkgdHJlYWRtaWxsXCIpKX0+XG4gICAgLy8gICBcIlRyZWFkbWlsbCAxXCJcbiAgICAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJVQ0xBXCI+VUNMQTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpdGxlXCI+IFRyZWFkbWlsbHMgQXQgSldDPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoQnV0dG9uXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi4vc2VhcmNoXCI+IFNlYXJjaCA8L0xpbms+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luQnV0dG9uXCIgb25DbGljaz17c2lnbk91dH0+XG4gICAgICAgICAgc2lnbiBvdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2gxPlxuICAgICAgPGRpdj4gbG9nZ2VkIGluIGFzIHtzZXNzaW9uLnVzZXIubmFtZX0gPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZGF0YS5tYXAoKHRyZWFkbWlsbCkgPT4gKFxuICAgICAgICAgIDxUcmVhZG1pbGwga2V5PXt0cmVhZG1pbGwuX2lkfSB0cmVhZG1pbGw9e3RyZWFkbWlsbH0gc2Vzc2lvbj0ge3Nlc3Npb259Lz5cbiAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzMzOTlmZjtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgICAuVGl0bGUge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dpbkJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgIHJpZ2h0OiAyNXB4O1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgfVxuICAgICAgICAubG9naW5CdXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzk5ZmY7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaEJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgIHJpZ2h0OiAxMTBweDtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaEJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzMzOTlmZjtcbiAgICAgICAgfVxuICAgICAgICBMaW5rIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgICAuSldDIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMjBweDtcbiAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDgwMHB4O1xuICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgICAuVUNMQSB7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZjAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJVQ0xBXCI+VUNMQTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZVwiPiBUcmVhZG1pbGxzIEF0IEpXQzwvZGl2PlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHA+WW91IGFyZSBub3QgcGVybWl0dGVkIHRvIHNlZSB0aGlzIHBhZ2UuIFBsZWFzZSBTaWduIGluIG9yIFNpZ24gdXAuLi48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW59PlNpZ24gaW48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwic2lnblVwXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiLi9zaWduVXAvc2lnbnVwXCI+XG4gICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc2lnblVwIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzk5ZmY7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLlRpdGxlIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuVUNMQSB7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICApXG59XG5cbi8qIEdldCBkYXRhIGZyb20gbW9uZ29kYiBEYXRhYmFzZSBzbyB0aGF0IGl0IGNhbiBiZSBkaXNwbGF5ZWQgKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGRiXG4gICAgLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpXG4gICAgLmZpbmQoKVxuICAgIC5zb3J0KHtuYW1lOiAxfSlcbiAgICAudG9BcnJheSgpXG4gIFxuICAvLyBjb25zdCBkYXRhID0gY29sbGVjdGlvbi5qc29uKClcbiAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSksXG4gICAgICBzZXNzaW9uOiBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpXG4gICAgfVxuICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vMTFfMThfMjAyMC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLypcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUcmVhZG1pbGwoY2xpZW50LCB0cmVhZG1pbGwpe1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiXG4gICAgLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpXG4gICAgLmluc2VydE9uZSh0cmVhZG1pbGwpO1xuICBjb25zb2xlLmxvZyhgTmV3IFRyZWFkbWlsbCBjcmVhdGVkIHdpdGggdGhlIGZvbGxvd2luZyBpZDogJHtyZXN1bHQuaW5zZXJ0ZWRJZH1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRyZWFkbWlsbHMobmV3VHJlYWRtaWxscyl7XG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKClcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIikuaW5zZXJ0TWFueShuZXdUcmVhZG1pbGxzKTtcbiAgY29uc29sZS5sb2coYCR7cmVzdWx0Lmluc2VydGVkQ291bnR9IG5ldyB0cmVhZG1pbGwocykgY3JlYXRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgaWQocyk6YClcbiAgY29uc29sZS5sb2cocmVzdWx0Lmluc2VydGVkSWRzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwc2VydFRyZWFkbWlsbCh0cmVhZG1pbGwsIHVwZGF0ZWRUcmVhZG1pbGwpIFxuLy91cGRhdGUgaWYgZXhpc3RzLCBpbnNlcnQgaWYgbm90XG57XG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKClcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIilcbiAgICAudXBkYXRlT25lKHsgbmFtZTogdHJlYWRtaWxsIH0sXG4gICAgICAgICAgICAgIHsgJHNldDogdXBkYXRlZFRyZWFkbWlsbCB9LFxuICAgICAgICAgICAgICB7IHVwc2VydDogdHJ1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyhgJHtyZXN1bHQubWF0Y2hlZENvdW50fSBUcmVhZG1pbGwocykgbWF0Y2hlZCB0aGUgbmFtZS5gKTtcblxuICBpZiAocmVzdWx0LnVwc2VydGVkQ291bnQgPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgT25lIHRyZWFkbWlsbCB3YXMgaW5zZXJ0ZWQgd2l0aCB0aGUgaWQgJHtyZXN1bHQudXBzZXJ0ZWRJZC5faWR9YCk7XG4gIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtyZXN1bHQubW9kaWZpZWRDb3VudH0gdHJlYWRtaWxsKHMpIHdhcy93ZXJlIHVwZGF0ZWQuYCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRyZWFkbWlsbCh0cmVhZG1pbGwsIHVwZGF0ZWRUcmVhZG1pbGwpIFxuLy9vbmx5IHVwZGF0ZSwgbm8gaW5zZXJ0aW9uXG57XG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKClcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJUcmVhZG1pbGxzXCIpXG4gICAgICAgIC51cGRhdGVPbmUoeyBuYW1lOiB0cmVhZG1pbGwgfSwgXG4gICAgICAgIHsgJHNldDogdXBkYXRlZFRyZWFkbWlsbCB9KTtcbiAgY29uc29sZS5sb2coYCR7cmVzdWx0Lm1hdGNoZWRDb3VudH0gZG9jdW1lbnQocykgbWF0Y2hlZCB0aGUgcXVlcnkgY3JpdGVyaWEuYCk7XG4gIGNvbnNvbGUubG9nKGAke3Jlc3VsdC5tb2RpZmllZENvdW50fSBkb2N1bWVudChzKSB3YXMvd2VyZSB1cGRhdGVkLmApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVHJlYWRtaWxscyh0cmVhZG1pbGxzKSBcbi8vZGVsZXRlIGFsbCB0cmVhZG1pbGxzIHdpdGggYSBzcGVjaWZpYyBuYW1lXG57XG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKClcbiAgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlRyZWFkbWlsbHNcIilcbiAgICAgICAgICAuZGVsZXRlTWFueSh7IFwibmFtZVwiOiB0cmVhZG1pbGxzIH0pO1xuICBjb25zb2xlLmxvZyhgJHtyZXN1bHQuZGVsZXRlZENvdW50fSBkb2N1bWVudChzKSB3YXMvd2VyZSBkZWxldGVkLmApO1xufVxuKi8iXX0= */\n/*@ sourceURL=/home/runner/GroupProjectGYM/pages/index.js */"));
}
/* Get data from mongodb Database so that it can be displayed */

async function getServerSideProps(context) {
  const {
    db
  } = await Object(_util_mongodb__WEBPACK_IMPORTED_MODULE_2__["connectToDatabase"])();
  const data = await db.collection("Treadmills").find().sort({
    name: 1
  }).toArray(); // const data = collection.json()
  // console.log(data)
  // console.log(data)

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      session: await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_4__["getSession"])(context)
    }
  };
} /////////////////////////////////////////////////////////////////////////////11_18_2020/////////////////////////////////////////////////////////////////////////////////////////////

/*
export async function createTreadmill(client, treadmill){
  const { db } = await connectToDatabase()
  const result = await db
    .collection("Treadmills")
    .insertOne(treadmill);
  console.log(`New Treadmill created with the following id: ${result.insertedId}`);
}

export async function createTreadmills(newTreadmills){
  const { db } = await connectToDatabase()
  const result = await db.collection("Treadmills").insertMany(newTreadmills);
  console.log(`${result.insertedCount} new treadmill(s) created with the following id(s):`)
  console.log(result.insertedIds);
}

export async function upsertTreadmill(treadmill, updatedTreadmill) 
//update if exists, insert if not
{
  const { db } = await connectToDatabase()
  const result = await db
    .collection("Treadmills")
    .updateOne({ name: treadmill },
              { $set: updatedTreadmill },
              { upsert: true });
    console.log(`${result.matchedCount} Treadmill(s) matched the name.`);

  if (result.upsertedCount > 0) {
      console.log(`One treadmill was inserted with the id ${result.upsertedId._id}`);
  } else {
      console.log(`${result.modifiedCount} treadmill(s) was/were updated.`);
  }
}

export async function updateTreadmill(treadmill, updatedTreadmill) 
//only update, no insertion
{
  const { db } = await connectToDatabase()
  const result = await db
        .collection("Treadmills")
        .updateOne({ name: treadmill }, 
        { $set: updatedTreadmill });
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

export async function deleteTreadmills(treadmills) 
//delete all treadmills with a specific name
{
  const { db } = await connectToDatabase()
  result = await db.collection("Treadmills")
          .deleteMany({ "name": treadmills });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}
*/

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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/GroupProjectGYM/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map