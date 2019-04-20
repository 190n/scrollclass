(function() {

    function scrollclass(triggers) {
        let created = [];

        for (let t of triggers) {
            let target = t.target,
                className = t.class,
                threshold = t.hasOwnProperty('threshold') ? t.threshold : 0,
                trigger = t.hasOwnProperty('trigger') ? t.trigger : target,
                once = t.hasOwnProperty('once') ? t.once : false,
                alternateClass = t.hasOwnProperty('alternateClass') ? t.alternateClass : null,
                invert = t.hasOwnProperty('invert') ? t.invert : false,
                margin = t.hasOwnProperty('margin') ? t.margin : '0px',
                root = t.hasOwnProperty('root') ? t.root : null;

            let options = {
                root,
                threshold,
                rootMargin: margin
            };

            let observer = new IntersectionObserver((entries, observer) => {
                let entry = entries[0],
                    shouldHaveClass = entry.isIntersecting && entry.intersectionRatio >= threshold;

                if (invert) {
                    shouldHaveClass = !shouldHaveClass;
                }

                if (shouldHaveClass) {
                    target.classList.add(className);
                    target.classList.remove(alternateClass);

                    if (once) {
                        observer.disconnect();
                    }
                } else {
                    target.classList.remove(className);
                    if (alternateClass !== null) {
                        t.target.classList.add(alternateClass);
                    }
                }
            }, options);

            observer.observe(trigger);
            created.push({
                observer,
                target,
                className,
                threshold,
                trigger,
                once,
                alternateClass,
                invert,
                margin,
                root
            });
        }

        return {
            disable() {
                for (let t of created) {
                    t.observer.disconnect();
                }
            }
        }
    }

    if (typeof this.module == 'object') {
        module.exports = scrollclass;
    } else {
        window.scrollclass = scrollclass;
    }

})();
