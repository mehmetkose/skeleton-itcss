# Skeleton ITCSS

inspiring from [How I Shrank my CSS by 84kb by Refactoring with ITCSS](http://jordankoschei.com/itcss/)

## What does it mean folders

* Settings. These are preprocessor variables for later use.
* Tools. These include all the mixins and functions.
* Generic. This includes all the third-party CSS used throughout the site.
* Base. These are element styles — no classes or IDs. Base typography styles go here, as well as anything needed to style raw elements.
* Objects. I’m a fan of object-oriented CSS, though I suppose you could remove this layer if you don’t use it. This layer is mostly layout-driven, and doesn’t include anything cosmetic. I included structural objects such as `.inner` and `.container` here, as well as some oft-repeated constructs such as `.post`s and `.hero`.
* Components. This is mostly a cosmetic layer — this is where I included more specific styling instructions for objects. Without the components layer, the site would still have its structure, but would look like a gray-box wireframe.
* Trumps (no relation). These are styles that override other styles, and should be used very sparingly. Color overrides, forced floats, and text alignment classes can go here. This is the only place in your CSS that the `!important` tag is acceptable.
