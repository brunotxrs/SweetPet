import { utilsCarousel, utilScroll  } from './utils.js';
import { listingHeader } from "./header.js";
import {  listingForm } from './footer.js'

export function initApp(){
    
    // método de clicks no elementos do menus
    listingHeader();

    // métodos pra diferentes carrousels de imagens 
    utilsCarousel('slide', true);
    utilsCarousel('cont_slide', 'visible');
    utilsCarousel('cont_slide','visible', 5000,'cont_slide');

    // condição para exibição do metodo
    if(window.innerWidth  < 1024){
        utilsCarousel('logo-parceiro', 'visible');
    }

    // métodos de scroll ao realizar rolagem na tela métodos sao ativados 
    utilScroll('btnTopo');
    utilScroll('header-fixed', 'apply-header-fixed');

    // metodo de checagem do formulário do email
    listingForm();

    
}