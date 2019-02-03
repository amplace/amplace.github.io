import $ from 'jquery';
import Menu from './modules/Menu';
import ScrollSpy from './modules/Scroll';
import Time from './modules/Time';

const menu = new Menu();
ScrollSpy(menu);
Time();

$(".thumbnail-container").click(function () {
    let url = $(this).find('a')[0];
    window.open(url, '_blank');
    return false;
});
