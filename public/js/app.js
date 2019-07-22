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
// require('./jquery-3.4.1.min.js');
__webpack_require__(/*! ./sticky-sidebar.min.js */ "./resources/js/sticky-sidebar.min.js"); // require('./datepicker.min.js');


__webpack_require__(/*! ./leaflet.js */ "./resources/js/leaflet.js");

__webpack_require__(/*! ./cookies.min.js */ "./resources/js/cookies.min.js");

function isMobile() {
  if (window.innerWidth <= 600) {
    return true;
  } else {
    return false;
  }
}

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
var NowPlaying = {
  isPlaying: false,
  currentPostId: false,
  currentUserId: false,
  currentUserName: false,
  currentUserImage: false
}; // console.log(NowPlaying.isPlaying);

var AUDIO_PLAYING = false,
    CURRENT_SONG = false,
    // VOLUME = Cookies.get('volume') ? Cookies.get('volume') : 1,
SOMETHING = true;
$(function () {
  fadeInElements();

  if (isMobile()) {
    $(document).on('click', '.main-nav__user-link', function (e) {
      e.preventDefault();
      $('.user-drop-wrap').toggleClass('show');
    });
  }
  /* Show lyrics on click */


  $(document).on('click', '.show-lyrics', function (e) {
    console.log('boo');
    e.preventDefault();
    $(this).closest('.post').find('.post__lyrics').slideToggle();
  });
  /* Show comments on click */

  $(document).on('click', '.post__comment-link', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.closest('.post').find('.post__comments').slideToggle('fast', function () {
      if ($(this).is(':visible')) {
        $(this).find('input[name="comment"]').focus();
      }
    });
  });
  $(document).on('click', '.post .play-pause-btn', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $item = $this.closest('.post'),
        $mainPlayer = $('.main-player'),
        $songId = $item.data('song-id');
    $btn = $item.find('.play-pause-btn i'), $mainBtn = $mainPlayer.find('.play-pause-btn i'), $thebtn = $btn.parent(), $loadingIndicator = $mainPlayer.find('.main-player__playbar--loading'), $progress = $mainPlayer.find('.main-player__playbar--progress'), $seek = $item.find('.seek'), $mainProgress = '.main-player__playbar--progress', mainTitle = '.main-player__title', sID = $item.parent().parent().data('song-id');
    prompt = $item.data('prompt-title'), promptSlug = $item.data('prompt-slug'), userLink = $item.find('.post_artist').html(), postLink = $item.find('.share').attr('href'), liked = $item.find('.like').hasClass('liked'), $mainPlayer.attr('data-song-id', $songId); // Nothing is Playing

    if (NowPlaying.currentPostId != $songId) {
      $('.main-player__image').empty();
      var mainTitles = '<b><a href="' + postLink + '">"' + $item.data('title') + '"</a></b>' + '<br/>' + userLink;
      $(mainTitle).html(mainTitles);
      var $userImage = $item.find('.post__cover img').clone().appendTo('.main-player__image');
      $mainPlayer.fadeIn();
      $('.main-player__audio').attr('src', $item.data('audio')); // $('.main-player__audio').get(0)
      // CURRENT_SONG = $songId;

      NowPlaying.currentPostId = $songId;
      NowPlaying.currentPrompt = prompt;
      $('.main-player__prompt-name').text(prompt);
      $('.main-player__prompt ').attr('href', '/prompts/' + promptSlug);
      liked ? $('.main-player__like').addClass('liked') : '';
    }

    setTimeout(function () {
      $('.main-player .play-pause-btn').trigger('click');
    }, 250);
    $btn.attr('class', $item.hasClass('is-playing') ? 'fa fa-pause' : 'fa fa-play');
    $mainBtn.attr('class', $item.hasClass('is-playing') ? 'fa fa-pause' : 'fa fa-play');
  });
  $(document).on('click', '.main-player__volume-wrapper', function (e) {
    e.preventDefault();
    var myIcon = $(this).find('i'),
        mainAudio = '.main-player__audio';

    if (myIcon.hasClass('fa-volume-up')) {
      $(mainAudio).prop("volume", 0.0);
      VOLUME = 0;
      myIcon.removeClass('fa-volume-up').addClass('fa-volume-off'); // Cookies.set('volume', 0);
    } else if (myIcon.hasClass('fa-volume-off')) {
      $(mainAudio).prop("volume", 0.5);
      VOLUME = .5;
      myIcon.removeClass('fa-volume-off').addClass('fa-volume-down'); // Cookies.set('volume', .5);
    } else if (myIcon.hasClass('fa-volume-down')) {
      $(mainAudio).prop("volume", 1);
      VOLUME = 1;
      myIcon.removeClass('fa-volume-down').addClass('fa-volume-up'); // Cookies.set('volume', 1);
    }
  });
  var mainAudio = '.main-player__audio',
      loadingIndicator = '.main-player__playbar--loading',
      progressIndicator = '.main-player__playbar--progress',
      mainAudioPlayer = $(mainAudio).get(0);
  /*var promise = mainAudioPlayer.play();
  	if (promise !== undefined) {
  	}*/

  if ($(mainAudio).buffered != undefined && $(mainAudio).buffered.length != 0) {
    mainAudioPlayer.bind('progress', function () {
      var loaded = parseInt($(mainAudio).buffered.end(0) / $(mainAudio).duration * 100, 10);
      $(loadingIndicator).css({
        width: loaded + '%'
      });
    });
  } else {
    $(loadingIndicator).css({
      width: '100%'
    });
  }

  var pos = 0;
  var countedMe = false;
  $(mainAudioPlayer).bind('timeupdate', function () {
    // console.log(mainAudioPlayer.currentTime);
    // AUDIO_PLAYING = true;
    // NowPlaying.isPlaying = true
    var rem = parseInt(mainAudioPlayer.duration - mainAudioPlayer.currentTime, 10),
        mins = Math.floor(rem / 60, 10),
        secs = rem - mins * 60;
    pos = mainAudioPlayer.currentTime / mainAudioPlayer.duration * 100;
    $(progressIndicator).css({
      width: pos + '%'
    });
    var minutesElapsed = parseInt(mainAudioPlayer.currentTime / 60, 10);
    minutesElapsed = (minutesElapsed < 10 ? "0" : "") + minutesElapsed;
    var secondsElapsed = parseInt(mainAudioPlayer.currentTime % 60, 10);
    secondsElapsed = (secondsElapsed < 10 ? "0" : "") + secondsElapsed;
    var minutesTotal = parseInt(mainAudioPlayer.duration / 60, 10);
    minutesTotal = (minutesTotal < 10 ? "0" : "") + minutesTotal;
    var secondsTotal = parseInt(mainAudioPlayer.duration % 60, 10);
    secondsTotal = (secondsTotal < 10 ? "0" : "") + secondsTotal;
    $('.main-player__current-time').text(minutesElapsed + ':' + secondsElapsed);
    $('.main-player__total-time').text(minutesTotal + ':' + secondsTotal);
    $(progressIndicator).css({
      width: pos + '%'
    }); // Update for all iterations on page.

    if (!countedMe && pos >= 50) {
      countedMe = true;
      var myHref = '/play/' + NowPlaying.currentPostId;
      $.get(myHref, function (n) {
        $('.post[data-song-id="' + NowPlaying.currentPostId + '"').find('.play-count').text(n);
      });
    }
  }); // Update for all iterations on page

  $(mainAudioPlayer).bind('ended', function () {
    mainAudioPlayer.currentTime = 0;
    $('.post[data-song-id="' + NowPlaying.currentPostId + '"').removeClass('is-playing');
    $('.play-pause-btn i').removeClass('fa-pause').addClass('fa-play');
    countedMe = false;
    NowPlaying.isPlaying = false;
    var myIndex = $('.post[data-song-id="' + NowPlaying.currentPostId + '"]').index();
  });
  $(document).on('click', '.main-player .play-pause-btn', function (e) {
    e.preventDefault();
    var $this = $(this),
        btn = $this.find('i');
    songId = $('.main-player').attr('data-song-id');

    if (NowPlaying.isPlaying) {
      $('.main-player__audio').get(0).pause();
      btn.removeClass('fa-pause').addClass('fa-play');
      NowPlaying.isPlaying = false;
    } else {
      $('.main-player__audio').get(0).play();
      btn.removeClass('fa-play').addClass('fa-pause');
      NowPlaying.isPlaying = true;
    }

    pausePlayAllInstances(songId);
    console.log(NowPlaying.isPlaying);
  });
  $(document).on('click', '.main-player__like', function (e) {
    e.preventDefault();
    var $this = $(this),
        n = NowPlaying.currentPostId,
        posts = $('.post[data-song-id="' + n + '"]');
    $(this).attr('href', '/post/like/' + n);
    getLike(n);
  });

  function pausePlayAllInstances(n) {
    console.log(n);
    var posts = $('.post[data-song-id="' + n + '"]');
    console.log(posts.length, NowPlaying.isPlaying, NowPlaying.currentPostId);

    if (NowPlaying.isPlaying && NowPlaying.currentPostId == n) {
      posts.addClass('is-playing').find('.play-pause-btn i').removeClass('fa-play').addClass('fa-pause');
    } else {
      posts.removeClass('is-playing').find('.play-pause-btn i').removeClass('fa-pause').addClass('fa-play');
    }
  }

  function getLike(l) {
    $.get('/post/like/' + l, function (r) {
      var posts = $('.post[data-song-id="' + l + '"]');

      if (r.success == true) {
        posts.find('.like').addClass('liked');

        if (NowPlaying.currentPostId == l) {
          $('.main-player__like').addClass('liked');
        }
      } else {
        posts.find('.like').removeClass('liked');

        if (NowPlaying.currentPostId == l) {
          $('.main-player__like').removeClass('liked');
        }
      } // r.success ?  : 


      posts.find('.like-count').text(r.total_likes);
    });
  }

  $(document).on('click', '.post .like', function (e) {
    e.preventDefault();
    var $this = $(this),
        postID = $(this).data('song-id');
    getLike(postID);
  });
  $(document).on('submit', '.comment-form', function (e) {
    e.preventDefault(); // $('.comment-form').submit(function(e) {

    var $this = $(this);
    $.ajax({
      url: $this.attr('action'),
      type: 'post',
      data: $this.serialize(),
      dataType: 'json',
      success: function success(r) {
        console.log(r);
        var newComment = '<div class="post__comment anim-in come-in flex flex--align-center"><div class="post__comment--user"><a href="' + r.user.username + '"><img src="/storage/uploads/avatars/' + r.user.avatar + '" width="20" /></a></div><div class="post__comment--text">' + r.comment + '</div></div>';
        $(newComment).insertBefore('.comment-form');
        $this.find('input[name="comment"]').val('');
        var commentCount = parseInt($this.closest('.post_player').find('.comment-count').text()) + 1;
        $this.closest('.post_player').find('.comment-count').text(commentCount); // $('.post__comments').append(newComment);
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
  $(document).on('change keyup keydown paste cut', 'textarea', function () {
    $(this).height(0).height(this.scrollHeight);
  }); // console.log($('.sidebar__inner').data('sticky'));

  if ($('.sidebar__inner').data('sticky') == true && isMobile == false) {
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
  $('.top-search-wrapper').mouseleave(function () {
    var $this = $(this),
        tsr = '#top-search-results';
    $(tsr).fadeOut('fast', function () {
      $(tsr).empty();
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
  var siteURL = "http://" + top.location.host.toString();
  var $internalLinks = $("a[href^='" + siteURL + "'], a[href^='/'], a[href^='./'], a[href^='../']"); // $("a[href^=something]").not("[href=#]")

  $(document).on('click', 'a:not(.no-link)', function (e) {
    var $this = $(this),
        myHref = $this.attr('href'),
        mainContent = '#main-content';

    if (myHref != '#') {
      e.preventDefault();
      $.get(myHref, function (data) {
        $(mainContent).empty();
        var newHtml = $(data).find(mainContent).html();
        $(mainContent).html(newHtml); // document.getElementById("content").innerHTML = response.html;
        // document.title = $(data).pageTitle;
        // console.log($(data).find('title').text());

        window.history.pushState({
          "html": newHtml,
          "pageTitle": ''
        }, "", myHref);
        window.scrollTo(0, 0);
        fadeInElements();

        if (NowPlaying.isPlaying) {
          pausePlayAllInstances(NowPlaying.currentPostId);
        }
      });
    }
  });
  $('.footer-signup').submit(function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.find('.btn').text('Sending...');
    $.ajax({
      type: $this.attr('method'),
      url: $this.attr('action'),
      data: $this.serialize(),
      cache: false,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      error: function error(err) {
        alert('Could not connect to the registration server. Please try again later.');
      },
      success: function success(data) {
        $this.find('.btn').text('submit');

        if (data.result === 'success') {
          console.log(data.msg);
          $('#mce-EMAIL').removeClass('error');
          $('#mce-responses').text('Thank you for subscribing. We have sent you a confirmation email.').addClass('alert-success');
          $('#mce-EMAIL').val('');
        } else {
          console.log(data.msg); // $('#mce-EMAIL').css('borderColor', '#721c24')

          $('#mce-EMAIL').addClass('error');
          $('#mce-responses').text(data.msg.substring(4)).addClass('alert-danger');
        }
      }
    });
  });
});

function fadeInElements() {
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
}

window.onpopstate = function (e) {
  if (e.state) {
    document.getElementById("main-content").innerHTML = e.state.html;
    document.title = e.state.pageTitle;
    fadeInElements();
  }
}; // require('./bootstrap');
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

/***/ "./resources/js/cookies.min.js":
/*!*************************************!*\
  !*** ./resources/js/cookies.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (d, f) {
  "use strict";

  var h = function h(d) {
    if ("object" !== _typeof(d.document)) throw Error("Cookies.js requires a `window` with a `document` object");

    var b = function b(a, e, c) {
      return 1 === arguments.length ? b.get(a) : b.set(a, e, c);
    };

    b._document = d.document;
    b._cacheKeyPrefix = "cookey.";
    b._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC");
    b.defaults = {
      path: "/",
      secure: !1
    };

    b.get = function (a) {
      b._cachedDocumentCookie !== b._document.cookie && b._renewCache();
      a = b._cache[b._cacheKeyPrefix + a];
      return a === f ? f : decodeURIComponent(a);
    };

    b.set = function (a, e, c) {
      c = b._getExtendedOptions(c);
      c.expires = b._getExpiresDate(e === f ? -1 : c.expires);
      b._document.cookie = b._generateCookieString(a, e, c);
      return b;
    };

    b.expire = function (a, e) {
      return b.set(a, f, e);
    };

    b._getExtendedOptions = function (a) {
      return {
        path: a && a.path || b.defaults.path,
        domain: a && a.domain || b.defaults.domain,
        expires: a && a.expires || b.defaults.expires,
        secure: a && a.secure !== f ? a.secure : b.defaults.secure
      };
    };

    b._isValidDate = function (a) {
      return "[object Date]" === Object.prototype.toString.call(a) && !isNaN(a.getTime());
    };

    b._getExpiresDate = function (a, e) {
      e = e || new Date();
      "number" === typeof a ? a = Infinity === a ? b._maxExpireDate : new Date(e.getTime() + 1E3 * a) : "string" === typeof a && (a = new Date(a));
      if (a && !b._isValidDate(a)) throw Error("`expires` parameter cannot be converted to a valid Date instance");
      return a;
    };

    b._generateCookieString = function (a, b, c) {
      a = a.replace(/[^#$&+\^`|]/g, encodeURIComponent);
      a = a.replace(/\(/g, "%28").replace(/\)/g, "%29");
      b = (b + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
      c = c || {};
      a = a + "=" + b + (c.path ? ";path=" + c.path : "");
      a += c.domain ? ";domain=" + c.domain : "";
      a += c.expires ? ";expires=" + c.expires.toUTCString() : "";
      return a += c.secure ? ";secure" : "";
    };

    b._getCacheFromString = function (a) {
      var e = {};
      a = a ? a.split("; ") : [];

      for (var c = 0; c < a.length; c++) {
        var d = b._getKeyValuePairFromCookieString(a[c]);

        e[b._cacheKeyPrefix + d.key] === f && (e[b._cacheKeyPrefix + d.key] = d.value);
      }

      return e;
    };

    b._getKeyValuePairFromCookieString = function (a) {
      var b = a.indexOf("="),
          b = 0 > b ? a.length : b,
          c = a.substr(0, b),
          d;

      try {
        d = decodeURIComponent(c);
      } catch (k) {
        console && "function" === typeof console.error && console.error('Could not decode cookie with key "' + c + '"', k);
      }

      return {
        key: d,
        value: a.substr(b + 1)
      };
    };

    b._renewCache = function () {
      b._cache = b._getCacheFromString(b._document.cookie);
      b._cachedDocumentCookie = b._document.cookie;
    };

    b._areEnabled = function () {
      var a = "1" === b.set("cookies.js", 1).get("cookies.js");
      b.expire("cookies.js");
      return a;
    };

    b.enabled = b._areEnabled();
    return b;
  },
      g = d && "object" === _typeof(d.document) ? h(d) : h;

   true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return g;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})("undefined" === typeof window ? this : window);

/***/ }),

/***/ "./resources/js/leaflet.js":
/*!*********************************!*\
  !*** ./resources/js/leaflet.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* @preserve
 * Leaflet 1.5.1+Detached: 2e3e0ffbe87f246eb76d86d2633ddd59b262830b.2e3e0ff, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function (t, i) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? i(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t) {
  "use strict";

  var i = Object.freeze;

  function h(t) {
    var i, e, n, o;

    for (e = 1, n = arguments.length; e < n; e++) {
      for (i in o = arguments[e]) {
        t[i] = o[i];
      }
    }

    return t;
  }

  Object.freeze = function (t) {
    return t;
  };

  var s = Object.create || function (t) {
    return e.prototype = t, new e();
  };

  function e() {}

  function a(t, i) {
    var e = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
    var n = e.call(arguments, 2);
    return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }

  var n = 0;

  function u(t) {
    return t._leaflet_id = t._leaflet_id || ++n, t._leaflet_id;
  }

  function o(t, i, e) {
    var n, o, s, r;
    return r = function r() {
      n = !1, o && (s.apply(e, o), o = !1);
    }, s = function s() {
      n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0);
    };
  }

  function r(t, i, e) {
    var n = i[1],
        o = i[0],
        s = n - o;
    return t === n && e ? t : ((t - o) % s + s) % s + o;
  }

  function l() {
    return !1;
  }

  function c(t, i) {
    return i = void 0 === i ? 6 : i, +(Math.round(t + "e+" + i) + "e-" + i);
  }

  function _(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }

  function d(t) {
    return _(t).split(/\s+/);
  }

  function p(t, i) {
    for (var e in t.hasOwnProperty("options") || (t.options = t.options ? s(t.options) : {}), i) {
      t.options[e] = i[e];
    }

    return t.options;
  }

  function m(t, i, e) {
    var n = [];

    for (var o in t) {
      n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
    }

    return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&");
  }

  var f = /\{ *([\w_-]+) *\}/g;

  function g(t, n) {
    return t.replace(f, function (t, i) {
      var e = n[i];
      if (void 0 === e) throw new Error("No value provided for variable " + t);
      return "function" == typeof e && (e = e(n)), e;
    });
  }

  var v = Array.isArray || function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  };

  function y(t, i) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] === i) return e;
    }

    return -1;
  }

  var x = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

  function w(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }

  var P = 0;

  function b(t) {
    var i = +new Date(),
        e = Math.max(0, 16 - (i - P));
    return P = i + e, window.setTimeout(t, e);
  }

  var T = window.requestAnimationFrame || w("RequestAnimationFrame") || b,
      z = window.cancelAnimationFrame || w("CancelAnimationFrame") || w("CancelRequestAnimationFrame") || function (t) {
    window.clearTimeout(t);
  };

  function M(t, i, e) {
    if (!e || T !== b) return T.call(window, a(t, i));
    t.call(i);
  }

  function C(t) {
    t && z.call(window, t);
  }

  var S = (Object.freeze || Object)({
    freeze: i,
    extend: h,
    create: s,
    bind: a,
    lastId: n,
    stamp: u,
    throttle: o,
    wrapNum: r,
    falseFn: l,
    formatNum: c,
    trim: _,
    splitWords: d,
    setOptions: p,
    getParamString: m,
    template: g,
    isArray: v,
    indexOf: y,
    emptyImageUrl: x,
    requestFn: T,
    cancelFn: z,
    requestAnimFrame: M,
    cancelAnimFrame: C
  });

  function Z() {}

  Z.extend = function (t) {
    function i() {
      this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
    }

    var e = i.__super__ = this.prototype,
        n = s(e);

    for (var o in (n.constructor = i).prototype = n, this) {
      this.hasOwnProperty(o) && "prototype" !== o && "__super__" !== o && (i[o] = this[o]);
    }

    return t.statics && (h(i, t.statics), delete t.statics), t.includes && (function (t) {
      if ("undefined" == typeof L || !L || !L.Mixin) return;
      t = v(t) ? t : [t];

      for (var i = 0; i < t.length; i++) {
        t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }(t.includes), h.apply(null, [n].concat(t.includes)), delete t.includes), n.options && (t.options = h(s(n.options), t.options)), h(n, t), n._initHooks = [], n.callInitHooks = function () {
      if (!this._initHooksCalled) {
        e.callInitHooks && e.callInitHooks.call(this), this._initHooksCalled = !0;

        for (var t = 0, i = n._initHooks.length; t < i; t++) {
          n._initHooks[t].call(this);
        }
      }
    }, i;
  }, Z.include = function (t) {
    return h(this.prototype, t), this;
  }, Z.mergeOptions = function (t) {
    return h(this.prototype.options, t), this;
  }, Z.addInitHook = function (t) {
    var i = Array.prototype.slice.call(arguments, 1),
        e = "function" == typeof t ? t : function () {
      this[t].apply(this, i);
    };
    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this;
  };
  var E = {
    on: function on(t, i, e) {
      if ("object" == _typeof(t)) for (var n in t) {
        this._on(n, t[n], i);
      } else for (var o = 0, s = (t = d(t)).length; o < s; o++) {
        this._on(t[o], i, e);
      }
      return this;
    },
    off: function off(t, i, e) {
      if (t) {
        if ("object" == _typeof(t)) for (var n in t) {
          this._off(n, t[n], i);
        } else for (var o = 0, s = (t = d(t)).length; o < s; o++) {
          this._off(t[o], i, e);
        }
      } else delete this._events;
      return this;
    },
    _on: function _on(t, i, e) {
      this._events = this._events || {};
      var n = this._events[t];
      n || (n = [], this._events[t] = n), e === this && (e = void 0);

      for (var o = {
        fn: i,
        ctx: e
      }, s = n, r = 0, a = s.length; r < a; r++) {
        if (s[r].fn === i && s[r].ctx === e) return;
      }

      s.push(o);
    },
    _off: function _off(t, i, e) {
      var n, o, s;
      if (this._events && (n = this._events[t])) if (i) {
        if (e === this && (e = void 0), n) for (o = 0, s = n.length; o < s; o++) {
          var r = n[o];
          if (r.ctx === e && r.fn === i) return r.fn = l, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1);
        }
      } else {
        for (o = 0, s = n.length; o < s; o++) {
          n[o].fn = l;
        }

        delete this._events[t];
      }
    },
    fire: function fire(t, i, e) {
      if (!this.listens(t, e)) return this;
      var n = h({}, i, {
        type: t,
        target: this,
        sourceTarget: i && i.sourceTarget || this
      });

      if (this._events) {
        var o = this._events[t];

        if (o) {
          this._firingCount = this._firingCount + 1 || 1;

          for (var s = 0, r = o.length; s < r; s++) {
            var a = o[s];
            a.fn.call(a.ctx || this, n);
          }

          this._firingCount--;
        }
      }

      return e && this._propagateEvent(n), this;
    },
    listens: function listens(t, i) {
      var e = this._events && this._events[t];
      if (e && e.length) return !0;
      if (i) for (var n in this._eventParents) {
        if (this._eventParents[n].listens(t, i)) return !0;
      }
      return !1;
    },
    once: function once(t, i, e) {
      if ("object" == _typeof(t)) {
        for (var n in t) {
          this.once(n, t[n], i);
        }

        return this;
      }

      var o = a(function () {
        this.off(t, i, e).off(t, o, e);
      }, this);
      return this.on(t, i, e).on(t, o, e);
    },
    addEventParent: function addEventParent(t) {
      return this._eventParents = this._eventParents || {}, this._eventParents[u(t)] = t, this;
    },
    removeEventParent: function removeEventParent(t) {
      return this._eventParents && delete this._eventParents[u(t)], this;
    },
    _propagateEvent: function _propagateEvent(t) {
      for (var i in this._eventParents) {
        this._eventParents[i].fire(t.type, h({
          layer: t.target,
          propagatedFrom: t.target
        }, t), !0);
      }
    }
  };
  E.addEventListener = E.on, E.removeEventListener = E.clearAllEventListeners = E.off, E.addOneTimeEventListener = E.once, E.fireEvent = E.fire, E.hasEventListeners = E.listens;
  var k = Z.extend(E);

  function B(t, i, e) {
    this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i;
  }

  var A = Math.trunc || function (t) {
    return 0 < t ? Math.floor(t) : Math.ceil(t);
  };

  function I(t, i, e) {
    return t instanceof B ? t : v(t) ? new B(t[0], t[1]) : null == t ? t : "object" == _typeof(t) && "x" in t && "y" in t ? new B(t.x, t.y) : new B(t, i, e);
  }

  function O(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }

  function R(t, i) {
    return !t || t instanceof O ? t : new O(t, i);
  }

  function N(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }

  function D(t, i) {
    return t instanceof N ? t : new N(t, i);
  }

  function j(t, i, e) {
    if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
    this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e);
  }

  function W(t, i, e) {
    return t instanceof j ? t : v(t) && "object" != _typeof(t[0]) ? 3 === t.length ? new j(t[0], t[1], t[2]) : 2 === t.length ? new j(t[0], t[1]) : null : null == t ? t : "object" == _typeof(t) && "lat" in t ? new j(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new j(t, i, e);
  }

  B.prototype = {
    clone: function clone() {
      return new B(this.x, this.y);
    },
    add: function add(t) {
      return this.clone()._add(I(t));
    },
    _add: function _add(t) {
      return this.x += t.x, this.y += t.y, this;
    },
    subtract: function subtract(t) {
      return this.clone()._subtract(I(t));
    },
    _subtract: function _subtract(t) {
      return this.x -= t.x, this.y -= t.y, this;
    },
    divideBy: function divideBy(t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function _divideBy(t) {
      return this.x /= t, this.y /= t, this;
    },
    multiplyBy: function multiplyBy(t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function _multiplyBy(t) {
      return this.x *= t, this.y *= t, this;
    },
    scaleBy: function scaleBy(t) {
      return new B(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function unscaleBy(t) {
      return new B(this.x / t.x, this.y / t.y);
    },
    round: function round() {
      return this.clone()._round();
    },
    _round: function _round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    },
    floor: function floor() {
      return this.clone()._floor();
    },
    _floor: function _floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    },
    ceil: function ceil() {
      return this.clone()._ceil();
    },
    _ceil: function _ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    },
    trunc: function trunc() {
      return this.clone()._trunc();
    },
    _trunc: function _trunc() {
      return this.x = A(this.x), this.y = A(this.y), this;
    },
    distanceTo: function distanceTo(t) {
      var i = (t = I(t)).x - this.x,
          e = t.y - this.y;
      return Math.sqrt(i * i + e * e);
    },
    equals: function equals(t) {
      return (t = I(t)).x === this.x && t.y === this.y;
    },
    contains: function contains(t) {
      return t = I(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
    },
    toString: function toString() {
      return "Point(" + c(this.x) + ", " + c(this.y) + ")";
    }
  }, O.prototype = {
    extend: function extend(t) {
      return t = I(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this;
    },
    getCenter: function getCenter(t) {
      return new B((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
    },
    getBottomLeft: function getBottomLeft() {
      return new B(this.min.x, this.max.y);
    },
    getTopRight: function getTopRight() {
      return new B(this.max.x, this.min.y);
    },
    getTopLeft: function getTopLeft() {
      return this.min;
    },
    getBottomRight: function getBottomRight() {
      return this.max;
    },
    getSize: function getSize() {
      return this.max.subtract(this.min);
    },
    contains: function contains(t) {
      var i, e;
      return (t = "number" == typeof t[0] || t instanceof B ? I(t) : R(t)) instanceof O ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y;
    },
    intersects: function intersects(t) {
      t = R(t);
      var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= i.x && n.x <= e.x,
          r = o.y >= i.y && n.y <= e.y;
      return s && r;
    },
    overlaps: function overlaps(t) {
      t = R(t);
      var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x > i.x && n.x < e.x,
          r = o.y > i.y && n.y < e.y;
      return s && r;
    },
    isValid: function isValid() {
      return !(!this.min || !this.max);
    }
  }, N.prototype = {
    extend: function extend(t) {
      var i,
          e,
          n = this._southWest,
          o = this._northEast;
      if (t instanceof j) e = i = t;else {
        if (!(t instanceof N)) return t ? this.extend(W(t) || D(t)) : this;
        if (i = t._southWest, e = t._northEast, !i || !e) return this;
      }
      return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new j(i.lat, i.lng), this._northEast = new j(e.lat, e.lng)), this;
    },
    pad: function pad(t) {
      var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          o = Math.abs(i.lng - e.lng) * t;
      return new N(new j(i.lat - n, i.lng - o), new j(e.lat + n, e.lng + o));
    },
    getCenter: function getCenter() {
      return new j((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    getSouthWest: function getSouthWest() {
      return this._southWest;
    },
    getNorthEast: function getNorthEast() {
      return this._northEast;
    },
    getNorthWest: function getNorthWest() {
      return new j(this.getNorth(), this.getWest());
    },
    getSouthEast: function getSouthEast() {
      return new j(this.getSouth(), this.getEast());
    },
    getWest: function getWest() {
      return this._southWest.lng;
    },
    getSouth: function getSouth() {
      return this._southWest.lat;
    },
    getEast: function getEast() {
      return this._northEast.lng;
    },
    getNorth: function getNorth() {
      return this._northEast.lat;
    },
    contains: function contains(t) {
      t = "number" == typeof t[0] || t instanceof j || "lat" in t ? W(t) : D(t);
      var i,
          e,
          n = this._southWest,
          o = this._northEast;
      return t instanceof N ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng;
    },
    intersects: function intersects(t) {
      t = D(t);
      var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= i.lat && n.lat <= e.lat,
          r = o.lng >= i.lng && n.lng <= e.lng;
      return s && r;
    },
    overlaps: function overlaps(t) {
      t = D(t);
      var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > i.lat && n.lat < e.lat,
          r = o.lng > i.lng && n.lng < e.lng;
      return s && r;
    },
    toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
    },
    equals: function equals(t, i) {
      return !!t && (t = D(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i));
    },
    isValid: function isValid() {
      return !(!this._southWest || !this._northEast);
    }
  };
  var H,
      F = {
    latLngToPoint: function latLngToPoint(t, i) {
      var e = this.projection.project(t),
          n = this.scale(i);
      return this.transformation._transform(e, n);
    },
    pointToLatLng: function pointToLatLng(t, i) {
      var e = this.scale(i),
          n = this.transformation.untransform(t, e);
      return this.projection.unproject(n);
    },
    project: function project(t) {
      return this.projection.project(t);
    },
    unproject: function unproject(t) {
      return this.projection.unproject(t);
    },
    scale: function scale(t) {
      return 256 * Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t / 256) / Math.LN2;
    },
    getProjectedBounds: function getProjectedBounds(t) {
      if (this.infinite) return null;
      var i = this.projection.bounds,
          e = this.scale(t);
      return new O(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e));
    },
    infinite: !(j.prototype = {
      equals: function equals(t, i) {
        return !!t && (t = W(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i));
      },
      toString: function toString(t) {
        return "LatLng(" + c(this.lat, t) + ", " + c(this.lng, t) + ")";
      },
      distanceTo: function distanceTo(t) {
        return U.distance(this, W(t));
      },
      wrap: function wrap() {
        return U.wrapLatLng(this);
      },
      toBounds: function toBounds(t) {
        var i = 180 * t / 40075017,
            e = i / Math.cos(Math.PI / 180 * this.lat);
        return D([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
      },
      clone: function clone() {
        return new j(this.lat, this.lng, this.alt);
      }
    }),
    wrapLatLng: function wrapLatLng(t) {
      var i = this.wrapLng ? r(t.lng, this.wrapLng, !0) : t.lng;
      return new j(this.wrapLat ? r(t.lat, this.wrapLat, !0) : t.lat, i, t.alt);
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          o = i.lng - e.lng;
      if (0 == n && 0 == o) return t;
      var s = t.getSouthWest(),
          r = t.getNorthEast();
      return new N(new j(s.lat - n, s.lng - o), new j(r.lat - n, r.lng - o));
    }
  },
      U = h({}, F, {
    wrapLng: [-180, 180],
    R: 6371e3,
    distance: function distance(t, i) {
      var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s = Math.sin((i.lat - t.lat) * e / 2),
          r = Math.sin((i.lng - t.lng) * e / 2),
          a = s * s + Math.cos(n) * Math.cos(o) * r * r,
          h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return this.R * h;
    }
  }),
      V = 6378137,
      q = {
    R: V,
    MAX_LATITUDE: 85.0511287798,
    project: function project(t) {
      var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          n = Math.max(Math.min(e, t.lat), -e),
          o = Math.sin(n * i);
      return new B(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2);
    },
    unproject: function unproject(t) {
      var i = 180 / Math.PI;
      return new j((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R);
    },
    bounds: (H = V * Math.PI, new O([-H, -H], [H, H]))
  };

  function G(t, i, e, n) {
    if (v(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void (this._d = t[3]);
    this._a = t, this._b = i, this._c = e, this._d = n;
  }

  function K(t, i, e, n) {
    return new G(t, i, e, n);
  }

  G.prototype = {
    transform: function transform(t, i) {
      return this._transform(t.clone(), i);
    },
    _transform: function _transform(t, i) {
      return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t;
    },
    untransform: function untransform(t, i) {
      return i = i || 1, new B((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c);
    }
  };
  var Y,
      X = h({}, U, {
    code: "EPSG:3857",
    projection: q,
    transformation: (Y = .5 / (Math.PI * q.R), K(Y, .5, -Y, .5))
  }),
      J = h({}, X, {
    code: "EPSG:900913"
  });

  function $(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }

  function Q(t, i) {
    var e,
        n,
        o,
        s,
        r,
        a,
        h = "";

    for (e = 0, o = t.length; e < o; e++) {
      for (n = 0, s = (r = t[e]).length; n < s; n++) {
        h += (n ? "L" : "M") + (a = r[n]).x + " " + a.y;
      }

      h += i ? Zt ? "z" : "x" : "";
    }

    return h || "M0 0";
  }

  var tt = document.documentElement.style,
      it = "ActiveXObject" in window,
      et = it && !document.addEventListener,
      nt = "msLaunchUri" in navigator && !("documentMode" in document),
      ot = kt("webkit"),
      st = kt("android"),
      rt = kt("android 2") || kt("android 3"),
      at = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      ht = st && kt("Google") && at < 537 && !("AudioNode" in window),
      ut = !!window.opera,
      lt = kt("chrome"),
      ct = kt("gecko") && !ot && !ut && !it,
      _t = !lt && kt("safari"),
      dt = kt("phantom"),
      pt = "OTransition" in tt,
      mt = 0 === navigator.platform.indexOf("Win"),
      ft = it && "transition" in tt,
      gt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !rt,
      vt = "MozPerspective" in tt,
      yt = !window.L_DISABLE_3D && (ft || gt || vt) && !pt && !dt,
      xt = "undefined" != typeof orientation || kt("mobile"),
      wt = xt && ot,
      Pt = xt && gt,
      Lt = !window.PointerEvent && window.MSPointerEvent,
      bt = !(!window.PointerEvent && !Lt),
      Tt = !window.L_NO_TOUCH && (bt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
      zt = xt && ut,
      Mt = xt && ct,
      Ct = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
      St = !!document.createElement("canvas").getContext,
      Zt = !(!document.createElementNS || !$("svg").createSVGRect),
      Et = !Zt && function () {
    try {
      var t = document.createElement("div");
      t.innerHTML = '<v:shape adj="1"/>';
      var i = t.firstChild;
      return i.style.behavior = "url(#default#VML)", i && "object" == _typeof(i.adj);
    } catch (t) {
      return !1;
    }
  }();

  function kt(t) {
    return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
  }

  var Bt = (Object.freeze || Object)({
    ie: it,
    ielt9: et,
    edge: nt,
    webkit: ot,
    android: st,
    android23: rt,
    androidStock: ht,
    opera: ut,
    chrome: lt,
    gecko: ct,
    safari: _t,
    phantom: dt,
    opera12: pt,
    win: mt,
    ie3d: ft,
    webkit3d: gt,
    gecko3d: vt,
    any3d: yt,
    mobile: xt,
    mobileWebkit: wt,
    mobileWebkit3d: Pt,
    msPointer: Lt,
    pointer: bt,
    touch: Tt,
    mobileOpera: zt,
    mobileGecko: Mt,
    retina: Ct,
    canvas: St,
    svg: Zt,
    vml: Et
  }),
      At = Lt ? "MSPointerDown" : "pointerdown",
      It = Lt ? "MSPointerMove" : "pointermove",
      Ot = Lt ? "MSPointerUp" : "pointerup",
      Rt = Lt ? "MSPointerCancel" : "pointercancel",
      Nt = ["INPUT", "SELECT", "OPTION"],
      Dt = {},
      jt = !1,
      Wt = 0;

  function Ht(t, i, e, n) {
    return "touchstart" === i ? function (t, i, e) {
      var n = a(function (t) {
        if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
          if (!(Nt.indexOf(t.target.tagName) < 0)) return;
          Di(t);
        }

        qt(t, i);
      });
      t["_leaflet_touchstart" + e] = n, t.addEventListener(At, n, !1), jt || (document.documentElement.addEventListener(At, Ft, !0), document.documentElement.addEventListener(It, Ut, !0), document.documentElement.addEventListener(Ot, Vt, !0), document.documentElement.addEventListener(Rt, Vt, !0), jt = !0);
    }(t, e, n) : "touchmove" === i ? function (t, i, e) {
      var n = function n(t) {
        (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && qt(t, i);
      };

      t["_leaflet_touchmove" + e] = n, t.addEventListener(It, n, !1);
    }(t, e, n) : "touchend" === i && function (t, i, e) {
      var n = function n(t) {
        qt(t, i);
      };

      t["_leaflet_touchend" + e] = n, t.addEventListener(Ot, n, !1), t.addEventListener(Rt, n, !1);
    }(t, e, n), this;
  }

  function Ft(t) {
    Dt[t.pointerId] = t, Wt++;
  }

  function Ut(t) {
    Dt[t.pointerId] && (Dt[t.pointerId] = t);
  }

  function Vt(t) {
    delete Dt[t.pointerId], Wt--;
  }

  function qt(t, i) {
    for (var e in t.touches = [], Dt) {
      t.touches.push(Dt[e]);
    }

    t.changedTouches = [t], i(t);
  }

  var Gt = Lt ? "MSPointerDown" : bt ? "pointerdown" : "touchstart",
      Kt = Lt ? "MSPointerUp" : bt ? "pointerup" : "touchend",
      Yt = "_leaflet_";

  function Xt(t, o, i) {
    var s,
        r,
        a = !1;

    function e(t) {
      var i;

      if (bt) {
        if (!nt || "mouse" === t.pointerType) return;
        i = Wt;
      } else i = t.touches.length;

      if (!(1 < i)) {
        var e = Date.now(),
            n = e - (s || e);
        r = t.touches ? t.touches[0] : t, a = 0 < n && n <= 250, s = e;
      }
    }

    function n(t) {
      if (a && !r.cancelBubble) {
        if (bt) {
          if (!nt || "mouse" === t.pointerType) return;
          var i,
              e,
              n = {};

          for (e in r) {
            i = r[e], n[e] = i && i.bind ? i.bind(r) : i;
          }

          r = n;
        }

        r.type = "dblclick", r.button = 0, o(r), s = null;
      }
    }

    return t[Yt + Gt + i] = e, t[Yt + Kt + i] = n, t[Yt + "dblclick" + i] = o, t.addEventListener(Gt, e, !1), t.addEventListener(Kt, n, !1), t.addEventListener("dblclick", o, !1), this;
  }

  function Jt(t, i) {
    var e = t[Yt + Gt + i],
        n = t[Yt + Kt + i],
        o = t[Yt + "dblclick" + i];
    return t.removeEventListener(Gt, e, !1), t.removeEventListener(Kt, n, !1), nt || t.removeEventListener("dblclick", o, !1), this;
  }

  var $t,
      Qt,
      ti,
      ii,
      ei,
      ni = yi(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
      oi = yi(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
      si = "webkitTransition" === oi || "OTransition" === oi ? oi + "End" : "transitionend";

  function ri(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }

  function ai(t, i) {
    var e = t.style[i] || t.currentStyle && t.currentStyle[i];

    if ((!e || "auto" === e) && document.defaultView) {
      var n = document.defaultView.getComputedStyle(t, null);
      e = n ? n[i] : null;
    }

    return "auto" === e ? null : e;
  }

  function hi(t, i, e) {
    var n = document.createElement(t);
    return n.className = i || "", e && e.appendChild(n), n;
  }

  function ui(t) {
    var i = t.parentNode;
    i && i.removeChild(t);
  }

  function li(t) {
    for (; t.firstChild;) {
      t.removeChild(t.firstChild);
    }
  }

  function ci(t) {
    var i = t.parentNode;
    i && i.lastChild !== t && i.appendChild(t);
  }

  function _i(t) {
    var i = t.parentNode;
    i && i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }

  function di(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);
    var e = gi(t);
    return 0 < e.length && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e);
  }

  function pi(t, i) {
    if (void 0 !== t.classList) for (var e = d(i), n = 0, o = e.length; n < o; n++) {
      t.classList.add(e[n]);
    } else if (!di(t, i)) {
      var s = gi(t);
      fi(t, (s ? s + " " : "") + i);
    }
  }

  function mi(t, i) {
    void 0 !== t.classList ? t.classList.remove(i) : fi(t, _((" " + gi(t) + " ").replace(" " + i + " ", " ")));
  }

  function fi(t, i) {
    void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i;
  }

  function gi(t) {
    return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal;
  }

  function vi(t, i) {
    "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && function (t, i) {
      var e = !1,
          n = "DXImageTransform.Microsoft.Alpha";

      try {
        e = t.filters.item(n);
      } catch (t) {
        if (1 === i) return;
      }

      i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")";
    }(t, i);
  }

  function yi(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++) {
      if (t[e] in i) return t[e];
    }

    return !1;
  }

  function xi(t, i, e) {
    var n = i || new B(0, 0);
    t.style[ni] = (ft ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "");
  }

  function wi(t, i) {
    t._leaflet_pos = i, yt ? xi(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px");
  }

  function Pi(t) {
    return t._leaflet_pos || new B(0, 0);
  }

  if ("onselectstart" in document) $t = function $t() {
    Ei(window, "selectstart", Di);
  }, Qt = function Qt() {
    Bi(window, "selectstart", Di);
  };else {
    var Li = yi(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
    $t = function $t() {
      if (Li) {
        var t = document.documentElement.style;
        ti = t[Li], t[Li] = "none";
      }
    }, Qt = function Qt() {
      Li && (document.documentElement.style[Li] = ti, ti = void 0);
    };
  }

  function bi() {
    Ei(window, "dragstart", Di);
  }

  function Ti() {
    Bi(window, "dragstart", Di);
  }

  function zi(t) {
    for (; -1 === t.tabIndex;) {
      t = t.parentNode;
    }

    t.style && (Mi(), ei = (ii = t).style.outline, t.style.outline = "none", Ei(window, "keydown", Mi));
  }

  function Mi() {
    ii && (ii.style.outline = ei, ei = ii = void 0, Bi(window, "keydown", Mi));
  }

  function Ci(t) {
    for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body);) {
      ;
    }

    return t;
  }

  function Si(t) {
    var i = t.getBoundingClientRect();
    return {
      x: i.width / t.offsetWidth || 1,
      y: i.height / t.offsetHeight || 1,
      boundingClientRect: i
    };
  }

  var Zi = (Object.freeze || Object)({
    TRANSFORM: ni,
    TRANSITION: oi,
    TRANSITION_END: si,
    get: ri,
    getStyle: ai,
    create: hi,
    remove: ui,
    empty: li,
    toFront: ci,
    toBack: _i,
    hasClass: di,
    addClass: pi,
    removeClass: mi,
    setClass: fi,
    getClass: gi,
    setOpacity: vi,
    testProp: yi,
    setTransform: xi,
    setPosition: wi,
    getPosition: Pi,
    disableTextSelection: $t,
    enableTextSelection: Qt,
    disableImageDrag: bi,
    enableImageDrag: Ti,
    preventOutline: zi,
    restoreOutline: Mi,
    getSizedParentNode: Ci,
    getScale: Si
  });

  function Ei(t, i, e, n) {
    if ("object" == _typeof(i)) for (var o in i) {
      Ai(t, o, i[o], e);
    } else for (var s = 0, r = (i = d(i)).length; s < r; s++) {
      Ai(t, i[s], e, n);
    }
    return this;
  }

  var ki = "_leaflet_events";

  function Bi(t, i, e, n) {
    if ("object" == _typeof(i)) for (var o in i) {
      Ii(t, o, i[o], e);
    } else if (i) for (var s = 0, r = (i = d(i)).length; s < r; s++) {
      Ii(t, i[s], e, n);
    } else {
      for (var a in t[ki]) {
        Ii(t, a, t[ki][a]);
      }

      delete t[ki];
    }
    return this;
  }

  function Ai(i, t, e, n) {
    var o = t + u(e) + (n ? "_" + u(n) : "");
    if (i[ki] && i[ki][o]) return this;

    var s = function s(t) {
      return e.call(n || i, t || window.event);
    },
        r = s;

    bt && 0 === t.indexOf("touch") ? Ht(i, t, s, o) : !Tt || "dblclick" !== t || bt && lt ? "addEventListener" in i ? "mousewheel" === t ? i.addEventListener("onwheel" in i ? "wheel" : "mousewheel", s, !1) : "mouseenter" === t || "mouseleave" === t ? (s = function s(t) {
      t = t || window.event, Ki(i, t) && r(t);
    }, i.addEventListener("mouseenter" === t ? "mouseover" : "mouseout", s, !1)) : ("click" === t && st && (s = function s(t) {
      !function (t, i) {
        var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
            n = Ui && e - Ui;
        if (n && 100 < n && n < 500 || t.target._simulatedClick && !t._simulated) return ji(t);
        Ui = e, i(t);
      }(t, r);
    }), i.addEventListener(t, s, !1)) : "attachEvent" in i && i.attachEvent("on" + t, s) : Xt(i, s, o), i[ki] = i[ki] || {}, i[ki][o] = s;
  }

  function Ii(t, i, e, n) {
    var o = i + u(e) + (n ? "_" + u(n) : ""),
        s = t[ki] && t[ki][o];
    if (!s) return this;
    bt && 0 === i.indexOf("touch") ? function (t, i, e) {
      var n = t["_leaflet_" + i + e];
      "touchstart" === i ? t.removeEventListener(At, n, !1) : "touchmove" === i ? t.removeEventListener(It, n, !1) : "touchend" === i && (t.removeEventListener(Ot, n, !1), t.removeEventListener(Rt, n, !1));
    }(t, i, o) : !Tt || "dblclick" !== i || bt && lt ? "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", s, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, s, !1) : "detachEvent" in t && t.detachEvent("on" + i, s) : Jt(t, o), t[ki][o] = null;
  }

  function Oi(t) {
    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Gi(t), this;
  }

  function Ri(t) {
    return Ai(t, "mousewheel", Oi), this;
  }

  function Ni(t) {
    return Ei(t, "mousedown touchstart dblclick", Oi), Ai(t, "click", qi), this;
  }

  function Di(t) {
    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
  }

  function ji(t) {
    return Di(t), Oi(t), this;
  }

  function Wi(t, i) {
    if (!i) return new B(t.clientX, t.clientY);
    var e = Si(i),
        n = e.boundingClientRect;
    return new B((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop);
  }

  var Hi = mt && lt ? 2 * window.devicePixelRatio : ct ? window.devicePixelRatio : 1;

  function Fi(t) {
    return nt ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Hi : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
  }

  var Ui,
      Vi = {};

  function qi(t) {
    Vi[t.type] = !0;
  }

  function Gi(t) {
    var i = Vi[t.type];
    return Vi[t.type] = !1, i;
  }

  function Ki(t, i) {
    var e = i.relatedTarget;
    if (!e) return !0;

    try {
      for (; e && e !== t;) {
        e = e.parentNode;
      }
    } catch (t) {
      return !1;
    }

    return e !== t;
  }

  var Yi = (Object.freeze || Object)({
    on: Ei,
    off: Bi,
    stopPropagation: Oi,
    disableScrollPropagation: Ri,
    disableClickPropagation: Ni,
    preventDefault: Di,
    stop: ji,
    getMousePosition: Wi,
    getWheelDelta: Fi,
    fakeStop: qi,
    skipped: Gi,
    isExternalTarget: Ki,
    addListener: Ei,
    removeListener: Bi
  }),
      Xi = k.extend({
    run: function run(t, i, e, n) {
      this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = Pi(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
    },
    stop: function stop() {
      this._inProgress && (this._step(!0), this._complete());
    },
    _animate: function _animate() {
      this._animId = M(this._animate, this), this._step();
    },
    _step: function _step(t) {
      var i = +new Date() - this._startTime,
          e = 1e3 * this._duration;
      i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete());
    },
    _runFrame: function _runFrame(t, i) {
      var e = this._startPos.add(this._offset.multiplyBy(t));

      i && e._round(), wi(this._el, e), this.fire("step");
    },
    _complete: function _complete() {
      C(this._animId), this._inProgress = !1, this.fire("end");
    },
    _easeOut: function _easeOut(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    }
  }),
      Ji = k.extend({
    options: {
      crs: X,
      center: void 0,
      zoom: void 0,
      minZoom: void 0,
      maxZoom: void 0,
      layers: [],
      maxBounds: void 0,
      renderer: void 0,
      zoomAnimation: !0,
      zoomAnimationThreshold: 4,
      fadeAnimation: !0,
      markerZoomAnimation: !0,
      transform3DLimit: 8388608,
      zoomSnap: 1,
      zoomDelta: 1,
      trackResize: !0
    },
    initialize: function initialize(t, i) {
      i = p(this, i), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = a(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(W(i.center), i.zoom, {
        reset: !0
      }), this.callInitHooks(), this._zoomAnimated = oi && yt && !zt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Ei(this._proxy, si, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
    },
    setView: function setView(t, i, e) {
      if ((i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(W(t), i, this.options.maxBounds), e = e || {}, this._stop(), this._loaded && !e.reset && !0 !== e) && (void 0 !== e.animate && (e.zoom = h({
        animate: e.animate
      }, e.zoom), e.pan = h({
        animate: e.animate,
        duration: e.duration
      }, e.pan)), this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom) : this._tryAnimatedPan(t, e.pan))) return clearTimeout(this._sizeTimer), this;
      return this._resetView(t, i), this;
    },
    setZoom: function setZoom(t, i) {
      return this._loaded ? this.setView(this.getCenter(), t, {
        zoom: i
      }) : (this._zoom = t, this);
    },
    zoomIn: function zoomIn(t, i) {
      return t = t || (yt ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i);
    },
    zoomOut: function zoomOut(t, i) {
      return t = t || (yt ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i);
    },
    setZoomAround: function setZoomAround(t, i, e) {
      var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          s = (t instanceof B ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
          r = this.containerPointToLatLng(o.add(s));
      return this.setView(r, i, {
        zoom: e
      });
    },
    _getBoundsCenterZoom: function _getBoundsCenterZoom(t, i) {
      i = i || {}, t = t.getBounds ? t.getBounds() : D(t);
      var e = I(i.paddingTopLeft || i.padding || [0, 0]),
          n = I(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));
      if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
        center: t.getCenter(),
        zoom: o
      };
      var s = n.subtract(e).divideBy(2),
          r = this.project(t.getSouthWest(), o),
          a = this.project(t.getNorthEast(), o);
      return {
        center: this.unproject(r.add(a).divideBy(2).add(s), o),
        zoom: o
      };
    },
    fitBounds: function fitBounds(t, i) {
      if (!(t = D(t)).isValid()) throw new Error("Bounds are not valid.");

      var e = this._getBoundsCenterZoom(t, i);

      return this.setView(e.center, e.zoom, i);
    },
    fitWorld: function fitWorld(t) {
      return this.fitBounds([[-90, -180], [90, 180]], t);
    },
    panTo: function panTo(t, i) {
      return this.setView(t, this._zoom, {
        pan: i
      });
    },
    panBy: function panBy(t, i) {
      if (i = i || {}, !(t = I(t).round()).x && !t.y) return this.fire("moveend");
      if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;

      if (this._panAnim || (this._panAnim = new Xi(), this._panAnim.on({
        step: this._onPanTransitionStep,
        end: this._onPanTransitionEnd
      }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
        pi(this._mapPane, "leaflet-pan-anim");

        var e = this._getMapPanePos().subtract(t).round();

        this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity);
      } else this._rawPanBy(t), this.fire("move").fire("moveend");

      return this;
    },
    flyTo: function flyTo(n, o, t) {
      if (!1 === (t = t || {}).animate || !yt) return this.setView(n, o, t);

      this._stop();

      var s = this.project(this.getCenter()),
          r = this.project(n),
          i = this.getSize(),
          a = this._zoom;
      n = W(n), o = void 0 === o ? a : o;

      var h = Math.max(i.x, i.y),
          u = h * this.getZoomScale(a, o),
          l = r.distanceTo(s) || 1,
          c = 1.42,
          _ = c * c;

      function e(t) {
        var i = (u * u - h * h + (t ? -1 : 1) * _ * _ * l * l) / (2 * (t ? u : h) * _ * l),
            e = Math.sqrt(i * i + 1) - i;
        return e < 1e-9 ? -18 : Math.log(e);
      }

      function d(t) {
        return (Math.exp(t) - Math.exp(-t)) / 2;
      }

      function p(t) {
        return (Math.exp(t) + Math.exp(-t)) / 2;
      }

      var m = e(0);

      function f(t) {
        return h * (p(m) * function (t) {
          return d(t) / p(t);
        }(m + c * t) - d(m)) / _;
      }

      var g = Date.now(),
          v = (e(1) - m) / c,
          y = t.duration ? 1e3 * t.duration : 1e3 * v * .8;
      return this._moveStart(!0, t.noMoveStart), function t() {
        var i = (Date.now() - g) / y,
            e = function (t) {
          return 1 - Math.pow(1 - t, 1.5);
        }(i) * v;

        i <= 1 ? (this._flyToFrame = M(t, this), this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(e) / l)), a), this.getScaleZoom(h / function (t) {
          return h * (p(m) / p(m + c * t));
        }(e), a), {
          flyTo: !0
        })) : this._move(n, o)._moveEnd(!0);
      }.call(this), this;
    },
    flyToBounds: function flyToBounds(t, i) {
      var e = this._getBoundsCenterZoom(t, i);

      return this.flyTo(e.center, e.zoom, i);
    },
    setMaxBounds: function setMaxBounds(t) {
      return (t = D(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds));
    },
    setMinZoom: function setMinZoom(t) {
      var i = this.options.minZoom;
      return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
    },
    setMaxZoom: function setMaxZoom(t) {
      var i = this.options.maxZoom;
      return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
    },
    panInsideBounds: function panInsideBounds(t, i) {
      this._enforcingBounds = !0;

      var e = this.getCenter(),
          n = this._limitCenter(e, this._zoom, D(t));

      return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this;
    },
    panInside: function panInside(t, i) {
      var e = I((i = i || {}).paddingTopLeft || i.padding || [0, 0]),
          n = I(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getCenter(),
          s = this.project(o),
          r = this.project(t),
          a = this.getPixelBounds(),
          h = a.getSize().divideBy(2),
          u = R([a.min.add(e), a.max.subtract(n)]);

      if (!u.contains(r)) {
        this._enforcingBounds = !0;
        var l = s.subtract(r),
            c = I(r.x + l.x, r.y + l.y);
        (r.x < u.min.x || r.x > u.max.x) && (c.x = s.x - l.x, 0 < l.x ? c.x += h.x - e.x : c.x -= h.x - n.x), (r.y < u.min.y || r.y > u.max.y) && (c.y = s.y - l.y, 0 < l.y ? c.y += h.y - e.y : c.y -= h.y - n.y), this.panTo(this.unproject(c), i), this._enforcingBounds = !1;
      }

      return this;
    },
    invalidateSize: function invalidateSize(t) {
      if (!this._loaded) return this;
      t = h({
        animate: !1,
        pan: !0
      }, !0 === t ? {
        animate: !0
      } : t);
      var i = this.getSize();
      this._sizeChanged = !0, this._lastCenter = null;
      var e = this.getSize(),
          n = i.divideBy(2).round(),
          o = e.divideBy(2).round(),
          s = n.subtract(o);
      return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
        oldSize: i,
        newSize: e
      })) : this;
    },
    stop: function stop() {
      return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
    },
    locate: function locate(t) {
      if (t = this._locateOptions = h({
        timeout: 1e4,
        watch: !1
      }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
        code: 0,
        message: "Geolocation not supported."
      }), this;
      var i = a(this._handleGeolocationResponse, this),
          e = a(this._handleGeolocationError, this);
      return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, e, t) : navigator.geolocation.getCurrentPosition(i, e, t), this;
    },
    stopLocate: function stopLocate() {
      return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
    },
    _handleGeolocationError: function _handleGeolocationError(t) {
      var i = t.code,
          e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
      this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
        code: i,
        message: "Geolocation error: " + e + "."
      });
    },
    _handleGeolocationResponse: function _handleGeolocationResponse(t) {
      var i = new j(t.coords.latitude, t.coords.longitude),
          e = i.toBounds(2 * t.coords.accuracy),
          n = this._locateOptions;

      if (n.setView) {
        var o = this.getBoundsZoom(e);
        this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o);
      }

      var s = {
        latlng: i,
        bounds: e,
        timestamp: t.timestamp
      };

      for (var r in t.coords) {
        "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
      }

      this.fire("locationfound", s);
    },
    addHandler: function addHandler(t, i) {
      if (!i) return this;
      var e = this[t] = new i(this);
      return this._handlers.push(e), this.options[t] && e.enable(), this;
    },
    remove: function remove() {
      if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");

      try {
        delete this._container._leaflet_id, delete this._containerId;
      } catch (t) {
        this._container._leaflet_id = void 0, this._containerId = void 0;
      }

      var t;

      for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ui(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (C(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) {
        this._layers[t].remove();
      }

      for (t in this._panes) {
        ui(this._panes[t]);
      }

      return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
    },
    createPane: function createPane(t, i) {
      var e = hi("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
      return t && (this._panes[t] = e), e;
    },
    getCenter: function getCenter() {
      return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    getZoom: function getZoom() {
      return this._zoom;
    },
    getBounds: function getBounds() {
      var t = this.getPixelBounds();
      return new N(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
    },
    getMinZoom: function getMinZoom() {
      return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
    },
    getMaxZoom: function getMaxZoom() {
      return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
    },
    getBoundsZoom: function getBoundsZoom(t, i, e) {
      t = D(t), e = I(e || [0, 0]);

      var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          a = t.getSouthEast(),
          h = this.getSize().subtract(e),
          u = R(this.project(a, n), this.project(r, n)).getSize(),
          l = yt ? this.options.zoomSnap : 1,
          c = h.x / u.x,
          _ = h.y / u.y,
          d = i ? Math.max(c, _) : Math.min(c, _);

      return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n));
    },
    getSize: function getSize() {
      return this._size && !this._sizeChanged || (this._size = new B(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
    },
    getPixelBounds: function getPixelBounds(t, i) {
      var e = this._getTopLeftPoint(t, i);

      return new O(e, e.add(this.getSize()));
    },
    getPixelOrigin: function getPixelOrigin() {
      return this._checkIfLoaded(), this._pixelOrigin;
    },
    getPixelWorldBounds: function getPixelWorldBounds(t) {
      return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
    },
    getPane: function getPane(t) {
      return "string" == typeof t ? this._panes[t] : t;
    },
    getPanes: function getPanes() {
      return this._panes;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    getZoomScale: function getZoomScale(t, i) {
      var e = this.options.crs;
      return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i);
    },
    getScaleZoom: function getScaleZoom(t, i) {
      var e = this.options.crs;
      i = void 0 === i ? this._zoom : i;
      var n = e.zoom(t * e.scale(i));
      return isNaN(n) ? 1 / 0 : n;
    },
    project: function project(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(W(t), i);
    },
    unproject: function unproject(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(I(t), i);
    },
    layerPointToLatLng: function layerPointToLatLng(t) {
      var i = I(t).add(this.getPixelOrigin());
      return this.unproject(i);
    },
    latLngToLayerPoint: function latLngToLayerPoint(t) {
      return this.project(W(t))._round()._subtract(this.getPixelOrigin());
    },
    wrapLatLng: function wrapLatLng(t) {
      return this.options.crs.wrapLatLng(W(t));
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      return this.options.crs.wrapLatLngBounds(D(t));
    },
    distance: function distance(t, i) {
      return this.options.crs.distance(W(t), W(i));
    },
    containerPointToLayerPoint: function containerPointToLayerPoint(t) {
      return I(t).subtract(this._getMapPanePos());
    },
    layerPointToContainerPoint: function layerPointToContainerPoint(t) {
      return I(t).add(this._getMapPanePos());
    },
    containerPointToLatLng: function containerPointToLatLng(t) {
      var i = this.containerPointToLayerPoint(I(t));
      return this.layerPointToLatLng(i);
    },
    latLngToContainerPoint: function latLngToContainerPoint(t) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(t)));
    },
    mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
      return Wi(t, this._container);
    },
    mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
    },
    mouseEventToLatLng: function mouseEventToLatLng(t) {
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
    },
    _initContainer: function _initContainer(t) {
      var i = this._container = ri(t);
      if (!i) throw new Error("Map container not found.");
      if (i._leaflet_id) throw new Error("Map container is already initialized.");
      Ei(i, "scroll", this._onScroll, this), this._containerId = u(i);
    },
    _initLayout: function _initLayout() {
      var t = this._container;
      this._fadeAnimated = this.options.fadeAnimation && yt, pi(t, "leaflet-container" + (Tt ? " leaflet-touch" : "") + (Ct ? " leaflet-retina" : "") + (et ? " leaflet-oldie" : "") + (_t ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
      var i = ai(t, "position");
      "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
    },
    _initPanes: function _initPanes() {
      var t = this._panes = {};
      this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), wi(this._mapPane, new B(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (pi(t.markerPane, "leaflet-zoom-hide"), pi(t.shadowPane, "leaflet-zoom-hide"));
    },
    _resetView: function _resetView(t, i) {
      wi(this._mapPane, new B(0, 0));
      var e = !this._loaded;
      this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
      var n = this._zoom !== i;
      this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load");
    },
    _moveStart: function _moveStart(t, i) {
      return t && this.fire("zoomstart"), i || this.fire("movestart"), this;
    },
    _move: function _move(t, i, e) {
      void 0 === i && (i = this._zoom);
      var n = this._zoom !== i;
      return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e);
    },
    _moveEnd: function _moveEnd(t) {
      return t && this.fire("zoomend"), this.fire("moveend");
    },
    _stop: function _stop() {
      return C(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
    },
    _rawPanBy: function _rawPanBy(t) {
      wi(this._mapPane, this._getMapPanePos().subtract(t));
    },
    _getZoomSpan: function _getZoomSpan() {
      return this.getMaxZoom() - this.getMinZoom();
    },
    _panInsideMaxBounds: function _panInsideMaxBounds() {
      this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
    },
    _checkIfLoaded: function _checkIfLoaded() {
      if (!this._loaded) throw new Error("Set map center and zoom first.");
    },
    _initEvents: function _initEvents(t) {
      this._targets = {};
      var i = t ? Bi : Ei;
      i((this._targets[u(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), yt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
    },
    _onResize: function _onResize() {
      C(this._resizeRequest), this._resizeRequest = M(function () {
        this.invalidateSize({
          debounceMoveend: !0
        });
      }, this);
    },
    _onScroll: function _onScroll() {
      this._container.scrollTop = 0, this._container.scrollLeft = 0;
    },
    _onMoveEnd: function _onMoveEnd() {
      var t = this._getMapPanePos();

      Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
    },
    _findEventTargets: function _findEventTargets(t, i) {
      for (var e, n = [], o = "mouseout" === i || "mouseover" === i, s = t.target || t.srcElement, r = !1; s;) {
        if ((e = this._targets[u(s)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
          r = !0;
          break;
        }

        if (e && e.listens(i, !0)) {
          if (o && !Ki(s, t)) break;
          if (n.push(e), o) break;
        }

        if (s === this._container) break;
        s = s.parentNode;
      }

      return n.length || r || o || !Ki(s, t) || (n = [this]), n;
    },
    _handleDOMEvent: function _handleDOMEvent(t) {
      if (this._loaded && !Gi(t)) {
        var i = t.type;
        "mousedown" !== i && "keypress" !== i && "keyup" !== i && "keydown" !== i || zi(t.target || t.srcElement), this._fireDOMEvent(t, i);
      }
    },
    _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
    _fireDOMEvent: function _fireDOMEvent(t, i, e) {
      if ("click" === t.type) {
        var n = h({}, t);
        n.type = "preclick", this._fireDOMEvent(n, n.type, e);
      }

      if (!t._stopped && (e = (e || []).concat(this._findEventTargets(t, i))).length) {
        var o = e[0];
        "contextmenu" === i && o.listens(i, !0) && Di(t);
        var s = {
          originalEvent: t
        };

        if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
          var r = o.getLatLng && (!o._radius || o._radius <= 10);
          s.containerPoint = r ? this.latLngToContainerPoint(o.getLatLng()) : this.mouseEventToContainerPoint(t), s.layerPoint = this.containerPointToLayerPoint(s.containerPoint), s.latlng = r ? o.getLatLng() : this.layerPointToLatLng(s.layerPoint);
        }

        for (var a = 0; a < e.length; a++) {
          if (e[a].fire(i, s, !0), s.originalEvent._stopped || !1 === e[a].options.bubblingMouseEvents && -1 !== y(this._mouseEvents, i)) return;
        }
      }
    },
    _draggableMoved: function _draggableMoved(t) {
      return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    },
    _clearHandlers: function _clearHandlers() {
      for (var t = 0, i = this._handlers.length; t < i; t++) {
        this._handlers[t].disable();
      }
    },
    whenReady: function whenReady(t, i) {
      return this._loaded ? t.call(i || this, {
        target: this
      }) : this.on("load", t, i), this;
    },
    _getMapPanePos: function _getMapPanePos() {
      return Pi(this._mapPane) || new B(0, 0);
    },
    _moved: function _moved() {
      var t = this._getMapPanePos();

      return t && !t.equals([0, 0]);
    },
    _getTopLeftPoint: function _getTopLeftPoint(t, i) {
      return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos());
    },
    _getNewPixelOrigin: function _getNewPixelOrigin(t, i) {
      var e = this.getSize()._divideBy(2);

      return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round();
    },
    _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, i, e) {
      var n = this._getNewPixelOrigin(e, i);

      return this.project(t, i)._subtract(n);
    },
    _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(t, i, e) {
      var n = this._getNewPixelOrigin(e, i);

      return R([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)]);
    },
    _getCenterLayerPoint: function _getCenterLayerPoint() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    _getCenterOffset: function _getCenterOffset(t) {
      return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
    },
    _limitCenter: function _limitCenter(t, i, e) {
      if (!e) return t;

      var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          s = new O(n.subtract(o), n.add(o)),
          r = this._getBoundsOffset(s, e, i);

      return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
    },
    _limitOffset: function _limitOffset(t, i) {
      if (!i) return t;
      var e = this.getPixelBounds(),
          n = new O(e.min.add(t), e.max.add(t));
      return t.add(this._getBoundsOffset(n, i));
    },
    _getBoundsOffset: function _getBoundsOffset(t, i, e) {
      var n = R(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
          o = n.min.subtract(t.min),
          s = n.max.subtract(t.max);
      return new B(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
    },
    _rebound: function _rebound(t, i) {
      return 0 < t + i ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
    },
    _limitZoom: function _limitZoom(t) {
      var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = yt ? this.options.zoomSnap : 1;
      return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
    },
    _onPanTransitionStep: function _onPanTransitionStep() {
      this.fire("move");
    },
    _onPanTransitionEnd: function _onPanTransitionEnd() {
      mi(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
    },
    _tryAnimatedPan: function _tryAnimatedPan(t, i) {
      var e = this._getCenterOffset(t)._trunc();

      return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0);
    },
    _createAnimProxy: function _createAnimProxy() {
      var t = this._proxy = hi("div", "leaflet-proxy leaflet-zoom-animated");
      this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
        var i = ni,
            e = this._proxy.style[i];
        xi(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
      }, this), this.on("load moveend", function () {
        var t = this.getCenter(),
            i = this.getZoom();
        xi(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
      }, this), this._on("unload", this._destroyAnimProxy, this);
    },
    _destroyAnimProxy: function _destroyAnimProxy() {
      ui(this._proxy), delete this._proxy;
    },
    _catchTransitionEnd: function _catchTransitionEnd(t) {
      this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
    },
    _nothingToAnimate: function _nothingToAnimate() {
      return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
    },
    _tryAnimatedZoom: function _tryAnimatedZoom(t, i, e) {
      if (this._animatingZoom) return !0;
      if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;

      var n = this.getZoomScale(i),
          o = this._getCenterOffset(t)._divideBy(1 - 1 / n);

      return !(!0 !== e.animate && !this.getSize().contains(o)) && (M(function () {
        this._moveStart(!0, !1)._animateZoom(t, i, !0);
      }, this), !0);
    },
    _animateZoom: function _animateZoom(t, i, e, n) {
      this._mapPane && (e && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, pi(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
        center: t,
        zoom: i,
        noUpdate: n
      }), setTimeout(a(this._onZoomTransitionEnd, this), 250));
    },
    _onZoomTransitionEnd: function _onZoomTransitionEnd() {
      this._animatingZoom && (this._mapPane && mi(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), M(function () {
        this._moveEnd(!0);
      }, this));
    }
  });

  function $i(t) {
    return new Qi(t);
  }

  var Qi = Z.extend({
    options: {
      position: "topright"
    },
    initialize: function initialize(t) {
      p(this, t);
    },
    getPosition: function getPosition() {
      return this.options.position;
    },
    setPosition: function setPosition(t) {
      var i = this._map;
      return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    addTo: function addTo(t) {
      this.remove(), this._map = t;
      var i = this._container = this.onAdd(t),
          e = this.getPosition(),
          n = t._controlCorners[e];
      return pi(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this._map.on("unload", this.remove, this), this;
    },
    remove: function remove() {
      return this._map && (ui(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this;
    },
    _refocusOnMap: function _refocusOnMap(t) {
      this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus();
    }
  });
  Ji.include({
    addControl: function addControl(t) {
      return t.addTo(this), this;
    },
    removeControl: function removeControl(t) {
      return t.remove(), this;
    },
    _initControlPos: function _initControlPos() {
      var n = this._controlCorners = {},
          o = "leaflet-",
          s = this._controlContainer = hi("div", o + "control-container", this._container);

      function t(t, i) {
        var e = o + t + " " + o + i;
        n[t + i] = hi("div", e, s);
      }

      t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
    },
    _clearControlPos: function _clearControlPos() {
      for (var t in this._controlCorners) {
        ui(this._controlCorners[t]);
      }

      ui(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
    }
  });
  var te = Qi.extend({
    options: {
      collapsed: !0,
      position: "topright",
      autoZIndex: !0,
      hideSingleBase: !1,
      sortLayers: !1,
      sortFunction: function sortFunction(t, i, e, n) {
        return e < n ? -1 : n < e ? 1 : 0;
      }
    },
    initialize: function initialize(t, i, e) {
      for (var n in p(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) {
        this._addLayer(t[n], n);
      }

      for (n in i) {
        this._addLayer(i[n], n, !0);
      }
    },
    onAdd: function onAdd(t) {
      this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);

      for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.on("add remove", this._onLayerChange, this);
      }

      return this._container;
    },
    addTo: function addTo(t) {
      return Qi.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
    },
    onRemove: function onRemove() {
      this._map.off("zoomend", this._checkDisabledLayers, this);

      for (var t = 0; t < this._layers.length; t++) {
        this._layers[t].layer.off("add remove", this._onLayerChange, this);
      }
    },
    addBaseLayer: function addBaseLayer(t, i) {
      return this._addLayer(t, i), this._map ? this._update() : this;
    },
    addOverlay: function addOverlay(t, i) {
      return this._addLayer(t, i, !0), this._map ? this._update() : this;
    },
    removeLayer: function removeLayer(t) {
      t.off("add remove", this._onLayerChange, this);

      var i = this._getLayer(u(t));

      return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this;
    },
    expand: function expand() {
      pi(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
      var t = this._map.getSize().y - (this._container.offsetTop + 50);
      return t < this._section.clientHeight ? (pi(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : mi(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
    },
    collapse: function collapse() {
      return mi(this._container, "leaflet-control-layers-expanded"), this;
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-control-layers",
          i = this._container = hi("div", t),
          e = this.options.collapsed;
      i.setAttribute("aria-haspopup", !0), Ni(i), Ri(i);
      var n = this._section = hi("section", t + "-list");
      e && (this._map.on("click", this.collapse, this), st || Ei(i, {
        mouseenter: this.expand,
        mouseleave: this.collapse
      }, this));
      var o = this._layersLink = hi("a", t + "-toggle", i);
      o.href = "#", o.title = "Layers", Tt ? (Ei(o, "click", ji), Ei(o, "click", this.expand, this)) : Ei(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = hi("div", t + "-base", n), this._separator = hi("div", t + "-separator", n), this._overlaysList = hi("div", t + "-overlays", n), i.appendChild(n);
    },
    _getLayer: function _getLayer(t) {
      for (var i = 0; i < this._layers.length; i++) {
        if (this._layers[i] && u(this._layers[i].layer) === t) return this._layers[i];
      }
    },
    _addLayer: function _addLayer(t, i, e) {
      this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
        layer: t,
        name: i,
        overlay: e
      }), this.options.sortLayers && this._layers.sort(a(function (t, i) {
        return this.options.sortFunction(t.layer, i.layer, t.name, i.name);
      }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
    },
    _update: function _update() {
      if (!this._container) return this;
      li(this._baseLayersList), li(this._overlaysList), this._layerControlInputs = [];
      var t,
          i,
          e,
          n,
          o = 0;

      for (e = 0; e < this._layers.length; e++) {
        n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
      }

      return this.options.hideSingleBase && (t = t && 1 < o, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this;
    },
    _onLayerChange: function _onLayerChange(t) {
      this._handlingClick || this._update();

      var i = this._getLayer(u(t.target)),
          e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;

      e && this._map.fire(e, i);
    },
    _createRadioElement: function _createRadioElement(t, i) {
      var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
          n = document.createElement("div");
      return n.innerHTML = e, n.firstChild;
    },
    _addItem: function _addItem(t) {
      var i,
          e = document.createElement("label"),
          n = this._map.hasLayer(t.layer);

      t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = n) : i = this._createRadioElement("leaflet-base-layers_" + u(this), n), this._layerControlInputs.push(i), i.layerId = u(t.layer), Ei(i, "click", this._onInputClick, this);
      var o = document.createElement("span");
      o.innerHTML = " " + t.name;
      var s = document.createElement("div");
      return e.appendChild(s), s.appendChild(i), s.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e;
    },
    _onInputClick: function _onInputClick() {
      var t,
          i,
          e = this._layerControlInputs,
          n = [],
          o = [];
      this._handlingClick = !0;

      for (var s = e.length - 1; 0 <= s; s--) {
        t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
      }

      for (s = 0; s < o.length; s++) {
        this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
      }

      for (s = 0; s < n.length; s++) {
        this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
      }

      this._handlingClick = !1, this._refocusOnMap();
    },
    _checkDisabledLayers: function _checkDisabledLayers() {
      for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; 0 <= o; o--) {
        t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom;
      }
    },
    _expandIfNotCollapsed: function _expandIfNotCollapsed() {
      return this._map && !this.options.collapsed && this.expand(), this;
    },
    _expand: function _expand() {
      return this.expand();
    },
    _collapse: function _collapse() {
      return this.collapse();
    }
  }),
      ie = Qi.extend({
    options: {
      position: "topleft",
      zoomInText: "+",
      zoomInTitle: "Zoom in",
      zoomOutText: "&#x2212;",
      zoomOutTitle: "Zoom out"
    },
    onAdd: function onAdd(t) {
      var i = "leaflet-control-zoom",
          e = hi("div", i + " leaflet-bar"),
          n = this.options;
      return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e;
    },
    onRemove: function onRemove(t) {
      t.off("zoomend zoomlevelschange", this._updateDisabled, this);
    },
    disable: function disable() {
      return this._disabled = !0, this._updateDisabled(), this;
    },
    enable: function enable() {
      return this._disabled = !1, this._updateDisabled(), this;
    },
    _zoomIn: function _zoomIn(t) {
      !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _zoomOut: function _zoomOut(t) {
      !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _createButton: function _createButton(t, i, e, n, o) {
      var s = hi("a", e, n);
      return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), Ni(s), Ei(s, "click", ji), Ei(s, "click", o, this), Ei(s, "click", this._refocusOnMap, this), s;
    },
    _updateDisabled: function _updateDisabled() {
      var t = this._map,
          i = "leaflet-disabled";
      mi(this._zoomInButton, i), mi(this._zoomOutButton, i), !this._disabled && t._zoom !== t.getMinZoom() || pi(this._zoomOutButton, i), !this._disabled && t._zoom !== t.getMaxZoom() || pi(this._zoomInButton, i);
    }
  });
  Ji.mergeOptions({
    zoomControl: !0
  }), Ji.addInitHook(function () {
    this.options.zoomControl && (this.zoomControl = new ie(), this.addControl(this.zoomControl));
  });
  var ee = Qi.extend({
    options: {
      position: "bottomleft",
      maxWidth: 100,
      metric: !0,
      imperial: !0
    },
    onAdd: function onAdd(t) {
      var i = "leaflet-control-scale",
          e = hi("div", i),
          n = this.options;
      return this._addScales(n, i + "-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e;
    },
    onRemove: function onRemove(t) {
      t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
    },
    _addScales: function _addScales(t, i, e) {
      t.metric && (this._mScale = hi("div", i, e)), t.imperial && (this._iScale = hi("div", i, e));
    },
    _update: function _update() {
      var t = this._map,
          i = t.getSize().y / 2,
          e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));

      this._updateScales(e);
    },
    _updateScales: function _updateScales(t) {
      this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
    },
    _updateMetric: function _updateMetric(t) {
      var i = this._getRoundNum(t),
          e = i < 1e3 ? i + " m" : i / 1e3 + " km";

      this._updateScale(this._mScale, e, i / t);
    },
    _updateImperial: function _updateImperial(t) {
      var i,
          e,
          n,
          o = 3.2808399 * t;
      5280 < o ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o));
    },
    _updateScale: function _updateScale(t, i, e) {
      t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i;
    },
    _getRoundNum: function _getRoundNum(t) {
      var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          e = t / i;
      return i * (e = 10 <= e ? 10 : 5 <= e ? 5 : 3 <= e ? 3 : 2 <= e ? 2 : 1);
    }
  }),
      ne = Qi.extend({
    options: {
      position: "bottomright",
      prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
    },
    initialize: function initialize(t) {
      p(this, t), this._attributions = {};
    },
    onAdd: function onAdd(t) {
      for (var i in (t.attributionControl = this)._container = hi("div", "leaflet-control-attribution"), Ni(this._container), t._layers) {
        t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
      }

      return this._update(), this._container;
    },
    setPrefix: function setPrefix(t) {
      return this.options.prefix = t, this._update(), this;
    },
    addAttribution: function addAttribution(t) {
      return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this;
    },
    removeAttribution: function removeAttribution(t) {
      return t && this._attributions[t] && (this._attributions[t]--, this._update()), this;
    },
    _update: function _update() {
      if (this._map) {
        var t = [];

        for (var i in this._attributions) {
          this._attributions[i] && t.push(i);
        }

        var e = [];
        this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ");
      }
    }
  });
  Ji.mergeOptions({
    attributionControl: !0
  }), Ji.addInitHook(function () {
    this.options.attributionControl && new ne().addTo(this);
  });
  Qi.Layers = te, Qi.Zoom = ie, Qi.Scale = ee, Qi.Attribution = ne, $i.layers = function (t, i, e) {
    return new te(t, i, e);
  }, $i.zoom = function (t) {
    return new ie(t);
  }, $i.scale = function (t) {
    return new ee(t);
  }, $i.attribution = function (t) {
    return new ne(t);
  };
  var oe = Z.extend({
    initialize: function initialize(t) {
      this._map = t;
    },
    enable: function enable() {
      return this._enabled || (this._enabled = !0, this.addHooks()), this;
    },
    disable: function disable() {
      return this._enabled && (this._enabled = !1, this.removeHooks()), this;
    },
    enabled: function enabled() {
      return !!this._enabled;
    }
  });

  oe.addTo = function (t, i) {
    return t.addHandler(i, this), this;
  };

  var se,
      re = {
    Events: E
  },
      ae = Tt ? "touchstart mousedown" : "mousedown",
      he = {
    mousedown: "mouseup",
    touchstart: "touchend",
    pointerdown: "touchend",
    MSPointerDown: "touchend"
  },
      ue = {
    mousedown: "mousemove",
    touchstart: "touchmove",
    pointerdown: "touchmove",
    MSPointerDown: "touchmove"
  },
      le = k.extend({
    options: {
      clickTolerance: 3
    },
    initialize: function initialize(t, i, e, n) {
      p(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e;
    },
    enable: function enable() {
      this._enabled || (Ei(this._dragStartTarget, ae, this._onDown, this), this._enabled = !0);
    },
    disable: function disable() {
      this._enabled && (le._dragging === this && this.finishDrag(), Bi(this._dragStartTarget, ae, this._onDown, this), this._enabled = !1, this._moved = !1);
    },
    _onDown: function _onDown(t) {
      if (!t._simulated && this._enabled && (this._moved = !1, !di(this._element, "leaflet-zoom-anim") && !(le._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((le._dragging = this)._preventOutline && zi(this._element), bi(), $t(), this._moving)))) {
        this.fire("down");
        var i = t.touches ? t.touches[0] : t,
            e = Ci(this._element);
        this._startPoint = new B(i.clientX, i.clientY), this._parentScale = Si(e), Ei(document, ue[t.type], this._onMove, this), Ei(document, he[t.type], this._onUp, this);
      }
    },
    _onMove: function _onMove(t) {
      if (!t._simulated && this._enabled) if (t.touches && 1 < t.touches.length) this._moved = !0;else {
        var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
            e = new B(i.clientX, i.clientY)._subtract(this._startPoint);

        (e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, Di(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = Pi(this._element).subtract(e), pi(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), pi(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, C(this._animRequest), this._lastEvent = t, this._animRequest = M(this._updatePosition, this, !0)));
      }
    },
    _updatePosition: function _updatePosition() {
      var t = {
        originalEvent: this._lastEvent
      };
      this.fire("predrag", t), wi(this._element, this._newPos), this.fire("drag", t);
    },
    _onUp: function _onUp(t) {
      !t._simulated && this._enabled && this.finishDrag();
    },
    finishDrag: function finishDrag() {
      for (var t in mi(document.body, "leaflet-dragging"), this._lastTarget && (mi(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ue) {
        Bi(document, ue[t], this._onMove, this), Bi(document, he[t], this._onUp, this);
      }

      Ti(), Qt(), this._moved && this._moving && (C(this._animRequest), this.fire("dragend", {
        distance: this._newPos.distanceTo(this._startPos)
      })), this._moving = !1, le._dragging = !1;
    }
  });

  function ce(t, i) {
    if (!i || !t.length) return t.slice();
    var e = i * i;
    return t = function (t, i) {
      var e = t.length,
          n = new ((typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != void 0 + "" ? Uint8Array : Array)(e);
      n[0] = n[e - 1] = 1, function t(i, e, n, o, s) {
        var r,
            a,
            h,
            u = 0;

        for (a = o + 1; a <= s - 1; a++) {
          h = fe(i[a], i[o], i[s], !0), u < h && (r = a, u = h);
        }

        n < u && (e[r] = 1, t(i, e, n, o, r), t(i, e, n, r, s));
      }(t, n, i, 0, e - 1);
      var o,
          s = [];

      for (o = 0; o < e; o++) {
        n[o] && s.push(t[o]);
      }

      return s;
    }(t = function (t, i) {
      for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) {
        r = t[n], a = t[o], void 0, h = a.x - r.x, u = a.y - r.y, i < h * h + u * u && (e.push(t[n]), o = n);
      }

      var r, a, h, u;
      o < s - 1 && e.push(t[s - 1]);
      return e;
    }(t, e), e);
  }

  function _e(t, i, e) {
    return Math.sqrt(fe(t, i, e, !0));
  }

  function de(t, i, e, n, o) {
    var s,
        r,
        a,
        h = n ? se : me(t, e),
        u = me(i, e);

    for (se = u;;) {
      if (!(h | u)) return [t, i];
      if (h & u) return !1;
      a = me(r = pe(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a);
    }
  }

  function pe(t, i, e, n, o) {
    var s,
        r,
        a = i.x - t.x,
        h = i.y - t.y,
        u = n.min,
        l = n.max;
    return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new B(s, r, o);
  }

  function me(t, i) {
    var e = 0;
    return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e;
  }

  function fe(t, i, e, n) {
    var o,
        s = i.x,
        r = i.y,
        a = e.x - s,
        h = e.y - r,
        u = a * a + h * h;
    return 0 < u && (1 < (o = ((t.x - s) * a + (t.y - r) * h) / u) ? (s = e.x, r = e.y) : 0 < o && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new B(s, r);
  }

  function ge(t) {
    return !v(t[0]) || "object" != _typeof(t[0][0]) && void 0 !== t[0][0];
  }

  function ve(t) {
    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ge(t);
  }

  var ye = (Object.freeze || Object)({
    simplify: ce,
    pointToSegmentDistance: _e,
    closestPointOnSegment: function closestPointOnSegment(t, i, e) {
      return fe(t, i, e);
    },
    clipSegment: de,
    _getEdgeIntersection: pe,
    _getBitCode: me,
    _sqClosestPointOnSegment: fe,
    isFlat: ge,
    _flat: ve
  });

  function xe(t, i, e) {
    var n,
        o,
        s,
        r,
        a,
        h,
        u,
        l,
        c,
        _ = [1, 4, 2, 8];

    for (o = 0, u = t.length; o < u; o++) {
      t[o]._code = me(t[o], i);
    }

    for (r = 0; r < 4; r++) {
      for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) {
        a = t[o], h = t[s], a._code & l ? h._code & l || ((c = pe(h, a, l, i, e))._code = me(c, i), n.push(c)) : (h._code & l && ((c = pe(h, a, l, i, e))._code = me(c, i), n.push(c)), n.push(a));
      }

      t = n;
    }

    return t;
  }

  var we,
      Pe = (Object.freeze || Object)({
    clipPolygon: xe
  }),
      Le = {
    project: function project(t) {
      return new B(t.lng, t.lat);
    },
    unproject: function unproject(t) {
      return new j(t.y, t.x);
    },
    bounds: new O([-180, -90], [180, 90])
  },
      be = {
    R: 6378137,
    R_MINOR: 6356752.314245179,
    bounds: new O([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
    project: function project(t) {
      var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          s = Math.sqrt(1 - o * o),
          r = s * Math.sin(n),
          a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
      return n = -e * Math.log(Math.max(a, 1e-10)), new B(t.lng * i * e, n);
    },
    unproject: function unproject(t) {
      for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && 1e-7 < Math.abs(u); h++) {
        i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
      }

      return new j(a * e, t.x * e / n);
    }
  },
      Te = (Object.freeze || Object)({
    LonLat: Le,
    Mercator: be,
    SphericalMercator: q
  }),
      ze = h({}, U, {
    code: "EPSG:3395",
    projection: be,
    transformation: (we = .5 / (Math.PI * be.R), K(we, .5, -we, .5))
  }),
      Me = h({}, U, {
    code: "EPSG:4326",
    projection: Le,
    transformation: K(1 / 180, 1, -1 / 180, .5)
  }),
      Ce = h({}, F, {
    projection: Le,
    transformation: K(1, 0, -1, 0),
    scale: function scale(t) {
      return Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t) / Math.LN2;
    },
    distance: function distance(t, i) {
      var e = i.lng - t.lng,
          n = i.lat - t.lat;
      return Math.sqrt(e * e + n * n);
    },
    infinite: !0
  });
  F.Earth = U, F.EPSG3395 = ze, F.EPSG3857 = X, F.EPSG900913 = J, F.EPSG4326 = Me, F.Simple = Ce;
  var Se = k.extend({
    options: {
      pane: "overlayPane",
      attribution: null,
      bubblingMouseEvents: !0
    },
    addTo: function addTo(t) {
      return t.addLayer(this), this;
    },
    remove: function remove() {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function removeFrom(t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function getPane(t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function addInteractiveTarget(t) {
      return this._map._targets[u(t)] = this;
    },
    removeInteractiveTarget: function removeInteractiveTarget(t) {
      return delete this._map._targets[u(t)], this;
    },
    getAttribution: function getAttribution() {
      return this.options.attribution;
    },
    _layerAdd: function _layerAdd(t) {
      var i = t.target;

      if (i.hasLayer(this)) {
        if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
          var e = this.getEvents();
          i.on(e, this), this.once("remove", function () {
            i.off(e, this);
          }, this);
        }

        this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", {
          layer: this
        });
      }
    }
  });
  Ji.include({
    addLayer: function addLayer(t) {
      if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
      var i = u(t);
      return this._layers[i] || ((this._layers[i] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this;
    },
    removeLayer: function removeLayer(t) {
      var i = u(t);
      return this._layers[i] && (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {
        layer: t
      }), t.fire("remove")), t._map = t._mapToAdd = null), this;
    },
    hasLayer: function hasLayer(t) {
      return !!t && u(t) in this._layers;
    },
    eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }

      return this;
    },
    _addLayers: function _addLayers(t) {
      for (var i = 0, e = (t = t ? v(t) ? t : [t] : []).length; i < e; i++) {
        this.addLayer(t[i]);
      }
    },
    _addZoomLimit: function _addZoomLimit(t) {
      !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[u(t)] = t, this._updateZoomLevels());
    },
    _removeZoomLimit: function _removeZoomLimit(t) {
      var i = u(t);
      this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels());
    },
    _updateZoomLevels: function _updateZoomLevels() {
      var t = 1 / 0,
          i = -1 / 0,
          e = this._getZoomSpan();

      for (var n in this._zoomBoundLayers) {
        var o = this._zoomBoundLayers[n].options;
        t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
      }

      this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
    }
  });
  var Ze = Se.extend({
    initialize: function initialize(t, i) {
      var e, n;
      if (p(this, i), this._layers = {}, t) for (e = 0, n = t.length; e < n; e++) {
        this.addLayer(t[e]);
      }
    },
    addLayer: function addLayer(t) {
      var i = this.getLayerId(t);
      return this._layers[i] = t, this._map && this._map.addLayer(t), this;
    },
    removeLayer: function removeLayer(t) {
      var i = t in this._layers ? t : this.getLayerId(t);
      return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this;
    },
    hasLayer: function hasLayer(t) {
      return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
    },
    clearLayers: function clearLayers() {
      return this.eachLayer(this.removeLayer, this);
    },
    invoke: function invoke(t) {
      var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);

      for (i in this._layers) {
        (e = this._layers[i])[t] && e[t].apply(e, n);
      }

      return this;
    },
    onAdd: function onAdd(t) {
      this.eachLayer(t.addLayer, t);
    },
    onRemove: function onRemove(t) {
      this.eachLayer(t.removeLayer, t);
    },
    eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }

      return this;
    },
    getLayer: function getLayer(t) {
      return this._layers[t];
    },
    getLayers: function getLayers() {
      var t = [];
      return this.eachLayer(t.push, t), t;
    },
    setZIndex: function setZIndex(t) {
      return this.invoke("setZIndex", t);
    },
    getLayerId: function getLayerId(t) {
      return u(t);
    }
  }),
      Ee = Ze.extend({
    addLayer: function addLayer(t) {
      return this.hasLayer(t) ? this : (t.addEventParent(this), Ze.prototype.addLayer.call(this, t), this.fire("layeradd", {
        layer: t
      }));
    },
    removeLayer: function removeLayer(t) {
      return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ze.prototype.removeLayer.call(this, t), this.fire("layerremove", {
        layer: t
      })) : this;
    },
    setStyle: function setStyle(t) {
      return this.invoke("setStyle", t);
    },
    bringToFront: function bringToFront() {
      return this.invoke("bringToFront");
    },
    bringToBack: function bringToBack() {
      return this.invoke("bringToBack");
    },
    getBounds: function getBounds() {
      var t = new N();

      for (var i in this._layers) {
        var e = this._layers[i];
        t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
      }

      return t;
    }
  }),
      ke = Z.extend({
    options: {
      popupAnchor: [0, 0],
      tooltipAnchor: [0, 0]
    },
    initialize: function initialize(t) {
      p(this, t);
    },
    createIcon: function createIcon(t) {
      return this._createIcon("icon", t);
    },
    createShadow: function createShadow(t) {
      return this._createIcon("shadow", t);
    },
    _createIcon: function _createIcon(t, i) {
      var e = this._getIconUrl(t);

      if (!e) {
        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
        return null;
      }

      var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);

      return this._setIconStyles(n, t), n;
    },
    _setIconStyles: function _setIconStyles(t, i) {
      var e = this.options,
          n = e[i + "Size"];
      "number" == typeof n && (n = [n, n]);
      var o = I(n),
          s = I("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
      t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
    },
    _createImg: function _createImg(t, i) {
      return (i = i || document.createElement("img")).src = t, i;
    },
    _getIconUrl: function _getIconUrl(t) {
      return Ct && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
    }
  });
  var Be = ke.extend({
    options: {
      iconUrl: "marker-icon.png",
      iconRetinaUrl: "marker-icon-2x.png",
      shadowUrl: "marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    },
    _getIconUrl: function _getIconUrl(t) {
      return Be.imagePath || (Be.imagePath = this._detectIconPath()), (this.options.imagePath || Be.imagePath) + ke.prototype._getIconUrl.call(this, t);
    },
    _detectIconPath: function _detectIconPath() {
      var t = hi("div", "leaflet-default-icon-path", document.body),
          i = ai(t, "background-image") || ai(t, "backgroundImage");
      return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "");
    }
  }),
      Ae = oe.extend({
    initialize: function initialize(t) {
      this._marker = t;
    },
    addHooks: function addHooks() {
      var t = this._marker._icon;
      this._draggable || (this._draggable = new le(t, t, !0)), this._draggable.on({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).enable(), pi(t, "leaflet-marker-draggable");
    },
    removeHooks: function removeHooks() {
      this._draggable.off({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).disable(), this._marker._icon && mi(this._marker._icon, "leaflet-marker-draggable");
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    _adjustPan: function _adjustPan(t) {
      var i = this._marker,
          e = i._map,
          n = this._marker.options.autoPanSpeed,
          o = this._marker.options.autoPanPadding,
          s = Pi(i._icon),
          r = e.getPixelBounds(),
          a = e.getPixelOrigin(),
          h = R(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));

      if (!h.contains(s)) {
        var u = I((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
        e.panBy(u, {
          animate: !1
        }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), wi(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = M(this._adjustPan.bind(this, t));
      }
    },
    _onDragStart: function _onDragStart() {
      this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart");
    },
    _onPreDrag: function _onPreDrag(t) {
      this._marker.options.autoPan && (C(this._panRequest), this._panRequest = M(this._adjustPan.bind(this, t)));
    },
    _onDrag: function _onDrag(t) {
      var i = this._marker,
          e = i._shadow,
          n = Pi(i._icon),
          o = i._map.layerPointToLatLng(n);

      e && wi(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t);
    },
    _onDragEnd: function _onDragEnd(t) {
      C(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
    }
  }),
      Ie = Se.extend({
    options: {
      icon: new Be(),
      interactive: !0,
      keyboard: !0,
      title: "",
      alt: "",
      zIndexOffset: 0,
      opacity: 1,
      riseOnHover: !1,
      riseOffset: 250,
      pane: "markerPane",
      shadowPane: "shadowPane",
      bubblingMouseEvents: !1,
      draggable: !1,
      autoPan: !1,
      autoPanPadding: [50, 50],
      autoPanSpeed: 10
    },
    initialize: function initialize(t, i) {
      p(this, i), this._latlng = W(t);
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
    },
    onRemove: function onRemove(t) {
      this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
    },
    getEvents: function getEvents() {
      return {
        zoom: this.update,
        viewreset: this.update
      };
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      var i = this._latlng;
      return this._latlng = W(t), this.update(), this.fire("move", {
        oldLatLng: i,
        latlng: this._latlng
      });
    },
    setZIndexOffset: function setZIndexOffset(t) {
      return this.options.zIndexOffset = t, this.update();
    },
    getIcon: function getIcon() {
      return this.options.icon;
    },
    setIcon: function setIcon(t) {
      return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
    },
    getElement: function getElement() {
      return this._icon;
    },
    update: function update() {
      if (this._icon && this._map) {
        var t = this._map.latLngToLayerPoint(this._latlng).round();

        this._setPos(t);
      }

      return this;
    },
    _initIcon: function _initIcon() {
      var t = this.options,
          i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          e = t.icon.createIcon(this._icon),
          n = !1;
      e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), pi(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      });
      var o = t.icon.createShadow(this._shadow),
          s = !1;
      o !== this._shadow && (this._removeShadow(), s = !0), o && (pi(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
    },
    _removeIcon: function _removeIcon() {
      this.options.riseOnHover && this.off({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      }), ui(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
    },
    _removeShadow: function _removeShadow() {
      this._shadow && ui(this._shadow), this._shadow = null;
    },
    _setPos: function _setPos(t) {
      wi(this._icon, t), this._shadow && wi(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
    },
    _updateZIndex: function _updateZIndex(t) {
      this._icon.style.zIndex = this._zIndex + t;
    },
    _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();

      this._setPos(i);
    },
    _initInteraction: function _initInteraction() {
      if (this.options.interactive && (pi(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ae)) {
        var t = this.options.draggable;
        this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ae(this), t && this.dragging.enable();
      }
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._map && this._updateOpacity(), this;
    },
    _updateOpacity: function _updateOpacity() {
      var t = this.options.opacity;
      this._icon && vi(this._icon, t), this._shadow && vi(this._shadow, t);
    },
    _bringToFront: function _bringToFront() {
      this._updateZIndex(this.options.riseOffset);
    },
    _resetZIndex: function _resetZIndex() {
      this._updateZIndex(0);
    },
    _getPopupAnchor: function _getPopupAnchor() {
      return this.options.icon.options.popupAnchor;
    },
    _getTooltipAnchor: function _getTooltipAnchor() {
      return this.options.icon.options.tooltipAnchor;
    }
  });
  var Oe = Se.extend({
    options: {
      stroke: !0,
      color: "#3388ff",
      weight: 3,
      opacity: 1,
      lineCap: "round",
      lineJoin: "round",
      dashArray: null,
      dashOffset: null,
      fill: !1,
      fillColor: null,
      fillOpacity: .2,
      fillRule: "evenodd",
      interactive: !0,
      bubblingMouseEvents: !0
    },
    beforeAdd: function beforeAdd(t) {
      this._renderer = t.getRenderer(this);
    },
    onAdd: function onAdd() {
      this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
    },
    onRemove: function onRemove() {
      this._renderer._removePath(this);
    },
    redraw: function redraw() {
      return this._map && this._renderer._updatePath(this), this;
    },
    setStyle: function setStyle(t) {
      return p(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t.hasOwnProperty("weight") && this._updateBounds()), this;
    },
    bringToFront: function bringToFront() {
      return this._renderer && this._renderer._bringToFront(this), this;
    },
    bringToBack: function bringToBack() {
      return this._renderer && this._renderer._bringToBack(this), this;
    },
    getElement: function getElement() {
      return this._path;
    },
    _reset: function _reset() {
      this._project(), this._update();
    },
    _clickTolerance: function _clickTolerance() {
      return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
    }
  }),
      Re = Oe.extend({
    options: {
      fill: !0,
      radius: 10
    },
    initialize: function initialize(t, i) {
      p(this, i), this._latlng = W(t), this._radius = this.options.radius;
    },
    setLatLng: function setLatLng(t) {
      return this._latlng = W(t), this.redraw(), this.fire("move", {
        latlng: this._latlng
      });
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setRadius: function setRadius(t) {
      return this.options.radius = this._radius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._radius;
    },
    setStyle: function setStyle(t) {
      var i = t && t.radius || this._radius;
      return Oe.prototype.setStyle.call(this, t), this.setRadius(i), this;
    },
    _project: function _project() {
      this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
    },
    _updateBounds: function _updateBounds() {
      var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          n = [t + e, i + e];

      this._pxBounds = new O(this._point.subtract(n), this._point.add(n));
    },
    _update: function _update() {
      this._map && this._updatePath();
    },
    _updatePath: function _updatePath() {
      this._renderer._updateCircle(this);
    },
    _empty: function _empty() {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    },
    _containsPoint: function _containsPoint(t) {
      return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
    }
  });
  var Ne = Re.extend({
    initialize: function initialize(t, i, e) {
      if ("number" == typeof i && (i = h({}, e, {
        radius: i
      })), p(this, i), this._latlng = W(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
      this._mRadius = this.options.radius;
    },
    setRadius: function setRadius(t) {
      return this._mRadius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._mRadius;
    },
    getBounds: function getBounds() {
      var t = [this._radius, this._radiusY || this._radius];
      return new N(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
    },
    setStyle: Oe.prototype.setStyle,
    _project: function _project() {
      var t = this._latlng.lng,
          i = this._latlng.lat,
          e = this._map,
          n = e.options.crs;

      if (n.distance === U.distance) {
        var o = Math.PI / 180,
            s = this._mRadius / U.R / o,
            r = e.project([i + s, t]),
            a = e.project([i - s, t]),
            h = r.add(a).divideBy(2),
            u = e.unproject(h).lat,
            l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
        !isNaN(l) && 0 !== l || (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x, this._radiusY = h.y - r.y;
      } else {
        var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
        this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x;
      }

      this._updateBounds();
    }
  });
  var De = Oe.extend({
    options: {
      smoothFactor: 1,
      noClip: !1
    },
    initialize: function initialize(t, i) {
      p(this, i), this._setLatLngs(t);
    },
    getLatLngs: function getLatLngs() {
      return this._latlngs;
    },
    setLatLngs: function setLatLngs(t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length;
    },
    closestLayerPoint: function closestLayerPoint(t) {
      for (var i, e, n = 1 / 0, o = null, s = fe, r = 0, a = this._parts.length; r < a; r++) {
        for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
          var c = s(t, i = h[u - 1], e = h[u], !0);
          c < n && (n = c, o = s(t, i, e));
        }
      }

      return o && (o.distance = Math.sqrt(n)), o;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a = this._rings[0],
          h = a.length;
      if (!h) return null;

      for (i = t = 0; t < h - 1; t++) {
        i += a[t].distanceTo(a[t + 1]) / 2;
      }

      if (0 === i) return this._map.layerPointToLatLng(a[0]);

      for (n = t = 0; t < h - 1; t++) {
        if (o = a[t], s = a[t + 1], i < (n += e = o.distanceTo(s))) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)]);
      }
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    addLatLng: function addLatLng(t, i) {
      return i = i || this._defaultShape(), t = W(t), i.push(t), this._bounds.extend(t), this.redraw();
    },
    _setLatLngs: function _setLatLngs(t) {
      this._bounds = new N(), this._latlngs = this._convertLatLngs(t);
    },
    _defaultShape: function _defaultShape() {
      return ge(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function _convertLatLngs(t) {
      for (var i = [], e = ge(t), n = 0, o = t.length; n < o; n++) {
        e ? (i[n] = W(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
      }

      return i;
    },
    _project: function _project() {
      var t = new O();
      this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
    },
    _updateBounds: function _updateBounds() {
      var t = this._clickTolerance(),
          i = new B(t, t);

      this._pxBounds = new O([this._rawPxBounds.min.subtract(i), this._rawPxBounds.max.add(i)]);
    },
    _projectLatlngs: function _projectLatlngs(t, i, e) {
      var n,
          o,
          s = t[0] instanceof j,
          r = t.length;

      if (s) {
        for (o = [], n = 0; n < r; n++) {
          o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
        }

        i.push(o);
      } else for (n = 0; n < r; n++) {
        this._projectLatlngs(t[n], i, e);
      }
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds;
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else {
        var i,
            e,
            n,
            o,
            s,
            r,
            a,
            h = this._parts;

        for (n = i = 0, o = this._rings.length; i < o; i++) {
          for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++) {
            (r = de(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++));
          }
        }
      }
    },
    _simplifyPoints: function _simplifyPoints() {
      for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) {
        t[e] = ce(t[e], i);
      }
    },
    _update: function _update() {
      this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    },
    _containsPoint: function _containsPoint(t, i) {
      var e,
          n,
          o,
          s,
          r,
          a,
          h = this._clickTolerance();

      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;

      for (e = 0, s = this._parts.length; e < s; e++) {
        for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++) {
          if ((i || 0 !== n) && _e(t, a[o], a[n]) <= h) return !0;
        }
      }

      return !1;
    }
  });
  De._flat = ve;
  var je = De.extend({
    options: {
      fill: !0
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = this._rings[0],
          l = u.length;
      if (!l) return null;

      for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) {
        e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
      }

      return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h);
    },
    _convertLatLngs: function _convertLatLngs(t) {
      var i = De.prototype._convertLatLngs.call(this, t),
          e = i.length;

      return 2 <= e && i[0] instanceof j && i[0].equals(i[e - 1]) && i.pop(), i;
    },
    _setLatLngs: function _setLatLngs(t) {
      De.prototype._setLatLngs.call(this, t), ge(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function _defaultShape() {
      return ge(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds,
          i = this.options.weight,
          e = new B(i, i);
      if (t = new O(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var n, o = 0, s = this._rings.length; o < s; o++) {
        (n = xe(this._rings[o], t, !0)).length && this._parts.push(n);
      }
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, !0);
    },
    _containsPoint: function _containsPoint(t) {
      var i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = !1;
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;

      for (o = 0, a = this._parts.length; o < a; o++) {
        for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) {
          e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
        }
      }

      return u || De.prototype._containsPoint.call(this, t, !0);
    }
  });
  var We = Ee.extend({
    initialize: function initialize(t, i) {
      p(this, i), this._layers = {}, t && this.addData(t);
    },
    addData: function addData(t) {
      var i,
          e,
          n,
          o = v(t) ? t : t.features;

      if (o) {
        for (i = 0, e = o.length; i < e; i++) {
          ((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
        }

        return this;
      }

      var s = this.options;
      if (s.filter && !s.filter(t)) return this;
      var r = He(t, s);
      return r ? (r.feature = Ke(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this;
    },
    resetStyle: function resetStyle(t) {
      return t.options = h({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this;
    },
    setStyle: function setStyle(i) {
      return this.eachLayer(function (t) {
        this._setLayerStyle(t, i);
      }, this);
    },
    _setLayerStyle: function _setLayerStyle(t, i) {
      t.setStyle && ("function" == typeof i && (i = i(t.feature)), t.setStyle(i));
    }
  });

  function He(t, i) {
    var e,
        n,
        o,
        s,
        r = "Feature" === t.type ? t.geometry : t,
        a = r ? r.coordinates : null,
        h = [],
        u = i && i.pointToLayer,
        l = i && i.coordsToLatLng || Fe;
    if (!a && !r) return null;

    switch (r.type) {
      case "Point":
        return e = l(a), u ? u(t, e) : new Ie(e);

      case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++) {
          e = l(a[o]), h.push(u ? u(t, e) : new Ie(e));
        }

        return new Ee(h);

      case "LineString":
      case "MultiLineString":
        return n = Ue(a, "LineString" === r.type ? 0 : 1, l), new De(n, i);

      case "Polygon":
      case "MultiPolygon":
        return n = Ue(a, "Polygon" === r.type ? 1 : 2, l), new je(n, i);

      case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = He({
            geometry: r.geometries[o],
            type: "Feature",
            properties: t.properties
          }, i);
          c && h.push(c);
        }

        return new Ee(h);

      default:
        throw new Error("Invalid GeoJSON object.");
    }
  }

  function Fe(t) {
    return new j(t[1], t[0], t[2]);
  }

  function Ue(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++) {
      n = i ? Ue(t[s], i - 1, e) : (e || Fe)(t[s]), o.push(n);
    }

    return o;
  }

  function Ve(t, i) {
    return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [c(t.lng, i), c(t.lat, i), c(t.alt, i)] : [c(t.lng, i), c(t.lat, i)];
  }

  function qe(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++) {
      o.push(i ? qe(t[s], i - 1, e, n) : Ve(t[s], n));
    }

    return !i && e && o.push(o[0]), o;
  }

  function Ge(t, i) {
    return t.feature ? h({}, t.feature, {
      geometry: i
    }) : Ke(i);
  }

  function Ke(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
      type: "Feature",
      properties: {},
      geometry: t
    };
  }

  var Ye = {
    toGeoJSON: function toGeoJSON(t) {
      return Ge(this, {
        type: "Point",
        coordinates: Ve(this.getLatLng(), t)
      });
    }
  };

  function Xe(t, i) {
    return new We(t, i);
  }

  Ie.include(Ye), Ne.include(Ye), Re.include(Ye), De.include({
    toGeoJSON: function toGeoJSON(t) {
      var i = !ge(this._latlngs);
      return Ge(this, {
        type: (i ? "Multi" : "") + "LineString",
        coordinates: qe(this._latlngs, i ? 1 : 0, !1, t)
      });
    }
  }), je.include({
    toGeoJSON: function toGeoJSON(t) {
      var i = !ge(this._latlngs),
          e = i && !ge(this._latlngs[0]),
          n = qe(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
      return i || (n = [n]), Ge(this, {
        type: (e ? "Multi" : "") + "Polygon",
        coordinates: n
      });
    }
  }), Ze.include({
    toMultiPoint: function toMultiPoint(i) {
      var e = [];
      return this.eachLayer(function (t) {
        e.push(t.toGeoJSON(i).geometry.coordinates);
      }), Ge(this, {
        type: "MultiPoint",
        coordinates: e
      });
    },
    toGeoJSON: function toGeoJSON(n) {
      var t = this.feature && this.feature.geometry && this.feature.geometry.type;
      if ("MultiPoint" === t) return this.toMultiPoint(n);
      var o = "GeometryCollection" === t,
          s = [];
      return this.eachLayer(function (t) {
        if (t.toGeoJSON) {
          var i = t.toGeoJSON(n);
          if (o) s.push(i.geometry);else {
            var e = Ke(i);
            "FeatureCollection" === e.type ? s.push.apply(s, e.features) : s.push(e);
          }
        }
      }), o ? Ge(this, {
        geometries: s,
        type: "GeometryCollection"
      }) : {
        type: "FeatureCollection",
        features: s
      };
    }
  });
  var Je = Xe,
      $e = Se.extend({
    options: {
      opacity: 1,
      alt: "",
      interactive: !1,
      crossOrigin: !1,
      errorOverlayUrl: "",
      zIndex: 1,
      className: ""
    },
    initialize: function initialize(t, i, e) {
      this._url = t, this._bounds = D(i), p(this, e);
    },
    onAdd: function onAdd() {
      this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (pi(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
    },
    onRemove: function onRemove() {
      ui(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._image && this._updateOpacity(), this;
    },
    setStyle: function setStyle(t) {
      return t.opacity && this.setOpacity(t.opacity), this;
    },
    bringToFront: function bringToFront() {
      return this._map && ci(this._image), this;
    },
    bringToBack: function bringToBack() {
      return this._map && _i(this._image), this;
    },
    setUrl: function setUrl(t) {
      return this._url = t, this._image && (this._image.src = t), this;
    },
    setBounds: function setBounds(t) {
      return this._bounds = D(t), this._map && this._reset(), this;
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._reset,
        viewreset: this._reset
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    getElement: function getElement() {
      return this._image;
    },
    _initImage: function _initImage() {
      var t = "IMG" === this._url.tagName,
          i = this._image = t ? this._url : hi("img");
      pi(i, "leaflet-image-layer"), this._zoomAnimated && pi(i, "leaflet-zoom-animated"), this.options.className && pi(i, this.options.className), i.onselectstart = l, i.onmousemove = l, i.onload = a(this.fire, this, "load"), i.onerror = a(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt);
    },
    _animateZoom: function _animateZoom(t) {
      var i = this._map.getZoomScale(t.zoom),
          e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;

      xi(this._image, e, i);
    },
    _reset: function _reset() {
      var t = this._image,
          i = new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          e = i.getSize();
      wi(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px";
    },
    _updateOpacity: function _updateOpacity() {
      vi(this._image, this.options.opacity);
    },
    _updateZIndex: function _updateZIndex() {
      this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
    },
    _overlayOnError: function _overlayOnError() {
      this.fire("error");
      var t = this.options.errorOverlayUrl;
      t && this._url !== t && (this._url = t, this._image.src = t);
    }
  }),
      Qe = $e.extend({
    options: {
      autoplay: !0,
      loop: !0,
      keepAspectRatio: !0
    },
    _initImage: function _initImage() {
      var t = "VIDEO" === this._url.tagName,
          i = this._image = t ? this._url : hi("video");

      if (pi(i, "leaflet-image-layer"), this._zoomAnimated && pi(i, "leaflet-zoom-animated"), i.onselectstart = l, i.onmousemove = l, i.onloadeddata = a(this.fire, this, "load"), t) {
        for (var e = i.getElementsByTagName("source"), n = [], o = 0; o < e.length; o++) {
          n.push(e[o].src);
        }

        this._url = 0 < e.length ? n : [i.src];
      } else {
        v(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && i.style.hasOwnProperty("objectFit") && (i.style.objectFit = "fill"), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;

        for (var s = 0; s < this._url.length; s++) {
          var r = hi("source");
          r.src = this._url[s], i.appendChild(r);
        }
      }
    }
  });
  var tn = $e.extend({
    _initImage: function _initImage() {
      var t = this._image = this._url;
      pi(t, "leaflet-image-layer"), this._zoomAnimated && pi(t, "leaflet-zoom-animated"), t.onselectstart = l, t.onmousemove = l;
    }
  });
  var en = Se.extend({
    options: {
      offset: [0, 7],
      className: "",
      pane: "popupPane"
    },
    initialize: function initialize(t, i) {
      p(this, t), this._source = i;
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && vi(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && vi(this._container, 1), this.bringToFront();
    },
    onRemove: function onRemove(t) {
      t._fadeAnimated ? (vi(this._container, 0), this._removeTimeout = setTimeout(a(ui, void 0, this._container), 200)) : ui(this._container);
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      return this._latlng = W(t), this._map && (this._updatePosition(), this._adjustPan()), this;
    },
    getContent: function getContent() {
      return this._content;
    },
    setContent: function setContent(t) {
      return this._content = t, this.update(), this;
    },
    getElement: function getElement() {
      return this._container;
    },
    update: function update() {
      this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._updatePosition,
        viewreset: this._updatePosition
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    isOpen: function isOpen() {
      return !!this._map && this._map.hasLayer(this);
    },
    bringToFront: function bringToFront() {
      return this._map && ci(this._container), this;
    },
    bringToBack: function bringToBack() {
      return this._map && _i(this._container), this;
    },
    _prepareOpen: function _prepareOpen(t, i, e) {
      if (i instanceof Se || (e = i, i = t), i instanceof Ee) for (var n in t._layers) {
        i = t._layers[n];
        break;
      }
      if (!e) if (i.getCenter) e = i.getCenter();else {
        if (!i.getLatLng) throw new Error("Unable to get source layer LatLng.");
        e = i.getLatLng();
      }
      return this._source = i, this.update(), e;
    },
    _updateContent: function _updateContent() {
      if (this._content) {
        var t = this._contentNode,
            i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
        if ("string" == typeof i) t.innerHTML = i;else {
          for (; t.hasChildNodes();) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(i);
        }
        this.fire("contentupdate");
      }
    },
    _updatePosition: function _updatePosition() {
      if (this._map) {
        var t = this._map.latLngToLayerPoint(this._latlng),
            i = I(this.options.offset),
            e = this._getAnchor();

        this._zoomAnimated ? wi(this._container, t.add(e)) : i = i.add(t).add(e);
        var n = this._containerBottom = -i.y,
            o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
        this._container.style.bottom = n + "px", this._container.style.left = o + "px";
      }
    },
    _getAnchor: function _getAnchor() {
      return [0, 0];
    }
  }),
      nn = en.extend({
    options: {
      maxWidth: 300,
      minWidth: 50,
      maxHeight: null,
      autoPan: !0,
      autoPanPaddingTopLeft: null,
      autoPanPaddingBottomRight: null,
      autoPanPadding: [5, 5],
      keepInView: !1,
      closeButton: !0,
      autoClose: !0,
      closeOnEscapeKey: !0,
      className: ""
    },
    openOn: function openOn(t) {
      return t.openPopup(this), this;
    },
    onAdd: function onAdd(t) {
      en.prototype.onAdd.call(this, t), t.fire("popupopen", {
        popup: this
      }), this._source && (this._source.fire("popupopen", {
        popup: this
      }, !0), this._source instanceof Oe || this._source.on("preclick", Oi));
    },
    onRemove: function onRemove(t) {
      en.prototype.onRemove.call(this, t), t.fire("popupclose", {
        popup: this
      }), this._source && (this._source.fire("popupclose", {
        popup: this
      }, !0), this._source instanceof Oe || this._source.off("preclick", Oi));
    },
    getEvents: function getEvents() {
      var t = en.prototype.getEvents.call(this);
      return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
    },
    _close: function _close() {
      this._map && this._map.closePopup(this);
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-popup",
          i = this._container = hi("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
          e = this._wrapper = hi("div", t + "-content-wrapper", i);

      if (this._contentNode = hi("div", t + "-content", e), Ni(e), Ri(this._contentNode), Ei(e, "contextmenu", Oi), this._tipContainer = hi("div", t + "-tip-container", i), this._tip = hi("div", t + "-tip", this._tipContainer), this.options.closeButton) {
        var n = this._closeButton = hi("a", t + "-close-button", i);
        n.href = "#close", n.innerHTML = "&#215;", Ei(n, "click", this._onCloseButtonClick, this);
      }
    },
    _updateLayout: function _updateLayout() {
      var t = this._contentNode,
          i = t.style;
      i.width = "", i.whiteSpace = "nowrap";
      var e = t.offsetWidth;
      e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
      var n = t.offsetHeight,
          o = this.options.maxHeight,
          s = "leaflet-popup-scrolled";
      o && o < n ? (i.height = o + "px", pi(t, s)) : mi(t, s), this._containerWidth = this._container.offsetWidth;
    },
    _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
          e = this._getAnchor();

      wi(this._container, i.add(e));
    },
    _adjustPan: function _adjustPan() {
      if (this.options.autoPan) {
        this._map._panAnim && this._map._panAnim.stop();
        var t = this._map,
            i = parseInt(ai(this._container, "marginBottom"), 10) || 0,
            e = this._container.offsetHeight + i,
            n = this._containerWidth,
            o = new B(this._containerLeft, -e - this._containerBottom);

        o._add(Pi(this._container));

        var s = t.layerPointToContainerPoint(o),
            r = I(this.options.autoPanPadding),
            a = I(this.options.autoPanPaddingTopLeft || r),
            h = I(this.options.autoPanPaddingBottomRight || r),
            u = t.getSize(),
            l = 0,
            c = 0;
        s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c]);
      }
    },
    _onCloseButtonClick: function _onCloseButtonClick(t) {
      this._close(), ji(t);
    },
    _getAnchor: function _getAnchor() {
      return I(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    }
  });
  Ji.mergeOptions({
    closePopupOnClick: !0
  }), Ji.include({
    openPopup: function openPopup(t, i, e) {
      return t instanceof nn || (t = new nn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t));
    },
    closePopup: function closePopup(t) {
      return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this;
    }
  }), Se.include({
    bindPopup: function bindPopup(t, i) {
      return t instanceof nn ? (p(t, i), (this._popup = t)._source = this) : (this._popup && !i || (this._popup = new nn(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
        click: this._openPopup,
        keypress: this._onKeyPress,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !0), this;
    },
    unbindPopup: function unbindPopup() {
      return this._popup && (this.off({
        click: this._openPopup,
        keypress: this._onKeyPress,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !1, this._popup = null), this;
    },
    openPopup: function openPopup(t, i) {
      return this._popup && this._map && (i = this._popup._prepareOpen(this, t, i), this._map.openPopup(this._popup, i)), this;
    },
    closePopup: function closePopup() {
      return this._popup && this._popup._close(), this;
    },
    togglePopup: function togglePopup(t) {
      return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
    },
    isPopupOpen: function isPopupOpen() {
      return !!this._popup && this._popup.isOpen();
    },
    setPopupContent: function setPopupContent(t) {
      return this._popup && this._popup.setContent(t), this;
    },
    getPopup: function getPopup() {
      return this._popup;
    },
    _openPopup: function _openPopup(t) {
      var i = t.layer || t.target;
      this._popup && this._map && (ji(t), i instanceof Oe ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng));
    },
    _movePopup: function _movePopup(t) {
      this._popup.setLatLng(t.latlng);
    },
    _onKeyPress: function _onKeyPress(t) {
      13 === t.originalEvent.keyCode && this._openPopup(t);
    }
  });
  var on = en.extend({
    options: {
      pane: "tooltipPane",
      offset: [0, 0],
      direction: "auto",
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: .9
    },
    onAdd: function onAdd(t) {
      en.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
        tooltip: this
      }), this._source && this._source.fire("tooltipopen", {
        tooltip: this
      }, !0);
    },
    onRemove: function onRemove(t) {
      en.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
        tooltip: this
      }), this._source && this._source.fire("tooltipclose", {
        tooltip: this
      }, !0);
    },
    getEvents: function getEvents() {
      var t = en.prototype.getEvents.call(this);
      return Tt && !this.options.permanent && (t.preclick = this._close), t;
    },
    _close: function _close() {
      this._map && this._map.closeTooltip(this);
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
      this._contentNode = this._container = hi("div", t);
    },
    _updateLayout: function _updateLayout() {},
    _adjustPan: function _adjustPan() {},
    _setPosition: function _setPosition(t) {
      var i = this._map,
          e = this._container,
          n = i.latLngToContainerPoint(i.getCenter()),
          o = i.layerPointToContainerPoint(t),
          s = this.options.direction,
          r = e.offsetWidth,
          a = e.offsetHeight,
          h = I(this.options.offset),
          u = this._getAnchor();

      t = "top" === s ? t.add(I(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t.subtract(I(r / 2 - h.x, -h.y, !0)) : "center" === s ? t.subtract(I(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t.add(I(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t.subtract(I(r + u.x - h.x, a / 2 - u.y - h.y, !0))), mi(e, "leaflet-tooltip-right"), mi(e, "leaflet-tooltip-left"), mi(e, "leaflet-tooltip-top"), mi(e, "leaflet-tooltip-bottom"), pi(e, "leaflet-tooltip-" + s), wi(e, t);
    },
    _updatePosition: function _updatePosition() {
      var t = this._map.latLngToLayerPoint(this._latlng);

      this._setPosition(t);
    },
    setOpacity: function setOpacity(t) {
      this.options.opacity = t, this._container && vi(this._container, t);
    },
    _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);

      this._setPosition(i);
    },
    _getAnchor: function _getAnchor() {
      return I(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    }
  });
  Ji.include({
    openTooltip: function openTooltip(t, i, e) {
      return t instanceof on || (t = new on(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t);
    },
    closeTooltip: function closeTooltip(t) {
      return t && this.removeLayer(t), this;
    }
  }), Se.include({
    bindTooltip: function bindTooltip(t, i) {
      return t instanceof on ? (p(t, i), (this._tooltip = t)._source = this) : (this._tooltip && !i || (this._tooltip = new on(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
    },
    unbindTooltip: function unbindTooltip() {
      return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
    },
    _initTooltipInteractions: function _initTooltipInteractions(t) {
      if (t || !this._tooltipHandlersAdded) {
        var i = t ? "off" : "on",
            e = {
          remove: this.closeTooltip,
          move: this._moveTooltip
        };
        this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), Tt && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t;
      }
    },
    openTooltip: function openTooltip(t, i) {
      return this._tooltip && this._map && (i = this._tooltip._prepareOpen(this, t, i), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (pi(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this;
    },
    closeTooltip: function closeTooltip() {
      return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (mi(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this;
    },
    toggleTooltip: function toggleTooltip(t) {
      return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
    },
    isTooltipOpen: function isTooltipOpen() {
      return this._tooltip.isOpen();
    },
    setTooltipContent: function setTooltipContent(t) {
      return this._tooltip && this._tooltip.setContent(t), this;
    },
    getTooltip: function getTooltip() {
      return this._tooltip;
    },
    _openTooltip: function _openTooltip(t) {
      var i = t.layer || t.target;
      this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
    },
    _moveTooltip: function _moveTooltip(t) {
      var i,
          e,
          n = t.latlng;
      this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n);
    }
  });
  var sn = ke.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon"
    },
    createIcon: function createIcon(t) {
      var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
          e = this.options;

      if (e.html instanceof Element ? (li(i), i.appendChild(e.html)) : i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
        var n = I(e.bgPos);
        i.style.backgroundPosition = -n.x + "px " + -n.y + "px";
      }

      return this._setIconStyles(i, "icon"), i;
    },
    createShadow: function createShadow() {
      return null;
    }
  });
  ke.Default = Be;
  var rn = Se.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: xt,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: "tilePane",
      className: "",
      keepBuffer: 2
    },
    initialize: function initialize(t) {
      p(this, t);
    },
    onAdd: function onAdd() {
      this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update();
    },
    beforeAdd: function beforeAdd(t) {
      t._addZoomLimit(this);
    },
    onRemove: function onRemove(t) {
      this._removeAllTiles(), ui(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
    },
    bringToFront: function bringToFront() {
      return this._map && (ci(this._container), this._setAutoZIndex(Math.max)), this;
    },
    bringToBack: function bringToBack() {
      return this._map && (_i(this._container), this._setAutoZIndex(Math.min)), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._updateOpacity(), this;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    isLoading: function isLoading() {
      return this._loading;
    },
    redraw: function redraw() {
      return this._map && (this._removeAllTiles(), this._update()), this;
    },
    getEvents: function getEvents() {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    createTile: function createTile() {
      return document.createElement("div");
    },
    getTileSize: function getTileSize() {
      var t = this.options.tileSize;
      return t instanceof B ? t : new B(t, t);
    },
    _updateZIndex: function _updateZIndex() {
      this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function _setAutoZIndex(t) {
      for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) {
        i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
      }

      isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
    },
    _updateOpacity: function _updateOpacity() {
      if (this._map && !et) {
        vi(this._container, this.options.opacity);
        var t = +new Date(),
            i = !1,
            e = !1;

        for (var n in this._tiles) {
          var o = this._tiles[n];

          if (o.current && o.loaded) {
            var s = Math.min(1, (t - o.loaded) / 200);
            vi(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0);
          }
        }

        e && !this._noPrune && this._pruneTiles(), i && (C(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this));
      }
    },
    _onOpaqueTile: l,
    _initContainer: function _initContainer() {
      this._container || (this._container = hi("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
    },
    _updateLevels: function _updateLevels() {
      var t = this._tileZoom,
          i = this.options.maxZoom;

      if (void 0 !== t) {
        for (var e in this._levels) {
          this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (ui(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
        }

        var n = this._levels[t],
            o = this._map;
        return n || ((n = this._levels[t] = {}).el = hi("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n;
      }
    },
    _onUpdateLevel: l,
    _onRemoveLevel: l,
    _onCreateLevel: l,
    _pruneTiles: function _pruneTiles() {
      if (this._map) {
        var t,
            i,
            e = this._map.getZoom();

        if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();else {
          for (t in this._tiles) {
            (i = this._tiles[t]).retain = i.current;
          }

          for (t in this._tiles) {
            if ((i = this._tiles[t]).current && !i.active) {
              var n = i.coords;
              this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
            }
          }

          for (t in this._tiles) {
            this._tiles[t].retain || this._removeTile(t);
          }
        }
      }
    },
    _removeTilesAtZoom: function _removeTilesAtZoom(t) {
      for (var i in this._tiles) {
        this._tiles[i].coords.z === t && this._removeTile(i);
      }
    },
    _removeAllTiles: function _removeAllTiles() {
      for (var t in this._tiles) {
        this._removeTile(t);
      }
    },
    _invalidateAll: function _invalidateAll() {
      for (var t in this._levels) {
        ui(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
      }

      this._removeAllTiles(), this._tileZoom = void 0;
    },
    _retainParent: function _retainParent(t, i, e, n) {
      var o = Math.floor(t / 2),
          s = Math.floor(i / 2),
          r = e - 1,
          a = new B(+o, +s);
      a.z = +r;

      var h = this._tileCoordsToKey(a),
          u = this._tiles[h];

      return u && u.active ? u.retain = !0 : (u && u.loaded && (u.retain = !0), n < r && this._retainParent(o, s, r, n));
    },
    _retainChildren: function _retainChildren(t, i, e, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++) {
        for (var s = 2 * i; s < 2 * i + 2; s++) {
          var r = new B(o, s);
          r.z = e + 1;

          var a = this._tileCoordsToKey(r),
              h = this._tiles[a];

          h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n));
        }
      }
    },
    _resetView: function _resetView(t) {
      var i = t && (t.pinch || t.flyTo);

      this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
    },
    _animateZoom: function _animateZoom(t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _clampZoom: function _clampZoom(t) {
      var i = this.options;
      return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t;
    },
    _setView: function _setView(t, i, e, n) {
      var o = this._clampZoom(Math.round(i));

      (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
      var s = this.options.updateWhenZooming && o !== this._tileZoom;
      n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i);
    },
    _setZoomTransforms: function _setZoomTransforms(t, i) {
      for (var e in this._levels) {
        this._setZoomTransform(this._levels[e], t, i);
      }
    },
    _setZoomTransform: function _setZoomTransform(t, i, e) {
      var n = this._map.getZoomScale(e, t.zoom),
          o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();

      yt ? xi(t.el, o, n) : wi(t.el, o);
    },
    _resetGrid: function _resetGrid() {
      var t = this._map,
          i = t.options.crs,
          e = this._tileSize = this.getTileSize(),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);

      o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)];
    },
    _onMoveEnd: function _onMoveEnd() {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function _getTiledPixelBounds(t) {
      var i = this._map,
          e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
          n = i.getZoomScale(e, this._tileZoom),
          o = i.project(t, this._tileZoom).floor(),
          s = i.getSize().divideBy(2 * n);
      return new O(o.subtract(s), o.add(s));
    },
    _update: function _update(t) {
      var i = this._map;

      if (i) {
        var e = this._clampZoom(i.getZoom());

        if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
          var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              s = o.getCenter(),
              r = [],
              a = this.options.keepBuffer,
              h = new O(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));

          if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");

          for (var u in this._tiles) {
            var l = this._tiles[u].coords;
            l.z === this._tileZoom && h.contains(new B(l.x, l.y)) || (this._tiles[u].current = !1);
          }

          if (1 < Math.abs(e - this._tileZoom)) this._setView(t, e);else {
            for (var c = o.min.y; c <= o.max.y; c++) {
              for (var _ = o.min.x; _ <= o.max.x; _++) {
                var d = new B(_, c);

                if (d.z = this._tileZoom, this._isValidTile(d)) {
                  var p = this._tiles[this._tileCoordsToKey(d)];

                  p ? p.current = !0 : r.push(d);
                }
              }
            }

            if (r.sort(function (t, i) {
              return t.distanceTo(s) - i.distanceTo(s);
            }), 0 !== r.length) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var m = document.createDocumentFragment();

              for (_ = 0; _ < r.length; _++) {
                this._addTile(r[_], m);
              }

              this._level.el.appendChild(m);
            }
          }
        }
      }
    },
    _isValidTile: function _isValidTile(t) {
      var i = this._map.options.crs;

      if (!i.infinite) {
        var e = this._globalTileRange;
        if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1;
      }

      if (!this.options.bounds) return !0;

      var n = this._tileCoordsToBounds(t);

      return D(this.options.bounds).overlaps(n);
    },
    _keyToBounds: function _keyToBounds(t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToNwSe: function _tileCoordsToNwSe(t) {
      var i = this._map,
          e = this.getTileSize(),
          n = t.scaleBy(e),
          o = n.add(e);
      return [i.unproject(n, t.z), i.unproject(o, t.z)];
    },
    _tileCoordsToBounds: function _tileCoordsToBounds(t) {
      var i = this._tileCoordsToNwSe(t),
          e = new N(i[0], i[1]);

      return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e;
    },
    _tileCoordsToKey: function _tileCoordsToKey(t) {
      return t.x + ":" + t.y + ":" + t.z;
    },
    _keyToTileCoords: function _keyToTileCoords(t) {
      var i = t.split(":"),
          e = new B(+i[0], +i[1]);
      return e.z = +i[2], e;
    },
    _removeTile: function _removeTile(t) {
      var i = this._tiles[t];
      i && (ui(i.el), delete this._tiles[t], this.fire("tileunload", {
        tile: i.el,
        coords: this._keyToTileCoords(t)
      }));
    },
    _initTile: function _initTile(t) {
      pi(t, "leaflet-tile");
      var i = this.getTileSize();
      t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = l, t.onmousemove = l, et && this.options.opacity < 1 && vi(t, this.options.opacity), st && !rt && (t.style.WebkitBackfaceVisibility = "hidden");
    },
    _addTile: function _addTile(t, i) {
      var e = this._getTilePos(t),
          n = this._tileCoordsToKey(t),
          o = this.createTile(this._wrapCoords(t), a(this._tileReady, this, t));

      this._initTile(o), this.createTile.length < 2 && M(a(this._tileReady, this, t, null, o)), wi(o, e), this._tiles[n] = {
        el: o,
        coords: t,
        current: !0
      }, i.appendChild(o), this.fire("tileloadstart", {
        tile: o,
        coords: t
      });
    },
    _tileReady: function _tileReady(t, i, e) {
      i && this.fire("tileerror", {
        error: i,
        tile: e,
        coords: t
      });

      var n = this._tileCoordsToKey(t);

      (e = this._tiles[n]) && (e.loaded = +new Date(), this._map._fadeAnimated ? (vi(e.el, 0), C(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this)) : (e.active = !0, this._pruneTiles()), i || (pi(e.el, "leaflet-tile-loaded"), this.fire("tileload", {
        tile: e.el,
        coords: t
      })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), et || !this._map._fadeAnimated ? M(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)));
    },
    _getTilePos: function _getTilePos(t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function _wrapCoords(t) {
      var i = new B(this._wrapX ? r(t.x, this._wrapX) : t.x, this._wrapY ? r(t.y, this._wrapY) : t.y);
      return i.z = t.z, i;
    },
    _pxBoundsToTileRange: function _pxBoundsToTileRange(t) {
      var i = this.getTileSize();
      return new O(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function _noTilesToLoad() {
      for (var t in this._tiles) {
        if (!this._tiles[t].loaded) return !1;
      }

      return !0;
    }
  });
  var an = rn.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: "abc",
      errorTileUrl: "",
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1
    },
    initialize: function initialize(t, i) {
      this._url = t, (i = p(this, i)).detectRetina && Ct && 0 < i.maxZoom && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), st || this.on("tileunload", this._onTileRemove);
    },
    setUrl: function setUrl(t, i) {
      return this._url === t && void 0 === i && (i = !0), this._url = t, i || this.redraw(), this;
    },
    createTile: function createTile(t, i) {
      var e = document.createElement("img");
      return Ei(e, "load", a(this._tileOnLoad, this, i, e)), Ei(e, "error", a(this._tileOnError, this, i, e)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), e.alt = "", e.setAttribute("role", "presentation"), e.src = this.getTileUrl(t), e;
    },
    getTileUrl: function getTileUrl(t) {
      var i = {
        r: Ct ? "@2x" : "",
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl()
      };

      if (this._map && !this._map.options.crs.infinite) {
        var e = this._globalTileRange.max.y - t.y;
        this.options.tms && (i.y = e), i["-y"] = e;
      }

      return g(this._url, h(i, this.options));
    },
    _tileOnLoad: function _tileOnLoad(t, i) {
      et ? setTimeout(a(t, this, null, i), 0) : t(null, i);
    },
    _tileOnError: function _tileOnError(t, i, e) {
      var n = this.options.errorTileUrl;
      n && i.getAttribute("src") !== n && (i.src = n), t(e, i);
    },
    _onTileRemove: function _onTileRemove(t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function _getZoomForUrl() {
      var t = this._tileZoom,
          i = this.options.maxZoom;
      return this.options.zoomReverse && (t = i - t), t + this.options.zoomOffset;
    },
    _getSubdomain: function _getSubdomain(t) {
      var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[i];
    },
    _abortLoading: function _abortLoading() {
      var t, i;

      for (t in this._tiles) {
        this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = l, i.onerror = l, i.complete || (i.src = x, ui(i), delete this._tiles[t]));
      }
    },
    _removeTile: function _removeTile(t) {
      var i = this._tiles[t];
      if (i) return ht || i.el.setAttribute("src", x), rn.prototype._removeTile.call(this, t);
    },
    _tileReady: function _tileReady(t, i, e) {
      if (this._map && (!e || e.getAttribute("src") !== x)) return rn.prototype._tileReady.call(this, t, i, e);
    }
  });

  function hn(t, i) {
    return new an(t, i);
  }

  var un = an.extend({
    defaultWmsParams: {
      service: "WMS",
      request: "GetMap",
      layers: "",
      styles: "",
      format: "image/jpeg",
      transparent: !1,
      version: "1.1.1"
    },
    options: {
      crs: null,
      uppercase: !1
    },
    initialize: function initialize(t, i) {
      this._url = t;
      var e = h({}, this.defaultWmsParams);

      for (var n in i) {
        n in this.options || (e[n] = i[n]);
      }

      var o = (i = p(this, i)).detectRetina && Ct ? 2 : 1,
          s = this.getTileSize();
      e.width = s.x * o, e.height = s.y * o, this.wmsParams = e;
    },
    onAdd: function onAdd(t) {
      this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
      var i = 1.3 <= this._wmsVersion ? "crs" : "srs";
      this.wmsParams[i] = this._crs.code, an.prototype.onAdd.call(this, t);
    },
    getTileUrl: function getTileUrl(t) {
      var i = this._tileCoordsToNwSe(t),
          e = this._crs,
          n = R(e.project(i[0]), e.project(i[1])),
          o = n.min,
          s = n.max,
          r = (1.3 <= this._wmsVersion && this._crs === Me ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
          a = an.prototype.getTileUrl.call(this, t);

      return a + m(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r;
    },
    setParams: function setParams(t, i) {
      return h(this.wmsParams, t), i || this.redraw(), this;
    }
  });
  an.WMS = un, hn.wms = function (t, i) {
    return new un(t, i);
  };
  var ln = Se.extend({
    options: {
      padding: .1,
      tolerance: 0
    },
    initialize: function initialize(t) {
      p(this, t), u(this), this._layers = this._layers || {};
    },
    onAdd: function onAdd() {
      this._container || (this._initContainer(), this._zoomAnimated && pi(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
    },
    onRemove: function onRemove() {
      this.off("update", this._updatePaths, this), this._destroyContainer();
    },
    getEvents: function getEvents() {
      var t = {
        viewreset: this._reset,
        zoom: this._onZoom,
        moveend: this._update,
        zoomend: this._onZoomEnd
      };
      return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
    },
    _onAnimZoom: function _onAnimZoom(t) {
      this._updateTransform(t.center, t.zoom);
    },
    _onZoom: function _onZoom() {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    },
    _updateTransform: function _updateTransform(t, i) {
      var e = this._map.getZoomScale(i, this._zoom),
          n = Pi(this._container),
          o = this._map.getSize().multiplyBy(.5 + this.options.padding),
          s = this._map.project(this._center, i),
          r = this._map.project(t, i).subtract(s),
          a = o.multiplyBy(-e).add(n).add(o).subtract(r);

      yt ? xi(this._container, a, e) : wi(this._container, a);
    },
    _reset: function _reset() {
      for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) {
        this._layers[t]._reset();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      for (var t in this._layers) {
        this._layers[t]._project();
      }
    },
    _updatePaths: function _updatePaths() {
      for (var t in this._layers) {
        this._layers[t]._update();
      }
    },
    _update: function _update() {
      var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();

      this._bounds = new O(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
    }
  }),
      cn = ln.extend({
    getEvents: function getEvents() {
      var t = ln.prototype.getEvents.call(this);
      return t.viewprereset = this._onViewPreReset, t;
    },
    _onViewPreReset: function _onViewPreReset() {
      this._postponeUpdatePaths = !0;
    },
    onAdd: function onAdd() {
      ln.prototype.onAdd.call(this), this._draw();
    },
    _initContainer: function _initContainer() {
      var t = this._container = document.createElement("canvas");
      Ei(t, "mousemove", o(this._onMouseMove, 32, this), this), Ei(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Ei(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d");
    },
    _destroyContainer: function _destroyContainer() {
      C(this._redrawRequest), delete this._ctx, ui(this._container), Bi(this._container), delete this._container;
    },
    _updatePaths: function _updatePaths() {
      if (!this._postponeUpdatePaths) {
        for (var t in this._redrawBounds = null, this._layers) {
          this._layers[t]._update();
        }

        this._redraw();
      }
    },
    _update: function _update() {
      if (!this._map._animatingZoom || !this._bounds) {
        ln.prototype._update.call(this);

        var t = this._bounds,
            i = this._container,
            e = t.getSize(),
            n = Ct ? 2 : 1;
        wi(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", Ct && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
      }
    },
    _reset: function _reset() {
      ln.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
    },
    _initPath: function _initPath(t) {
      this._updateDashArray(t);

      var i = (this._layers[u(t)] = t)._order = {
        layer: t,
        prev: this._drawLast,
        next: null
      };
      this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast;
    },
    _addPath: function _addPath(t) {
      this._requestRedraw(t);
    },
    _removePath: function _removePath(t) {
      var i = t._order,
          e = i.next,
          n = i.prev;
      e ? e.prev = n : this._drawLast = n, n ? n.next = e : this._drawFirst = e, delete t._order, delete this._layers[u(t)], this._requestRedraw(t);
    },
    _updatePath: function _updatePath(t) {
      this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
    },
    _updateStyle: function _updateStyle(t) {
      this._updateDashArray(t), this._requestRedraw(t);
    },
    _updateDashArray: function _updateDashArray(t) {
      if ("string" == typeof t.options.dashArray) {
        var i,
            e,
            n = t.options.dashArray.split(/[, ]+/),
            o = [];

        for (e = 0; e < n.length; e++) {
          if (i = Number(n[e]), isNaN(i)) return;
          o.push(i);
        }

        t.options._dashArray = o;
      } else t.options._dashArray = t.options.dashArray;
    },
    _requestRedraw: function _requestRedraw(t) {
      this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || M(this._redraw, this));
    },
    _extendRedrawBounds: function _extendRedrawBounds(t) {
      if (t._pxBounds) {
        var i = (t.options.weight || 0) + 1;
        this._redrawBounds = this._redrawBounds || new O(), this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]));
      }
    },
    _redraw: function _redraw() {
      this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
    },
    _clear: function _clear() {
      var t = this._redrawBounds;

      if (t) {
        var i = t.getSize();

        this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y);
      } else this._ctx.clearRect(0, 0, this._container.width, this._container.height);
    },
    _draw: function _draw() {
      var t,
          i = this._redrawBounds;

      if (this._ctx.save(), i) {
        var e = i.getSize();
        this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip();
      }

      this._drawing = !0;

      for (var n = this._drawFirst; n; n = n.next) {
        t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
      }

      this._drawing = !1, this._ctx.restore();
    },
    _updatePoly: function _updatePoly(t, i) {
      if (this._drawing) {
        var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;

        if (a) {
          for (h.beginPath(), e = 0; e < a; e++) {
            for (n = 0, o = r[e].length; n < o; n++) {
              s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
            }

            i && h.closePath();
          }

          this._fillStroke(h, t);
        }
      }
    },
    _updateCircle: function _updateCircle(t) {
      if (this._drawing && !t._empty()) {
        var i = t._point,
            e = this._ctx,
            n = Math.max(Math.round(t._radius), 1),
            o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
        1 != o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 != o && e.restore(), this._fillStroke(e, t);
      }
    },
    _fillStroke: function _fillStroke(t, i) {
      var e = i.options;
      e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke());
    },
    _onClick: function _onClick(t) {
      for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) {
        (i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
      }

      e && (qi(t), this._fireEvent([e], t));
    },
    _onMouseMove: function _onMouseMove(t) {
      if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
        var i = this._map.mouseEventToLayerPoint(t);

        this._handleMouseHover(t, i);
      }
    },
    _handleMouseOut: function _handleMouseOut(t) {
      var i = this._hoveredLayer;
      i && (mi(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null);
    },
    _handleMouseHover: function _handleMouseHover(t, i) {
      for (var e, n, o = this._drawFirst; o; o = o.next) {
        (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
      }

      n !== this._hoveredLayer && (this._handleMouseOut(t), n && (pi(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t);
    },
    _fireEvent: function _fireEvent(t, i, e) {
      this._map._fireDOMEvent(i, e || i.type, t);
    },
    _bringToFront: function _bringToFront(t) {
      var i = t._order;

      if (i) {
        var e = i.next,
            n = i.prev;
        e && ((e.prev = n) ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, (this._drawLast.next = i).next = null, this._drawLast = i, this._requestRedraw(t));
      }
    },
    _bringToBack: function _bringToBack(t) {
      var i = t._order;

      if (i) {
        var e = i.next,
            n = i.prev;
        n && ((n.next = e) ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t));
      }
    }
  });

  function _n(t) {
    return St ? new cn(t) : null;
  }

  var dn = function () {
    try {
      return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
        return document.createElement("<lvml:" + t + ' class="lvml">');
      };
    } catch (t) {
      return function (t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }
  }(),
      pn = {
    _initContainer: function _initContainer() {
      this._container = hi("div", "leaflet-vml-container");
    },
    _update: function _update() {
      this._map._animatingZoom || (ln.prototype._update.call(this), this.fire("update"));
    },
    _initPath: function _initPath(t) {
      var i = t._container = dn("shape");
      pi(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = dn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[u(t)] = t;
    },
    _addPath: function _addPath(t) {
      var i = t._container;
      this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i);
    },
    _removePath: function _removePath(t) {
      var i = t._container;
      ui(i), t.removeInteractiveTarget(i), delete this._layers[u(t)];
    },
    _updateStyle: function _updateStyle(t) {
      var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;
      o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = dn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = v(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = dn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null);
    },
    _updateCircle: function _updateCircle(t) {
      var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);

      this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600");
    },
    _setPath: function _setPath(t, i) {
      t._path.v = i;
    },
    _bringToFront: function _bringToFront(t) {
      ci(t._container);
    },
    _bringToBack: function _bringToBack(t) {
      _i(t._container);
    }
  },
      mn = Et ? dn : $,
      fn = ln.extend({
    getEvents: function getEvents() {
      var t = ln.prototype.getEvents.call(this);
      return t.zoomstart = this._onZoomStart, t;
    },
    _initContainer: function _initContainer() {
      this._container = mn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = mn("g"), this._container.appendChild(this._rootGroup);
    },
    _destroyContainer: function _destroyContainer() {
      ui(this._container), Bi(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
    },
    _onZoomStart: function _onZoomStart() {
      this._update();
    },
    _update: function _update() {
      if (!this._map._animatingZoom || !this._bounds) {
        ln.prototype._update.call(this);

        var t = this._bounds,
            i = t.getSize(),
            e = this._container;
        this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), wi(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update");
      }
    },
    _initPath: function _initPath(t) {
      var i = t._path = mn("path");
      t.options.className && pi(i, t.options.className), t.options.interactive && pi(i, "leaflet-interactive"), this._updateStyle(t), this._layers[u(t)] = t;
    },
    _addPath: function _addPath(t) {
      this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
    },
    _removePath: function _removePath(t) {
      ui(t._path), t.removeInteractiveTarget(t._path), delete this._layers[u(t)];
    },
    _updatePath: function _updatePath(t) {
      t._project(), t._update();
    },
    _updateStyle: function _updateStyle(t) {
      var i = t._path,
          e = t.options;
      i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"));
    },
    _updatePoly: function _updatePoly(t, i) {
      this._setPath(t, Q(t._parts, i));
    },
    _updateCircle: function _updateCircle(t) {
      var i = t._point,
          e = Math.max(Math.round(t._radius), 1),
          n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
          o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";

      this._setPath(t, o);
    },
    _setPath: function _setPath(t, i) {
      t._path.setAttribute("d", i);
    },
    _bringToFront: function _bringToFront(t) {
      ci(t._path);
    },
    _bringToBack: function _bringToBack(t) {
      _i(t._path);
    }
  });

  function gn(t) {
    return Zt || Et ? new fn(t) : null;
  }

  Et && fn.include(pn), Ji.include({
    getRenderer: function getRenderer(t) {
      var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;

      return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i;
    },
    _getPaneRenderer: function _getPaneRenderer(t) {
      if ("overlayPane" === t || void 0 === t) return !1;
      var i = this._paneRenderers[t];
      return void 0 === i && (i = this._createRenderer({
        pane: t
      }), this._paneRenderers[t] = i), i;
    },
    _createRenderer: function _createRenderer(t) {
      return this.options.preferCanvas && _n(t) || gn(t);
    }
  });
  var vn = je.extend({
    initialize: function initialize(t, i) {
      je.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    },
    setBounds: function setBounds(t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function _boundsToLatLngs(t) {
      return [(t = D(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
    }
  });
  fn.create = mn, fn.pointsToPath = Q, We.geometryToLayer = He, We.coordsToLatLng = Fe, We.coordsToLatLngs = Ue, We.latLngToCoords = Ve, We.latLngsToCoords = qe, We.getFeature = Ge, We.asFeature = Ke, Ji.mergeOptions({
    boxZoom: !0
  });
  var yn = oe.extend({
    initialize: function initialize(t) {
      this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
    },
    addHooks: function addHooks() {
      Ei(this._container, "mousedown", this._onMouseDown, this);
    },
    removeHooks: function removeHooks() {
      Bi(this._container, "mousedown", this._onMouseDown, this);
    },
    moved: function moved() {
      return this._moved;
    },
    _destroy: function _destroy() {
      ui(this._pane), delete this._pane;
    },
    _resetState: function _resetState() {
      this._resetStateTimeout = 0, this._moved = !1;
    },
    _clearDeferredResetState: function _clearDeferredResetState() {
      0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
    },
    _onMouseDown: function _onMouseDown(t) {
      if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
      this._clearDeferredResetState(), this._resetState(), $t(), bi(), this._startPoint = this._map.mouseEventToContainerPoint(t), Ei(document, {
        contextmenu: ji,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseMove: function _onMouseMove(t) {
      this._moved || (this._moved = !0, this._box = hi("div", "leaflet-zoom-box", this._container), pi(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
      var i = new O(this._point, this._startPoint),
          e = i.getSize();
      wi(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px";
    },
    _finish: function _finish() {
      this._moved && (ui(this._box), mi(this._container, "leaflet-crosshair")), Qt(), Ti(), Bi(document, {
        contextmenu: ji,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseUp: function _onMouseUp(t) {
      if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
        this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(a(this._resetState, this), 0);
        var i = new N(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));

        this._map.fitBounds(i).fire("boxzoomend", {
          boxZoomBounds: i
        });
      }
    },
    _onKeyDown: function _onKeyDown(t) {
      27 === t.keyCode && this._finish();
    }
  });
  Ji.addInitHook("addHandler", "boxZoom", yn), Ji.mergeOptions({
    doubleClickZoom: !0
  });
  var xn = oe.extend({
    addHooks: function addHooks() {
      this._map.on("dblclick", this._onDoubleClick, this);
    },
    removeHooks: function removeHooks() {
      this._map.off("dblclick", this._onDoubleClick, this);
    },
    _onDoubleClick: function _onDoubleClick(t) {
      var i = this._map,
          e = i.getZoom(),
          n = i.options.zoomDelta,
          o = t.originalEvent.shiftKey ? e - n : e + n;
      "center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o);
    }
  });
  Ji.addInitHook("addHandler", "doubleClickZoom", xn), Ji.mergeOptions({
    dragging: !0,
    inertia: !rt,
    inertiaDeceleration: 3400,
    inertiaMaxSpeed: 1 / 0,
    easeLinearity: .2,
    worldCopyJump: !1,
    maxBoundsViscosity: 0
  });
  var wn = oe.extend({
    addHooks: function addHooks() {
      if (!this._draggable) {
        var t = this._map;
        this._draggable = new le(t._mapPane, t._container), this._draggable.on({
          dragstart: this._onDragStart,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
      }

      pi(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
    },
    removeHooks: function removeHooks() {
      mi(this._map._container, "leaflet-grab"), mi(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    moving: function moving() {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function _onDragStart() {
      var t = this._map;

      if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
        var i = D(this._map.options.maxBounds);
        this._offsetLimit = R(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
      } else this._offsetLimit = null;

      t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
    },
    _onDrag: function _onDrag(t) {
      if (this._map.options.inertia) {
        var i = this._lastTime = +new Date(),
            e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
        this._positions.push(e), this._times.push(i), this._prunePositions(i);
      }

      this._map.fire("move", t).fire("drag", t);
    },
    _prunePositions: function _prunePositions(t) {
      for (; 1 < this._positions.length && 50 < t - this._times[0];) {
        this._positions.shift(), this._times.shift();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      var t = this._map.getSize().divideBy(2),
          i = this._map.latLngToLayerPoint([0, 0]);

      this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    },
    _viscousLimit: function _viscousLimit(t, i) {
      return t - (t - i) * this._viscosity;
    },
    _onPreDragLimit: function _onPreDragLimit() {
      if (this._viscosity && this._offsetLimit) {
        var t = this._draggable._newPos.subtract(this._draggable._startPos),
            i = this._offsetLimit;

        t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
      }
    },
    _onPreDragWrap: function _onPreDragWrap() {
      var t = this._worldWidth,
          i = Math.round(t / 2),
          e = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = (n - i + e) % t + i - e,
          s = (n + i + e) % t - i - e,
          r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
      this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r;
    },
    _onDragEnd: function _onDragEnd(t) {
      var i = this._map,
          e = i.options,
          n = !e.inertia || this._times.length < 2;
      if (i.fire("dragend", t), n) i.fire("moveend");else {
        this._prunePositions(+new Date());

        var o = this._lastPos.subtract(this._positions[0]),
            s = (this._lastTime - this._times[0]) / 1e3,
            r = e.easeLinearity,
            a = o.multiplyBy(r / s),
            h = a.distanceTo([0, 0]),
            u = Math.min(e.inertiaMaxSpeed, h),
            l = a.multiplyBy(u / h),
            c = u / (e.inertiaDeceleration * r),
            _ = l.multiplyBy(-c / 2).round();

        _.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), M(function () {
          i.panBy(_, {
            duration: c,
            easeLinearity: r,
            noMoveStart: !0,
            animate: !0
          });
        })) : i.fire("moveend");
      }
    }
  });
  Ji.addInitHook("addHandler", "dragging", wn), Ji.mergeOptions({
    keyboard: !0,
    keyboardPanDelta: 80
  });
  var Pn = oe.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function initialize(t) {
      this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function addHooks() {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"), Ei(t, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.on({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    removeHooks: function removeHooks() {
      this._removeHooks(), Bi(this._map._container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.off({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    _onMouseDown: function _onMouseDown() {
      if (!this._focused) {
        var t = document.body,
            i = document.documentElement,
            e = t.scrollTop || i.scrollTop,
            n = t.scrollLeft || i.scrollLeft;
        this._map._container.focus(), window.scrollTo(n, e);
      }
    },
    _onFocus: function _onFocus() {
      this._focused = !0, this._map.fire("focus");
    },
    _onBlur: function _onBlur() {
      this._focused = !1, this._map.fire("blur");
    },
    _setPanDelta: function _setPanDelta(t) {
      var i,
          e,
          n = this._panKeys = {},
          o = this.keyCodes;

      for (i = 0, e = o.left.length; i < e; i++) {
        n[o.left[i]] = [-1 * t, 0];
      }

      for (i = 0, e = o.right.length; i < e; i++) {
        n[o.right[i]] = [t, 0];
      }

      for (i = 0, e = o.down.length; i < e; i++) {
        n[o.down[i]] = [0, t];
      }

      for (i = 0, e = o.up.length; i < e; i++) {
        n[o.up[i]] = [0, -1 * t];
      }
    },
    _setZoomDelta: function _setZoomDelta(t) {
      var i,
          e,
          n = this._zoomKeys = {},
          o = this.keyCodes;

      for (i = 0, e = o.zoomIn.length; i < e; i++) {
        n[o.zoomIn[i]] = t;
      }

      for (i = 0, e = o.zoomOut.length; i < e; i++) {
        n[o.zoomOut[i]] = -t;
      }
    },
    _addHooks: function _addHooks() {
      Ei(document, "keydown", this._onKeyDown, this);
    },
    _removeHooks: function _removeHooks() {
      Bi(document, "keydown", this._onKeyDown, this);
    },
    _onKeyDown: function _onKeyDown(t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
            e = t.keyCode,
            n = this._map;
        if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = I(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);else {
          if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
          n.closePopup();
        }
        ji(t);
      }
    }
  });
  Ji.addInitHook("addHandler", "keyboard", Pn), Ji.mergeOptions({
    scrollWheelZoom: !0,
    wheelDebounceTime: 40,
    wheelPxPerZoomLevel: 60
  });
  var Ln = oe.extend({
    addHooks: function addHooks() {
      Ei(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0;
    },
    removeHooks: function removeHooks() {
      Bi(this._map._container, "mousewheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function _onWheelScroll(t) {
      var i = Fi(t),
          e = this._map.options.wheelDebounceTime;
      this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());
      var n = Math.max(e - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer), this._timer = setTimeout(a(this._performZoom, this), n), ji(t);
    },
    _performZoom: function _performZoom() {
      var t = this._map,
          i = t.getZoom(),
          e = this._map.options.zoomSnap || 0;

      t._stop();

      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
          o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
          s = e ? Math.ceil(o / e) * e : o,
          r = t._limitZoom(i + (0 < this._delta ? s : -s)) - i;
      this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r));
    }
  });
  Ji.addInitHook("addHandler", "scrollWheelZoom", Ln), Ji.mergeOptions({
    tap: !0,
    tapTolerance: 15
  });
  var bn = oe.extend({
    addHooks: function addHooks() {
      Ei(this._map._container, "touchstart", this._onDown, this);
    },
    removeHooks: function removeHooks() {
      Bi(this._map._container, "touchstart", this._onDown, this);
    },
    _onDown: function _onDown(t) {
      if (t.touches) {
        if (Di(t), this._fireClick = !0, 1 < t.touches.length) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
        var i = t.touches[0],
            e = i.target;
        this._startPos = this._newPos = new B(i.clientX, i.clientY), e.tagName && "a" === e.tagName.toLowerCase() && pi(e, "leaflet-active"), this._holdTimeout = setTimeout(a(function () {
          this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i));
        }, this), 1e3), this._simulateEvent("mousedown", i), Ei(document, {
          touchmove: this._onMove,
          touchend: this._onUp
        }, this);
      }
    },
    _onUp: function _onUp(t) {
      if (clearTimeout(this._holdTimeout), Bi(document, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this), this._fireClick && t && t.changedTouches) {
        var i = t.changedTouches[0],
            e = i.target;
        e && e.tagName && "a" === e.tagName.toLowerCase() && mi(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i);
      }
    },
    _isTapValid: function _isTapValid() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _onMove: function _onMove(t) {
      var i = t.touches[0];
      this._newPos = new B(i.clientX, i.clientY), this._simulateEvent("mousemove", i);
    },
    _simulateEvent: function _simulateEvent(t, i) {
      var e = document.createEvent("MouseEvents");
      e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e);
    }
  });
  Tt && !bt && Ji.addInitHook("addHandler", "tap", bn), Ji.mergeOptions({
    touchZoom: Tt && !rt,
    bounceAtZoomLimits: !0
  });
  var Tn = oe.extend({
    addHooks: function addHooks() {
      pi(this._map._container, "leaflet-touch-zoom"), Ei(this._map._container, "touchstart", this._onTouchStart, this);
    },
    removeHooks: function removeHooks() {
      mi(this._map._container, "leaflet-touch-zoom"), Bi(this._map._container, "touchstart", this._onTouchStart, this);
    },
    _onTouchStart: function _onTouchStart(t) {
      var i = this._map;

      if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
        var e = i.mouseEventToContainerPoint(t.touches[0]),
            n = i.mouseEventToContainerPoint(t.touches[1]);
        this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), Ei(document, "touchmove", this._onTouchMove, this), Ei(document, "touchend", this._onTouchEnd, this), Di(t);
      }
    },
    _onTouchMove: function _onTouchMove(t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
            e = i.mouseEventToContainerPoint(t.touches[0]),
            n = i.mouseEventToContainerPoint(t.touches[1]),
            o = e.distanceTo(n) / this._startDist;

        if (this._zoom = i.getScaleZoom(o, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && o < 1 || this._zoom > i.getMaxZoom() && 1 < o) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
          if (this._center = this._startLatLng, 1 == o) return;
        } else {
          var s = e._add(n)._divideBy(2)._subtract(this._centerPoint);

          if (1 == o && 0 === s.x && 0 === s.y) return;
          this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom);
        }

        this._moved || (i._moveStart(!0, !1), this._moved = !0), C(this._animRequest);
        var r = a(i._move, i, this._center, this._zoom, {
          pinch: !0,
          round: !1
        });
        this._animRequest = M(r, this, !0), Di(t);
      }
    },
    _onTouchEnd: function _onTouchEnd() {
      this._moved && this._zooming ? (this._zooming = !1, C(this._animRequest), Bi(document, "touchmove", this._onTouchMove), Bi(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
    }
  });
  Ji.addInitHook("addHandler", "touchZoom", Tn), Ji.BoxZoom = yn, Ji.DoubleClickZoom = xn, Ji.Drag = wn, Ji.Keyboard = Pn, Ji.ScrollWheelZoom = Ln, Ji.Tap = bn, Ji.TouchZoom = Tn, Object.freeze = i, t.version = "1.5.1+HEAD.2e3e0ff", t.Control = Qi, t.control = $i, t.Browser = Bt, t.Evented = k, t.Mixin = re, t.Util = S, t.Class = Z, t.Handler = oe, t.extend = h, t.bind = a, t.stamp = u, t.setOptions = p, t.DomEvent = Yi, t.DomUtil = Zi, t.PosAnimation = Xi, t.Draggable = le, t.LineUtil = ye, t.PolyUtil = Pe, t.Point = B, t.point = I, t.Bounds = O, t.bounds = R, t.Transformation = G, t.transformation = K, t.Projection = Te, t.LatLng = j, t.latLng = W, t.LatLngBounds = N, t.latLngBounds = D, t.CRS = F, t.GeoJSON = We, t.geoJSON = Xe, t.geoJson = Je, t.Layer = Se, t.LayerGroup = Ze, t.layerGroup = function (t, i) {
    return new Ze(t, i);
  }, t.FeatureGroup = Ee, t.featureGroup = function (t) {
    return new Ee(t);
  }, t.ImageOverlay = $e, t.imageOverlay = function (t, i, e) {
    return new $e(t, i, e);
  }, t.VideoOverlay = Qe, t.videoOverlay = function (t, i, e) {
    return new Qe(t, i, e);
  }, t.SVGOverlay = tn, t.svgOverlay = function (t, i, e) {
    return new tn(t, i, e);
  }, t.DivOverlay = en, t.Popup = nn, t.popup = function (t, i) {
    return new nn(t, i);
  }, t.Tooltip = on, t.tooltip = function (t, i) {
    return new on(t, i);
  }, t.Icon = ke, t.icon = function (t) {
    return new ke(t);
  }, t.DivIcon = sn, t.divIcon = function (t) {
    return new sn(t);
  }, t.Marker = Ie, t.marker = function (t, i) {
    return new Ie(t, i);
  }, t.TileLayer = an, t.tileLayer = hn, t.GridLayer = rn, t.gridLayer = function (t) {
    return new rn(t);
  }, t.SVG = fn, t.svg = gn, t.Renderer = ln, t.Canvas = cn, t.canvas = _n, t.Path = Oe, t.CircleMarker = Re, t.circleMarker = function (t, i) {
    return new Re(t, i);
  }, t.Circle = Ne, t.circle = function (t, i, e) {
    return new Ne(t, i, e);
  }, t.Polyline = De, t.polyline = function (t, i) {
    return new De(t, i);
  }, t.Polygon = je, t.polygon = function (t, i) {
    return new je(t, i);
  }, t.Rectangle = vn, t.rectangle = function (t, i) {
    return new vn(t, i);
  }, t.Map = Ji, t.map = function (t, i) {
    return new Ji(t, i);
  };
  var zn = window.L;
  t.noConflict = function () {
    return window.L = zn, this;
  }, window.L = t;
});

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