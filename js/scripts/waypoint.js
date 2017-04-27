var eventItem = $('.event__item'),
    eventChildren = $('.event').children(eventItem);

eventChildren.each(function (index, elem) {
    eventItem.waypoint(function (direction) {

        if ((index + 1) % 2 !== 0 && direction == 'down') {
            $(elem).addClass('fadeInLeft');
        }
        if ((index + 1) % 2 == 0 && direction == 'down') {
            $(elem).addClass('fadeInRight');
        }
        if (direction !== 'down') {
            $(elem).removeClass('fadeInLeft');
            $(elem).removeClass('fadeInRight');
        }

    }, {offset: '75%'});
});

