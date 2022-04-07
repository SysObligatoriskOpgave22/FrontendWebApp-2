import { renderTemplate, setActive, showPage } from "./Utility.js"
import { category, drawMatrix, numbers } from "./matrix.js";
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
            document.getElementById("pao-matrix-cards").innerHTML = drawMatrix()
            document.getElementById("card-values").innerHTML=numbers()
            document.getElementById("card-categories").innerHTML=category()
        break
        }
        case "quiz" : {
            console.log("quiz")
            cardsHandler()
            document.getElementById("reveal").onclick = reveal
            //document.getElementById("next").onclick = nextImage
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