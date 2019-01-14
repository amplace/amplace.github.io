import $ from 'jquery';
import Menu from './Menu';


const ScrollSpy = (thisMenu) => {
    const menu = thisMenu;
    const section = $('.section__anchor');
    const sections = {};
    let i = 0;

    Array.prototype.forEach.call(section, e => sections[e.id] = e.offsetTop);

    window.onscroll = () => {
        menu.updateColor();
        let scrollPosition = document.documentElement.scrollTop || $('body').scrollTop;
        for (i in sections) {
            if (sections[i] <= scrollPosition + ($(window).height() / 2)) {
                $('.navbar__link--active').removeClass('navbar__link--active');
                $('#' + i + '-link').addClass('navbar__link--active');
            }
        }
    };

    $(() => {
        $('.link').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 35
            }, 500, 'linear');
        });
    });
};


export default ScrollSpy;
