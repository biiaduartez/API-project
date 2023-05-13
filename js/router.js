'use strict'

import {carregarPersonagens} from './card_personagens.js'
import {carregarLocalizacao} from './card_localizacao.js'


const routes = {

    '/': "../pages/home.html",
    '/personagens': "../pages/personagens.html",
    '/localizacao': "../pages/localizacao.html",
    
};

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    const route = routes[path]
    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    console.log(html)

    if (path == '/personagens'){
        carregarPersonagens()
    } 

    // else if (path == '/localizacao'){
    //             carregarLocalizacao()
    // } 

}

window.route = route