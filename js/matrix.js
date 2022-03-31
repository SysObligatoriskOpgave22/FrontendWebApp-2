export function drawMatrix() {
    // Generate dummy cards
    let cards = []
    for (let i = 0; i < 52; i++) { 
        cards[i] = {name: `name ${i}`, picture: "h2"}
    }
    let rowNumber = 0;
    let html = `<div class="row row${rowNumber}">`
    
    cards.forEach((card, index)=>{
        html += `<div class="card"><div id="person-name">${card.name}</div>
                <img class="card-img" src="https://learningisliving.dk/wp-content/uploads/2021/11/pao-classic-${card.picture}.jpg"></img>
                <div id="person-action">action</div>
                <div id="object">Object</div></div>`
        if ((index+1) % 13 == 0) {
            html += "</div>"
            if ((index+1) < 53) {
                rowNumber++
                html += `<div class="row row${rowNumber}">`
            }
        }
    })
    return html
}