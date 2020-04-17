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
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(category, en, ru) {
    _classCallCheck(this, Card);

    this.en = en;
    this.ru = ru;
    this.category = category;
    this.playMode = false;
    this.html = "\n    <div class=\"card\">\n      <div class=\"card__card-face\">\n        <div class=\"card__word-image\"><img src=\"/src/assets/images/".concat(category, "/").concat(en, ".svg\" alt=\"").concat(en, "\"></div>\n        <div class=\"card__info\">\n          <div class=\"info__button\"><span class=\"button__icon\"></span></div>\n          <div class=\"info__word\">").concat(en, "</div>\n          <div class=\"sound__button\"><span class=\"button__icon\"></span></div>\n        </div>\n      </div>\n      <div class=\"card__card-back\">\n        <div class=\"card__word-image\"><img src=\"/src/assets/images/").concat(category, "/").concat(en, ".svg\" alt=\"").concat(ru, "\"></div>\n        <div class=\"card__info\">\n          <div class=\"info__word\">").concat(ru, "</div>\n        </div>\n      </div>\n    </div>\n    ");
  }

  _createClass(Card, null, [{
    key: "playSound",
    value: function playSound(en) {
      var audio = new Audio();
      audio.src = "https://wooordhunt.ru/data/sound/word/uk/mp3/".concat(en, ".mp3");
      audio.play();
    }
  }]);

  return Card;
}();



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
      words: []
    };
    this.properties = {
      playMode: false // привязать к свитчеру

    };
    this.init();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      this.createCategories();
      this.createCards();
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
        categoryCard.id = "".concat(category.name);
        categoryCard.innerHTML = "\n          <a href=\"#".concat(category.name, "\">\n            <div class=\"card__image card__image_").concat(category.name, "\">\n              <img src=\"public/images/categories/").concat(category.name, "-category.png\" alt=\"").concat(category.name, "\">\n            </div>\n            <div class=\"card__title\">").concat(category.name, "</div>\n          </a>\n        ");
        elements.container.append(categoryCard);
      });
    }
  }, {
    key: "createCards",
    value: function createCards() {
      var _this = this;

      var items = document.querySelectorAll('.category-card');
      items.forEach(function (item) {
        item.addEventListener('click', function () {
          _this.removeCategories();

          _this.addWords(item.id);
        });
      });
    }
  }, {
    key: "addWords",
    value: function addWords(id) {
      var _this2 = this;

      _words__WEBPACK_IMPORTED_MODULE_1__.forEach(function (category) {
        if (id === category.name) {
          _this2.words = category.words;
          category.words.forEach(function (word) {
            var card = new _Card__WEBPACK_IMPORTED_MODULE_0__["Card"](category.name, word.en, word.ru);
            var wordCard = document.createElement('div');
            wordCard.classList.add('card__container');
            wordCard.innerHTML = card.html;

            _this2.elements.container.append(wordCard);

            var outer = wordCard.querySelector('.card');
            var inner = wordCard.querySelector('.card__card-face');
            var soundButton = wordCard.querySelector('.sound__button');
            var infoButton = wordCard.querySelector('.info__button');
            soundButton.addEventListener('click', function () {
              _Card__WEBPACK_IMPORTED_MODULE_0__["Card"].playSound(word.en);
            });
            infoButton.addEventListener('click', function () {
              outer.classList.toggle('flipped');
              inner.classList.toggle('hidden');
              infoButton.classList.toggle('hidden');
              soundButton.classList.toggle('hidden');
            });
            outer.addEventListener('mouseleave', function () {
              if (outer.classList.contains('flipped')) {
                setTimeout(function () {
                  outer.classList.toggle('flipped');
                  inner.classList.toggle('hidden');
                  infoButton.classList.toggle('hidden');
                  soundButton.classList.toggle('hidden');
                }, 200);
              }
            });
          });
        }
      });
    }
  }, {
    key: "removeCategories",
    value: function removeCategories() {
      this.elements.container.innerHTML = '';
    }
  }]);

  return App;
}();

window.addEventListener('DOMContentLoaded', function () {
  var app = new App();
  return app;
});

/***/ }),

/***/ "./src/app/words.json":
/*!****************************!*\
  !*** ./src/app/words.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"space\",\"words\":[{\"en\":\"rocket\",\"ru\":\"ракета\"},{\"en\":\"sun\",\"ru\":\"cолнце\"},{\"en\":\"moon\",\"ru\":\"луна\"},{\"en\":\"planet\",\"ru\":\"планета\"},{\"en\":\"atom\",\"ru\":\"атом\"},{\"en\":\"comet\",\"ru\":\"комета\"},{\"en\":\"satellite\",\"ru\":\"спутник\"},{\"en\":\"astronaut\",\"ru\":\"астронавт\"},{\"en\":\"earth\",\"ru\":\"земля\"},{\"en\":\"telescope\",\"ru\":\"телескоп\"}]},{\"name\":\"food\",\"words\":[{\"en\":\"apple\",\"ru\":\"яблоко\"},{\"en\":\"banana\",\"ru\":\"банан\"},{\"en\":\"fish\",\"ru\":\"рыба\"},{\"en\":\"bread\",\"ru\":\"хлеб\"},{\"en\":\"groceries\",\"ru\":\"продукты\"},{\"en\":\"cheese\",\"ru\":\"сыр\"},{\"en\":\"pumpkin\",\"ru\":\"тыква\"},{\"en\":\"shrimp\",\"ru\":\"креветка\"},{\"en\":\"tomato\",\"ru\":\"помидор\"},{\"en\":\"cabbage\",\"ru\":\"капуста\"},{\"en\":\"water\",\"ru\":\"вода\"},{\"en\":\"orange\",\"ru\":\"апельсин\"}]},{\"name\":\"animals\",\"words\":[{\"en\":\"chick\",\"ru\":\"цыпленок\"},{\"en\":\"whale\",\"ru\":\"кит\"},{\"en\":\"pig\",\"ru\":\"свинья\"},{\"en\":\"fox\",\"ru\":\"лиса\"},{\"en\":\"koala\",\"ru\":\"коала\"},{\"en\":\"tiger\",\"ru\":\"тигр\"},{\"en\":\"crab\",\"ru\":\"краб\"},{\"en\":\"bull\",\"ru\":\"бык\"},{\"en\":\"hedgehog\",\"ru\":\"ёжик\"},{\"en\":\"hippo\",\"ru\":\"гиппопотам\"},{\"en\":\"lemur\",\"ru\":\"лемур\"},{\"en\":\"zebra\",\"ru\":\"зебра\"}]},{\"name\":\"body\",\"words\":[{\"en\":\"head\",\"ru\":\"голова\"},{\"en\":\"neck\",\"ru\":\"шея\"},{\"en\":\"hand\",\"ru\":\"рука\"},{\"en\":\"dna\",\"ru\":\"днк\"},{\"en\":\"nose\",\"ru\":\"нос\"},{\"en\":\"skull\",\"ru\":\"череп\"},{\"en\":\"lips\",\"ru\":\"губы\"},{\"en\":\"ear\",\"ru\":\"ухо\"},{\"en\":\"tooth\",\"ru\":\"зуб\"},{\"en\":\"lungs\",\"ru\":\"легкие\"},{\"en\":\"kidneys\",\"ru\":\"почки\"},{\"en\":\"stomach\",\"ru\":\"желудок\"}]},{\"name\":\"nature\",\"words\":[{\"en\":\"forest\",\"ru\":\"лес\"},{\"en\":\"beach\",\"ru\":\"пляж\"},{\"en\":\"lake\",\"ru\":\"озеро\"},{\"en\":\"volcano\",\"ru\":\"вулкан\"},{\"en\":\"rainbow\",\"ru\":\"радуга\"},{\"en\":\"desert\",\"ru\":\"пустыня\"},{\"en\":\"snow\",\"ru\":\"снег\"},{\"en\":\"tree\",\"ru\":\"дерево\"},{\"en\":\"flower\",\"ru\":\"цветок\"},{\"en\":\"mountain\",\"ru\":\"гора\"}]},{\"name\":\"activities\",\"words\":[{\"en\":\"learn\",\"ru\":\"учиться\"},{\"en\":\"read\",\"ru\":\"читать\"},{\"en\":\"cry\",\"ru\":\"плакать\"},{\"en\":\"play\",\"ru\":\"играть\"},{\"en\":\"talk\",\"ru\":\"говорить\"},{\"en\":\"win\",\"ru\":\"побеждать\"},{\"en\":\"dance\",\"ru\":\"танцевать\"},{\"en\":\"swim\",\"ru\":\"плавать\"},{\"en\":\"draw\",\"ru\":\"рисовать\"},{\"en\":\"eat\",\"ru\":\"есть\"},{\"en\":\"sleep\",\"ru\":\"спать\"},{\"en\":\"run\",\"ru\":\"бегать\"}]},{\"name\":\"colors\",\"words\":[{\"en\":\"white\",\"ru\":\"белый\"},{\"en\":\"yellow\",\"ru\":\"желтый\"},{\"en\":\"orange\",\"ru\":\"оранжевый\"},{\"en\":\"red\",\"ru\":\"красный\"},{\"en\":\"purple\",\"ru\":\"фиолетовый\"},{\"en\":\"blue\",\"ru\":\"синий\"},{\"en\":\"green\",\"ru\":\"зеленый\"},{\"en\":\"brown\",\"ru\":\"коричневый\"},{\"en\":\"pink\",\"ru\":\"розовый\"},{\"en\":\"black\",\"ru\":\"черный\"}]},{\"name\":\"family\",\"words\":[{\"en\":\"baby\",\"ru\":\"младенец\"},{\"en\":\"family\",\"ru\":\"семья\"},{\"en\":\"mother\",\"ru\":\"мама\"},{\"en\":\"father\",\"ru\":\"папа\"},{\"en\":\"sister\",\"ru\":\"сестра\"},{\"en\":\"brother\",\"ru\":\"брат\"},{\"en\":\"pet\",\"ru\":\"питомец\"},{\"en\":\"grandma\",\"ru\":\"бабушка\"},{\"en\":\"grandpa\",\"ru\":\"дедушка\"}]},{\"name\":\"home\",\"words\":[{\"en\":\"armchair\",\"ru\":\"кресло\"},{\"en\":\"mirror\",\"ru\":\"зеркало\"},{\"en\":\"kitchen\",\"ru\":\"кухня\"},{\"en\":\"bed\",\"ru\":\"кровать\"},{\"en\":\"toilet\",\"ru\":\"туалет\"},{\"en\":\"door\",\"ru\":\"дверь\"},{\"en\":\"window\",\"ru\":\"окно\"},{\"en\":\"fridge\",\"ru\":\"холодильник\"},{\"en\":\"chair\",\"ru\":\"стул\"},{\"en\":\"bath\",\"ru\":\"ванная\"},{\"en\":\"house\",\"ru\":\"дом\"},{\"en\":\"couch\",\"ru\":\"диван\"}]},{\"name\":\"city\",\"words\":[{\"en\":\"bus\",\"ru\":\"автобус\"},{\"en\":\"factory\",\"ru\":\"завод\"},{\"en\":\"park\",\"ru\":\"парк\"},{\"en\":\"excavator\",\"ru\":\"экскаватор\"},{\"en\":\"city\",\"ru\":\"город\"},{\"en\":\"church\",\"ru\":\"церковь\"},{\"en\":\"police\",\"ru\":\"полиция\"},{\"en\":\"building\",\"ru\":\"здание\"},{\"en\":\"subway\",\"ru\":\"метро\"},{\"en\":\"taxi\",\"ru\":\"такси\"},{\"en\":\"factory\",\"ru\":\"завод\"}]},{\"name\":\"emotions\",\"words\":[{\"en\":\"focus\",\"ru\":\"решимость\"},{\"en\":\"happy\",\"ru\":\"счастье\"},{\"en\":\"confusion\",\"ru\":\"смущение\"},{\"en\":\"despair\",\"ru\":\"отчаяние\"},{\"en\":\"sadness\",\"ru\":\"грусть\"},{\"en\":\"excitement\",\"ru\":\"возбуждение\"},{\"en\":\"anxiety\",\"ru\":\"беспокойство\"},{\"en\":\"friendship\",\"ru\":\"дружба\"},{\"en\":\"love\",\"ru\":\"любовь\"},{\"en\":\"anger\",\"ru\":\"злость\"}]}]");

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