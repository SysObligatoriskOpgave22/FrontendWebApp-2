import { renderTemplate, setActive, showPage } from "./Utility.js"

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
        case "quiz" : {
            console.log("quiz")
            document.getElementById("next").onclick = test
            break
        }
        case "matrix" : {
            console.log("matrix")
            break
        }
    }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("quiz") //Set the default page to render


function test(){
    console.log("Next card")

}
