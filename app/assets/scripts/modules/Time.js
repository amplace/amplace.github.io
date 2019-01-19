import $ from 'jquery';

const Time = () => {
    const date = new Date();
    const time = date.getHours();
    const greet = $('#greeting');

    if (time >= 5 && time <= 12) {
        greet.html('<i class="fas fa-sun"></i> Good Morning');
    } else if (time > 12 && time <= 5) {
        greet.html('<i class="fas fa-cloud-sun"></i> Good Afternoon');
    } else {
        greet.html('<i class="fas fa-cloud-moon"></i> Good Evening');
    }

};

export default Time;
