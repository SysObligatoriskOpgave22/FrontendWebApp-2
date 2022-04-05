// import { SERVER } from "../settings.js"
import { handleHttpErrors } from "./Utility.js"

const SERVER = "http://localhost:8080/"

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

// returns random deck in json array
async function fetchRandomDeck() {
    try {
        const randomCards = await fetch(SERVER + "cards/random")
            .then(res => handleHttpErrors(res))
            .then(randomCards => {
                console.log(randomCards)
            })
        return randomCards

    } catch (err) {
        console.error((err.message))
        if (err.apiError) {
            console.error("Full API error: ", err.apiError)
        }
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
