/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// require('./jquery-3.4.1.min.js');
require('./sticky-sidebar.min.js');
// require('./datepicker.min.js');
require('./leaflet.js');
require('./cookies.min.js');

function isMobile() {
	if(window.innerWidth <= 600) {
		return true;
	} else {
		return false;
	}
}

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

var NowPlaying = {
	isPlaying: false,
	currentPostId: false,
	currentUserId: false,
	currentUserName: false,
	currentUserImage: false
};
// console.log(NowPlaying.isPlaying);

var AUDIO_PLAYING = false,
CURRENT_SONG = false,
	// VOLUME = Cookies.get('volume') ? Cookies.get('volume') : 1,
	SOMETHING = true;


	$(function() {
		fadeInElements();
		if(isMobile()){
			$(document).on('click','.main-nav__user-link',function(e) {
				e.preventDefault();
				$('.user-drop-wrap').toggleClass('show');
			});
		}
		/* Show lyrics on click */
		$(document).on('click','.show-lyrics',function(e) {
			console.log('boo');
			e.preventDefault();
			$(this).closest('.post').find('.post__lyrics').slideToggle();
		});
		/* Show comments on click */
		$(document).on('click','.post__comment-link',function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.closest('.post').find('.post__comments').slideToggle('fast',function() {
				if($(this).is(':visible')) {
					$(this).find('input[name="comment"]').focus();
				}
			});
		});
		$(document).on('click', '.post .play-pause-btn', function(e) {
			e.preventDefault();
			var $this = $(this);
			var $item = $this.closest('.post'),
			$mainPlayer = $('.main-player'),
			$songId = $item.data('song-id');
			$btn = $item.find('.play-pause-btn i'),
			$mainBtn = $mainPlayer.find('.play-pause-btn i'),
			$thebtn = $btn.parent(),
			$loadingIndicator = $mainPlayer.find('.main-player__playbar--loading'),
			$progress = $mainPlayer.find('.main-player__playbar--progress'),
			$seek = $item.find('.seek'),
			$mainProgress = '.main-player__playbar--progress',
			mainTitle = '.main-player__title',
			sID = $item.parent().parent().data('song-id');
			prompt = $item.data('prompt-title'),
			promptSlug = $item.data('prompt-slug'),
			userLink = $item.find('.post_artist').html(),
			postLink = $item.find('.share').attr('href'),
			liked = $item.find('.like').hasClass('liked'),
			$mainPlayer.attr('data-song-id',$songId);

		// Nothing is Playing
		if(NowPlaying.currentPostId != $songId) {
			$('.main-player__image').empty();	
			var mainTitles = '<b><a href="'+postLink+'">"'+$item.data('title')+'"</a></b>' + '<br/>' + userLink;
			$(mainTitle).html(mainTitles);
			var $userImage = $item.find('.post__cover img').clone().appendTo('.main-player__image');
			$mainPlayer.fadeIn();
			$('.main-player__audio').attr('src',$item.data('audio'));
			// $('.main-player__audio').get(0)
			// CURRENT_SONG = $songId;
			NowPlaying.currentPostId = $songId;
			NowPlaying.currentPrompt = prompt;
			$('.main-player__prompt-name').text(prompt);
			$('.main-player__prompt ').attr('href','/prompts/'+promptSlug);
			liked ? $('.main-player__like').addClass('liked') : '' ;
		}
		
		setTimeout(function() {
			$('.main-player .play-pause-btn').trigger('click');
		},250);

		$btn.attr('class', $item.hasClass('is-playing') ? 'fa fa-pause' : 'fa fa-play');
		$mainBtn.attr('class', $item.hasClass('is-playing') ? 'fa fa-pause' : 'fa fa-play');

	});
    /*
	$(document).on('click','.main-player__volume-wrapper',function(e) {
		e.preventDefault();
		var myIcon = $(this).find('i'),
			mainAudio = '.main-player__audio';

		if(myIcon.hasClass('fa-volume-up')) {
			$(mainAudio).prop("volume", 0.0);
			VOLUME = 0;
			myIcon.removeClass('fa-volume-up').addClass('fa-volume-off');
			// Cookies.set('volume', 0);
		} else 
		if(myIcon.hasClass('fa-volume-off')) {
			$(mainAudio).prop("volume", 0.5);
			VOLUME = .5;
			myIcon.removeClass('fa-volume-off').addClass('fa-volume-down');
			// Cookies.set('volume', .5);
		} else 
		if(myIcon.hasClass('fa-volume-down')) {
			$(mainAudio).prop("volume", 1);
			VOLUME = 1;
			myIcon.removeClass('fa-volume-down').addClass('fa-volume-up');
			// Cookies.set('volume', 1);
		}
	});
	*/

	var mainAudio = '.main-player__audio',
	loadingIndicator = '.main-player__playbar--loading',
	progressIndicator = '.main-player__playbar--progress',
	mainAudioPlayer = $(mainAudio).get(0);

		/*var promise = mainAudioPlayer.play();

		if (promise !== undefined) {

		}*/

		if (($(mainAudio).buffered != undefined) && ($(mainAudio).buffered.length != 0)) {
			mainAudioPlayer.bind('progress', function() {
				var loaded = parseInt((($(mainAudio).buffered.end(0) / $(mainAudio).duration) * 100), 10);
				$(loadingIndicator).css({width: loaded + '%'});
			});
		} else {
			$(loadingIndicator).css({width: '100%'});
		}
		var pos = 0;
		var countedMe = false;
		$(mainAudioPlayer).on("loadeddata", function() {
			console.log('loaded');
			audioFunctions();
		});
		function audioFunctions() {
			$(mainAudioPlayer).bind('timeupdate',function() {
		// console.log(mainAudioPlayer.currentTime);
		// AUDIO_PLAYING = true;
		// NowPlaying.isPlaying = true
		var rem = parseInt(mainAudioPlayer.duration - mainAudioPlayer.currentTime, 10),
		mins = Math.floor(rem/60,10),
		secs = rem - mins*60; 
		pos = (mainAudioPlayer.currentTime / mainAudioPlayer.duration) * 100;
		$(progressIndicator).css({width: pos + '%'});

		var minutesElapsed = parseInt(mainAudioPlayer.currentTime / 60, 10);
		minutesElapsed = (minutesElapsed < 10 ? "0" : "") + minutesElapsed;

		var secondsElapsed = parseInt(mainAudioPlayer.currentTime % 60, 10);
		secondsElapsed = (secondsElapsed < 10 ? "0" : "") + secondsElapsed;

		var minutesTotal = parseInt(mainAudioPlayer.duration / 60, 10);
		minutesTotal = (minutesTotal < 10 ? "0" : "") + minutesTotal;

		var secondsTotal = parseInt(mainAudioPlayer.duration % 60, 10);
		secondsTotal = (secondsTotal < 10 ? "0" : "") + secondsTotal;

		if($.isNumeric(mainAudioPlayer.duration)) {
			$('.main-player__current-time').text(minutesElapsed+':'+secondsElapsed);
			$('.main-player__total-time').text(minutesTotal+':'+secondsTotal);
		}
		$(progressIndicator).css({width: pos + '%'});
		// Update for all iterations on page.
		if(!countedMe && pos >= 50) {
			countedMe = true;
			var myHref = '/play/'+NowPlaying.currentPostId;
			$.get(myHref,function(n) {
				$('.post[data-song-id="'+NowPlaying.currentPostId+'"').find('.play-count').text(n);
			});
		}
	});
	// Update for all iterations on page
	$(mainAudioPlayer).bind('ended',function() {
		mainAudioPlayer.currentTime = 0;
		$('.post[data-song-id="'+NowPlaying.currentPostId+'"')
		.removeClass('is-playing');
		$('.play-pause-btn i')
		.removeClass('fa-pause')
		.addClass('fa-play');

		countedMe = false;
		NowPlaying.isPlaying = false;
		if(playlist.songs.length) {
			var myIndex = playlist.songs.findIndex(x => x.id === NowPlaying.currentPostId);
			var nextIndex = playlist.songs[myIndex+1].id;
			if(nextIndex) {
				$.get('/next/'+nextIndex,function(data) {
					console.log(data);
					nextSong(data);
				});
			}
		}
	});
}
function nextSong(s) {
	var mainAudio = '.main-player__audio';
	$(mainAudio).attr('src','/storage/uploads/mp3s/'+s.filename);
	$(mainAudio).get(0).load();
	var promise = $(mainAudio).get(0).play();
	if (promise) {
		promise.catch(function(error) { console.error(error); });
	}
	NowPlaying.isPlaying = true;
	$('.main-player__title').html('<b><a href="/'+s.user.username+'">'+s.user.name+'</b><br/><a href="/'+s.user.username+'/'+s.slug+'">'+s.title+'</a>');
	$('.main-player__image img').attr('src','/storage/uploads/avatars/'+s.user.avatar);
	$('.main-player__prompt').attr('href','/prompts/'+s.prompt.slug);
	$('.main-player__prompt-name').text(s.prompt.title);
	$('.play-pause-btn i').removeClass('fa-pause').addClass('fa-play');
	$('.main-player__transport .play-pause-btn i').removeClass('fa-play').addClass('fa-pause');
	NowPlaying.currentPostId = s.id;
	$('.main-player').attr('data-song-id',s.id);
	console.log(NowPlaying.currentPostId);
	var iLike = s.likes.findIndex(x => x.id === currentUser);
	(iLike > -1) ? $('.main-player__like').addClass('liked') : $('.main-player__like').removeClass('liked');

		// console.log(myIndex);
		// if(s.likes)
		
		$('.post[data-song-id="'+NowPlaying.currentPostId+'"').find('.play-pause-btn i').removeClass('.fa-play').addClass('fa-pause');
		$('.post[data-song-id="'+NowPlaying.currentPostId+'"').find('.bars').fadeIn();
	}
	

	$(document).on('click','.main-player .play-pause-btn',function(e) {
		e.preventDefault();
		var $this = $(this),
		btn = $this.find('i');
		songId = $('.main-player').attr('data-song-id');

		if(NowPlaying.isPlaying) {
			$('.main-player__audio').get(0).pause();
			btn.removeClass('fa-pause').addClass('fa-play');
			NowPlaying.isPlaying = false;
		} else {
			var promise = $('.main-player__audio').get(0).play();
			// var promise = $(mainAudio).get(0).play();
			if (promise) {
				promise.catch(function(error) { console.error(error); });
			}
			btn.removeClass('fa-play').addClass('fa-pause');
			NowPlaying.isPlaying = true;
		}
		pausePlayAllInstances(songId);
		console.log(NowPlaying.isPlaying);
	});
	$(document).on('click','.main-player__like',function(e) {
		e.preventDefault();
		var $this = $(this),
		n = NowPlaying.currentPostId,
		posts = $('.post[data-song-id="'+n+'"]');
		$(this).attr('href','/post/like/'+n);

		getLike(n);
	});

	function pausePlayAllInstances(n) {
		console.log(n);
		var posts = $('.post[data-song-id="'+n+'"]');
		console.log(posts.length, NowPlaying.isPlaying, NowPlaying.currentPostId);

		if(NowPlaying.isPlaying && NowPlaying.currentPostId == n) {
			posts.addClass('is-playing')
			.find('.play-pause-btn i').removeClass('fa-play').addClass('fa-pause');
		} else {
			posts.removeClass('is-playing')
			.find('.play-pause-btn i').removeClass('fa-pause').addClass('fa-play');
		}
		
	}

	function getLike(l) {
		$.get('/post/like/'+l,function(r)  {
			var posts = $('.post[data-song-id="'+l+'"]');
			if(r.success == true) {
				posts.find('.like').addClass('liked');
				if(NowPlaying.currentPostId == l) {
					$('.main-player__like').addClass('liked');
				}
			} else {
				posts.find('.like').removeClass('liked');
				if(NowPlaying.currentPostId == l) {
					$('.main-player__like').removeClass('liked');
				}
			}
			// r.success ?  : 
			posts.find('.like-count').text(r.total_likes);
			
		});
	}

	$(document).on('click','.post .like',function(e) {
		e.preventDefault();
		var $this = $(this),
		postID = $(this).data('song-id');

		getLike(postID);
	});
	$(document).on('change','.ajax-active input',function(e) {
		e.preventDefault();
		var $this = $(this),
		form = $this.closest('form');
		// $(this).closest('form').submit();
		$.ajax({
			url: form.attr('action'),
			type: 'post',
			data: form.serialize(),
			dataType: 'json',
			success: function(r) {
				console.log('success!');
			},
			error: function(e) {
				console.log('boo hissss!');
			}
		});
	});
	$(document).on('submit','.suggestion-form',function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.find('.btn .spinner').fadeIn();
		$this.find('.btn').attr('disabled',true);
		$.ajax({
			url: $this.attr('action'),
			type: 'post',
			data: $this.serialize(),
			success: function (r) {
				$.get('/suggestion',function() {
					$('#main-content').html($(r).find('#main-content').html());
				});
			},
			error: function(e) {
				console.log(e);
			}
		});
	});
	function showPick(n,all,picks) {
		var time = 50;
		var div = (n === 1) ? '.results-1' : '.results-2';
		var firstPick = picks[0].title;
		var secondPick = picks[1].title;
		$.each(all,function(i,v) {
			setTimeout( function(){ 
				$(div).text(v.title);
			}, time*i);
		});
		
		if(n===1) {
			setTimeout(function() {
				$(div).text(firstPick);
				showPick(2,all,picks);
			}, time*all.length);
		} else {
			setTimeout(function() {
				$(div).text(secondPick);
				// showPick(2,all,picks);
			}, time*all.length);
		}
	}
	$(document).on('click','.hat-draw',function(e) {
		e.preventDefault();
		$.get('/suggestions/pick',function(data) {
			var all = data.all,
			picks = data.picks;
			var newAll = $.merge( all, all );

			showPick(1,newAll,picks);
			
		});
	});
	$(document).on('submit','.comment-form',function(e) {
		e.preventDefault();
	// $('.comment-form').submit(function(e) {
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
				$this.find('input[name="comment"]').val('');
				var commentCount = parseInt($this.closest('.post_player').find('.comment-count').text()) + 1;
				$this.closest('.post_player').find('.comment-count').text(commentCount);
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


	

	$(document).on('change keyup keydown paste cut','textarea',function() {
		$(this).height(0).height(this.scrollHeight);
	});

 	// console.log($('.sidebar__inner').data('sticky'));
 	if($('.sidebar__inner').data('sticky') === true && isMobile() === false ) {
 		console.log('sticky sidebar');
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
 	$('.top-search-wrapper').mouseleave(function() {
 		var $this = $(this),
 		tsr = '#top-search-results';

 		$(tsr).fadeOut('fast',function() {
 			$(tsr).empty();
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

 	var siteURL = "http://" + top.location.host.toString();
 	var $internalLinks = $("a[href^='"+siteURL+"'], a[href^='/'], a[href^='./'], a[href^='../']");
	// $("a[href^=something]").not("[href=#]")

	$(document).on('click','a:not(.no-link)',function(e) {
		var $this = $(this),
		myHref = $this.attr('href'),
		mainContent = '#main-content';

		if(myHref != '#') {
			e.preventDefault();		
			$.get(myHref,function(data) {
				$(mainContent).empty();
				var newHtml = $(data).find(mainContent).html();
				$(mainContent).html(newHtml);
				// document.getElementById("content").innerHTML = response.html;
				// document.title = $(data).pageTitle;
				// console.log($(data).find('title').text());
				window.history.pushState({"html":newHtml,"pageTitle":''},"", myHref);

				window.scrollTo(0, 0);
				fadeInElements();
				if(NowPlaying.isPlaying) {
					pausePlayAllInstances(NowPlaying.currentPostId);
				}
			});
		}
	});

	$('.footer-signup').submit(function(e) {
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
			error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
			success: function (data) {
				$this.find('.btn').text('submit');
				if (data.result === 'success') {
					console.log(data.msg)
					$('#mce-EMAIL').removeClass('error');
					$('#mce-responses').text('Thank you for subscribing. We have sent you a confirmation email.').addClass('alert-success');
					$('#mce-EMAIL').val('')
				} else {
					console.log(data.msg)
					// $('#mce-EMAIL').css('borderColor', '#721c24')
					$('#mce-EMAIL').addClass('error');
					$('#mce-responses').text(data.msg.substring(4)).addClass('alert-danger');
				}
			}
		})
	});	

	/* Volume Slider */
	var dragItem = $('.volume__sliderHandle');
	var dragContainer = $('.volume__sliderInner');
	var e = document.querySelector('.volume-slider-con');
	var eInner = document.querySelector('.volume-slider');
	var audio = $('.main-player__audio').get(0);
	var drag = false;
	dragItem.on('mousedown',function(ev){
		drag = true;
		updateBar(ev.clientY);
	});
	dragItem.on('mousemove',function(ev){
		if(drag){
			updateBar(ev.clientY);
		}
	});
	dragItem.on('mouseup',function(ev){
		drag = false;
	});
	var updateBar = function (y, vol) {
		var volume = dragItem;
		var percentage;
        //if only volume have specificed
        //then direct update volume
        console.log('boo');
        if (vol) {
        	percentage = vol * 100;
        } else {
        	var position = y + volume.offset().top;
        	percentage = 100 * position / volume.height();
        }
        console.log(percentage);

        if (percentage > 100) {
        	percentage = 100;
        }
        if (percentage < 0) {
        	percentage = 0;
        }

        //update volume bar and video volume
        // eInner.style.width = percentage +'%';
        $('.volume__sliderProgress').css('height', percentage +'%');
        // audio.volume = percentage / 100;
    };
    

});

function fadeInElements() {
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
}

window.onpopstate = function(e){
	if(e.state){
		document.getElementById("main-content").innerHTML = e.state.html;
		document.title = e.state.pageTitle;
		fadeInElements();
	}
};



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