import './slider';
import modals from './modules/modals';
import tabs from "./modules/tabs";
import formHandler from "./modules/formsHandler";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    formHandler();
});
