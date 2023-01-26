let carrito = []

const containerCards = document.getElementById("containerCards")

fetch("../js/sneakers.json")
    .then(response => response.json())
    .then(data => {
        
        data.forEach( e => {
        div = document.createElement("div")
        div.innerHTML += `
        <div class="card-background">
        <div class="price-card">
            <p class="sneaker-price">$${e.precio}</p>
        </div>
        <button class="agregar-carrito" id="${e.id}"><p>Agregar al carrito</p><img src="../assets/svg/carrito-de-compras.svg" class="cart-icon"></button>
        <img src=".${e.img}" class="card-image" alt="${e.producto}">
        <p class="sneaker-name">${e.producto}</p>
        </div>
        `
        containerCards.appendChild(div)
    })
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
                    const productoABuscar = data.find ( sneaker => {
                        return sneaker.id === Number(e.id)
                    })
                    subirACarrito ( carrito, productoABuscar )
                    subirLS("Tu carrito", carrito)
                    notificationNumber.innerText = carrito.length
                }
            })
        }
        agregarAlCarrito()
        const carritoSeleccionados = traerLS("Tu carrito") || []
        carrito = carritoSeleccionados
    })

const subirLS = ( clave, valor ) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const subirACarrito = ( array, value ) => {
    array.push(value)
}

const traerLS = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

// modo oscuro
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