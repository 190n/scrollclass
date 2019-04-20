scrollclass
===========

Scrollclass is a small library for adding and removing classes to elements as
elements come into and out of the viewport. These classes would typically be
used to trigger CSS3 animations. It uses the
[IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
and will not work on browsers that do not provide this API. Since it's still
relatively new, it's recommended to use a polyfill
[like this one](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)
to provide support to older browsers.

Installation
------------

Download [scrollclass.js](https://raw.githubusercontent.com/190n/scrollclass/master/scrollclass.js)
and include it in HTML:

```html
<script src="path/to/scrollclass.js"></script>
```

If you are using a bundler like webpack, you can also install it through npm:

```bash
$ npm install --save scrollclass
```

and import it:

```js
// ES6
import scrollclass from 'scrollclass';

// require()
const scrollclass = require('scrollclass');
```

Usage
-----

See [test.html](https://github.com/190n/scrollclass/blob/master/test.html) for a
complete example.

```js

// scrollclass accepts a list of triggers
let sc = scrollclass([
    {
        // element to apply the class to
        target: document.getElementById('target'),
        // which class to add or remove
        class: 'active',
        // it will have the class when at least 75% of the trigger element is visible
        // default: 0
        threshold: 0.75,
        // which element to check visibility of
        // if not specified, the target element is used
        trigger: document.getElementById('trigger'),
        // once = true: once the target element is first given the class, it will never be removed
        // once = false (default): the class will be removed when the condition is no longer met
        once: false,
        // class the target element should have when the trigger is not visible
        // by default, no class will be added (the main class will just be removed)
        alternateClass: 'inactive',
        // inverts all operations
        // default: false
        invert: false,
        // margin to add around the trigger element's bounding box
        // specified the same way as the CSS margin property (top right bottom left)
        // default: '0px'
        margin: '20px',
        // root element that visibility is computed relative to
        // must be an ancestor of the trigger element
        // default: browser viewport
        root: document.getElementById('rootElem')
    } // can specify as many more as you want, or make multiple calls to scrollclass
]);

// disable all triggers without changing classes on any target elements
sc.disable();
```
