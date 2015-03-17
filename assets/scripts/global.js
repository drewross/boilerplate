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
        APP.DetectWindowHeight.init();
        APP.TabToggle.init();
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
            }, 400);

            $("a[target!='_blank']").on('click touchstart:not(touchmove)', function(e) {
                e.preventDefault();
                linkLocation = this.href;
                $('.js-pageTransition').removeClass('pageLoaded');
                
                window.setTimeout(redirectPage, 800);
                $('body').removeClass('mobileMenuIsOpen');

                $("html, body").delay(100).animate({ scrollTop: 0 }, 700);
                return false;
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
        var $clickFunciton = $('.js-trigger');
        if ( ! $clickFunciton.length ) {
            return;
        }
        this.$clickFunciton = $clickFunciton;
        this.bind();
    },

    bind: function() {
        $('.js-trigger').on('click touchstart:not(touchmove)', function() {
            var $trigger = $(this).attr('data-target');
            var $classes = $(this).attr('data-addClass');
            var $this = $("#" + $trigger);

            if( $this.hasClass('isActive') ) {
                $this.removeClass('isActive');
            } else {
               $this.addClass('isActive'); 
            }

            if( $('body').hasClass($classes) ) {
                $('body').removeClass($classes);
            } else {
               $('body').addClass($classes); 
            }
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
        if ( ! $detectWindowHeight.length ) {
            return;
        }
        this.$detectWindowHeight = $detectWindowHeight;
        this.bind();
    },

    bind: function() {

        $( document ).ready(function() {
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
Tabs
Toggles the Tab triggers and target visibility.
-------------------------------------------------------------------- */

APP.TabToggle = {
    $tabList: undefined,
    $tabTrigger: undefined,
    $tabTarget: undefined,

    init: function() {
        var $tabList = $('.js-tabList > *');
        var $tabTrigger = $('.js-tabList .tab-tab');
        var $tabTarget = $('.js-tabList .tab-bd');
        if( ! $tabList.length ) {
            return;
        }
        this.$tabList = $tabList;
        this.$tabTrigger = $tabTrigger;
        this.$tabTarget = $tabTarget;
        this.bind();
    },

    bind: function() {
        this.$tabTrigger.on('click touchstart:not(touchmove)', function() {
            $(this).parent().siblings().removeClass('isOpen');
            $(this).parent().addClass('isOpen');
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
        if ( ! $revolver.length ) {
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