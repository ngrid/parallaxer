/**
 * Created by grimm on 2/18/14.
 */

$(document).ready(function () {
    $('.parallax').each(function () {
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var yPos1 = -(scroll / 2);
            var yPos2 = -(scroll / 3);
            var yPos3 = -(scroll / 5);

            // Put together our final background position
            var coords1 = '50% ' + yPos1 + 'px';
            var coords2 = '50% ' + yPos2 + 'px';
            var coords3 = '50% ' + yPos3 + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords1 + ',' + coords2 + ',' + coords3});
        });
    });
});
