const pararCrono = document.getElementById('pararCrono');
const iniPauCrono = document.getElementById('iniciar-pausar');
const segundosEsfera = document.getElementById('segundos-esfera');


let pararCronoInterval;
let tiempoTranscu = 0;

const playPause = () => {
    const estPausado = !iniPauCrono.classList.contains('iniciar');
    if (estPausado) {
        iniPauCrono.classList.add('iniciar');
        comenzar();
    } else {
        iniPauCrono.classList.remove('iniciar');
        pausar();
    }
}

const pausar = () => {
    segundosEsfera.style.animationPlayState = 'paused';
    clearInterval(pararCronoInterval);
}

const stop = () => {
    segundosEsfera.style.transform = 'rotate(-90deg) translateX(60px)'
    segundosEsfera.style.animation = 'none';
    iniPauCrono.classList.remove('iniciar');
    tiempoTranscu = 0;
    clearInterval(pararCronoInterval);
    pararCrono.textContent = '00:00';
}

const comenzar = () => {
    segundosEsfera.style.animation = "rotacion 60s linear infinite";
    let comenzarTiempo = Date.now() - tiempoTranscu;
    segundosEsfera.style.animationPlayState = 'iniciar';
    pararCronoInterval = setInterval(() => {
        tiempoTranscu = Date.now() - comenzarTiempo;
        pararCrono.textContent = tiempoCalculado(tiempoTranscu);
    }, 1000)
}

const tiempoCalculado = tiempoTranscu => {
    const total_seg = Math.floor(tiempoTranscu / 1000);
    const total_min = Math.floor(total_seg / 60);

    const display_seg = (total_seg % 60).toString().padStart(2, '0');
    const display_min = total_min.toString().padStart(2, '0');

    return `${display_min}:${display_seg}`
}