function createGame(player1, hora,player2){
    return`
    <li>
        <img src="./assets/icon-${player1}.svg" alt="${player1}">
        <strong>${hora}</strong>
        <img src="/assets/icon-${player2}.svg" alt="${player2}">
    </li>
    `
}

let delay = 0;
function createCard(date, day,games){
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay:${delay}s">
        <h2 class="frame">${date}<span>${day}</span></h2>
        <ul>
           ${games}
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = 
   createCard("24/11", "quinta",createGame('brazil','16:00','serbia'))+
    createCard(
        "28/11", 
        "segunda",
        createGame('uruguai','15:00','brazil') + 
        createGame('serbia','16:00','uruguai')
    )