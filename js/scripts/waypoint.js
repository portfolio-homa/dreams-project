var about = $('.about');

about.waypoint(function (direction) {
    if (direction == 'down') {
        about.addClass('fadeInUp');
    } else {
        about.removeClass('fadeInUp');
    }
}, {offset: '75%'});
