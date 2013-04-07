// Jels: jQuery Element Sizer
// Adds class when element width is less than matching breakpoints.
// Usage: $(".foo").jels("600,700,800");

(function( $ ) {
    $.fn.jels = function(breaks) {

        // Target element we'll be testing the width of.
        var target = $(this);

        // Clean up breakpoints if they exists, otherwise ask for them.
        function breaksExist(breaks) {
            if (breaks != null) {
                var breaksArr = (breaks.replace(/\s/g, "")).split(",");
                init(target,breaksArr)
            } else {
                console.log("The jels function requires a string of comma-delmited breakpoints.");
            }
        }

        // Run size test on load as well as on window resize.
        function init(target,breaksArr) {
            doSize(target,breaksArr);
            $(window).resize(function() {
                doSize(target,breaksArr);
            })
        }

        // Removes the "jels-" class if a new match exists.
        function removePrefixClass(target) {
            $(target).removeClass (function (index, css) {
                return (css.match (/\bjels-\S+/g) || []).join(' ');
            })
        }

        function doSize(target,breaksArr) {
            var targetWidth = $(target).outerWidth();
            $(target).html(targetWidth)
            $.each(breaksArr, function(i, v) {
                if (targetWidth <= v) {
                    removePrefixClass(target)
                    $(target).addClass("jels-"+v)
                    return false;
                } else {
                    removePrefixClass(target)
                }
            });
        }

        // First test is for the presence of breakpoints.
        breaksExist(breaks);
    };
})( jQuery );
