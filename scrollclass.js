(function() {

    function scrollclass() {

    }

    if (typeof this.module == 'object') {
        module.exports = scrollclass;
    } else {
        window.scrollclass = scrollclass;
    }

})();
