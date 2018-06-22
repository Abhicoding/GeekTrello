module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/components/App.jsx":
/*!***************************************!*\
  !*** ./src/client/components/App.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/components/App.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _Header = __webpack_require__(/*! ./Header/Header.jsx */ "./src/client/components/Header/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(/*! ./Home/Home.jsx */ "./src/client/components/Home/Home.jsx");

var _Home2 = _interopRequireDefault(_Home);

var _Dashboard = __webpack_require__(/*! ./Dashboard/Dashboard.jsx */ "./src/client/components/Dashboard/Dashboard.jsx");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

__webpack_require__(/*! ./application.css */ "./src/client/components/application.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _defineProperty({
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, '__self', this),
        _react2.default.createElement(_reactRouterDom.Route, _defineProperty({ path: '/', component: _Header2.default, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, '__self', this)),
        _react2.default.createElement(_reactRouterDom.Route, _defineProperty({ exact: true, path: '/home', component: _Home2.default, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, '__self', this)),
        _react2.default.createElement(_reactRouterDom.Route, _defineProperty({ path: '/board', component: _Dashboard2.default, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, '__self', this))
      );
    }
  }]);

  return App;
}(_react.Component);

module.exports = App;

/***/ }),

/***/ "./src/client/components/Boards/Board.jsx":
/*!************************************************!*\
  !*** ./src/client/components/Boards/Board.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/components/Boards/Board.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./board.css */ "./src/client/components/Boards/board.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_Component) {
  _inherits(Board, _Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this)); // Here props need to be array object of boards


    _this.state = {
      board: props.board
    };
    return _this;
  }

  _createClass(Board, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _defineProperty({ className: 'boards', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, '__self', this),
        _react2.default.createElement(
          'button',
          _defineProperty({ className: 'boardbutton', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          }, '__self', this),
          this.state.board
        )
      );
    }
  }]);

  return Board;
}(_react.Component);

exports.default = Board;

/***/ }),

/***/ "./src/client/components/Boards/Boardcreate.jsx":
/*!******************************************************!*\
  !*** ./src/client/components/Boards/Boardcreate.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/components/Boards/Boardcreate.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./boardcreate.css */ "./src/client/components/Boards/boardcreate.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boardcreate = function (_Component) {
  _inherits(Boardcreate, _Component);

  function Boardcreate(props) {
    _classCallCheck(this, Boardcreate);

    var _this = _possibleConstructorReturn(this, (Boardcreate.__proto__ || Object.getPrototypeOf(Boardcreate)).call(this));

    _this.passBoardName = _this.passBoardName.bind(_this);
    return _this;
  }

  _createClass(Boardcreate, [{
    key: 'passBoardName',
    value: function passBoardName() {
      var name = prompt('Add a name for your board');
      if (name) {
        this.props.create(name);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _defineProperty({ className: 'boardcreate', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, '__self', this),
        _react2.default.createElement(
          'button',
          _defineProperty({ className: 'cardcreate', onClick: this.passBoardName, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, '__self', this),
          'Create Board'
        )
      );
    }
  }]);

  return Boardcreate;
}(_react.Component);

exports.default = Boardcreate;

/***/ }),

/***/ "./src/client/components/Boards/board.css":
/*!************************************************!*\
  !*** ./src/client/components/Boards/board.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/components/Boards/boardcreate.css":
/*!******************************************************!*\
  !*** ./src/client/components/Boards/boardcreate.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/components/Card/Card.jsx":
/*!*********************************************!*\
  !*** ./src/client/components/Card/Card.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/components/Card/Card.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./card.css */ "./src/client/components/Card/card.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

    _this.state = {
      title: props.title
    };
    return _this;
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _defineProperty({ className: 'card bg-light text-dark', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, '__self', this),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'card-title', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          }, '__self', this),
          _react2.default.createElement(
            'h5',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            }, '__self', this),
            this.props.item.cardtitle
          )
        ),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'card-body', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }, '__self', this),
          this.props.item.carddesc
        )
      );
    }
  }]);

  return Card;
}(_react.Component);

exports.default = Card;

/***/ }),

/***/ "./src/client/components/Card/Cardmodal.jsx":
/*!**************************************************!*\
  !*** ./src/client/components/Card/Cardmodal.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/components/Card/Cardmodal.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./cardmodal.css */ "./src/client/components/Card/cardmodal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cardmodal = function (_Component) {
  _inherits(Cardmodal, _Component);

  function Cardmodal(props) {
    _classCallCheck(this, Cardmodal);

    var _this = _possibleConstructorReturn(this, (Cardmodal.__proto__ || Object.getPrototypeOf(Cardmodal)).call(this));

    _this.onClose = _this.onClose.bind(_this);
    _this.onKeyUp = _this.onKeyUp.bind(_this);
    _this.onSubmission = _this.onSubmission.bind(_this);
    return _this;
  }

  _createClass(Cardmodal, [{
    key: 'onClose',
    value: function onClose() {
      this.props.cardmodalclose();
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp(e) {
      if (e.which === 27) {
        this.props.cardmodalclose();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keyup', this.onKeyUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keyup', this.onKeyUp);
    }
  }, {
    key: 'onSubmission',
    value: function onSubmission(e) {
      e.preventDefault();
      this.props.newcard({
        listid: e.target.id,
        title: e.target.cardtitle.value,
        desc: e.target.description.value
      });
      this.props.cardmodalclose();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        _defineProperty({ onSubmit: this.onSubmission, id: this.props.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, '__self', this),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'modal fade show', id: 'myModal', style: { display: 'block' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, '__self', this),
          _react2.default.createElement(
            'div',
            _defineProperty({ className: 'modal-dialog', __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            }, '__self', this),
            _react2.default.createElement(
              'div',
              _defineProperty({ className: 'modal-content', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                },
                __self: this
              }, '__self', this),
              _react2.default.createElement(
                'div',
                _defineProperty({ className: 'modal-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  },
                  __self: this
                }, '__self', this),
                _react2.default.createElement('input', _defineProperty({ className: 'titleinput', name: 'cardtitle', type: 'text', placeholder: 'Card Heading', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  },
                  __self: this
                }, '__self', this)),
                _react2.default.createElement(
                  'button',
                  _defineProperty({ className: 'close', type: 'button', onClick: this.onClose, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    },
                    __self: this
                  }, '__self', this),
                  '\xD7'
                )
              ),
              _react2.default.createElement(
                'div',
                _defineProperty({ className: 'modal-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  },
                  __self: this
                }, '__self', this),
                _react2.default.createElement('textarea', _defineProperty({ className: 'descriptioninput', name: 'description', placeholder: 'Add description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  },
                  __self: this
                }, '__self', this))
              ),
              _react2.default.createElement(
                'div',
                _defineProperty({ className: 'modal-footer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                }, '__self', this),
                _react2.default.createElement(
                  'button',
                  _defineProperty({ className: 'btn btn-light', type: 'submit', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    },
                    __self: this
                  }, '__self', this),
                  'Save'
                ),
                _react2.default.createElement(
                  'button',
                  _defineProperty({ className: 'btn btn-danger', type: 'button', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    },
                    __self: this
                  }, '__self', this),
                  'Close'
                )
              )
            )
          )
        ),
        _react2.default.createElement('div', _defineProperty({ className: 'modal-backdrop fade show', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, '__self', this))
      );
    }
  }]);

  return Cardmodal;
}(_react.Component);

exports.default = Cardmodal;

/***/ }),

/***/ "./src/client/components/Card/card.css":
/*!*********************************************!*\
  !*** ./src/client/components/Card/card.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/components/Card/cardmodal.css":
/*!**************************************************!*\
  !*** ./src/client/components/Card/cardmodal.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/components/Dashboard/Dashboard.jsx":
/*!*******************************************************!*\
  !*** ./src/client/components/Dashboard/Dashboard.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/components/Dashboard/Dashboard.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Listcreate = __webpack_require__(/*! ./../List/Listcreate.jsx */ "./src/client/components/List/Listcreate.jsx");

var _Listcreate2 = _interopRequireDefault(_Listcreate);

var _List = __webpack_require__(/*! ./../List/List.jsx */ "./src/client/components/List/List.jsx");

var _List2 = _interopRequireDefault(_List);

var _Cardmodal = __webpack_require__(/*! ./../Card/Cardmodal.jsx */ "./src/client/components/Card/Cardmodal.jsx");

var _Cardmodal2 = _interopRequireDefault(_Cardmodal);

__webpack_require__(/*! ./dashboard.css */ "./src/client/components/Dashboard/dashboard.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));

    _this.state = {
      lists: [{
        listid: 0,
        listname: 'List X',
        cards: [{
          cardtitle: 'something',
          carddesc: 'some description'
        }]
      }],
      cardmodal: {
        status: '',
        id: ''
      }
    };
    _this.newList = _this.newList.bind(_this);
    _this.newCardModalClose = _this.newCardModalClose.bind(_this);
    _this.newCardModalOpen = _this.newCardModalOpen.bind(_this);
    _this.newCardCreate = _this.newCardCreate.bind(_this);
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'newList',
    value: function newList(name) {
      this.setState({
        lists: this.state.lists.concat([{
          listid: this.state.lists.length,
          listname: name,
          cards: []
        }])
      });
    }
  }, {
    key: 'newCardModalClose',
    value: function newCardModalClose() {
      return this.setState({
        cardmodal: {
          status: '',
          id: ''
        }
      });
    }
  }, {
    key: 'newCardModalOpen',
    value: function newCardModalOpen(idinput) {
      return this.setState({
        cardmodal: {
          status: 'modal fade show',
          id: idinput
        }
      });
    }
  }, {
    key: 'newCardCreate',
    value: function newCardCreate(cardinfo) {
      this.state.lists[cardinfo.listid].cards.push({
        cardtitle: cardinfo.title,
        carddesc: cardinfo.desc
      });
      this.setState({
        lists: this.state.lists
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var listItem = this.state.lists.map(function (d, i) {
        return _react2.default.createElement(
          'li',
          _defineProperty({ key: i, __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: _this2
          }, '__self', _this2),
          _react2.default.createElement(_List2.default, _defineProperty({ item: d,
            cardmodalopen: _this2.newCardModalOpen, __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: _this2
          }, '__self', _this2))
        );
      });
      return _react2.default.createElement(
        'div',
        _defineProperty({ className: 'dashboard', __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, '__self', this),
        this.state.cardmodal.status ? _react2.default.createElement(_Cardmodal2.default, _defineProperty({ cardmodalclose: this.newCardModalClose,
          id: this.state.cardmodal.id, newcard: this.newCardCreate, __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, '__self', this)) : null,
        _react2.default.createElement(
          'ul',
          _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, '__self', this),
          listItem,
          _react2.default.createElement(_Listcreate2.default, _defineProperty({ newlist: this.newList, __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, '__self', this))
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = Dashboard;

/***/ }),

/***/ "./src/client/components/Dashboard/dashboard.css":
/*!*******************************************************!*\
  !*** ./src/client/components/Dashboard/dashboard.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/components/Header/Header.jsx":
/*!*************************************************!*\
  !*** ./src/client/components/Header/Header.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/components/Header/Header.jsx';

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Logo = __webpack_require__(/*! ../../shared/logo/Logo.jsx */ "./src/client/shared/logo/Logo.jsx");

var _Logo2 = _interopRequireDefault(_Logo);

__webpack_require__(/*! ./header.css */ "./src/client/components/Header/header.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Header = function Header() {
  return _react2.default.createElement(
    'div',
    _defineProperty({ className: 'header', __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, '__self', undefined),
    _react2.default.createElement(_Logo2.default, _defineProperty({
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, '__self', undefined))
  );
};

exports.default = Header;

/***/ }),

/***/ "./src/client/components/Header/header.css":
/*!*************************************************!*\
  !*** ./src/client/components/Header/header.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/components/Home/Home.jsx":
/*!*********************************************!*\
  !*** ./src/client/components/Home/Home.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/components/Home/Home.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _Boardcreate = __webpack_require__(/*! ./../Boards/Boardcreate.jsx */ "./src/client/components/Boards/Boardcreate.jsx");

var _Boardcreate2 = _interopRequireDefault(_Boardcreate);

var _Board = __webpack_require__(/*! ./../Boards/Board.jsx */ "./src/client/components/Boards/Board.jsx");

var _Board2 = _interopRequireDefault(_Board);

__webpack_require__(/*! ./home.css */ "./src/client/components/Home/home.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      boards: ['first', 'second', 'third', 'fourth']
    };
    _this.newBoard = _this.newBoard.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'newBoard',
    value: function newBoard(name) {
      this.setState({
        boards: this.state.boards.concat([name])
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var boardItem = this.state.boards.map(function (d, i) {
        return _react2.default.createElement(
          'li',
          _defineProperty({ key: i, __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: _this2
          }, '__self', _this2),
          _react2.default.createElement(
            _reactRouterDom.Link,
            _defineProperty({ to: '/board', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: _this2
            }, '__self', _this2),
            _react2.default.createElement(_Board2.default, _defineProperty({ board: d, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: _this2
            }, '__self', _this2))
          )
        );
      });
      return _react2.default.createElement(
        'div',
        _defineProperty({ className: 'divboard', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, '__self', this),
        _react2.default.createElement(
          'ul',
          _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, '__self', this),
          boardItem,
          _react2.default.createElement(_Boardcreate2.default, _defineProperty({ create: this.newBoard, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, '__self', this))
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ "./src/client/components/Home/home.css":
/*!*********************************************!*\
  !*** ./src/client/components/Home/home.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/components/List/List.jsx":
/*!*********************************************!*\
  !*** ./src/client/components/List/List.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/components/List/List.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./list.css */ "./src/client/components/List/list.css");

var _Card = __webpack_require__(/*! ./../Card/Card.jsx */ "./src/client/components/Card/Card.jsx");

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));

    _this.state = {
      item: props.item
    };
    _this.onCardCreate = _this.onCardCreate.bind(_this);
    return _this;
  }

  _createClass(List, [{
    key: 'onCardCreate',
    value: function onCardCreate(e) {
      this.props.cardmodalopen(e.target.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var cardItem = this.state.item.cards.map(function (d, i) {
        return _react2.default.createElement(
          'li',
          _defineProperty({ key: i, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: _this2
          }, '__self', _this2),
          _react2.default.createElement(_Card2.default, _defineProperty({ item: d, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: _this2
          }, '__self', _this2))
        );
      });
      return _react2.default.createElement(
        'div',
        _defineProperty({ className: 'listcontainer', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, '__self', this),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'listheader', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, '__self', this),
          this.state.item.listname
        ),
        _react2.default.createElement(
          'ul',
          _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, '__self', this),
          cardItem
        ),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'createcard', __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, '__self', this),
          _react2.default.createElement(
            'button',
            _defineProperty({ type: 'button', id: this.state.item.listid, className: 'btn btn-light', onClick: this.onCardCreate, __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            }, '__self', this),
            ' Add a new Card '
          )
        )
      );
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;

/***/ }),

/***/ "./src/client/components/List/Listcreate.jsx":
/*!***************************************************!*\
  !*** ./src/client/components/List/Listcreate.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/components/List/Listcreate.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./listcreate.css */ "./src/client/components/List/listcreate.css");

var _Listform = __webpack_require__(/*! ./Listform.jsx */ "./src/client/components/List/Listform.jsx");

var _Listform2 = _interopRequireDefault(_Listform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listcreate = function (_Component) {
  _inherits(Listcreate, _Component);

  function Listcreate(props) {
    _classCallCheck(this, Listcreate);

    var _this = _possibleConstructorReturn(this, (Listcreate.__proto__ || Object.getPrototypeOf(Listcreate)).call(this));

    _this.state = {
      liststatus: true
    };
    _this.onClickToggle = _this.onClickToggle.bind(_this);
    return _this;
  }

  _createClass(Listcreate, [{
    key: 'onClickToggle',
    value: function onClickToggle() {
      this.setState({
        liststatus: !this.state.liststatus
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _defineProperty({ className: 'listcreate', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, '__self', this),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'buttondiv', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }, '__self', this),
          this.state.liststatus ? _react2.default.createElement('input', _defineProperty({ className: 'addlist', type: 'submit', value: 'Add list', onClick: this.onClickToggle, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, '__self', this)) : null
        ),
        _react2.default.createElement(
          'div',
          _defineProperty({ className: 'formdiv', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, '__self', this),
          !this.state.liststatus ? _react2.default.createElement(_Listform2.default, _defineProperty({ toggle: this.onClickToggle, newlist: this.props.newlist.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, '__self', this)) : null
        )
      );
    }
  }]);

  return Listcreate;
}(_react.Component);

exports.default = Listcreate;

/***/ }),

/***/ "./src/client/components/List/Listform.jsx":
/*!*************************************************!*\
  !*** ./src/client/components/List/Listform.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/components/List/Listform.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./listform.css */ "./src/client/components/List/listform.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listform = function (_Component) {
  _inherits(Listform, _Component);

  function Listform(props) {
    _classCallCheck(this, Listform);

    var _this = _possibleConstructorReturn(this, (Listform.__proto__ || Object.getPrototypeOf(Listform)).call(this));

    _this.onFormSubmit = _this.onFormSubmit.bind(_this);
    return _this;
  }

  _createClass(Listform, [{
    key: 'onFormSubmit',
    value: function onFormSubmit(e) {
      e.preventDefault();
      if (e.target.listname.value) {
        this.props.newlist(e.target.listname.value);
      }
      console.log(this.props.toggle());
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('did I render?');
      return _react2.default.createElement(
        'div',
        _defineProperty({ className: 'form-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, '__self', this),
        _react2.default.createElement(
          'form',
          _defineProperty({ onSubmit: this.onFormSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }, '__self', this),
          _react2.default.createElement('input', _defineProperty({ className: 'name', name: 'listname', type: 'text', placeholder: 'Add a name', maxLength: '512', autoComplete: 'off', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }, '__self', this)),
          _react2.default.createElement(
            'div',
            _defineProperty({ className: 'controls', __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            }, '__self', this),
            _react2.default.createElement('input', _defineProperty({ className: 'submit', type: 'submit', value: 'save', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            }, '__self', this)),
            _react2.default.createElement(
              'button',
              _defineProperty({ type: 'close', className: 'close', 'aria-label': 'Close', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: this
              }, '__self', this),
              '\xD7'
            )
          )
        )
      );
    }
  }]);

  return Listform;
}(_react.Component);

exports.default = Listform;

/***/ }),

/***/ "./src/client/components/List/list.css":
/*!*********************************************!*\
  !*** ./src/client/components/List/list.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/components/List/listcreate.css":
/*!***************************************************!*\
  !*** ./src/client/components/List/listcreate.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/components/List/listform.css":
/*!*************************************************!*\
  !*** ./src/client/components/List/listform.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/components/application.css":
/*!***********************************************!*\
  !*** ./src/client/components/application.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/shared/logo/Logo.jsx":
/*!*****************************************!*\
  !*** ./src/client/shared/logo/Logo.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/client/shared/logo/Logo.jsx';

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./logo.css */ "./src/client/shared/logo/logo.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Logo = function Logo() {
  return _react2.default.createElement(
    'div',
    _defineProperty({ className: 'logo', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: undefined
    }, '__self', undefined),
    _react2.default.createElement(
      'h1',
      _defineProperty({
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: undefined
      }, '__self', undefined),
      'GeekTrello'
    )
  );
};

exports.default = Logo;

/***/ }),

/***/ "./src/client/shared/logo/logo.css":
/*!*****************************************!*\
  !*** ./src/client/shared/logo/logo.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsxFileName = '/home/abhishek/Desktop/geek-trello/src/server/index.js';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = __webpack_require__(/*! express */ "express");
var React = __webpack_require__(/*! react */ "react");
var ReactDOMServer = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _require = __webpack_require__(/*! react-router-dom */ "react-router-dom"),
    StaticRouter = _require.StaticRouter;

var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var path = __webpack_require__(/*! path */ "path");
var fs = __webpack_require__(/*! fs */ "fs");

var App = __webpack_require__(/*! ../client/components/App.jsx */ "./src/client/components/App.jsx");

console.log(App);

// console.log(ReactDOMServer.renderToString(<StaticRouter location={req.url}> <App /> </StaticRouter>))

var app = express();

mongoose.connect('mongodb+srv://adminGeekTrello:' + process.env.MONGO_ATLAS_PW + '@cluster0-giwk6.mongodb.net/test?retryWrites=true');

var testRoutes = __webpack_require__(/*! ./routes/test */ "./src/server/routes/test.js");

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/test', testRoutes);

app.get('/', function (req, res) {
  var context = {};
  var app = ReactDOMServer.renderToString(React.createElement(
    StaticRouter,
    _defineProperty({ location: req.url, context: context, __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, '__self', this),
    ' ',
    React.createElement(App, _defineProperty({
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, '__self', this)),
    ' '
  ));
  fs.read(path.resolve('/public/index.html', 'utf-8', function (err, data) {
    if (err) {
      console.log('We have a problem!', err);
      return res.status(500).send('Oops!');
    }
    return res.send(data.replace('<div class="" id="root"></div>', '<div class="" id="root">' + app + '</div>'));
  }));
});

app.listen(5000, function () {
  console.log('On 5000');
});

/***/ }),

/***/ "./src/server/models/test.js":
/*!***********************************!*\
  !*** ./src/server/models/test.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var testSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  message: String
});

module.exports = mongoose.model('test', testSchema);

/***/ }),

/***/ "./src/server/routes/test.js":
/*!***********************************!*\
  !*** ./src/server/routes/test.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(/*! express */ "express");
var router = express.Router();
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var Test = __webpack_require__(/*! ../models/test */ "./src/server/models/test.js");

router.get('/', function (req, res, next) {
  res.status(200).send('success');
});

router.post('/', function (req, res, next) {
  var test = new Test({
    _id: new mongoose.Types.ObjectId(),
    message: req.body
  });
  test.save().then(function (result) {
    console.log(result);
    res.status(200).json({
      say: 'done',
      message: test,
      result: result
    });
  }).catch(function (err) {
    return console.log(err);
  });
});

module.exports = router;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map