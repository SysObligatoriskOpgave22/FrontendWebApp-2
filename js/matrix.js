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
        html += `<div class="card"><div class="padding">${card.person}</div>
                <img class="card-img" src="${card.imageUrl}"></img>
                <div class="padding border-bottom">${card.action}</div>
                <div class="padding">${card.object}</div></div>`
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