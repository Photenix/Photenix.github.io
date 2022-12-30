async function proyect() {
    let data = await fetch( "./components/dB.json")
    return await data.json()
}


function addCard( object ) {
    const cardData = `<div class="card">
    <img src="${ object.img }" alt="">
    <h3>${ object.name }</h3>
    <div>
        <a href="${ object.url }">
            <button class="card-button">
                Ir a pagina</button>
        </a>
    </div>
    
</div>`

    const web = document.getElementsByClassName("web")[0]

    web.innerHTML += cardData
}


proyect()
    .then( e => {
        e.forEach( card => {
            addCard(card)
        });
    })