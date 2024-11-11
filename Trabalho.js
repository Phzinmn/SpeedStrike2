var slides = ['Crisnike.jpg', 'Cris.jpg', 'NeyPUMA.png', 'ney.jpg', 'messiadidas.webp', 'messi.png' ]
var tam = slides.length
var satual = 0
var tmpslide

function trocaAutomatica(){
    satual++
    if(satual >= tam){
        satual = 0
    }
    document.querySelector('#carrosel').style.backgroundImage = `url(${slides[satual]})`
}

function iniciarSlide() {
    document.querySelector('#carrosel').style.backgroundImage = `url(${slides[satual]})`
    tmpslide = setInterval(trocaAutomatica,2000)
}

function parar() {
    clearInterval (tmpslide)
}

function trocar(dir){
    satual += dir
    if(satual < 0){
        satual = tam - 1
    }else if(satual >= tam){
        satual = 0
    }
    document.querySelector('#carrosel').style.backgroundImage = `url(${slides[satual]})`
}


var buyButtons = document.querySelectorAll('button#desc3');

buyButtons.forEach((button, index) => {
    var clickCount = 0;
    button.addEventListener('click', () => {
        clickCount++;
        alert(`Você clicou no produto ${index + 1} ${clickCount} vezes!`);
    });
});



// function aplicarDesconto(precoOriginal, desconto) {
//     return precoOriginal - (precoOriginal * (desconto / 100));
// }

// document.querySelectorAll('#preco').forEach((precoElement, index) => { var precoOriginal = parseFloat(precoElement.textContent.replace('R$', '').replace(',', '.'));
//     var button = document.createElement('button');
//     button.textContent = 'Aplicar desconto de 10%';
//     precoElement.appendChild(button);

//     button.addEventListener('click', () => {
//         var precoComDesconto = aplicarDesconto(precoOriginal, 10);
//         precoElement.innerHTML = `<p>De: R$${precoOriginal.toFixed(2)}<br>Por: R$${precoComDesconto.toFixed(2)}</p>`;
//     });
// });
