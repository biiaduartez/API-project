'use strict'

export const getLocalizacao = async (location) => {

    const url = `https://rickandmortyapi.com/api/location`

    const response = await fetch(url)

    const data = await response.json()

    return {
        ...data
    }
}