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
            <button class="sacar-carrito" id="${e.id}"><img src="../assets/svg/eliminar.svg"></button>
            <button class="agregar-carrito" id="${e.id}"><p>¡Comprar!</p><img src="../assets/svg/carrito-de-compras.png" class="cart-icon"></button>
            <img src=".${e.img}" class="card-image" alt="${e.producto}">
            <p class="sneaker-name">${e.producto}</p>
        </div>
        `
    }, "")
    return reduce
}
const containerCards = document.getElementById("containerCards")
containerCards.innerHTML = cards(traerLS("Tu carrito"))

const comprar = () => {
    const comprarBtn = document.querySelectorAll(".agregar-carrito");
    comprarBtn.forEach( e => {
        e.onclick = () => {
            const alerta = confirm("¿Seguro quiere comprar este producto?")
            if (alerta === true) {
                alert("¡Comprado!")
            } else {
                alert("Compra cancelada.")
            }
        }
    })
}
comprar()
const quitarCarrito = () => {
    const seleccionCarrito = document.querySelectorAll(".sacar-carrito")
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

const colorDelSistema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro';
const deslizante = document.getElementById('slider');

const seleccionarTema = (tema) => {
    document.documentElement.setAttribute('tema-colores', tema);
    localStorage.setItem('tema', tema);
}

deslizante.addEventListener('click', ()  => {
    let cambiarTema = localStorage.getItem('tema') === 'oscuro' ? 'claro' : 'oscuro';
    seleccionarTema(cambiarTema);
});

seleccionarTema(localStorage.getItem('tema') || colorDelSistema);