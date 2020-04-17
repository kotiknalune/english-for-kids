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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/Card.js":
/*!*************************!*\
  !*** ./src/app/Card.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(category, word, translation) {
    _classCallCheck(this, Card);

    this.word = word;
    this.translation = translation;
    this.category = category;
    this.image = new Image();
    this.image.src = "/src/assets/images/".concat(this.category, "/").concat(this.word, ".svg");
    this.audio = new Audio();
    this.audio.src = "https://wooordhunt.ru/data/sound/word/uk/mp3/".concat(word, ".mp3");
    this.playMode = false; // this.timesTrained = timesTrained;
    // this.timesPlayed = timesPlayed;
    // this.timesCorrect = timesCorrect;
  }

  _createClass(Card, [{
    key: "playSound",
    value: function playSound() {
      this.audio.play();
    }
  }]);

  return Card;
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  Card: Card
});

/***/ }),

/***/ "./src/app/animator.js":
/*!*****************************!*\
  !*** ./src/app/animator.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var navToggle = document.querySelector('.navigation__toggle');
var menu = document.querySelector('.menu');
navToggle.addEventListener('click', function () {
  navToggle.classList.toggle('open');
  menu.classList.toggle('show');
});
var checkBox = document.getElementById('switch__input');
var body = document.querySelector('body');
checkBox.addEventListener('click', function () {
  if (checkBox.checked === true) {
    body.classList.add('play-mode');
  } else {
    body.classList.remove('play-mode');
  }
});

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/app/Card.js");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./words */ "./src/app/words.json");
var _words__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./words */ "./src/app/words.json", 1);
/* harmony import */ var _animator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animator */ "./src/app/animator.js");
/* harmony import */ var _animator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_animator__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.elements = {
      container: null,
      cards: []
    };
    this.properties = {
      playMode: false // привязать к свитчеру

    }; // this.categories = words.category;

    this.init();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      this.createCategories();
    }
  }, {
    key: "createCategories",
    value: function createCategories() {
      var elements = this.elements;
      var main = document.querySelector('.main-container');
      elements.container = document.createElement('div');
      elements.container.classList.add('container__cards');
      main.append(elements.container);
      _words__WEBPACK_IMPORTED_MODULE_1__.forEach(function (category) {
        var categoryCard = document.createElement('div');
        categoryCard.classList.add('category-card');
        categoryCard.innerHTML = "\n          <a href=\"#".concat(category.name, "\">\n            <div class=\"card__image card__image_").concat(category.name, "\">\n              <img src=\"../src/assets/images/categories/").concat(category.name, "-category.png\" alt=\"").concat(category.name, "\">\n            </div>\n            <div class=\"card__title\">").concat(category.name, "</div>\n          </a>\n        ");
        elements.container.append(categoryCard);
      });
    }
  }, {
    key: "createCards",
    value: function createCards() {
      this.cards = new _Card__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
  }]);

  return App;
}();

window.addEventListener('DOMContentLoaded', function () {
  var app = new App();
  return app;
}); // const leftButton = document.querySelector('.sound__button');
// const rightButton = document.querySelector('.info__button');
// const card = new Card('rocket', 'ракета', 'assets/images/space/rocket.svg');
// card.addEventListener('click',
//   function flipCard() {
//     card.classList.toggle('flipped');
//     rightButton.classList.toggle('hidden');
//     leftButton.classList.toggle('hidden');
//   });
// leftButton.addEventListener('click', () =>{
//   card.playSound();
// });

/***/ }),

/***/ "./src/app/words.json":
/*!****************************!*\
  !*** ./src/app/words.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"space\",\"words\":[{\"word\":\"rocket\",\"translation\":\"ракета\"},{\"word\":\"sun\",\"translation\":\"cолнце\"},{\"word\":\"moon\",\"translation\":\"луна\"},{\"word\":\"planet\",\"translation\":\"планета\"},{\"word\":\"atom\",\"translation\":\"атом\"},{\"word\":\"comet\",\"translation\":\"комета\"},{\"word\":\"satellite\",\"translation\":\"спутник\"},{\"word\":\"astronaut\",\"translation\":\"астронавт\"},{\"word\":\"earth\",\"translation\":\"земля\"},{\"word\":\"telescope\",\"translation\":\"телескоп\"}]},{\"name\":\"food\",\"words\":[{\"word\":\"apple\",\"translation\":\"яблоко\"},{\"word\":\"banana\",\"translation\":\"банан\"},{\"word\":\"fish\",\"translation\":\"рыба\"},{\"word\":\"bread\",\"translation\":\"хлеб\"},{\"word\":\"groceries\",\"translation\":\"продукты\"},{\"word\":\"cheese\",\"translation\":\"сыр\"},{\"word\":\"pumpkin\",\"translation\":\"тыква\"},{\"word\":\"shrimp\",\"translation\":\"креветка\"},{\"word\":\"tomato\",\"translation\":\"помидор\"},{\"word\":\"cabbage\",\"translation\":\"капуста\"},{\"word\":\"pot\",\"translation\":\"кастрюля\"},{\"word\":\"water\",\"translation\":\"вода\"},{\"word\":\"pan\",\"translation\":\"сковорода\"},{\"word\":\"orange\",\"translation\":\"апельсин\"}]},{\"name\":\"animals\",\"words\":[{\"word\":\"chick\",\"translation\":\"цыпленок\"},{\"word\":\"whale\",\"translation\":\"кит\"},{\"word\":\"pig\",\"translation\":\"свинья\"},{\"word\":\"fox\",\"translation\":\"лиса\"},{\"word\":\"koala\",\"translation\":\"коала\"},{\"word\":\"tiger\",\"translation\":\"тигр\"},{\"word\":\"crab\",\"translation\":\"краб\"},{\"word\":\"bull\",\"translation\":\"бык\"},{\"word\":\"hedgehog\",\"translation\":\"ёжик\"},{\"word\":\"hippo\",\"translation\":\"гиппопотам\"},{\"word\":\"lemur\",\"translation\":\"лемур\"},{\"word\":\"zebra\",\"translation\":\"зебра\"}]},{\"name\":\"body\",\"words\":[{\"word\":\"head\",\"translation\":\"голова\"},{\"word\":\"neck\",\"translation\":\"шея\"},{\"word\":\"hand\",\"translation\":\"рука\"},{\"word\":\"dna\",\"translation\":\"днк\"},{\"word\":\"nose\",\"translation\":\"нос\"},{\"word\":\"skull\",\"translation\":\"череп\"},{\"word\":\"lips\",\"translation\":\"губы\"},{\"word\":\"ear\",\"translation\":\"ухо\"},{\"word\":\"tooth\",\"translation\":\"зуб\"},{\"word\":\"lungs\",\"translation\":\"легкие\"},{\"word\":\"kidneys\",\"translation\":\"почки\"},{\"word\":\"stomach\",\"translation\":\"желудок\"}]},{\"name\":\"nature\",\"words\":[{\"word\":\"forest\",\"translation\":\"лес\"},{\"word\":\"beach\",\"translation\":\"пляж\"},{\"word\":\"lake\",\"translation\":\"озеро\"},{\"word\":\"volcano\",\"translation\":\"вулкан\"},{\"word\":\"rainbow\",\"translation\":\"радуга\"},{\"word\":\"desert\",\"translation\":\"пустыня\"},{\"word\":\"snow\",\"translation\":\"снег\"},{\"word\":\"tree\",\"translation\":\"дерево\"},{\"word\":\"flower\",\"translation\":\"цветок\"},{\"word\":\"mountain\",\"translation\":\"гора\"}]},{\"name\":\"activities\",\"words\":[{\"word\":\"learn\",\"translation\":\"учиться\"},{\"word\":\"read\",\"translation\":\"читать\"},{\"word\":\"cry\",\"translation\":\"плакать\"},{\"word\":\"play\",\"translation\":\"играть\"},{\"word\":\"talk\",\"translation\":\"говорить\"},{\"word\":\"win\",\"translation\":\"побеждать\"},{\"word\":\"dance\",\"translation\":\"танцевать\"},{\"word\":\"swim\",\"translation\":\"плавать\"},{\"word\":\"draw\",\"translation\":\"рисовать\"},{\"word\":\"eat\",\"translation\":\"есть\"},{\"word\":\"sleep\",\"translation\":\"спать\"},{\"word\":\"run\",\"translation\":\"бегать\"}]},{\"name\":\"colors\",\"words\":[{\"word\":\"white\",\"translation\":\"белый\"},{\"word\":\"yellow\",\"translation\":\"желтый\"},{\"word\":\"orange\",\"translation\":\"оранжевый\"},{\"word\":\"red\",\"translation\":\"красный\"},{\"word\":\"purple\",\"translation\":\"фиолетовый\"},{\"word\":\"blue\",\"translation\":\"синий\"},{\"word\":\"green\",\"translation\":\"зеленый\"},{\"word\":\"brown\",\"translation\":\"коричневый\"},{\"word\":\"pink\",\"translation\":\"розовый\"},{\"word\":\"black\",\"translation\":\"черный\"}]},{\"name\":\"family\",\"words\":[{\"word\":\"baby\",\"translation\":\"младенец\"},{\"word\":\"family\",\"translation\":\"семья\"},{\"word\":\"mother\",\"translation\":\"мама\"},{\"word\":\"father\",\"translation\":\"папа\"},{\"word\":\"sister\",\"translation\":\"сестра\"},{\"word\":\"brother\",\"translation\":\"брат\"},{\"word\":\"pet\",\"translation\":\"питомец\"},{\"word\":\"grandma\",\"translation\":\"бабушка\"},{\"word\":\"grandpa\",\"translation\":\"дедушка\"}]},{\"name\":\"home\",\"words\":[{\"word\":\"armchair\",\"translation\":\"кресло\"},{\"word\":\"mirror\",\"translation\":\"зеркало\"},{\"word\":\"kitchen\",\"translation\":\"кухня\"},{\"word\":\"bed\",\"translation\":\"кровать\"},{\"word\":\"toilet\",\"translation\":\"туалет\"},{\"word\":\"door\",\"translation\":\"дверь\"},{\"word\":\"window\",\"translation\":\"окно\"},{\"word\":\"fridge\",\"translation\":\"холодильник\"},{\"word\":\"chair\",\"translation\":\"стул\"},{\"word\":\"bath\",\"translation\":\"ванная\"},{\"word\":\"house\",\"translation\":\"дом\"},{\"word\":\"couch\",\"translation\":\"диван\"}]},{\"name\":\"city\",\"words\":[{\"word\":\"bus\",\"translation\":\"автобус\"},{\"word\":\"factory\",\"translation\":\"завод\"},{\"word\":\"park\",\"translation\":\"парк\"},{\"word\":\"excavator\",\"translation\":\"экскаватор\"},{\"word\":\"city\",\"translation\":\"город\"},{\"word\":\"church\",\"translation\":\"церковь\"},{\"word\":\"police\",\"translation\":\"полиция\"},{\"word\":\"building\",\"translation\":\"здание\"},{\"word\":\"subway\",\"translation\":\"метро\"},{\"word\":\"taxi\",\"translation\":\"такси\"},{\"word\":\"factory\",\"translation\":\"завод\"}]},{\"name\":\"emotions\",\"words\":[{\"word\":\"determination\",\"translation\":\"решимость\"},{\"word\":\"happy\",\"translation\":\"счастье\"},{\"word\":\"confusion\",\"translation\":\"смущение\"},{\"word\":\"despair\",\"translation\":\"отчаяние\"},{\"word\":\"sadness\",\"translation\":\"грусть\"},{\"word\":\"excitement\",\"translation\":\"возбуждение\"},{\"word\":\"anxiety\",\"translation\":\"беспокойство\"},{\"word\":\"friendship\",\"translation\":\"дружба\"},{\"word\":\"love\",\"translation\":\"любовь\"},{\"word\":\"anger\",\"translation\":\"злость\"}]}]");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/app/app.js ./src/sass/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/app/app.js */"./src/app/app.js");
module.exports = __webpack_require__(/*! ./src/sass/main.scss */"./src/sass/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map