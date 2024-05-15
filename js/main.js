/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form */ "./src/js/components/form.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form-validate */ "./src/js/components/form-validate.js");
console.log('components');




/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Jquery
// import $ from "jquery";
// var $ = require( "jquery" );

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация бургер-нав
// import { burgerNav } from './functions/burgerNav';

// Реализация hamburger-меню
// import { hamburger } from './functions/hamburger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Slick-slider
// import $ from 'jquery'
// import 'slick-carousel'
//
// window.jQuery = window.$ = $;
// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value

//  prevArrow: '<img src="img/">',
//  nextArrow: '<img src="img/">'
//   });
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_uikit_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/uikit.min.js */ "./src/js/vendor/uikit.min.js");
/* harmony import */ var _vendor_uikit_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_uikit_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_uikit_icons_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/uikit-icons.min.js */ "./src/js/vendor/uikit-icons.min.js");
/* harmony import */ var _vendor_uikit_icons_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_uikit_icons_min_js__WEBPACK_IMPORTED_MODULE_2__);

// import './vendor/jquery.magnific-popup.min.js';
// import './vendor/jquery.fancybox.min.js';
// import './vendor/slick.min.js';



/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ (() => {

const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');
const navigation = document.querySelector('.nav');
const pageBody = document.querySelector('.page__body');
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', function () {
    navigation.classList.toggle('active');
    hamburgerBtn.classList.toggle('is-active');
    pageBody.classList.toggle('dis-scroll');
  });
}
if (closeBtn) {
  closeBtn.addEventListener('click', function () {
    navigation.classList.remove('active');
    pageBody.classList.remove('dis-scroll');
  });
}

/***/ }),

/***/ "./src/js/components/form-validate.js":
/*!********************************************!*\
  !*** ./src/js/components/form-validate.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var just_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-validate */ "./node_modules/just-validate/dist/just-validate.es.js");

document.addEventListener("DOMContentLoaded", function () {
  const validatorForm = new just_validate__WEBPACK_IMPORTED_MODULE_0__["default"]("#subscribe", {
    validateBeforeSubmitting: true
  });
  validatorForm.addField("#email", [{
    rule: "required",
    errorMessage: "Email is required"
  }, {
    rule: "email",
    errorMessage: "Email is invalid"
  }, {
    validator: value => value.trim() === value,
    errorMessage: "Leading or trailing whitespace is not allowed"
  }]);
});

/***/ }),

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/***/ (() => {

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
input.addEventListener('focus', function () {
  form.classList.toggle('form--active');
});
input.addEventListener('blur', function () {
  form.classList.remove('form--active');
});

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileCheck: () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./src/js/vendor/uikit-icons.min.js":
/*!******************************************!*\
  !*** ./src/js/vendor/uikit-icons.min.js ***!
  \******************************************/
/***/ (function(module) {

/*! UIkit 3.16.22 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */(function (t, e) {
   true ? module.exports = e() : 0;
})(this, function () {
  "use strict";

  function t(e) {
    t.installed || e.icon.add({
      youtube: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>',
      yootheme: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m16.15,5.48c-1.37,0-2.45.61-3.11,1.54-.66-.93-1.74-1.54-3.11-1.54-1.75,0-3.03,1-3.57,2.41v-2.22h-2.01v4.45c0,.85-.31,1.35-1.18,1.35s-1.18-.5-1.18-1.35v-4.45H0v4.86c0,.7.17,1.33.53,1.82.34.49.88.85,1.6,1v3.16h2.1v-3.16c1.28-.28,1.96-1.17,2.1-2.35.52,1.44,1.81,2.48,3.59,2.48,1.37,0,2.45-.61,3.11-1.54.66.93,1.74,1.54,3.11,1.54,2.37,0,3.85-1.82,3.85-4s-1.49-4-3.85-4Zm-6.22,5.99c-1.11,0-1.85-.72-1.85-1.99s.74-1.99,1.85-1.99,1.85.72,1.85,1.99-.74,1.99-1.85,1.99Zm6.22,0c-1.11,0-1.85-.72-1.85-1.99s.74-1.99,1.85-1.99,1.85.72,1.85,1.99-.74,1.99-1.85,1.99Z"/></svg>',
      yelp: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069	c-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276	c0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789	c-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025	c0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155	c-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351	c-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479	c0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421	c-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272	c0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749	C10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794	C2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667	c0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',
      xing: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',
      world: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',
      wordpress: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',
      whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',
      warning: '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',
      vimeo: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',
      "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="19.5 5.9 19.5 14.1 14.5 10.4 14.5 15.5 .5 15.5 .5 4.5 14.5 4.5 14.5 9.6 19.5 5.9"/></svg>',
      users: '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',
      user: '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',
      upload: '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',
      unlock: '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',
      uikit: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',
      twitter: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',
      twitch: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5.23,1,2,4.23V15.85H5.88v3.23L9.1,15.85h2.59L17.5,10V1Zm11,8.4L13.62,12H11L8.78,14.24V12H5.88V2.29H16.21Z"/><rect x="12.98" y="4.55" width="1.29" height="3.88"/><rect x="9.43" y="4.55" width="1.29" height="3.88"/></svg>',
      tv: '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',
      tumblr: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',
      tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0	c0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009	c1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15	c2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594	c-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811	c-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079	c2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066	c-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002	c2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775	c0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468	C3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479	c1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775	c0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627	c-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618	c0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968	c-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72	C9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',
      "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="5 13 10 8 15 13"/></svg>',
      "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="8 5 13 10 8 15"/></svg>',
      "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="12 5 7 10 12 15"/></svg>',
      "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="5 7 15 7 10 12"/></svg>',
      trash: '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',
      tiktok: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z"/></svg>',
      thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',
      tag: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',
      tablet: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',
      "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',
      table: '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',
      strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',
      star: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',
      soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',
      social: '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',
      "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',
      "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',
      shrink: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',
      settings: '<svg width="20" height="20" viewBox="0 0 20 20"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',
      server: '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',
      search: '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
      rss: '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',
      reply: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',
      refresh: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',
      reddit: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',
      receiver: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',
      "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',
      question: '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',
      push: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',
      pull: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',
      print: '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',
      plus: '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',
      "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
      play: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',
      "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
      pinterest: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',
      phone: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',
      "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',
      pencil: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',
      "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="m6.42,2.16l5.28,5.28"/><path d="m18.49,11.83s1.51,2.06,1.51,3.36c0,.92-.76,1.64-1.51,1.64h0c-.75,0-1.49-.72-1.49-1.64,0-1.3,1.49-3.36,1.49-3.36h0Z"/><line fill="none" stroke="#000" x1="1.26" y1="10.5" x2="16" y2="10.5"/><polygon fill="none" stroke="#000" stroke-width="1.1" points="10.2 1.55 17.6 8.93 8.08 18.45 .7 11.07 10.2 1.55"/></svg>',
      pagekit: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',
      nut: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',
      move: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',
      more: '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',
      "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
      minus: '<svg width="20" height="20" viewBox="0 0 20 20"><rect height="1" width="18" y="9" x="1"/></svg>',
      "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
      microsoft: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m2,2h7.58v7.58H2V2Zm8.42,0h7.58v7.58h-7.58V2ZM2,10.42h7.58v7.58H2v-7.58Zm8.42,0h7.58v7.58h-7.58"/></svg>',
      microphone: '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',
      menu: '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',
      mastodon: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m18.5,6.87c0-3.95-2.59-5.11-2.59-5.11-1.31-.6-3.55-.85-5.88-.87h-.06c-2.33.02-4.57.27-5.88.87,0,0-2.59,1.16-2.59,5.11,0,.91-.02,1.99.01,3.14.09,3.87.71,7.68,4.28,8.62,1.65.44,3.06.53,4.2.47,2.07-.11,3.23-.74,3.23-.74l-.07-1.5s-1.48.47-3.14.41c-1.64-.06-3.38-.18-3.64-2.2-.02-.18-.04-.37-.04-.57,0,0,1.61.39,3.66.49,1.25.06,2.42-.07,3.61-.22,2.28-.27,4.27-1.68,4.52-2.97.39-2.02.36-4.94.36-4.94Zm-3.05,5.09h-1.9v-4.65c0-.98-.41-1.48-1.24-1.48-.91,0-1.37.59-1.37,1.76v2.54h-1.89v-2.54c0-1.17-.46-1.76-1.37-1.76-.82,0-1.24.5-1.24,1.48v4.65h-1.9v-4.79c0-.98.25-1.76.75-2.33.52-.58,1.19-.87,2.03-.87.97,0,1.71.37,2.19,1.12l.47.79.47-.79c.49-.75,1.22-1.12,2.19-1.12.84,0,1.51.29,2.03.87.5.58.75,1.35.75,2.33v4.79Z"/></svg>',
      mail: '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',
      lock: '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',
      location: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',
      list: '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',
      linkedin: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',
      link: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',
      lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="9"/><circle fill="none" stroke="#000" cx="10" cy="10" r="5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="5.17" y1="2.39" x2="8.11" y2="5.33"/><line fill="none" stroke="#000" stroke-width="1.1" x1="5.33" y1="8.11" x2="2.39" y2="5.17"/><line fill="none" stroke="#000" stroke-width="1.1" x1="14.83" y1="17.61" x2="11.89" y2="14.67"/><line fill="none" stroke="#000" stroke-width="1.1" x1="14.67" y1="11.89" x2="17.61" y2="14.83"/><line fill="none" stroke="#000" stroke-width="1.1" x1="17.61" y1="5.17" x2="14.67" y2="8.11"/><line fill="none" stroke="#000" stroke-width="1.1" x1="11.89" y1="5.33" x2="14.83" y2="2.39"/><line fill="none" stroke="#000" stroke-width="1.1" x1="8.11" y1="14.67" x2="5.17" y2="17.61"/><line fill="none" stroke="#000" stroke-width="1.1" x1="2.39" y1="14.83" x2="5.33" y2="11.89"/></svg>',
      laptop: '<svg width="20" height="20" viewBox="0 0 20 20"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',
      joomla: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',
      italic: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',
      instagram: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',
      info: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
      image: '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',
      home: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',
      history: '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
      heart: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',
      hashtag: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',
      happy: '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',
      grid: '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',
      google: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',
      gitter: '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',
      github: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',
      "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',
      "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',
      "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',
      future: '<svg width="20" height="20" viewBox="0 0 20 20"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',
      foursquare: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',
      forward: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',
      folder: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',
      flickr: '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',
      file: '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',
      "file-text": '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',
      "file-pdf": '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',
      "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',
      facebook: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',
      eye: '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="3.45"/><path fill="none" stroke="#000" d="m19.5,10c-2.4,3.66-5.26,7-9.5,7h0,0,0c-4.24,0-7.1-3.34-9.49-7C2.89,6.34,5.75,3,9.99,3h0,0,0c4.25,0,7.11,3.34,9.5,7Z"/></svg>',
      "eye-slash": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="m7.56,7.56c.62-.62,1.49-1.01,2.44-1.01,1.91,0,3.45,1.54,3.45,3.45,0,.95-.39,1.82-1.01,2.44"/><path fill="none" stroke="#000" d="m19.5,10c-2.4,3.66-5.26,7-9.5,7h0,0,0c-4.24,0-7.1-3.34-9.49-7C2.89,6.34,5.75,3,9.99,3h0,0,0c4.25,0,7.11,3.34,9.5,7Z"/><line fill="none" stroke="#000" x1="2.5" y1="2.5" x2="17.5" y2="17.5"/></svg>',
      expand: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',
      etsy: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',
      dribbble: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',
      download: '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',
      discord: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M16.074,4.361a14.243,14.243,0,0,0-3.61-1.134,10.61,10.61,0,0,0-.463.96,13.219,13.219,0,0,0-4,0,10.138,10.138,0,0,0-.468-.96A14.206,14.206,0,0,0,3.919,4.364,15.146,15.146,0,0,0,1.324,14.5a14.435,14.435,0,0,0,4.428,2.269A10.982,10.982,0,0,0,6.7,15.21a9.294,9.294,0,0,1-1.494-.727c.125-.093.248-.19.366-.289a10.212,10.212,0,0,0,8.854,0c.119.1.242.2.366.289a9.274,9.274,0,0,1-1.5.728,10.8,10.8,0,0,0,.948,1.562,14.419,14.419,0,0,0,4.431-2.27A15.128,15.128,0,0,0,16.074,4.361Zm-8.981,8.1a1.7,1.7,0,0,1-1.573-1.79A1.689,1.689,0,0,1,7.093,8.881a1.679,1.679,0,0,1,1.573,1.791A1.687,1.687,0,0,1,7.093,12.462Zm5.814,0a1.7,1.7,0,0,1-1.573-1.79,1.689,1.689,0,0,1,1.573-1.791,1.679,1.679,0,0,1,1.573,1.791A1.688,1.688,0,0,1,12.907,12.462Z"/></svg>',
      desktop: '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',
      database: '<svg width="20" height="20" viewBox="0 0 20 20"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',
      crosshairs: '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="7.5"/><line fill="none" stroke="#000" x1="10" x2="10" y2="8"/><line fill="none" stroke="#000" x1="10" y1="12" x2="10" y2="20"/><line fill="none" stroke="#000" y1="10" x2="8" y2="10"/><line fill="none" stroke="#000" x1="12" y1="10" x2="20" y2="10"/></svg>',
      "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',
      copy: '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',
      comments: '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',
      commenting: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',
      comment: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',
      cog: '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',
      code: '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',
      "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
      "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
      close: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',
      clock: '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
      "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',
      "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',
      "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',
      "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',
      "chevron-double-right": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',
      "chevron-double-left": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',
      check: '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',
      cart: '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',
      camera: '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',
      calendar: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',
      bookmark: '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',
      bolt: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',
      bold: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',
      bell: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',
      behance: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',
      ban: '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',
      bag: '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M7.5,7.5V4A2.48,2.48,0,0,1,10,1.5,2.54,2.54,0,0,1,12.5,4V7.5"/><polygon fill="none" stroke="#000" points="16.5 7.5 3.5 7.5 2.5 18.5 17.5 18.5 16.5 7.5"/></svg>',
      "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',
      "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',
      "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',
      "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',
      apple: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m17.23,6.93c-.1.08-1.95,1.12-1.95,3.43,0,2.67,2.35,3.62,2.42,3.64-.01.06-.37,1.29-1.24,2.55-.77,1.11-1.58,2.22-2.8,2.22s-1.54-.71-2.95-.71-1.87.73-2.99.73-1.9-1.03-2.8-2.29c-1.04-1.48-1.88-3.78-1.88-5.96,0-3.5,2.28-5.36,4.51-5.36,1.19,0,2.18.78,2.93.78s1.82-.83,3.17-.83c.51,0,2.36.05,3.57,1.79h0Zm-4.21-3.27c.56-.66.96-1.59.96-2.51,0-.13-.01-.26-.03-.36-.91.03-1.99.61-2.65,1.36-.51.58-.99,1.5-.99,2.44,0,.14.02.28.03.33.06.01.15.02.24.02.82,0,1.85-.55,2.44-1.28h0Z"/></svg>',
      android: '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m14.88,6.77l1.66-2.87c.09-.16.04-.37-.12-.46-.16-.09-.37-.04-.46.12l-1.68,2.91c-1.28-.59-2.73-.91-4.28-.91s-3,.33-4.28.91l-1.68-2.91c-.09-.16-.3-.22-.46-.12-.16.09-.22.3-.12.46l1.66,2.87C2.26,8.32.32,11.22,0,14.61h20c-.32-3.39-2.26-6.29-5.12-7.84h0Zm-9.47,5.03c-.46,0-.84-.38-.84-.84s.38-.84.84-.84.84.38.84.84c0,.46-.37.84-.84.84Zm9.18,0c-.46,0-.84-.38-.84-.84s.38-.84.84-.84.84.38.84.84c0,.46-.37.84-.84.84Z"/></svg>',
      "android-robot": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m17.61,7.96v4.64c-.06,1.48-2.17,1.48-2.23,0v-4.64c.06-1.48,2.17-1.48,2.23,0Z"/><path d="m4.62,7.96v4.64c-.06,1.48-2.17,1.48-2.23,0v-4.64c.06-1.48,2.17-1.48,2.23,0Z"/><path d="m12.78,2.85c-.11-.07-.23-.13-.34-.19.13-.23.65-1.17.79-1.42.07-.12-.05-.27-.18-.23-.04.01-.07.04-.09.08l-.79,1.43c-1.32-.6-2.98-.6-4.3,0-.13-.23-.65-1.18-.79-1.43-.04-.07-.14-.1-.21-.06-.08.04-.1.14-.06.21,0,0,.79,1.42.79,1.42-1.49.77-2.53,2.28-2.53,3.99-.02,0,9.93,0,9.93,0,.01-1.55-.87-2.98-2.19-3.8Zm-5.07,1.98c-.23,0-.41-.19-.41-.41.01-.27.21-.41.41-.41s.4.14.42.41c0,.22-.18.42-.41.41Zm4.58,0c-.23,0-.42-.19-.41-.41.01-.28.21-.41.41-.41s.4.14.41.41c0,.23-.19.41-.41.41Z"/><path d="m14.97,7.03v7.2c0,.66-.54,1.2-1.2,1.2h-.8v2.46c-.06,1.48-2.16,1.48-2.23,0,0,0,0-2.46,0-2.46h-1.48v2.46c0,.61-.5,1.11-1.11,1.11s-1.11-.5-1.11-1.11v-2.46h-.8c-.66,0-1.2-.54-1.2-1.2,0,0,0-7.2,0-7.2h9.93Z"/></svg>',
      album: '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',
      "500px": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>'
    });
  }
  return typeof window < "u" && window.UIkit && window.UIkit.use(t), t;
});

/***/ }),

/***/ "./src/js/vendor/uikit.min.js":
/*!************************************!*\
  !*** ./src/js/vendor/uikit.min.js ***!
  \************************************/
/***/ (function(module) {

/*! UIkit 3.16.22 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */(function (we, be) {
   true ? module.exports = be() : 0;
})(this, function () {
  "use strict";

  const {
    hasOwnProperty: we,
    toString: be
  } = Object.prototype;
  function vt(t, e) {
    return we.call(t, e);
  }
  const Fo = /\B([A-Z])/g,
    Kt = dt(t => t.replace(Fo, "-$1").toLowerCase()),
    Ho = /-(\w)/g,
    $e = dt(t => (t.charAt(0).toLowerCase() + t.slice(1)).replace(Ho, (e, i) => i.toUpperCase())),
    Tt = dt(t => t.charAt(0).toUpperCase() + t.slice(1));
  function ot(t, e) {
    var i;
    return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e);
  }
  function Zt(t, e) {
    var i;
    return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e);
  }
  function m(t, e) {
    var i;
    return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e);
  }
  function xt(t, e) {
    var i;
    return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e);
  }
  const {
      isArray: Q,
      from: Qt
    } = Array,
    {
      assign: wt
    } = Object;
  function it(t) {
    return typeof t == "function";
  }
  function Et(t) {
    return t !== null && typeof t == "object";
  }
  function yt(t) {
    return be.call(t) === "[object Object]";
  }
  function te(t) {
    return Et(t) && t === t.window;
  }
  function Ye(t) {
    return Di(t) === 9;
  }
  function Ge(t) {
    return Di(t) >= 1;
  }
  function ee(t) {
    return Di(t) === 1;
  }
  function Di(t) {
    return !te(t) && Et(t) && t.nodeType;
  }
  function ie(t) {
    return typeof t == "boolean";
  }
  function B(t) {
    return typeof t == "string";
  }
  function Xe(t) {
    return typeof t == "number";
  }
  function bt(t) {
    return Xe(t) || B(t) && !isNaN(t - parseFloat(t));
  }
  function xe(t) {
    return !(Q(t) ? t.length : Et(t) && Object.keys(t).length);
  }
  function Y(t) {
    return t === void 0;
  }
  function Mi(t) {
    return ie(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
  }
  function kt(t) {
    const e = Number(t);
    return isNaN(e) ? !1 : e;
  }
  function $(t) {
    return parseFloat(t) || 0;
  }
  function H(t) {
    return k(t)[0];
  }
  function k(t) {
    return Ge(t) ? [t] : Array.from(t || []).filter(Ge);
  }
  function se(t) {
    if (te(t)) return t;
    t = H(t);
    const e = Ye(t) ? t : t == null ? void 0 : t.ownerDocument;
    return (e == null ? void 0 : e.defaultView) || window;
  }
  function Je(t, e) {
    return t === e || Et(t) && Et(e) && Object.keys(t).length === Object.keys(e).length && St(t, (i, s) => i === e[s]);
  }
  function Ni(t, e, i) {
    return t.replace(new RegExp(`${e}|${i}`, "g"), s => s === e ? i : e);
  }
  function ne(t) {
    return t[t.length - 1];
  }
  function St(t, e) {
    for (const i in t) if (e(t[i], i) === !1) return !1;
    return !0;
  }
  function Ke(t, e) {
    return t.slice().sort((_ref, _ref2) => {
      let {
        [e]: i = 0
      } = _ref;
      let {
        [e]: s = 0
      } = _ref2;
      return i > s ? 1 : s > i ? -1 : 0;
    });
  }
  function Bt(t, e) {
    return t.reduce((i, s) => i + $(it(e) ? e(s) : s[e]), 0);
  }
  function _s(t, e) {
    const i = new Set();
    return t.filter(_ref3 => {
      let {
        [e]: s
      } = _ref3;
      return i.has(s) ? !1 : i.add(s);
    });
  }
  function zi(t, e) {
    return e.reduce((i, s) => ({
      ...i,
      [s]: t[s]
    }), {});
  }
  function Z(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    return Math.min(Math.max(kt(t) || 0, e), i);
  }
  function S() {}
  function Fi() {
    for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
      t[_key] = arguments[_key];
    }
    return [["bottom", "top"], ["right", "left"]].every(_ref4 => {
      let [e, i] = _ref4;
      return Math.min(...t.map(_ref5 => {
        let {
          [e]: s
        } = _ref5;
        return s;
      })) - Math.max(...t.map(_ref6 => {
        let {
          [i]: s
        } = _ref6;
        return s;
      })) > 0;
    });
  }
  function Ze(t, e) {
    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
  }
  function Hi(t, e, i) {
    const s = e === "width" ? "height" : "width";
    return {
      [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
      [e]: i
    };
  }
  function As(t, e) {
    t = {
      ...t
    };
    for (const i in t) t = t[i] > e[i] ? Hi(t, i, e[i]) : t;
    return t;
  }
  function Lo(t, e) {
    t = As(t, e);
    for (const i in t) t = t[i] < e[i] ? Hi(t, i, e[i]) : t;
    return t;
  }
  const Qe = {
    ratio: Hi,
    contain: As,
    cover: Lo
  };
  function rt(t, e) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    e = k(e);
    const {
      length: n
    } = e;
    return n ? (t = bt(t) ? kt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? n - 1 : e.indexOf(H(t)), s ? Z(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1;
  }
  function dt(t) {
    const e = Object.create(null);
    return i => e[i] || (e[i] = t(i));
  }
  function p(t, e, i) {
    var s;
    if (Et(e)) {
      for (const n in e) p(t, n, e[n]);
      return;
    }
    if (Y(i)) return (s = H(t)) == null ? void 0 : s.getAttribute(e);
    for (const n of k(t)) it(i) && (i = i.call(n, p(n, e))), i === null ? ye(n, e) : n.setAttribute(e, i);
  }
  function $t(t, e) {
    return k(t).some(i => i.hasAttribute(e));
  }
  function ye(t, e) {
    k(t).forEach(i => i.removeAttribute(e));
  }
  function tt(t, e) {
    for (const i of [e, `data-${e}`]) if ($t(t, i)) return p(t, i);
  }
  const Wo = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  };
  function Li(t) {
    return k(t).some(e => Wo[e.tagName.toLowerCase()]);
  }
  function R(t) {
    return k(t).some(e => e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }
  const ke = "input,select,textarea,button";
  function Wi(t) {
    return k(t).some(e => C(e, ke));
  }
  const Se = `${ke},a[href],[tabindex]`;
  function ti(t) {
    return C(t, Se);
  }
  function O(t) {
    var e;
    return (e = H(t)) == null ? void 0 : e.parentElement;
  }
  function Ie(t, e) {
    return k(t).filter(i => C(i, e));
  }
  function C(t, e) {
    return k(t).some(i => i.matches(e));
  }
  function U(t, e) {
    return ee(t) ? t.closest(ot(e, ">") ? e.slice(1) : e) : k(t).map(i => U(i, e)).filter(Boolean);
  }
  function D(t, e) {
    return B(e) ? !!U(t, e) : H(e).contains(H(t));
  }
  function oe(t, e) {
    const i = [];
    for (; t = O(t);) (!e || C(t, e)) && i.push(t);
    return i;
  }
  function T(t, e) {
    t = H(t);
    const i = t ? Qt(t.children) : [];
    return e ? Ie(i, e) : i;
  }
  function re(t, e) {
    return e ? k(t).indexOf(H(e)) : T(O(t)).indexOf(t);
  }
  function ae(t) {
    return t = H(t), t && ["origin", "pathname", "search"].every(e => t[e] === location[e]);
  }
  function Ri(t) {
    if (ae(t)) {
      t = H(t);
      const e = decodeURIComponent(t.hash).substring(1);
      return document.getElementById(e) || document.getElementsByName(e)[0];
    }
  }
  function at(t, e) {
    return ji(t, Bs(t, e));
  }
  function Ce(t, e) {
    return Te(t, Bs(t, e));
  }
  function ji(t, e) {
    return H(Ds(t, H(e), "querySelector"));
  }
  function Te(t, e) {
    return k(Ds(t, H(e), "querySelectorAll"));
  }
  const Ro = /(^|[^\\],)\s*[!>+~-]/,
    Os = dt(t => t.match(Ro));
  function Bs(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return B(t) && Os(t) || Ye(e) ? e : e.ownerDocument;
  }
  const jo = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
    qo = dt(t => t.replace(jo, "$1 *"));
  function Ds(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    let i = arguments.length > 2 ? arguments[2] : undefined;
    if (!t || !B(t)) return t;
    if (t = qo(t), Os(t)) {
      const s = Vo(t);
      t = "";
      for (let n of s) {
        let o = e;
        if (n[0] === "!") {
          const r = n.substr(1).trim().split(" ");
          if (o = U(O(e), r[0]), n = r.slice(1).join(" ").trim(), !n.length && s.length === 1) return o;
        }
        if (n[0] === "-") {
          const r = n.substr(1).trim().split(" "),
            a = (o || e).previousElementSibling;
          o = C(a, n.substr(1)) ? a : null, n = r.slice(1).join(" ");
        }
        o && (t += `${t ? "," : ""}${Yo(o)} ${n}`);
      }
      e = document;
    }
    try {
      return e[i](t);
    } catch {
      return null;
    }
  }
  const Uo = /.*?[^\\](?:,|$)/g,
    Vo = dt(t => t.match(Uo).map(e => e.replace(/,$/, "").trim()));
  function Yo(t) {
    const e = [];
    for (; t.parentNode;) {
      const i = p(t, "id");
      if (i) {
        e.unshift(`#${qi(i)}`);
        break;
      } else {
        let {
          tagName: s
        } = t;
        s !== "HTML" && (s += `:nth-child(${re(t) + 1})`), e.unshift(s), t = t.parentNode;
      }
    }
    return e.join(" > ");
  }
  function qi(t) {
    return B(t) ? CSS.escape(t) : "";
  }
  function x() {
    for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      t[_key2] = arguments[_key2];
    }
    let [e, i, s, n, o = !1] = Ui(t);
    n.length > 1 && (n = Xo(n)), o != null && o.self && (n = Jo(n)), s && (n = Go(s, n));
    for (const r of i) for (const a of e) a.addEventListener(r, n, o);
    return () => Dt(e, i, n, o);
  }
  function Dt() {
    for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      t[_key3] = arguments[_key3];
    }
    let [e, i,, s, n = !1] = Ui(t);
    for (const o of i) for (const r of e) r.removeEventListener(o, s, n);
  }
  function j() {
    for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      t[_key4] = arguments[_key4];
    }
    const [e, i, s, n, o = !1, r] = Ui(t),
      a = x(e, i, s, l => {
        const h = !r || r(l);
        h && (a(), n(l, h));
      }, o);
    return a;
  }
  function v(t, e, i) {
    return Vi(t).every(s => s.dispatchEvent(Mt(e, !0, !0, i)));
  }
  function Mt(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    let s = arguments.length > 3 ? arguments[3] : undefined;
    return B(t) && (t = new CustomEvent(t, {
      bubbles: e,
      cancelable: i,
      detail: s
    })), t;
  }
  function Ui(t) {
    return t[0] = Vi(t[0]), B(t[1]) && (t[1] = t[1].split(" ")), it(t[2]) && t.splice(2, 0, !1), t;
  }
  function Go(t, e) {
    return i => {
      const s = t[0] === ">" ? Te(t, i.currentTarget).reverse().filter(n => D(i.target, n))[0] : U(i.target, t);
      s && (i.current = s, e.call(this, i), delete i.current);
    };
  }
  function Xo(t) {
    return e => Q(e.detail) ? t(e, ...e.detail) : t(e);
  }
  function Jo(t) {
    return function (e) {
      if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e);
    };
  }
  function Ms(t) {
    return t && "addEventListener" in t;
  }
  function Ko(t) {
    return Ms(t) ? t : H(t);
  }
  function Vi(t) {
    return Q(t) ? t.map(Ko).filter(Boolean) : B(t) ? Te(t) : Ms(t) ? [t] : k(t);
  }
  function It(t) {
    return t.pointerType === "touch" || !!t.touches;
  }
  function le(t) {
    var e, i;
    const {
      clientX: s,
      clientY: n
    } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
    return {
      x: s,
      y: n
    };
  }
  const Zo = {
    "animation-iteration-count": !0,
    "column-count": !0,
    "fill-opacity": !0,
    "flex-grow": !0,
    "flex-shrink": !0,
    "font-weight": !0,
    "line-height": !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    "stroke-dasharray": !0,
    "stroke-dashoffset": !0,
    widows: !0,
    "z-index": !0,
    zoom: !0
  };
  function c(t, e, i, s) {
    const n = k(t);
    for (const o of n) if (B(e)) {
      if (e = ei(e), Y(i)) return getComputedStyle(o).getPropertyValue(e);
      o.style.setProperty(e, bt(i) && !Zo[e] ? `${i}px` : i || Xe(i) ? i : "", s);
    } else if (Q(e)) {
      const r = {};
      for (const a of e) r[a] = c(o, a);
      return r;
    } else Et(e) && (s = i, St(e, (r, a) => c(o, a, r, s)));
    return n[0];
  }
  const ei = dt(t => Qo(t));
  function Qo(t) {
    if (ot(t, "--")) return t;
    t = Kt(t);
    const {
      style: e
    } = document.documentElement;
    if (t in e) return t;
    for (const i of ["webkit", "moz"]) {
      const s = `-${i}-${t}`;
      if (s in e) return s;
    }
  }
  function y(t) {
    for (var _len5 = arguments.length, e = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      e[_key5 - 1] = arguments[_key5];
    }
    Ns(t, e, "add");
  }
  function M(t) {
    for (var _len6 = arguments.length, e = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
      e[_key6 - 1] = arguments[_key6];
    }
    Ns(t, e, "remove");
  }
  function Yi(t, e) {
    p(t, "class", i => (i || "").replace(new RegExp(`\\b${e}\\b\\s?`, "g"), ""));
  }
  function Gi(t) {
    (arguments.length <= 1 ? undefined : arguments[1]) && M(t, arguments.length <= 1 ? undefined : arguments[1]), (arguments.length <= 2 ? undefined : arguments[2]) && y(t, arguments.length <= 2 ? undefined : arguments[2]);
  }
  function P(t, e) {
    return [e] = Xi(e), !!e && k(t).some(i => i.classList.contains(e));
  }
  function q(t, e, i) {
    const s = Xi(e);
    Y(i) || (i = !!i);
    for (const n of k(t)) for (const o of s) n.classList.toggle(o, i);
  }
  function Ns(t, e, i) {
    e = e.reduce((s, n) => s.concat(Xi(n)), []);
    for (const s of k(t)) s.classList[i](...e);
  }
  function Xi(t) {
    return String(t).split(/[ ,]/).filter(Boolean);
  }
  function tr(t, e) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
    let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "linear";
    return i = Math.round(i), Promise.all(k(t).map(n => new Promise((o, r) => {
      for (const l in e) {
        const h = c(n, l);
        h === "" && c(n, l, h);
      }
      const a = setTimeout(() => v(n, "transitionend"), i);
      j(n, "transitionend transitioncanceled", _ref7 => {
        let {
          type: l
        } = _ref7;
        clearTimeout(a), M(n, "uk-transition"), c(n, {
          transitionProperty: "",
          transitionDuration: "",
          transitionTimingFunction: ""
        }), l === "transitioncanceled" ? r() : o(n);
      }, {
        self: !0
      }), y(n, "uk-transition"), c(n, {
        transitionProperty: Object.keys(e).map(ei).join(","),
        transitionDuration: `${i}ms`,
        transitionTimingFunction: s,
        ...e
      });
    })));
  }
  const E = {
      start: tr,
      async stop(t) {
        v(t, "transitionend"), await Promise.resolve();
      },
      async cancel(t) {
        v(t, "transitioncanceled"), await Promise.resolve();
      },
      inProgress(t) {
        return P(t, "uk-transition");
      }
    },
    Ee = "uk-animation-";
  function zs(t, e) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    let s = arguments.length > 3 ? arguments[3] : undefined;
    let n = arguments.length > 4 ? arguments[4] : undefined;
    return Promise.all(k(t).map(o => new Promise((r, a) => {
      v(o, "animationcanceled");
      const l = setTimeout(() => v(o, "animationend"), i);
      j(o, "animationend animationcanceled", _ref8 => {
        let {
          type: h
        } = _ref8;
        clearTimeout(l), h === "animationcanceled" ? a() : r(o), c(o, "animationDuration", ""), Yi(o, `${Ee}\\S*`);
      }, {
        self: !0
      }), c(o, "animationDuration", `${i}ms`), y(o, e, Ee + (n ? "leave" : "enter")), ot(e, Ee) && (s && y(o, `uk-transform-origin-${s}`), n && y(o, `${Ee}reverse`));
    })));
  }
  const er = new RegExp(`${Ee}(enter|leave)`),
    gt = {
      in: zs,
      out(t, e, i, s) {
        return zs(t, e, i, s, !0);
      },
      inProgress(t) {
        return er.test(p(t, "class"));
      },
      cancel(t) {
        v(t, "animationcanceled");
      }
    };
  function ir(t) {
    if (document.readyState !== "loading") {
      t();
      return;
    }
    j(document, "DOMContentLoaded", t);
  }
  function G(t) {
    for (var _len7 = arguments.length, e = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      e[_key7 - 1] = arguments[_key7];
    }
    return e.some(i => {
      var s;
      return ((s = t == null ? void 0 : t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase();
    });
  }
  function Ji(t) {
    return t = w(t), t.innerHTML = "", t;
  }
  function Nt(t, e) {
    return Y(e) ? w(t).innerHTML : L(Ji(t), e);
  }
  const sr = ni("prepend"),
    L = ni("append"),
    ii = ni("before"),
    si = ni("after");
  function ni(t) {
    return function (e, i) {
      var s;
      const n = k(B(i) ? zt(i) : i);
      return (s = w(e)) == null || s[t](...n), Fs(n);
    };
  }
  function lt(t) {
    k(t).forEach(e => e.remove());
  }
  function oi(t, e) {
    for (e = H(ii(t, e)); e.firstChild;) e = e.firstChild;
    return L(e, t), e;
  }
  function Ki(t, e) {
    return k(k(t).map(i => i.hasChildNodes() ? oi(Qt(i.childNodes), e) : L(i, e)));
  }
  function Pe(t) {
    k(t).map(O).filter((e, i, s) => s.indexOf(e) === i).forEach(e => e.replaceWith(...e.childNodes));
  }
  const nr = /^\s*<(\w+|!)[^>]*>/,
    or = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  function zt(t) {
    const e = or.exec(t);
    if (e) return document.createElement(e[1]);
    const i = document.createElement("div");
    return nr.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, Fs(i.childNodes);
  }
  function Fs(t) {
    return t.length > 1 ? t : t[0];
  }
  function Ct(t, e) {
    if (ee(t)) for (e(t), t = t.firstElementChild; t;) {
      const i = t.nextElementSibling;
      Ct(t, e), t = i;
    }
  }
  function w(t, e) {
    return Hs(t) ? H(zt(t)) : ji(t, e);
  }
  function z(t, e) {
    return Hs(t) ? k(zt(t)) : Te(t, e);
  }
  function Hs(t) {
    return B(t) && ot(t.trim(), "<");
  }
  const Ft = {
    width: ["left", "right"],
    height: ["top", "bottom"]
  };
  function b(t) {
    const e = ee(t) ? H(t).getBoundingClientRect() : {
      height: et(t),
      width: _e(t),
      top: 0,
      left: 0
    };
    return {
      height: e.height,
      width: e.width,
      top: e.top,
      left: e.left,
      bottom: e.top + e.height,
      right: e.left + e.width
    };
  }
  function _(t, e) {
    const i = b(t);
    if (t) {
      const {
          scrollY: n,
          scrollX: o
        } = se(t),
        r = {
          height: n,
          width: o
        };
      for (const a in Ft) for (const l of Ft[a]) i[l] += r[a];
    }
    if (!e) return i;
    const s = c(t, "position");
    St(c(t, ["left", "top"]), (n, o) => c(t, o, e[o] - i[o] + $(s === "absolute" && n === "auto" ? ri(t)[o] : n)));
  }
  function ri(t) {
    let {
      top: e,
      left: i
    } = _(t);
    const {
      ownerDocument: {
        body: s,
        documentElement: n
      },
      offsetParent: o
    } = H(t);
    let r = o || n;
    for (; r && (r === s || r === n) && c(r, "position") === "static";) r = r.parentNode;
    if (ee(r)) {
      const a = _(r);
      e -= a.top + $(c(r, "borderTopWidth")), i -= a.left + $(c(r, "borderLeftWidth"));
    }
    return {
      top: e - $(c(t, "marginTop")),
      left: i - $(c(t, "marginLeft"))
    };
  }
  function Ht(t) {
    t = H(t);
    const e = [t.offsetTop, t.offsetLeft];
    for (; t = t.offsetParent;) if (e[0] += t.offsetTop + $(c(t, "borderTopWidth")), e[1] += t.offsetLeft + $(c(t, "borderLeftWidth")), c(t, "position") === "fixed") {
      const i = se(t);
      return e[0] += i.scrollY, e[1] += i.scrollX, e;
    }
    return e;
  }
  const et = Ls("height"),
    _e = Ls("width");
  function Ls(t) {
    const e = Tt(t);
    return (i, s) => {
      if (Y(s)) {
        if (te(i)) return i[`inner${e}`];
        if (Ye(i)) {
          const n = i.documentElement;
          return Math.max(n[`offset${e}`], n[`scroll${e}`]);
        }
        return i = H(i), s = c(i, t), s = s === "auto" ? i[`offset${e}`] : $(s) || 0, s - he(i, t);
      } else return c(i, t, !s && s !== 0 ? "" : +s + he(i, t) + "px");
    };
  }
  function he(t, e) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "border-box";
    return c(t, "boxSizing") === i ? Bt(Ft[e].map(Tt), s => $(c(t, `padding${s}`)) + $(c(t, `border${s}Width`))) : 0;
  }
  function ai(t) {
    for (const e in Ft) for (const i in Ft[e]) if (Ft[e][i] === t) return Ft[e][1 - i];
    return t;
  }
  function ht(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "width";
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
    let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    return B(t) ? Bt(ar(t), n => {
      const o = hr(n);
      return o ? cr(o === "vh" ? ur() : o === "vw" ? _e(se(i)) : s ? i[`offset${Tt(e)}`] : b(i)[e], n) : n;
    }) : $(t);
  }
  const rr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
    ar = dt(t => t.toString().replace(/\s/g, "").match(rr) || []),
    lr = /(?:v[hw]|%)$/,
    hr = dt(t => (t.match(lr) || [])[0]);
  function cr(t, e) {
    return t * $(e) / 100;
  }
  let Ae, ce;
  function ur() {
    return Ae || (ce || (ce = w("<div>"), c(ce, {
      height: "100vh",
      position: "fixed"
    }), x(window, "resize", () => Ae = null)), L(document.body, ce), Ae = ce.clientHeight, lt(ce), Ae);
  }
  const Lt = typeof window < "u",
    X = Lt && document.dir === "rtl",
    Wt = Lt && "ontouchstart" in window,
    ue = Lt && window.PointerEvent,
    mt = ue ? "pointerdown" : Wt ? "touchstart" : "mousedown",
    li = ue ? "pointermove" : Wt ? "touchmove" : "mousemove",
    Pt = ue ? "pointerup" : Wt ? "touchend" : "mouseup",
    Rt = ue ? "pointerenter" : Wt ? "" : "mouseenter",
    fe = ue ? "pointerleave" : Wt ? "" : "mouseleave",
    hi = ue ? "pointercancel" : "touchcancel",
    J = {
      reads: [],
      writes: [],
      read(t) {
        return this.reads.push(t), Qi(), t;
      },
      write(t) {
        return this.writes.push(t), Qi(), t;
      },
      clear(t) {
        Rs(this.reads, t), Rs(this.writes, t);
      },
      flush: Zi
    };
  function Zi(t) {
    Ws(J.reads), Ws(J.writes.splice(0)), J.scheduled = !1, (J.reads.length || J.writes.length) && Qi(t + 1);
  }
  const fr = 4;
  function Qi(t) {
    J.scheduled || (J.scheduled = !0, t && t < fr ? Promise.resolve().then(() => Zi(t)) : requestAnimationFrame(() => Zi(1)));
  }
  function Ws(t) {
    let e;
    for (; e = t.shift();) try {
      e();
    } catch (i) {
      console.error(i);
    }
  }
  function Rs(t, e) {
    const i = t.indexOf(e);
    return ~i && t.splice(i, 1);
  }
  function ts() {}
  ts.prototype = {
    positions: [],
    init() {
      this.positions = [];
      let t;
      this.unbind = x(document, "mousemove", e => t = le(e)), this.interval = setInterval(() => {
        t && (this.positions.push(t), this.positions.length > 5 && this.positions.shift());
      }, 50);
    },
    cancel() {
      var t;
      (t = this.unbind) == null || t.call(this), clearInterval(this.interval);
    },
    movesTo(t) {
      if (this.positions.length < 2) return !1;
      const e = t.getBoundingClientRect(),
        {
          left: i,
          right: s,
          top: n,
          bottom: o
        } = e,
        [r] = this.positions,
        a = ne(this.positions),
        l = [r, a];
      return Ze(a, e) ? !1 : [[{
        x: i,
        y: n
      }, {
        x: s,
        y: o
      }], [{
        x: i,
        y: o
      }, {
        x: s,
        y: n
      }]].some(u => {
        const f = dr(l, u);
        return f && Ze(f, e);
      });
    }
  };
  function dr(_ref9, _ref10) {
    let [{
      x: t,
      y: e
    }, {
      x: i,
      y: s
    }] = _ref9;
    let [{
      x: n,
      y: o
    }, {
      x: r,
      y: a
    }] = _ref10;
    const l = (a - o) * (i - t) - (r - n) * (s - e);
    if (l === 0) return !1;
    const h = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
    return h < 0 ? !1 : {
      x: t + h * (i - t),
      y: e + h * (s - e)
    };
  }
  function js(t, e) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let {
      intersecting: s = !0
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const n = new IntersectionObserver(s ? (o, r) => {
      o.some(a => a.isIntersecting) && e(o, r);
    } : e, i);
    for (const o of k(t)) n.observe(o);
    return n;
  }
  const pr = Lt && window.ResizeObserver;
  function ci(t, e) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      box: "border-box"
    };
    if (pr) return Us(ResizeObserver, t, e, i);
    const s = [x(window, "load resize", e), x(document, "loadedmetadata load", e, !0)];
    return {
      disconnect: () => s.map(n => n())
    };
  }
  function es(t) {
    return {
      disconnect: x([window, window.visualViewport], "resize", t)
    };
  }
  function qs(t, e, i) {
    return Us(MutationObserver, t, e, i);
  }
  function Us(t, e, i, s) {
    const n = new t(i);
    for (const o of k(e)) n.observe(o, s);
    return n;
  }
  function Vs(t) {
    if (fi(t) && is(t, {
      func: "playVideo",
      method: "play"
    }), ui(t)) try {
      t.play().catch(S);
    } catch {}
  }
  function Ys(t) {
    fi(t) && is(t, {
      func: "pauseVideo",
      method: "pause"
    }), ui(t) && t.pause();
  }
  function Gs(t) {
    fi(t) && is(t, {
      func: "mute",
      method: "setVolume",
      value: 0
    }), ui(t) && (t.muted = !0);
  }
  function Xs(t) {
    return ui(t) || fi(t);
  }
  function ui(t) {
    return G(t, "video");
  }
  function fi(t) {
    return G(t, "iframe") && (Js(t) || Ks(t));
  }
  function Js(t) {
    return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
  }
  function Ks(t) {
    return !!t.src.match(/vimeo\.com\/video\/.*/);
  }
  async function is(t, e) {
    await mr(t), Zs(t, e);
  }
  function Zs(t, e) {
    try {
      t.contentWindow.postMessage(JSON.stringify({
        event: "command",
        ...e
      }), "*");
    } catch {}
  }
  const ss = "_ukPlayer";
  let gr = 0;
  function mr(t) {
    if (t[ss]) return t[ss];
    const e = Js(t),
      i = Ks(t),
      s = ++gr;
    let n;
    return t[ss] = new Promise(o => {
      e && j(t, "load", () => {
        const r = () => Zs(t, {
          event: "listening",
          id: s
        });
        n = setInterval(r, 100), r();
      }), j(window, "message", o, !1, _ref11 => {
        let {
          data: r
        } = _ref11;
        try {
          return r = JSON.parse(r), e && (r == null ? void 0 : r.id) === s && r.event === "onReady" || i && Number(r == null ? void 0 : r.player_id) === s;
        } catch {}
      }), t.src = `${t.src}${m(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`;
    }).then(() => clearInterval(n));
  }
  function ns(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return R(t) ? Fi(...jt(t).map(s => {
      const {
        top: n,
        left: o,
        bottom: r,
        right: a
      } = ct(s);
      return {
        top: n - e,
        left: o - i,
        bottom: r + e,
        right: a + i
      };
    }).concat(_(t))) : !1;
  }
  function Qs(t) {
    let {
      offset: e = 0
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const i = R(t) ? de(t, !1, ["hidden"]) : [];
    return i.reduce((r, a, l) => {
      const {
          scrollTop: h,
          scrollHeight: u,
          offsetHeight: f
        } = a,
        d = ct(a),
        g = u - d.height,
        {
          height: A,
          top: N
        } = i[l - 1] ? ct(i[l - 1]) : _(t);
      let F = Math.ceil(N - d.top - e + h);
      return e > 0 && f < A + e ? F += e : e = 0, F > g ? (e -= F - g, F = g) : F < 0 && (e -= F, F = 0), () => s(a, F - h).then(r);
    }, () => Promise.resolve())();
    function s(r, a) {
      return new Promise(l => {
        const h = r.scrollTop,
          u = n(Math.abs(a)),
          f = Date.now();
        (function d() {
          const g = o(Z((Date.now() - f) / u));
          r.scrollTop = h + a * g, g === 1 ? l() : requestAnimationFrame(d);
        })();
      });
    }
    function n(r) {
      return 40 * Math.pow(r, .375);
    }
    function o(r) {
      return .5 * (1 - Math.cos(Math.PI * r));
    }
  }
  function os(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (!R(t)) return 0;
    const s = _t(t, !0),
      {
        scrollHeight: n,
        scrollTop: o
      } = s,
      {
        height: r
      } = ct(s),
      a = n - r,
      l = Ht(t)[0] - Ht(s)[0],
      h = Math.max(0, l - r + e),
      u = Math.min(a, l + t.offsetHeight - i);
    return Z((o - h) / (u - h));
  }
  function de(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    const s = tn(t);
    let n = oe(t).reverse();
    n = n.slice(n.indexOf(s) + 1);
    const o = xt(n, r => c(r, "position") === "fixed");
    return ~o && (n = n.slice(o)), [s].concat(n.filter(r => c(r, "overflow").split(" ").some(a => m(["auto", "scroll", ...i], a)) && (!e || r.scrollHeight > ct(r).height))).reverse();
  }
  function _t() {
    return de(...arguments)[0];
  }
  function jt(t) {
    return de(t, !1, ["hidden", "clip"]);
  }
  function ct(t) {
    const e = se(t),
      {
        visualViewport: i,
        document: {
          documentElement: s
        }
      } = e;
    let n = t === tn(t) ? e : t;
    if (te(n) && i) {
      let {
        height: r,
        width: a,
        scale: l,
        pageTop: h,
        pageLeft: u
      } = i;
      return r = Math.round(r * l), a = Math.round(a * l), {
        height: r,
        width: a,
        top: h,
        left: u,
        bottom: h + r,
        right: u + a
      };
    }
    let o = _(n);
    if (c(n, "display") === "inline") return o;
    for (let [r, a, l, h] of [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]]) {
      te(n) ? n = s : o[l] += $(c(n, `border-${l}-width`));
      const u = o[r] % 1;
      o[r] = o[a] = n[`client${Tt(r)}`] - (u ? u < .5 ? -u : 1 - u : 0), o[h] = o[r] + o[l];
    }
    return o;
  }
  function tn(t) {
    return se(t).document.scrollingElement;
  }
  const ut = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]];
  function en(t, e, i) {
    i = {
      attach: {
        element: ["left", "top"],
        target: ["left", "top"],
        ...i.attach
      },
      offset: [0, 0],
      placement: [],
      ...i
    }, Q(e) || (e = [e, e]), _(t, sn(t, e, i));
  }
  function sn(t, e, i) {
    const s = nn(t, e, i),
      {
        boundary: n,
        viewportOffset: o = 0,
        placement: r
      } = i;
    let a = s;
    for (const [l, [h,, u, f]] of Object.entries(ut)) {
      const d = vr(t, e[l], o, n, l);
      if (di(s, d, l)) continue;
      let g = 0;
      if (r[l] === "flip") {
        const A = i.attach.target[l];
        if (A === f && s[f] <= d[f] || A === u && s[u] >= d[u]) continue;
        g = br(t, e, i, l)[u] - s[u];
        const N = wr(t, e[l], o, l);
        if (!di(rs(s, g, l), N, l)) {
          if (di(s, N, l)) continue;
          if (i.recursion) return !1;
          const F = $r(t, e, i);
          if (F && di(F, N, 1 - l)) return F;
          continue;
        }
      } else if (r[l] === "shift") {
        const A = _(e[l]),
          {
            offset: N
          } = i;
        g = Z(Z(s[u], d[u], d[f] - s[h]), A[u] - s[h] + N[l], A[f] - N[l]) - s[u];
      }
      a = rs(a, g, l);
    }
    return a;
  }
  function nn(t, e, i) {
    let {
        attach: s,
        offset: n
      } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...i.attach
        },
        offset: [0, 0],
        ...i
      },
      o = _(t);
    for (const [r, [a,, l, h]] of Object.entries(ut)) {
      const u = s.target[r] === s.element[r] ? ct(e[r]) : _(e[r]);
      o = rs(o, u[l] - o[l] + on(s.target[r], h, u[a]) - on(s.element[r], h, o[a]) + +n[r], r);
    }
    return o;
  }
  function rs(t, e, i) {
    const [, s, n, o] = ut[i],
      r = {
        ...t
      };
    return r[n] = t[s] = t[n] + e, r[o] += e, r;
  }
  function on(t, e, i) {
    return t === "center" ? i / 2 : t === e ? i : 0;
  }
  function vr(t, e, i, s, n) {
    let o = an(...rn(t, e).map(ct));
    return i && (o[ut[n][2]] += i, o[ut[n][3]] -= i), s && (o = an(o, _(Q(s) ? s[n] : s))), o;
  }
  function wr(t, e, i, s) {
    const [n, o, r, a] = ut[s],
      [l] = rn(t, e),
      h = ct(l);
    return ["auto", "scroll"].includes(c(l, `overflow-${o}`)) && (h[r] -= l[`scroll${Tt(r)}`], h[a] = h[r] + l[`scroll${Tt(n)}`]), h[r] += i, h[a] -= i, h;
  }
  function rn(t, e) {
    return jt(e).filter(i => D(t, i));
  }
  function an() {
    let e = {};
    for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      t[_key8] = arguments[_key8];
    }
    for (const i of t) for (const [,, s, n] of ut) e[s] = Math.max(e[s] || 0, i[s]), e[n] = Math.min(...[e[n], i[n]].filter(Boolean));
    return e;
  }
  function di(t, e, i) {
    const [,, s, n] = ut[i];
    return t[s] >= e[s] && t[n] <= e[n];
  }
  function br(t, e, _ref12, n) {
    let {
      offset: i,
      attach: s
    } = _ref12;
    return nn(t, e, {
      attach: {
        element: ln(s.element, n),
        target: ln(s.target, n)
      },
      offset: xr(i, n)
    });
  }
  function $r(t, e, i) {
    return sn(t, e, {
      ...i,
      attach: {
        element: i.attach.element.map(hn).reverse(),
        target: i.attach.target.map(hn).reverse()
      },
      offset: i.offset.reverse(),
      placement: i.placement.reverse(),
      recursion: !0
    });
  }
  function ln(t, e) {
    const i = [...t],
      s = ut[e].indexOf(t[e]);
    return ~s && (i[e] = ut[e][1 - s % 2 + 2]), i;
  }
  function hn(t) {
    for (let e = 0; e < ut.length; e++) {
      const i = ut[e].indexOf(t);
      if (~i) return ut[1 - e][i % 2 + 2];
    }
  }
  function xr(t, e) {
    return t = [...t], t[e] *= -1, t;
  }
  var yr = Object.freeze({
    __proto__: null,
    $: w,
    $$: z,
    Animation: gt,
    Dimensions: Qe,
    MouseTracker: ts,
    Transition: E,
    addClass: y,
    after: si,
    append: L,
    apply: Ct,
    assign: wt,
    attr: p,
    before: ii,
    boxModelAdjust: he,
    camelize: $e,
    children: T,
    clamp: Z,
    closest: U,
    createEvent: Mt,
    css: c,
    data: tt,
    dimensions: b,
    each: St,
    empty: Ji,
    endsWith: Zt,
    escape: qi,
    fastdom: J,
    filter: Ie,
    find: ji,
    findAll: Te,
    findIndex: xt,
    flipPosition: ai,
    fragment: zt,
    getEventPos: le,
    getIndex: rt,
    getTargetedElement: Ri,
    hasAttr: $t,
    hasClass: P,
    hasOwn: vt,
    hasTouch: Wt,
    height: et,
    html: Nt,
    hyphenate: Kt,
    inBrowser: Lt,
    includes: m,
    index: re,
    intersectRect: Fi,
    isArray: Q,
    isBoolean: ie,
    isDocument: Ye,
    isElement: ee,
    isEmpty: xe,
    isEqual: Je,
    isFocusable: ti,
    isFunction: it,
    isInView: ns,
    isInput: Wi,
    isNode: Ge,
    isNumber: Xe,
    isNumeric: bt,
    isObject: Et,
    isPlainObject: yt,
    isRtl: X,
    isSameSiteAnchor: ae,
    isString: B,
    isTag: G,
    isTouch: It,
    isUndefined: Y,
    isVideo: Xs,
    isVisible: R,
    isVoidElement: Li,
    isWindow: te,
    last: ne,
    matches: C,
    memoize: dt,
    mute: Gs,
    noop: S,
    observeIntersection: js,
    observeMutation: qs,
    observeResize: ci,
    observeViewportResize: es,
    off: Dt,
    offset: _,
    offsetPosition: Ht,
    offsetViewport: ct,
    on: x,
    once: j,
    overflowParents: jt,
    parent: O,
    parents: oe,
    pause: Ys,
    pick: zi,
    play: Vs,
    pointInRect: Ze,
    pointerCancel: hi,
    pointerDown: mt,
    pointerEnter: Rt,
    pointerLeave: fe,
    pointerMove: li,
    pointerUp: Pt,
    position: ri,
    positionAt: en,
    prepend: sr,
    propName: ei,
    query: at,
    queryAll: Ce,
    ready: ir,
    remove: lt,
    removeAttr: ye,
    removeClass: M,
    removeClasses: Yi,
    replaceClass: Gi,
    scrollIntoView: Qs,
    scrollParent: _t,
    scrollParents: de,
    scrolledOver: os,
    selFocusable: Se,
    selInput: ke,
    sortBy: Ke,
    startsWith: ot,
    sumBy: Bt,
    swap: Ni,
    toArray: Qt,
    toBoolean: Mi,
    toEventTargets: Vi,
    toFloat: $,
    toNode: H,
    toNodes: k,
    toNumber: kt,
    toPx: ht,
    toWindow: se,
    toggleClass: q,
    trigger: v,
    ucfirst: Tt,
    uniqueBy: _s,
    unwrap: Pe,
    width: _e,
    within: D,
    wrapAll: oi,
    wrapInner: Ki
  });
  function kr(t) {
    t._watches = [];
    for (const e of t.$options.watch || []) for (const [i, s] of Object.entries(e)) cn(t, s, i);
    t._initial = !0;
  }
  function cn(t, e, i) {
    t._watches.push({
      name: i,
      ...(yt(e) ? e : {
        handler: e
      })
    });
  }
  function Sr(t, e) {
    for (const {
      name: i,
      handler: s,
      immediate: n = !0
    } of t._watches) (t._initial && n || vt(e, i) && !Je(e[i], t[i])) && s.call(t, t[i], e[i]);
    t._initial = !1;
  }
  function Ir(t) {
    t._data = {}, t._updates = [...(t.$options.update || [])];
  }
  function Cr(t, e) {
    t._updates.unshift(e);
  }
  function Tr(t) {
    delete t._data;
  }
  function pi(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "update";
    t._connected && t._updates.length && (t._queued || (t._queued = new Set(), J.read(() => {
      t._connected && Er(t, t._queued), delete t._queued;
    })), t._queued.add(e.type || e));
  }
  function Er(t, e) {
    for (const {
      read: i,
      write: s,
      events: n = []
    } of t._updates) {
      if (!e.has("update") && !n.some(r => e.has(r))) continue;
      let o;
      i && (o = i.call(t, t._data, e), o && yt(o) && wt(t._data, o)), s && o !== !1 && J.write(() => {
        t._connected && s.call(t, t._data, e);
      });
    }
  }
  function Pr(t) {
    const {
      computed: e
    } = t.$options;
    if (t._computed = {}, e) for (const i in e) un(t, i, e[i]);
  }
  function un(t, e, i) {
    t._hasComputed = !0, Object.defineProperty(t, e, {
      enumerable: !0,
      get() {
        const {
          _computed: s,
          $props: n,
          $el: o
        } = t;
        return vt(s, e) || (s[e] = (i.get || i).call(t, n, o)), s[e];
      },
      set(s) {
        const {
          _computed: n
        } = t;
        n[e] = i.set ? i.set.call(t, s) : s, Y(n[e]) && delete n[e];
      }
    });
  }
  function _r(t) {
    t._hasComputed && (Cr(t, {
      read: () => Sr(t, fn(t)),
      events: ["resize", "computed"]
    }), Or(), Oe.add(t));
  }
  function Ar(t) {
    Oe == null || Oe.delete(t), fn(t);
  }
  function fn(t) {
    const e = {
      ...t._computed
    };
    return t._computed = {}, e;
  }
  let as, Oe;
  function Or() {
    as || (Oe = new Set(), as = new MutationObserver(() => {
      for (const t of Oe) pi(t, "computed");
    }), as.observe(document, {
      childList: !0,
      subtree: !0
    }));
  }
  function Br(t) {
    t._events = [];
    for (const e of t.$options.events || []) if (vt(e, "handler")) ls(t, e);else for (const i in e) ls(t, e[i], i);
  }
  function Dr(t) {
    t._events.forEach(e => e()), delete t._events;
  }
  function ls(t, e, i) {
    let {
      name: s,
      el: n,
      handler: o,
      capture: r,
      passive: a,
      delegate: l,
      filter: h,
      self: u
    } = yt(e) ? e : {
      name: i,
      handler: e
    };
    if (n = it(n) ? n.call(t, t) : n || t.$el, Q(n)) {
      n.forEach(f => ls(t, {
        ...e,
        el: f
      }, i));
      return;
    }
    !n || h && !h.call(t) || t._events.push(x(n, s, l ? B(l) ? l : l.call(t, t) : null, B(o) ? t[o] : o.bind(t), {
      passive: a,
      capture: r,
      self: u
    }));
  }
  function Mr(t) {
    t._observers = [];
    for (const e of t.$options.observe || []) if (vt(e, "handler")) pn(t, e);else for (const i of e) pn(t, i);
  }
  function dn(t) {
    for (var _len9 = arguments.length, e = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
      e[_key9 - 1] = arguments[_key9];
    }
    t._observers.push(...e);
  }
  function Nr(t) {
    for (const e of t._observers) e.disconnect();
  }
  function pn(t, e) {
    let {
      observe: i,
      target: s = t.$el,
      handler: n,
      options: o,
      filter: r,
      args: a
    } = e;
    if (r && !r.call(t, t)) return;
    const l = `_observe${t._observers.length}`;
    it(s) && !vt(t, l) && un(t, l, () => s.call(t, t)), n = B(n) ? t[n] : n.bind(t), it(o) && (o = o.call(t, t));
    const h = vt(t, l) ? t[l] : s,
      u = i(h, n, o, a);
    it(s) && Q(t[l]) && u.unobserve && cn(t, {
      handler: zr(u),
      immediate: !1
    }, l), dn(t, u);
  }
  function zr(t) {
    return (e, i) => {
      for (const s of i) !m(e, s) && t.unobserve(s);
      for (const s of e) !m(i, s) && t.observe(s);
    };
  }
  const V = {};
  V.events = V.watch = V.observe = V.created = V.beforeConnect = V.connected = V.beforeDisconnect = V.disconnected = V.destroy = hs, V.args = function (t, e) {
    return e !== !1 && hs(e || t);
  }, V.update = function (t, e) {
    return Ke(hs(t, it(e) ? {
      read: e
    } : e), "order");
  }, V.props = function (t, e) {
    if (Q(e)) {
      const i = {};
      for (const s of e) i[s] = String;
      e = i;
    }
    return V.methods(t, e);
  }, V.computed = V.methods = function (t, e) {
    return e ? t ? {
      ...t,
      ...e
    } : e : t;
  }, V.i18n = V.data = function (t, e, i) {
    return i ? gn(t, e, i) : e ? t ? function (s) {
      return gn(t, e, s);
    } : e : t;
  };
  function gn(t, e, i) {
    return V.computed(it(t) ? t.call(i, i) : t, it(e) ? e.call(i, i) : e);
  }
  function hs(t, e) {
    return t = t && !Q(t) ? [t] : t, e ? t ? t.concat(e) : Q(e) ? e : [e] : t;
  }
  function Fr(t, e) {
    return Y(e) ? t : e;
  }
  function Be(t, e, i) {
    const s = {};
    if (it(e) && (e = e.options), e.extends && (t = Be(t, e.extends, i)), e.mixins) for (const o of e.mixins) t = Be(t, o, i);
    for (const o in t) n(o);
    for (const o in e) vt(t, o) || n(o);
    function n(o) {
      s[o] = (V[o] || Fr)(t[o], e[o], i);
    }
    return s;
  }
  function De(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    try {
      return t ? ot(t, "{") ? JSON.parse(t) : e.length && !m(t, ":") ? {
        [e[0]]: t
      } : t.split(";").reduce((i, s) => {
        const [n, o] = s.split(/:(.*)/);
        return n && !Y(o) && (i[n.trim()] = o.trim()), i;
      }, {}) : {};
    } catch {
      return {};
    }
  }
  function cs(t, e) {
    return t === Boolean ? Mi(e) : t === Number ? kt(e) : t === "list" ? Hr(e) : t === Object && B(e) ? De(e) : t ? t(e) : e;
  }
  function Hr(t) {
    return Q(t) ? t : B(t) ? t.split(/,(?![^(]*\))/).map(e => bt(e) ? kt(e) : Mi(e.trim())) : [t];
  }
  function Lr(t) {
    const e = mn(t.$options);
    for (let s in e) Y(e[s]) || (t.$props[s] = e[s]);
    const i = [t.$options.computed, t.$options.methods];
    for (let s in t.$props) s in e && Wr(i, s) && (t[s] = t.$props[s]);
  }
  function mn(t) {
    const e = {},
      {
        args: i = [],
        props: s = {},
        el: n,
        id: o
      } = t;
    if (!s) return e;
    for (const a in s) {
      const l = Kt(a);
      let h = tt(n, l);
      Y(h) || (h = s[a] === Boolean && h === "" ? !0 : cs(s[a], h), !(l === "target" && ot(h, "_")) && (e[a] = h));
    }
    const r = De(tt(n, o), i);
    for (const a in r) {
      const l = $e(a);
      Y(s[l]) || (e[l] = cs(s[l], r[a]));
    }
    return e;
  }
  function Wr(t, e) {
    return t.every(i => !i || !vt(i, e));
  }
  function Rr(t) {
    const {
        $options: e,
        $props: i
      } = t,
      {
        id: s,
        props: n,
        el: o
      } = e;
    if (!n) return;
    const r = Object.keys(n),
      a = r.map(h => Kt(h)).concat(s),
      l = new MutationObserver(h => {
        const u = mn(e);
        h.some(_ref13 => {
          let {
            attributeName: f
          } = _ref13;
          const d = f.replace("data-", "");
          return (d === s ? r : [$e(d), $e(f)]).some(g => !Y(u[g]) && u[g] !== i[g]);
        }) && t.$reset();
      });
    l.observe(o, {
      attributes: !0,
      attributeFilter: a.concat(a.map(h => `data-${h}`))
    }), dn(t, l);
  }
  function pe(t, e) {
    var i;
    (i = t.$options[e]) == null || i.forEach(s => s.call(t));
  }
  function us(t) {
    t._connected || (Lr(t), pe(t, "beforeConnect"), t._connected = !0, Br(t), Ir(t), kr(t), Mr(t), Rr(t), _r(t), pe(t, "connected"), pi(t));
  }
  function fs(t) {
    t._connected && (pe(t, "beforeDisconnect"), Dr(t), Tr(t), Nr(t), Ar(t), pe(t, "disconnected"), t._connected = !1);
  }
  let jr = 0;
  function vn(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    e.data = Vr(e, t.constructor.options), t.$options = Be(t.constructor.options, e, t), t.$props = {}, t._uid = jr++, qr(t), Ur(t), Pr(t), pe(t, "created"), e.el && t.$mount(e.el);
  }
  function qr(t) {
    const {
      data: e = {}
    } = t.$options;
    for (const i in e) t.$props[i] = t[i] = e[i];
  }
  function Ur(t) {
    const {
      methods: e
    } = t.$options;
    if (e) for (const i in e) t[i] = e[i].bind(t);
  }
  function Vr(_ref14, _ref15) {
    let {
      data: t = {}
    } = _ref14;
    let {
      args: e = [],
      props: i = {}
    } = _ref15;
    Q(t) && (t = t.slice(0, e.length).reduce((s, n, o) => (yt(n) ? wt(s, n) : s[e[o]] = n, s), {}));
    for (const s in t) Y(t[s]) ? delete t[s] : i[s] && (t[s] = cs(i[s], t[s]));
    return t;
  }
  const ft = function (t) {
    vn(this, t);
  };
  ft.util = yr, ft.options = {}, ft.version = "3.16.22";
  const Yr = "uk-",
    qt = "__uikit__",
    ge = {};
  function wn(t, e) {
    var i;
    const s = Yr + Kt(t);
    if (!e) return yt(ge[s]) && (ge[s] = ft.extend(ge[s])), ge[s];
    t = $e(t), ft[t] = (o, r) => Me(t, o, r);
    const n = yt(e) ? {
      ...e
    } : e.options;
    return n.id = s, n.name = t, (i = n.install) == null || i.call(n, ft, n, t), ft._initialized && !n.functional && requestAnimationFrame(() => Me(t, `[${s}],[data-${s}]`)), ge[s] = n;
  }
  function Me(t, e, i) {
    const n = wn(t);
    for (var _len10 = arguments.length, s = new Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
      s[_key10 - 3] = arguments[_key10];
    }
    return n.options.functional ? new n({
      data: yt(e) ? e : [e, i, ...s]
    }) : e ? z(e).map(o)[0] : o();
    function o(r) {
      const a = gi(r, t);
      if (a) if (i) a.$destroy();else return a;
      return new n({
        el: r,
        data: i
      });
    }
  }
  function Ut(t) {
    return (t == null ? void 0 : t[qt]) || {};
  }
  function gi(t, e) {
    return Ut(t)[e];
  }
  function Gr(t, e) {
    t[qt] || (t[qt] = {}), t[qt][e.$options.name] = e;
  }
  function Xr(t, e) {
    var i;
    (i = t[qt]) == null || delete i[e.$options.name], xe(t[qt]) || delete t[qt];
  }
  function Jr(t) {
    t.component = wn, t.getComponents = Ut, t.getComponent = gi, t.update = bn, t.use = function (i) {
      if (!i.installed) return i.call(null, this), i.installed = !0, this;
    }, t.mixin = function (i, s) {
      s = (B(s) ? this.component(s) : s) || this, s.options = Be(s.options, i);
    }, t.extend = function (i) {
      i || (i = {});
      const s = this,
        n = function (r) {
          vn(this, r);
        };
      return n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.options = Be(s.options, i), n.super = s, n.extend = s.extend, n;
    };
    let e;
    Object.defineProperty(t, "container", {
      get() {
        return e || document.body;
      },
      set(i) {
        e = w(i);
      }
    });
  }
  function bn(t, e) {
    t = t ? H(t) : document.body;
    for (const i of oe(t).reverse()) $n(i, e);
    Ct(t, i => $n(i, e));
  }
  function $n(t, e) {
    const i = Ut(t);
    for (const s in i) pi(i[s], e);
  }
  function Kr(t) {
    t.prototype.$mount = function (e) {
      const i = this;
      Gr(e, i), i.$options.el = e, D(e, document) && us(i);
    }, t.prototype.$destroy = function () {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      const i = this,
        {
          el: s
        } = i.$options;
      s && fs(i), pe(i, "destroy"), Xr(s, i), e && lt(i.$el);
    }, t.prototype.$create = Me, t.prototype.$emit = function (e) {
      pi(this, e);
    }, t.prototype.$update = function () {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$el;
      let i = arguments.length > 1 ? arguments[1] : undefined;
      bn(e, i);
    }, t.prototype.$reset = function () {
      fs(this), us(this);
    }, t.prototype.$getComponent = gi, Object.defineProperties(t.prototype, {
      $el: {
        get() {
          return this.$options.el;
        }
      },
      $container: Object.getOwnPropertyDescriptor(t, "container")
    });
  }
  function At(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t.$el;
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    if (e.id) return e.id;
    let s = `${t.$options.id}-${t._uid}${i}`;
    return w(`#${s}`) && (s = At(t, e, `${i}-2`)), s;
  }
  Jr(ft), Kr(ft);
  function Zr(t) {
    Lt && window.MutationObserver && (document.body ? requestAnimationFrame(() => xn(t)) : new MutationObserver((e, i) => {
      document.body && (xn(t), i.disconnect());
    }).observe(document.documentElement, {
      childList: !0
    }));
  }
  function xn(t) {
    v(document, "uikit:init", t), document.body && Ct(document.body, yn), new MutationObserver(e => e.forEach(Qr)).observe(document, {
      childList: !0,
      subtree: !0
    }), new MutationObserver(e => e.forEach(ta)).observe(document, {
      attributes: !0,
      subtree: !0
    }), t._initialized = !0;
  }
  function Qr(_ref16) {
    let {
      addedNodes: t,
      removedNodes: e
    } = _ref16;
    for (const i of t) Ct(i, yn);
    for (const i of e) Ct(i, ea);
  }
  function ta(_ref17) {
    let {
      target: t,
      attributeName: e
    } = _ref17;
    var i;
    const s = kn(e);
    if (s) {
      if ($t(t, e)) {
        Me(s, t);
        return;
      }
      (i = gi(t, s)) == null || i.$destroy();
    }
  }
  function yn(t) {
    const e = Ut(t);
    for (const i in Ut(t)) us(e[i]);
    for (const i of t.getAttributeNames()) {
      const s = kn(i);
      s && Me(s, t);
    }
  }
  function ea(t) {
    const e = Ut(t);
    for (const i in Ut(t)) fs(e[i]);
  }
  function kn(t) {
    ot(t, "data-") && (t = t.slice(5));
    const e = ge[t];
    return e && (yt(e) ? e : e.options).name;
  }
  var st = {
      connected() {
        y(this.$el, this.$options.id);
      }
    },
    Vt = {
      props: {
        cls: Boolean,
        animation: "list",
        duration: Number,
        velocity: Number,
        origin: String,
        transition: String
      },
      data: {
        cls: !1,
        animation: [!1],
        duration: 200,
        velocity: .2,
        origin: !1,
        transition: "ease",
        clsEnter: "uk-togglabe-enter",
        clsLeave: "uk-togglabe-leave"
      },
      computed: {
        hasAnimation(_ref18) {
          let {
            animation: t
          } = _ref18;
          return !!t[0];
        },
        hasTransition(_ref19) {
          let {
            animation: t
          } = _ref19;
          return ["slide", "reveal"].some(e => ot(t[0], e));
        }
      },
      methods: {
        async toggleElement(t, e, i) {
          try {
            return await Promise.all(k(t).map(s => {
              const n = ie(e) ? e : !this.isToggled(s);
              if (!v(s, `before${n ? "show" : "hide"}`, [this])) return Promise.reject();
              const o = (it(i) ? i : i === !1 || !this.hasAnimation ? ia : this.hasTransition ? sa : na)(s, n, this),
                r = n ? this.clsEnter : this.clsLeave;
              y(s, r), v(s, n ? "show" : "hide", [this]);
              const a = () => {
                M(s, r), v(s, n ? "shown" : "hidden", [this]);
              };
              return o ? o.then(a, () => (M(s, r), Promise.reject())) : a();
            })), !0;
          } catch {
            return !1;
          }
        },
        isToggled() {
          let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$el;
          return t = H(t), P(t, this.clsEnter) ? !0 : P(t, this.clsLeave) ? !1 : this.cls ? P(t, this.cls.split(" ")[0]) : R(t);
        },
        _toggle(t, e) {
          if (!t) return;
          e = !!e;
          let i;
          this.cls ? (i = m(this.cls, " ") || e !== P(t, this.cls), i && q(t, this.cls, m(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), z("[autofocus]", t).some(s => R(s) ? s.focus() || !0 : s.blur()), i && v(t, "toggled", [e, this]);
        }
      }
    };
  function ia(t, e, _ref20) {
    let {
      _toggle: i
    } = _ref20;
    return gt.cancel(t), E.cancel(t), i(t, e);
  }
  async function sa(t, e, _ref21) {
    let {
      animation: i,
      duration: s,
      velocity: n,
      transition: o,
      _toggle: r
    } = _ref21;
    var a;
    const [l = "reveal", h = "top"] = ((a = i[0]) == null ? void 0 : a.split("-")) || [],
      u = [["left", "right"], ["top", "bottom"]],
      f = u[m(u[0], h) ? 0 : 1],
      d = f[1] === h,
      A = ["width", "height"][u.indexOf(f)],
      N = `margin-${f[0]}`,
      F = `margin-${h}`;
    let Ot = b(t)[A];
    const Es = E.inProgress(t);
    await E.cancel(t), e && r(t, !0);
    const Yh = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", N, F].map(zo => [zo, t.style[zo]])),
      Ve = b(t),
      Ps = $(c(t, N)),
      Do = $(c(t, F)),
      Jt = Ve[A] + Do;
    !Es && !e && (Ot += Do);
    const [Bi] = Ki(t, "<div>");
    c(Bi, {
      boxSizing: "border-box",
      height: Ve.height,
      width: Ve.width,
      ...c(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", F])
    }), c(t, {
      padding: 0,
      border: 0,
      minWidth: 0,
      minHeight: 0,
      [F]: 0,
      width: Ve.width,
      height: Ve.height,
      overflow: "hidden",
      [A]: Ot
    });
    const Mo = Ot / Jt;
    s = (n * Jt + s) * (e ? 1 - Mo : Mo);
    const No = {
      [A]: e ? Jt : 0
    };
    d && (c(t, N, Jt - Ot + Ps), No[N] = e ? Ps : Jt + Ps), !d ^ l === "reveal" && (c(Bi, N, -Jt + Ot), E.start(Bi, {
      [N]: e ? 0 : -Jt
    }, s, o));
    try {
      await E.start(t, No, s, o);
    } finally {
      c(t, Yh), Pe(Bi.firstChild), e || r(t, !1);
    }
  }
  function na(t, e, i) {
    gt.cancel(t);
    const {
      animation: s,
      duration: n,
      _toggle: o
    } = i;
    return e ? (o(t, !0), gt.in(t, s[0], n, i.origin)) : gt.out(t, s[1] || s[0], n, i.origin).then(() => o(t, !1));
  }
  const I = {
    TAB: 9,
    ESC: 27,
    SPACE: 32,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };
  function pt(t) {
    return Fe(ci, t, "resize");
  }
  function Ne(t) {
    return Fe(js, t);
  }
  function Sn(t) {
    return Fe(qs, t);
  }
  function ze() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Ne({
      handler: function (e, i) {
        const {
          targets: s = this.$el,
          preload: n = 5
        } = t;
        for (const o of k(it(s) ? s(this) : s)) z('[loading="lazy"]', o).slice(0, n - 1).forEach(r => ye(r, "loading"));
        for (const o of e.filter(_ref22 => {
          let {
            isIntersecting: r
          } = _ref22;
          return r;
        }).map(_ref23 => {
          let {
            target: r
          } = _ref23;
          return r;
        })) i.unobserve(o);
      },
      ...t
    });
  }
  function In() {
    return Fe((t, e) => es(e));
  }
  function mi(t) {
    return Fe((e, i) => ({
      disconnect: x(e, "scroll", i, {
        passive: !0,
        capture: !0
      })
    }), {
      target: () => document,
      ...t
    }, "scroll");
  }
  function Cn(t) {
    return {
      observe(e, i) {
        return {
          observe: S,
          unobserve: S,
          disconnect: x(e, mt, i, {
            passive: !0
          })
        };
      },
      handler(e) {
        if (!It(e)) return;
        const i = le(e),
          s = "tagName" in e.target ? e.target : O(e.target);
        j(document, `${Pt} ${hi} scroll`, n => {
          const {
            x: o,
            y: r
          } = le(n);
          (n.type !== "scroll" && s && o && Math.abs(i.x - o) > 100 || r && Math.abs(i.y - r) > 100) && setTimeout(() => {
            v(s, "swipe"), v(s, `swipe${oa(i.x, i.y, o, r)}`);
          });
        });
      },
      ...t
    };
  }
  function Fe(t, e, i) {
    return {
      observe: t,
      handler() {
        this.$emit(i);
      },
      ...e
    };
  }
  function oa(t, e, i, s) {
    return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
  }
  var Tn = {
    mixins: [st, Vt],
    props: {
      animation: Boolean,
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      offset: Number
    },
    data: {
      targets: "> *",
      active: !1,
      animation: !0,
      collapsible: !0,
      multiple: !1,
      clsOpen: "uk-open",
      toggle: "> .uk-accordion-title",
      content: "> .uk-accordion-content",
      offset: 0
    },
    computed: {
      items(_ref24, e) {
        let {
          targets: t
        } = _ref24;
        return z(t, e);
      },
      toggles(_ref25) {
        let {
          toggle: t
        } = _ref25;
        return this.items.map(e => w(t, e));
      },
      contents(_ref26) {
        let {
          content: t
        } = _ref26;
        return this.items.map(e => {
          var i;
          return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || w(t, e);
        });
      }
    },
    watch: {
      items(t, e) {
        if (e || P(t, this.clsOpen)) return;
        const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
        i && this.toggle(i, !1);
      },
      toggles() {
        this.$emit();
      },
      contents(t) {
        for (const e of t) {
          const i = P(this.items.find(s => D(e, s)), this.clsOpen);
          vi(e, !i);
        }
        this.$emit();
      }
    },
    observe: ze(),
    events: [{
      name: "click keydown",
      delegate() {
        return `${this.targets} ${this.$props.toggle}`;
      },
      async handler(t) {
        var e;
        t.type === "keydown" && t.keyCode !== I.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = aa(t.target), await this.toggle(re(this.toggles, t.current)), this._off());
      }
    }, {
      name: "shown hidden",
      self: !0,
      delegate() {
        return this.targets;
      },
      handler() {
        this.$emit();
      }
    }],
    update() {
      const t = Ie(this.items, `.${this.clsOpen}`);
      for (const e in this.items) {
        const i = this.toggles[e],
          s = this.contents[e];
        if (!i || !s) continue;
        i.id = At(this, i, `-title-${e}`), s.id = At(this, s, `-content-${e}`);
        const n = m(t, this.items[e]);
        p(i, {
          role: G(i, "a") ? "button" : null,
          "aria-controls": s.id,
          "aria-expanded": n,
          "aria-disabled": !this.collapsible && t.length < 2 && n
        }), p(s, {
          role: "region",
          "aria-labelledby": i.id
        }), G(s, "ul") && p(T(s), "role", "presentation");
      }
    },
    methods: {
      toggle(t, e) {
        t = this.items[rt(t, this.items)];
        let i = [t];
        const s = Ie(this.items, `.${this.clsOpen}`);
        if (!this.multiple && !m(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && m(s, t))) return Promise.all(i.map(n => this.toggleElement(n, !m(s, n), (o, r) => {
          if (q(o, this.clsOpen, r), e === !1 || !this.animation) {
            vi(w(this.content, o), !r);
            return;
          }
          return ra(o, r, this);
        })));
      }
    }
  };
  function vi(t, e) {
    t && (t.hidden = e);
  }
  async function ra(t, e, _ref27) {
    let {
      content: i,
      duration: s,
      velocity: n,
      transition: o
    } = _ref27;
    var r;
    i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || w(i, t), t._wrapper || (t._wrapper = oi(i, "<div>"));
    const a = t._wrapper;
    c(a, "overflow", "hidden");
    const l = $(c(a, "height"));
    await E.cancel(a), vi(i, !1);
    const h = Bt(["marginTop", "marginBottom"], f => c(i, f)) + b(i).height,
      u = l / h;
    s = (n * h + s) * (e ? 1 - u : u), c(a, "height", l), await E.start(a, {
      height: e ? h : 0
    }, s, o), Pe(i), delete t._wrapper, e || vi(i, !0);
  }
  function aa(t) {
    const e = _t(t, !0);
    let i;
    return function s() {
      i = requestAnimationFrame(() => {
        const {
          top: n
        } = t.getBoundingClientRect();
        n < 0 && (e.scrollTop += n), s();
      });
    }(), () => requestAnimationFrame(() => cancelAnimationFrame(i));
  }
  var la = {
    mixins: [st, Vt],
    args: "animation",
    props: {
      animation: Boolean,
      close: String
    },
    data: {
      animation: !0,
      selClose: ".uk-alert-close",
      duration: 150
    },
    events: {
      name: "click",
      delegate() {
        return this.selClose;
      },
      handler(t) {
        t.preventDefault(), this.close();
      }
    },
    methods: {
      async close() {
        await this.toggleElement(this.$el, !1, ha), this.$destroy(!0);
      }
    }
  };
  function ha(t, e, _ref28) {
    let {
      duration: i,
      transition: s,
      velocity: n
    } = _ref28;
    const o = $(c(t, "height"));
    return c(t, "height", o), E.start(t, {
      height: 0,
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      borderTop: 0,
      borderBottom: 0,
      opacity: 0
    }, n * o + i, s);
  }
  var En = {
      args: "autoplay",
      props: {
        automute: Boolean,
        autoplay: Boolean
      },
      data: {
        automute: !1,
        autoplay: !0
      },
      connected() {
        this.inView = this.autoplay === "inview", this.inView && !$t(this.$el, "preload") && (this.$el.preload = "none"), G(this.$el, "iframe") && !$t(this.$el, "allow") && (this.$el.allow = "autoplay"), this.automute && Gs(this.$el);
      },
      observe: [Ne({
        args: {
          intersecting: !1
        }
      }), pt()],
      update: {
        read(_ref29) {
          let {
            visible: t
          } = _ref29;
          return Xs(this.$el) ? {
            prev: t,
            visible: R(this.$el),
            inView: this.inView && ns(this.$el)
          } : !1;
        },
        write(_ref30) {
          let {
            prev: t,
            visible: e,
            inView: i
          } = _ref30;
          !e || this.inView && !i ? Ys(this.$el) : (this.autoplay === !0 && !t || i) && Vs(this.$el);
        },
        events: ["resize"]
      }
    },
    ca = {
      mixins: [En],
      props: {
        width: Number,
        height: Number
      },
      data: {
        automute: !0
      },
      events: {
        "load loadedmetadata"() {
          this.$emit("resize");
        }
      },
      observe: pt({
        target: _ref31 => {
          let {
            $el: t
          } = _ref31;
          return [Pn(t) || O(t)];
        }
      }),
      update: {
        read() {
          const {
              ratio: t,
              cover: e
            } = Qe,
            {
              $el: i,
              width: s,
              height: n
            } = this;
          let o = {
            width: s,
            height: n
          };
          if (!s || !n) {
            const h = {
              width: i.naturalWidth || i.videoWidth || i.clientWidth,
              height: i.naturalHeight || i.videoHeight || i.clientHeight
            };
            s ? o = t(h, "width", s) : n ? o = t(h, "height", n) : o = h;
          }
          const {
              offsetHeight: r,
              offsetWidth: a
            } = Pn(i) || O(i),
            l = e(o, {
              width: a + (a % 2 ? 1 : 0),
              height: r + (r % 2 ? 1 : 0)
            });
          return !l.width || !l.height ? !1 : l;
        },
        write(_ref32) {
          let {
            height: t,
            width: e
          } = _ref32;
          c(this.$el, {
            height: t,
            width: e
          });
        },
        events: ["resize"]
      }
    };
  function Pn(t) {
    for (; t = O(t);) if (c(t, "position") !== "static") return t;
  }
  var _n = {
    props: {
      pos: String,
      offset: null,
      flip: Boolean,
      shift: Boolean,
      inset: Boolean
    },
    data: {
      pos: `bottom-${X ? "right" : "left"}`,
      offset: !1,
      flip: !0,
      shift: !0,
      inset: !1
    },
    connected() {
      this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = m(["top", "bottom"], this.dir) ? "y" : "x";
    },
    methods: {
      positionAt(t, e, i) {
        let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
        const n = [this.flip && "flip", this.shift && "shift"],
          o = {
            element: [this.inset ? this.dir : ai(this.dir), this.align],
            target: [this.dir, this.align]
          };
        if (this.axis === "y") {
          for (const l in o) o[l].reverse();
          s.reverse(), n.reverse();
        }
        const r = ua(t),
          a = b(t);
        c(t, {
          top: -a.height,
          left: -a.width
        }), en(t, e, {
          attach: o,
          offset: s,
          boundary: i,
          placement: n,
          viewportOffset: this.getViewportOffset(t)
        }), r();
      },
      getPositionOffset(t) {
        return ht(this.offset === !1 ? c(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (m(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
      },
      getShiftOffset(t) {
        return this.align === "center" ? 0 : ht(c(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (m(["left", "top"], this.align) ? 1 : -1);
      },
      getViewportOffset(t) {
        return ht(c(t, "--uk-position-viewport-offset"));
      }
    }
  };
  function ua(t) {
    const e = _t(t),
      {
        scrollTop: i
      } = e;
    return () => {
      i !== e.scrollTop && (e.scrollTop = i);
    };
  }
  var He = {
    props: {
      container: Boolean
    },
    data: {
      container: !0
    },
    computed: {
      container(_ref33) {
        let {
          container: t
        } = _ref33;
        return t === !0 && this.$container || t && w(t);
      }
    }
  };
  let ds;
  function An(t) {
    const e = x(t, "touchmove", s => {
      if (s.targetTouches.length !== 1 || C(s.target, 'input[type="range"')) return;
      let {
        scrollHeight: n,
        clientHeight: o
      } = _t(s.target);
      o >= n && s.cancelable && s.preventDefault();
    }, {
      passive: !1
    });
    if (ds) return e;
    ds = !0;
    const {
      scrollingElement: i
    } = document;
    return c(i, {
      overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
      touchAction: "none",
      paddingRight: _e(window) - i.clientWidth || ""
    }), () => {
      ds = !1, e(), c(i, {
        overflowY: "",
        touchAction: "",
        paddingRight: ""
      });
    };
  }
  let K;
  var On = {
    mixins: [He, _n, Vt],
    args: "pos",
    props: {
      mode: "list",
      toggle: Boolean,
      boundary: Boolean,
      boundaryX: Boolean,
      boundaryY: Boolean,
      target: Boolean,
      targetX: Boolean,
      targetY: Boolean,
      stretch: Boolean,
      delayShow: Number,
      delayHide: Number,
      autoUpdate: Boolean,
      clsDrop: String,
      animateOut: Boolean,
      bgScroll: Boolean
    },
    data: {
      mode: ["click", "hover"],
      toggle: "- *",
      boundary: !1,
      boundaryX: !1,
      boundaryY: !1,
      target: !1,
      targetX: !1,
      targetY: !1,
      stretch: !1,
      delayShow: 0,
      delayHide: 800,
      autoUpdate: !0,
      clsDrop: !1,
      animateOut: !1,
      bgScroll: !0,
      animation: ["uk-animation-fade"],
      cls: "uk-open",
      container: !1
    },
    computed: {
      boundary(_ref34, s) {
        let {
          boundary: t,
          boundaryX: e,
          boundaryY: i
        } = _ref34;
        return [at(e || t, s) || window, at(i || t, s) || window];
      },
      target(_ref35, s) {
        let {
          target: t,
          targetX: e,
          targetY: i
        } = _ref35;
        return e || (e = t || this.targetEl), i || (i = t || this.targetEl), [e === !0 ? window : at(e, s), i === !0 ? window : at(i, s)];
      }
    },
    created() {
      this.tracker = new ts();
    },
    beforeConnect() {
      this.clsDrop = this.$props.clsDrop || `uk-${this.$options.name}`;
    },
    connected() {
      y(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = pa(this)), this._style = zi(this.$el.style, ["width", "height"]);
    },
    disconnected() {
      this.isActive() && (this.hide(!1), K = null), c(this.$el, this._style);
    },
    observe: ze({
      target: _ref36 => {
        let {
          toggle: t,
          $el: e
        } = _ref36;
        return at(t, e);
      },
      targets: _ref37 => {
        let {
          $el: t
        } = _ref37;
        return t;
      }
    }),
    events: [{
      name: "click",
      delegate() {
        return ".uk-drop-close";
      },
      handler(t) {
        t.preventDefault(), this.hide(!1);
      }
    }, {
      name: "click",
      delegate() {
        return 'a[href*="#"]';
      },
      handler(_ref38) {
        let {
          defaultPrevented: t,
          current: e
        } = _ref38;
        const {
          hash: i
        } = e;
        !t && i && ae(e) && !D(i, this.$el) && this.hide(!1);
      }
    }, {
      name: "beforescroll",
      handler() {
        this.hide(!1);
      }
    }, {
      name: "toggle",
      self: !0,
      handler(t, e) {
        t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1);
      }
    }, {
      name: "toggleshow",
      self: !0,
      handler(t, e) {
        t.preventDefault(), this.show(e == null ? void 0 : e.$el);
      }
    }, {
      name: "togglehide",
      self: !0,
      handler(t) {
        t.preventDefault(), C(this.$el, ":focus,:hover") || this.hide();
      }
    }, {
      name: `${Rt} focusin`,
      filter() {
        return m(this.mode, "hover");
      },
      handler(t) {
        It(t) || this.clearTimers();
      }
    }, {
      name: `${fe} focusout`,
      filter() {
        return m(this.mode, "hover");
      },
      handler(t) {
        !It(t) && t.relatedTarget && this.hide();
      }
    }, {
      name: "toggled",
      self: !0,
      handler(t, e) {
        p(this.targetEl, "aria-expanded", e ? !0 : null), e && (this.clearTimers(), this.position());
      }
    }, {
      name: "show",
      self: !0,
      handler() {
        K = this, this.tracker.init();
        const t = [ga(this), va(this), wa(this), this.autoUpdate && ma(this), !this.bgScroll && An(this.$el)];
        j(this.$el, "hide", () => t.forEach(e => e && e()), {
          self: !0
        });
      }
    }, {
      name: "beforehide",
      self: !0,
      handler() {
        this.clearTimers();
      }
    }, {
      name: "hide",
      handler(_ref39) {
        let {
          target: t
        } = _ref39;
        if (this.$el !== t) {
          K = K === null && D(t, this.$el) && this.isToggled() ? this : K;
          return;
        }
        K = this.isActive() ? null : K, this.tracker.cancel();
      }
    }],
    update: {
      write() {
        this.isToggled() && !P(this.$el, this.clsEnter) && this.position();
      }
    },
    methods: {
      show() {
        let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.targetEl;
        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
          if (K) {
            if (e && K.isDelaying) {
              this.showTimer = setTimeout(() => C(t, ":hover") && this.show(), 10);
              return;
            }
            let i;
            for (; K && i !== K && !D(this.$el, K.$el);) i = K, K.hide(!1, !1);
          }
          this.container && O(this.$el) !== this.container && L(this.container, this.$el), this.showTimer = setTimeout(() => this.toggleElement(this.$el, !0), e && this.delayShow || 0);
        }
      },
      hide() {
        let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
        this.clearTimers(), this.isDelaying = fa(this.$el).some(s => this.tracker.movesTo(s)), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
      },
      clearTimers() {
        clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1;
      },
      isActive() {
        return K === this;
      },
      position() {
        M(this.$el, "uk-drop-stack"), c(this.$el, this._style), this.$el.hidden = !0;
        const t = this.target.map(n => da(this.$el, n)),
          e = this.getViewportOffset(this.$el),
          i = [[0, ["x", "width", "left", "right"]], [1, ["y", "height", "top", "bottom"]]];
        for (const [n, [o, r]] of i) this.axis !== o && m([o, !0], this.stretch) && c(this.$el, {
          [r]: Math.min(_(this.boundary[n])[r], t[n][r] - 2 * e),
          [`overflow-${o}`]: "auto"
        });
        const s = t[0].width - 2 * e;
        this.$el.hidden = !1, c(this.$el, "maxWidth", ""), this.$el.offsetWidth > s && y(this.$el, "uk-drop-stack"), c(this.$el, "maxWidth", s), this.positionAt(this.$el, this.target, this.boundary);
        for (const [n, [o, r, a, l]] of i) if (this.axis === o && m([o, !0], this.stretch)) {
          const h = Math.abs(this.getPositionOffset(this.$el)),
            u = _(this.target[n]),
            f = _(this.$el);
          c(this.$el, {
            [r]: (u[a] > f[a] ? u[this.inset ? l : a] - Math.max(_(this.boundary[n])[a], t[n][a] + e) : Math.min(_(this.boundary[n])[l], t[n][l] - e) - u[this.inset ? a : l]) - h,
            [`overflow-${o}`]: "auto"
          }), this.positionAt(this.$el, this.target, this.boundary);
        }
      }
    }
  };
  function fa(t) {
    const e = [];
    return Ct(t, i => c(i, "position") !== "static" && e.push(i)), e;
  }
  function da(t, e) {
    return ct(jt(e).find(i => D(t, i)));
  }
  function pa(t) {
    const {
      $el: e
    } = t.$create("toggle", at(t.toggle, t.$el), {
      target: t.$el,
      mode: t.mode
    });
    return p(e, "aria-haspopup", !0), e;
  }
  function ga(t) {
    const e = () => t.$emit(),
      i = [es(e), ci(jt(t.$el).concat(t.target), e)];
    return () => i.map(s => s.disconnect());
  }
  function ma(t) {
    return x([document, ...jt(t.$el)], "scroll", () => t.$emit(), {
      passive: !0
    });
  }
  function va(t) {
    return x(document, "keydown", e => {
      e.keyCode === I.ESC && t.hide(!1);
    });
  }
  function wa(t) {
    return x(document, mt, _ref40 => {
      let {
        target: e
      } = _ref40;
      D(e, t.$el) || j(document, `${Pt} ${hi} scroll`, _ref41 => {
        let {
          defaultPrevented: i,
          type: s,
          target: n
        } = _ref41;
        !i && s === Pt && e === n && !(t.targetEl && D(e, t.targetEl)) && t.hide(!1);
      }, !0);
    });
  }
  var Bn = {
    mixins: [st, He],
    props: {
      align: String,
      clsDrop: String,
      boundary: Boolean,
      dropbar: Boolean,
      dropbarAnchor: Boolean,
      duration: Number,
      mode: Boolean,
      offset: Boolean,
      stretch: Boolean,
      delayShow: Boolean,
      delayHide: Boolean,
      target: Boolean,
      targetX: Boolean,
      targetY: Boolean,
      animation: Boolean,
      animateOut: Boolean
    },
    data: {
      align: X ? "right" : "left",
      clsDrop: "uk-dropdown",
      clsDropbar: "uk-dropnav-dropbar",
      boundary: !0,
      dropbar: !1,
      dropbarAnchor: !1,
      duration: 200,
      container: !1,
      selNavItem: "> li > a, > ul > li > a"
    },
    computed: {
      dropbarAnchor(_ref42, e) {
        let {
          dropbarAnchor: t
        } = _ref42;
        return at(t, e) || e;
      },
      dropbar(_ref43) {
        let {
          dropbar: t
        } = _ref43;
        return t ? (t = this._dropbar || at(t, this.$el) || w(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = w("<div></div>"))) : null;
      },
      dropContainer(t, e) {
        return this.container || e;
      },
      dropdowns(_ref44, e) {
        let {
          clsDrop: t
        } = _ref44;
        var i;
        const s = z(`.${t}`, e);
        if (this.dropContainer !== e) for (const n of z(`.${t}`, this.dropContainer)) {
          const o = (i = this.getDropdown(n)) == null ? void 0 : i.targetEl;
          !m(s, n) && o && D(o, this.$el) && s.push(n);
        }
        return s;
      },
      items(_ref45, e) {
        let {
          selNavItem: t
        } = _ref45;
        return z(t, e);
      }
    },
    watch: {
      dropbar(t) {
        y(t, "uk-dropbar", "uk-dropbar-top", this.clsDropbar, `uk-${this.$options.name}-dropbar`);
      },
      dropdowns(t) {
        this.$create("drop", t.filter(e => !this.getDropdown(e)), {
          ...this.$props,
          flip: !1,
          shift: !0,
          pos: `bottom-${this.align}`,
          boundary: this.boundary === !0 ? this.$el : this.boundary
        });
      }
    },
    disconnected() {
      lt(this._dropbar), delete this._dropbar;
    },
    events: [{
      name: "mouseover focusin",
      delegate() {
        return this.selNavItem;
      },
      handler(_ref46) {
        let {
          current: t
        } = _ref46;
        const e = this.getActive();
        e && m(e.mode, "hover") && e.targetEl && !D(e.targetEl, t) && !e.isDelaying && e.hide(!1);
      }
    }, {
      name: "keydown",
      self: !0,
      delegate() {
        return this.selNavItem;
      },
      handler(t) {
        var e;
        const {
            current: i,
            keyCode: s
          } = t,
          n = this.getActive();
        s === I.DOWN && (n == null ? void 0 : n.targetEl) === i && (t.preventDefault(), (e = w(Se, n.$el)) == null || e.focus()), Dn(t, this.items, n);
      }
    }, {
      name: "keydown",
      el() {
        return this.dropContainer;
      },
      delegate() {
        return `.${this.clsDrop}`;
      },
      handler(t) {
        var e;
        const {
          current: i,
          keyCode: s
        } = t;
        if (!m(this.dropdowns, i)) return;
        const n = this.getActive();
        let o = -1;
        if (s === I.HOME ? o = 0 : s === I.END ? o = "last" : s === I.UP ? o = "previous" : s === I.DOWN ? o = "next" : s === I.ESC && ((e = n.targetEl) == null || e.focus()), ~o) {
          t.preventDefault();
          const r = z(Se, i);
          r[rt(o, r, xt(r, a => C(a, ":focus")))].focus();
        }
        Dn(t, this.items, n);
      }
    }, {
      name: "mouseleave",
      el() {
        return this.dropbar;
      },
      filter() {
        return this.dropbar;
      },
      handler() {
        const t = this.getActive();
        t && m(t.mode, "hover") && !this.dropdowns.some(e => C(e, ":hover")) && t.hide();
      }
    }, {
      name: "beforeshow",
      el() {
        return this.dropContainer;
      },
      filter() {
        return this.dropbar;
      },
      handler(_ref47) {
        let {
          target: t
        } = _ref47;
        this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && si(this.dropbarAnchor, this.dropbar), y(t, `${this.clsDrop}-dropbar`));
      }
    }, {
      name: "show",
      el() {
        return this.dropContainer;
      },
      filter() {
        return this.dropbar;
      },
      handler(_ref48) {
        let {
          target: t
        } = _ref48;
        if (!this.isDropbarDrop(t)) return;
        const e = this.getDropdown(t),
          i = () => {
            const s = oe(t, `.${this.clsDrop}`).concat(t).map(a => _(a)),
              n = Math.min(...s.map(_ref49 => {
                let {
                  top: a
                } = _ref49;
                return a;
              })),
              o = Math.max(...s.map(_ref50 => {
                let {
                  bottom: a
                } = _ref50;
                return a;
              })),
              r = _(this.dropbar);
            c(this.dropbar, "top", this.dropbar.offsetTop - (r.top - n)), this.transitionTo(o - n + $(c(t, "marginBottom")), t);
          };
        this._observer = ci([e.$el, ...e.target], i), i();
      }
    }, {
      name: "beforehide",
      el() {
        return this.dropContainer;
      },
      filter() {
        return this.dropbar;
      },
      handler(t) {
        const e = this.getActive();
        C(this.dropbar, ":hover") && e.$el === t.target && !this.items.some(i => e.targetEl !== i && C(i, ":focus")) && t.preventDefault();
      }
    }, {
      name: "hide",
      el() {
        return this.dropContainer;
      },
      filter() {
        return this.dropbar;
      },
      handler(_ref51) {
        let {
          target: t
        } = _ref51;
        var e;
        if (!this.isDropbarDrop(t)) return;
        (e = this._observer) == null || e.disconnect();
        const i = this.getActive();
        (!i || i.$el === t) && this.transitionTo(0);
      }
    }],
    methods: {
      getActive() {
        var t;
        return m(this.dropdowns, (t = K) == null ? void 0 : t.$el) && K;
      },
      async transitionTo(t, e) {
        const {
            dropbar: i
          } = this,
          s = et(i);
        e = s < t && e, await E.cancel([e, i]), c(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), et(i, s), await Promise.all([E.start(i, {
          height: t
        }, this.duration), E.start(e, {
          clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
        }, this.duration).finally(() => c(e, {
          clipPath: ""
        }))]).catch(S);
      },
      getDropdown(t) {
        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
      },
      isDropbarDrop(t) {
        return this.getDropdown(t) && P(t, this.clsDrop);
      }
    }
  };
  function Dn(t, e, i) {
    var s, n, o;
    const {
      current: r,
      keyCode: a
    } = t;
    let l = -1;
    a === I.HOME ? l = 0 : a === I.END ? l = "last" : a === I.LEFT ? l = "previous" : a === I.RIGHT ? l = "next" : a === I.TAB && ((s = i.targetEl) == null || s.focus(), (n = i.hide) == null || n.call(i, !1)), ~l && (t.preventDefault(), (o = i.hide) == null || o.call(i, !1), e[rt(l, e, e.indexOf(i.targetEl || r))].focus());
  }
  var ba = {
      mixins: [st],
      args: "target",
      props: {
        target: Boolean
      },
      data: {
        target: !1
      },
      computed: {
        input(t, e) {
          return w(ke, e);
        },
        state() {
          return this.input.nextElementSibling;
        },
        target(_ref52, e) {
          let {
            target: t
          } = _ref52;
          return t && (t === !0 && O(this.input) === e && this.input.nextElementSibling || w(t, e));
        }
      },
      update() {
        var t;
        const {
          target: e,
          input: i
        } = this;
        if (!e) return;
        let s;
        const n = Wi(e) ? "value" : "textContent",
          o = e[n],
          r = (t = i.files) != null && t[0] ? i.files[0].name : C(i, "select") && (s = z("option", i).filter(a => a.selected)[0]) ? s.textContent : i.value;
        o !== r && (e[n] = r);
      },
      events: [{
        name: "change",
        handler() {
          this.$emit();
        }
      }, {
        name: "reset",
        el() {
          return U(this.$el, "form");
        },
        handler() {
          this.$emit();
        }
      }]
    },
    Mn = {
      props: {
        margin: String,
        firstColumn: Boolean
      },
      data: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column"
      },
      observe: [Sn({
        options: {
          childList: !0,
          attributes: !0,
          attributeFilter: ["style"]
        }
      }), pt({
        target: _ref53 => {
          let {
            $el: t
          } = _ref53;
          return [t, ...T(t)];
        }
      })],
      update: {
        read() {
          const t = ps(this.$el.children);
          return {
            rows: t,
            columns: $a(t)
          };
        },
        write(_ref54) {
          let {
            columns: t,
            rows: e
          } = _ref54;
          for (const i of e) for (const s of i) q(s, this.margin, e[0] !== i), q(s, this.firstColumn, t[0].includes(s));
        },
        events: ["resize"]
      }
    };
  function ps(t) {
    return Nn(t, "top", "bottom");
  }
  function $a(t) {
    const e = [];
    for (const i of t) {
      const s = Nn(i, "left", "right");
      for (let n = 0; n < s.length; n++) e[n] = e[n] ? e[n].concat(s[n]) : s[n];
    }
    return X ? e.reverse() : e;
  }
  function Nn(t, e, i) {
    const s = [[]];
    for (const n of t) {
      if (!R(n)) continue;
      let o = wi(n);
      for (let r = s.length - 1; r >= 0; r--) {
        const a = s[r];
        if (!a[0]) {
          a.push(n);
          break;
        }
        let l;
        if (a[0].offsetParent === n.offsetParent ? l = wi(a[0]) : (o = wi(n, !0), l = wi(a[0], !0)), o[e] >= l[i] - 1 && o[e] !== l[e]) {
          s.push([n]);
          break;
        }
        if (o[i] - 1 > l[e] || o[e] === l[e]) {
          a.push(n);
          break;
        }
        if (r === 0) {
          s.unshift([n]);
          break;
        }
      }
    }
    return s;
  }
  function wi(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    let {
      offsetTop: i,
      offsetLeft: s,
      offsetHeight: n,
      offsetWidth: o
    } = t;
    return e && ([i, s] = Ht(t)), {
      top: i,
      left: s,
      bottom: i + n,
      right: s + o
    };
  }
  var xa = {
    extends: Mn,
    mixins: [st],
    name: "grid",
    props: {
      masonry: Boolean,
      parallax: Number
    },
    data: {
      margin: "uk-grid-margin",
      clsStack: "uk-grid-stack",
      masonry: !1,
      parallax: 0
    },
    connected() {
      this.masonry && y(this.$el, "uk-flex-top uk-flex-wrap-top");
    },
    observe: mi({
      filter: _ref55 => {
        let {
          parallax: t
        } = _ref55;
        return t;
      }
    }),
    update: [{
      write(_ref56) {
        let {
          columns: t
        } = _ref56;
        q(this.$el, this.clsStack, t.length < 2);
      },
      events: ["resize"]
    }, {
      read(t) {
        let {
          columns: e,
          rows: i
        } = t;
        if (!e.length || !this.masonry && !this.parallax || zn(this.$el)) return t.translates = !1, !1;
        let s = !1;
        const n = T(this.$el),
          o = e.map(h => Bt(h, "offsetHeight")),
          r = ka(n, this.margin) * (i.length - 1),
          a = Math.max(...o) + r;
        this.masonry && (e = e.map(h => Ke(h, "offsetTop")), s = ya(i, e));
        let l = Math.abs(this.parallax);
        return l && (l = o.reduce((h, u, f) => Math.max(h, u + r + (f % 2 ? l : l / 8) - a), 0)), {
          padding: l,
          columns: e,
          translates: s,
          height: s ? a : ""
        };
      },
      write(_ref57) {
        let {
          height: t,
          padding: e
        } = _ref57;
        c(this.$el, "paddingBottom", e || ""), t !== !1 && c(this.$el, "height", t);
      },
      events: ["resize"]
    }, {
      read() {
        return this.parallax && zn(this.$el) ? !1 : {
          scrolled: this.parallax ? os(this.$el) * Math.abs(this.parallax) : !1
        };
      },
      write(_ref58) {
        let {
          columns: t,
          scrolled: e,
          translates: i
        } = _ref58;
        e === !1 && !i || t.forEach((s, n) => s.forEach((o, r) => c(o, "transform", !e && !i ? "" : `translateY(${(i && -i[n][r]) + (e ? n % 2 ? e : e / 8 : 0)}px)`)));
      },
      events: ["scroll", "resize"]
    }]
  };
  function zn(t) {
    return T(t).some(e => c(e, "position") === "absolute");
  }
  function ya(t, e) {
    const i = t.map(s => Math.max(...s.map(n => n.offsetHeight)));
    return e.map(s => {
      let n = 0;
      return s.map((o, r) => n += r ? i[r - 1] - s[r - 1].offsetHeight : 0);
    });
  }
  function ka(t, e) {
    const [i] = t.filter(s => P(s, e));
    return $(i ? c(i, "marginTop") : c(t[0], "paddingLeft"));
  }
  var Sa = {
    args: "target",
    props: {
      target: String,
      row: Boolean
    },
    data: {
      target: "> *",
      row: !0
    },
    computed: {
      elements(_ref59, e) {
        let {
          target: t
        } = _ref59;
        return z(t, e);
      }
    },
    observe: pt({
      target: _ref60 => {
        let {
          $el: t,
          elements: e
        } = _ref60;
        return [t, ...e];
      }
    }),
    update: {
      read() {
        return {
          rows: (this.row ? ps(this.elements) : [this.elements]).map(Ia)
        };
      },
      write(_ref61) {
        let {
          rows: t
        } = _ref61;
        for (const {
          heights: e,
          elements: i
        } of t) i.forEach((s, n) => c(s, "minHeight", e[n]));
      },
      events: ["resize"]
    }
  };
  function Ia(t) {
    if (t.length < 2) return {
      heights: [""],
      elements: t
    };
    let e = t.map(Ca);
    const i = Math.max(...e);
    return {
      heights: t.map((s, n) => e[n].toFixed(2) === i.toFixed(2) ? "" : i),
      elements: t
    };
  }
  function Ca(t) {
    const e = zi(t.style, ["display", "minHeight"]);
    R(t) || c(t, "display", "block", "important"), c(t, "minHeight", "");
    const i = b(t).height - he(t, "height", "content-box");
    return c(t, e), i;
  }
  var Ta = {
      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean,
        minHeight: Number
      },
      data: {
        expand: !1,
        offsetTop: !1,
        offsetBottom: !1,
        minHeight: 0
      },
      observe: pt({
        target: _ref62 => {
          let {
            $el: t
          } = _ref62;
          return [t, ...de(t)];
        }
      }),
      update: {
        read() {
          if (!R(this.$el)) return !1;
          let t = "";
          const e = he(this.$el, "height", "content-box"),
            {
              body: i,
              scrollingElement: s
            } = document,
            n = _t(this.$el),
            {
              height: o
            } = ct(n === i ? s : n);
          if (this.expand) t = `${o - (b(n).height - b(this.$el).height) - e}px`;else {
            const r = s === n || i === n;
            if (t = `calc(${r ? "100vh" : `${o}px`}`, this.offsetTop) if (r) {
              const a = Ht(this.$el)[0] - Ht(n)[0];
              t += a > 0 && a < o / 2 ? ` - ${a}px` : "";
            } else t += ` - ${c(n, "paddingTop")}`;
            this.offsetBottom === !0 ? t += ` - ${b(this.$el.nextElementSibling).height}px` : bt(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && Zt(this.offsetBottom, "px") ? t += ` - ${$(this.offsetBottom)}px` : B(this.offsetBottom) && (t += ` - ${b(at(this.offsetBottom, this.$el)).height}px`), t += `${e ? ` - ${e}px` : ""})`;
          }
          return {
            minHeight: t
          };
        },
        write(_ref63) {
          let {
            minHeight: t
          } = _ref63;
          c(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"]
      }
    },
    Fn = {
      args: "src",
      props: {
        width: Number,
        height: Number,
        ratio: Number
      },
      data: {
        ratio: 1
      },
      connected() {
        this.svg = this.getSvg().then(t => {
          if (!this._connected) return;
          const e = Ea(t, this.$el);
          return this.svgEl && e !== this.svgEl && lt(this.svgEl), Pa.call(this, e, t), this.svgEl = e;
        }, S);
      },
      disconnected() {
        this.svg.then(t => {
          this._connected || (Li(this.$el) && (this.$el.hidden = !1), lt(t), this.svgEl = null);
        }), this.svg = null;
      },
      methods: {
        async getSvg() {}
      }
    };
  function Ea(t, e) {
    if (Li(e) || G(e, "canvas")) {
      e.hidden = !0;
      const s = e.nextElementSibling;
      return Hn(t, s) ? s : si(e, t);
    }
    const i = e.lastElementChild;
    return Hn(t, i) ? i : L(e, t);
  }
  function Hn(t, e) {
    return G(t, "svg") && G(e, "svg") && t.innerHTML === e.innerHTML;
  }
  function Pa(t, e) {
    const i = ["width", "height"];
    let s = i.map(o => this[o]);
    s.some(o => o) || (s = i.map(o => p(e, o)));
    const n = p(e, "viewBox");
    n && !s.some(o => o) && (s = n.split(" ").slice(2)), s.forEach((o, r) => p(t, i[r], $(o) * this.ratio || null));
  }
  var bi = {
      props: {
        i18n: Object
      },
      data: {
        i18n: null
      },
      methods: {
        t(t) {
          for (var _len11 = arguments.length, e = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
            e[_key11 - 1] = arguments[_key11];
          }
          var i, s, n;
          let o = 0;
          return ((n = ((i = this.i18n) == null ? void 0 : i[t]) || ((s = this.$options.i18n) == null ? void 0 : s[t])) == null ? void 0 : n.replace(/%s/g, () => e[o++] || "")) || "";
        }
      }
    },
    _a = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
    Aa = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
    Oa = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
    Ba = '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
    Da = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
    Ma = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',
    Na = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
    za = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-animate svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>',
    Fa = '<svg width="40" height="40" viewBox="0 0 40 40"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
    Ha = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
    La = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
    Wa = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
    Ra = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
    ja = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
    qa = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>',
    Ua = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>',
    Va = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>',
    Ya = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>',
    Ga = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
    Xa = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>';
  const $i = {
      spinner: Ga,
      totop: Xa,
      marker: Ba,
      "close-icon": _a,
      "close-large": Aa,
      "drop-parent-icon": Oa,
      "nav-parent-icon": Da,
      "nav-parent-icon-large": Ma,
      "navbar-parent-icon": Na,
      "navbar-toggle-icon": za,
      "overlay-icon": Fa,
      "pagination-next": Ha,
      "pagination-previous": La,
      "search-icon": Wa,
      "search-large": Ra,
      "search-navbar": ja,
      "slidenav-next": qa,
      "slidenav-next-large": Ua,
      "slidenav-previous": Va,
      "slidenav-previous-large": Ya
    },
    gs = {
      install: ol,
      mixins: [Fn],
      args: "icon",
      props: {
        icon: String
      },
      isIcon: !0,
      beforeConnect() {
        y(this.$el, "uk-icon");
      },
      methods: {
        async getSvg() {
          const t = rl(this.icon);
          if (!t) throw "Icon not found.";
          return t;
        }
      }
    },
    Yt = {
      args: !1,
      extends: gs,
      data: t => ({
        icon: Kt(t.constructor.options.name)
      }),
      beforeConnect() {
        y(this.$el, this.$options.id);
      }
    },
    Ja = {
      extends: Yt,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = U(this.$el, ".uk-nav-primary") ? `${t}-large` : t;
      }
    },
    Ka = {
      extends: Yt,
      mixins: [bi],
      i18n: {
        toggle: "Open Search",
        submit: "Submit Search"
      },
      beforeConnect() {
        if (this.icon = P(this.$el, "uk-search-icon") && oe(this.$el, ".uk-search-large").length ? "search-large" : oe(this.$el, ".uk-search-navbar").length ? "search-navbar" : this.$props.icon, !$t(this.$el, "aria-label")) if (P(this.$el, "uk-search-toggle") || P(this.$el, "uk-navbar-toggle")) {
          const t = this.t("toggle");
          p(this.$el, "aria-label", t);
        } else {
          const t = U(this.$el, "a,button");
          if (t) {
            const e = this.t("submit");
            p(t, "aria-label", e);
          }
        }
      }
    },
    Za = {
      extends: Yt,
      beforeConnect() {
        p(this.$el, "role", "status");
      },
      methods: {
        async getSvg() {
          const t = await gs.methods.getSvg.call(this);
          return this.ratio !== 1 && c(w("circle", t), "strokeWidth", 1 / this.ratio), t;
        }
      }
    },
    Gt = {
      extends: Yt,
      mixins: [bi],
      beforeConnect() {
        const t = U(this.$el, "a,button");
        p(t, "role", this.role !== null && G(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !$t(t, "aria-label") && p(t, "aria-label", e);
      }
    },
    Ln = {
      extends: Gt,
      beforeConnect() {
        y(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = P(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      }
    },
    Qa = {
      extends: Gt,
      i18n: {
        label: "Open menu"
      }
    },
    tl = {
      extends: Gt,
      i18n: {
        label: "Close"
      },
      beforeConnect() {
        this.icon = `close-${P(this.$el, "uk-close-large") ? "large" : "icon"}`;
      }
    },
    el = {
      extends: Gt,
      i18n: {
        label: "Open"
      }
    },
    il = {
      extends: Gt,
      i18n: {
        label: "Back to top"
      }
    },
    sl = {
      extends: Gt,
      i18n: {
        label: "Next page"
      },
      data: {
        role: null
      }
    },
    nl = {
      extends: Gt,
      i18n: {
        label: "Previous page"
      },
      data: {
        role: null
      }
    },
    xi = {};
  function ol(t) {
    t.icon.add = (e, i) => {
      const s = B(e) ? {
        [e]: i
      } : e;
      St(s, (n, o) => {
        $i[o] = n, delete xi[o];
      }), t._initialized && Ct(document.body, n => St(t.getComponents(n), o => {
        o.$options.isIcon && o.icon in s && o.$reset();
      }));
    };
  }
  function rl(t) {
    return $i[t] ? (xi[t] || (xi[t] = w(($i[al(t)] || $i[t]).trim())), xi[t].cloneNode(!0)) : null;
  }
  function al(t) {
    return X ? Ni(Ni(t, "left", "right"), "previous", "next") : t;
  }
  const ll = Lt && "loading" in HTMLImageElement.prototype;
  var hl = {
    args: "dataSrc",
    props: {
      dataSrc: String,
      sources: String,
      margin: String,
      target: String,
      loading: String
    },
    data: {
      dataSrc: "",
      sources: !1,
      margin: "50%",
      target: !1,
      loading: "lazy"
    },
    connected() {
      if (this.loading !== "lazy") {
        this.load();
        return;
      }
      ll && yi(this.$el) && (this.$el.loading = "lazy", ms(this.$el)), pl(this.$el);
    },
    disconnected() {
      this.img && (this.img.onload = ""), delete this.img;
    },
    observe: Ne({
      target: _ref64 => {
        let {
          $el: t,
          $props: e
        } = _ref64;
        return [t, ...Ce(e.target, t)];
      },
      handler(t, e) {
        this.load(), e.disconnect();
      },
      options: _ref65 => {
        let {
          margin: t
        } = _ref65;
        return {
          rootMargin: t
        };
      },
      filter: _ref66 => {
        let {
          loading: t
        } = _ref66;
        return t === "lazy";
      }
    }),
    methods: {
      load() {
        if (this.img) return this.img;
        const t = yi(this.$el) ? this.$el : ul(this.$el, this.dataSrc, this.sources);
        return ye(t, "loading"), ms(this.$el, t.currentSrc), this.img = t;
      }
    }
  };
  function ms(t, e) {
    if (yi(t)) {
      const i = O(t);
      (G(i, "picture") ? T(i) : [t]).forEach(n => Wn(n, n));
    } else e && !m(t.style.backgroundImage, e) && (c(t, "backgroundImage", `url(${qi(e)})`), v(t, Mt("load", !1)));
  }
  const cl = ["data-src", "data-srcset", "sizes"];
  function Wn(t, e) {
    for (const i of cl) {
      const s = tt(t, i);
      s && p(e, i.replace(/^(data-)+/, ""), s);
    }
  }
  function ul(t, e, i) {
    const s = new Image();
    return fl(s, i), Wn(t, s), s.onload = () => {
      ms(t, s.currentSrc);
    }, p(s, "src", e), s;
  }
  function fl(t, e) {
    if (e = dl(e), e.length) {
      const i = zt("<picture>");
      for (const s of e) {
        const n = zt("<source>");
        p(n, s), L(i, n);
      }
      L(i, t);
    }
  }
  function dl(t) {
    if (!t) return [];
    if (ot(t, "[")) try {
      t = JSON.parse(t);
    } catch {
      t = [];
    } else t = De(t);
    return Q(t) || (t = [t]), t.filter(e => !xe(e));
  }
  function pl(t) {
    yi(t) && !$t(t, "src") && p(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
  }
  function yi(t) {
    return G(t, "img");
  }
  var ki = {
    props: {
      media: Boolean
    },
    data: {
      media: !1
    },
    connected() {
      const t = gl(this.media, this.$el);
      if (this.matchMedia = !0, t) {
        this.mediaObj = window.matchMedia(t);
        const e = () => {
          this.matchMedia = this.mediaObj.matches, v(this.$el, Mt("mediachange", !1, !0, [this.mediaObj]));
        };
        this.offMediaObj = x(this.mediaObj, "change", () => {
          e(), this.$emit("resize");
        }), e();
      }
    },
    disconnected() {
      var t;
      (t = this.offMediaObj) == null || t.call(this);
    }
  };
  function gl(t, e) {
    if (B(t)) {
      if (ot(t, "@")) t = $(c(e, `--uk-breakpoint-${t.substr(1)}`));else if (isNaN(t)) return t;
    }
    return t && bt(t) ? `(min-width: ${t}px)` : "";
  }
  var ml = {
    mixins: [st, ki],
    props: {
      fill: String
    },
    data: {
      fill: "",
      clsWrapper: "uk-leader-fill",
      clsHide: "uk-leader-hide",
      attrFill: "data-fill"
    },
    computed: {
      fill(_ref67) {
        let {
          fill: t
        } = _ref67;
        return t || c(this.$el, "--uk-leader-fill-content");
      }
    },
    connected() {
      [this.wrapper] = Ki(this.$el, `<span class="${this.clsWrapper}">`);
    },
    disconnected() {
      Pe(this.wrapper.childNodes);
    },
    observe: pt(),
    update: {
      read() {
        return {
          width: Math.trunc(this.$el.offsetWidth / 2),
          fill: this.fill,
          hide: !this.matchMedia
        };
      },
      write(_ref68) {
        let {
          width: t,
          fill: e,
          hide: i
        } = _ref68;
        q(this.wrapper, this.clsHide, i), p(this.wrapper, this.attrFill, new Array(t).join(e));
      },
      events: ["resize"]
    }
  };
  const nt = [];
  var vs = {
    mixins: [st, He, Vt],
    props: {
      selPanel: String,
      selClose: String,
      escClose: Boolean,
      bgClose: Boolean,
      stack: Boolean,
      role: String
    },
    data: {
      cls: "uk-open",
      escClose: !0,
      bgClose: !0,
      overlay: !0,
      stack: !1,
      role: "dialog"
    },
    computed: {
      panel(_ref69, e) {
        let {
          selPanel: t
        } = _ref69;
        return w(t, e);
      },
      transitionElement() {
        return this.panel;
      },
      bgClose(_ref70) {
        let {
          bgClose: t
        } = _ref70;
        return t && this.panel;
      }
    },
    connected() {
      p(this.panel || this.$el, "role", this.role), this.overlay && p(this.panel || this.$el, "aria-modal", !0);
    },
    beforeDisconnect() {
      m(nt, this) && this.toggleElement(this.$el, !1, !1);
    },
    events: [{
      name: "click",
      delegate() {
        return `${this.selClose},a[href*="#"]`;
      },
      handler(t) {
        const {
            current: e,
            defaultPrevented: i
          } = t,
          {
            hash: s
          } = e;
        !i && s && ae(e) && !D(s, this.$el) && w(s, document.body) ? this.hide() : C(e, this.selClose) && (t.preventDefault(), this.hide());
      }
    }, {
      name: "toggle",
      self: !0,
      handler(t) {
        t.defaultPrevented || (t.preventDefault(), this.isToggled() === m(nt, this) && this.toggle());
      }
    }, {
      name: "beforeshow",
      self: !0,
      handler(t) {
        if (m(nt, this)) return !1;
        !this.stack && nt.length ? (Promise.all(nt.map(e => e.hide())).then(this.show), t.preventDefault()) : nt.push(this);
      }
    }, {
      name: "show",
      self: !0,
      handler() {
        this.stack && c(this.$el, "zIndex", $(c(this.$el, "zIndex")) + nt.length);
        const t = [this.overlay && wl(this), this.overlay && An(this.$el), this.bgClose && bl(this), this.escClose && $l(this)];
        j(this.$el, "hidden", () => t.forEach(e => e && e()), {
          self: !0
        }), y(document.documentElement, this.clsPage);
      }
    }, {
      name: "shown",
      self: !0,
      handler() {
        ti(this.$el) || p(this.$el, "tabindex", "-1"), C(this.$el, ":focus-within") || this.$el.focus();
      }
    }, {
      name: "hidden",
      self: !0,
      handler() {
        m(nt, this) && nt.splice(nt.indexOf(this), 1), c(this.$el, "zIndex", ""), nt.some(t => t.clsPage === this.clsPage) || M(document.documentElement, this.clsPage);
      }
    }],
    methods: {
      toggle() {
        return this.isToggled() ? this.hide() : this.show();
      },
      show() {
        return this.container && O(this.$el) !== this.container ? (L(this.container, this.$el), new Promise(t => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, !0, Rn);
      },
      hide() {
        return this.toggleElement(this.$el, !1, Rn);
      }
    }
  };
  function Rn(t, e, _ref71) {
    let {
      transitionElement: i,
      _toggle: s
    } = _ref71;
    return new Promise((n, o) => j(t, "show hide", () => {
      var r;
      (r = t._reject) == null || r.call(t), t._reject = o, s(t, e);
      const a = j(i, "transitionstart", () => {
          j(i, "transitionend transitioncancel", n, {
            self: !0
          }), clearTimeout(l);
        }, {
          self: !0
        }),
        l = setTimeout(() => {
          a(), n();
        }, vl(c(i, "transitionDuration")));
    })).then(() => delete t._reject);
  }
  function vl(t) {
    return t ? Zt(t, "ms") ? $(t) : $(t) * 1e3 : 0;
  }
  function wl(t) {
    return x(document, "focusin", e => {
      ne(nt) === t && !D(e.target, t.$el) && t.$el.focus();
    });
  }
  function bl(t) {
    return x(document, mt, _ref72 => {
      let {
        target: e
      } = _ref72;
      ne(nt) !== t || t.overlay && !D(e, t.$el) || D(e, t.panel) || j(document, `${Pt} ${hi} scroll`, _ref73 => {
        let {
          defaultPrevented: i,
          type: s,
          target: n
        } = _ref73;
        !i && s === Pt && e === n && t.hide();
      }, !0);
    });
  }
  function $l(t) {
    return x(document, "keydown", e => {
      e.keyCode === 27 && ne(nt) === t && t.hide();
    });
  }
  var xl = {
    install: yl,
    mixins: [vs],
    data: {
      clsPage: "uk-modal-page",
      selPanel: ".uk-modal-dialog",
      selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
    },
    events: [{
      name: "show",
      self: !0,
      handler() {
        P(this.panel, "uk-margin-auto-vertical") ? y(this.$el, "uk-flex") : c(this.$el, "display", "block"), et(this.$el);
      }
    }, {
      name: "hidden",
      self: !0,
      handler() {
        c(this.$el, "display", ""), M(this.$el, "uk-flex");
      }
    }]
  };
  function yl(_ref74) {
    let {
      modal: t
    } = _ref74;
    t.dialog = function (i, s) {
      const n = t(`<div class="uk-modal"> <div class="uk-modal-dialog">${i}</div> </div>`, {
        stack: !0,
        role: "alertdialog",
        ...s
      });
      return n.show(), x(n.$el, "hidden", async () => {
        await Promise.resolve(), n.$destroy(!0);
      }, {
        self: !0
      }), n;
    }, t.alert = function (i, s) {
      return e(_ref75 => {
        let {
          i18n: n
        } = _ref75;
        return `<div class="uk-modal-body">${B(i) ? i : Nt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${n.ok}</button> </div>`;
      }, s);
    }, t.confirm = function (i, s) {
      return e(_ref76 => {
        let {
          i18n: n
        } = _ref76;
        return `<form> <div class="uk-modal-body">${B(i) ? i : Nt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${n.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${n.ok}</button> </div> </form>`;
      }, s, () => Promise.reject());
    }, t.prompt = function (i, s, n) {
      const o = e(_ref77 => {
          let {
            i18n: l
          } = _ref77;
          return `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${B(i) ? i : Nt(i)}</label> <input class="uk-input" value="${s || ""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary">${l.ok}</button> </div> </form>`;
        }, n, () => null, () => a.value),
        {
          $el: r
        } = o.dialog,
        a = w("input", r);
      return x(r, "show", () => a.select()), o;
    }, t.i18n = {
      ok: "Ok",
      cancel: "Cancel"
    };
    function e(i, s) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : S;
      let o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : S;
      s = {
        bgClose: !1,
        escClose: !0,
        ...s,
        i18n: {
          ...t.i18n,
          ...(s == null ? void 0 : s.i18n)
        }
      };
      const r = t.dialog(i(s), s);
      return wt(new Promise(a => {
        const l = x(r.$el, "hide", () => a(n()));
        x(r.$el, "submit", "form", h => {
          h.preventDefault(), a(o(r)), l(), r.hide();
        });
      }), {
        dialog: r
      });
    }
  }
  var kl = {
      extends: Tn,
      data: {
        targets: "> .uk-parent",
        toggle: "> a",
        content: "> ul"
      }
    },
    Sl = {
      extends: Bn,
      data: {
        clsDrop: "uk-navbar-dropdown",
        selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle"
      },
      watch: {
        items() {
          const t = P(this.$el, "uk-navbar-justify");
          for (const e of z(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el)) c(e, "flexGrow", t ? z(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", e).length : "");
        }
      }
    },
    Il = {
      mixins: [vs],
      args: "mode",
      props: {
        mode: String,
        flip: Boolean,
        overlay: Boolean,
        swiping: Boolean
      },
      data: {
        mode: "slide",
        flip: !1,
        overlay: !1,
        clsPage: "uk-offcanvas-page",
        clsContainer: "uk-offcanvas-container",
        selPanel: ".uk-offcanvas-bar",
        clsFlip: "uk-offcanvas-flip",
        clsContainerAnimation: "uk-offcanvas-container-animation",
        clsSidebarAnimation: "uk-offcanvas-bar-animation",
        clsMode: "uk-offcanvas",
        clsOverlay: "uk-offcanvas-overlay",
        selClose: ".uk-offcanvas-close",
        container: !1,
        swiping: !0
      },
      computed: {
        clsFlip(_ref78) {
          let {
            flip: t,
            clsFlip: e
          } = _ref78;
          return t ? e : "";
        },
        clsOverlay(_ref79) {
          let {
            overlay: t,
            clsOverlay: e
          } = _ref79;
          return t ? e : "";
        },
        clsMode(_ref80) {
          let {
            mode: t,
            clsMode: e
          } = _ref80;
          return `${e}-${t}`;
        },
        clsSidebarAnimation(_ref81) {
          let {
            mode: t,
            clsSidebarAnimation: e
          } = _ref81;
          return t === "none" || t === "reveal" ? "" : e;
        },
        clsContainerAnimation(_ref82) {
          let {
            mode: t,
            clsContainerAnimation: e
          } = _ref82;
          return t !== "push" && t !== "reveal" ? "" : e;
        },
        transitionElement(_ref83) {
          let {
            mode: t
          } = _ref83;
          return t === "reveal" ? O(this.panel) : this.panel;
        }
      },
      observe: Cn({
        filter: _ref84 => {
          let {
            swiping: t
          } = _ref84;
          return t;
        }
      }),
      update: {
        read() {
          this.isToggled() && !R(this.$el) && this.hide();
        },
        events: ["resize"]
      },
      events: [{
        name: "touchmove",
        self: !0,
        passive: !1,
        filter() {
          return this.overlay;
        },
        handler(t) {
          t.cancelable && t.preventDefault();
        }
      }, {
        name: "show",
        self: !0,
        handler() {
          this.mode === "reveal" && !P(O(this.panel), this.clsMode) && (oi(this.panel, "<div>"), y(O(this.panel), this.clsMode));
          const {
            body: t,
            scrollingElement: e
          } = document;
          y(t, this.clsContainer, this.clsFlip), c(t, "touch-action", "pan-y pinch-zoom"), c(this.$el, "display", "block"), c(this.panel, "maxWidth", e.clientWidth), y(this.$el, this.clsOverlay), y(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), et(t), y(t, this.clsContainerAnimation), this.clsContainerAnimation && Cl();
        }
      }, {
        name: "hide",
        self: !0,
        handler() {
          M(document.body, this.clsContainerAnimation), c(document.body, "touch-action", "");
        }
      }, {
        name: "hidden",
        self: !0,
        handler() {
          this.clsContainerAnimation && Tl(), this.mode === "reveal" && Pe(this.panel), M(this.panel, this.clsSidebarAnimation, this.clsMode), M(this.$el, this.clsOverlay), c(this.$el, "display", ""), c(this.panel, "maxWidth", ""), M(document.body, this.clsContainer, this.clsFlip);
        }
      }, {
        name: "swipeLeft swipeRight",
        handler(t) {
          this.isToggled() && Zt(t.type, "Left") ^ this.flip && this.hide();
        }
      }]
    };
  function Cl() {
    jn().content += ",user-scalable=0";
  }
  function Tl() {
    const t = jn();
    t.content = t.content.replace(/,user-scalable=0$/, "");
  }
  function jn() {
    return w('meta[name="viewport"]', document.head) || L(document.head, '<meta name="viewport">');
  }
  var El = {
      mixins: [st],
      props: {
        selContainer: String,
        selContent: String,
        minHeight: Number
      },
      data: {
        selContainer: ".uk-modal",
        selContent: ".uk-modal-dialog",
        minHeight: 150
      },
      computed: {
        container(_ref85, e) {
          let {
            selContainer: t
          } = _ref85;
          return U(e, t);
        },
        content(_ref86, e) {
          let {
            selContent: t
          } = _ref86;
          return U(e, t);
        }
      },
      observe: pt({
        target: _ref87 => {
          let {
            container: t,
            content: e
          } = _ref87;
          return [t, e];
        }
      }),
      update: {
        read() {
          return !this.content || !this.container || !R(this.$el) ? !1 : {
            max: Math.max(this.minHeight, et(this.container) - (b(this.content).height - et(this.$el)))
          };
        },
        write(_ref88) {
          let {
            max: t
          } = _ref88;
          c(this.$el, {
            minHeight: this.minHeight,
            maxHeight: t
          });
        },
        events: ["resize"]
      }
    },
    Pl = {
      props: ["width", "height"],
      connected() {
        y(this.$el, "uk-responsive-width");
      },
      observe: pt({
        target: _ref89 => {
          let {
            $el: t
          } = _ref89;
          return [t, O(t)];
        }
      }),
      update: {
        read() {
          return R(this.$el) && this.width && this.height ? {
            width: _e(O(this.$el)),
            height: this.height
          } : !1;
        },
        write(t) {
          et(this.$el, Qe.contain({
            height: this.height,
            width: this.width
          }, t).height);
        },
        events: ["resize"]
      }
    },
    _l = {
      props: {
        offset: Number
      },
      data: {
        offset: 0
      },
      connected() {
        Al(this);
      },
      disconnected() {
        Ol(this);
      },
      methods: {
        async scrollTo(t) {
          t = t && w(t) || document.body, v(this.$el, "beforescroll", [this, t]) && (await Qs(t, {
            offset: this.offset
          }), v(this.$el, "scrolled", [this, t]));
        }
      }
    };
  const Le = new Set();
  function Al(t) {
    Le.size || x(document, "click", qn), Le.add(t);
  }
  function Ol(t) {
    Le.delete(t), Le.size || Dt(document, "click", qn);
  }
  function qn(t) {
    if (!t.defaultPrevented) for (const e of Le) D(t.target, e.$el) && ae(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(Ri(e.$el)));
  }
  var Bl = {
      args: "cls",
      props: {
        cls: String,
        target: String,
        hidden: Boolean,
        margin: String,
        repeat: Boolean,
        delay: Number
      },
      data: () => ({
        cls: "",
        target: !1,
        hidden: !0,
        margin: "-1px",
        repeat: !1,
        delay: 0,
        inViewClass: "uk-scrollspy-inview"
      }),
      computed: {
        elements(_ref90, e) {
          let {
            target: t
          } = _ref90;
          return t ? z(t, e) : [e];
        }
      },
      watch: {
        elements(t) {
          this.hidden && c(Ie(t, `:not(.${this.inViewClass})`), "opacity", 0);
        }
      },
      connected() {
        this.elementData = new Map();
      },
      disconnected() {
        for (const [t, e] of this.elementData.entries()) M(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
        delete this.elementData;
      },
      observe: Ne({
        target: _ref91 => {
          let {
            elements: t
          } = _ref91;
          return t;
        },
        handler(t) {
          const e = this.elementData;
          for (const {
            target: i,
            isIntersecting: s
          } of t) {
            e.has(i) || e.set(i, {
              cls: tt(i, "uk-scrollspy-class") || this.cls
            });
            const n = e.get(i);
            !this.repeat && n.show || (n.show = s);
          }
          this.$emit();
        },
        options: t => ({
          rootMargin: t.margin
        }),
        args: {
          intersecting: !1
        }
      }),
      update: [{
        write(t) {
          for (const [e, i] of this.elementData.entries()) i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(() => new Promise(s => setTimeout(s, this.delay))).then(() => {
            this.toggle(e, !0), setTimeout(() => {
              i.queued = !1, this.$emit();
            }, 300);
          })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1);
        }
      }],
      methods: {
        toggle(t, e) {
          var i;
          const s = this.elementData.get(t);
          if (s) {
            if ((i = s.off) == null || i.call(s), c(t, "opacity", !e && this.hidden ? 0 : ""), q(t, this.inViewClass, e), q(t, s.cls), /\buk-animation-/.test(s.cls)) {
              const n = () => Yi(t, "uk-animation-[\\w-]+");
              e ? s.off = j(t, "animationcancel animationend", n) : n();
            }
            v(t, e ? "inview" : "outview"), s.inview = e, this.$update(t);
          }
        }
      }
    },
    Dl = {
      props: {
        cls: String,
        closest: String,
        scroll: Boolean,
        overflow: Boolean,
        offset: Number
      },
      data: {
        cls: "uk-active",
        closest: !1,
        scroll: !1,
        overflow: !0,
        offset: 0
      },
      computed: {
        links(t, e) {
          return z('a[href*="#"]', e).filter(i => i.hash && ae(i));
        },
        elements(_ref92) {
          let {
            closest: t
          } = _ref92;
          return U(this.links, t || "*");
        }
      },
      watch: {
        links(t) {
          this.scroll && this.$create("scroll", t, {
            offset: this.offset || 0
          });
        }
      },
      observe: [Ne(), mi()],
      update: [{
        read() {
          const t = this.links.map(Ri).filter(Boolean),
            {
              length: e
            } = t;
          if (!e || !R(this.$el)) return !1;
          const i = _t(t, !0),
            {
              scrollTop: s,
              scrollHeight: n
            } = i,
            o = ct(i),
            r = n - o.height;
          let a = !1;
          if (s === r) a = e - 1;else {
            for (let l = 0; l < t.length && !(_(t[l]).top - o.top - this.offset > 0); l++) a = +l;
            a === !1 && this.overflow && (a = 0);
          }
          return {
            active: a
          };
        },
        write(_ref93) {
          let {
            active: t
          } = _ref93;
          const e = t !== !1 && !P(this.elements[t], this.cls);
          this.links.forEach(i => i.blur());
          for (let i = 0; i < this.elements.length; i++) q(this.elements[i], this.cls, +i === t);
          e && v(this.$el, "active", [t, this.elements[t]]);
        },
        events: ["scroll", "resize"]
      }]
    },
    Ml = {
      mixins: [st, ki],
      props: {
        position: String,
        top: null,
        bottom: null,
        start: null,
        end: null,
        offset: String,
        overflowFlip: Boolean,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        showOnUp: Boolean,
        targetOffset: Number
      },
      data: {
        position: "top",
        top: !1,
        bottom: !1,
        start: !1,
        end: !1,
        offset: 0,
        overflowFlip: !1,
        animation: "",
        clsActive: "uk-active",
        clsInactive: "",
        clsFixed: "uk-sticky-fixed",
        clsBelow: "uk-sticky-below",
        selTarget: "",
        showOnUp: !1,
        targetOffset: !1
      },
      computed: {
        selTarget(_ref94, e) {
          let {
            selTarget: t
          } = _ref94;
          return t && w(t, e) || e;
        }
      },
      connected() {
        this.start = Un(this.start || this.top), this.end = Un(this.end || this.bottom), this.placeholder = w("+ .uk-sticky-placeholder", this.$el) || w('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
      },
      disconnected() {
        this.isFixed && (this.hide(), M(this.selTarget, this.clsInactive)), Vn(this.$el), lt(this.placeholder), this.placeholder = null;
      },
      observe: [pt({
        target: _ref95 => {
          let {
            $el: t
          } = _ref95;
          return [t, document.scrollingElement];
        }
      }), In(), mi()],
      events: [{
        name: "load hashchange popstate",
        el() {
          return window;
        },
        filter() {
          return this.targetOffset !== !1;
        },
        handler() {
          const {
            scrollingElement: t
          } = document;
          !location.hash || t.scrollTop === 0 || setTimeout(() => {
            const e = _(w(location.hash)),
              i = _(this.$el);
            this.isFixed && Fi(e, i) && (t.scrollTop = e.top - i.height - ht(this.targetOffset, "height", this.placeholder) - ht(this.offset, "height", this.placeholder));
          });
        }
      }, {
        name: "transitionstart",
        capture: !0,
        handler() {
          this.transitionInProgress = j(this.$el, "transitionend transitioncancel", () => this.transitionInProgress = null);
        }
      }],
      update: [{
        read(_ref96) {
          let {
            height: t,
            width: e,
            margin: i,
            sticky: s
          } = _ref96;
          if (this.inactive = !this.matchMedia || !R(this.$el), this.inactive) return;
          const n = this.isFixed && !this.transitionInProgress;
          n && (Yn(this.selTarget), this.hide()), this.active || (({
            height: t,
            width: e
          } = _(this.$el)), i = c(this.$el, "margin")), n && this.show();
          const o = ht("100vh", "height"),
            r = et(window),
            a = document.scrollingElement.scrollHeight - o;
          let l = this.position;
          this.overflowFlip && t > o && (l = l === "top" ? "bottom" : "top");
          const h = this.isFixed ? this.placeholder : this.$el;
          let u = ht(this.offset, "height", s ? this.$el : h);
          l === "bottom" && (t < r || this.overflowFlip) && (u += r - t);
          const f = this.overflowFlip ? 0 : Math.max(0, t + u - o),
            d = _(h).top,
            g = _(this.$el).height,
            A = (this.start === !1 ? d : ws(this.start, this.$el, d)) - u,
            N = this.end === !1 ? a : Math.min(a, ws(this.end, this.$el, d + t, !0) - g - u + f);
          return s = a && !this.showOnUp && A + u === d && N === Math.min(a, ws("!*", this.$el, 0, !0) - g - u + f) && c(O(this.$el), "overflowY") === "visible", {
            start: A,
            end: N,
            offset: u,
            overflow: f,
            topOffset: d,
            height: t,
            elHeight: g,
            width: e,
            margin: i,
            top: Ht(h)[0],
            sticky: s
          };
        },
        write(_ref97) {
          let {
            height: t,
            width: e,
            margin: i,
            offset: s,
            sticky: n
          } = _ref97;
          if ((this.inactive || n || !this.isFixed) && Vn(this.$el), this.inactive) return;
          n && (t = e = i = 0, c(this.$el, {
            position: "sticky",
            top: s
          }));
          const {
            placeholder: o
          } = this;
          c(o, {
            height: t,
            width: e,
            margin: i
          }), D(o, document) || (o.hidden = !0), (n ? ii : si)(this.$el, o);
        },
        events: ["resize"]
      }, {
        read(_ref98) {
          let {
            scroll: t = 0,
            dir: e = "down",
            overflow: i,
            overflowScroll: s = 0,
            start: n,
            end: o
          } = _ref98;
          const r = document.scrollingElement.scrollTop;
          return {
            dir: t <= r ? "down" : "up",
            prevDir: e,
            scroll: r,
            prevScroll: t,
            offsetParentTop: _((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
            overflowScroll: Z(s + Z(r, n, o) - Z(t, n, o), 0, i)
          };
        },
        write(t, e) {
          const i = e.has("scroll"),
            {
              initTimestamp: s = 0,
              dir: n,
              prevDir: o,
              scroll: r,
              prevScroll: a = 0,
              top: l,
              start: h,
              topOffset: u,
              height: f
            } = t;
          if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed) return;
          const d = Date.now();
          if ((d - s > 300 || n !== o) && (t.initScroll = r, t.initTimestamp = d), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10)) if (this.inactive || r < h || this.showOnUp && (r <= h || n === "down" && i || n === "up" && !this.isFixed && r <= u + f)) {
            if (!this.isFixed) {
              gt.inProgress(this.$el) && l > r && (gt.cancel(this.$el), this.hide());
              return;
            }
            this.animation && r > u ? (gt.cancel(this.$el), gt.out(this.$el, this.animation).then(() => this.hide(), S)) : this.hide();
          } else this.isFixed ? this.update() : this.animation && r > u ? (gt.cancel(this.$el), this.show(), gt.in(this.$el, this.animation).catch(S)) : (Yn(this.selTarget), this.show());
        },
        events: ["resize", "resizeViewport", "scroll"]
      }],
      methods: {
        show() {
          this.isFixed = !0, this.update(), this.placeholder.hidden = !1;
        },
        hide() {
          const {
            offset: t,
            sticky: e
          } = this._data;
          this.setActive(!1), M(this.$el, this.clsFixed, this.clsBelow), e ? c(this.$el, "top", t) : c(this.$el, {
            position: "",
            top: "",
            width: "",
            marginTop: ""
          }), this.placeholder.hidden = !0, this.isFixed = !1;
        },
        update() {
          let {
            width: t,
            scroll: e = 0,
            overflow: i,
            overflowScroll: s = 0,
            start: n,
            end: o,
            offset: r,
            topOffset: a,
            height: l,
            elHeight: h,
            offsetParentTop: u,
            sticky: f
          } = this._data;
          const d = n !== 0 || e > n;
          if (!f) {
            let g = "fixed";
            e > o && (r += o - u, g = "absolute"), c(this.$el, {
              position: g,
              width: t,
              marginTop: 0
            }, "important");
          }
          i && (r -= s), c(this.$el, "top", r), this.setActive(d), q(this.$el, this.clsBelow, e > a + (f ? Math.min(l, h) : l)), y(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          this.active = t, t ? (Gi(this.selTarget, this.clsInactive, this.clsActive), e !== t && v(this.$el, "active")) : (Gi(this.selTarget, this.clsActive, this.clsInactive), e !== t && v(this.$el, "inactive"));
        }
      }
    };
  function ws(t, e, i, s) {
    if (!t) return 0;
    if (bt(t) || B(t) && t.match(/^-?\d/)) return i + ht(t, "height", e, !0);
    {
      const n = t === !0 ? O(e) : at(t, e);
      return _(n).bottom - (s && n && D(e, n) ? $(c(n, "paddingBottom")) : 0);
    }
  }
  function Un(t) {
    return t === "true" ? !0 : t === "false" ? !1 : t;
  }
  function Vn(t) {
    c(t, {
      position: "",
      top: "",
      marginTop: "",
      width: ""
    });
  }
  function Yn(t) {
    c(t, "transition", "0s"), requestAnimationFrame(() => c(t, "transition", ""));
  }
  function Gn(t) {
    return Math.ceil(Math.max(0, ...z("[stroke]", t).map(e => {
      try {
        return e.getTotalLength();
      } catch {
        return 0;
      }
    })));
  }
  var Nl = {
    mixins: [Fn],
    args: "src",
    props: {
      src: String,
      icon: String,
      attributes: "list",
      strokeAnimation: Boolean
    },
    data: {
      strokeAnimation: !1
    },
    observe: [Sn({
      async handler() {
        const t = await this.svg;
        t && Xn.call(this, t);
      },
      options: {
        attributes: !0,
        attributeFilter: ["id", "class", "style"]
      }
    })],
    async connected() {
      m(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
      const t = await this.svg;
      t && (Xn.call(this, t), this.strokeAnimation && Ll(t));
    },
    methods: {
      async getSvg() {
        return G(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise(t => j(this.$el, "load", () => t(this.getSvg()))) : Fl(await zl(this.src), this.icon) || Promise.reject("SVG not found.");
      }
    }
  };
  function Xn(t) {
    const {
      $el: e
    } = this;
    y(t, p(e, "class"), "uk-svg");
    for (let i = 0; i < e.style.length; i++) {
      const s = e.style[i];
      c(t, s, c(e, s));
    }
    for (const i in this.attributes) {
      const [s, n] = this.attributes[i].split(":", 2);
      p(t, s, n);
    }
    this.$el.id || ye(t, "id");
  }
  const zl = dt(async t => t ? ot(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
  function Fl(t, e) {
    return e && m(t, "<symbol") && (t = Hl(t)[e] || t), t = w(t.substr(t.indexOf("<svg"))), (t == null ? void 0 : t.hasChildNodes()) && t;
  }
  const Jn = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
    Hl = dt(function (t) {
      const e = {};
      Jn.lastIndex = 0;
      let i;
      for (; i = Jn.exec(t);) e[i[3]] = `<svg ${i[1]}svg>`;
      return e;
    });
  function Ll(t) {
    const e = Gn(t);
    e && c(t, "--uk-animation-stroke", e);
  }
  const bs = ".uk-disabled *, .uk-disabled, [disabled]";
  var Kn = {
      mixins: [Vt],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        itemNav: String,
        active: Number,
        followFocus: Boolean,
        swiping: Boolean
      },
      data: {
        connect: "~.uk-switcher",
        toggle: "> * > :first-child",
        itemNav: !1,
        active: 0,
        cls: "uk-active",
        attrItem: "uk-switcher-item",
        selVertical: ".uk-nav",
        followFocus: !1,
        swiping: !0
      },
      computed: {
        connects(_ref99, e) {
          let {
            connect: t
          } = _ref99;
          return Ce(t, e);
        },
        connectChildren() {
          return this.connects.map(t => T(t)).flat();
        },
        toggles(_ref100, e) {
          let {
            toggle: t
          } = _ref100;
          return z(t, e);
        },
        children() {
          return T(this.$el).filter(t => this.toggles.some(e => D(e, t)));
        }
      },
      watch: {
        connects(t) {
          this.swiping && c(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
        },
        connectChildren() {
          let t = Math.max(0, this.index());
          for (const e of this.connects) T(e).forEach((i, s) => q(i, this.cls, s === t));
          this.$emit();
        },
        toggles(t) {
          this.$emit();
          const e = this.index();
          this.show(~e ? e : t[this.active] || t[0]);
        }
      },
      connected() {
        p(this.$el, "role", "tablist");
      },
      observe: [ze({
        targets: _ref101 => {
          let {
            connectChildren: t
          } = _ref101;
          return t;
        }
      }), Cn({
        target: _ref102 => {
          let {
            connects: t
          } = _ref102;
          return t;
        },
        filter: _ref103 => {
          let {
            swiping: t
          } = _ref103;
          return t;
        }
      })],
      events: [{
        name: "click keydown",
        delegate() {
          return this.toggle;
        },
        handler(t) {
          !C(t.current, bs) && (t.type === "click" || t.keyCode === I.SPACE) && (t.preventDefault(), this.show(t.current));
        }
      }, {
        name: "keydown",
        delegate() {
          return this.toggle;
        },
        handler(t) {
          const {
              current: e,
              keyCode: i
            } = t,
            s = C(this.$el, this.selVertical);
          let n = i === I.HOME ? 0 : i === I.END ? "last" : i === I.LEFT && !s || i === I.UP && s ? "previous" : i === I.RIGHT && !s || i === I.DOWN && s ? "next" : -1;
          if (~n) {
            t.preventDefault();
            const o = this.toggles.filter(a => !C(a, bs)),
              r = o[rt(n, o, o.indexOf(e))];
            r.focus(), this.followFocus && this.show(r);
          }
        }
      }, {
        name: "click",
        el() {
          return this.connects.concat(this.itemNav ? Ce(this.itemNav, this.$el) : []);
        },
        delegate() {
          return `[${this.attrItem}],[data-${this.attrItem}]`;
        },
        handler(t) {
          U(t.target, "a,button") && (t.preventDefault(), this.show(tt(t.current, this.attrItem)));
        }
      }, {
        name: "swipeRight swipeLeft",
        filter() {
          return this.swiping;
        },
        el() {
          return this.connects;
        },
        handler(_ref104) {
          let {
            type: t
          } = _ref104;
          this.show(Zt(t, "Left") ? "next" : "previous");
        }
      }],
      update() {
        var t;
        p(this.connects, "role", "presentation"), p(T(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const i = this.toggles[e],
            s = (t = this.connects[0]) == null ? void 0 : t.children[e];
          p(i, "role", "tab"), s && (i.id = At(this, i, `-tab-${e}`), s.id = At(this, s, `-tabpanel-${e}`), p(i, "aria-controls", s.id), p(s, {
            role: "tabpanel",
            "aria-labelledby": i.id
          }));
        }
        p(this.$el, "aria-orientation", C(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return xt(this.children, t => P(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter(r => !C(r, bs)),
            i = this.index(),
            s = rt(!Ge(t) || m(e, t) ? t : 0, e, rt(this.toggles[i], e)),
            n = rt(e[s], this.toggles);
          this.children.forEach((r, a) => {
            q(r, this.cls, n === a), p(this.toggles[a], {
              "aria-selected": n === a,
              tabindex: n === a ? null : -1
            });
          });
          const o = i >= 0 && i !== s;
          this.connects.forEach(async _ref105 => {
            let {
              children: r
            } = _ref105;
            const a = Qt(r).filter((l, h) => h !== n && P(l, this.cls));
            await this.toggleElement(a, !1, o), await this.toggleElement(r[n], !0, o);
          });
        }
      }
    },
    Wl = {
      mixins: [st],
      extends: Kn,
      props: {
        media: Boolean
      },
      data: {
        media: 960,
        attrItem: "uk-tab-item",
        selVertical: ".uk-tab-left,.uk-tab-right"
      },
      connected() {
        const t = P(this.$el, "uk-tab-left") ? "uk-tab-left" : P(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
        t && this.$create("toggle", this.$el, {
          cls: t,
          mode: "media",
          media: this.media
        });
      }
    };
  const Rl = 32;
  var jl = {
      mixins: [ki, Vt],
      args: "target",
      props: {
        href: String,
        target: null,
        mode: "list",
        queued: Boolean
      },
      data: {
        href: !1,
        target: !1,
        mode: "click",
        queued: !0
      },
      computed: {
        target(_ref106, e) {
          let {
            target: t
          } = _ref106;
          return t = Ce(t || e.hash, e), t.length && t || [e];
        }
      },
      connected() {
        m(this.mode, "media") || (ti(this.$el) || p(this.$el, "tabindex", "0"), !this.cls && G(this.$el, "a") && p(this.$el, "role", "button"));
      },
      observe: ze({
        target: _ref107 => {
          let {
            target: t
          } = _ref107;
          return t;
        }
      }),
      events: [{
        name: mt,
        filter() {
          return m(this.mode, "hover");
        },
        handler(t) {
          this._preventClick = null, !(!It(t) || ie(this._showState) || this.$el.disabled) && (v(this.$el, "focus"), j(document, mt, () => v(this.$el, "blur"), !0, e => !D(e.target, this.$el)), m(this.mode, "click") && (this._preventClick = !0));
        }
      }, {
        name: `${Rt} ${fe} focus blur`,
        filter() {
          return m(this.mode, "hover");
        },
        handler(t) {
          if (It(t) || this.$el.disabled) return;
          const e = m([Rt, "focus"], t.type),
            i = this.isToggled(this.target);
          if (!e && (!ie(this._showState) || i === this._showState || t.type === fe && C(this.$el, ":focus") || t.type === "blur" && C(this.$el, ":hover"))) {
            i === this._showState && (this._showState = null);
            return;
          }
          e && ie(this._showState) && i !== this._showState || (this._showState = e ? i : null, this.toggle(`toggle${e ? "show" : "hide"}`));
        }
      }, {
        name: "keydown",
        filter() {
          return m(this.mode, "click") && !G(this.$el, "input");
        },
        handler(t) {
          t.keyCode === Rl && (t.preventDefault(), this.$el.click());
        }
      }, {
        name: "click",
        filter() {
          return ["click", "hover"].some(t => m(this.mode, t));
        },
        handler(t) {
          let e;
          (this._preventClick || U(t.target, 'a[href="#"], a[href=""]') || (e = U(t.target, "a[href]")) && (!this.isToggled(this.target) || e.hash && C(this.target, e.hash))) && t.preventDefault(), !this._preventClick && m(this.mode, "click") && this.toggle();
        }
      }, {
        name: "mediachange",
        filter() {
          return m(this.mode, "media");
        },
        el() {
          return this.target;
        },
        handler(t, e) {
          e.matches ^ this.isToggled(this.target) && this.toggle();
        }
      }],
      methods: {
        async toggle(t) {
          if (!v(this.target, t || "toggle", [this])) return;
          if ($t(this.$el, "aria-expanded") && p(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued) return this.toggleElement(this.target);
          const e = this.target.filter(s => P(s, this.clsLeave));
          if (e.length) {
            for (const s of this.target) {
              const n = m(e, s);
              this.toggleElement(s, n, n);
            }
            return;
          }
          const i = this.target.filter(this.isToggled);
          (await this.toggleElement(i, !1)) && (await this.toggleElement(this.target.filter(s => !m(i, s)), !0));
        }
      }
    },
    ql = Object.freeze({
      __proto__: null,
      Accordion: Tn,
      Alert: la,
      Close: tl,
      Cover: ca,
      Drop: On,
      DropParentIcon: Yt,
      Dropdown: On,
      Dropnav: Bn,
      FormCustom: ba,
      Grid: xa,
      HeightMatch: Sa,
      HeightViewport: Ta,
      Icon: gs,
      Img: hl,
      Leader: ml,
      Margin: Mn,
      Marker: el,
      Modal: xl,
      Nav: kl,
      NavParentIcon: Ja,
      Navbar: Sl,
      NavbarParentIcon: Yt,
      NavbarToggleIcon: Qa,
      Offcanvas: Il,
      OverflowAuto: El,
      OverlayIcon: Yt,
      PaginationNext: sl,
      PaginationPrevious: nl,
      Responsive: Pl,
      Scroll: _l,
      Scrollspy: Bl,
      ScrollspyNav: Dl,
      SearchIcon: Ka,
      SlidenavNext: Ln,
      SlidenavPrevious: Ln,
      Spinner: Za,
      Sticky: Ml,
      Svg: Nl,
      Switcher: Kn,
      Tab: Wl,
      Toggle: jl,
      Totop: il,
      Video: En
    });
  St(ql, (t, e) => ft.component(e, t)), Zr(ft);
  const Ul = ["days", "hours", "minutes", "seconds"];
  var Vl = {
    mixins: [st],
    props: {
      date: String,
      clsWrapper: String,
      role: String
    },
    data: {
      date: "",
      clsWrapper: ".uk-countdown-%unit%",
      role: "timer"
    },
    connected() {
      p(this.$el, "role", this.role), this.date = $(Date.parse(this.$props.date)), this.end = !1, this.start();
    },
    disconnected() {
      this.stop();
    },
    events: {
      name: "visibilitychange",
      el() {
        return document;
      },
      handler() {
        document.hidden ? this.stop() : this.start();
      }
    },
    methods: {
      start() {
        this.stop(), this.update(), this.timer || (v(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3));
      },
      stop() {
        this.timer && (clearInterval(this.timer), v(this.$el, "countdownstop"), this.timer = null);
      },
      update() {
        const t = Yl(this.date);
        t.total || (this.stop(), this.end || (v(this.$el, "countdownend"), this.end = !0));
        for (const e of Ul) {
          const i = w(this.clsWrapper.replace("%unit%", e), this.$el);
          if (!i) continue;
          let s = String(Math.trunc(t[e]));
          s = s.length < 2 ? `0${s}` : s, i.textContent !== s && (s = s.split(""), s.length !== i.children.length && Nt(i, s.map(() => "<span></span>").join("")), s.forEach((n, o) => i.children[o].textContent = n));
        }
      }
    }
  };
  function Yl(t) {
    const e = Math.max(0, t - Date.now()) / 1e3;
    return {
      total: e,
      seconds: e % 60,
      minutes: e / 60 % 60,
      hours: e / 60 / 60 % 24,
      days: e / 60 / 60 / 24
    };
  }
  const $s = "uk-transition-leave",
    xs = "uk-transition-enter";
  function Zn(t, e, i) {
    let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    const n = Si(e, !0),
      o = {
        opacity: 1
      },
      r = {
        opacity: 0
      },
      a = u => () => n === Si(e) ? u() : Promise.reject(),
      l = a(async () => {
        y(e, $s), await Promise.all(to(e).map((u, f) => new Promise(d => setTimeout(() => E.start(u, r, i / 2, "ease").then(d), f * s)))), M(e, $s);
      }),
      h = a(async () => {
        const u = et(e);
        y(e, xs), t(), c(T(e), {
          opacity: 0
        }), await Gl();
        const f = T(e),
          d = et(e);
        c(e, "alignContent", "flex-start"), et(e, u);
        const g = to(e);
        c(f, r);
        const A = g.map(async (N, F) => {
          await Xl(F * s), await E.start(N, o, i / 2, "ease");
        });
        u !== d && A.push(E.start(e, {
          height: d
        }, i / 2 + g.length * s, "ease")), await Promise.all(A).then(() => {
          M(e, xs), n === Si(e) && (c(e, {
            height: "",
            alignContent: ""
          }), c(f, {
            opacity: ""
          }), delete e.dataset.transition);
        });
      });
    return P(e, $s) ? Qn(e).then(h) : P(e, xs) ? Qn(e).then(l).then(h) : l().then(h);
  }
  function Si(t, e) {
    return e && (t.dataset.transition = 1 + Si(t)), kt(t.dataset.transition) || 0;
  }
  function Qn(t) {
    return Promise.all(T(t).filter(E.inProgress).map(e => new Promise(i => j(e, "transitionend transitioncanceled", i))));
  }
  function to(t) {
    return ps(T(t)).reduce((e, i) => e.concat(Ke(i.filter(s => ns(s)), "offsetLeft")), []);
  }
  function Gl() {
    return new Promise(t => requestAnimationFrame(t));
  }
  function Xl(t) {
    return new Promise(e => setTimeout(e, t));
  }
  async function Jl(t, e, i) {
    await so();
    let s = T(e);
    const n = s.map(d => eo(d, !0)),
      o = {
        ...c(e, ["height", "padding"]),
        display: "block"
      };
    await Promise.all(s.concat(e).map(E.cancel)), t(), s = s.concat(T(e).filter(d => !m(s, d))), await Promise.resolve(), J.flush();
    const r = p(e, "style"),
      a = c(e, ["height", "padding"]),
      [l, h] = Kl(e, s, n),
      u = s.map(d => ({
        style: p(d, "style")
      }));
    s.forEach((d, g) => h[g] && c(d, h[g])), c(e, o), v(e, "scroll"), J.flush(), await so();
    const f = s.map((d, g) => O(d) === e && E.start(d, l[g], i, "ease")).concat(E.start(e, a, i, "ease"));
    try {
      await Promise.all(f), s.forEach((d, g) => {
        p(d, u[g]), O(d) === e && c(d, "display", l[g].opacity === 0 ? "none" : "");
      }), p(e, "style", r);
    } catch {
      p(s, "style", ""), Zl(e, o);
    }
  }
  function eo(t, e) {
    const i = c(t, "zIndex");
    return R(t) ? {
      display: "",
      opacity: e ? c(t, "opacity") : "0",
      pointerEvents: "none",
      position: "absolute",
      zIndex: i === "auto" ? re(t) : i,
      ...io(t)
    } : !1;
  }
  function Kl(t, e, i) {
    const s = e.map((o, r) => O(o) && r in i ? i[r] ? R(o) ? io(o) : {
        opacity: 0
      } : {
        opacity: R(o) ? 1 : 0
      } : !1),
      n = s.map((o, r) => {
        const a = O(e[r]) === t && (i[r] || eo(e[r]));
        if (!a) return !1;
        if (!o) delete a.opacity;else if (!("opacity" in o)) {
          const {
            opacity: l
          } = a;
          l % 1 ? o.opacity = 1 : delete a.opacity;
        }
        return a;
      });
    return [s, n];
  }
  function Zl(t, e) {
    for (const i in e) c(t, i, "");
  }
  function io(t) {
    const {
      height: e,
      width: i
    } = _(t);
    return {
      height: e,
      width: i,
      transform: "",
      ...ri(t),
      ...c(t, ["marginTop", "marginLeft"])
    };
  }
  function so() {
    return new Promise(t => requestAnimationFrame(t));
  }
  var no = {
      props: {
        duration: Number,
        animation: Boolean
      },
      data: {
        duration: 150,
        animation: "slide"
      },
      methods: {
        animate(t) {
          let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$el;
          const i = this.animation;
          return (i === "fade" ? Zn : i === "delayed-fade" ? function () {
            for (var _len12 = arguments.length, n = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
              n[_key12] = arguments[_key12];
            }
            return Zn(...n, 40);
          } : i ? Jl : () => (t(), Promise.resolve()))(t, e, this.duration).catch(S);
        }
      }
    },
    Ql = {
      mixins: [no],
      args: "target",
      props: {
        target: String,
        selActive: Boolean
      },
      data: {
        target: "",
        selActive: !1,
        attrItem: "uk-filter-control",
        cls: "uk-active",
        duration: 250
      },
      computed: {
        toggles(_ref108, e) {
          let {
            attrItem: t
          } = _ref108;
          return z(`[${t}],[data-${t}]`, e);
        },
        children(_ref109, e) {
          let {
            target: t
          } = _ref109;
          return z(`${t} > *`, e);
        }
      },
      watch: {
        toggles(t) {
          this.updateState();
          const e = z(this.selActive, this.$el);
          for (const i of t) {
            this.selActive !== !1 && q(i, this.cls, m(e, i));
            const s = oh(i);
            G(s, "a") && p(s, "role", "button");
          }
        },
        children(t, e) {
          e && this.updateState();
        }
      },
      events: {
        name: "click keydown",
        delegate() {
          return `[${this.attrItem}],[data-${this.attrItem}]`;
        },
        handler(t) {
          t.type === "keydown" && t.keyCode !== I.SPACE || U(t.target, "a,button") && (t.preventDefault(), this.apply(t.current));
        }
      },
      methods: {
        apply(t) {
          const e = this.getState(),
            i = ro(t, this.attrItem, this.getState());
          th(e, i) || this.setState(i);
        },
        getState() {
          return this.toggles.filter(t => P(t, this.cls)).reduce((t, e) => ro(e, this.attrItem, t), {
            filter: {
              "": ""
            },
            sort: []
          });
        },
        async setState(t) {
          let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          t = {
            filter: {
              "": ""
            },
            sort: [],
            ...t
          }, v(this.$el, "beforeFilter", [this, t]);
          for (const i of this.toggles) q(i, this.cls, ih(i, this.attrItem, t));
          await Promise.all(z(this.target, this.$el).map(i => {
            const s = () => {
              eh(t, i, T(i)), this.$update(this.$el);
            };
            return e ? this.animate(s, i) : s();
          })), v(this.$el, "afterFilter", [this]);
        },
        updateState() {
          J.write(() => this.setState(this.getState(), !1));
        }
      }
    };
  function oo(t, e) {
    return De(tt(t, e), ["filter"]);
  }
  function th(t, e) {
    return ["filter", "sort"].every(i => Je(t[i], e[i]));
  }
  function eh(t, e, i) {
    const s = sh(t);
    i.forEach(r => c(r, "display", s && !C(r, s) ? "none" : ""));
    const [n, o] = t.sort;
    if (n) {
      const r = nh(i, n, o);
      Je(r, i) || L(e, r);
    }
  }
  function ro(t, e, i) {
    const {
      filter: s,
      group: n,
      sort: o,
      order: r = "asc"
    } = oo(t, e);
    return (s || Y(o)) && (n ? s ? (delete i.filter[""], i.filter[n] = s) : (delete i.filter[n], (xe(i.filter) || "" in i.filter) && (i.filter = {
      "": s || ""
    })) : i.filter = {
      "": s || ""
    }), Y(o) || (i.sort = [o, r]), i;
  }
  function ih(t, e, _ref110) {
    let {
      filter: i = {
        "": ""
      },
      sort: [s, n]
    } = _ref110;
    const {
      filter: o = "",
      group: r = "",
      sort: a,
      order: l = "asc"
    } = oo(t, e);
    return Y(a) ? r in i && o === i[r] || !o && r && !(r in i) && !i[""] : s === a && n === l;
  }
  function sh(_ref111) {
    let {
      filter: t
    } = _ref111;
    let e = "";
    return St(t, i => e += i || ""), e;
  }
  function nh(t, e, i) {
    return [...t].sort((s, n) => tt(s, e).localeCompare(tt(n, e), void 0, {
      numeric: !0
    }) * (i === "asc" || -1));
  }
  function oh(t) {
    return w("a,button", t) || t;
  }
  var ys = {
    slide: {
      show(t) {
        return [{
          transform: W(t * -100)
        }, {
          transform: W()
        }];
      },
      percent(t) {
        return We(t);
      },
      translate(t, e) {
        return [{
          transform: W(e * -100 * t)
        }, {
          transform: W(e * 100 * (1 - t))
        }];
      }
    }
  };
  function We(t) {
    return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth) || 0;
  }
  function W() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "%";
    return t += t ? e : "", `translate3d(${t}, 0, 0)`;
  }
  function me(t) {
    return `scale3d(${t}, ${t}, 1)`;
  }
  var ao = {
    ...ys,
    fade: {
      show() {
        return [{
          opacity: 0
        }, {
          opacity: 1
        }];
      },
      percent(t) {
        return 1 - c(t, "opacity");
      },
      translate(t) {
        return [{
          opacity: 1 - t
        }, {
          opacity: t
        }];
      }
    },
    scale: {
      show() {
        return [{
          opacity: 0,
          transform: me(1 - .2)
        }, {
          opacity: 1,
          transform: me(1)
        }];
      },
      percent(t) {
        return 1 - c(t, "opacity");
      },
      translate(t) {
        return [{
          opacity: 1 - t,
          transform: me(1 - .2 * t)
        }, {
          opacity: t,
          transform: me(1 - .2 + .2 * t)
        }];
      }
    }
  };
  function rh(t, e, i, _ref112) {
    let {
      animation: s,
      easing: n
    } = _ref112;
    const {
        percent: o,
        translate: r,
        show: a = S
      } = s,
      l = a(i);
    let h;
    return {
      dir: i,
      show(u) {
        let f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        let d = arguments.length > 2 ? arguments[2] : undefined;
        const g = d ? "linear" : n;
        return u -= Math.round(u * Z(f, -1, 1)), this.translate(f), Ii(e, "itemin", {
          percent: f,
          duration: u,
          timing: g,
          dir: i
        }), Ii(t, "itemout", {
          percent: 1 - f,
          duration: u,
          timing: g,
          dir: i
        }), new Promise(A => {
          h || (h = A), Promise.all([E.start(e, l[1], u, g), E.start(t, l[0], u, g)]).then(() => {
            this.reset(), h();
          }, S);
        });
      },
      cancel() {
        return E.cancel([e, t]);
      },
      reset() {
        for (const u in l[0]) c([e, t], u, "");
      },
      async forward(u) {
        let f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.percent();
        return await this.cancel(), this.show(u, f, !0);
      },
      translate(u) {
        this.reset();
        const f = r(u, i);
        c(e, f[1]), c(t, f[0]), Ii(e, "itemtranslatein", {
          percent: u,
          dir: i
        }), Ii(t, "itemtranslateout", {
          percent: 1 - u,
          dir: i
        });
      },
      percent() {
        return o(t || e, e, i);
      },
      getDistance() {
        return t == null ? void 0 : t.offsetWidth;
      }
    };
  }
  function Ii(t, e, i) {
    v(t, Mt(e, !1, !1, i));
  }
  var ah = {
    i18n: {
      next: "Next slide",
      previous: "Previous slide",
      slideX: "Slide %s",
      slideLabel: "%s of %s",
      role: "String"
    },
    data: {
      selNav: !1,
      role: "region"
    },
    computed: {
      nav(_ref113, e) {
        let {
          selNav: t
        } = _ref113;
        return w(t, e);
      },
      navChildren() {
        return T(this.nav);
      },
      selNavItem(_ref114) {
        let {
          attrItem: t
        } = _ref114;
        return `[${t}],[data-${t}]`;
      },
      navItems(t, e) {
        return z(this.selNavItem, e);
      }
    },
    watch: {
      nav(t, e) {
        p(t, "role", "tablist"), e && this.$emit();
      },
      list(t) {
        p(t, "role", "presentation");
      },
      navChildren(t) {
        p(t, "role", "presentation");
      },
      navItems(t) {
        for (const e of t) {
          const i = tt(e, this.attrItem),
            s = w("a,button", e) || e;
          let n,
            o = null;
          if (bt(i)) {
            const r = kt(i),
              a = this.slides[r];
            a && (a.id || (a.id = At(this, a, `-item-${i}`)), o = a.id), n = this.t("slideX", $(i) + 1), p(s, "role", "tab");
          } else this.list && (this.list.id || (this.list.id = At(this, this.list, "-items")), o = this.list.id), n = this.t(i);
          p(s, {
            "aria-controls": o,
            "aria-label": p(s, "aria-label") || n
          });
        }
      },
      slides(t) {
        t.forEach((e, i) => p(e, {
          role: this.nav ? "tabpanel" : "group",
          "aria-label": this.t("slideLabel", i + 1, this.length),
          "aria-roledescription": this.nav ? null : "slide"
        }));
      },
      length(t) {
        const e = this.navChildren.length;
        if (this.nav && t !== e) {
          Ji(this.nav);
          for (let i = 0; i < t; i++) L(this.nav, `<li ${this.attrItem}="${i}"><a href></a></li>`);
        }
      }
    },
    connected() {
      p(this.$el, {
        role: this.role,
        "aria-roledescription": "carousel"
      });
    },
    update: [{
      write() {
        this.navItems.concat(this.nav).forEach(t => t && (t.hidden = !this.maxIndex)), this.updateNav();
      },
      events: ["resize"]
    }],
    events: [{
      name: "click keydown",
      delegate() {
        return this.selNavItem;
      },
      handler(t) {
        U(t.target, "a,button") && (t.type === "click" || t.keyCode === I.SPACE) && (t.preventDefault(), this.show(tt(t.current, this.attrItem)));
      }
    }, {
      name: "itemshow",
      handler: "updateNav"
    }, {
      name: "keydown",
      delegate() {
        return this.selNavItem;
      },
      handler(t) {
        const {
            current: e,
            keyCode: i
          } = t,
          s = tt(e, this.attrItem);
        if (!bt(s)) return;
        let n = i === I.HOME ? 0 : i === I.END ? "last" : i === I.LEFT ? "previous" : i === I.RIGHT ? "next" : -1;
        ~n && (t.preventDefault(), this.show(n));
      }
    }],
    methods: {
      updateNav() {
        const t = this.getValidIndex();
        let e, i;
        for (const s of this.navItems) {
          const n = tt(s, this.attrItem),
            o = w("a,button", s) || s;
          if (bt(n)) {
            const a = kt(n) === t;
            q(s, this.clsActive, a), p(o, {
              "aria-selected": a,
              tabindex: a ? null : -1
            }), a && (i = o), e || (e = C(o, ":focus"));
          } else q(s, "uk-invisible", this.finite && (n === "previous" && t === 0 || n === "next" && t >= this.maxIndex));
          e && i && i.focus();
        }
      }
    }
  };
  const ks = {
      passive: !1,
      capture: !0
    },
    lo = {
      passive: !0,
      capture: !0
    },
    lh = "touchstart mousedown",
    Ss = "touchmove mousemove",
    ho = "touchend touchcancel mouseup click input scroll";
  var hh = {
    props: {
      draggable: Boolean
    },
    data: {
      draggable: !0,
      threshold: 10
    },
    created() {
      for (const t of ["start", "move", "end"]) {
        const e = this[t];
        this[t] = i => {
          const s = le(i).x * (X ? -1 : 1);
          this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i);
        };
      }
    },
    events: [{
      name: lh,
      passive: !0,
      delegate() {
        return `${this.selList} > *`;
      },
      handler(t) {
        !this.draggable || !It(t) && ch(t.target) || U(t.target, ke) || t.button > 0 || this.length < 2 || this.start(t);
      }
    }, {
      name: "dragstart",
      handler(t) {
        t.preventDefault();
      }
    }, {
      name: Ss,
      el() {
        return this.list;
      },
      handler: S,
      ...ks
    }],
    methods: {
      start() {
        this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, x(document, Ss, this.move, ks), x(document, ho, this.end, lo), c(this.list, "userSelect", "none");
      },
      move(t) {
        const e = this.pos - this.drag;
        if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold) return;
        c(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
        let {
            slides: i,
            prevIndex: s
          } = this,
          n = Math.abs(e),
          o = this.getIndex(s + this.dir),
          r = this._getDistance(s, o);
        for (; o !== s && n > r;) this.drag -= r * this.dir, s = o, n -= r, o = this.getIndex(s + this.dir), r = this._getDistance(s, o);
        this.percent = n / r;
        const a = i[s],
          l = i[o],
          h = this.index !== o,
          u = s === o;
        let f;
        for (const d of [this.index, this.prevIndex]) m([o, s], d) || (v(i[d], "itemhidden", [this]), u && (f = !0, this.prevIndex = s));
        (this.index === s && this.prevIndex !== s || f) && v(i[this.index], "itemshown", [this]), h && (this.prevIndex = s, this.index = o, !u && v(a, "beforeitemhide", [this]), v(l, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), a, !u && l), h && (!u && v(a, "itemhide", [this]), v(l, "itemshow", [this]));
      },
      end() {
        if (Dt(document, Ss, this.move, ks), Dt(document, ho, this.end, lo), this.dragging) if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;else {
          const t = (X ? this.dir * (X ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
          this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0);
        }
        c(this.list, {
          userSelect: "",
          pointerEvents: ""
        }), this.drag = this.percent = null;
      },
      _getDistance(t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
      }
    }
  };
  function ch(t) {
    return c(t, "userSelect") !== "none" && Qt(t.childNodes).some(e => e.nodeType === 3 && e.textContent.trim());
  }
  var uh = {
      props: {
        autoplay: Boolean,
        autoplayInterval: Number,
        pauseOnHover: Boolean
      },
      data: {
        autoplay: !1,
        autoplayInterval: 7e3,
        pauseOnHover: !0
      },
      connected() {
        p(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
      },
      disconnected() {
        this.stopAutoplay();
      },
      update() {
        p(this.slides, "tabindex", "-1");
      },
      events: [{
        name: "visibilitychange",
        el() {
          return document;
        },
        filter() {
          return this.autoplay;
        },
        handler() {
          document.hidden ? this.stopAutoplay() : this.startAutoplay();
        }
      }],
      methods: {
        startAutoplay() {
          this.stopAutoplay(), this.interval = setInterval(() => {
            this.stack.length || this.draggable && C(this.$el, ":focus-within") || this.pauseOnHover && C(this.$el, ":hover") || this.show("next");
          }, this.autoplayInterval);
        },
        stopAutoplay() {
          clearInterval(this.interval);
        }
      }
    },
    co = {
      mixins: [uh, hh, ah, bi],
      props: {
        clsActivated: Boolean,
        easing: String,
        index: Number,
        finite: Boolean,
        velocity: Number
      },
      data: () => ({
        easing: "ease",
        finite: !1,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: "uk-active",
        clsActivated: !1,
        Transitioner: !1,
        transitionOptions: {}
      }),
      connected() {
        this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
      },
      disconnected() {
        M(this.slides, this.clsActive);
      },
      computed: {
        duration(_ref115, e) {
          let {
            velocity: t
          } = _ref115;
          return uo(e.offsetWidth / t);
        },
        list(_ref116, e) {
          let {
            selList: t
          } = _ref116;
          return w(t, e);
        },
        maxIndex() {
          return this.length - 1;
        },
        slides() {
          return T(this.list);
        },
        length() {
          return this.slides.length;
        }
      },
      watch: {
        slides(t, e) {
          e && this.$emit();
        }
      },
      observe: pt(),
      methods: {
        show(t) {
          let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i;
          if (this.dragging || !this.length) return;
          const {
              stack: s
            } = this,
            n = e ? 0 : s.length,
            o = () => {
              s.splice(n, 1), s.length && this.show(s.shift(), !0);
            };
          if (s[e ? "unshift" : "push"](t), !e && s.length > 1) {
            s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
            return;
          }
          const r = this.getIndex(this.index),
            a = P(this.slides, this.clsActive) && this.slides[r],
            l = this.getIndex(t, this.index),
            h = this.slides[l];
          if (a === h) {
            o();
            return;
          }
          if (this.dir = fh(t, r), this.prevIndex = r, this.index = l, a && !v(a, "beforeitemhide", [this]) || !v(h, "beforeitemshow", [this, a])) {
            this.index = this.prevIndex, o();
            return;
          }
          const u = this._show(a, h, e).then(() => {
            a && v(a, "itemhidden", [this]), v(h, "itemshown", [this]), s.shift(), this._transitioner = null, requestAnimationFrame(() => s.length && this.show(s.shift(), !0));
          });
          return a && v(a, "itemhide", [this]), v(h, "itemshow", [this]), u;
        },
        getIndex() {
          let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;
          let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.index;
          return Z(rt(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex));
        },
        getValidIndex() {
          let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;
          let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.prevIndex;
          return this.getIndex(t, e);
        },
        _show(t, e, i) {
          if (this._transitioner = this._getTransitioner(t, e, this.dir, {
            easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
            ...this.transitionOptions
          }), !i && !t) return this._translate(1), Promise.resolve();
          const {
            length: s
          } = this.stack;
          return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent);
        },
        _translate(t) {
          let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.prevIndex;
          let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.index;
          const s = this._getTransitioner(e === i ? !1 : e, i);
          return s.translate(t), s;
        },
        _getTransitioner() {
          let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.prevIndex;
          let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.index;
          let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.dir || 1;
          let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.transitionOptions;
          return new this.Transitioner(this.slides[t] || t, this.slides[e] || e, i * (X ? -1 : 1), s);
        }
      }
    };
  function fh(t, e) {
    return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
  }
  function uo(t) {
    return .5 * t + 300;
  }
  var fo = {
      mixins: [co],
      props: {
        animation: String
      },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: ys,
        Transitioner: rh
      },
      computed: {
        animation(_ref117) {
          let {
            animation: t,
            Animations: e
          } = _ref117;
          return {
            ...(e[t] || e.slide),
            name: t
          };
        },
        transitionOptions() {
          return {
            animation: this.animation
          };
        }
      },
      events: {
        beforeitemshow(_ref118) {
          let {
            target: t
          } = _ref118;
          y(t, this.clsActive);
        },
        itemshown(_ref119) {
          let {
            target: t
          } = _ref119;
          y(t, this.clsActivated);
        },
        itemhidden(_ref120) {
          let {
            target: t
          } = _ref120;
          M(t, this.clsActive, this.clsActivated);
        }
      }
    },
    po = {
      mixins: [vs, fo],
      functional: !0,
      props: {
        delayControls: Number,
        preload: Number,
        videoAutoplay: Boolean,
        template: String
      },
      data: () => ({
        preload: 1,
        videoAutoplay: !1,
        delayControls: 3e3,
        items: [],
        cls: "uk-open",
        clsPage: "uk-lightbox-page",
        selList: ".uk-lightbox-items",
        attrItem: "uk-lightbox-item",
        selClose: ".uk-close-large",
        selCaption: ".uk-lightbox-caption",
        pauseOnHover: !1,
        velocity: 2,
        Animations: ao,
        template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
      }),
      created() {
        const t = w(this.template),
          e = w(this.selList, t);
        this.items.forEach(() => L(e, "<li>"));
        const i = w("[uk-close]", t),
          s = this.t("close");
        i && s && (i.dataset.i18n = JSON.stringify({
          label: s
        })), this.$mount(L(this.container, t));
      },
      computed: {
        caption(_ref121, e) {
          let {
            selCaption: t
          } = _ref121;
          return w(t, e);
        }
      },
      events: [{
        name: `${li} ${mt} keydown`,
        handler: "showControls"
      }, {
        name: "click",
        self: !0,
        delegate() {
          return `${this.selList} > *`;
        },
        handler(t) {
          t.defaultPrevented || this.hide();
        }
      }, {
        name: "shown",
        self: !0,
        handler() {
          this.showControls();
        }
      }, {
        name: "hide",
        self: !0,
        handler() {
          this.hideControls(), M(this.slides, this.clsActive), E.stop(this.slides);
        }
      }, {
        name: "hidden",
        self: !0,
        handler() {
          this.$destroy(!0);
        }
      }, {
        name: "keyup",
        el() {
          return document;
        },
        handler(_ref122) {
          let {
            keyCode: t
          } = _ref122;
          if (!this.isToggled(this.$el) || !this.draggable) return;
          let e = -1;
          t === I.LEFT ? e = "previous" : t === I.RIGHT ? e = "next" : t === I.HOME ? e = 0 : t === I.END && (e = "last"), ~e && this.show(e);
        }
      }, {
        name: "beforeitemshow",
        handler(t) {
          this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = ao.scale, M(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
        }
      }, {
        name: "itemshow",
        handler() {
          Nt(this.caption, this.getItem().caption || "");
          for (let t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t);
        }
      }, {
        name: "itemshown",
        handler() {
          this.draggable = this.$props.draggable;
        }
      }, {
        name: "itemload",
        async handler(t, e) {
          const {
            source: i,
            type: s,
            alt: n = "",
            poster: o,
            attrs: r = {}
          } = e;
          if (this.setItem(e, "<span uk-spinner></span>"), !i) return;
          let a;
          const l = {
            allowfullscreen: "",
            style: "max-width: 100%; box-sizing: border-box;",
            "uk-responsive": "",
            "uk-video": `${this.videoAutoplay}`
          };
          if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
            const h = Re("img", {
              src: i,
              alt: n,
              ...r
            });
            x(h, "load", () => this.setItem(e, h)), x(h, "error", () => this.setError(e));
          } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
            const h = Re("video", {
              src: i,
              poster: o,
              controls: "",
              playsinline: "",
              "uk-video": `${this.videoAutoplay}`,
              ...r
            });
            x(h, "loadedmetadata", () => this.setItem(e, h)), x(h, "error", () => this.setError(e));
          } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i)) this.setItem(e, Re("iframe", {
            src: i,
            allowfullscreen: "",
            class: "uk-lightbox-iframe",
            ...r
          }));else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) this.setItem(e, Re("iframe", {
            src: `https://www.youtube${a[1] || ""}.com/embed/${a[2]}${a[3] ? `?${a[3]}` : ""}`,
            width: 1920,
            height: 1080,
            ...l,
            ...r
          }));else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) try {
            const {
              height: h,
              width: u
            } = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, {
              credentials: "omit"
            })).json();
            this.setItem(e, Re("iframe", {
              src: `https://player.vimeo.com/video/${a[1]}${a[2] ? `?${a[2]}` : ""}`,
              width: u,
              height: h,
              ...l,
              ...r
            }));
          } catch {
            this.setError(e);
          }
        }
      }],
      methods: {
        loadItem() {
          let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;
          const e = this.getItem(t);
          this.getSlide(e).childElementCount || v(this.$el, "itemload", [e]);
        },
        getItem() {
          let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;
          return this.items[rt(t, this.slides)];
        },
        setItem(t, e) {
          v(this.$el, "itemloaded", [this, Nt(this.getSlide(t), e)]);
        },
        getSlide(t) {
          return this.slides[this.items.indexOf(t)];
        },
        setError(t) {
          this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },
        showControls() {
          clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), y(this.$el, "uk-active", "uk-transition-active");
        },
        hideControls() {
          M(this.$el, "uk-active", "uk-transition-active");
        }
      }
    };
  function Re(t, e) {
    const i = zt(`<${t}>`);
    return p(i, e), i;
  }
  var dh = {
    install: ph,
    props: {
      toggle: String
    },
    data: {
      toggle: "a"
    },
    computed: {
      toggles(_ref123, e) {
        let {
          toggle: t
        } = _ref123;
        return z(t, e);
      }
    },
    watch: {
      toggles(t) {
        this.hide();
        for (const e of t) G(e, "a") && p(e, "role", "button");
      }
    },
    disconnected() {
      this.hide();
    },
    events: {
      name: "click",
      delegate() {
        return `${this.toggle}:not(.uk-disabled)`;
      },
      handler(t) {
        t.preventDefault(), this.show(t.current);
      }
    },
    methods: {
      show(t) {
        const e = _s(this.toggles.map(go), "source");
        if (ee(t)) {
          const {
            source: i
          } = go(t);
          t = xt(e, _ref124 => {
            let {
              source: s
            } = _ref124;
            return i === s;
          });
        }
        return this.panel = this.panel || this.$create("lightboxPanel", {
          ...this.$props,
          items: e
        }), x(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t);
      },
      hide() {
        var t;
        return (t = this.panel) == null ? void 0 : t.hide();
      }
    }
  };
  function ph(t, e) {
    t.lightboxPanel || t.component("lightboxPanel", po), wt(e.props, t.component("lightboxPanel").options.props);
  }
  function go(t) {
    const e = {};
    for (const i of ["href", "caption", "type", "poster", "alt", "attrs"]) e[i === "href" ? "source" : i] = tt(t, i);
    return e.attrs = De(e.attrs), e;
  }
  var gh = {
    mixins: [He],
    functional: !0,
    args: ["message", "status"],
    data: {
      message: "",
      status: "",
      timeout: 5e3,
      group: null,
      pos: "top-center",
      clsContainer: "uk-notification",
      clsClose: "uk-notification-close",
      clsMsg: "uk-notification-message"
    },
    install: mh,
    computed: {
      marginProp(_ref125) {
        let {
          pos: t
        } = _ref125;
        return `margin${ot(t, "top") ? "Top" : "Bottom"}`;
      },
      startProps() {
        return {
          opacity: 0,
          [this.marginProp]: -this.$el.offsetHeight
        };
      }
    },
    created() {
      const t = `${this.clsContainer}-${this.pos}`;
      let e = w(`.${t}`, this.container);
      (!e || !R(e)) && (e = L(this.container, `<div class="${this.clsContainer} ${t}"></div>`)), this.$mount(L(e, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`));
    },
    async connected() {
      const t = $(c(this.$el, this.marginProp));
      await E.start(c(this.$el, this.startProps), {
        opacity: 1,
        [this.marginProp]: t
      }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
    },
    events: {
      click(t) {
        U(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close();
      },
      [Rt]() {
        this.timer && clearTimeout(this.timer);
      },
      [fe]() {
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      }
    },
    methods: {
      async close(t) {
        const e = i => {
          const s = O(i);
          v(i, "close", [this]), lt(i), s != null && s.hasChildNodes() || lt(s);
        };
        this.timer && clearTimeout(this.timer), t || (await E.start(this.$el, this.startProps)), e(this.$el);
      }
    }
  };
  function mh(t) {
    t.notification.closeAll = function (e, i) {
      Ct(document.body, s => {
        const n = t.getComponent(s, "notification");
        n && (!e || e === n.group) && n.close(i);
      });
    };
  }
  const Ci = {
      x: Ti,
      y: Ti,
      rotate: Ti,
      scale: Ti,
      color: Is,
      backgroundColor: Is,
      borderColor: Is,
      blur: Xt,
      hue: Xt,
      fopacity: Xt,
      grayscale: Xt,
      invert: Xt,
      saturate: Xt,
      sepia: Xt,
      opacity: wh,
      stroke: bh,
      bgx: wo,
      bgy: wo
    },
    {
      keys: mo
    } = Object;
  var vo = {
    mixins: [ki],
    props: yo(mo(Ci), "list"),
    data: yo(mo(Ci), void 0),
    computed: {
      props(t, e) {
        const i = {};
        for (const n in t) n in Ci && !Y(t[n]) && (i[n] = t[n].slice());
        const s = {};
        for (const n in i) s[n] = Ci[n](n, e, i[n], i);
        return s;
      }
    },
    events: {
      load() {
        this.$emit();
      }
    },
    methods: {
      reset() {
        for (const t in this.getCss(0)) c(this.$el, t, "");
      },
      getCss(t) {
        const e = {
          transform: "",
          filter: ""
        };
        for (const i in this.props) this.props[i](e, Z(t));
        return e.willChange = Object.keys(e).filter(i => e[i] !== "").map(ei).join(","), e;
      }
    }
  };
  function Ti(t, e, i) {
    let s = Pi(i) || {
        x: "px",
        y: "px",
        rotate: "deg"
      }[t] || "",
      n;
    return t === "x" || t === "y" ? (t = `translate${Tt(t)}`, n = o => $($(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", n = o => Pi([o]) ? ht(o, "width", e, !0) / e.offsetWidth : o), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = ve(i, n), (o, r) => {
      o.transform += ` ${t}(${je(i, r)}${s})`;
    };
  }
  function Is(t, e, i) {
    return i.length === 1 && i.unshift(qe(e, t, "")), i = ve(i, s => vh(e, s)), (s, n) => {
      const [o, r, a] = xo(i, n),
        l = o.map((h, u) => (h += a * (r[u] - h), u === 3 ? $(h) : parseInt(h, 10))).join(",");
      s[t] = `rgba(${l})`;
    };
  }
  function vh(t, e) {
    return qe(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map($);
  }
  function Xt(t, e, i) {
    i.length === 1 && i.unshift(0);
    const s = Pi(i) || {
      blur: "px",
      hue: "deg"
    }[t] || "%";
    return t = {
      fopacity: "opacity",
      hue: "hue-rotate"
    }[t] || t, i = ve(i), (n, o) => {
      const r = je(i, o);
      n.filter += ` ${t}(${r + s})`;
    };
  }
  function wh(t, e, i) {
    return i.length === 1 && i.unshift(qe(e, t, "")), i = ve(i), (s, n) => {
      s[t] = je(i, n);
    };
  }
  function bh(t, e, i) {
    i.length === 1 && i.unshift(0);
    const s = Pi(i),
      n = Gn(e);
    return i = ve(i.reverse(), o => (o = $(o), s === "%" ? o * n / 100 : o)), i.some(_ref126 => {
      let [o] = _ref126;
      return o;
    }) ? (c(e, "strokeDasharray", n), (o, r) => {
      o.strokeDashoffset = je(i, r);
    }) : S;
  }
  function wo(t, e, i, s) {
    i.length === 1 && i.unshift(0);
    const n = t === "bgy" ? "height" : "width";
    s[t] = ve(i, a => ht(a, n, e));
    const o = ["bgx", "bgy"].filter(a => a in s);
    if (o.length === 2 && t === "bgx") return S;
    if (qe(e, "backgroundSize", "") === "cover") return $h(t, e, i, s);
    const r = {};
    for (const a of o) r[a] = bo(e, a);
    return $o(o, r, s);
  }
  function $h(t, e, i, s) {
    const n = xh(e);
    if (!n.width) return S;
    const o = {
        width: e.offsetWidth,
        height: e.offsetHeight
      },
      r = ["bgx", "bgy"].filter(u => u in s),
      a = {};
    for (const u of r) {
      const f = s[u].map(_ref127 => {
          let [F] = _ref127;
          return F;
        }),
        d = Math.min(...f),
        g = Math.max(...f),
        A = f.indexOf(d) < f.indexOf(g),
        N = g - d;
      a[u] = `${(A ? -N : 0) - (A ? d : g)}px`, o[u === "bgy" ? "height" : "width"] += N;
    }
    const l = Qe.cover(n, o);
    for (const u of r) {
      const f = u === "bgy" ? "height" : "width",
        d = l[f] - o[f];
      a[u] = `max(${bo(e, u)},-${d}px) + ${a[u]}`;
    }
    const h = $o(r, a, s);
    return (u, f) => {
      h(u, f), u.backgroundSize = `${l.width}px ${l.height}px`, u.backgroundRepeat = "no-repeat";
    };
  }
  function bo(t, e) {
    return qe(t, `background-position-${e.substr(-1)}`, "");
  }
  function $o(t, e, i) {
    return function (s, n) {
      for (const o of t) {
        const r = je(i[o], n);
        s[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${r}px)`;
      }
    };
  }
  const Ei = {};
  function xh(t) {
    const e = c(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
    if (Ei[e]) return Ei[e];
    const i = new Image();
    return e && (i.src = e, !i.naturalWidth) ? (i.onload = () => {
      Ei[e] = Cs(i), v(t, Mt("load", !1));
    }, Cs(i)) : Ei[e] = Cs(i);
  }
  function Cs(t) {
    return {
      width: t.naturalWidth,
      height: t.naturalHeight
    };
  }
  function ve(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $;
    const i = [],
      {
        length: s
      } = t;
    let n = 0;
    for (let o = 0; o < s; o++) {
      let [r, a] = B(t[o]) ? t[o].trim().split(/ (?![^(]*\))/) : [t[o]];
      if (r = e(r), a = a ? $(a) / 100 : null, o === 0 ? a === null ? a = 0 : a && i.push([r, 0]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([r, a]), a = 1)), i.push([r, a]), a === null) n++;else if (n) {
        const l = i[o - n - 1][1],
          h = (a - l) / (n + 1);
        for (let u = n; u > 0; u--) i[o - u][1] = l + h * (n - u + 1);
        n = 0;
      }
    }
    return i;
  }
  function xo(t, e) {
    const i = xt(t.slice(1), _ref128 => {
      let [, s] = _ref128;
      return e <= s;
    }) + 1;
    return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])];
  }
  function je(t, e) {
    const [i, s, n] = xo(t, e);
    return Xe(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s;
  }
  const yh = /^-?\d+(\S+)?/;
  function Pi(t, e) {
    var i;
    for (const s of t) {
      const n = (i = s.match) == null ? void 0 : i.call(s, yh);
      if (n) return n[1];
    }
    return e;
  }
  function qe(t, e, i) {
    const s = t.style[e],
      n = c(c(t, e, i), e);
    return t.style[e] = s, n;
  }
  function yo(t, e) {
    return t.reduce((i, s) => (i[s] = e, i), {});
  }
  var kh = {
    mixins: [vo],
    props: {
      target: String,
      viewport: Number,
      easing: Number,
      start: String,
      end: String
    },
    data: {
      target: !1,
      viewport: 1,
      easing: 1,
      start: 0,
      end: 0
    },
    computed: {
      target(_ref129, e) {
        let {
          target: t
        } = _ref129;
        return ko(t && at(t, e) || e);
      },
      start(_ref130) {
        let {
          start: t
        } = _ref130;
        return ht(t, "height", this.target, !0);
      },
      end(_ref131) {
        let {
          end: t,
          viewport: e
        } = _ref131;
        return ht(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, !0);
      }
    },
    observe: [pt({
      target: _ref132 => {
        let {
          $el: t,
          target: e
        } = _ref132;
        return [t, e, _t(e, !0)];
      }
    }), mi(), In()],
    update: {
      read(_ref133, e) {
        let {
          percent: t
        } = _ref133;
        if (e.has("scroll") || (t = !1), !R(this.$el)) return !1;
        if (!this.matchMedia) return;
        const i = t;
        return t = Sh(os(this.target, this.start, this.end), this.easing), {
          percent: t,
          style: i === t ? !1 : this.getCss(t)
        };
      },
      write(_ref134) {
        let {
          style: t
        } = _ref134;
        if (!this.matchMedia) {
          this.reset();
          return;
        }
        t && c(this.$el, t);
      },
      events: ["scroll", "resize"]
    }
  };
  function Sh(t, e) {
    return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
  }
  function ko(t) {
    return t ? "offsetTop" in t ? t : ko(O(t)) : document.documentElement;
  }
  var So = {
      update: {
        write() {
          if (this.stack.length || this.dragging) return;
          const t = this.getValidIndex(this.index);
          !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index);
        },
        events: ["resize"]
      }
    },
    Io = {
      observe: ze({
        target: _ref135 => {
          let {
            slides: t
          } = _ref135;
          return t;
        },
        targets: t => t.getAdjacentSlides()
      })
    };
  function Ih(t, e, i, _ref136) {
    let {
      center: s,
      easing: n,
      list: o
    } = _ref136;
    const r = t ? Ue(t, o, s) : Ue(e, o, s) + b(e).width * i,
      a = e ? Ue(e, o, s) : r + b(t).width * i * (X ? -1 : 1);
    let l;
    return {
      dir: i,
      show(h) {
        let u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        let f = arguments.length > 2 ? arguments[2] : undefined;
        const d = f ? "linear" : n;
        return h -= Math.round(h * Z(u, -1, 1)), this.translate(u), u = t ? u : Z(u, 0, 1), Ts(this.getItemIn(), "itemin", {
          percent: u,
          duration: h,
          timing: d,
          dir: i
        }), t && Ts(this.getItemIn(!0), "itemout", {
          percent: 1 - u,
          duration: h,
          timing: d,
          dir: i
        }), new Promise(g => {
          l || (l = g), E.start(o, {
            transform: W(-a * (X ? -1 : 1), "px")
          }, h, d).then(l, S);
        });
      },
      cancel() {
        return E.cancel(o);
      },
      reset() {
        c(o, "transform", "");
      },
      async forward(h) {
        let u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.percent();
        return await this.cancel(), this.show(h, u, !0);
      },
      translate(h) {
        const u = this.getDistance() * i * (X ? -1 : 1);
        c(o, "transform", W(Z(-a + (u - u * h), -_i(o), b(o).width) * (X ? -1 : 1), "px"));
        const f = this.getActives(),
          d = this.getItemIn(),
          g = this.getItemIn(!0);
        h = t ? Z(h, -1, 1) : 0;
        for (const A of T(o)) {
          const N = m(f, A),
            F = A === d,
            Ot = A === g,
            Es = F || !Ot && (N || i * (X ? -1 : 1) === -1 ^ Ai(A, o) > Ai(t || e));
          Ts(A, `itemtranslate${Es ? "in" : "out"}`, {
            dir: i,
            percent: Ot ? 1 - h : F ? h : N ? 1 : 0
          });
        }
      },
      percent() {
        return Math.abs((c(o, "transform").split(",")[4] * (X ? -1 : 1) + r) / (a - r));
      },
      getDistance() {
        return Math.abs(a - r);
      },
      getItemIn() {
        let h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        let u = this.getActives(),
          f = To(o, Ue(e || t, o, s));
        if (h) {
          const d = u;
          u = f, f = d;
        }
        return f[xt(f, d => !m(u, d))];
      },
      getActives() {
        return To(o, Ue(t || e, o, s));
      }
    };
  }
  function Ue(t, e, i) {
    const s = Ai(t, e);
    return i ? s - Ch(t, e) : Math.min(s, Co(e));
  }
  function Co(t) {
    return Math.max(0, _i(t) - b(t).width);
  }
  function _i(t) {
    return Bt(T(t), e => b(e).width);
  }
  function Ch(t, e) {
    return b(e).width / 2 - b(t).width / 2;
  }
  function Ai(t, e) {
    return t && (ri(t).left + (X ? b(t).width - b(e).width : 0)) * (X ? -1 : 1) || 0;
  }
  function To(t, e) {
    e -= 1;
    const i = b(t).width,
      s = e + i + 2;
    return T(t).filter(n => {
      const o = Ai(n, t),
        r = o + Math.min(b(n).width, i);
      return o >= e && r <= s;
    });
  }
  function Ts(t, e, i) {
    v(t, Mt(e, !1, !1, i));
  }
  var Th = {
    mixins: [st, co, So, Io],
    props: {
      center: Boolean,
      sets: Boolean
    },
    data: {
      center: !1,
      sets: !1,
      attrItem: "uk-slider-item",
      selList: ".uk-slider-items",
      selNav: ".uk-slider-nav",
      clsContainer: "uk-slider-container",
      Transitioner: Ih
    },
    computed: {
      avgWidth() {
        return _i(this.list) / this.length;
      },
      finite(_ref137) {
        let {
          finite: t
        } = _ref137;
        return t || Eh(this.list, this.center);
      },
      maxIndex() {
        if (!this.finite || this.center && !this.sets) return this.length - 1;
        if (this.center) return ne(this.sets);
        let t = 0;
        const e = Co(this.list),
          i = xt(this.slides, s => {
            if (t >= e) return !0;
            t += b(s).width;
          });
        return ~i ? i : this.length - 1;
      },
      sets(_ref138) {
        let {
          sets: t
        } = _ref138;
        if (!t) return;
        let e = 0;
        const i = [],
          s = b(this.list).width;
        for (let n = 0; n < this.length; n++) {
          const o = b(this.slides[n]).width;
          e + o > s && (e = 0), this.center ? e < s / 2 && e + o + b(rt(+n + 1, this.slides)).width / 2 > s / 2 && (i.push(+n), e = s / 2 - o / 2) : e === 0 && i.push(Math.min(+n, this.maxIndex)), e += o;
        }
        if (i.length) return i;
      },
      transitionOptions() {
        return {
          center: this.center,
          list: this.list
        };
      },
      slides() {
        return T(this.list).filter(R);
      }
    },
    connected() {
      q(this.$el, this.clsContainer, !w(`.${this.clsContainer}`, this.$el));
    },
    observe: pt({
      target: _ref139 => {
        let {
          slides: t
        } = _ref139;
        return t;
      }
    }),
    update: {
      write() {
        for (const t of this.navItems) {
          const e = kt(tt(t, this.attrItem));
          e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !m(this.sets, e));
        }
        this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)), this.updateActiveClasses();
      },
      events: ["resize"]
    },
    events: {
      beforeitemshow(t) {
        !this.dragging && this.sets && this.stack.length < 2 && !m(this.sets, this.index) && (this.index = this.getValidIndex());
        const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
        if (!this.dragging && e > 1) {
          for (let s = 0; s < e; s++) this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
          t.preventDefault();
          return;
        }
        const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
        this.duration = uo(this.avgWidth / this.velocity) * (b(this.slides[i]).width / this.avgWidth), this.reorder();
      },
      itemshow() {
        ~this.prevIndex && y(this._getTransitioner().getItemIn(), this.clsActive);
      },
      itemshown() {
        this.updateActiveClasses();
      }
    },
    methods: {
      reorder() {
        if (this.finite) {
          c(this.slides, "order", "");
          return;
        }
        const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
        if (this.slides.forEach((n, o) => c(n, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")), !this.center) return;
        const e = this.slides[t];
        let i = b(this.list).width / 2 - b(e).width / 2,
          s = 0;
        for (; i > 0;) {
          const n = this.getIndex(--s + t, t),
            o = this.slides[n];
          c(o, "order", n > t ? -2 : -1), i -= b(o).width;
        }
      },
      updateActiveClasses() {
        const t = this._getTransitioner(this.index).getActives(),
          e = [this.clsActive, (!this.sets || m(this.sets, $(this.index))) && this.clsActivated || ""];
        for (const i of this.slides) {
          const s = m(t, i);
          q(i, e, s), p(i, "aria-hidden", !s);
          for (const n of z(Se, i)) vt(n, "_tabindex") || (n._tabindex = p(n, "tabindex")), p(n, "tabindex", s ? n._tabindex : -1);
        }
      },
      getValidIndex() {
        let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;
        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.prevIndex;
        if (t = this.getIndex(t, e), !this.sets) return t;
        let i;
        do {
          if (m(this.sets, t)) return t;
          i = t, t = this.getIndex(t + this.dir, e);
        } while (t !== i);
        return t;
      },
      getAdjacentSlides() {
        const {
            width: t
          } = b(this.list),
          e = -t,
          i = t * 2,
          s = b(this.slides[this.index]).width,
          n = this.center ? t / 2 - s / 2 : 0,
          o = new Set();
        for (const r of [-1, 1]) {
          let a = n + (r > 0 ? s : 0),
            l = 0;
          do {
            const h = this.slides[this.getIndex(this.index + r + l++ * r)];
            a += b(h).width * r, o.add(h);
          } while (this.length > l && a > e && a < i);
        }
        return Array.from(o);
      }
    }
  };
  function Eh(t, e) {
    if (!t || t.length < 2) return !0;
    const {
      width: i
    } = b(t);
    if (!e) return Math.ceil(_i(t)) < Math.trunc(i + Ph(t));
    const s = T(t),
      n = Math.trunc(i / 2);
    for (const o in s) {
      const r = s[o],
        a = b(r).width,
        l = new Set([r]);
      let h = 0;
      for (const u of [-1, 1]) {
        let f = a / 2,
          d = 0;
        for (; f < n;) {
          const g = s[rt(+o + u + d++ * u, s)];
          if (l.has(g)) return !0;
          f += b(g).width, l.add(g);
        }
        h = Math.max(h, a / 2 + b(s[rt(+o + u, s)]).width / 2 - (f - n));
      }
      if (h > Bt(s.filter(u => !l.has(u)), u => b(u).width)) return !0;
    }
    return !1;
  }
  function Ph(t) {
    return Math.max(0, ...T(t).map(e => b(e).width));
  }
  var Eo = {
    mixins: [vo],
    data: {
      selItem: "!li"
    },
    beforeConnect() {
      this.item = at(this.selItem, this.$el);
    },
    disconnected() {
      this.item = null;
    },
    events: [{
      name: "itemin itemout",
      self: !0,
      el() {
        return this.item;
      },
      handler(_ref140) {
        let {
          type: t,
          detail: {
            percent: e,
            duration: i,
            timing: s,
            dir: n
          }
        } = _ref140;
        J.read(() => {
          if (!this.matchMedia) return;
          const o = this.getCss(_o(t, n, e)),
            r = this.getCss(Po(t) ? .5 : n > 0 ? 1 : 0);
          J.write(() => {
            c(this.$el, o), E.start(this.$el, r, i, s).catch(S);
          });
        });
      }
    }, {
      name: "transitioncanceled transitionend",
      self: !0,
      el() {
        return this.item;
      },
      handler() {
        E.cancel(this.$el);
      }
    }, {
      name: "itemtranslatein itemtranslateout",
      self: !0,
      el() {
        return this.item;
      },
      handler(_ref141) {
        let {
          type: t,
          detail: {
            percent: e,
            dir: i
          }
        } = _ref141;
        J.read(() => {
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          const s = this.getCss(_o(t, i, e));
          J.write(() => c(this.$el, s));
        });
      }
    }]
  };
  function Po(t) {
    return Zt(t, "in");
  }
  function _o(t, e, i) {
    return i /= 2, Po(t) ^ e < 0 ? i : 1 - i;
  }
  var _h = {
      ...ys,
      fade: {
        show() {
          return [{
            opacity: 0,
            zIndex: 0
          }, {
            zIndex: -1
          }];
        },
        percent(t) {
          return 1 - c(t, "opacity");
        },
        translate(t) {
          return [{
            opacity: 1 - t,
            zIndex: 0
          }, {
            zIndex: -1
          }];
        }
      },
      scale: {
        show() {
          return [{
            opacity: 0,
            transform: me(1 + .5),
            zIndex: 0
          }, {
            zIndex: -1
          }];
        },
        percent(t) {
          return 1 - c(t, "opacity");
        },
        translate(t) {
          return [{
            opacity: 1 - t,
            transform: me(1 + .5 * t),
            zIndex: 0
          }, {
            zIndex: -1
          }];
        }
      },
      pull: {
        show(t) {
          return t < 0 ? [{
            transform: W(30),
            zIndex: -1
          }, {
            transform: W(),
            zIndex: 0
          }] : [{
            transform: W(-100),
            zIndex: 0
          }, {
            transform: W(),
            zIndex: -1
          }];
        },
        percent(t, e, i) {
          return i < 0 ? 1 - We(e) : We(t);
        },
        translate(t, e) {
          return e < 0 ? [{
            transform: W(30 * t),
            zIndex: -1
          }, {
            transform: W(-100 * (1 - t)),
            zIndex: 0
          }] : [{
            transform: W(-t * 100),
            zIndex: 0
          }, {
            transform: W(30 * (1 - t)),
            zIndex: -1
          }];
        }
      },
      push: {
        show(t) {
          return t < 0 ? [{
            transform: W(100),
            zIndex: 0
          }, {
            transform: W(),
            zIndex: -1
          }] : [{
            transform: W(-30),
            zIndex: -1
          }, {
            transform: W(),
            zIndex: 0
          }];
        },
        percent(t, e, i) {
          return i > 0 ? 1 - We(e) : We(t);
        },
        translate(t, e) {
          return e < 0 ? [{
            transform: W(t * 100),
            zIndex: 0
          }, {
            transform: W(-30 * (1 - t)),
            zIndex: -1
          }] : [{
            transform: W(-30 * t),
            zIndex: -1
          }, {
            transform: W(100 * (1 - t)),
            zIndex: 0
          }];
        }
      }
    },
    Ah = {
      mixins: [st, fo, So, Io],
      props: {
        ratio: String,
        minHeight: Number,
        maxHeight: Number
      },
      data: {
        ratio: "16:9",
        minHeight: !1,
        maxHeight: !1,
        selList: ".uk-slideshow-items",
        attrItem: "uk-slideshow-item",
        selNav: ".uk-slideshow-nav",
        Animations: _h
      },
      update: {
        read() {
          if (!this.list) return !1;
          let [t, e] = this.ratio.split(":").map(Number);
          return e = e * this.list.offsetWidth / t || 0, this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), {
            height: e - he(this.list, "height", "content-box")
          };
        },
        write(_ref142) {
          let {
            height: t
          } = _ref142;
          t > 0 && c(this.list, "minHeight", t);
        },
        events: ["resize"]
      },
      methods: {
        getAdjacentSlides() {
          return [1, -1].map(t => this.slides[this.getIndex(this.index + t)]);
        }
      }
    },
    Oh = {
      mixins: [st, no],
      props: {
        group: String,
        threshold: Number,
        clsItem: String,
        clsPlaceholder: String,
        clsDrag: String,
        clsDragState: String,
        clsBase: String,
        clsNoDrag: String,
        clsEmpty: String,
        clsCustom: String,
        handle: String
      },
      data: {
        group: !1,
        threshold: 5,
        clsItem: "uk-sortable-item",
        clsPlaceholder: "uk-sortable-placeholder",
        clsDrag: "uk-sortable-drag",
        clsDragState: "uk-drag",
        clsBase: "uk-sortable",
        clsNoDrag: "uk-sortable-nodrag",
        clsEmpty: "uk-sortable-empty",
        clsCustom: "",
        handle: !1,
        pos: {}
      },
      created() {
        for (const t of ["init", "start", "move", "end"]) {
          const e = this[t];
          this[t] = i => {
            wt(this.pos, le(i)), e(i);
          };
        }
      },
      events: {
        name: mt,
        passive: !1,
        handler: "init"
      },
      computed: {
        target() {
          return (this.$el.tBodies || [this.$el])[0];
        },
        items() {
          return T(this.target);
        },
        isEmpty() {
          return xe(this.items);
        },
        handles(_ref143, e) {
          let {
            handle: t
          } = _ref143;
          return t ? z(t, e) : this.items;
        }
      },
      watch: {
        isEmpty(t) {
          q(this.target, this.clsEmpty, t);
        },
        handles(t, e) {
          c(e, {
            touchAction: "",
            userSelect: ""
          }), c(t, {
            touchAction: Wt ? "none" : "",
            userSelect: "none"
          });
        }
      },
      update: {
        write(t) {
          if (!this.drag || !O(this.placeholder)) return;
          const {
            pos: {
              x: e,
              y: i
            },
            origin: {
              offsetTop: s,
              offsetLeft: n
            },
            placeholder: o
          } = this;
          c(this.drag, {
            top: i - s,
            left: e - n
          });
          const r = this.getSortable(document.elementFromPoint(e, i));
          if (!r) return;
          const {
            items: a
          } = r;
          if (a.some(E.inProgress)) return;
          const l = Nh(a, {
            x: e,
            y: i
          });
          if (a.length && (!l || l === o)) return;
          const h = this.getSortable(o),
            u = zh(r.target, l, o, e, i, r === h && t.moved !== l);
          u !== !1 && (u && o === u || (r !== h ? (h.remove(o), t.moved = l) : delete t.moved, r.insert(o, u), this.touched.add(r)));
        },
        events: ["move"]
      },
      methods: {
        init(t) {
          const {
              target: e,
              button: i,
              defaultPrevented: s
            } = t,
            [n] = this.items.filter(o => D(e, o));
          !n || s || i > 0 || Wi(e) || D(e, `.${this.clsNoDrag}`) || this.handle && !D(e, this.handle) || (t.preventDefault(), this.touched = new Set([this]), this.placeholder = n, this.origin = {
            target: e,
            index: re(n),
            ...this.pos
          }, x(document, li, this.move), x(document, Pt, this.end), this.threshold || this.start(t));
        },
        start(t) {
          this.drag = Mh(this.$container, this.placeholder);
          const {
            left: e,
            top: i
          } = this.placeholder.getBoundingClientRect();
          wt(this.origin, {
            offsetLeft: this.pos.x - e,
            offsetTop: this.pos.y - i
          }), y(this.drag, this.clsDrag, this.clsCustom), y(this.placeholder, this.clsPlaceholder), y(this.items, this.clsItem), y(document.documentElement, this.clsDragState), v(this.$el, "start", [this, this.placeholder]), Bh(this.pos), this.move(t);
        },
        move(t) {
          this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
        },
        end() {
          if (Dt(document, li, this.move), Dt(document, Pt, this.end), !this.drag) return;
          Dh();
          const t = this.getSortable(this.placeholder);
          this === t ? this.origin.index !== re(this.placeholder) && v(this.$el, "moved", [this, this.placeholder]) : (v(t.$el, "added", [t, this.placeholder]), v(this.$el, "removed", [this, this.placeholder])), v(this.$el, "stop", [this, this.placeholder]), lt(this.drag), this.drag = null;
          for (const {
            clsPlaceholder: e,
            clsItem: i
          } of this.touched) for (const s of this.touched) M(s.items, e, i);
          this.touched = null, M(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          y(this.items, this.clsItem);
          const i = () => e ? ii(e, t) : L(this.target, t);
          this.animate(i);
        },
        remove(t) {
          D(t, this.target) && this.animate(() => lt(t));
        },
        getSortable(t) {
          do {
            const e = this.$getComponent(t, "sortable");
            if (e && (e === this || this.group !== !1 && e.group === this.group)) return e;
          } while (t = O(t));
        }
      }
    };
  let Ao;
  function Bh(t) {
    let e = Date.now();
    Ao = setInterval(() => {
      let {
        x: i,
        y: s
      } = t;
      s += document.scrollingElement.scrollTop;
      const n = (Date.now() - e) * .3;
      e = Date.now(), de(document.elementFromPoint(i, t.y)).reverse().some(o => {
        let {
          scrollTop: r,
          scrollHeight: a
        } = o;
        const {
          top: l,
          bottom: h,
          height: u
        } = ct(o);
        if (l < s && l + 35 > s) r -= n;else if (h > s && h - 35 < s) r += n;else return;
        if (r > 0 && r < a - u) return o.scrollTop = r, !0;
      });
    }, 15);
  }
  function Dh() {
    clearInterval(Ao);
  }
  function Mh(t, e) {
    let i;
    if (G(e, "li", "tr")) {
      i = w("<div>"), L(i, e.cloneNode(!0).children);
      for (const s of e.getAttributeNames()) p(i, s, e.getAttribute(s));
    } else i = e.cloneNode(!0);
    return L(t, i), c(i, "margin", "0", "important"), c(i, {
      boxSizing: "border-box",
      width: e.offsetWidth,
      height: e.offsetHeight,
      padding: c(e, "padding")
    }), et(i.firstElementChild, et(e.firstElementChild)), i;
  }
  function Nh(t, e) {
    return t[xt(t, i => Ze(e, i.getBoundingClientRect()))];
  }
  function zh(t, e, i, s, n, o) {
    if (!T(t).length) return;
    const r = e.getBoundingClientRect();
    if (!o) return Fh(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
    const a = i.getBoundingClientRect(),
      l = Oo([r.top, r.bottom], [a.top, a.bottom]),
      [h, u, f, d] = l ? [s, "width", "left", "right"] : [n, "height", "top", "bottom"],
      g = a[u] < r[u] ? r[u] - a[u] : 0;
    return a[f] < r[f] ? g && h < r[f] + g ? !1 : e.nextElementSibling : g && h > r[d] - g ? !1 : e;
  }
  function Fh(t, e) {
    const i = T(t).length === 1;
    i && L(t, e);
    const s = T(t),
      n = s.some((o, r) => {
        const a = o.getBoundingClientRect();
        return s.slice(r + 1).some(l => {
          const h = l.getBoundingClientRect();
          return !Oo([a.left, a.right], [h.left, h.right]);
        });
      });
    return i && lt(e), n;
  }
  function Oo(t, e) {
    return t[1] > e[0] && e[1] > t[0];
  }
  var Hh = {
    mixins: [He, Vt, _n],
    args: "title",
    props: {
      delay: Number,
      title: String
    },
    data: {
      pos: "top",
      title: "",
      delay: 0,
      animation: ["uk-animation-scale-up"],
      duration: 100,
      cls: "uk-active"
    },
    beforeConnect() {
      this.id = At(this, {}), this._hasTitle = $t(this.$el, "title"), p(this.$el, {
        title: "",
        "aria-describedby": this.id
      }), Lh(this.$el);
    },
    disconnected() {
      this.hide(), p(this.$el, "title") || p(this.$el, "title", this._hasTitle ? this.title : null);
    },
    methods: {
      show() {
        this.isToggled(this.tooltip || null) || !this.title || (clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay));
      },
      async hide() {
        C(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && (await this.toggleElement(this.tooltip, !1, !1)), lt(this.tooltip), this.tooltip = null);
      },
      async _show() {
        this.tooltip = L(this.container, `<div id="${this.id}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${this.title}</div> </div>`), x(this.tooltip, "toggled", (t, e) => {
          if (!e) return;
          const i = () => this.positionAt(this.tooltip, this.$el);
          i();
          const [s, n] = Wh(this.tooltip, this.$el, this.pos);
          this.origin = this.axis === "y" ? `${ai(s)}-${n}` : `${n}-${ai(s)}`;
          const o = [j(document, `keydown ${mt}`, this.hide, !1, r => r.type === mt && !D(r.target, this.$el) || r.type === "keydown" && r.keyCode === I.ESC), x([document, ...jt(this.$el)], "scroll", i, {
            passive: !0
          })];
          j(this.tooltip, "hide", () => o.forEach(r => r()), {
            self: !0
          });
        }), (await this.toggleElement(this.tooltip, !0)) || this.hide();
      }
    },
    events: {
      focus: "show",
      blur: "hide",
      [`${Rt} ${fe}`](t) {
        It(t) || this[t.type === Rt ? "show" : "hide"]();
      },
      [mt](t) {
        It(t) && this.show();
      }
    }
  };
  function Lh(t) {
    ti(t) || p(t, "tabindex", "0");
  }
  function Wh(t, e, _ref144) {
    let [i, s] = _ref144;
    const n = _(t),
      o = _(e),
      r = [["left", "right"], ["top", "bottom"]];
    for (const l of r) {
      if (n[l[0]] >= o[l[1]]) {
        i = l[1];
        break;
      }
      if (n[l[1]] <= o[l[0]]) {
        i = l[0];
        break;
      }
    }
    const a = m(r[0], i) ? r[1] : r[0];
    return n[a[0]] === o[a[0]] ? s = a[0] : n[a[1]] === o[a[1]] ? s = a[1] : s = "center", [i, s];
  }
  var Rh = {
    mixins: [bi],
    i18n: {
      invalidMime: "Invalid File Type: %s",
      invalidName: "Invalid File Name: %s",
      invalidSize: "Invalid File Size: %s Kilobytes Max"
    },
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String
    },
    data: {
      allow: !1,
      clsDragover: "uk-dragover",
      concurrent: 1,
      maxSize: 0,
      method: "POST",
      mime: !1,
      multiple: !1,
      name: "files[]",
      params: {},
      type: "",
      url: "",
      abort: S,
      beforeAll: S,
      beforeSend: S,
      complete: S,
      completeAll: S,
      error: S,
      fail: S,
      load: S,
      loadEnd: S,
      loadStart: S,
      progress: S
    },
    events: {
      change(t) {
        C(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
      },
      drop(t) {
        Oi(t);
        const e = t.dataTransfer;
        e != null && e.files && (M(this.$el, this.clsDragover), this.upload(e.files));
      },
      dragenter(t) {
        Oi(t);
      },
      dragover(t) {
        Oi(t), y(this.$el, this.clsDragover);
      },
      dragleave(t) {
        Oi(t), M(this.$el, this.clsDragover);
      }
    },
    methods: {
      async upload(t) {
        if (t = Qt(t), !t.length) return;
        v(this.$el, "upload", [t]);
        for (const s of t) {
          if (this.maxSize && this.maxSize * 1e3 < s.size) {
            this.fail(this.t("invalidSize", this.maxSize));
            return;
          }
          if (this.allow && !Bo(this.allow, s.name)) {
            this.fail(this.t("invalidName", this.allow));
            return;
          }
          if (this.mime && !Bo(this.mime, s.type)) {
            this.fail(this.t("invalidMime", this.mime));
            return;
          }
        }
        this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
        const e = jh(t, this.concurrent),
          i = async s => {
            const n = new FormData();
            s.forEach(o => n.append(this.name, o));
            for (const o in this.params) n.append(o, this.params[o]);
            try {
              const o = await qh(this.url, {
                data: n,
                method: this.method,
                responseType: this.type,
                beforeSend: r => {
                  const {
                    xhr: a
                  } = r;
                  x(a.upload, "progress", this.progress);
                  for (const l of ["loadStart", "load", "loadEnd", "abort"]) x(a, l.toLowerCase(), this[l]);
                  return this.beforeSend(r);
                }
              });
              this.complete(o), e.length ? await i(e.shift()) : this.completeAll(o);
            } catch (o) {
              this.error(o);
            }
          };
        await i(e.shift());
      }
    }
  };
  function Bo(t, e) {
    return e.match(new RegExp(`^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`, "i"));
  }
  function jh(t, e) {
    const i = [];
    for (let s = 0; s < t.length; s += e) i.push(t.slice(s, s + e));
    return i;
  }
  function Oi(t) {
    t.preventDefault(), t.stopPropagation();
  }
  function qh(t, e) {
    const i = {
      data: null,
      method: "GET",
      headers: {},
      xhr: new XMLHttpRequest(),
      beforeSend: S,
      responseType: "",
      ...e
    };
    return Promise.resolve().then(() => i.beforeSend(i)).then(() => Uh(t, i));
  }
  function Uh(t, e) {
    return new Promise((i, s) => {
      const {
        xhr: n
      } = e;
      for (const o in e) if (o in n) try {
        n[o] = e[o];
      } catch {}
      n.open(e.method.toUpperCase(), t);
      for (const o in e.headers) n.setRequestHeader(o, e.headers[o]);
      x(n, "load", () => {
        n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(wt(Error(n.statusText), {
          xhr: n,
          status: n.status
        }));
      }), x(n, "error", () => s(wt(Error("Network Error"), {
        xhr: n
      }))), x(n, "timeout", () => s(wt(Error("Network Timeout"), {
        xhr: n
      }))), n.send(e.data);
    });
  }
  var Vh = Object.freeze({
    __proto__: null,
    Countdown: Vl,
    Filter: Ql,
    Lightbox: dh,
    LightboxPanel: po,
    Notification: gh,
    Parallax: kh,
    Slider: Th,
    SliderParallax: Eo,
    Slideshow: Ah,
    SlideshowParallax: Eo,
    Sortable: Oh,
    Tooltip: Hh,
    Upload: Rh
  });
  return St(Vh, (t, e) => ft.component(e, t)), ft;
});

/***/ }),

/***/ "./node_modules/just-validate/dist/just-validate.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/just-validate/dist/just-validate.es.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomStyleTagIds: () => (/* binding */ CustomStyleTagIds),
/* harmony export */   GroupRules: () => (/* binding */ GroupRules),
/* harmony export */   Rules: () => (/* binding */ Rules),
/* harmony export */   "default": () => (/* binding */ JustValidate)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const INTEGER_REGEXP = /^-?[0-9]\d*$/;
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
const STRONG_PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isEmpty = (value) => {
  let newVal = value;
  if (typeof value === "string") {
    newVal = value.trim();
  }
  return !newVal;
};
const isEmail = (value) => {
  return EMAIL_REGEXP.test(value);
};
const isLengthMoreThanMax = (value, len) => {
  return value.length > len;
};
const isLengthLessThanMin = (value, len) => {
  return value.length < len;
};
const isNumber = (value) => {
  if (typeof value !== "string") {
    return false;
  }
  return !isNaN(+value) && !isNaN(parseFloat(value));
};
const isInteger = (value) => {
  return INTEGER_REGEXP.test(value);
};
const isPassword = (value) => {
  return PASSWORD_REGEXP.test(value);
};
const isStrongPassword = (value) => {
  return STRONG_PASSWORD_REGEXP.test(value);
};
const isNumberMoreThanMax = (value, len) => {
  return value > len;
};
const isNumberLessThanMin = (value, len) => {
  return value < len;
};
const isInvalidOrEmptyString = (value) => {
  return typeof value !== "string" || value === "";
};
var Rules = /* @__PURE__ */ ((Rules2) => {
  Rules2["Required"] = "required";
  Rules2["Email"] = "email";
  Rules2["MinLength"] = "minLength";
  Rules2["MaxLength"] = "maxLength";
  Rules2["Password"] = "password";
  Rules2["Number"] = "number";
  Rules2["Integer"] = "integer";
  Rules2["MaxNumber"] = "maxNumber";
  Rules2["MinNumber"] = "minNumber";
  Rules2["StrongPassword"] = "strongPassword";
  Rules2["CustomRegexp"] = "customRegexp";
  Rules2["MinFilesCount"] = "minFilesCount";
  Rules2["MaxFilesCount"] = "maxFilesCount";
  Rules2["Files"] = "files";
  return Rules2;
})(Rules || {});
var GroupRules = /* @__PURE__ */ ((GroupRules2) => {
  GroupRules2["Required"] = "required";
  return GroupRules2;
})(GroupRules || {});
var CustomStyleTagIds = /* @__PURE__ */ ((CustomStyleTagIds2) => {
  CustomStyleTagIds2["Label"] = "label";
  CustomStyleTagIds2["LabelArrow"] = "labelArrow";
  return CustomStyleTagIds2;
})(CustomStyleTagIds || {});
const defaultDictionary = [
  {
    key: Rules.Required,
    dict: {
      en: "The field is required"
    }
  },
  {
    key: Rules.Email,
    dict: {
      en: "Email has invalid format"
    }
  },
  {
    key: Rules.MaxLength,
    dict: {
      en: "The field must contain a maximum of :value characters"
    }
  },
  {
    key: Rules.MinLength,
    dict: {
      en: "The field must contain a minimum of :value characters"
    }
  },
  {
    key: Rules.Password,
    dict: {
      en: "Password must contain minimum eight characters, at least one letter and one number"
    }
  },
  {
    key: Rules.StrongPassword,
    dict: {
      en: "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    }
  },
  {
    key: Rules.Number,
    dict: {
      en: "Value should be a number"
    }
  },
  {
    key: Rules.MaxNumber,
    dict: {
      en: "Number should be less or equal than :value"
    }
  },
  {
    key: Rules.MinNumber,
    dict: {
      en: "Number should be more or equal than :value"
    }
  },
  {
    key: Rules.MinFilesCount,
    dict: {
      en: "Files count should be more or equal than :value"
    }
  },
  {
    key: Rules.MaxFilesCount,
    dict: {
      en: "Files count should be less or equal than :value"
    }
  },
  {
    key: Rules.Files,
    dict: {
      en: "Uploaded files have one or several invalid properties (extension/size/type etc)."
    }
  }
];
const DEFAULT_ERROR_FIELD_MESSAGE = "Value is incorrect";
const isPromise = (val) => typeof val === "object" && val !== null && "then" in val && typeof val.then === "function";
const getNodeParents = (el) => {
  let elem = el;
  const els = [];
  while (elem) {
    els.unshift(elem);
    elem = elem.parentNode;
  }
  return els;
};
const getClosestParent = (groups, parents) => {
  const reversedParents = [...parents].reverse();
  for (let i = 0, len = reversedParents.length; i < len; ++i) {
    const parent = reversedParents[i];
    for (const key in groups) {
      const group = groups[key];
      if (group.groupElem === parent) {
        return [key, group];
      }
    }
  }
  return null;
};
const getClassList = (classList) => {
  if (Array.isArray(classList)) {
    return classList.filter((cls) => cls.length > 0);
  }
  if (typeof classList === "string" && classList.trim()) {
    return [...classList.split(" ").filter((cls) => cls.length > 0)];
  }
  return [];
};
const isElement = (element) => {
  return element instanceof Element || element instanceof HTMLDocument;
};
const errorLabelCss = `.just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}`;
const TOOLTIP_ARROW_HEIGHT = 5;
const defaultGlobalConfig = {
  errorFieldStyle: {
    color: "#b81111",
    border: "1px solid #B81111"
  },
  errorFieldCssClass: "just-validate-error-field",
  successFieldCssClass: "just-validate-success-field",
  errorLabelStyle: {
    color: "#b81111"
  },
  errorLabelCssClass: "just-validate-error-label",
  successLabelCssClass: "just-validate-success-label",
  focusInvalidField: true,
  lockForm: true,
  testingMode: false,
  validateBeforeSubmitting: false
};
class JustValidate {
  constructor(form, globalConfig, dictLocale) {
    __publicField(this, "form", null);
    __publicField(this, "fields", {});
    __publicField(this, "groupFields", {});
    __publicField(this, "errors", {});
    __publicField(this, "isValid", false);
    __publicField(this, "isSubmitted", false);
    __publicField(this, "globalConfig", defaultGlobalConfig);
    __publicField(this, "errorLabels", {});
    __publicField(this, "successLabels", {});
    __publicField(this, "eventListeners", []);
    __publicField(this, "dictLocale", defaultDictionary);
    __publicField(this, "currentLocale", "en");
    __publicField(this, "customStyleTags", {});
    __publicField(this, "onSuccessCallback");
    __publicField(this, "onFailCallback");
    __publicField(this, "onValidateCallback");
    __publicField(this, "tooltips", []);
    __publicField(this, "lastScrollPosition");
    __publicField(this, "isScrollTick");
    __publicField(this, "fieldIds", /* @__PURE__ */ new Map());
    __publicField(this, "getKeyByFieldSelector", (field) => {
      return this.fieldIds.get(field);
    });
    __publicField(this, "getFieldSelectorByKey", (key) => {
      for (const [fieldSelector, k] of this.fieldIds) {
        if (key === k) {
          return fieldSelector;
        }
      }
      return void 0;
    });
    __publicField(this, "getCompatibleFields", () => {
      const fields = {};
      Object.keys(this.fields).forEach((key) => {
        let newKey = key;
        const fieldSelector = this.getFieldSelectorByKey(key);
        if (typeof fieldSelector === "string") {
          newKey = fieldSelector;
        }
        fields[newKey] = { ...this.fields[key] };
      });
      return fields;
    });
    __publicField(this, "setKeyByFieldSelector", (field) => {
      if (this.fieldIds.has(field)) {
        return this.fieldIds.get(field);
      }
      const key = String(this.fieldIds.size + 1);
      this.fieldIds.set(field, key);
      return key;
    });
    __publicField(this, "refreshAllTooltips", () => {
      this.tooltips.forEach((item) => {
        item.refresh();
      });
    });
    __publicField(this, "handleDocumentScroll", () => {
      this.lastScrollPosition = window.scrollY;
      if (!this.isScrollTick) {
        window.requestAnimationFrame(() => {
          this.refreshAllTooltips();
          this.isScrollTick = false;
        });
        this.isScrollTick = true;
      }
    });
    __publicField(this, "formSubmitHandler", (ev) => {
      ev.preventDefault();
      this.isSubmitted = true;
      this.validateHandler(ev);
    });
    __publicField(this, "handleFieldChange", (target) => {
      let foundKey;
      for (const key in this.fields) {
        const field = this.fields[key];
        if (field.elem === target) {
          foundKey = key;
          break;
        }
      }
      if (!foundKey) {
        return;
      }
      this.fields[foundKey].touched = true;
      this.validateField(foundKey, true);
    });
    __publicField(this, "handleGroupChange", (target) => {
      let foundKey;
      for (const key in this.groupFields) {
        const group = this.groupFields[key];
        if (group.elems.find((elem) => elem === target)) {
          foundKey = key;
          break;
        }
      }
      if (!foundKey) {
        return;
      }
      this.groupFields[foundKey].touched = true;
      this.validateGroup(foundKey, true);
    });
    __publicField(this, "handlerChange", (ev) => {
      if (!ev.target) {
        return;
      }
      this.handleFieldChange(ev.target);
      this.handleGroupChange(ev.target);
      this.renderErrors();
    });
    this.initialize(form, globalConfig, dictLocale);
  }
  initialize(form, globalConfig, dictLocale) {
    this.form = null;
    this.errors = {};
    this.isValid = false;
    this.isSubmitted = false;
    this.globalConfig = defaultGlobalConfig;
    this.errorLabels = {};
    this.successLabels = {};
    this.eventListeners = [];
    this.customStyleTags = {};
    this.tooltips = [];
    this.currentLocale = "en";
    if (typeof form === "string") {
      const elem = document.querySelector(form);
      if (!elem) {
        throw Error(
          `Form with ${form} selector not found! Please check the form selector`
        );
      }
      this.setForm(elem);
    } else if (form instanceof HTMLFormElement) {
      this.setForm(form);
    } else {
      throw Error(
        `Form selector is not valid. Please specify a string selector or a DOM element.`
      );
    }
    this.globalConfig = { ...defaultGlobalConfig, ...globalConfig };
    if (dictLocale) {
      this.dictLocale = [...dictLocale, ...defaultDictionary];
    }
    if (this.isTooltip()) {
      const styleTag = document.createElement("style");
      styleTag.textContent = errorLabelCss;
      this.customStyleTags[CustomStyleTagIds.Label] = document.head.appendChild(styleTag);
      this.addListener("scroll", document, this.handleDocumentScroll);
    }
  }
  getLocalisedString(rule, ruleValue, customMsg) {
    var _a;
    const search = customMsg != null ? customMsg : rule;
    let localisedStr = (_a = this.dictLocale.find((item) => item.key === search)) == null ? void 0 : _a.dict[this.currentLocale];
    if (!localisedStr) {
      if (customMsg) {
        localisedStr = customMsg;
      }
    }
    if (localisedStr && ruleValue !== void 0) {
      switch (rule) {
        case Rules.MaxLength:
        case Rules.MinLength:
        case Rules.MaxNumber:
        case Rules.MinNumber:
        case Rules.MinFilesCount:
        case Rules.MaxFilesCount:
          localisedStr = localisedStr.replace(":value", String(ruleValue));
      }
    }
    return localisedStr || customMsg || DEFAULT_ERROR_FIELD_MESSAGE;
  }
  getFieldErrorMessage(fieldRule, elem) {
    const msg = typeof fieldRule.errorMessage === "function" ? fieldRule.errorMessage(this.getElemValue(elem), this.fields) : fieldRule.errorMessage;
    return this.getLocalisedString(fieldRule.rule, fieldRule.value, msg);
  }
  getFieldSuccessMessage(successMessage, elem) {
    const msg = typeof successMessage === "function" ? successMessage(this.getElemValue(elem), this.fields) : successMessage;
    return this.getLocalisedString(void 0, void 0, msg);
  }
  getGroupErrorMessage(groupRule) {
    return this.getLocalisedString(
      groupRule.rule,
      void 0,
      groupRule.errorMessage
    );
  }
  getGroupSuccessMessage(groupRule) {
    if (!groupRule.successMessage) {
      return void 0;
    }
    return this.getLocalisedString(
      void 0,
      void 0,
      groupRule.successMessage
    );
  }
  setFieldInvalid(key, fieldRule) {
    this.fields[key].isValid = false;
    this.fields[key].errorMessage = this.getFieldErrorMessage(
      fieldRule,
      this.fields[key].elem
    );
  }
  setFieldValid(key, successMessage) {
    this.fields[key].isValid = true;
    if (successMessage !== void 0) {
      this.fields[key].successMessage = this.getFieldSuccessMessage(
        successMessage,
        this.fields[key].elem
      );
    }
  }
  setGroupInvalid(key, groupRule) {
    this.groupFields[key].isValid = false;
    this.groupFields[key].errorMessage = this.getGroupErrorMessage(groupRule);
  }
  setGroupValid(key, groupRule) {
    this.groupFields[key].isValid = true;
    this.groupFields[key].successMessage = this.getGroupSuccessMessage(groupRule);
  }
  getElemValue(elem) {
    switch (elem.type) {
      case "checkbox":
        return elem.checked;
      case "file":
        return elem.files;
      default:
        return elem.value;
    }
  }
  validateGroupRule(key, elems, groupRule) {
    switch (groupRule.rule) {
      case GroupRules.Required: {
        if (elems.every((elem) => !elem.checked)) {
          this.setGroupInvalid(key, groupRule);
        } else {
          this.setGroupValid(key, groupRule);
        }
      }
    }
  }
  validateFieldRule(key, elem, fieldRule, afterInputChanged = false) {
    const ruleValue = fieldRule.value;
    const elemValue = this.getElemValue(elem);
    if (fieldRule.plugin) {
      const result = fieldRule.plugin(
        elemValue,
        this.getCompatibleFields()
      );
      if (!result) {
        this.setFieldInvalid(key, fieldRule);
      }
      return;
    }
    switch (fieldRule.rule) {
      case Rules.Required: {
        if (isEmpty(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.Email: {
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (!isEmail(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.MaxLength: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (isLengthMoreThanMax(elemValue, ruleValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.MinLength: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (isLengthLessThanMin(elemValue, ruleValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.Password: {
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (!isPassword(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.StrongPassword: {
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (!isStrongPassword(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.Number: {
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (!isNumber(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.Integer: {
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (!isInteger(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.MaxNumber: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        const num = +elemValue;
        if (Number.isNaN(num) || isNumberMoreThanMax(num, ruleValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.MinNumber: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        const num = +elemValue;
        if (Number.isNaN(num) || isNumberLessThanMin(num, ruleValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.CustomRegexp: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          return;
        }
        let regexp;
        try {
          regexp = new RegExp(ruleValue);
        } catch (e) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] should be a valid regexp. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        const str = String(elemValue);
        if (str !== "" && !regexp.test(str)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.MinFilesCount: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length < ruleValue) {
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        break;
      }
      case Rules.MaxFilesCount: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length > ruleValue) {
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        break;
      }
      case Rules.Files: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          return;
        }
        if (typeof ruleValue !== "object") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be an object. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          return;
        }
        const filesConfig = ruleValue.files;
        if (typeof filesConfig !== "object") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be an object with files array. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          return;
        }
        const isFilePropsInvalid = (file, fileConfig) => {
          const minSizeInvalid = Number.isFinite(fileConfig.minSize) && file.size < fileConfig.minSize;
          const maxSizeInvalid = Number.isFinite(fileConfig.maxSize) && file.size > fileConfig.maxSize;
          const nameInvalid = Array.isArray(fileConfig.names) && !fileConfig.names.includes(file.name);
          const extInvalid = Array.isArray(fileConfig.extensions) && !fileConfig.extensions.includes(
            file.name.split(".")[file.name.split(".").length - 1]
          );
          const typeInvalid = Array.isArray(fileConfig.types) && !fileConfig.types.includes(file.type);
          return minSizeInvalid || maxSizeInvalid || nameInvalid || extInvalid || typeInvalid;
        };
        if (typeof elemValue === "object" && elemValue !== null) {
          for (let fileIdx = 0, len = elemValue.length; fileIdx < len; ++fileIdx) {
            const file = elemValue.item(fileIdx);
            if (!file) {
              this.setFieldInvalid(key, fieldRule);
              break;
            }
            const filesInvalid = isFilePropsInvalid(file, filesConfig);
            if (filesInvalid) {
              this.setFieldInvalid(key, fieldRule);
              break;
            }
          }
        }
        break;
      }
      default: {
        if (typeof fieldRule.validator !== "function") {
          console.error(
            `Validator for custom rule for [${key}] field should be a function. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          return;
        }
        const result = fieldRule.validator(
          elemValue,
          this.getCompatibleFields()
        );
        if (typeof result !== "boolean" && typeof result !== "function") {
          console.error(
            `Validator return value for [${key}] field should be boolean or function. It will be cast to boolean.`
          );
        }
        if (typeof result === "function") {
          if (afterInputChanged) {
            this.fields[key].asyncCheckPending = true;
          } else {
            this.fields[key].asyncCheckPending = false;
            const promise = result();
            if (!isPromise(promise)) {
              console.error(
                `Validator function for custom rule for [${key}] field should return a Promise. This field will be always invalid.`
              );
              this.setFieldInvalid(key, fieldRule);
              return;
            }
            return promise.then((resp) => {
              if (!resp) {
                this.setFieldInvalid(key, fieldRule);
              }
            }).catch(() => {
              this.setFieldInvalid(key, fieldRule);
            });
          }
        }
        if (!result) {
          this.setFieldInvalid(key, fieldRule);
        }
      }
    }
  }
  isFormValid() {
    let isValid = true;
    for (let i = 0, len = Object.values(this.fields).length; i < len; ++i) {
      const item = Object.values(this.fields)[i];
      if (item.isValid === void 0) {
        isValid = void 0;
        break;
      }
      if (item.isValid === false) {
        isValid = false;
        break;
      }
    }
    for (let i = 0, len = Object.values(this.groupFields).length; i < len; ++i) {
      const item = Object.values(this.groupFields)[i];
      if (item.isValid === void 0) {
        isValid = void 0;
        break;
      }
      if (item.isValid === false) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }
  validateField(key, afterInputChanged = false) {
    var _a;
    const field = this.fields[key];
    field.isValid = true;
    const promises = [];
    [...field.rules].reverse().forEach((rule) => {
      const res = this.validateFieldRule(
        key,
        field.elem,
        rule,
        afterInputChanged
      );
      if (isPromise(res)) {
        promises.push(res);
      }
    });
    if (field.isValid) {
      this.setFieldValid(key, (_a = field.config) == null ? void 0 : _a.successMessage);
    }
    return Promise.allSettled(promises).finally(() => {
      var _a2;
      if (afterInputChanged) {
        (_a2 = this.onValidateCallback) == null ? void 0 : _a2.call(this, {
          isValid: this.isFormValid(),
          isSubmitted: this.isSubmitted,
          fields: this.getCompatibleFields(),
          groups: { ...this.groupFields }
        });
      }
    });
  }
  revalidateField(fieldSelector) {
    if (typeof fieldSelector !== "string" && !isElement(fieldSelector)) {
      throw Error(
        `Field selector is not valid. Please specify a string selector or a valid DOM element.`
      );
    }
    const key = this.getKeyByFieldSelector(fieldSelector);
    if (!key || !this.fields[key]) {
      console.error(`Field not found. Check the field selector.`);
      return Promise.reject();
    }
    return new Promise((resolve) => {
      this.validateField(key, true).finally(() => {
        this.clearFieldStyle(key);
        this.clearFieldLabel(key);
        this.renderFieldError(key, true);
        resolve(!!this.fields[key].isValid);
      });
    });
  }
  revalidateGroup(groupSelector) {
    if (typeof groupSelector !== "string" && !isElement(groupSelector)) {
      throw Error(
        `Group selector is not valid. Please specify a string selector or a valid DOM element.`
      );
    }
    const key = this.getKeyByFieldSelector(groupSelector);
    if (!key || !this.groupFields[key]) {
      console.error(`Group not found. Check the group selector.`);
      return Promise.reject();
    }
    return new Promise((resolve) => {
      this.validateGroup(key).finally(() => {
        this.clearFieldLabel(key);
        this.renderGroupError(key, true);
        resolve(!!this.groupFields[key].isValid);
      });
    });
  }
  validateGroup(key, afterInputChanged = false) {
    const group = this.groupFields[key];
    const promises = [];
    [...group.rules].reverse().forEach((rule) => {
      const res = this.validateGroupRule(key, group.elems, rule);
      if (isPromise(res)) {
        promises.push(res);
      }
    });
    return Promise.allSettled(promises).finally(() => {
      var _a;
      if (afterInputChanged) {
        (_a = this.onValidateCallback) == null ? void 0 : _a.call(this, {
          isValid: this.isFormValid(),
          isSubmitted: this.isSubmitted,
          fields: this.getCompatibleFields(),
          groups: { ...this.groupFields }
        });
      }
    });
  }
  focusInvalidField() {
    for (const key in this.fields) {
      const field = this.fields[key];
      if (!field.isValid) {
        setTimeout(() => field.elem.focus(), 0);
        break;
      }
    }
  }
  afterSubmitValidation(forceRevalidation = false) {
    this.renderErrors(forceRevalidation);
    if (this.globalConfig.focusInvalidField) {
      this.focusInvalidField();
    }
  }
  validate(forceRevalidation = false) {
    return new Promise((resolve) => {
      const promises = [];
      Object.keys(this.fields).forEach((key) => {
        const promise = this.validateField(key);
        if (isPromise(promise)) {
          promises.push(promise);
        }
      });
      Object.keys(this.groupFields).forEach((key) => {
        const promise = this.validateGroup(key);
        if (isPromise(promise)) {
          promises.push(promise);
        }
      });
      Promise.allSettled(promises).then(() => {
        var _a;
        this.afterSubmitValidation(forceRevalidation);
        (_a = this.onValidateCallback) == null ? void 0 : _a.call(this, {
          isValid: this.isFormValid(),
          isSubmitted: this.isSubmitted,
          fields: this.getCompatibleFields(),
          groups: { ...this.groupFields }
        });
        resolve(!!promises.length);
      });
    });
  }
  revalidate() {
    return new Promise((resolve) => {
      this.validateHandler(void 0, true).finally(() => {
        if (this.globalConfig.focusInvalidField) {
          this.focusInvalidField();
        }
        resolve(this.isValid);
      });
    });
  }
  validateHandler(ev, forceRevalidation = false) {
    if (this.globalConfig.lockForm) {
      this.lockForm();
    }
    return this.validate(forceRevalidation).finally(() => {
      var _a, _b;
      if (this.globalConfig.lockForm) {
        this.unlockForm();
      }
      if (this.isValid) {
        (_a = this.onSuccessCallback) == null ? void 0 : _a.call(this, ev);
      } else {
        (_b = this.onFailCallback) == null ? void 0 : _b.call(this, this.getCompatibleFields(), this.groupFields);
      }
    });
  }
  setForm(form) {
    this.form = form;
    this.form.setAttribute("novalidate", "novalidate");
    this.removeListener("submit", this.form, this.formSubmitHandler);
    this.addListener("submit", this.form, this.formSubmitHandler);
  }
  addListener(type, elem, handler) {
    elem.addEventListener(type, handler);
    this.eventListeners.push({ type, elem, func: handler });
  }
  removeListener(type, elem, handler) {
    elem.removeEventListener(type, handler);
    this.eventListeners = this.eventListeners.filter(
      (item) => item.type !== type || item.elem !== elem
    );
  }
  addField(fieldSelector, rules, config) {
    if (typeof fieldSelector !== "string" && !isElement(fieldSelector)) {
      throw Error(
        `Field selector is not valid. Please specify a string selector or a valid DOM element.`
      );
    }
    let elem;
    if (typeof fieldSelector === "string") {
      elem = this.form.querySelector(fieldSelector);
    } else {
      elem = fieldSelector;
    }
    if (!elem) {
      throw Error(
        `Field doesn't exist in the DOM! Please check the field selector.`
      );
    }
    if (!Array.isArray(rules) || !rules.length) {
      throw Error(
        `Rules argument should be an array and should contain at least 1 element.`
      );
    }
    rules.forEach((item) => {
      if (!("rule" in item || "validator" in item || "plugin" in item)) {
        throw Error(
          `Rules argument must contain at least one rule or validator property.`
        );
      }
      if (!item.validator && !item.plugin && (!item.rule || !Object.values(Rules).includes(item.rule))) {
        throw Error(
          `Rule should be one of these types: ${Object.values(Rules).join(
            ", "
          )}. Provided value: ${item.rule}`
        );
      }
    });
    const key = this.setKeyByFieldSelector(fieldSelector);
    this.fields[key] = {
      elem,
      rules,
      isValid: void 0,
      touched: false,
      config
    };
    this.setListeners(elem);
    if (this.isSubmitted || this.globalConfig.validateBeforeSubmitting) {
      this.validateField(key);
    }
    return this;
  }
  removeField(fieldSelector) {
    if (typeof fieldSelector !== "string" && !isElement(fieldSelector)) {
      throw Error(
        `Field selector is not valid. Please specify a string selector or a valid DOM element.`
      );
    }
    const key = this.getKeyByFieldSelector(fieldSelector);
    if (!key || !this.fields[key]) {
      console.error(`Field not found. Check the field selector.`);
      return this;
    }
    const type = this.getListenerType(this.fields[key].elem.type);
    this.removeListener(type, this.fields[key].elem, this.handlerChange);
    this.clearErrors();
    delete this.fields[key];
    return this;
  }
  removeGroup(group) {
    if (typeof group !== "string") {
      throw Error(
        `Group selector is not valid. Please specify a string selector.`
      );
    }
    const key = this.getKeyByFieldSelector(group);
    if (!key || !this.groupFields[key]) {
      console.error(`Group not found. Check the group selector.`);
      return this;
    }
    this.groupFields[key].elems.forEach((elem) => {
      const type = this.getListenerType(elem.type);
      this.removeListener(type, elem, this.handlerChange);
    });
    this.clearErrors();
    delete this.groupFields[key];
    return this;
  }
  addRequiredGroup(groupField, errorMessage, config, successMessage) {
    if (typeof groupField !== "string" && !isElement(groupField)) {
      throw Error(
        `Group selector is not valid. Please specify a string selector or a valid DOM element.`
      );
    }
    let elem;
    if (typeof groupField === "string") {
      elem = this.form.querySelector(groupField);
    } else {
      elem = groupField;
    }
    if (!elem) {
      throw Error(`Group selector not found! Please check the group selector.`);
    }
    const inputs = elem.querySelectorAll("input");
    const childrenInputs = Array.from(inputs).filter((input) => {
      const parent = getClosestParent(this.groupFields, getNodeParents(input));
      if (!parent) {
        return true;
      }
      return parent[1].elems.find((elem2) => elem2 !== input);
    });
    const key = this.setKeyByFieldSelector(groupField);
    this.groupFields[key] = {
      rules: [
        {
          rule: GroupRules.Required,
          errorMessage,
          successMessage
        }
      ],
      groupElem: elem,
      elems: childrenInputs,
      touched: false,
      isValid: void 0,
      config
    };
    inputs.forEach((input) => {
      this.setListeners(input);
    });
    return this;
  }
  getListenerType(type) {
    switch (type) {
      case "checkbox":
      case "select-one":
      case "file":
      case "radio": {
        return "change";
      }
      default: {
        return "input";
      }
    }
  }
  setListeners(elem) {
    const type = this.getListenerType(elem.type);
    this.removeListener(type, elem, this.handlerChange);
    this.addListener(type, elem, this.handlerChange);
  }
  clearFieldLabel(key) {
    var _a, _b;
    (_a = this.errorLabels[key]) == null ? void 0 : _a.remove();
    (_b = this.successLabels[key]) == null ? void 0 : _b.remove();
  }
  clearFieldStyle(key) {
    var _a, _b, _c, _d;
    const field = this.fields[key];
    const errorStyle = ((_a = field.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
    Object.keys(errorStyle).forEach((key2) => {
      field.elem.style[key2] = "";
    });
    const successStyle = ((_b = field.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
    Object.keys(successStyle).forEach((key2) => {
      field.elem.style[key2] = "";
    });
    field.elem.classList.remove(
      ...getClassList(
        ((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass
      ),
      ...getClassList(
        ((_d = field.config) == null ? void 0 : _d.successFieldCssClass) || this.globalConfig.successFieldCssClass
      )
    );
  }
  clearErrors() {
    var _a, _b;
    Object.keys(this.errorLabels).forEach(
      (key) => this.errorLabels[key].remove()
    );
    Object.keys(this.successLabels).forEach(
      (key) => this.successLabels[key].remove()
    );
    for (const key in this.fields) {
      this.clearFieldStyle(key);
    }
    for (const key in this.groupFields) {
      const group = this.groupFields[key];
      const errorStyle = ((_a = group.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
      Object.keys(errorStyle).forEach((key2) => {
        group.elems.forEach((elem) => {
          var _a2;
          elem.style[key2] = "";
          elem.classList.remove(
            ...getClassList(
              ((_a2 = group.config) == null ? void 0 : _a2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass
            )
          );
        });
      });
      const successStyle = ((_b = group.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
      Object.keys(successStyle).forEach((key2) => {
        group.elems.forEach((elem) => {
          var _a2;
          elem.style[key2] = "";
          elem.classList.remove(
            ...getClassList(
              ((_a2 = group.config) == null ? void 0 : _a2.successFieldCssClass) || this.globalConfig.successFieldCssClass
            )
          );
        });
      });
    }
    this.tooltips = [];
  }
  isTooltip() {
    return !!this.globalConfig.tooltip;
  }
  lockForm() {
    const elems = this.form.querySelectorAll(
      "input, textarea, button, select"
    );
    for (let i = 0, len = elems.length; i < len; ++i) {
      elems[i].setAttribute(
        "data-just-validate-fallback-disabled",
        elems[i].disabled ? "true" : "false"
      );
      elems[i].setAttribute("disabled", "disabled");
      elems[i].style.pointerEvents = "none";
      elems[i].style.webkitFilter = "grayscale(100%)";
      elems[i].style.filter = "grayscale(100%)";
    }
  }
  unlockForm() {
    const elems = this.form.querySelectorAll(
      "input, textarea, button, select"
    );
    for (let i = 0, len = elems.length; i < len; ++i) {
      if (elems[i].getAttribute("data-just-validate-fallback-disabled") !== "true") {
        elems[i].removeAttribute("disabled");
      }
      elems[i].style.pointerEvents = "";
      elems[i].style.webkitFilter = "";
      elems[i].style.filter = "";
    }
  }
  renderTooltip(elem, errorLabel, position) {
    var _a;
    const { top, left, width, height } = elem.getBoundingClientRect();
    const errorLabelRect = errorLabel.getBoundingClientRect();
    const pos = position || ((_a = this.globalConfig.tooltip) == null ? void 0 : _a.position);
    switch (pos) {
      case "left": {
        errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
        errorLabel.style.left = `${left - errorLabelRect.width - TOOLTIP_ARROW_HEIGHT}px`;
        break;
      }
      case "top": {
        errorLabel.style.top = `${top - errorLabelRect.height - TOOLTIP_ARROW_HEIGHT}px`;
        errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
        break;
      }
      case "right": {
        errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
        errorLabel.style.left = `${left + width + TOOLTIP_ARROW_HEIGHT}px`;
        break;
      }
      case "bottom": {
        errorLabel.style.top = `${top + height + TOOLTIP_ARROW_HEIGHT}px`;
        errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
        break;
      }
    }
    errorLabel.dataset.direction = pos;
    const refresh = () => {
      this.renderTooltip(elem, errorLabel, position);
    };
    return {
      refresh
    };
  }
  createErrorLabelElem(key, errorMessage, config) {
    const errorLabel = document.createElement("div");
    errorLabel.innerHTML = errorMessage;
    const customErrorLabelStyle = this.isTooltip() ? config == null ? void 0 : config.errorLabelStyle : (config == null ? void 0 : config.errorLabelStyle) || this.globalConfig.errorLabelStyle;
    Object.assign(errorLabel.style, customErrorLabelStyle);
    errorLabel.classList.add(
      ...getClassList(
        (config == null ? void 0 : config.errorLabelCssClass) || this.globalConfig.errorLabelCssClass
      ),
      "just-validate-error-label"
    );
    if (this.isTooltip()) {
      errorLabel.dataset.tooltip = "true";
    }
    if (this.globalConfig.testingMode) {
      errorLabel.dataset.testId = `error-label-${key}`;
    }
    this.errorLabels[key] = errorLabel;
    return errorLabel;
  }
  createSuccessLabelElem(key, successMessage, config) {
    if (successMessage === void 0) {
      return null;
    }
    const successLabel = document.createElement("div");
    successLabel.innerHTML = successMessage;
    const customSuccessLabelStyle = (config == null ? void 0 : config.successLabelStyle) || this.globalConfig.successLabelStyle;
    Object.assign(successLabel.style, customSuccessLabelStyle);
    successLabel.classList.add(
      ...getClassList(
        (config == null ? void 0 : config.successLabelCssClass) || this.globalConfig.successLabelCssClass
      ),
      "just-validate-success-label"
    );
    if (this.globalConfig.testingMode) {
      successLabel.dataset.testId = `success-label-${key}`;
    }
    this.successLabels[key] = successLabel;
    return successLabel;
  }
  renderErrorsContainer(label, errorsContainer) {
    const container = errorsContainer || this.globalConfig.errorsContainer;
    if (typeof container === "string") {
      const elem = this.form.querySelector(container);
      if (elem) {
        elem.appendChild(label);
        return true;
      } else {
        console.error(
          `Error container with ${container} selector not found. Errors will be rendered as usual`
        );
      }
    }
    if (container instanceof Element) {
      container.appendChild(label);
      return true;
    }
    if (container !== void 0) {
      console.error(
        `Error container not found. It should be a string or existing Element. Errors will be rendered as usual`
      );
    }
    return false;
  }
  renderGroupLabel(elem, label, errorsContainer, isSuccess) {
    if (!isSuccess) {
      const renderedInErrorsContainer = this.renderErrorsContainer(
        label,
        errorsContainer
      );
      if (renderedInErrorsContainer) {
        return;
      }
    }
    elem.appendChild(label);
  }
  renderFieldLabel(elem, label, errorsContainer, isSuccess) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!isSuccess) {
      const renderedInErrorsContainer = this.renderErrorsContainer(
        label,
        errorsContainer
      );
      if (renderedInErrorsContainer) {
        return;
      }
    }
    if (elem.type === "checkbox" || elem.type === "radio") {
      const labelElem = document.querySelector(
        `label[for="${elem.getAttribute("id")}"]`
      );
      if (((_b = (_a = elem.parentElement) == null ? void 0 : _a.tagName) == null ? void 0 : _b.toLowerCase()) === "label") {
        (_d = (_c = elem.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.appendChild(label);
      } else if (labelElem) {
        (_e = labelElem.parentElement) == null ? void 0 : _e.appendChild(label);
      } else {
        (_f = elem.parentElement) == null ? void 0 : _f.appendChild(label);
      }
    } else {
      (_g = elem.parentElement) == null ? void 0 : _g.appendChild(label);
    }
  }
  showLabels(fields, isError) {
    Object.keys(fields).forEach((fieldName, i) => {
      const error = fields[fieldName];
      const key = this.getKeyByFieldSelector(fieldName);
      if (!key || !this.fields[key]) {
        console.error(`Field not found. Check the field selector.`);
        return;
      }
      const field = this.fields[key];
      field.isValid = !isError;
      this.clearFieldStyle(key);
      this.clearFieldLabel(key);
      this.renderFieldError(key, false, error);
      if (i === 0 && this.globalConfig.focusInvalidField) {
        setTimeout(() => field.elem.focus(), 0);
      }
    });
  }
  showErrors(fields) {
    if (typeof fields !== "object") {
      throw Error(
        "[showErrors]: Errors should be an object with key: value format"
      );
    }
    this.showLabels(fields, true);
  }
  showSuccessLabels(fields) {
    if (typeof fields !== "object") {
      throw Error(
        "[showSuccessLabels]: Labels should be an object with key: value format"
      );
    }
    this.showLabels(fields, false);
  }
  renderFieldError(key, forced = false, message) {
    var _a, _b, _c, _d, _e, _f;
    const field = this.fields[key];
    if (field.isValid === false) {
      this.isValid = false;
    }
    if (field.isValid === void 0 || !forced && !this.isSubmitted && !field.touched && message === void 0) {
      return;
    }
    if (field.isValid) {
      if (!field.asyncCheckPending) {
        const successLabel = this.createSuccessLabelElem(
          key,
          message !== void 0 ? message : field.successMessage,
          field.config
        );
        if (successLabel) {
          this.renderFieldLabel(
            field.elem,
            successLabel,
            (_a = field.config) == null ? void 0 : _a.errorsContainer,
            true
          );
        }
        field.elem.classList.add(
          ...getClassList(
            ((_b = field.config) == null ? void 0 : _b.successFieldCssClass) || this.globalConfig.successFieldCssClass
          )
        );
      }
      return;
    }
    field.elem.classList.add(
      ...getClassList(
        ((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass
      )
    );
    const errorLabel = this.createErrorLabelElem(
      key,
      message !== void 0 ? message : field.errorMessage,
      field.config
    );
    this.renderFieldLabel(
      field.elem,
      errorLabel,
      (_d = field.config) == null ? void 0 : _d.errorsContainer
    );
    if (this.isTooltip()) {
      this.tooltips.push(
        this.renderTooltip(
          field.elem,
          errorLabel,
          (_f = (_e = field.config) == null ? void 0 : _e.tooltip) == null ? void 0 : _f.position
        )
      );
    }
  }
  renderGroupError(key, force = true) {
    var _a, _b, _c, _d;
    const group = this.groupFields[key];
    if (group.isValid === false) {
      this.isValid = false;
    }
    if (group.isValid === void 0 || !force && !this.isSubmitted && !group.touched) {
      return;
    }
    if (group.isValid) {
      group.elems.forEach((elem) => {
        var _a2, _b2;
        Object.assign(
          elem.style,
          ((_a2 = group.config) == null ? void 0 : _a2.successFieldStyle) || this.globalConfig.successFieldStyle
        );
        elem.classList.add(
          ...getClassList(
            ((_b2 = group.config) == null ? void 0 : _b2.successFieldCssClass) || this.globalConfig.successFieldCssClass
          )
        );
      });
      const successLabel = this.createSuccessLabelElem(
        key,
        group.successMessage,
        group.config
      );
      if (successLabel) {
        this.renderGroupLabel(
          group.groupElem,
          successLabel,
          (_a = group.config) == null ? void 0 : _a.errorsContainer,
          true
        );
      }
      return;
    }
    this.isValid = false;
    group.elems.forEach((elem) => {
      var _a2, _b2;
      Object.assign(
        elem.style,
        ((_a2 = group.config) == null ? void 0 : _a2.errorFieldStyle) || this.globalConfig.errorFieldStyle
      );
      elem.classList.add(
        ...getClassList(
          ((_b2 = group.config) == null ? void 0 : _b2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass
        )
      );
    });
    const errorLabel = this.createErrorLabelElem(
      key,
      group.errorMessage,
      group.config
    );
    this.renderGroupLabel(
      group.groupElem,
      errorLabel,
      (_b = group.config) == null ? void 0 : _b.errorsContainer
    );
    if (this.isTooltip()) {
      this.tooltips.push(
        this.renderTooltip(
          group.groupElem,
          errorLabel,
          (_d = (_c = group.config) == null ? void 0 : _c.tooltip) == null ? void 0 : _d.position
        )
      );
    }
  }
  renderErrors(forceRevalidation = false) {
    if (!this.isSubmitted && !forceRevalidation && !this.globalConfig.validateBeforeSubmitting) {
      return;
    }
    this.clearErrors();
    this.isValid = true;
    for (const key in this.groupFields) {
      this.renderGroupError(key);
    }
    for (const key in this.fields) {
      this.renderFieldError(key);
    }
  }
  destroy() {
    this.eventListeners.forEach((event) => {
      this.removeListener(event.type, event.elem, event.func);
    });
    Object.keys(this.customStyleTags).forEach((key) => {
      this.customStyleTags[key].remove();
    });
    this.clearErrors();
    if (this.globalConfig.lockForm) {
      this.unlockForm();
    }
  }
  refresh() {
    this.destroy();
    if (!this.form) {
      console.error("Cannot initialize the library! Form is not defined");
    } else {
      this.initialize(this.form, this.globalConfig);
      Object.keys(this.fields).forEach((key) => {
        const fieldSelector = this.getFieldSelectorByKey(key);
        if (fieldSelector) {
          this.addField(
            fieldSelector,
            [...this.fields[key].rules],
            this.fields[key].config
          );
        }
      });
    }
  }
  setCurrentLocale(locale) {
    if (typeof locale !== "string" && locale !== void 0) {
      console.error("Current locale should be a string");
      return;
    }
    this.currentLocale = locale;
    if (this.isSubmitted) {
      this.validate();
    }
  }
  onSuccess(callback) {
    this.onSuccessCallback = callback;
    return this;
  }
  onFail(callback) {
    this.onFailCallback = callback;
    return this;
  }
  onValidate(callback) {
    this.onValidateCallback = callback;
    return this;
  }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map