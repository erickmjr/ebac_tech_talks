AOS.init();

const dataDoEvento = new Date('May 25, 2025 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;
    const segEmMs = 1000;
    
    const diasAteEvento = Math.floor(distanciaAteEvento/ diaEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minEmMs) / segEmMs);

    console.log(diasAteEvento)
    console.log(horasAteEvento)
    console.log(minutosAteEvento)
    console.log(segundosAteEvento)

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}min ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);

        document.getElementById('contador').innerHTML = "Evendo expirado";
    }
}, 1000)