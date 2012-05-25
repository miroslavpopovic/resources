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

    $('.item li').click(function (e){
        var a = $(this).children('a');
        if (a) {
            a[0].click();
            e.stopPropagation();
        }
    });

    enableNewWindowLinks();
})();





