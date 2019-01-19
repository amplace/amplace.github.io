import $ from 'jquery';

const Time = () => {
    const date = new Date();
    const time = date.getHours();
    const greet = $('#greeting');
    const body = $('body');

    if (time >= 5 && time < 17) {
        body.removeClass('night');
        body.addClass('day');
        if (time <= 12) {
            greet.html('<i class="fas fa-sun"></i> Good Morning');
        } else {
            greet.html('<i class="fas fa-cloud-sun"></i> Good Afternoon');
        }
    } else {
        body.removeClass('day');
        body.addClass('night');
        greet.html('<i class="fas fa-cloud-moon"></i> Good Evening');
    }

};

export default Time;
