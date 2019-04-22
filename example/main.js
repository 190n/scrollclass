// import with ES6 syntax
import scrollclass from 'scrollclass';

scrollclass([
    {
        target: document.getElementById('target1'),
        trigger: document.getElementById('trigger1'),
        class: 'active',
        threshold: 1,
        root: document.getElementById('fakeViewport')
    },
    {
        target: document.getElementById('target2'),
        trigger: document.getElementById('trigger2'),
        class: 'active',
        threshold: 0.5,
        root: document.getElementById('fakeViewport')
    },
    {
        target: document.getElementById('target3'),
        trigger: document.getElementById('trigger3'),
        class: 'blue',
        alternateClass: 'green',
        root: document.getElementById('fakeViewport')
    },
    {
        target: document.getElementById('target4'),
        trigger: document.getElementById('trigger4'),
        class: 'active',
        once: true,
        root: document.getElementById('fakeViewport'),
        // margin expands the bounding box of the viewport.
        // Here, a margin of -50px shrinks the bounding box so that the trigger
        // element must be 50px past the boundary before the class will be added
        // to the target element.
        margin: '-50px'
    }
]);


// This code makes it so that you can see even trigger elements that are outside
// of the fake viewport and is unrelated to Scrollclass.

document.getElementById('fakeTriggers').innerHTML = document.getElementById('triggers').innerHTML;

let fakeViewport = document.getElementById('fakeViewport');
    fakeTriggers = document.getElementById('fakeTriggers');

fakeTriggers.style.top = '-' + fakeViewport.scrollTop + 'px';
fakeViewport.addEventListener('scroll', () => {
    fakeTriggers.style.top = '-' + fakeViewport.scrollTop + 'px';
}, false);
