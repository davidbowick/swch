!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(5)},function(t,e,n){function i(){return!!window.matchMedia("(max-width: 768px)").matches}function a(t,e,n){var i;return function(){var a=this,o=arguments,s=function(){i=null,n||t.apply(a,o)},r=n&&!i;clearTimeout(i),i=setTimeout(s,e),r&&t.apply(a,o)}}n(2),n(4),$.easing.custom=function(t,e,n,i,a){return(e/=a/2)<1?i/2*e*e+n:-i/2*(--e*(e-2)-1)+n},$.fn.highlight=function(t,e){return this.each(function(){var n=this.innerHTML,i=new RegExp("(>[^<.]*)("+t+")([^<.]*)","g"),a="$1<span "+(e?'class="'+e+'"':"")+'">$2</span>$3',o=n.replace(i,a);this.innerHTML=o})},$.fn.visible=function(t){var e=$(this),n=$(window),i=n.scrollTop(),a=i+n.height(),o=e.offset().top,s=o+e.height();return(!0===t?o:s)<=a&&(!0===t?s:o)>=i};var o={isPlaying:!1,currentPostId:!1,currentUserId:!1,currentUserName:!1,currentUserImage:!1},s=!1;function r(){var t=$(window),e=$(".anim-in");e.each(function(t,e){if((e=$(e)).visible(!0)){var n=t/10;e.delay(n).addClass("already-visible")}}),t.scroll(function(t){e.each(function(t,e){if((e=$(e)).visible(!0)){var n=t/10;e.delay(n).addClass("come-in")}})})}$(function(){r(),d(),$(document).on("click",".show-lyrics",function(t){t.preventDefault(),$(this).closest(".post").find(".post__lyrics").slideToggle()}),$(document).on("click",".post__comment-link",function(t){t.preventDefault(),$(this).closest(".post").find(".post__comments").slideToggle("fast",function(){$(this).is(":visible")&&$(this).find('input[name="comment"]').focus()})}),$(document).on("click",".play-all",function(t){t.preventDefault(),s=!0,$(".post").eq(0).find(".play-pause-btn").eq(0).trigger("click")}),$(document).on("click",".post .play-pause-btn",function(t){t.preventDefault();var e=$(this).closest(".post"),n=$(".main-player"),i=e.data("song-id");if($btn=e.find(".play-pause-btn i"),$mainBtn=n.find(".play-pause-btn i"),$thebtn=$btn.parent(),$loadingIndicator=n.find(".main-player__playbar--loading"),$progress=n.find(".main-player__playbar--progress"),$seek=e.find(".seek"),$mainProgress=".main-player__playbar--progress",mainTitle=".main-player__title",sID=e.parent().parent().data("song-id"),prompt=e.data("prompt-title"),promptSlug=e.data("prompt-slug"),userLink=e.find(".post_artist").html(),postLink=e.find(".share").attr("href"),liked=e.find(".like").hasClass("liked"),n.attr("data-song-id",i),o.currentPostId!=i){$(".post.is-playing").length&&($(".post.is-playing").eq(0).find(".play-pause-btn").eq(0).trigger("click"),$('.post[data-song-id="'+o.currentPostId+'"').removeClass("is-playing"),$('.post[data-song-id="'+i+'"').addClass("is-playing").find(".play-pause-btn i").removeClass("fa-play").addClass("fa-pause")),$(".main-player__image").empty();var a='<b><a href="'+postLink+'">"'+e.data("title")+'"</a></b><br/>'+userLink;$(mainTitle).html(a);e.find(".post__cover img").clone().appendTo(".main-player__image");n.fadeIn(),$(".main-player__audio").attr("src",e.data("audio")),o.currentPostId=i,o.currentPrompt=prompt,$(".main-player__prompt-name").text(prompt),$(".main-player__prompt ").attr("href","/prompts/"+promptSlug),liked?$(".main-player__like").addClass("liked"):$(".main-player__like").removeClass("liked")}setTimeout(function(){$(".main-player .play-pause-btn").trigger("click")},250),$btn.attr("class",e.hasClass("is-playing")?"fa fa-pause":"fa fa-play"),$mainBtn.attr("class",e.hasClass("is-playing")?"fa fa-pause":"fa fa-play")});var t=".main-player__audio",e=".main-player__playbar--progress",n=$(t).get(0);null!=$(t).buffered&&0!=$(t).buffered.length?n.bind("progress",function(){var e=parseInt($(t).buffered.end(0)/$(t).duration*100,10);$(".main-player__playbar--loading").css({width:e+"%"})}):$(".main-player__playbar--loading").css({width:"100%"});var l=0,c=!1;function p(t){var e=$('.post[data-song-id="'+t+'"]');o.isPlaying&&o.currentPostId==t?(e.addClass("is-playing").find(".play-pause-btn i").removeClass("fa-play").addClass("fa-pause"),e.find(".bars").fadeIn()):(e.removeClass("is-playing").find(".play-pause-btn i").removeClass("fa-pause").addClass("fa-play"),e.find(".bars").fadeOut())}function u(t){$.get("/post/like/"+t,function(e){var n=$('.post[data-song-id="'+t+'"]');1==e.success?(n.find(".like").addClass("liked"),o.currentPostId==t&&$(".main-player__like").addClass("liked")):(n.find(".like").removeClass("liked"),o.currentPostId==t&&$(".main-player__like").removeClass("liked")),n.find(".like-count").text(e.total_likes)})}function d(){if(!0===$(".sidebar__inner").data("sticky")&&0==i())new StickySidebar(".sidebar",{containerSelector:"#page-content",innerWrapperSelector:".sidebar__inner",topSpacing:50,bottomSpacing:50})}$(n).on("loadeddata",function(){$(n).bind("timeupdate",function(){var t=parseInt(n.duration-n.currentTime,10);Math.floor(t/60,10),l=n.currentTime/n.duration*100,$(e).css({width:l+"%"});var i=parseInt(n.currentTime/60,10);i=(i<10?"0":"")+i;var a=parseInt(n.currentTime%60,10);a=(a<10?"0":"")+a;var s=parseInt(n.duration/60,10);s=(s<10?"0":"")+s;var r=parseInt(n.duration%60,10);if(r=(r<10?"0":"")+r,$.isNumeric(n.duration)&&($(".main-player__current-time").text(i+":"+a),$(".main-player__total-time").text(s+":"+r)),$(e).css({width:l+"%"}),!c&&l>=50){c=!0;var p="/play/"+o.currentPostId;$.get(p,function(t){$('.post[data-song-id="'+o.currentPostId+'"').find(".play-count").text(t)})}}),$(n).bind("ended",function(){if(n.currentTime=0,$('.post[data-song-id="'+o.currentPostId+'"').removeClass("is-playing"),$(".play-pause-btn i").removeClass("fa-pause").addClass("fa-play"),c=!1,o.isPlaying=!1,s){var t=playlist.songs.findIndex(function(t){return t.id===o.currentPostId});if(playlist.songs.length>t+1&&s){var e=playlist.songs[t+1].id;e&&$.get("/next/"+e,function(t){!function(t){var e=".main-player__audio";$(e).attr("src","/storage/uploads/mp3s/"+t.filename),$(e).get(0).load();var n=$(e).get(0).play();void 0!==n&&n.then(function(){$('.post[data-song-id="'+o.currentPostId+'"').find(".bars").fadeOut(),o.isPlaying=!0,$(".main-player__title").html('<b><a href="/'+t.user.username+'">'+t.user.name+'</b><br/><a href="/'+t.user.username+"/"+t.slug+'">'+t.title+"</a>"),$(".main-player__image img").attr("src","/storage/uploads/avatars/"+t.user.avatar),$(".main-player__prompt").attr("href","/prompts/"+t.prompt.slug),$(".main-player__prompt-name").text(t.prompt.title),$(".play-pause-btn i").removeClass("fa-pause").addClass("fa-play"),$(".main-player__transport .play-pause-btn i").removeClass("fa-play").addClass("fa-pause"),o.currentPostId=t.id,$(".main-player").attr("data-song-id",t.id);var e=t.likes.findIndex(function(t){return t.id===currentUser});e>-1?$(".main-player__like").addClass("liked"):$(".main-player__like").removeClass("liked"),$('.post[data-song-id="'+o.currentPostId+'"').find(".play-pause-btn i").removeClass(".fa-play").addClass("fa-pause"),$('.post[data-song-id="'+o.currentPostId+'"').find(".bars").fadeIn()}).catch(function(t){})}(t)})}else s=!1,$(".post .bars").fadeOut()}})}),$(document).on("click",".main-player .play-pause-btn",function(t){t.preventDefault();var e=$(this).find("i");if(songId=$(".main-player").attr("data-song-id"),o.isPlaying)$(".main-player__audio").get(0).pause(),e.removeClass("fa-pause").addClass("fa-play"),o.isPlaying=!1,p(songId);else{var n=$(".main-player__audio").get(0).play();void 0!==n&&n.then(function(){e.removeClass("fa-play").addClass("fa-pause"),o.isPlaying=!0,p(songId)}).catch(function(t){console.log(t)})}}),$(document).on("click",".main-player__like",function(t){t.preventDefault();$(this);var e=o.currentPostId;$('.post[data-song-id="'+e+'"]');$(this).attr("href","/post/like/"+e),u(e)}),$(document).on("click",".post .like",function(t){t.preventDefault();$(this);u($(this).data("song-id"))}),$(document).on("change",".ajax-active input",function(t){t.preventDefault();var e=$(this).closest("form");$.ajax({url:e.attr("action"),type:"post",data:e.serialize(),dataType:"json",success:function(t){},error:function(t){}})}),$(document).on("submit",".suggestion-form",function(t){t.preventDefault();var e=$(this);e.find(".btn .spinner").fadeIn(),e.find(".btn").attr("disabled",!0),$.ajax({url:e.attr("action"),type:"post",data:e.serialize(),success:function(t){$.get("/suggestion",function(){$("#main-content").html($(t).find("#main-content").html())})},error:function(t){}})}),$(document).on("click",".hat-draw",function(t){t.preventDefault();var e=$(this),n=parseInt(e.attr("data-pick-number"));console.log(n),$.get("/suggestions/pick",function(t){var i=t.all,a=t.picks,o=$.merge(i,i);!function(t,e,n){var i=1===t?".results-1":".results-2",a=n[0].title;n[1].title,$.each(e,function(t,e){setTimeout(function(){$(i).text(e.title)},50*t)}),setTimeout(function(){$(i).text(a)},50*e.length)}(n,o,a),e.attr("data-pick-number","2")})}),$(document).on("submit",".comment-form",function(t){t.preventDefault();var e=$(this);return $.ajax({url:e.attr("action"),type:"post",data:e.serialize(),dataType:"json",success:function(t){var n='<div class="post__comment anim-in come-in flex flex--align-center"><div class="post__comment--user"><a href="'+t.user.username+'"><img src="/storage/uploads/avatars/'+t.user.avatar+'" width="20" /></a></div><div class="post__comment--text">'+t.comment+"</div></div>";$(n).insertBefore(".comment-form"),e.find('input[name="comment"]').val("");var i=parseInt(e.closest(".post_player").find(".comment-count").text())+1;e.closest(".post_player").find(".comment-count").text(i)}}),!1}),$(document).on("click",".im-going",function(t){t.preventDefault();var e=$(this),n=$(this).data("event-id");$.get("/showcase/like/"+n,function(t){t.success?(e.addClass("liked"),e.find(".icon i").attr("class","fa fa-thumbs-up"),e.find(".button-text").text("I'll Be There!")):(e.removeClass("liked"),e.find(".icon i").attr("class","fa fa-question"),e.find(".button-text").text("Be There?"));var n=1===t.total_likes?" user attending":" users attending";$(".total-attendees").text(t.total_likes+n)})}),$(document).on("click",".follow-btn",function(t){t.preventDefault();var e=$(this),n=e.attr("href");e[0];$.get(n,function(t){t.success?(e.addClass("liked").find(".like-text").text("Following"),setTimeout(function(){e.find("i").toggleClass("star-spin")},1e3)):(e.removeClass("liked").find(".like-text").text("Follow"),e.find("i").removeClass("star-spin")),e.next().text("Followers: "+t.total_likes)})}),$(document).on("change keyup keydown paste cut","textarea",function(){$(this).height(0).height(this.scrollHeight)});var f="";$("#ts").keyup(a(function(){var t=$("#ts").val(),e="#top-search-results";t.length>=3&&f!=t&&(f=t,$.get("/search",{q:t}).done(function(n){if($(e).empty(),n.users.length){$(e).append("<h4>Users</h4>");$(e).append('<ul class="tsr__users"></ul>'),$(n.users).each(function(e,n){if(e<5){var i='<li class="tsr__user"><a href="/'+n.username+'"><img src="/storage/uploads/avatars/'+n.avatar+'" width="20">'+n.name+"</a></li>";$(".tsr__users").append(i)}5==e&&$(".tsr__users").append('<li class="tsr__more"><a href="/search?q='+t+"</a></li>")})}$(e).fadeIn()}))},500)),$(".top-search-wrapper").mouseleave(function(){$(this);var t="#top-search-results";$(t).fadeOut("fast",function(){$(t).empty()})}),$("#registration-form #name").keyup(a(function(){var t=$(this).val();if(t.length>=3&&f!=t){f=t;var e=t.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").toLowerCase();$("#username").val(e)}},500));var m="http://"+top.location.host.toString();$("a[href^='"+m+"'], a[href^='/'], a[href^='./'], a[href^='../']");if($(document).on("click","a:not(.no-link)",function(t){var e=$(this),n=e.attr("href");return(!i()||!e.hasClass("main-nav__user-link"))&&(n!=window.location.pathname&&void("#"!=n&&(t.preventDefault(),$("#main-content").fadeTo("fast",0,function(){$.get(n,function(t){var e=$(t).find("#main-content").html();$("#main-content").html(e),window.history.pushState({html:e,pageTitle:""},"",n),window.scrollTo(0,0),r(),$("img").one("load",function(){d(),$(window).resize()}).each(function(){this.complete&&$(this).trigger("load")}),$("#main-content").fadeTo("fast",1),o.isPlaying&&p(o.currentPostId)})}))))}),i()){$(document).on("click",".main-nav__user-link",function(t){t.preventDefault(),$(".user-drop-wrap").toggleClass("show")}),$(document).on("click",".user-drop a",function(t){$(".user-drop-wrap").toggleClass("show")}),$(document).on("touchend",function(t){0===$(t.target).closest(".user-drop-wrap").length&&$(".user-drop-wrap").removeClass("show")})}$(".footer-signup").submit(function(t){t.preventDefault();var e=$(this);e.find(".btn").text("Sending..."),$.ajax({type:e.attr("method"),url:e.attr("action"),data:e.serialize(),cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",error:function(t){alert("Could not connect to the registration server. Please try again later.")},success:function(t){e.find(".btn").text("submit"),"success"===t.result?($("#mce-EMAIL").removeClass("error"),$("#mce-responses").text("Thank you for subscribing. We have sent you a confirmation email.").addClass("alert-success"),$("#mce-EMAIL").val("")):($("#mce-EMAIL").addClass("error"),$("#mce-responses").text(t.msg.substring(4)).addClass("alert-danger"))}})});var h=$(".volume__sliderHandle"),g=($(".volume__sliderInner"),document.querySelector(".volume-slider-con"),document.querySelector(".volume-slider"),$(".main-player__audio").get(0),!1);h.on("mousedown",function(t){g=!0,v(t.clientY)}),h.on("mousemove",function(t){g&&v(t.clientY)}),h.on("mouseup",function(t){g=!1});var v=function(t,e){var n,i=h;e?n=100*e:n=100*(t+i.offset().top)/i.height();n>100&&(n=100),n<0&&(n=0),$(".volume__sliderProgress").css("height",n+"%")}}),window.onpopstate=function(t){t.state&&(document.getElementById("main-content").innerHTML=t.state.html,document.title=t.state.pageTitle,r())};$(function(){console.log("on load"),$("#post-form").submit(function(t){console.log("#post-form.submit"),""!=$("#filename").val()&&(t.preventDefault(),$("#post-form").ajaxForm({beforeSend:function(){$("#success").empty()},uploadProgress:function(t,e,n,i){$(".progress-text").text(i+"%"),$(".progress-bar").css("width",i+"%")},success:function(t){t.errors&&($(".progress-text").text("0%"),$(".progress-bar").css("width","0%"),$("#success").html('<div class="alert alert-danger">'+t.errors+"</div>")),t.success&&($("#success").html('<div class="alert alert-success">Great success!</div>'),window.location.href=$(this).closest("form").data("return-url"))}}))})})},function(t,e,n){(function(n){var i,a,o;function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(n,r){"object"==s(e)&&void 0!==t?r(e):(a=[e],void 0===(o="function"==typeof(i=r)?i.apply(e,a):i)||(t.exports=o))}(0,function(t){"use strict";"undefined"!=typeof window?window:void 0!==n||"undefined"!=typeof self&&self;var e,i,a=(function(t,e){!function(t){Object.defineProperty(t,"__esModule",{value:!0});var e,n,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=(e=".stickySidebar",n={topSpacing:0,bottomSpacing:0,containerSelector:!1,innerWrapperSelector:".inner-wrapper-sticky",stickyClass:"is-affixed",resizeSensor:!0,minWidth:!1},function(){function t(e){var i=this,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.options=t.extend(n,a),this.sidebar="string"==typeof e?document.querySelector(e):e,void 0===this.sidebar)throw new Error("There is no specific sidebar element.");this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._reStyle=!1,this._breakpoint=!1,this.dimensions={translateY:0,maxTranslateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["handleEvent"].forEach(function(t){i[t]=i[t].bind(i)}),this.initialize()}return i(t,[{key:"initialize",value:function(){var t=this;if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),null===this.sidebarInner&&(this.sidebarInner=!1)),!this.sidebarInner){var e=document.createElement("div");for(e.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(e);this.sidebar.firstChild!=e;)e.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}if(this.options.containerSelector){var n=document.querySelectorAll(this.options.containerSelector);if((n=Array.prototype.slice.call(n)).forEach(function(e,n){e.contains(t.sidebar)&&(t.container=e)}),!n.length)throw new Error("The container does not contains on the sidebar.")}"function"!=typeof this.options.topSpacing&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),"function"!=typeof this.options.bottomSpacing&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}},{key:"bindEvents",value:function(){window.addEventListener("resize",this,{passive:!0,capture:!1}),window.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update"+e,this),this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(new ResizeSensor(this.sidebarInner,this.handleEvent),new ResizeSensor(this.container,this.handleEvent))}},{key:"handleEvent",value:function(t){this.updateSticky(t)}},{key:"calcDimensions",value:function(){if(!this._breakpoint){var e=this.dimensions;e.containerTop=t.offsetRelative(this.container).top,e.containerHeight=this.container.clientHeight,e.containerBottom=e.containerTop+e.containerHeight,e.sidebarHeight=this.sidebarInner.offsetHeight,e.sidebarWidth=this.sidebarInner.offsetWidth,e.viewportHeight=window.innerHeight,e.maxTranslateY=e.containerHeight-e.sidebarHeight,this._calcDimensionsWithScroll()}}},{key:"_calcDimensionsWithScroll",value:function(){var e=this.dimensions;e.sidebarLeft=t.offsetRelative(this.sidebar).left,e.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,e.viewportBottom=e.viewportTop+e.viewportHeight,e.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft,e.topSpacing=this.options.topSpacing,e.bottomSpacing=this.options.bottomSpacing,"function"==typeof e.topSpacing&&(e.topSpacing=parseInt(e.topSpacing(this.sidebar))||0),"function"==typeof e.bottomSpacing&&(e.bottomSpacing=parseInt(e.bottomSpacing(this.sidebar))||0),"VIEWPORT-TOP"===this.affixedType?e.topSpacing<e.lastTopSpacing&&(e.translateY+=e.lastTopSpacing-e.topSpacing,this._reStyle=!0):"VIEWPORT-BOTTOM"===this.affixedType&&e.bottomSpacing<e.lastBottomSpacing&&(e.translateY+=e.lastBottomSpacing-e.bottomSpacing,this._reStyle=!0),e.lastTopSpacing=e.topSpacing,e.lastBottomSpacing=e.bottomSpacing}},{key:"isSidebarFitsViewport",value:function(){var t=this.dimensions,e="down"===this.scrollDirection?t.lastBottomSpacing:t.lastTopSpacing;return this.dimensions.sidebarHeight+e<this.dimensions.viewportHeight}},{key:"observeScrollDir",value:function(){var t=this.dimensions;if(t.lastViewportTop!==t.viewportTop){var e="down"===this.direction?Math.min:Math.max;t.viewportTop===e(t.viewportTop,t.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down")}}},{key:"getAffixType",value:function(){this._calcDimensionsWithScroll();var t=this.dimensions,e=t.viewportTop+t.topSpacing,n=this.affixedType;return e<=t.containerTop||t.containerHeight<=t.sidebarHeight?(t.translateY=0,n="STATIC"):n="up"===this.direction?this._getAffixTypeScrollingUp():this._getAffixTypeScrollingDown(),t.translateY=Math.max(0,t.translateY),t.translateY=Math.min(t.containerHeight,t.translateY),t.translateY=Math.round(t.translateY),t.lastViewportTop=t.viewportTop,n}},{key:"_getAffixTypeScrollingDown",value:function(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,n=t.viewportTop+t.topSpacing,i=t.viewportBottom-t.bottomSpacing,a=this.affixedType;return this.isSidebarFitsViewport()?t.sidebarHeight+n>=t.containerBottom?(t.translateY=t.containerBottom-e,a="CONTAINER-BOTTOM"):n>=t.containerTop&&(t.translateY=n-t.containerTop,a="VIEWPORT-TOP"):t.containerBottom<=i?(t.translateY=t.containerBottom-e,a="CONTAINER-BOTTOM"):e+t.translateY<=i?(t.translateY=i-e,a="VIEWPORT-BOTTOM"):t.containerTop+t.translateY<=n&&0!==t.translateY&&t.maxTranslateY!==t.translateY&&(a="VIEWPORT-UNBOTTOM"),a}},{key:"_getAffixTypeScrollingUp",value:function(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,n=t.viewportTop+t.topSpacing,i=t.viewportBottom-t.bottomSpacing,a=this.affixedType;return n<=t.translateY+t.containerTop?(t.translateY=n-t.containerTop,a="VIEWPORT-TOP"):t.containerBottom<=i?(t.translateY=t.containerBottom-e,a="CONTAINER-BOTTOM"):this.isSidebarFitsViewport()||t.containerTop<=n&&0!==t.translateY&&t.maxTranslateY!==t.translateY&&(a="VIEWPORT-UNBOTTOM"),a}},{key:"_getStyle",value:function(e){if(void 0!==e){var n={inner:{},outer:{}},i=this.dimensions;switch(e){case"VIEWPORT-TOP":n.inner={position:"fixed",top:i.topSpacing,left:i.sidebarLeft-i.viewportLeft,width:i.sidebarWidth};break;case"VIEWPORT-BOTTOM":n.inner={position:"fixed",top:"auto",left:i.sidebarLeft,bottom:i.bottomSpacing,width:i.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":var a=this._getTranslate(0,i.translateY+"px");n.inner=a?{transform:a}:{position:"absolute",top:i.translateY,width:i.sidebarWidth}}switch(e){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":n.outer={height:i.sidebarHeight,position:"relative"}}return n.outer=t.extend({height:"",position:""},n.outer),n.inner=t.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:""},n.inner),n}}},{key:"stickyPosition",value:function(n){if(!this._breakpoint){n=this._reStyle||n||!1,this.options.topSpacing,this.options.bottomSpacing;var i=this.getAffixType(),a=this._getStyle(i);if((this.affixedType!=i||n)&&i){var o="affix."+i.toLowerCase().replace("viewport-","")+e;for(var s in t.eventTrigger(this.sidebar,o),"STATIC"===i?t.removeClass(this.sidebar,this.options.stickyClass):t.addClass(this.sidebar,this.options.stickyClass),a.outer){var r="number"==typeof a.outer[s]?"px":"";this.sidebar.style[s]=a.outer[s]+r}for(var l in a.inner){var c="number"==typeof a.inner[l]?"px":"";this.sidebarInner.style[l]=a.inner[l]+c}var p="affixed."+i.toLowerCase().replace("viewport-","")+e;t.eventTrigger(this.sidebar,p)}else this._initialized&&(this.sidebarInner.style.left=a.inner.left);this.affixedType=i}}},{key:"_widthBreakpoint",value:function(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),t.removeClass(this.sidebar,this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}},{key:"updateSticky",value:function(){var t,e=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this._running||(this._running=!0,t=n.type,requestAnimationFrame(function(){switch(t){case"scroll":e._calcDimensionsWithScroll(),e.observeScrollDir(),e.stickyPosition();break;case"resize":default:e._widthBreakpoint(),e.calcDimensions(),e.stickyPosition(!0)}e._running=!1}))}},{key:"_setSupportFeatures",value:function(){var e=this.support;e.transform=t.supportTransform(),e.transform3d=t.supportTransform(!0)}},{key:"_getTranslate",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;return this.support.transform3d?"translate3d("+t+", "+e+", "+n+")":!!this.support.translate&&"translate("+t+", "+e+")"}},{key:"destroy",value:function(){window.removeEventListener("resize",this,{capture:!1}),window.removeEventListener("scroll",this,{capture:!1}),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.sidebar.removeEventListener("update"+e,this);var t={inner:{},outer:{}};for(var n in t.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},t.outer={height:"",position:""},t.outer)this.sidebar.style[n]=t.outer[n];for(var i in t.inner)this.sidebarInner.style[i]=t.inner[i];this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(ResizeSensor.detach(this.sidebarInner,this.handleEvent),ResizeSensor.detach(this.container,this.handleEvent))}}],[{key:"supportTransform",value:function(t){var e=!1,n=t?"perspective":"transform",i=n.charAt(0).toUpperCase()+n.slice(1),a=document.createElement("support").style;return(n+" "+["Webkit","Moz","O","ms"].join(i+" ")+i).split(" ").forEach(function(t,n){if(void 0!==a[t])return e=t,!1}),e}},{key:"eventTrigger",value:function(t,e,n){try{var i=new CustomEvent(e,{detail:n})}catch(t){(i=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,n)}t.dispatchEvent(i)}},{key:"extend",value:function(t,e){var n={};for(var i in t)void 0!==e[i]?n[i]=e[i]:n[i]=t[i];return n}},{key:"offsetRelative",value:function(t){var e={left:0,top:0};do{var n=t.offsetTop,i=t.offsetLeft;isNaN(n)||(e.top+=n),isNaN(i)||(e.left+=i),t="BODY"===t.tagName?t.parentElement:t.offsetParent}while(t);return e}},{key:"addClass",value:function(e,n){t.hasClass(e,n)||(e.classList?e.classList.add(n):e.className+=" "+n)}},{key:"removeClass",value:function(e,n){t.hasClass(e,n)&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}},{key:"defaults",get:function(){return n}}]),t}());t.default=a,window.StickySidebar=a}(e)}(e={exports:{}},e.exports),e.exports),o=(i=a)&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;t.default=o,t.__moduleExports=a,Object.defineProperty(t,"__esModule",{value:!0})})}).call(this,n(3))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var i;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(o,s){"use strict";var r=function(t){if("object"!==a(t.document))throw Error("Cookies.js requires a `window` with a `document` object");var e=function t(e,n,i){return 1===arguments.length?t.get(e):t.set(e,n,i)};return e._document=t.document,e._cacheKeyPrefix="cookey.",e._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),e.defaults={path:"/",secure:!1},e.get=function(t){return e._cachedDocumentCookie!==e._document.cookie&&e._renewCache(),(t=e._cache[e._cacheKeyPrefix+t])===s?s:decodeURIComponent(t)},e.set=function(t,n,i){return(i=e._getExtendedOptions(i)).expires=e._getExpiresDate(n===s?-1:i.expires),e._document.cookie=e._generateCookieString(t,n,i),e},e.expire=function(t,n){return e.set(t,s,n)},e._getExtendedOptions=function(t){return{path:t&&t.path||e.defaults.path,domain:t&&t.domain||e.defaults.domain,expires:t&&t.expires||e.defaults.expires,secure:t&&t.secure!==s?t.secure:e.defaults.secure}},e._isValidDate=function(t){return"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t.getTime())},e._getExpiresDate=function(t,n){if(n=n||new Date,"number"==typeof t?t=1/0===t?e._maxExpireDate:new Date(n.getTime()+1e3*t):"string"==typeof t&&(t=new Date(t)),t&&!e._isValidDate(t))throw Error("`expires` parameter cannot be converted to a valid Date instance");return t},e._generateCookieString=function(t,e,n){return t=(t=(t=t.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29"))+"="+(e=(e+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent))+((n=n||{}).path?";path="+n.path:""),t+=n.domain?";domain="+n.domain:"",(t+=n.expires?";expires="+n.expires.toUTCString():"")+(n.secure?";secure":"")},e._getCacheFromString=function(t){var n={};t=t?t.split("; "):[];for(var i=0;i<t.length;i++){var a=e._getKeyValuePairFromCookieString(t[i]);n[e._cacheKeyPrefix+a.key]===s&&(n[e._cacheKeyPrefix+a.key]=a.value)}return n},e._getKeyValuePairFromCookieString=function(t){var e,n=0>(n=t.indexOf("="))?t.length:n,i=t.substr(0,n);try{e=decodeURIComponent(i)}catch(t){console&&"function"==typeof console.error&&console.error('Could not decode cookie with key "'+i+'"',t)}return{key:e,value:t.substr(n+1)}},e._renewCache=function(){e._cache=e._getCacheFromString(e._document.cookie),e._cachedDocumentCookie=e._document.cookie},e._areEnabled=function(){var t="1"===e.set("cookies.js",1).get("cookies.js");return e.expire("cookies.js"),t},e.enabled=e._areEnabled(),e},l=o&&"object"===a(o.document)?r(o):r;void 0===(i=function(){return l}.call(e,n,e,t))||(t.exports=i)}("undefined"==typeof window?this:window)},function(t,e){}]);