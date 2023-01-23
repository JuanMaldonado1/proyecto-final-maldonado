const traerLS = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

let carrito = traerLS("Tu carrito")
const contador = document.getElementById("notificationNumber")
const cards = ( array ) => {
    const reduce = array.reduce( (acc, e ) => {
        return acc + `
        <div class="card-background">
            <div class="price-card">
                <p class="sneaker-price">$${e.precio}</p>
            </div>
            <button class="agregar-carrito" id="${e.id}"><p>Sacar del carrito</p><img src="../assets/svg/carrito-de-compras.svg" class="cart-icon"></button>
            <img src=".${e.img}" class="card-image" alt="${e.producto}">
            <p class="sneaker-name">${e.producto}</p>
        </div>
        `
    }, "")
    return reduce
}
const containerCards = document.getElementById("containerCards")
containerCards.innerHTML = cards(traerLS("Tu carrito"))

const quitarCarrito = () => {
    const seleccionCarrito = document.querySelectorAll(".agregar-carrito")
    seleccionCarrito.forEach( e => {
        e.onclick = () => {          
        const filtrar = carrito.filter( (filtrado, i) => {
            return filtrado.id != Number(e.id)
        })
        console.log(filtrar)
        carrito = filtrar
        localStorage.setItem("Tu carrito", JSON.stringify(carrito)) 
        containerCards.innerHTML = cards(carrito) 
        quitarCarrito()  
    }
    })
}
quitarCarrito()