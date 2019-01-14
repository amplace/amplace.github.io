import $ from 'jquery';

class Menu {
    constructor() {
        this.navbar = $(".navbar");
        this.menuIcon = $("#menu-icon");
        this.menuContent = $("#main-menu");
        this.menuLinks = this.menuContent.find(".navbar__link");
        this.isExtended = false;
        this.events();
    }

    events() {
        window.onresize = (() => {
            if (($(window).width()) >= 600) {
                this.hideTheMenu();
            }
        }).bind(this);
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.menuLinks.click(this.hideTheMenu.bind(this));
    }

    updateColor() {
        if ($(window).scrollTop() === 0 && !(this.isExtended)) {
            this.navbar.css('background-color', 'rgba(0, 77, 99,0)');
        } else this.navbar.css('background-color', 'rgba(0, 77, 99,0.85)');
    }

    toggleTheMenu() {
        this.isExtended = !(this.isExtended);
        this.navbar.toggleClass("navbar--is-extended");
        this.menuContent.toggleClass("navbar__menu--is-visible");
        this.menuIcon.toggleClass("navbar__menu-icon--close-x");
        this.updateColor();
    }

    hideTheMenu() {
        this.isExtended = false;
        this.navbar.removeClass("navbar--is-extended");
        this.menuContent.removeClass("navbar__menu--is-visible");
        this.menuIcon.removeClass("navbar__menu-icon--close-x");
        this.updateColor();
    }

}


export default Menu;
