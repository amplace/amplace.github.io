import $ from 'jquery';

const Time = () => {
    const date = new Date();
    const time = date.getHours();
    const greet = $('#greeting');
    const dayTime = $('.day-time');
    const body = $('body');
    let isDay = true;

    const updateColors = () => {
        if (isDay) {
            dayTime.removeClass('night');
            dayTime.addClass('day');
        } else {
            dayTime.removeClass('day');
            dayTime.addClass('night');
        }
    }

    if (time >= 5 && time < 17) {
        isDay = true;
        updateColors();

        if (time <= 12) {
            greet.html('<i class="fas fa-sun"></i> Good Morning');
        } else {
            greet.html('<i class="fas fa-cloud-sun"></i> Good Afternoon');
        }
    } else {
        isDay = false;
        updateColors();
        greet.html('<i class="fas fa-cloud-moon"></i> Good Evening');
    }

    $('#day-time').on('click', function (e) {
        isDay = !isDay;
        updateColors();
    });

};

export default Time;
