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
                let link = $('#' + i + '-link');
                let block = $('#' + i + '-section');
                let inside = $('#' + i + '-animate');
                if (link.length) {
                    $('.navbar__link--active').removeClass('navbar__link--active');
                    link.addClass('navbar__link--active');
                }

                if (!block.hasClass('reveal')) {
                    block.addClass('reveal');
                    if (i === 'count') {
                        $('.count-up').each(function () {
                            $(this).prop('Counter', 0).animate({
                                Counter: $(this).text()
                            }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });
                        });

                        $('.count-down').each(function () {
                            $(this).prop('Counter', 2019).animate({
                                Counter: $(this).text()
                            }, {
                                duration: 1500,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });
                        });
                    }
                }

                if (!inside.hasClass('animate')) {
                    inside.addClass('animate');
                }

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
