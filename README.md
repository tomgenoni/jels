# jels: jQuery Element Size

Media queries are fundamental feature of CSS for building reponsive websites. But as powerful as they are they are limited to measuring the window width and somtimes that's not enough. Somtimes you want to measure and respond to the width of a specific element. This plug in will allow you to do that.

## Installation

Download and include `jels-v.01.js` in your project.

On your page target any number of element -- this can be a class, ID, or any other valid selector -- like this:

    $(".foo").jels("300, 400, 500");
    $("#cat").jels("200, 550");
    $("h2").jels("100, 250");

A complete example:

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Jels</title>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
        <script src="../jels-v.01.js"></script>
        <script>
        $(document).ready(function(){
            $(".foo").jels("350, 500");
        })
        </script>
    </head>
    <body>
        <div class="foo"></div>
    </body>
    </html>

## The Syntax

Jels measures the width of the element and if that width is **less than** any of the supplied widths it will add that number as a class, prefixed with `jels-`.

So, given the following:

    $(".foo").jels("350, 500");

This element `.foo` will be measured on load and during window resizes.

- If `.foo` is less than or equal to 350px, a `jels-350` class will be applied.
- If `.foo` is greater than 350px but less than or equal to 500px, a `jels-500` will be applied.
- If `.foo` is greater than 500px no class will be added.

This means you can supply custom CSS depending on the width of the element.

    .foo {
        background: red;
    }

    .foo.jels-350 {
        background: green;
    }

    .foo.jels-500 {
        background: blue;
    }

- In this case `.foo` will be red its width is 500px or greater.
- If less than or equal to 350px its background will be green.
- If its width is between 351px and 500px the background will be blue.