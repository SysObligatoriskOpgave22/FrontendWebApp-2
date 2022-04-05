import { renderTemplate, setActive, showPage } from "./Utility.js"
import { category, drawMatrix, numbers } from "./matrix.js";
import {cardsHandler, fetchRandomDeck, quiz} from "./fetchACard.js"

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
            document.getElementById("pao-matrix-cards").innerHTML = drawMatrix()
            document.getElementById("matrix-headers").innerHTML=numbers()
            document.getElementById("matrix-category").innerHTML=category()
        break
        }
        case "quiz" : {
            console.log("quiz")
            document.getElementById("submit").onclick = quiz
            fetchRandomDeck()
            break
        }
    }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("quiz") //Set the default page to render


function test(){
    console.log("Next card")

}
