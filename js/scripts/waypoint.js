var eventChildren = $('.event').children();

eventChildren.each(function (index, elem) {
    $(elem).waypoint(function (direction) {

        if ((index + 1) % 2 !== 0 && direction == 'down') {
            $(elem).addClass('fadeInLeft').removeClass('fadeOutLeft').css('visibility', 'visible');
        }
        if ((index + 1) % 2 == 0 && direction == 'down') {
            $(elem).addClass('fadeInRight').removeClass('fadeOutRight').css('visibility', 'visible');
        }

    }, {offset: '80%'});

    $(elem).waypoint(function (direction) {

        if ((index + 1) % 2 !== 0 && direction == 'up') {
            $(elem).removeClass('fadeInLeft');
            $(elem).addClass('fadeOutLeft');
        }
        if ((index + 1) % 2 == 0 && direction == 'up') {
            $(elem).removeClass('fadeInRight');
            $(elem).addClass('fadeOutRight');
        }

    }, {offset: '80%'});
});

