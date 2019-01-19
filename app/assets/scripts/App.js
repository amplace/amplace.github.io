import $ from 'jquery';
import Menu from './modules/Menu';
import ScrollSpy from './modules/Scroll';
import Time from './modules/Time';

const menu = new Menu();
ScrollSpy(menu);
Time();
