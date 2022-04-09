// import { SERVER } from "../settings.js"
import {getRandomInt, handleHttpErrors, makeOptions} from "./Utility.js"

const SERVER = "https://mindtrainer.azurewebsites.net/api/"

export async function cardsHandler() {
    const cards = await fetchDeck().then(res => res);
    console.log(cards)
    fetchCard(getRandomInt(42))
}

// returns ordered deck in json array
async function fetchDeck() {
    try {
        return await fetch(SERVER + "cards/", makeOptions("GET"))
            .then(handleHttpErrors)
            .then(deck => { return deck; })
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
        const card = await fetch(SERVER + `cards/${id}`, makeOptions("GET"))
            .then(res => handleHttpErrors(res))
            .then(card => {
                const image = `<img src=${card.imageUrl}>`
                const person = card.person
                const action = card.action
                const object = card.object
                const rankSuit = `${card.rank} + ${card.suit}`

                document.getElementById("image").innerHTML = image;

                document.getElementById('personCheck').addEventListener('change', e => {
                    if(e.target.checked){
                        document.getElementById('personInput').setAttribute('value', `${person}`)
                    }
                    else{
                        document.getElementById('personInput').setAttribute('value', '')
                    }
                });
                document.getElementById('actionCheck').addEventListener('change', e => {
                    if(e.target.checked){
                        document.getElementById('actionInput').setAttribute('value', `${action}`)
                    }
                    else{
                        document.getElementById('actionInput').setAttribute('value', '')
                    }
                });
                document.getElementById('objectCheck').addEventListener('change', e => {
                    if(e.target.checked){
                        document.getElementById('objectInput').setAttribute('value', `${object}`)
                    }
                    else{
                        document.getElementById('objectInput').setAttribute('value', '')
                    }
                });
                document.getElementById('cardCheck').addEventListener('change', e => {
                    if(e.target.checked){
                        document.getElementById('cardInput').setAttribute('value', `${rankSuit}`)
                    }
                    else{
                        document.getElementById('cardInput').setAttribute('value', '')
                    }
                });


            })
        return card

    } catch (err) {
        console.error((err.message))
        if (err.apiError) {
            console.error("Full API error: ", err.apiError)
        }
    }
}


export function counter (){
    let button = document.getElementById("start")
    let title = document.getElementById("title")
    let time = 0;
    console.log(time)
    let myInterval = -1;

    let startTime = Math.round(new Date().getTime()/1000)
    console.log(startTime)
    let endTime = Math.round(new Date().getTime()/1000)
    console.log(endTime)
    let finishTime = endTime - startTime;
    console.log(finishTime)

    button.addEventListener("click", function(Event){

        if (myInterval == -1){
            myInterval = setInterval(function(){
                time ++;
                title = time;
            }, 1000);
        } else {
            clearInterval(myInterval);
            myInterval = -1;
        }
        
        
    });
    
}


export function reveal(){
    const evt = new Event("change")
    let personCheck = document.getElementById("personCheck");
    let actionCheck = document.getElementById("actionCheck");
    let objectCheck = document.getElementById("objectCheck");
    let cardCheck = document.getElementById("cardCheck");

    document.getElementById("reveal").addEventListener('click', function() {
        personCheck.checked = !personCheck.checked;
        actionCheck.checked = !actionCheck.checked;
        objectCheck.checked = !objectCheck.checked;
        cardCheck.checked = !cardCheck.checked;
        personCheck.dispatchEvent(evt);
        actionCheck.dispatchEvent(evt);
        objectCheck.dispatchEvent(evt);
        cardCheck.dispatchEvent(evt);
    });

}


export function resetQuiz(){
    fetchRandomDeck()
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
                let startTime = Date.now().toFixed(2) / 1000
                    console.log(startTime)
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

                    document.getElementById("next").addEventListener('click', function(){
                        
                        var elementToRemove = document.getElementById("image")
                        elementToRemove.firstChild.remove()
                        randomCards.shift()
                        console.log(randomCards)
                        let image1 = document.createElement("img")

                        if(randomCards.length != 0){
                        image1.src = randomCards[0].imageUrl
                        imageContainer.appendChild(image1)
                    
                        }
                        else {
                            console.log("wedone")
                            let endTime = Date.now().toFixed(2) / 1000
                            console.log(endTime)
                            let finishTime = (endTime - startTime).toFixed(2);
                            console.log(finishTime)

                            document.getElementById("finishtime").innerHTML = "Finish time: " + finishTime + " seconds"
                             
                        }
                        console.log(image1)
                    })
            })
            
        return randomCards
        
    } catch (err) {
        console.error(err.message)
    }
}