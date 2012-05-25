/* Author: Miroslav Popovic
*/

(function(){

    $.expr[':'].external = function (obj) {
        return !(obj.href == "")
            && !obj.href.match(/^mailto:/)
            && !(obj.hostname == location.hostname);
    };

    function enableNewWindowLinks() {
        $('.main a:external').addClass('new-window');

        $('a.new-window').click(function () {
            window.open(this.href);
            return false;
        });
    }

    enableNewWindowLinks();
})();





