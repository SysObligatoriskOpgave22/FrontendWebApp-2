// import { SERVER } from "../settings.js"
import {handleHttpErrors} from "./Utility.js"

const SERVER = "https://mindtrainer.azurewebsites.net/api/"

export function cardsHandler() {
    document.onload = fetchDeck();
    document.onload = fetchRandomDeck();
    document.onload = fetchCard(1);

}

export function resetQuiz(){
    fetchRandomDeck()
}

// returns ordered deck in json array
async function fetchDeck() {
    try {
        let cards = []
        const deck = await fetch(SERVER + "cards/")
            .then(res => handleHttpErrors(res))
            .then(deck => {
                console.log(deck)
            })
        return cards


    } catch (err) {
        console.error((err.message))
        if (err.apiError) {
            console.error("Full API error: ", err.apiError)
        }
    }
}
export function quiz(e){
    e.preventDefault()
    const card = {}
    card.person = document.getElementById("personInput").value
    card.action = document.getElementById("actionInput").value
    card.object = document.getElementById("objectInput").value
    card.card = document.getElementById("cardInput").value
    document.getElementById("testContent").innerText = JSON.stringify(card,null,2)
        .replace(/"/g,"")
        .replace(/{/,"")
        .replace(/}/,"")
        .replace(/,/g,"")
    console.log(card)

}


// section fetch RandomDeck
export async function fetchRandomDeck() {
    try {
        const randomCards = await fetch(SERVER + "cards/random")
            .then(res => handleHttpErrors(res))
            .then(randomCards => {
                console.log(randomCards)

                const personList = document.getElementById("personList")
                const actionList = document.getElementById("actionList")
                const objectList = document.getElementById("objectList")
                const cardList = document.getElementById("cardList")

                const imageContainer = document.getElementById("image")

                for (let i = 0; i < randomCards.length; i++) {
                    let personOption = document.createElement("option")
                    personOption.innerText = randomCards[i].person
                    personList.appendChild(personOption)

                    let actionOption = document.createElement("option")
                    actionOption.innerText = randomCards[i].action
                    actionList.appendChild(actionOption)

                    let objectOption = document.createElement("option")
                    objectOption.innerText = randomCards[i].object
                    objectList.appendChild(objectOption)
                    let cardOption = document.createElement("option")
                    cardOption.innerText = randomCards[i].rank + " OF " + randomCards[i].suit
                    cardList.appendChild(cardOption)
                }
                    let image = document.createElement("img")
                    image.src = randomCards[0].imageUrl
                    imageContainer.appendChild(image)
            })
        return randomCards
    } catch (err) {
        console.error(err.message)
    }
}

// returns single card form endpoint id
async function fetchCard(id) {
    try {
        const card = await fetch(SERVER + `cards/${id}`)
            .then(res => handleHttpErrors(res))
            .then(card => {
                console.log(card)
            })
        return card

    } catch (err) {
        console.error((err.message))
        if (err.apiError) {
            console.error("Full API error: ", err.apiError)
        }
    }
}
