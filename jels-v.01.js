// Jels: jQuery Element Sizer
// Adds class when element width is less than matching breakpoints.
// Usage: $(".foo").jels("600,700,800");

(function( $ ) {
    $.fn.jels = function(breaks) {

        // el is the element we'll be testing the width of.
        var el = $(this);

        // Clean up breakpoints if they exist, otherwise ask for them.
        function breaksExist(breaks) {
            if (breaks != null) {
                var breaksArr = (breaks.replace(/\s/g, "")).split(",");
                init(el,breaksArr)
            } else {
                console.error("Paramter required: The jels function is missing a string of comma-delmited breakpoints.");
            }
        }

        // Run size test on load as well as on window resize.
        function init(el,breaksArr) {
            doSize(el,breaksArr);
            $(window).resize(function() {
                doSize(el,breaksArr);
            })
        }

        // Removes the "jels-" class if a new match exists.
        function removePrefixClass(el) {
            $(el).removeClass (function (index, css) {
                return (css.match (/\bjels-\S+/g) || []).join(' ');
            })
        }

        // Does the testing to see if element has a match in the array.
        function doSize(el,breaksArr) {
            var el_width = $(el).outerWidth();
            // Go through each breakpoint.
            $.each(breaksArr, function(i, v) {
                // if the element width is less than the breakpoint value...
                if (el_width <= v) {
                    //...and if it doesn't already have the correct class, add it.
                    if ( !(el.hasClass("jels"-v) ) ) {
                        removePrefixClass(el)
                        $(el).addClass("jels-"+v)
                    }
                    return false;
                } else {
                    // If there's no match (out of range), remove the class if it exists.
                    removePrefixClass(el)
                }
            });
        }

        // First test for the presence of breakpoints.
        breaksExist(breaks);
    };
})( jQuery );
