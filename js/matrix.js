export function drawRanks(cards){
    let html ='<div class="row ranks padding">'
    // extract ranks
    for (let i = 0; i <13; i++) {
        html+= `<div class="rank">${cards[i].rank}</div>`
    }
    html+="</div>"
    return html;
 }

 export function category(){
    let categories = []

    categories.push("sport athlete")
    categories.push("movie star")
    categories.push("controversiaal")
    categories.push("brain & beauty")
    categories.push("powerful")
    categories.push("religious")
    categories.push("top celeberity")

    let html='<div class="row">'
    const colors=["green","lightblue","lightgray","orange","purple","gray","darkgoldenrod"]
    categories.forEach((category,i)=>
        {
            if(category=="religious"){
                html+=`<div class="rank padding" style="background-color: ${colors[i]};">${category.toUpperCase()}</div>` 
            }
            else{
                html+=`<div class="category padding" style="background-color: ${colors[i]};">${category.toUpperCase()}</div>`
            }
        })

    html+="</div>"
    return html
 }
 
export function drawMatrix(cards) {
    let rowNumber = 0
    let html = `<div class="row row${rowNumber}">`
    cards[0].person = "A. Schwarzenegger" // TODO: correct at backend instead

    cards.forEach((card, index)=>{
        html += `<div class="card">
                    <div class="padding">${card.person}</div>
                    <img class="card-img" src="${card.imageUrl}"></img>
                    <div class="padding border-bottom">${card.action}</div>
                    <div class="padding">${card.object}</div>
                 </div>`
        // Draw new matrix rows if not at end
        if ((index+1) % 13 == 0 && (index+1) <= (52-13)) {
            rowNumber++
            html += `</div><div class="row row${rowNumber}">`
        }
    })
    html += "</div>"
    return html
}
// draw suits to the left
export const drawSuits = ()=>{
    const suits = ["♥","♠","♦","♣"]
    let rows = document.querySelectorAll("#pao-matrix-cards .row")
    for (var i = 0; i < rows.length; i++) {
        let element = document.createElement("div")
        element.classList.add("suit")
        element.innerText = suits[i]
        if (i % 2 == 0) element.classList.add("red") // i even
        else element.classList.add("black") // i odd
        rows[i].prepend(element)
    }
}

export const addRowDescriptions = ()=>{
    // in this order: Hearts, Spades, Diamonds, Clubs
    const suitLabels = ["LOVE, GREAT, GOOD","HUMOUROUS, ABSURD","RICH, STYLISH, BLING","COOL, SERIOUS, CRAZY"]
    const suitDescriptions = ["People who are likable.","People who makes you smile or wrinkle your nose.","People who like to shine.","People with an itch in the body or brain."]
    let rows = document.querySelectorAll("#pao-matrix-cards .row")
    for (var i = 0; i < rows.length; i++) {
        let element = document.createElement("div")
        element.classList.add("row-desc")
        element.innerHTML = `<div class="mb-4">${suitLabels[i]}</div><div>${suitDescriptions[i]}</div>`
        rows[i].append(element)
    }
}