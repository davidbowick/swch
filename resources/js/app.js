/*
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// require('./jquery.form.min.js');

require('./sticky-sidebar.min.js');
require('./cookies.min.js');
require('./pusher.min.js');
// require('./bootstrap.js');


function isMobile() {
	var win = window.matchMedia("(max-width: 768px)");
	if(win.matches) {
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

var AUDIO_PLAYING = false,
CURRENT_SONG = false,
SOMETHING = true,
USE_PLAYLIST = false,
MAIN_CONTENT = '#main-content';


$(function() {
	fadeInElements();
	stickySidebar();

	/* Show lyrics on click */
	$(document).on('click','.show-lyrics',function(e) {
		e.preventDefault();
		var lyricsDiv = $(this).closest('.post').find('.post__lyrics');
		/*var prompt = $(this).closest('.post').data('prompt-title');
		var lyricsString = lyricsDiv.text();
		var reg = new RegExp(prompt,'ig');
		lyricsString.replace(reg,"<b>$1</b>");*/
		lyricsDiv.slideToggle();
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
	$(document).on('click', '.play-all',function(e) {
		e.preventDefault();
		USE_PLAYLIST = true;
		$('.post').eq(0).find('.play-pause-btn').eq(0).trigger('click');
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
			if($('.post.is-playing').length) {
				$('.post.is-playing').eq(0).find('.play-pause-btn').eq(0).trigger('click');
				$('.post[data-song-id="'+NowPlaying.currentPostId+'"').removeClass('is-playing');
				$('.post[data-song-id="'+$songId+'"').addClass('is-playing').find('.play-pause-btn i').removeClass('fa-play').addClass('fa-pause');

			}
			// $this.find('.play-pau')
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
			liked ? $('.main-player__like').addClass('liked') : $('.main-player__like').removeClass('liked') ;
		}
		
		setTimeout(function() {
			$('.main-player .play-pause-btn').trigger('click');
		},250);

		$btn.attr('class', $item.hasClass('is-playing') ? 'fa fa-pause' : 'fa fa-play');
		$mainBtn.attr('class', $item.hasClass('is-playing') ? 'fa fa-pause' : 'fa fa-play');

	});


	var mainAudio = '.main-player__audio',
	loadingIndicator = '.main-player__playbar--loading',
	progressIndicator = '.main-player__playbar--progress',
	mainAudioPlayer = $(mainAudio).get(0);

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
		audioFunctions();
	});
	function audioFunctions() {
		$(mainAudioPlayer).bind('timeupdate',function() {

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
		if(USE_PLAYLIST) {
			var myIndex = playlist.songs.findIndex(x => x.id === NowPlaying.currentPostId);
			// console.log(playlist.songs.length,(myIndex+1));
			if(playlist.songs.length > (myIndex+1) && USE_PLAYLIST) {
				var nextIndex = playlist.songs[myIndex+1].id;
				if(nextIndex) {
					$.get('/next/'+nextIndex,function(data) {
						nextSong(data);
					});
				}
			} else {
				//hidePlayer();
				USE_PLAYLIST = false;
				$('.post .bars').fadeOut();
			}
		}
	});
}
function hidePlayer() {
	$('.main-player').fadeOut();
}
function nextSong(s) {
	var mainAudio = '.main-player__audio';
	$(mainAudio).attr('src','/storage/uploads/mp3s/'+s.filename);
	$(mainAudio).get(0).load();
	var promise = $(mainAudio).get(0).play();
	if (promise !== undefined) {
		promise.then(function() {
			$('.post[data-song-id="'+NowPlaying.currentPostId+'"').find('.bars').fadeOut();
			NowPlaying.isPlaying = true;
			$('.main-player__title').html('<b><a href="/'+s.user.username+'">'+s.user.name+'</b><br/><a href="/'+s.user.username+'/'+s.slug+'">'+s.title+'</a>');
			$('.main-player__image img').attr('src','/storage/uploads/avatars/'+s.user.avatar);
			$('.main-player__prompt').attr('href','/prompts/'+s.prompt.slug);
			$('.main-player__prompt-name').text(s.prompt.title);
			$('.play-pause-btn i').removeClass('fa-pause').addClass('fa-play');
			$('.main-player__transport .play-pause-btn i').removeClass('fa-play').addClass('fa-pause');
			NowPlaying.currentPostId = s.id;
			$('.main-player').attr('data-song-id',s.id);
			// console.log(NowPlaying.currentPostId);
			var iLike = s.likes.findIndex(x => x.id === currentUser);
			(iLike > -1) ? $('.main-player__like').addClass('liked') : $('.main-player__like').removeClass('liked');

			$('.post[data-song-id="'+NowPlaying.currentPostId+'"').find('.play-pause-btn i').removeClass('.fa-play').addClass('fa-pause');
			$('.post[data-song-id="'+NowPlaying.currentPostId+'"').find('.bars').fadeIn();
		})
		.catch(function(error) { 
			// console.error(error); 
		});
	}
	
}

function togglePlayPause(songId) {
	var el = $('.post[data-song-id="'+songId+'"] .play-pause-btn i');
	if(el.hasClass('fa-play')) {
		el.removeClass('fa-play').addClass('fa-pause');
	} else {
		el.removeClass('fa-pause').addClass('fa-play');
	}
	if(el.closest('.post').length) {
		el.closest('.post').find('.bars').fadeOut();
	}
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
		pausePlayAllInstances(songId);
		// $().removeClass('fa-pause').addClass('fa-play');
	} else {
		var promise = $('.main-player__audio').get(0).play();
			// var promise = $(mainAudio).get(0).play();
			if (promise !== undefined) {
				promise.then(function() {
					// console.error(error); 
					btn.removeClass('fa-play').addClass('fa-pause');
					NowPlaying.isPlaying = true;
					pausePlayAllInstances(songId);
				})
				.catch(function(error) { 
					console.log(error);
				});
			}
		}
		// console.log(NowPlaying.isPlaying);
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
	// console.log(n);
	var posts = $('.post[data-song-id="'+n+'"]');
	// console.log(posts.length, NowPlaying.isPlaying, NowPlaying.currentPostId);
	if(NowPlaying.isPlaying && NowPlaying.currentPostId == n) {
		posts.addClass('is-playing')
		.find('.play-pause-btn i').removeClass('fa-play').addClass('fa-pause');
		posts.find('.bars').fadeIn();
	} else {
		posts.removeClass('is-playing')
		.find('.play-pause-btn i').removeClass('fa-pause').addClass('fa-play');
		posts.find('.bars').fadeOut();
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
				// console.log('success!');
			},
			error: function(e) {
				// console.log('boo hissss!');
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
			$.get('/suggestions',function() {
				$('#main-content').html($(r).find('#main-content').html());
			});
		},
		error: function(e) {
			// console.log(e);
		}
	});
});
function showPick(n,all,picks) {
	var time = 50;
	var div = (n === 1) ? '.results-1' : '.results-2';

	var pick = picks[0].title;
	var secondPick = picks[1].title;
	$.each(all,function(i,v) {
		setTimeout( function(){ 
			$(div).text(v.title);
		}, time*i);
	});
	setTimeout(function() {
		$(div).text(pick);
	}, time*all.length);

	/*
	if(n===1) {
		setTimeout(function() {
			$(div).text(firstPick);
			//showPick(2,all,picks);
		}, time*all.length);
	} else {
		setTimeout(function() {
			$(div).text(secondPick);
				// showPick(2,all,picks);
			}, time*all.length);
	}
	*/
}
$(document).on('click','.hat-draw',function(e) {
	e.preventDefault();
	var $this = $(this);
	var n = parseInt($this.attr('data-pick-number'));
	console.log(n);
	$.get('/suggestions/pick',function(data) {
		var all = data.all,
		picks = data.picks;
		var newAll = $.merge( all, all );
		showPick(n,newAll,picks);
		$this.attr('data-pick-number','2');
	});
	
});
$(document).on('submit','.comment-form',function(e) {
	e.preventDefault();
	// $('.comment-form').submit(function(e) {
		var $this = $(this);
		var myComments = $this.closest('.post__comments').find('.post__comments--inner');
		$.ajax({
			url: $this.attr('action'),
			type: 'post',
			data: $this.serialize(),
			dataType: 'json',
			success: function (r) {
				// console.log(r);
				var newComment = '<div class="post__comment anim-in come-in flex flex--align-center"><div class="post__comment--user"><a href="'+r.user.username+'"><img src="/storage/uploads/avatars/'+r.user.avatar+'" width="20" /></a></div><div class="post__comment--text">'+r.comment+'</div></div>';
				$(newComment).appendTo(myComments);
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
		// console.log(r);
		if(r.success) {
			$this.addClass('liked');
			$this.find('.icon i').attr('class','fa fa-thumbs-up');
			$this.find('.button-text').text('I\'ll Be There!');
		} else {
			$this.removeClass('liked');	
			$this.find('.icon i').attr('class','fa fa-question');
			$this.find('.button-text').text('Be There?');
		}

		var totalText = (r.total_likes === 1) ? ' user attending' : ' users attending';
		$('.total-attendees').text(r.total_likes + totalText);
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

function stickySidebar() {
	if($('.sidebar__inner').data('sticky') === true && isMobile() == false ) {
		// console.log('sticky sidebar');
		var sidebar = new StickySidebar('.sidebar', {
			containerSelector: '#page-content',
			innerWrapperSelector: '.sidebar__inner',
			topSpacing: 50,
			bottomSpacing: 50
		});
	}
}

var resizeTimer;
$(window).on('resize',function(e) {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
		stickySidebar();
	}, 250);
});



var MIN_LENGTH = 3;
var CURRENT_QUERY = '';
$("#ts").keyup(debounce(function(){
	var keyword = $("#ts").val(),
	tsr = '#top-search-results__inner';
	if (keyword.length >= MIN_LENGTH && CURRENT_QUERY != keyword) {
		CURRENT_QUERY = keyword;
		$.get( "/search", { q: keyword } )
		.done(function( data ) {
			// console.log(data);
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
 			$(tsr).parent().fadeIn();
 			});
	}
},500));
$('.main-nav__user-links').mouseleave(function() {
	var $this = $(this),
	tsr = '#top-search-results__inner';
	$(tsr).parent().fadeOut('fast',function() {
		// $(tsr).empty();
	}); 

	$('.main-nav__notifications').removeClass('hover');
});
$('#main-header').mouseleave(function() {
	$('#top-search').removeClass('show');
	$('#ts').val('');
	$('.main-nav__search-link').fadeIn();
});


$(document).on('click','.main-nav__search-link',function(e) {
	e.preventDefault();
	if(isMobile()) {
		$('.top-search-wrapper').slideToggle('fast');
	} else {
		$(this).hide();
		$('#top-search').addClass('show');
	}
	$('#ts').focus();
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


$(document).on('click','a:not(.no-link)',function(e) {	
	var $this = $(this),
	myHref = $this.attr('href'),
	mainContent = '#main-content';
	if(isMobile() && $this.hasClass('main-nav__user-link')) {
		return false;
	}
	

	if(myHref == window.location.pathname) {
		return false;
	}
	if(myHref != '#') {
		e.preventDefault();
		var time = 0;
		var timer = setInterval(function() {
			if(time == 250) {
				$('.main-preloader').fadeIn('fast');
			} else {
				time++;
			}
		});
		$(mainContent).fadeTo('fast',0,function() {
			$.get(myHref,function(data) {
				// $(mainContent).empty();
				var newHtml = $(data).find(mainContent).html();
				$('.main-nav__notifications').html($(data).find('.main-nav__notifications').html());
				$(mainContent).html(newHtml);
				window.history.pushState({"html":newHtml,"pageTitle":''},"", myHref);
				window.scrollTo(0, 0);
				clearInterval(timer);
				$('.main-preloader').stop().fadeOut('fast');
				fadeInElements();
				$('img').one('load',function() {
					stickySidebar();
					$(window).resize();
				}).each(function() {
					if(this.complete) {
						$(this).trigger('load');
					}
				});
				$(mainContent).fadeTo('fast',1);
				if(NowPlaying.isPlaying) {
					pausePlayAllInstances(NowPlaying.currentPostId);
				}
			});
		});
	}
});

if(isMobile()) {
	var userDropWrap = '.user-drop-wrap';
	$(document).on('click','.main-nav__user-link',function(e) {
		e.preventDefault();
		$(userDropWrap).toggleClass('show');
	});
	$(document).on('click','.user-drop a',function(e) {
		$(userDropWrap).toggleClass('show');
	});
	$(document).on('touchend', function (e) {
		if ($(e.target).closest(userDropWrap).length === 0) {
			$(userDropWrap).removeClass('show');
		}
	});
}

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
				// console.log(data.msg)
				$('#mce-EMAIL').removeClass('error');
				$('#mce-responses').text('Thank you for subscribing. We have sent you a confirmation email.').addClass('alert-success');
				$('#mce-EMAIL').val('')
			} else {
				// console.log(data.msg)
					// $('#mce-EMAIL').css('borderColor', '#721c24')
					$('#mce-EMAIL').addClass('error');
					$('#mce-responses').text(data.msg.substring(4)).addClass('alert-danger');
				}
			}
		});
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
        if (vol) {
        	percentage = vol * 100;
        } else {
        	var position = y + volume.offset().top;
        	percentage = 100 * position / volume.height();
        }
        if (percentage > 100) {
        	percentage = 100;
        }
        if (percentage < 0) {
        	percentage = 0;
        }
        $('.volume__sliderProgress').css('height', percentage +'%');
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

var progressText = '.progress-text',
progressBar = '.progress-bar',
successText = '#success';

$(function() {
	console.log('on load');
	$('#post-form').submit(function(e){
		console.log('#post-form.submit');
		var val = $("#filename").val();
		if(val != ''){
			e.preventDefault();
			$('#post-form').ajaxForm({
				beforeSend:function() {
					$(successText).empty();
				},
				uploadProgress: function(event,position,total,percentComplete) {
					$(progressText).text(percentComplete + '%');
					$(progressBar).css('width',percentComplete + '%');
				},
				success:function(data) {
					if(data.errors) {
						$(progressText).text('0%');
						$(progressBar).css('width','0%');
						$(successText).html('<div class="alert alert-danger">'+data.errors+'</div>');
					}
					if(data.success) {
						$(successText).html('<div class="alert alert-success">Great success!</div>');
						window.location.href = $(this).closest('form').data('return-url');
					}
				}
			});
		}
	});
});

$(document).on('click','#main-content .mark-as-read',function(e) {
	e.preventDefault();
	$('#main-content').fadeTo('fast',0);
	$.get('/notifications/all-read',function() {
		$.get('/notifications',function(data) {
			var newHtml = $(data).find('#main-content').html();
			$('.main-nav__notifications').html($(data).find('.main-nav__notifications').html());
			$('.main-nav__notifications').removeClass('hoverable');
			$('#main-content').html(newHtml).fadeTo('fast',1);;
		});
	});
});
$(document).on('click','.main-nav__notifications .mark-as-read',function(e) {
	e.preventDefault();
	$.get('/notifications/all-read',function() {
		$('.main-nav__notifications').removeClass('hoverable')
		.find('.has-notifications').removeClass('show').text(0);		
		$('.main-nav__notification-list').empty();
	});
});

$(document).on('click','.mark-single--as-read',function(e) {
	e.preventDefault();
	var $this = $(this);
	$.get($this.attr('href'),function(data) {
		if (window.location.href.indexOf("/notifications") > -1) {
			$(MAIN_CONTENT).html($(data).find(MAIN_CONTENT).html());
		}
		$('.main-nav__notifications--wrapper').html($(data).find('.main-nav__notifications--wrapper').html());
		var n = parseInt($('.has-notifications').text());
		if($this.parent().hasClass('main-nav__notification') && n > 0) {
			$('.main-nav__notifications').addClass('hover');
		}

	});
});


 $(document).on('click','.delete-suggestion',function(e) {
 	e.preventDefault();
 	var path = $(this).attr('href');
 	$.get(path,function(d) {	
 		$.get('/suggestions',function(data) {
 			$('#main-content').html($(data).find('#main-content').html());	
 		});
 	});
 	return false;

 });

 // Enable pusher logging - don't include this in production

 import Echo from "laravel-echo"

// window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '55b25b761e2e34f0d87f',
    cluster: 'us3',
    forceTLS: true
});

var channel = window.Echo.channel('notifications');
channel.listen('post-liked',function(data) {
	// alert(JSON.stringify(data));
	// console.log(data);
});

 Pusher.logToConsole = false;

 var pusher = new Pusher('55b25b761e2e34f0d87f', {
 	cluster: 'us3',
 	forceTLS: true
 });

 var channel = pusher.subscribe('notifications.'+currentUser);
 channel.bind('post-liked', function(data) {
 	var notificationsCount = '.main-nav__notifications .has-notifications',
 		notificationsList = '.main-nav__notification-list',
 		bell = '.main-nav__notifications-link .fa-bell',
 		bellRingTime = 4000;
 	$(bell).addClass('ring');
 	$('.has-notifications').addClass('show');
 	$('.main-nav__notifications').addClass('hoverable');
 	setTimeout(function() {
 		$(bell).removeClass('ring');
 	}, bellRingTime);
 	$(notificationsCount).text(parseInt($(notificationsCount).text()) + 1);	
 	var newNotification = $('<div class="main-nav__notification">'+data.message+'</div>').prependTo($(notificationsList));
 });


