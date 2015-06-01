(function($) {
    $.fn.playRecord =  function(autoPlay, pagination, trackLength) {
        var instance = $(this);
        $revolveSpeed = trackLength;


        // Make the first slide active
        instance.find('.revolver__slides > *').first().addClass('isActive');

        var $numSlides = instance.find('.revolver__slides > *').length;

        function origPos() {
            instance.find('.revolver__slides > *').each(function() {
                var $slideNum = $(this).index();
                $(this).css( "left", $slideNum + "00%" );
            });
        }
        origPos();

        function updatePos() {
            instance.find('.revolver__slides > *').each(function() {
                var $pos = $(this)[0].style.left;
                var $newPos = ( parseInt($pos) - 100) + "%";
                $(this).css( "left", $newPos );
            });
        }

        function updatePosBack() {
            instance.find('.revolver__slides > *').each(function() {
                var $pos = $(this)[0].style.left;
                var $newPos = ( parseInt($pos) + 100) + "%";
                $(this).css( "left", $newPos );
            });
        }

        function updatePosLast() {
            instance.find('.revolver__slides > *').each(function() {
                var $slidePos = $(this).index() + 1;
                var $reversedIndex = ( ($numSlides) - $slidePos ) + "00";
                var $newPos = - parseInt($reversedIndex) + "%";
                $(this).css( "left", $newPos );
            });
        }

        function customPos(number) {
            var $dest = number;
            instance.find('.revolver__slides > *').each(function() {
                var $slidePos = $(this).index();
                var $newPos = ( parseInt($slidePos) - $dest) + "00%";
                $(this).css( "left", $newPos );
            });
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
                origPos();
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