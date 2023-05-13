'use strict'

import { getLocalizacao } from './endpoints/location.js'
// import { getPersonagens } from './endpoints/personagens'

const createCards = (dados) => {
    const card = document.createElement('card-dados')
    card.setAttribute('name', dados.name)
    card.setAttribute('photo', dados.image)
    card.setAttribute('gender', dados.dimension)
    card.setAttribute('photo', dados.type)
     return card
}

export const carregarLocalizacao = async () => {
    let personagens = await getLocalizacao()
    let card = document.querySelector('.card-local')
    let listPersonagens = personagens.location.map(createCards)
    card.replaceChildren(...listPersonagens)
}



