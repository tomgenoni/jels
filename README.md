# Jels: Media Queries for Elements

Jels -- jQuery Element Size -- is a plug-in that injects classes to elements based on breakpoints. This allows for responsive design based not just on the width of the screen but the size of indivdual elements.

Specifically, Jels measures the width an element and if its width is **less than** any of the supplied breakpoints it will add that value as a class, prefixed with `jels-`.

## Installation

Download and include `jels-v.01.js` in your project.

On your page target any number of elements by class, ID, or any other valid selector.

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
        <script src="jels-v.01.js"></script>
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

You first provide the target element and then as many breakpoints as you need.

    $("[target-element]").jels("[breakpoint-1], [breakpoint-2], ... ")

For, example:

    $(".foo").jels("350, 500");

This element `.foo` will be measured on load and during window resizes. If at any point `.foo` is...

- ...less than or equal to 350px, a `jels-350` class will be applied.
- ...greater than 350px but less than or equal to 500px, a `jels-500` will be applied.
- ...greater than 500px no class will be added.

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

## Demo

Download or clone this repond and try out the [demo](https://github.com/tomgenoni/jels/blob/master/demo/index.html) to see an example in action.