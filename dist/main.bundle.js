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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Node.js":
/*!*********************!*\
  !*** ./lib/Node.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  _classCallCheck(this, Node);

  this.data = data;
  this.childrenCount = 0;
  this.endOfWord = false;
  this.leafNode = false;
  this.children = {};
};

exports.default = Node;

/***/ }),

/***/ "./lib/PrefixTrie.js":
/*!***************************!*\
  !*** ./lib/PrefixTrie.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node = __webpack_require__(/*! ./Node.js */ "./lib/Node.js");

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrefixTrie = function () {
  function PrefixTrie() {
    _classCallCheck(this, PrefixTrie);

    this.wordCount = 0;
    this.rootNode = new _Node2.default();
  }

  _createClass(PrefixTrie, [{
    key: 'insert',
    value: function insert(word) {
      var letters = [].concat(_toConsumableArray(word.toLowerCase()));
      var currNode = this.rootNode;

      letters.forEach(function (letter) {
        if (!(letter in currNode.children)) {
          var newLetterNode = new _Node2.default(letter);

          currNode.children[letter] = newLetterNode;
          currNode.childrenCount++;
          currNode = currNode.children[letter];
        } else {
          currNode = currNode.children[letter];
        }
      });

      if (!currNode.endOfWord) {
        currNode.endOfWord = true;
        this.wordCount++;
      }
    }
  }, {
    key: 'suggest',
    value: function suggest(prefix) {
      var letters = [].concat(_toConsumableArray(prefix.toLowerCase()));
      var currNode = this.rootNode;

      for (var i = 0; i < letters.length; i++) {
        currNode = currNode.children[letters[i]];
        if (!currNode) {
          return [];
        }
      }

      var suggestions = [];

      getWords(prefix, currNode);

      function getWords(stringSoFar, node) {
        Object.keys(node.children).forEach(function (key) {
          var newString = stringSoFar + key;

          if (node.children[key].endOfWord) {
            suggestions.push(newString);
          }

          getWords(newString, node.children[key]);
        });
      }
      console.log(suggestions);
      return suggestions;
    }
  }, {
    key: 'populate',
    value: function populate(words) {
      var _this = this;

      words.forEach(function (word) {
        return _this.insert(word.toLowerCase());
      });
    }
  }]);

  return PrefixTrie;
}();

// [hello, hellos, heck]

// autofill.push([...prefix, leter, leter, letter].join(''));


exports.default = PrefixTrie;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PrefixTrie = __webpack_require__(/*! ./PrefixTrie */ "./lib/PrefixTrie.js");

console.log('heyyyyy');

// const newTrie = new PrefixTrie();

// const path = '/usr/share/dict/words';
// const dictionary = fs
//   .readFileSync(path)
//   .toString()
//   .trim()
//   .split('\n');

// newTrie.populate(dictionary);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1ByZWZpeFRyaWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5vZGUiLCJkYXRhIiwiY2hpbGRyZW5Db3VudCIsImVuZE9mV29yZCIsImxlYWZOb2RlIiwiY2hpbGRyZW4iLCJQcmVmaXhUcmllIiwid29yZENvdW50Iiwicm9vdE5vZGUiLCJ3b3JkIiwibGV0dGVycyIsInRvTG93ZXJDYXNlIiwiY3Vyck5vZGUiLCJmb3JFYWNoIiwibGV0dGVyIiwibmV3TGV0dGVyTm9kZSIsInByZWZpeCIsImkiLCJsZW5ndGgiLCJzdWdnZXN0aW9ucyIsImdldFdvcmRzIiwic3RyaW5nU29GYXIiLCJub2RlIiwiT2JqZWN0Iiwia2V5cyIsIm5ld1N0cmluZyIsImtleSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwid29yZHMiLCJpbnNlcnQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FB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LFNBQVo7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDIiwiZmlsZSI6ImRpc3QvbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihkYXRhID0gbnVsbCkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5jaGlsZHJlbkNvdW50ID0gMDtcbiAgICB0aGlzLmVuZE9mV29yZCA9IGZhbHNlO1xuICAgIHRoaXMubGVhZk5vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNoaWxkcmVuID0ge307XG4gIH1cbn1cbiIsImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWZpeFRyaWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLndvcmRDb3VudCA9IDA7XG4gICAgdGhpcy5yb290Tm9kZSA9IG5ldyBOb2RlKCk7XG4gIH1cblxuICBpbnNlcnQod29yZCkge1xuICAgIGxldCBsZXR0ZXJzID0gWy4uLndvcmQudG9Mb3dlckNhc2UoKV07XG4gICAgbGV0IGN1cnJOb2RlID0gdGhpcy5yb290Tm9kZTtcblxuICAgIGxldHRlcnMuZm9yRWFjaChsZXR0ZXIgPT4ge1xuICAgICAgaWYgKCEobGV0dGVyIGluIGN1cnJOb2RlLmNoaWxkcmVuKSkge1xuICAgICAgICBsZXQgbmV3TGV0dGVyTm9kZSA9IG5ldyBOb2RlKGxldHRlcik7XG5cbiAgICAgICAgY3Vyck5vZGUuY2hpbGRyZW5bbGV0dGVyXSA9IG5ld0xldHRlck5vZGU7XG4gICAgICAgIGN1cnJOb2RlLmNoaWxkcmVuQ291bnQrKztcbiAgICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5jaGlsZHJlbltsZXR0ZXJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5jaGlsZHJlbltsZXR0ZXJdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFjdXJyTm9kZS5lbmRPZldvcmQpIHtcbiAgICAgIGN1cnJOb2RlLmVuZE9mV29yZCA9IHRydWU7XG4gICAgICB0aGlzLndvcmRDb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIHN1Z2dlc3QocHJlZml4KSB7XG4gICAgbGV0IGxldHRlcnMgPSBbLi4ucHJlZml4LnRvTG93ZXJDYXNlKCldO1xuICAgIGxldCBjdXJyTm9kZSA9IHRoaXMucm9vdE5vZGU7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUuY2hpbGRyZW5bbGV0dGVyc1tpXV07XG4gICAgICBpZiAoIWN1cnJOb2RlKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IFtdO1xuXG4gICAgZ2V0V29yZHMocHJlZml4LCBjdXJyTm9kZSk7XG5cbiAgICBmdW5jdGlvbiBnZXRXb3JkcyhzdHJpbmdTb0Zhciwgbm9kZSkge1xuICAgICAgT2JqZWN0LmtleXMobm9kZS5jaGlsZHJlbikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgbmV3U3RyaW5nID0gc3RyaW5nU29GYXIgKyBrZXk7XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5ba2V5XS5lbmRPZldvcmQpIHtcbiAgICAgICAgICBzdWdnZXN0aW9ucy5wdXNoKG5ld1N0cmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRXb3JkcyhuZXdTdHJpbmcsIG5vZGUuY2hpbGRyZW5ba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc3VnZ2VzdGlvbnMpO1xuICAgIHJldHVybiBzdWdnZXN0aW9ucztcbiAgfVxuXG4gIHBvcHVsYXRlKHdvcmRzKSB7XG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHRoaXMuaW5zZXJ0KHdvcmQudG9Mb3dlckNhc2UoKSkpO1xuICB9XG59XG5cbi8vIFtoZWxsbywgaGVsbG9zLCBoZWNrXVxuXG4vLyBhdXRvZmlsbC5wdXNoKFsuLi5wcmVmaXgsIGxldGVyLCBsZXRlciwgbGV0dGVyXS5qb2luKCcnKSk7XG4iLCJjb25zdCBQcmVmaXhUcmllID0gcmVxdWlyZSgnLi9QcmVmaXhUcmllJyk7XG5cbmNvbnNvbGUubG9nKCdoZXl5eXl5Jyk7XG5cbi8vIGNvbnN0IG5ld1RyaWUgPSBuZXcgUHJlZml4VHJpZSgpO1xuXG4vLyBjb25zdCBwYXRoID0gJy91c3Ivc2hhcmUvZGljdC93b3Jkcyc7XG4vLyBjb25zdCBkaWN0aW9uYXJ5ID0gZnNcbi8vICAgLnJlYWRGaWxlU3luYyhwYXRoKVxuLy8gICAudG9TdHJpbmcoKVxuLy8gICAudHJpbSgpXG4vLyAgIC5zcGxpdCgnXFxuJyk7XG5cbi8vIG5ld1RyaWUucG9wdWxhdGUoZGljdGlvbmFyeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9