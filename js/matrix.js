export function numbers(){
    let numbers = ["Ace"]
    for (let i = 2; i <=10; i++) {
     numbers.push(i);
    }
    numbers.push("jack")
    numbers.push("queen")
    numbers.push("king")
    let html ='<div class= "row">'
    numbers.forEach(number=> html+= `<div class= number>${number}</div>`)
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
    categories.forEach(category=>
         {
            if(category=="religious"){
                html+=`<div class=number>${category}</div>` 
            }
            else{ html+=`<div class=category>${category}</div>`}
           
            
            })

    html+="</div>"
    return html
 }
 


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
                <div class="person-action">action</div>
                <div class="object">Object</div></div>`
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