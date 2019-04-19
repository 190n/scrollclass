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

coming soon
