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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// require('./jQuery-3.4.1.min.js');
__webpack_require__(/*! ./sticky-sidebar.min.js */ "./resources/js/sticky-sidebar.min.js"); // require('./datepicker.min.js');
// require('./leaflet.js');


$.easing.custom = function (x, t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * (--t * (t - 2) - 1) + b;
};

$.fn.highlight = function (what, spanClass) {
  return this.each(function () {
    var container = this,
        content = container.innerHTML,
        pattern = new RegExp('(>[^<.]*)(' + what + ')([^<.]*)', 'g'),
        replaceWith = '$1<span ' + (spanClass ? 'class="' + spanClass + '"' : '') + '">$2</span>$3',
        highlighted = content.replace(pattern, replaceWith);
    container.innerHTML = highlighted;
  });
};
/* Slide in on Appear */


$.fn.visible = function (partial) {
  var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

  return compareBottom <= viewBottom && compareTop >= viewTop;
};

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

;
$(function () {
  /* Show lyrics on click */
  $(document).on('click', '.show-lyrics', function (e) {
    console.log('boo');
    e.preventDefault();
    $(this).closest('.post').find('.post__lyrics').slideToggle();
  });
  /* Show comments on click */

  $(document).on('click', '.post__comment-link', function (e) {
    e.preventDefault();
    $(this).closest('.post').find('.comments').slideToggle();
  });
  $(document).on('click', '.post_player .play-pause-btn', function (e) {
    var $this = $(this);
    e.preventDefault();
    var $item = $(this).closest('.post_player'),
        $mp3 = $item.find('audio'),
        $audio = $mp3.get(0),
        $btn = $item.find('.play-pause-btn i'),
        $thebtn = $btn.parent(),
        $mp3Length = $mp3.prop('duration'),
        $mp3CurTime = $mp3.prop('currentTime'),
        $bars = $item.find('.bars'),
        $loadingIndicator = $item.find('.loading'),
        $progress = $item.find('.progress'),
        $seek = $item.find('.seek');
    var sID = $item.parent().parent().data('song-id');

    if ($audio.buffered != undefined && $audio.buffered.length != 0) {
      $mp3.bind('progress', function () {
        var $loaded = parseInt($audio.buffered.end(0) / $audio.duration * 100, 10);
        $loadingIndicator.css({
          width: $loaded + '%'
        });
      });
    } else {
      $loadingIndicator.remove();
    }

    var pos = 0;
    var countedMe = false;
    $mp3.bind('timeupdate', function () {
      var rem = parseInt($audio.duration - $audio.currentTime, 10),
          mins = Math.floor(rem / 60, 10),
          secs = rem - mins * 60;
      $progress.css({
        width: pos + '%'
      });
      pos = $audio.currentTime / $audio.duration * 100;

      if (!countedMe && pos >= 50) {
        countedMe = true;
        var myHref = $this.attr('href');
        $.get(myHref, function (n) {
          $item.find('.play-count').text(n);
        });
      }
    });
    $mp3.bind('ended', function () {
      $audio.currentTime = 0;
      $item.removeClass('playing');
      $thebtn.removeClass('playing');
      $btn.removeClass('fa-pause').addClass('fa-play');
      $bars.fadeOut();
    });
    $('.player').removeClass('playing').find('audio').trigger('pause');
    $('.player').find('.progress').width(0);
    $('.play-pause-btn').removeClass('playing');
    $('.bars').hide();
    $item.toggleClass('playing');
    $thebtn.addClass('playing'); //$('.player .item.playing').removeClass('playing');

    $('.player .item .play-pause-btn i').removeClass('fa-pause').addClass('fa-play'); //$item.toggleClass('playing');

    $mp3.trigger($item.hasClass('playing') ? 'play' : 'pause');
    $bars.css({
      'display': $item.hasClass('playing') ? 'block' : 'none'
    });
    $btn.attr('class', $item.hasClass('playing') ? 'fa fa-pause' : 'fa fa-play');
  });
  $(document).on('click', '.post .like', function (e) {
    e.preventDefault();
    var $this = $(this),
        postID = $(this).data('song-id');
    $.get('/post/like/' + postID, function (r) {
      r.success ? $this.addClass('liked') : $this.removeClass('liked');
      $this.find('.like-count').text(r.total_likes);
    });
  });
  $(document).on('click', '.post__comment-link', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.closest('.post').find('.post__comments').slideToggle();
  });
  $('.comment-form').submit(function (e) {
    var $this = $(this);
    $.ajax({
      url: $this.attr('action'),
      type: 'post',
      data: $this.serialize(),
      dataType: 'json',
      success: function success(r) {
        console.log(r);
        var newComment = '<div class="post__comment anim-in come-in flex flex--align-center"><div class="post__comment--user"><a href="' + r.user.username + '"><img src="/storage/uploads/avatars/' + r.user.avatar + '" width="20" /></a></div><div class="post__comment--text">' + r.comment + '</div></div>';
        $(newComment).insertBefore('.comment-form'); // $('.post__comments').append(newComment);
      }
    });
    return false;
  });
  $(document).on('click', '.im-going', function (e) {
    e.preventDefault();
    var $this = $(this),
        showcaseID = $(this).data('event-id');
    $.get('/showcase/like/' + showcaseID, function (r) {
      console.log(r);

      if (r.success) {
        $this.addClass('liked');
        $this.find('.icon i').attr('class', 'fa fa-thumbs-up');
        $this.find('.button-text').text('I\'ll Be There!');
      } else {
        $this.removeClass('liked');
        $this.find('.icon i').attr('class', 'fa fa-question');
        $this.find('.button-text').text('Be There?');
      }
    });
  });
  $(document).on('click', '.follow-btn', function (e) {
    e.preventDefault();
    var $this = $(this),
        request = $this.attr('href'),
        el = $this[0];
    $.get(request, function (r) {
      if (r.success) {
        $this.addClass('liked').find('.like-text').text('Following'); // $this.find('i').addClass('star-spin');

        setTimeout(function () {
          $this.find('i').toggleClass('star-spin');
        }, 1000);
      } else {
        $this.removeClass('liked').find('.like-text').text('Follow');
        $this.find('i').removeClass('star-spin');
      } // void el.offsetWidth;
      // r.success ?  : ;


      $this.next().text('Followers: ' + r.total_likes);
    });
  });
  var win = $(window);
  var allMods = $(".anim-in");
  allMods.each(function (i, el) {
    var el = $(el);

    if (el.visible(true)) {
      var dly = i / 10;
      el.delay(dly).addClass("already-visible");
    }
  });
  win.scroll(function (event) {
    allMods.each(function (i, el) {
      var el = $(el);

      if (el.visible(true)) {
        var dly = i / 10;
        el.delay(dly).addClass("come-in");
      }
    });
  });
  $(document).on('change keyup keydown paste cut', 'textarea', function () {
    $(this).height(0).height(this.scrollHeight);
  }); // console.log($('.sidebar__inner').data('sticky'));

  if ($('.sidebar__inner').data('sticky') == true) {
    var sidebar = new StickySidebar('.sidebar', {
      containerSelector: '#page-content',
      innerWrapperSelector: '.sidebar__inner',
      topSpacing: 50,
      bottomSpacing: 50
    });
  }

  var MIN_LENGTH = 3;
  var CURRENT_QUERY = '';
  $("#ts").keyup(debounce(function () {
    var keyword = $("#ts").val(),
        tsr = '#top-search-results';

    if (keyword.length >= MIN_LENGTH && CURRENT_QUERY != keyword) {
      CURRENT_QUERY = keyword;
      $.get("/search", {
        q: keyword
      }).done(function (data) {
        console.log(data);
        $(tsr).empty();

        if (data.users.length) {
          $(tsr).append('<h4>Users</h4>');
          var users = '.tsr__users';
          $(tsr).append('<ul class="tsr__users"></ul>');
          $(data.users).each(function (i, v) {
            if (i < 5) {
              var userItem = '<li class="tsr__user"><a href="/' + v.username + '"><img src="/storage/uploads/avatars/' + v.avatar + '" width="20">' + v.name + '</a></li>';
              $(users).append(userItem);
            }

            if (i == 5) {
              $(users).append('<li class="tsr__more"><a href="/search?q=' + keyword + '</a></li>');
            }
          });
        } // if(data.posts.length) {
        // }
        // if(data.prompts.length) {
        // }


        $(tsr).fadeIn();
      });
    }
  }, 500));
  $('#top-search-results').mouseleave(function () {
    $(this).fadeOut('fast', function () {
      $(this).empty();
    });
  });
  $("#registration-form #name").keyup(debounce(function () {
    var keyword = $(this).val(),
        usernameInput = '#username';

    if (keyword.length >= MIN_LENGTH && CURRENT_QUERY != keyword) {
      CURRENT_QUERY = keyword;
      var generateUsername = keyword.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').toLowerCase();
      $(usernameInput).val(generateUsername);
    }
  }, 500));
}); // require('./bootstrap');
// window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/*
const app = new Vue({
    el: '#app',
});
*/

/***/ }),

/***/ "./resources/js/sticky-sidebar.min.js":
/*!********************************************!*\
  !*** ./resources/js/sticky-sidebar.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
**/
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t) {
  "use strict";

  "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  var e,
      i,
      n = (function (t, e) {
    (function (t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var l,
          n,
          e = function () {
        function n(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }

        return function (t, e, i) {
          return e && n(t.prototype, e), i && n(t, i), t;
        };
      }(),
          i = (l = ".stickySidebar", n = {
        topSpacing: 0,
        bottomSpacing: 0,
        containerSelector: !1,
        innerWrapperSelector: ".inner-wrapper-sticky",
        stickyClass: "is-affixed",
        resizeSensor: !0,
        minWidth: !1
      }, function () {
        function c(t) {
          var e = this,
              i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          if (function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, c), this.options = c.extend(n, i), this.sidebar = "string" == typeof t ? document.querySelector(t) : t, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
          this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
            transform: !1,
            transform3d: !1
          }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this.dimensions = {
            translateY: 0,
            maxTranslateY: 0,
            topSpacing: 0,
            lastTopSpacing: 0,
            bottomSpacing: 0,
            lastBottomSpacing: 0,
            sidebarHeight: 0,
            sidebarWidth: 0,
            containerTop: 0,
            containerHeight: 0,
            viewportHeight: 0,
            viewportTop: 0,
            lastViewportTop: 0
          }, ["handleEvent"].forEach(function (t) {
            e[t] = e[t].bind(e);
          }), this.initialize();
        }

        return e(c, [{
          key: "initialize",
          value: function value() {
            var i = this;

            if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
              var t = document.createElement("div");

              for (t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t); this.sidebar.firstChild != t;) {
                t.appendChild(this.sidebar.firstChild);
              }

              this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky");
            }

            if (this.options.containerSelector) {
              var e = document.querySelectorAll(this.options.containerSelector);
              if ((e = Array.prototype.slice.call(e)).forEach(function (t, e) {
                t.contains(i.sidebar) && (i.container = t);
              }), !e.length) throw new Error("The container does not contains on the sidebar.");
            }

            "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0;
          }
        }, {
          key: "bindEvents",
          value: function value() {
            window.addEventListener("resize", this, {
              passive: !0,
              capture: !1
            }), window.addEventListener("scroll", this, {
              passive: !0,
              capture: !1
            }), this.sidebar.addEventListener("update" + l, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent));
          }
        }, {
          key: "handleEvent",
          value: function value(t) {
            this.updateSticky(t);
          }
        }, {
          key: "calcDimensions",
          value: function value() {
            if (!this._breakpoint) {
              var t = this.dimensions;
              t.containerTop = c.offsetRelative(this.container).top, t.containerHeight = this.container.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.sidebarInner.offsetHeight, t.sidebarWidth = this.sidebarInner.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this._calcDimensionsWithScroll();
            }
          }
        }, {
          key: "_calcDimensionsWithScroll",
          value: function value() {
            var t = this.dimensions;
            t.sidebarLeft = c.offsetRelative(this.sidebar).left, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.topSpacing = this.options.topSpacing, t.bottomSpacing = this.options.bottomSpacing, "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0), "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing, this._reStyle = !0), t.lastTopSpacing = t.topSpacing, t.lastBottomSpacing = t.bottomSpacing;
          }
        }, {
          key: "isSidebarFitsViewport",
          value: function value() {
            var t = this.dimensions,
                e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing;
            return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight;
          }
        }, {
          key: "observeScrollDir",
          value: function value() {
            var t = this.dimensions;

            if (t.lastViewportTop !== t.viewportTop) {
              var e = "down" === this.direction ? Math.min : Math.max;
              t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down");
            }
          }
        }, {
          key: "getAffixType",
          value: function value() {
            this._calcDimensionsWithScroll();

            var t = this.dimensions,
                e = t.viewportTop + t.topSpacing,
                i = this.affixedType;
            return e <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, i = "STATIC") : i = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.translateY = Math.round(t.translateY), t.lastViewportTop = t.viewportTop, i;
          }
        }, {
          key: "_getAffixTypeScrollingDown",
          value: function value() {
            var t = this.dimensions,
                e = t.sidebarHeight + t.containerTop,
                i = t.viewportTop + t.topSpacing,
                n = t.viewportBottom - t.bottomSpacing,
                o = this.affixedType;
            return this.isSidebarFitsViewport() ? t.sidebarHeight + i >= t.containerBottom ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : i >= t.containerTop && (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : e + t.translateY <= n ? (t.translateY = n - e, o = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o;
          }
        }, {
          key: "_getAffixTypeScrollingUp",
          value: function value() {
            var t = this.dimensions,
                e = t.sidebarHeight + t.containerTop,
                i = t.viewportTop + t.topSpacing,
                n = t.viewportBottom - t.bottomSpacing,
                o = this.affixedType;
            return i <= t.translateY + t.containerTop ? (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t.containerTop <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o;
          }
        }, {
          key: "_getStyle",
          value: function value(t) {
            if (void 0 !== t) {
              var e = {
                inner: {},
                outer: {}
              },
                  i = this.dimensions;

              switch (t) {
                case "VIEWPORT-TOP":
                  e.inner = {
                    position: "fixed",
                    top: i.topSpacing,
                    left: i.sidebarLeft - i.viewportLeft,
                    width: i.sidebarWidth
                  };
                  break;

                case "VIEWPORT-BOTTOM":
                  e.inner = {
                    position: "fixed",
                    top: "auto",
                    left: i.sidebarLeft,
                    bottom: i.bottomSpacing,
                    width: i.sidebarWidth
                  };
                  break;

                case "CONTAINER-BOTTOM":
                case "VIEWPORT-UNBOTTOM":
                  var n = this._getTranslate(0, i.translateY + "px");

                  e.inner = n ? {
                    transform: n
                  } : {
                    position: "absolute",
                    top: i.translateY,
                    width: i.sidebarWidth
                  };
              }

              switch (t) {
                case "VIEWPORT-TOP":
                case "VIEWPORT-BOTTOM":
                case "VIEWPORT-UNBOTTOM":
                case "CONTAINER-BOTTOM":
                  e.outer = {
                    height: i.sidebarHeight,
                    position: "relative"
                  };
              }

              return e.outer = c.extend({
                height: "",
                position: ""
              }, e.outer), e.inner = c.extend({
                position: "relative",
                top: "",
                left: "",
                bottom: "",
                width: "",
                transform: ""
              }, e.inner), e;
            }
          }
        }, {
          key: "stickyPosition",
          value: function value(t) {
            if (!this._breakpoint) {
              t = this._reStyle || t || !1, this.options.topSpacing, this.options.bottomSpacing;

              var e = this.getAffixType(),
                  i = this._getStyle(e);

              if ((this.affixedType != e || t) && e) {
                var n = "affix." + e.toLowerCase().replace("viewport-", "") + l;

                for (var o in c.eventTrigger(this.sidebar, n), "STATIC" === e ? c.removeClass(this.sidebar, this.options.stickyClass) : c.addClass(this.sidebar, this.options.stickyClass), i.outer) {
                  var s = "number" == typeof i.outer[o] ? "px" : "";
                  this.sidebar.style[o] = i.outer[o] + s;
                }

                for (var r in i.inner) {
                  var a = "number" == typeof i.inner[r] ? "px" : "";
                  this.sidebarInner.style[r] = i.inner[r] + a;
                }

                var p = "affixed." + e.toLowerCase().replace("viewport-", "") + l;
                c.eventTrigger(this.sidebar, p);
              } else this._initialized && (this.sidebarInner.style.left = i.inner.left);

              this.affixedType = e;
            }
          }
        }, {
          key: "_widthBreakpoint",
          value: function value() {
            window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), c.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1;
          }
        }, {
          key: "updateSticky",
          value: function value() {
            var t,
                e = this,
                i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this._running || (this._running = !0, t = i.type, requestAnimationFrame(function () {
              switch (t) {
                case "scroll":
                  e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
                  break;

                case "resize":
                default:
                  e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0);
              }

              e._running = !1;
            }));
          }
        }, {
          key: "_setSupportFeatures",
          value: function value() {
            var t = this.support;
            t.transform = c.supportTransform(), t.transform3d = c.supportTransform(!0);
          }
        }, {
          key: "_getTranslate",
          value: function value() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
            return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")";
          }
        }, {
          key: "destroy",
          value: function value() {
            window.removeEventListener("resize", this, {
              capture: !1
            }), window.removeEventListener("scroll", this, {
              capture: !1
            }), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + l, this);
            var t = {
              inner: {},
              outer: {}
            };

            for (var e in t.inner = {
              position: "",
              top: "",
              left: "",
              bottom: "",
              width: "",
              transform: ""
            }, t.outer = {
              height: "",
              position: ""
            }, t.outer) {
              this.sidebar.style[e] = t.outer[e];
            }

            for (var i in t.inner) {
              this.sidebarInner.style[i] = t.inner[i];
            }

            this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent));
          }
        }], [{
          key: "supportTransform",
          value: function value(t) {
            var i = !1,
                e = t ? "perspective" : "transform",
                n = e.charAt(0).toUpperCase() + e.slice(1),
                o = document.createElement("support").style;
            return (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach(function (t, e) {
              if (void 0 !== o[t]) return i = t, !1;
            }), i;
          }
        }, {
          key: "eventTrigger",
          value: function value(t, e, i) {
            try {
              var n = new CustomEvent(e, {
                detail: i
              });
            } catch (t) {
              (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i);
            }

            t.dispatchEvent(n);
          }
        }, {
          key: "extend",
          value: function value(t, e) {
            var i = {};

            for (var n in t) {
              void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n];
            }

            return i;
          }
        }, {
          key: "offsetRelative",
          value: function value(t) {
            var e = {
              left: 0,
              top: 0
            };

            do {
              var i = t.offsetTop,
                  n = t.offsetLeft;
              isNaN(i) || (e.top += i), isNaN(n) || (e.left += n), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent;
            } while (t);

            return e;
          }
        }, {
          key: "addClass",
          value: function value(t, e) {
            c.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e);
          }
        }, {
          key: "removeClass",
          value: function value(t, e) {
            c.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "));
          }
        }, {
          key: "hasClass",
          value: function value(t, e) {
            return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className);
          }
        }, {
          key: "defaults",
          get: function get() {
            return n;
          }
        }]), c;
      }());

      t["default"] = i, window.StickySidebar = i;
    })(e);
  }(e = {
    exports: {}
  }, e.exports), e.exports),
      o = (i = n) && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i["default"] : i;
  t["default"] = o, t.__moduleExports = n, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/davidbowick/code/songwriting-challenge/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/davidbowick/code/songwriting-challenge/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });