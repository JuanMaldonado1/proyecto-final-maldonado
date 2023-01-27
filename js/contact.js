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

const subirLS = ( clave, valor ) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}
const traerLS = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

let mensajeria = []

const Email = document.getElementById("email")
const Name = document.getElementById("name")
const Message = document.getElementById("message")
const Submit = document.getElementById("submit")
const form = document.getElementById("form")

form.onsubmit = (e) => {
    e.preventDefault()
    if (Email.value === "" || Name.value === "" || Message.value === "") {
        alert("Debes completar todos los campos.")
    } else {
        mensajeria.push({
            Email: Email.value,
            Nombre: Name.value,
            Mensaje: Message.value
        })
    }
    console.log(mensajeria)
    subirLS("Mensajes", mensajeria)
    const mensajesLS = traerLS("Mensajes")
    mensajeria = mensajesLS
}