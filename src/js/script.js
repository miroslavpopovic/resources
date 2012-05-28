/* Author: Miroslav Popovic
*/

(function(){

    $.expr[':'].external = function (obj) {
        return !(obj.href == "")
            && !obj.href.match(/^mailto:/)
            && !(obj.hostname == location.hostname);
    };

    function enableNewWindowLinks() {
        $('.main a:external, footer a:external').addClass('new-window');

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

    $('.category').each(function() {
        var items = $('.item', this),
            index = 1;
        for (var i = 0; i < items.length; i++) {
            $(items[i]).addClass('style' + index++);
            if (index > 6) {
                index = 1;
            }
        }
    });

    enableNewWindowLinks();
})();





