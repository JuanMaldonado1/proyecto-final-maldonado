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