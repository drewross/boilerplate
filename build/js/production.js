/* ---------------------------------------------------------------------
Global JavaScript
Authors: Andrew Ross & a little help from my friends
Contributions: PHDL
------------------------------------------------------------------------ */

var PHDL = PHDL || {};

(function($, APP) {

    $(function() {
        APP.BrowserDeviceDetection.init();
        APP.PageTransitions.init();
        APP.ClickFunciton.init();
        APP.ClickGroup.init();
        APP.ScrollTo.init();
        APP.CatchOnTop.init();
        APP.DetectViewPort.init();
        APP.DetectWindowHeight.init();
        APP.Revolver.init();
    });

/* ---------------------------------------------------------------------
Browser and Feature Detection
------------------------------------------------------------------------ */

APP.BrowserDeviceDetection = {
    userAgent: undefined,
    $html: undefined,

    init: function() {
        APP.Features = APP.Features || {};
        this.userAgent = navigator.userAgent.toLowerCase();
        this.$html = $('html');
        this.detectJs();
        this.noTouch();
        this.isTouch();
        this.isIE11();
        this.isIE10();
        this.isIE9();
        this.isIE8();
        this.isIE();
        this.isIPad();
        this.isAndroid();
    },

    detectJs: function() {
        $('body').removeClass('no-js');
    },

    noTouch: function() {
        if ( ! ('ontouchstart' in window) ) {
            APP.Features.noTouch = false;
            this.$html.addClass('noTouch');
            return;
        }
        APP.Features.noTouch = false;
    },

    isTouch: function() {
        if ( 'ontouchstart' in window ) {
            APP.Features.isTouch = false;
            this.$html.addClass('isTouch');
            return;
        }
        APP.Features.isTouch = false;
    },

    isIE11: function() {
        if( !!navigator.userAgent.match(/Trident.*rv[ :]*11\./) ) {
            this.$html.addClass('isIE isIE11');
            APP.Features.isIE11 = true;
            return;
        }
        APP.Features.isIE11 = false;
    },

    isIE10: function() {
        if( navigator.appVersion.indexOf("MSIE 10") !== -1 ) {
            this.$html.addClass('isIE10');
            APP.Features.isIE10 = true;
            return;
        }
        APP.Features.isIE10 = false;
    },

    isIE9: function() {
        if( navigator.appVersion.indexOf("MSIE 9") !== -1 ) {
            this.$html.addClass('isIE9');
            APP.Features.isIE9 = true;
            return;
        }
        APP.Features.isIE9 = false;
    },

    isIE8: function() {
        if( navigator.appVersion.indexOf("MSIE 8") !== -1 ) {
            this.$html.addClass('isIE8');
            APP.Features.isIE8 = true;
            return;
        }
        APP.Features.isIE9 = false;
    },

    isIE: function() {
        if( navigator.appVersion.indexOf("MSIE") !== -1 ) {
            this.$html.addClass('isIE');
            APP.Features.isIE = true;
            return;
        }
        APP.Features.isIE = false;
    },

    isIPad: function() {
        if( this.userAgent.indexOf("ipad") > -1 ) {
            this.$html.addClass('isIpad');
            APP.Features.isIPad = true;
            return;
        }
        APP.Features.isIPad = false;
    },

    isAndroid: function() {
        if( this.userAgent.indexOf("android") > -1 ) {
            this.$html.addClass('isAndroid');
            APP.Features.isAndroid = true;
            return;
        }
        APP.Features.isAndroid = false;
    }
};


/* --------------------------------------------------------------------
Page Transitions
Fade the page in and out
-------------------------------------------------------------------- */

APP.PageTransitions = {

    init: function() {
        var $pageTrans = $('.js-pageTransition');
        if( ! $pageTrans.length ) {
            return;
        }
        this.$pageTrans = $pageTrans;
        this.bind();
    },

    bind: function() {
        window.onunload = function(){};
        $(document).ready(function() {
            $("a[target!='_blank']").not(".no-trans").on('click touchstart:not(touchmove)', function() {
                $('.js-pageTransition').addClass('page-fade-out');
                $('body').removeClass('mobileMenuIsOpen');
            });
        });
    }
};


/* --------------------------------------------------------------------
Click Functions
Uses data-target & data-addClass to target modules & optionally add
a class to the body
-------------------------------------------------------------------- */

APP.ClickFunciton = {

    init: function() {
        var $clickFunciton = $('*[data-click-target]');
        if( ! $clickFunciton.length ) {
            return;
        }
        this.$clickFunciton = $clickFunciton;
        this.bind();
    },

    bind: function() {

        $('*[data-click-target]').on('click touchstart:not(touchmove)', function() {

            var $trigger = $(this).attr('data-click-target');
            var $bodyCls = $(this).attr('data-click-bodyClass');
            var $optCls = $(this).attr('data-click-class');
            var $target = $("#" + $trigger);

            // Check for custom class
            if( $(this).attr('data-click-class') ) {
                if( $target.hasClass($optCls) ) {
                    $target.removeClass($optCls);
                } else {
                   $target.addClass($optCls);
                }
            } else {
                if( $target.hasClass('is-active') ) {
                    $target.removeClass('is-active');
                } else {
                   $target.addClass('is-active');
                }
            }

            // Check for additional body class
            if( $(this).attr('data-click-bodyClass') ) {
                if( $('body').hasClass($bodyCls) ) {
                    $('body').removeClass($bodyCls);
                } else {
                   $('body').addClass($bodyCls); 
                }
            }
        });
    }
};

/* --------------------------------------------------------------------
Click Group
Used for adding/ removing active classes on linked elements
-------------------------------------------------------------------- */

APP.ClickGroup = {

    init: function() {
        var $clickGroup = $('*[data-click-group]');
        if( ! $clickGroup.length ) {
            return;
        }
        this.$clickGroup = $clickGroup;
        this.bind();
    },

    bind: function() {

        $('*[data-click-group]').on('click touchstart:not(touchmove)', function() {

            var $group = $(this).attr('data-click-group');

            $('*[data-click-group=' + $group + ']').each(function() {
                $(this).removeClass('is-active');
            });
            
            $(this).addClass('is-active');
            
        });


    }
};

/* --------------------------------------------------------------------
Scroll to
Used for smooth scrolling to elements
-------------------------------------------------------------------- */

APP.ScrollTo = {

    init: function() {
        var $scrollTo = $('*[data-scroll-to]');
        if( ! $scrollTo.length ) {
            return;
        }
        this.$scrollTo = $scrollTo;
        this.bind();
    },

    bind: function() {

        $('*[data-scroll-to]').on('click touchstart:not(touchmove)', function() {

            var $trigger = $(this).attr('data-scroll-to');
            var $target = $("#" + $trigger);

            var $scrollSpeed = 1000;
            var $offset = 0;

            if( $(this).attr('data-scroll-speed') ) {
                $scrollSpeed = $(this).attr('data-scroll-speed');
            }

            if( $(this).attr('data-scroll-offset') ) {
                $offset = $(this).attr('data-scroll-offset');
            }

            $('html, body').animate({
                scrollTop: $target.offset().top - $offset
            }, $scrollSpeed);
            
        });


    }
};

/* --------------------------------------------------------------------
Stick to top
When an element hits the top of the screen, stick to the top
-------------------------------------------------------------------- */

APP.CatchOnTop = {

    init: function() {
        var $catchOnTop = $('*[data-is-sticky]');
        if( ! $catchOnTop.length ) {
            return;
        }
        this.$catchOnTop = $catchOnTop;
        this.bind();
    },

    bind: function() {

        function detectPos() {
            $('*[data-is-sticky]').each(function() {
                $elHeight = $(this).find('.stickToTop').innerHeight();
                $(this).css( { 'height': $elHeight } );
                $xPos = $(this).offset().left;
                $currentPos = $(this).offset().top;

                if ( $(window).scrollTop() > $currentPos ) { 
                    $(this).addClass('is-sticky');
                    
                    $(this).find('.stickToTop').css( { 'left': $xPos } );
                }
                else {
                    $(this).removeClass('is-sticky');
                    $(this).find('.stickToTop').css( { 'left': 'auto' } );
                }
            });
        }

        $(document).ready(function() {
            detectPos();
        });

        $(window).scroll(function() {
            detectPos();
        });

        $(window).resize( function() {
            detectPos();
        });
    }
};

/* --------------------------------------------------------------------
Detect when an element is in the viewport
-------------------------------------------------------------------- */

APP.DetectViewPort = {

    init: function() {
        var $detectViewPort = $('*[data-animate-in]');
        if (!$detectViewPort.length) {
            return;
        }
        this.$detectViewPort = $detectViewPort;
        this.bind();
    },

    bind: function() {
        $.fn.isOnScreen = function(){
            var win = $(window);
            var viewport = {
                top : win.scrollTop(),
                left : win.scrollLeft()
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
            var bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();
            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        };

        function changeState() {
            $('*[data-animate-in]').each(function() {
                if ( $(this).isOnScreen() ) {
                    $(this).addClass('in-view');
                } else {
                    $(this).removeClass('in-view');
                }
            });
        }

        $(document).ready(function() {
            setTimeout(function() {
               changeState(); 
            }, 500);
        });

        $(window).scroll(function(){
            changeState();
        });        
    }
};


/* --------------------------------------------------------------------
Detect Window Height
Set the height of a section to be the height of the browser window
-------------------------------------------------------------------- */

APP.DetectWindowHeight = {

    init: function() {
        var $detectWindowHeight = $('.js-sectionFull');
        if( ! $detectWindowHeight.length ) {
            return;
        }
        this.$detectWindowHeight = $detectWindowHeight;
        this.bind();
    },

    bind: function() {

        $(document).ready(function() {
            var $windowHeight = $(window).height();
            $('.js-sectionFull').css({'height': $windowHeight });
        });

        $(window).resize(function(){
            var $newWindowHeight = $(window).height();
            $('.js-sectionFull').css({'height': $newWindowHeight });
        });
    }
};


/* --------------------------------------------------------------------
Revolver
A Simple Carousel
-------------------------------------------------------------------- */

APP.Revolver = {

    init: function() {
        var $revolver = $('.js-revolver');
        if( ! $revolver.length ) {
            return;
        }
        this.$revolver = $revolver;
        this.bind();
    },

    bind: function() {
        $('#revolver1').playRecord(false, true, 4000);
        $('#revolver2').playRecord(false, true, 8000);
    }
};

}(jQuery, PHDL));
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);aR=null};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if((I()||V())||(P()||aX())){if(I()||V()){bc=aF(bd,bb,l)}if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}else{if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.preventDefaultEvents===false){return}if(av.allowPageScroll===m){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));
(function($) {
    $.fn.playRecord =  function(autoPlay, pagination, trackLength) {
        var instance = $(this);
        var slides = instance.find('.revolver__slides');
        $revolveSpeed = trackLength;


        // Make the first slide active
        instance.find('.revolver__slides > *').first().addClass('isActive');
        var $numSlides = instance.find('.revolver__slides > *').length;


        function setParams() {
            var $viewport = instance.width();
            slides.css({"width": $viewport * $numSlides + "px", "left": "0"});
            instance.find('.revolver__slides > *').each(function() {
                $(this).css( "width", $viewport + "px");
            });
        }
        setParams();

        $(window).resize( function() {
            $newViewport = instance.width();
            instance.find('.revolver__slides > *').each(function() {
                $(this).css( "width", $newViewport + "px");
            });
            var $slideLength = instance.find('.revolver__slides > *').length;
            var $currentLength = instance.find('.revolver__slides > .isActive').index();
            slides.addClass('no-transition').css({"width": $newViewport * $numSlides + "px", "left": - $currentLength * $newViewport + "px" });

            setInterval(function() {
                slides.removeClass('no-transition');
            }, 1000);
        });


        function updatePos() {
            $viewport = instance.width();
            var $pos = slides[0].style.left;
            var $newPos = ( parseInt($pos) - $viewport ) + "px";
            slides.css( "left", $newPos );
        }

        function updatePosBack() {
            $viewport = instance.width();
            var $pos = slides[0].style.left;
            var $newPos = ( parseInt($pos) + $viewport ) + "px";
            slides.css( "left", $newPos );

        }

        function updatePosLast() {
            $viewport = instance.width();
            var $newPos = $viewport * $numSlides - $viewport;
            slides.css({ "left": - $newPos });
        }


        function customPos(number) {
            var $dest = number;
            $viewport = instance.width();
            var $newPos = $viewport * $dest;
            slides.css({ "left": - $newPos });
        }

        // Create and append the pagination
        function paginate() {
            instance.find('.revolver-controls').append('<ul class="revolver-pagination"></ul>');
            instance.find('.revolver__slides > *').each(function() {
                $(this).parents('.revolver').find('.revolver-pagination').append('<li><span></span></li>');
            });
            instance.find('.revolver-pagination > *').first().addClass('isActive');
            var $numSlides = instance.find('.revolver__slides > *').length;
            instance.find('.revolver-pagination').addClass('pag' + $numSlides + 'up');
        }


        // Move Slides Forward
        function changeSlides() {
            if( instance.find('.revolver__slides .isActive').is(':last-child') ) {
                setParams();
                instance.find('.revolver__slides .isActive').removeClass('isActive').parent('.revolver__slides').find('>:first-child').addClass('isActive');
                instance.find('.revolver-pagination .isActive').removeClass('isActive').parent('.revolver-pagination').find('>:first-child').addClass('isActive');
            } else {
                updatePos();
                instance.find('.revolver__slides .isActive').removeClass('isActive').next('.revolver__slides > *').addClass('isActive').next();
                instance.find('.revolver-pagination .isActive').removeClass('isActive').next('.revolver-pagination > *').addClass('isActive');
            }
        }

        // Move Slides Backwards
        function changeSlidesBack() {
            if( instance.find('.revolver__slides .isActive').is(':first-child') ) {
                updatePosLast();
                instance.find('.revolver__slides .isActive').removeClass('isActive').parent('.revolver__slides').find('>:last-child').addClass('isActive');
                instance.find('.revolver-pagination .isActive').removeClass('isActive').parent('.revolver-pagination').find('>:last-child').addClass('isActive');
            } else {
                updatePosBack();
                instance.find('.revolver__slides .isActive').removeClass('isActive').prev('.revolver__slides > *').addClass('isActive');
                instance.find('.revolver-pagination .isActive').removeClass('isActive').prev('.revolver-pagination > *').addClass('isActive');
            }
        }

        // Set the Interval
        function setRevolve() {
            $revolveSpeed = trackLength;
            $revoleTime = setInterval(function() {
                changeSlides();
            }, $revolveSpeed);
        }


        // Move Slides Forward and reset the timer
        var $revoleTime;
        function revolve() {
            clearInterval($revoleTime);
            changeSlides();
            //setRevolve();
        }


        // Move Slides Backwards and reset the timer
        function revolveBack() {
            clearInterval($revoleTime);
            //setRevolve();
            changeSlidesBack();
        }


        // Next & Previous Arrow & Swipe controls
        instance.find('.js-revolve-next').on('click touchstart:not(touchmove)', function () { revolve(); });
        instance.find('.js-revolve-prev').on('click touchstart:not(touchmove)', function () { revolveBack(); });
        instance.find(".revolver__slides").swipe({
            swipeLeft:function(event, direction, distance, duration, fingerCount){
                revolve();
            },
            swipeRight:function(event, direction, distance, duration, fingerCount){
                revolveBack();
            },
            threshold: 50
        });


        // AutoPlay Option
        if ( autoPlay === true ) {
            setRevolve();
        }


        // Pagination Option
        if ( pagination === true ) {
            paginate();
            instance.addClass('revolver_hasPagination');

            // Pagination 'Jump to' controls
            instance.find('.revolver-pagination > *').on('click touchstart:not(touchmove)', function() {
                clearInterval($revoleTime);
                instance.find('.revolver-pagination .isActive').removeClass('isActive');
                $(this).addClass('isActive');
                var $number = $(this).index();
                instance.find('.revolver__slides .isActive').removeClass('isActive');
                instance.find(".revolver__slides > *:nth(" + $number + ")").addClass('isActive');
                customPos($number);
            });
        }

    };
}) (jQuery);
/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(b){"object"==typeof module&&"object"==typeof module.exports?module.exports=b:"function"==typeof define&&define.amd&&define("picturefill",function(){return b}),"object"==typeof a&&(a.picturefill=b)}function e(a){var b,c,d,e,f,i=a||{};b=i.elements||g.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,e=void 0,f=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[g.ns]||(c[g.ns]={}),i.reevaluate||!c[g.ns].evaluated)){if(d&&"PICTURE"===d.nodeName.toUpperCase()){if(g.removeVideoShim(d),e=g.getMatch(c,d),e===!1)continue}else e=void 0;(d&&"PICTURE"===d.nodeName.toUpperCase()||!g.sizesSupported&&c.srcset&&h.test(c.srcset))&&g.dodgeSrcset(c),e?(f=g.processSourceSet(e),g.applyBestCandidate(f,c)):(f=g.processSourceSet(c),(void 0===c.srcset||c[g.ns].srcset)&&g.applyBestCandidate(f,c)),c[g.ns].evaluated=!0}}function f(){function c(){clearTimeout(d),d=setTimeout(h,60)}g.initTypeDetects(),e();var d,f=setInterval(function(){return e(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(f):void 0},250),h=function(){e({reevaluate:!0})};a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void d(function(){});b.createElement("picture");var g=a.picturefill||{},h=/\s+\+?\d+(e\d+)?w/;g.ns="picturefill",function(){g.srcsetSupported="srcset"in c,g.sizesSupported="sizes"in c,g.curSrcSupported="currentSrc"in c}(),g.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},g.makeUrl=function(){var a=b.createElement("a");return function(b){return a.href=b,a.href}}(),g.restrictsMixedContent=function(){return"https:"===a.location.protocol},g.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},g.getDpr=function(){return a.devicePixelRatio||1},g.getWidthFromLength=function(a){var c;if(!a||a.indexOf("%")>-1!=!1||!(parseFloat(a)>0||a.indexOf("calc(")>-1))return!1;a=a.replace("vw","%"),g.lengthEl||(g.lengthEl=b.createElement("div"),g.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",g.lengthEl.className="helper-from-picturefill-js"),g.lengthEl.style.width="0px";try{g.lengthEl.style.width=a}catch(d){}return b.body.appendChild(g.lengthEl),c=g.lengthEl.offsetWidth,0>=c&&(c=!1),b.body.removeChild(g.lengthEl),c},g.detectTypeSupport=function(b,c){var d=new a.Image;return d.onerror=function(){g.types[b]=!1,e()},d.onload=function(){g.types[b]=1===d.width,e()},d.src=c,"pending"},g.types=g.types||{},g.initTypeDetects=function(){g.types["image/jpeg"]=!0,g.types["image/gif"]=!0,g.types["image/png"]=!0,g.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.types["image/webp"]=g.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},g.verifyTypeSupport=function(a){var b=a.getAttribute("type");if(null===b||""===b)return!0;var c=g.types[b];return"string"==typeof c&&"pending"!==c?(g.types[b]=g.detectTypeSupport(b,c),"pending"):"function"==typeof c?(c(),"pending"):c},g.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},g.findWidthFromSourceSize=function(c){for(var d,e=g.trim(c).split(/\s*,\s*/),f=0,h=e.length;h>f;f++){var i=e[f],j=g.parseSize(i),k=j.length,l=j.media;if(k&&(!l||g.matchesMedia(l))&&(d=g.getWidthFromLength(k)))break}return d||Math.max(a.innerWidth||0,b.documentElement.clientWidth)},g.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},g.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),f=g.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||g.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/f)}return c||1},g.getCandidatesFromSourceSet=function(a,b){for(var c=g.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var h=c[e];d.push({url:h.url,resolution:g.parseDescriptor(h.descriptor,b)})}return d},g.dodgeSrcset=function(a){a.srcset&&(a[g.ns].srcset=a.srcset,a.srcset="",a.setAttribute("data-pfsrcset",a[g.ns].srcset))},g.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[g.ns]&&a[g.ns].srcset&&(b=a[g.ns].srcset),b&&(d=g.getCandidatesFromSourceSet(b,c)),d},g.backfaceVisibilityFix=function(a){var b=a.style||{},c="webkitBackfaceVisibility"in b,d=b.zoom;c&&(b.zoom=".999",c=a.offsetWidth,b.zoom=d)},g.setIntrinsicSize=function(){var c={},d=function(a,b,c){b&&a.setAttribute("width",parseInt(b/c,10))};return function(e,f){var h;e[g.ns]&&!a.pfStopIntrinsicSize&&(void 0===e[g.ns].dims&&(e[g.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[g.ns].dims||(f.url in c?d(e,c[f.url],f.resolution):(h=b.createElement("img"),h.onload=function(){if(c[f.url]=h.width,!c[f.url])try{b.body.appendChild(h),c[f.url]=h.width||h.offsetWidth,b.body.removeChild(h)}catch(a){}e.src===f.url&&d(e,c[f.url],f.resolution),e=null,h.onload=null,h=null},h.src=f.url)))}}(),g.applyBestCandidate=function(a,b){var c,d,e;a.sort(g.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=g.getDpr()){e=c;break}e&&(e.url=g.makeUrl(e.url),b.src!==e.url&&(g.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+e.url):(b.src=e.url,g.curSrcSupported||(b.currentSrc=b.src),g.backfaceVisibilityFix(b))),g.setIntrinsicSize(b,e))},g.ascendingSort=function(a,b){return a.resolution-b.resolution},g.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},g.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var f=c[d];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[g.ns]&&null!==f[g.ns].srcset)&&a.push(f)}return a},g.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,f=d.length;f>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||g.matchesMedia(i))){var j=g.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},f(),e._=g,d(e)}(window,window.document,new window.Image);