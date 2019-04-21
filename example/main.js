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
        margin: '-50px'
    }
]);

document.getElementById('fakeTriggers').innerHTML = document.getElementById('triggers').innerHTML;

let fakeViewport = document.getElementById('fakeViewport');
    fakeTriggers = document.getElementById('fakeTriggers');

fakeTriggers.style.top = '-' + fakeViewport.scrollTop + 'px';
fakeViewport.addEventListener('scroll', () => {
    fakeTriggers.style.top = '-' + fakeViewport.scrollTop + 'px';
}, false);
