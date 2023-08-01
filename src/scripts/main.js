AOS.init();

const dataDoEvento = new Date("Mar 1, 2024 17:30:00");
const timeStampDoEvento = dataDoEvento.getTime();


// função para trabalhar com intervalos
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvnto = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

     console.log(diasAteOEvento);
     console.log(horasAteOEvento);
     console.log(minutosAteOEvento);
     console.log(segundosAteOEvnto);

     document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvnto}s`;

     if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`;
     }
}, 1000);