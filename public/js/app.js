!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(5)},function(e,t,n){function i(){return!!window.matchMedia("(max-width: 768px)").matches}function a(e,t,n){var i;return function(){var a=this,o=arguments,s=function(){i=null,n||e.apply(a,o)},r=n&&!i;clearTimeout(i),i=setTimeout(s,t),r&&e.apply(a,o)}}n(2),n(4),$.easing.custom=function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t+n:-i/2*(--t*(t-2)-1)+n},$.fn.highlight=function(e,t){return this.each(function(){var n=this.innerHTML,i=new RegExp("(>[^<.]*)("+e+")([^<.]*)","g"),a="$1<span "+(t?'class="'+t+'"':"")+'">$2</span>$3',o=n.replace(i,a);this.innerHTML=o})},$.fn.visible=function(e){var t=$(this),n=$(window),i=n.scrollTop(),a=i+n.height(),o=t.offset().top,s=o+t.height();return(!0===e?o:s)<=a&&(!0===e?s:o)>=i};var o={isPlaying:!1,currentPostId:!1,currentUserId:!1,currentUserName:!1,currentUserImage:!1},s=!1;function r(){var e=$(window),t=$(".anim-in");t.each(function(e,t){if((t=$(t)).visible(!0)){var n=e/10;t.delay(n).addClass("already-visible")}}),e.scroll(function(e){t.each(function(e,t){if((t=$(t)).visible(!0)){var n=e/10;t.delay(n).addClass("come-in")}})})}$(function(){r(),d(),$(document).on("click",".show-lyrics",function(e){e.preventDefault(),$(this).closest(".post").find(".post__lyrics").slideToggle()}),$(document).on("click",".post__comment-link",function(e){e.preventDefault(),$(this).closest(".post").find(".post__comments").slideToggle("fast",function(){$(this).is(":visible")&&$(this).find('input[name="comment"]').focus()})}),$(document).on("click",".play-all",function(e){e.preventDefault(),s=!0,$(".post").eq(0).find(".play-pause-btn").eq(0).trigger("click")}),$(document).on("click",".post .play-pause-btn",function(e){e.preventDefault();var t=$(this).closest(".post"),n=$(".main-player"),i=t.data("song-id");if($btn=t.find(".play-pause-btn i"),$mainBtn=n.find(".play-pause-btn i"),$thebtn=$btn.parent(),$loadingIndicator=n.find(".main-player__playbar--loading"),$progress=n.find(".main-player__playbar--progress"),$seek=t.find(".seek"),$mainProgress=".main-player__playbar--progress",mainTitle=".main-player__title",sID=t.parent().parent().data("song-id"),prompt=t.data("prompt-title"),promptSlug=t.data("prompt-slug"),userLink=t.find(".post_artist").html(),postLink=t.find(".share").attr("href"),liked=t.find(".like").hasClass("liked"),n.attr("data-song-id",i),o.currentPostId!=i){$(".post.is-playing").length&&($(".post.is-playing").eq(0).find(".play-pause-btn").eq(0).trigger("click"),$('.post[data-song-id="'+o.currentPostId+'"').removeClass("is-playing"),$('.post[data-song-id="'+i+'"').addClass("is-playing").find(".play-pause-btn i").removeClass("fa-play").addClass("fa-pause")),$(".main-player__image").empty();var a='<b><a href="'+postLink+'">"'+t.data("title")+'"</a></b><br/>'+userLink;$(mainTitle).html(a);t.find(".post__cover img").clone().appendTo(".main-player__image");n.fadeIn(),$(".main-player__audio").attr("src",t.data("audio")),o.currentPostId=i,o.currentPrompt=prompt,$(".main-player__prompt-name").text(prompt),$(".main-player__prompt ").attr("href","/prompts/"+promptSlug),liked?$(".main-player__like").addClass("liked"):$(".main-player__like").removeClass("liked")}setTimeout(function(){$(".main-player .play-pause-btn").trigger("click")},250),$btn.attr("class",t.hasClass("is-playing")?"fa fa-pause":"fa fa-play"),$mainBtn.attr("class",t.hasClass("is-playing")?"fa fa-pause":"fa fa-play")});var e=".main-player__audio",t=".main-player__playbar--progress",n=$(e).get(0);null!=$(e).buffered&&0!=$(e).buffered.length?n.bind("progress",function(){var t=parseInt($(e).buffered.end(0)/$(e).duration*100,10);$(".main-player__playbar--loading").css({width:t+"%"})}):$(".main-player__playbar--loading").css({width:"100%"});var c=0,l=!1;function p(e){var t=$('.post[data-song-id="'+e+'"]');o.isPlaying&&o.currentPostId==e?t.addClass("is-playing").find(".play-pause-btn i").removeClass("fa-play").addClass("fa-pause"):t.removeClass("is-playing").find(".play-pause-btn i").removeClass("fa-pause").addClass("fa-play")}function u(e){$.get("/post/like/"+e,function(t){var n=$('.post[data-song-id="'+e+'"]');1==t.success?(n.find(".like").addClass("liked"),o.currentPostId==e&&$(".main-player__like").addClass("liked")):(n.find(".like").removeClass("liked"),o.currentPostId==e&&$(".main-player__like").removeClass("liked")),n.find(".like-count").text(t.total_likes)})}function d(){if(!0===$(".sidebar__inner").data("sticky")&&0==i())new StickySidebar(".sidebar",{containerSelector:"#page-content",innerWrapperSelector:".sidebar__inner",topSpacing:50,bottomSpacing:50})}$(n).on("loadeddata",function(){$(n).bind("timeupdate",function(){var e=parseInt(n.duration-n.currentTime,10);Math.floor(e/60,10),c=n.currentTime/n.duration*100,$(t).css({width:c+"%"});var i=parseInt(n.currentTime/60,10);i=(i<10?"0":"")+i;var a=parseInt(n.currentTime%60,10);a=(a<10?"0":"")+a;var s=parseInt(n.duration/60,10);s=(s<10?"0":"")+s;var r=parseInt(n.duration%60,10);if(r=(r<10?"0":"")+r,$.isNumeric(n.duration)&&($(".main-player__current-time").text(i+":"+a),$(".main-player__total-time").text(s+":"+r)),$(t).css({width:c+"%"}),!l&&c>=50){l=!0;var p="/play/"+o.currentPostId;$.get(p,function(e){$('.post[data-song-id="'+o.currentPostId+'"').find(".play-count").text(e)})}}),$(n).bind("ended",function(){if(n.currentTime=0,$('.post[data-song-id="'+o.currentPostId+'"').removeClass("is-playing"),$(".play-pause-btn i").removeClass("fa-pause").addClass("fa-play"),l=!1,o.isPlaying=!1,s){var e=playlist.songs.findIndex(function(e){return e.id===o.currentPostId});if(playlist.songs.length>e+1&&s){var t=playlist.songs[e+1].id;t&&$.get("/next/"+t,function(e){!function(e){var t=".main-player__audio";$(t).attr("src","/storage/uploads/mp3s/"+e.filename),$(t).get(0).load();var n=$(t).get(0).play();void 0!==n&&n.then(function(){$('.post[data-song-id="'+o.currentPostId+'"').find(".bars").fadeOut(),o.isPlaying=!0,$(".main-player__title").html('<b><a href="/'+e.user.username+'">'+e.user.name+'</b><br/><a href="/'+e.user.username+"/"+e.slug+'">'+e.title+"</a>"),$(".main-player__image img").attr("src","/storage/uploads/avatars/"+e.user.avatar),$(".main-player__prompt").attr("href","/prompts/"+e.prompt.slug),$(".main-player__prompt-name").text(e.prompt.title),$(".play-pause-btn i").removeClass("fa-pause").addClass("fa-play"),$(".main-player__transport .play-pause-btn i").removeClass("fa-play").addClass("fa-pause"),o.currentPostId=e.id,$(".main-player").attr("data-song-id",e.id);var t=e.likes.findIndex(function(e){return e.id===currentUser});t>-1?$(".main-player__like").addClass("liked"):$(".main-player__like").removeClass("liked"),$('.post[data-song-id="'+o.currentPostId+'"').find(".play-pause-btn i").removeClass(".fa-play").addClass("fa-pause"),$('.post[data-song-id="'+o.currentPostId+'"').find(".bars").fadeIn()}).catch(function(e){})}(e)})}else s=!1,$(".post .bars").fadeOut()}})}),$(document).on("click",".main-player .play-pause-btn",function(e){e.preventDefault();var t=$(this).find("i");if(songId=$(".main-player").attr("data-song-id"),o.isPlaying)$(".main-player__audio").get(0).pause(),t.removeClass("fa-pause").addClass("fa-play"),o.isPlaying=!1;else{var n=$(".main-player__audio").get(0).play();void 0!==n&&n.then(function(){t.removeClass("fa-play").addClass("fa-pause"),o.isPlaying=!0,p(songId)}).catch(function(e){console.log(e)})}}),$(document).on("click",".main-player__like",function(e){e.preventDefault();$(this);var t=o.currentPostId;$('.post[data-song-id="'+t+'"]');$(this).attr("href","/post/like/"+t),u(t)}),$(document).on("click",".post .like",function(e){e.preventDefault();$(this);u($(this).data("song-id"))}),$(document).on("change",".ajax-active input",function(e){e.preventDefault();var t=$(this).closest("form");$.ajax({url:t.attr("action"),type:"post",data:t.serialize(),dataType:"json",success:function(e){},error:function(e){}})}),$(document).on("submit",".suggestion-form",function(e){e.preventDefault();var t=$(this);t.find(".btn .spinner").fadeIn(),t.find(".btn").attr("disabled",!0),$.ajax({url:t.attr("action"),type:"post",data:t.serialize(),success:function(e){$.get("/suggestion",function(){$("#main-content").html($(e).find("#main-content").html())})},error:function(e){}})}),$(document).on("click",".hat-draw",function(e){e.preventDefault();var t=$(this),n=parseInt(t.attr("data-pick-number"));console.log(n),$.get("/suggestions/pick",function(e){var i=e.all,a=e.picks,o=$.merge(i,i);!function(e,t,n){var i=1===e?".results-1":".results-2",a=n[0].title;n[1].title,$.each(t,function(e,t){setTimeout(function(){$(i).text(t.title)},50*e)}),setTimeout(function(){$(i).text(a)},50*t.length)}(n,o,a),t.attr("data-pick-number","2")})}),$(document).on("submit",".comment-form",function(e){e.preventDefault();var t=$(this);return $.ajax({url:t.attr("action"),type:"post",data:t.serialize(),dataType:"json",success:function(e){var n='<div class="post__comment anim-in come-in flex flex--align-center"><div class="post__comment--user"><a href="'+e.user.username+'"><img src="/storage/uploads/avatars/'+e.user.avatar+'" width="20" /></a></div><div class="post__comment--text">'+e.comment+"</div></div>";$(n).insertBefore(".comment-form"),t.find('input[name="comment"]').val("");var i=parseInt(t.closest(".post_player").find(".comment-count").text())+1;t.closest(".post_player").find(".comment-count").text(i)}}),!1}),$(document).on("click",".im-going",function(e){e.preventDefault();var t=$(this),n=$(this).data("event-id");$.get("/showcase/like/"+n,function(e){e.success?(t.addClass("liked"),t.find(".icon i").attr("class","fa fa-thumbs-up"),t.find(".button-text").text("I'll Be There!")):(t.removeClass("liked"),t.find(".icon i").attr("class","fa fa-question"),t.find(".button-text").text("Be There?"));var n=1===e.total_likes?" user attending":" users attending";$(".total-attendees").text(e.total_likes+n)})}),$(document).on("click",".follow-btn",function(e){e.preventDefault();var t=$(this),n=t.attr("href");t[0];$.get(n,function(e){e.success?(t.addClass("liked").find(".like-text").text("Following"),setTimeout(function(){t.find("i").toggleClass("star-spin")},1e3)):(t.removeClass("liked").find(".like-text").text("Follow"),t.find("i").removeClass("star-spin")),t.next().text("Followers: "+e.total_likes)})}),$(document).on("change keyup keydown paste cut","textarea",function(){$(this).height(0).height(this.scrollHeight)});var f="";$("#ts").keyup(a(function(){var e=$("#ts").val(),t="#top-search-results";e.length>=3&&f!=e&&(f=e,$.get("/search",{q:e}).done(function(n){if($(t).empty(),n.users.length){$(t).append("<h4>Users</h4>");$(t).append('<ul class="tsr__users"></ul>'),$(n.users).each(function(t,n){if(t<5){var i='<li class="tsr__user"><a href="/'+n.username+'"><img src="/storage/uploads/avatars/'+n.avatar+'" width="20">'+n.name+"</a></li>";$(".tsr__users").append(i)}5==t&&$(".tsr__users").append('<li class="tsr__more"><a href="/search?q='+e+"</a></li>")})}$(t).fadeIn()}))},500)),$(".top-search-wrapper").mouseleave(function(){$(this);var e="#top-search-results";$(e).fadeOut("fast",function(){$(e).empty()})}),$("#registration-form #name").keyup(a(function(){var e=$(this).val();if(e.length>=3&&f!=e){f=e;var t=e.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").toLowerCase();$("#username").val(t)}},500));var m="http://"+top.location.host.toString();$("a[href^='"+m+"'], a[href^='/'], a[href^='./'], a[href^='../']");if($(document).on("click","a:not(.no-link)",function(e){var t=$(this),n=t.attr("href");return(!i()||!t.hasClass("main-nav__user-link"))&&(n!=window.location.pathname&&void("#"!=n&&(e.preventDefault(),$("#main-content").fadeTo("fast",0,function(){$.get(n,function(e){var t=$(e).find("#main-content").html();$("#main-content").html(t),window.history.pushState({html:t,pageTitle:""},"",n),window.scrollTo(0,0),r(),d(),$(window).resize(),$("#main-content").fadeTo("fast",1),o.isPlaying&&p(o.currentPostId)})}))))}),i()){$(document).on("click",".main-nav__user-link",function(e){e.preventDefault(),$(".user-drop-wrap").toggleClass("show")}),$(document).on("click",".user-drop a",function(e){$(".user-drop-wrap").toggleClass("show")}),$(document).on("touchend",function(e){0===$(e.target).closest(".user-drop-wrap").length&&$(".user-drop-wrap").removeClass("show")})}$(".footer-signup").submit(function(e){e.preventDefault();var t=$(this);t.find(".btn").text("Sending..."),$.ajax({type:t.attr("method"),url:t.attr("action"),data:t.serialize(),cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",error:function(e){alert("Could not connect to the registration server. Please try again later.")},success:function(e){t.find(".btn").text("submit"),"success"===e.result?($("#mce-EMAIL").removeClass("error"),$("#mce-responses").text("Thank you for subscribing. We have sent you a confirmation email.").addClass("alert-success"),$("#mce-EMAIL").val("")):($("#mce-EMAIL").addClass("error"),$("#mce-responses").text(e.msg.substring(4)).addClass("alert-danger"))}})});var h=$(".volume__sliderHandle"),g=($(".volume__sliderInner"),document.querySelector(".volume-slider-con"),document.querySelector(".volume-slider"),$(".main-player__audio").get(0),!1);h.on("mousedown",function(e){g=!0,v(e.clientY)}),h.on("mousemove",function(e){g&&v(e.clientY)}),h.on("mouseup",function(e){g=!1});var v=function(e,t){var n,i=h;t?n=100*t:n=100*(e+i.offset().top)/i.height();n>100&&(n=100),n<0&&(n=0),$(".volume__sliderProgress").css("height",n+"%")}}),window.onpopstate=function(e){e.state&&(document.getElementById("main-content").innerHTML=e.state.html,document.title=e.state.pageTitle,r())};$(function(){$("#post-form").ajaxForm({beforeSend:function(){$("#success").empty()},uploadProgress:function(e,t,n,i){$(".progress-text").text(i+"%"),$(".progress-bar").css("width",i+"%")},success:function(e){e.errors&&($(".progress-text").text("0%"),$(".progress-bar").css("width","0%"),$("#success").html('<div class="alert alert-danger">'+e.errors+"</div>")),e.success&&$("#success").html('<div class="alert alert-success">Great success!</div>')}})})},function(e,t,n){(function(n){var i,a,o;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(n,r){"object"==s(t)&&void 0!==e?r(t):(a=[t],void 0===(o="function"==typeof(i=r)?i.apply(t,a):i)||(e.exports=o))}(0,function(e){"use strict";"undefined"!=typeof window?window:void 0!==n||"undefined"!=typeof self&&self;var t,i,a=(function(e,t){!function(e){Object.defineProperty(e,"__esModule",{value:!0});var t,n,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=(t=".stickySidebar",n={topSpacing:0,bottomSpacing:0,containerSelector:!1,innerWrapperSelector:".inner-wrapper-sticky",stickyClass:"is-affixed",resizeSensor:!0,minWidth:!1},function(){function e(t){var i=this,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.options=e.extend(n,a),this.sidebar="string"==typeof t?document.querySelector(t):t,void 0===this.sidebar)throw new Error("There is no specific sidebar element.");this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._reStyle=!1,this._breakpoint=!1,this.dimensions={translateY:0,maxTranslateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["handleEvent"].forEach(function(e){i[e]=i[e].bind(i)}),this.initialize()}return i(e,[{key:"initialize",value:function(){var e=this;if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),null===this.sidebarInner&&(this.sidebarInner=!1)),!this.sidebarInner){var t=document.createElement("div");for(t.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(t);this.sidebar.firstChild!=t;)t.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}if(this.options.containerSelector){var n=document.querySelectorAll(this.options.containerSelector);if((n=Array.prototype.slice.call(n)).forEach(function(t,n){t.contains(e.sidebar)&&(e.container=t)}),!n.length)throw new Error("The container does not contains on the sidebar.")}"function"!=typeof this.options.topSpacing&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),"function"!=typeof this.options.bottomSpacing&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}},{key:"bindEvents",value:function(){window.addEventListener("resize",this,{passive:!0,capture:!1}),window.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update"+t,this),this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(new ResizeSensor(this.sidebarInner,this.handleEvent),new ResizeSensor(this.container,this.handleEvent))}},{key:"handleEvent",value:function(e){this.updateSticky(e)}},{key:"calcDimensions",value:function(){if(!this._breakpoint){var t=this.dimensions;t.containerTop=e.offsetRelative(this.container).top,t.containerHeight=this.container.clientHeight,t.containerBottom=t.containerTop+t.containerHeight,t.sidebarHeight=this.sidebarInner.offsetHeight,t.sidebarWidth=this.sidebarInner.offsetWidth,t.viewportHeight=window.innerHeight,t.maxTranslateY=t.containerHeight-t.sidebarHeight,this._calcDimensionsWithScroll()}}},{key:"_calcDimensionsWithScroll",value:function(){var t=this.dimensions;t.sidebarLeft=e.offsetRelative(this.sidebar).left,t.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,t.viewportBottom=t.viewportTop+t.viewportHeight,t.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft,t.topSpacing=this.options.topSpacing,t.bottomSpacing=this.options.bottomSpacing,"function"==typeof t.topSpacing&&(t.topSpacing=parseInt(t.topSpacing(this.sidebar))||0),"function"==typeof t.bottomSpacing&&(t.bottomSpacing=parseInt(t.bottomSpacing(this.sidebar))||0),"VIEWPORT-TOP"===this.affixedType?t.topSpacing<t.lastTopSpacing&&(t.translateY+=t.lastTopSpacing-t.topSpacing,this._reStyle=!0):"VIEWPORT-BOTTOM"===this.affixedType&&t.bottomSpacing<t.lastBottomSpacing&&(t.translateY+=t.lastBottomSpacing-t.bottomSpacing,this._reStyle=!0),t.lastTopSpacing=t.topSpacing,t.lastBottomSpacing=t.bottomSpacing}},{key:"isSidebarFitsViewport",value:function(){var e=this.dimensions,t="down"===this.scrollDirection?e.lastBottomSpacing:e.lastTopSpacing;return this.dimensions.sidebarHeight+t<this.dimensions.viewportHeight}},{key:"observeScrollDir",value:function(){var e=this.dimensions;if(e.lastViewportTop!==e.viewportTop){var t="down"===this.direction?Math.min:Math.max;e.viewportTop===t(e.viewportTop,e.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down")}}},{key:"getAffixType",value:function(){this._calcDimensionsWithScroll();var e=this.dimensions,t=e.viewportTop+e.topSpacing,n=this.affixedType;return t<=e.containerTop||e.containerHeight<=e.sidebarHeight?(e.translateY=0,n="STATIC"):n="up"===this.direction?this._getAffixTypeScrollingUp():this._getAffixTypeScrollingDown(),e.translateY=Math.max(0,e.translateY),e.translateY=Math.min(e.containerHeight,e.translateY),e.translateY=Math.round(e.translateY),e.lastViewportTop=e.viewportTop,n}},{key:"_getAffixTypeScrollingDown",value:function(){var e=this.dimensions,t=e.sidebarHeight+e.containerTop,n=e.viewportTop+e.topSpacing,i=e.viewportBottom-e.bottomSpacing,a=this.affixedType;return this.isSidebarFitsViewport()?e.sidebarHeight+n>=e.containerBottom?(e.translateY=e.containerBottom-t,a="CONTAINER-BOTTOM"):n>=e.containerTop&&(e.translateY=n-e.containerTop,a="VIEWPORT-TOP"):e.containerBottom<=i?(e.translateY=e.containerBottom-t,a="CONTAINER-BOTTOM"):t+e.translateY<=i?(e.translateY=i-t,a="VIEWPORT-BOTTOM"):e.containerTop+e.translateY<=n&&0!==e.translateY&&e.maxTranslateY!==e.translateY&&(a="VIEWPORT-UNBOTTOM"),a}},{key:"_getAffixTypeScrollingUp",value:function(){var e=this.dimensions,t=e.sidebarHeight+e.containerTop,n=e.viewportTop+e.topSpacing,i=e.viewportBottom-e.bottomSpacing,a=this.affixedType;return n<=e.translateY+e.containerTop?(e.translateY=n-e.containerTop,a="VIEWPORT-TOP"):e.containerBottom<=i?(e.translateY=e.containerBottom-t,a="CONTAINER-BOTTOM"):this.isSidebarFitsViewport()||e.containerTop<=n&&0!==e.translateY&&e.maxTranslateY!==e.translateY&&(a="VIEWPORT-UNBOTTOM"),a}},{key:"_getStyle",value:function(t){if(void 0!==t){var n={inner:{},outer:{}},i=this.dimensions;switch(t){case"VIEWPORT-TOP":n.inner={position:"fixed",top:i.topSpacing,left:i.sidebarLeft-i.viewportLeft,width:i.sidebarWidth};break;case"VIEWPORT-BOTTOM":n.inner={position:"fixed",top:"auto",left:i.sidebarLeft,bottom:i.bottomSpacing,width:i.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":var a=this._getTranslate(0,i.translateY+"px");n.inner=a?{transform:a}:{position:"absolute",top:i.translateY,width:i.sidebarWidth}}switch(t){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":n.outer={height:i.sidebarHeight,position:"relative"}}return n.outer=e.extend({height:"",position:""},n.outer),n.inner=e.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:""},n.inner),n}}},{key:"stickyPosition",value:function(n){if(!this._breakpoint){n=this._reStyle||n||!1,this.options.topSpacing,this.options.bottomSpacing;var i=this.getAffixType(),a=this._getStyle(i);if((this.affixedType!=i||n)&&i){var o="affix."+i.toLowerCase().replace("viewport-","")+t;for(var s in e.eventTrigger(this.sidebar,o),"STATIC"===i?e.removeClass(this.sidebar,this.options.stickyClass):e.addClass(this.sidebar,this.options.stickyClass),a.outer){var r="number"==typeof a.outer[s]?"px":"";this.sidebar.style[s]=a.outer[s]+r}for(var c in a.inner){var l="number"==typeof a.inner[c]?"px":"";this.sidebarInner.style[c]=a.inner[c]+l}var p="affixed."+i.toLowerCase().replace("viewport-","")+t;e.eventTrigger(this.sidebar,p)}else this._initialized&&(this.sidebarInner.style.left=a.inner.left);this.affixedType=i}}},{key:"_widthBreakpoint",value:function(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),e.removeClass(this.sidebar,this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}},{key:"updateSticky",value:function(){var e,t=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this._running||(this._running=!0,e=n.type,requestAnimationFrame(function(){switch(e){case"scroll":t._calcDimensionsWithScroll(),t.observeScrollDir(),t.stickyPosition();break;case"resize":default:t._widthBreakpoint(),t.calcDimensions(),t.stickyPosition(!0)}t._running=!1}))}},{key:"_setSupportFeatures",value:function(){var t=this.support;t.transform=e.supportTransform(),t.transform3d=e.supportTransform(!0)}},{key:"_getTranslate",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;return this.support.transform3d?"translate3d("+e+", "+t+", "+n+")":!!this.support.translate&&"translate("+e+", "+t+")"}},{key:"destroy",value:function(){window.removeEventListener("resize",this,{capture:!1}),window.removeEventListener("scroll",this,{capture:!1}),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.sidebar.removeEventListener("update"+t,this);var e={inner:{},outer:{}};for(var n in e.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},e.outer={height:"",position:""},e.outer)this.sidebar.style[n]=e.outer[n];for(var i in e.inner)this.sidebarInner.style[i]=e.inner[i];this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(ResizeSensor.detach(this.sidebarInner,this.handleEvent),ResizeSensor.detach(this.container,this.handleEvent))}}],[{key:"supportTransform",value:function(e){var t=!1,n=e?"perspective":"transform",i=n.charAt(0).toUpperCase()+n.slice(1),a=document.createElement("support").style;return(n+" "+["Webkit","Moz","O","ms"].join(i+" ")+i).split(" ").forEach(function(e,n){if(void 0!==a[e])return t=e,!1}),t}},{key:"eventTrigger",value:function(e,t,n){try{var i=new CustomEvent(t,{detail:n})}catch(e){(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n)}e.dispatchEvent(i)}},{key:"extend",value:function(e,t){var n={};for(var i in e)void 0!==t[i]?n[i]=t[i]:n[i]=e[i];return n}},{key:"offsetRelative",value:function(e){var t={left:0,top:0};do{var n=e.offsetTop,i=e.offsetLeft;isNaN(n)||(t.top+=n),isNaN(i)||(t.left+=i),e="BODY"===e.tagName?e.parentElement:e.offsetParent}while(e);return t}},{key:"addClass",value:function(t,n){e.hasClass(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)}},{key:"removeClass",value:function(t,n){e.hasClass(t,n)&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}},{key:"defaults",get:function(){return n}}]),e}());e.default=a,window.StickySidebar=a}(t)}(t={exports:{}},t.exports),t.exports),o=(i=a)&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;e.default=o,e.__moduleExports=a,Object.defineProperty(e,"__esModule",{value:!0})})}).call(this,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var i;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(o,s){"use strict";var r=function(e){if("object"!==a(e.document))throw Error("Cookies.js requires a `window` with a `document` object");var t=function e(t,n,i){return 1===arguments.length?e.get(t):e.set(t,n,i)};return t._document=e.document,t._cacheKeyPrefix="cookey.",t._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),t.defaults={path:"/",secure:!1},t.get=function(e){return t._cachedDocumentCookie!==t._document.cookie&&t._renewCache(),(e=t._cache[t._cacheKeyPrefix+e])===s?s:decodeURIComponent(e)},t.set=function(e,n,i){return(i=t._getExtendedOptions(i)).expires=t._getExpiresDate(n===s?-1:i.expires),t._document.cookie=t._generateCookieString(e,n,i),t},t.expire=function(e,n){return t.set(e,s,n)},t._getExtendedOptions=function(e){return{path:e&&e.path||t.defaults.path,domain:e&&e.domain||t.defaults.domain,expires:e&&e.expires||t.defaults.expires,secure:e&&e.secure!==s?e.secure:t.defaults.secure}},t._isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},t._getExpiresDate=function(e,n){if(n=n||new Date,"number"==typeof e?e=1/0===e?t._maxExpireDate:new Date(n.getTime()+1e3*e):"string"==typeof e&&(e=new Date(e)),e&&!t._isValidDate(e))throw Error("`expires` parameter cannot be converted to a valid Date instance");return e},t._generateCookieString=function(e,t,n){return e=(e=(e=e.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29"))+"="+(t=(t+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent))+((n=n||{}).path?";path="+n.path:""),e+=n.domain?";domain="+n.domain:"",(e+=n.expires?";expires="+n.expires.toUTCString():"")+(n.secure?";secure":"")},t._getCacheFromString=function(e){var n={};e=e?e.split("; "):[];for(var i=0;i<e.length;i++){var a=t._getKeyValuePairFromCookieString(e[i]);n[t._cacheKeyPrefix+a.key]===s&&(n[t._cacheKeyPrefix+a.key]=a.value)}return n},t._getKeyValuePairFromCookieString=function(e){var t,n=0>(n=e.indexOf("="))?e.length:n,i=e.substr(0,n);try{t=decodeURIComponent(i)}catch(e){console&&"function"==typeof console.error&&console.error('Could not decode cookie with key "'+i+'"',e)}return{key:t,value:e.substr(n+1)}},t._renewCache=function(){t._cache=t._getCacheFromString(t._document.cookie),t._cachedDocumentCookie=t._document.cookie},t._areEnabled=function(){var e="1"===t.set("cookies.js",1).get("cookies.js");return t.expire("cookies.js"),e},t.enabled=t._areEnabled(),t},c=o&&"object"===a(o.document)?r(o):r;void 0===(i=function(){return c}.call(t,n,t,e))||(e.exports=i)}("undefined"==typeof window?this:window)},function(e,t){}]);