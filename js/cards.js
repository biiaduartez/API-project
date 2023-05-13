'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })

        this.name = ''
        this.photo = null
        this.status = ''
        this.species = ''
        this.gender = ''

        this.type = ''
        this.dimension = ''

    }

    static get observedAttributes() {
        return ['name', 'photo', 'status', 'species', 'gender', 'type', 'dimension']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent =
            `
        *{
             margin: 0;
             padding: 0;
             box-sizing: border-box;
         }

         .card {
            
            width: 100%;
            height: 150px;
            display: flex;
            flex-wrap: wrap;
                background-color:green;
        }

        .photo{
            display:flex;
            margin-top: 5px;
            width: 150px;
            height: 90%;
            border: 5px solid #BBEC00;
            background-image:url(${this.photo});
            background-size:cover;
            padding-left: 20px;
            padding-right: 20px;
        }

         .name{
            text-align: center;
            justify-content: center;
            align-items: center;
            display:flex;
            font-family: 'Mulish';
            font-size: 20px;
            width: 100px;
            height: 150px;
            padding-left: 5px;
            color: #fff;
            gap:10px;
        }

        species {
            display:flex;
            text-align: left;
            color: pink;
            font-family: 'Mulish';
            font-weight: 200;
            
            gap:50px
        }
`
        return css

    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const photo = document.createElement('div')
        photo.classList.add('photo')

        const name = document.createElement('h2')
        name.classList.add('name')
        name.textContent = `${this.name}`

        const status = document.createElement('p')
        status.classList.add('status')
        status.textContent = `${this.status}`
        
        const species = document.createElement('p')
        species.classList.add('species')
        species.textContent = `${this.species}`
        
        const gender = document.createElement('p')
        gender.classList.add('gender')
        gender.textContent = `${this.gender}`

        

        const dimension = document.createElement('p')
        dimension.classList.add('dimension')
        dimension.textContent = `${this.dimension}`

        const type = document.createElement('p')
        type.classList.add('type')
        type.textContent = `${this.type}`
        

        card.append(name, photo, status, species, gender,dimension, type)

        return card
    }


}

customElements.define('card-dados', card)
