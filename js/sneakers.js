let carrito = []

const containerCards = document.getElementById("containerCards")
const contador = document.getElementById("notificationNumber")
const cards = ( array ) => {
    const reduce = array.reduce( (acc, e ) => {
        return acc + `
        <div class="card-background">
            <div class="price-card">
                <p class="sneaker-price">$${e.precio}</p>
            </div>
            <button class="agregar-carrito" id="${e.id}"><p>Agregar al carrito</p><img src="../assets/svg/carrito-de-compras.svg" class="cart-icon"></button>
            <img src=".${e.img}" class="card-image" alt="${e.producto}">
            <p class="sneaker-name">${e.producto}</p>
        </div>
        `
    }, "")
    return reduce
}
containerCards.innerHTML = cards(sneakers)

const subirLS = ( clave, valor ) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const subirACarrito = ( array, value ) => {
    array.push(value)
}

const traerLS = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

const agregarAlCarrito = () => {
    const seleccionCarrito = document.querySelectorAll(".agregar-carrito")
    const notificationNumber = document.getElementById("notificationNumber")
    seleccionCarrito.forEach( e => {
        e.onclick = () => {
            notificationNumber.style.display = "block"
            Toastify({
                text: "Agregado a tu carrito.",
                duration: 2000,
                close: true,
                style: {
                    background: "#000"
                }
            }).showToast();
            const productoABuscar = sneakers.find ( sneaker => {
                return sneaker.id === Number(e.id)
            })
            subirACarrito ( carrito, productoABuscar )
            subirLS("Tu carrito", carrito)
            contador.innerText = carritoSeleccionados.length
        }
    })
}
agregarAlCarrito()

const carritoSeleccionados = traerLS("Tu carrito") || []
carrito = carritoSeleccionados
