const form = document.querySelector('.formulario');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('preventDefault OK');
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        resultado('Peso inválido', false);
        return;
    }
    if (!altura){
        resultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso,altura);
    const nivel = IndiceMassaCorporal(imc);

    console.log(getImc, nivel);

    const msg = `Seu IMC é ${imc} ${nivel}.`;
    resultado(msg, true);
});

function IndiceMassaCorporal(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobreoeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso,altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaParagrafo() {
    const paragrafo = document.createElement('paragrafo');
    return paragrafo;
}

function resultado(msg, isValid) {
    const resultado = document.querySelector('.informacao');
    resultado.innerHTML = '';  
    const paragrafo = criaParagrafo();

    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado');
    } else {
        paragrafo.classList.add('bad');
    }
    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo);
}