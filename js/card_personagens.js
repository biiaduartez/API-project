'use strict'

import { getPersonagens } from './endpoints/personagens.js'

const createCards = (dados) => {
    const card = document.createElement('card-dados')
    card.setAttribute('name', dados.name)
    card.setAttribute('status', dados.status)
    card.setAttribute('species', dados.species)
    card.setAttribute('gender', dados.gender)
    card.setAttribute('photo', dados.image)
     return card
}

export const carregarPersonagens = async () => {
    let personagens = await getPersonagens()
    let card = document.querySelector('.card-personagens')
    let listPersonagens = personagens.results.map(createCards)
    card.replaceChildren(...listPersonagens)

}

