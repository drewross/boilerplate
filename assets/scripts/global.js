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
            setTimeout(function() {
               $('.js-pageTransition').addClass('pageLoaded'); 
            }, 100);

            $("a[target!='_blank']").on('click touchstart:not(touchmove)', function(e) {
                e.preventDefault();
                if( $(this).hasClass('no-trans') ) return;

                linkLocation = this.href;

                $('.js-pageTransition').removeClass('pageLoaded');
                window.setTimeout(redirectPage, 200);

                $('body').removeClass('mobileMenuIsOpen');

                // $("html, body").delay(100).animate({ scrollTop: 0 }, 700);
                // return false;
            });
            function redirectPage() {
                window.location = linkLocation;
            }
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
        $('#revolver1').playRecord(true, true, 4000);
        $('#revolver2').playRecord(false, false, 8000);
    }
};

}(jQuery, PHDL));