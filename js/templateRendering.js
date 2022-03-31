import { renderTemplate, setActive, showPage } from "./Utility.js"
import { drawMatrix } from "./matrix.js";

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
            break
        }
    }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("matrix") //Set the default page to render

