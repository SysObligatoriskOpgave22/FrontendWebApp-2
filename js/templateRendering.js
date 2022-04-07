import { makeOptions, renderTemplate, setActive, showPage } from "./Utility.js"
import { category, drawMatrix, drawRanks, drawSuits } from "./matrix.js";
import { apiRoot } from "./settings.js";
import {cardsHandler, quiz, resetQuiz, reveal} from "./fetchACard.js"

function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
        //Here you can execute JavaScript for the selected page
        case "about" : {
            console.log("home")
            break
        }
        case "matrix" : {
            // Fetch cards from API
            fetch(`${apiRoot}/cards`,makeOptions("get")).then(res=>res.json()).then(c=>{
                document.getElementById("card-ranks").innerHTML=drawRanks(c)
                document.getElementById("pao-matrix-cards").innerHTML = drawMatrix(c)
            }).then(()=>drawSuits())
            document.getElementById("card-categories").innerHTML=category()

        break
        }
        case "quiz" : {
            console.log("quiz")
            cardsHandler()
            document.getElementById("reveal").onclick = reveal
            document.getElementById("next").onclick = test
            document.getElementById("reset").onclick = resetQuiz()
            document.getElementById("submit").onclick = quiz
            // fetchRandomDeck()
            break
        }
    }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("quiz") //Set the default page to render


function test(){
    console.log("Next card")

}