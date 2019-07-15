/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./jQuery-3.4.1.min');
require('./sticky-sidebar.min');
require('./datepicker.min.js');
require('./leaflet.js');

$.easing.custom = function (x, t, b, c, d) {
	if ((t/=d/2) < 1) return c/2*t*t + b;
	return -c/2 * ((--t)*(t-2) - 1) + b;
};

$.fn.highlight = function(what,spanClass) {
	return this.each(function(){
		var container = this,
		content = container.innerHTML,
		pattern = new RegExp('(>[^<.]*)(' + what + ')([^<.]*)','g'),
		replaceWith = '$1<span ' + ( spanClass ? 'class="' + spanClass + '"' : '' ) + '">$2</span>$3',
		highlighted = content.replace(pattern,replaceWith);
		container.innerHTML = highlighted;
	});
};

/* Slide in on Appear */

$.fn.visible = function(partial) {
	var $t            = $(this),
	$w            = $(window),
	viewTop       = $w.scrollTop(),
	viewBottom    = viewTop + $w.height(),
	_top          = $t.offset().top,
	_bottom       = _top + $t.height(),
	compareTop    = partial === true ? _bottom : _top,
	compareBottom = partial === true ? _top : _bottom;
	return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
};

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

$(function() {
	/* Show lyrics on click */
	$(document).on('click','.show-lyrics',function(e) {
		console.log('boo');
		e.preventDefault();
		$(this).closest('.post').find('.post__lyrics').slideToggle();
	});
	/* Show comments on click */
	$(document).on('click','.post__comment-link',function(e) {
		e.preventDefault();
		$(this).closest('.post').find('.comments').slideToggle();
	});
	$(document).on('click', '.post_player .play-pause-btn', function(e) {
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

		if (($audio.buffered != undefined) && ($audio.buffered.length != 0)) {
			$mp3.bind('progress', function() {
				var $loaded = parseInt((($audio.buffered.end(0) / $audio.duration) * 100), 10);
				$loadingIndicator.css({width: $loaded + '%'});
			});
		} else {
			$loadingIndicator.remove();
		}
		var pos = 0;
		var countedMe = false;
		$mp3.bind('timeupdate',function() {
			var rem = parseInt($audio.duration - $audio.currentTime, 10),
			mins = Math.floor(rem/60,10),
			secs = rem - mins*60; 
			$progress.css({width: pos + '%'});
			pos = ($audio.currentTime / $audio.duration) * 100;
			if(!countedMe && pos >= 50) {
				countedMe = true;
				var myHref = $this.attr('href');
				$.get(myHref,function(n) {
					$item.find('.play-count').text(n);
				});
			}
		});
		$mp3.bind('ended',function() {
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
		$thebtn.addClass('playing');
    //$('.player .item.playing').removeClass('playing');
    $('.player .item .play-pause-btn i').removeClass('fa-pause').addClass('fa-play');

    //$item.toggleClass('playing');
    $mp3.trigger($item.hasClass('playing') ? 'play' : 'pause');
    $bars.css({
    	'display': $item.hasClass('playing') ? 'block' : 'none'
    });
    $btn.attr('class', $item.hasClass('playing') ? 'fa fa-pause' : 'fa fa-play');
    
});
	$(document).on('click','.post .like',function(e) {
		e.preventDefault();
		var $this = $(this),
		postID = $(this).data('song-id');

		$.get('/post/like/'+postID,function(r)  {
			r.success ? $this.addClass('liked') : $this.removeClass('liked');
			$this.find('.like-count').text(r.total_likes);
		});
	});
	$(document).on('click','.post__comment-link',function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.closest('.post').find('.post__comments').slideToggle();
	});
	$('.comment-form').submit(function(e) {
		var $this = $(this);
		$.ajax({
			url: $this.attr('action'),
			type: 'post',
			data: $this.serialize(),
			dataType: 'json',
			success: function (r) {
				console.log(r);
				var newComment = '<div class="post__comment anim-in come-in flex flex--align-center"><div class="post__comment--user"><a href="'+r.user.username+'"><img src="/storage/uploads/avatars/'+r.user.avatar+'" width="20" /></a></div><div class="post__comment--text">'+r.comment+'</div></div>';
				$(newComment).insertBefore('.comment-form');
 				// $('.post__comments').append(newComment);
 			}
 		});
		return false;
	})
	$(document).on('click','.im-going',function(e) {
		e.preventDefault();
		var $this = $(this),
		showcaseID = $(this).data('event-id');
		$.get('/showcase/like/'+showcaseID,function(r)  {
			console.log(r);
			if(r.success) {
				$this.addClass('liked');
				$this.find('.icon i').attr('class','fa fa-thumbs-up');
				$this.find('.button-text').text('I\'ll Be There!');
			} else {
				$this.removeClass('liked');	
				$this.find('.icon i').attr('class','fa fa-question');
				$this.find('.button-text').text('Be There?');
			}
		});
	});

	$(document).on('click','.follow-btn',function(e) {
		e.preventDefault();
		var $this = $(this),
		request = $this.attr('href'),
		el = $this[0];
		$.get(request,function(r) {
			if(r.success) {
				$this.addClass('liked').find('.like-text').text('Following');
 				// $this.find('i').addClass('star-spin');
 				setTimeout(function() {
 					$this.find('i').toggleClass('star-spin');
 				}, 1000);
 			} else {
 				$this.removeClass('liked').find('.like-text').text('Follow');
 				$this.find('i').removeClass('star-spin');
 			}
 			
 			// void el.offsetWidth;
 			// r.success ?  : ;
 			$this.next().text('Followers: '+r.total_likes);
 		});
	});
	var win = $(window);
	var allMods = $(".anim-in");
	allMods.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			var dly = i/10;
			el.delay(dly).addClass("already-visible"); 
		} 
	});

	win.scroll(function(event) {
		allMods.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				var dly = i/10;
				el.delay(dly).addClass("come-in"); 
			} 
		});
	});

	$(document).on('change keyup keydown paste cut','textarea',function() {
		$(this).height(0).height(this.scrollHeight);
	});

 	// console.log($('.sidebar__inner').data('sticky'));
 	if($('.sidebar__inner').data('sticky') == true) {
 		var sidebar = new StickySidebar('.sidebar', {
 			containerSelector: '#page-content',
 			innerWrapperSelector: '.sidebar__inner',
 			topSpacing: 50,
 			bottomSpacing: 50
 		});
 	}

 	var MIN_LENGTH = 3;
 	var CURRENT_QUERY = '';
 	$("#ts").keyup(debounce(function(){
 		var keyword = $("#ts").val(),
 			tsr = '#top-search-results';
 		if (keyword.length >= MIN_LENGTH && CURRENT_QUERY != keyword) {
 			CURRENT_QUERY = keyword;
 			$.get( "/search", { q: keyword } )
 			.done(function( data ) {
 				console.log(data);
 				$(tsr).empty();
 				if(data.users.length) {
 					$(tsr).append('<h4>Users</h4>');
 					var users = '.tsr__users';
 					$(tsr).append('<ul class="tsr__users"></ul>');
 					$(data.users).each(function(i,v) {
 						if(i<5) {
 							var userItem = '<li class="tsr__user"><a href="/'+v.username+'"><img src="/storage/uploads/avatars/'+v.avatar+'" width="20">'+v.name+'</a></li>';
 							$(users).append(userItem);
 						}
 						if(i==5) {
 							$(users).append('<li class="tsr__more"><a href="/search?q='+keyword+'</a></li>');
 						}
 					});
 				}
 				// if(data.posts.length) {

 				// }
 				// if(data.prompts.length) {

 				// }
 				$(tsr).fadeIn();
 			});
 		}
 	},500));
 	$('#top-search-results').mouseleave(function() {
 		$(this).fadeOut('fast',function() {
 			$(this).empty();
 		}); 
 	});


 	$("#registration-form #name").keyup(debounce(function(){
 		var keyword = $(this).val(),
 			usernameInput = '#username';
 		if (keyword.length >= MIN_LENGTH && CURRENT_QUERY != keyword) {
 			CURRENT_QUERY = keyword;
 			var generateUsername = keyword.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').toLowerCase();
 			$(usernameInput).val(generateUsername);
 		}
 	},500));
 });






// require('./bootstrap');

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