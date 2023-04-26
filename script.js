let modelo = '';
let gola = '';
let tecido = '';
let referencia = '';
let nomeusu = '';
let tempo = 10;
let idInterval;
let camisetasant = [];

axios.defaults.headers.common['Authorization'] = 'xLBzuiWi6qYVmyUXY7S8o3l7';

// seleciona o campo de entrada de texto
let inputteste = document.querySelector('input');
// adiciona um evento de escuta para quando o usuário digitar ou apagar algo
inputteste.addEventListener('input', () => {
    referencia = document.querySelector('input').value;
    console.log(referencia);
    VerificarSelacao(); // chama a função verificar
})

function VerificarSelacao() {
    if (modelo !== '') {
        if (gola !== '') {
            if (tecido !== '') {
                if (document.querySelector('input').value !== '') {
                    const pedidos = document.querySelector('.pedido');
                    pedidos.classList.add('liberabotao');
                    pedidos.removeAttribute('disabled');
                } else {
                    const pedidos = document.querySelector('.pedido');
                    pedidos.classList.remove('liberabotao');
                    pedidos.addAttribute('disabled');
                }
            }
        }
    }
}

function selecionarmodelo(seletor) {
    let pai = seletor.parentNode;
    modelo = pai.querySelector('p').innerHTML;
    console.log(modelo);

    const selecionadoantes = document.querySelector('.selecionadamodelo');

    if (selecionadoantes !== null) {
        selecionadoantes.classList.remove('selecionadamodelo');
    }

    seletor.classList.add('selecionadamodelo');
}

function selecionargola(seletor) {
    let pai = seletor.parentNode;
    gola = pai.querySelector('p').innerHTML;
    console.log(gola);

    const selecionadoantes = document.querySelector('.selecionagola');

    if (selecionadoantes !== null) {
        selecionadoantes.classList.remove('selecionagola');
    }

    seletor.classList.add('selecionagola');
}

function selecionartecido(seletor) {
    let pai = seletor.parentNode;
    tecido = pai.querySelector('p').innerHTML;
    console.log(tecido);

    const selecionadoantes = document.querySelector('.selecionadatecido');

    if (selecionadoantes !== null) {
        selecionadoantes.classList.remove('selecionadatecido');
    }

    seletor.classList.add('selecionadatecido');
}

function getRequest() {
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promessa.then(buscarCamisetas);
    promessa.catch(erroBuscarCamiseta);
}


/*function aparecercamiseta(){
    let cami = document.querySelector('.antigos');

    for (let i = 0; i<cami.lenght; i++){
        let camise = camisetas[i];

        cami.innerHTML += `
        <img src="${camise.image}">
        <p>Criador: <strong>${camise.author}</strong></p>
        `;
    }
}*/

function buscarCamisetas(resposta){
    console.log(resposta.data);
    camisetasant = resposta.data;
    console.log(camisetasant);

    let cami = document.querySelector('.antigos');
    console.log(cami.innerHTML);
    cami.innerHTML = '';

    for (let i = 0; i<camisetasant.length; i++){
        let camise = camisetasant[i];
        console.log(camise);

        cami.innerHTML += `
        <img class="criadas" src=${camise.image}>
        <p>Criador: <strong>${camise.owner}</strong></p>
        `;
    }
}


function erroBuscarCamiseta(erro){
    console.log(erro);
}

function postRequest() {
    body = {
        model: modelo,
        neck: gola,
        material: tecido,
        image: referencia,
        owner: nomeusu,
        author: nomeusu
    }
    const promessa = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', body);
    promessa.then(processarResposta);
    promessa.catch(processarErro);

}


function processarResposta(resposta) {
    console.log('SUCESSO', resposta.data);
    const sucesso = document.querySelector('.sucesso');
    sucesso.classList.remove('escondida');
    const esquerda = document.querySelector('.esquerda');
    esquerda.classList.add('escondida');
    camiseta();
    setTimeout(deucerto, 10000)
}

function processarErro(resposta) {
    console.error('ERROR', resposta);
    console.error('ERROR MESSAGE', resposta.response.data.message);
    const erro = document.querySelector('.erro');
    erro.classList.remove('escondida');
    const esquerda = document.querySelector('.esquerda');
    esquerda.classList.add('escondida');
    setTimeout(deuerrado, 10000)
}

function nome() {
    nomeusu = prompt("Qual o seu nome ?");
    const elemento = document.querySelector('.usuario');

    elemento.innerHTML = `
    Olá, <strong class="nome">${nomeusu}!</strong>
    `;

    getRequest();
}

nome();

function camiseta() {
    const elemento = document.querySelector('.sucesso');
    referencia = document.querySelector('input').value;
    elemento.innerHTML = `         
    <p>Pedido feito com sucesso</p>
    <img class="imgref" src=${referencia}>
    <p class="tempo">Voltando para a pagina principal em <strong class="contador">0</strong> segundos</p>`;
}



function contar() {
    idInterval = setInterval(cronometro, 1000);
}

function cronometro() {
    tempo--;
    if (tempo >= 0) {
        const divcontador = document.querySelector('.contador');
        divcontador.innerHTML = tempo;
    } else {
        clearInterval(idInterval);
        tempo = 10;
    }
}

function deucerto() {
    const sucesso = document.querySelector('.sucesso');
    sucesso.classList.add('escondida');
    const esquerda = document.querySelector('.esquerda');
    esquerda.classList.remove('escondida');

    const selecionatec = document.querySelector('.selecionadatecido');
    selecionatec.classList.remove('selecionadatecido');

    const selecionago = document.querySelector('.selecionagola');
    selecionago.classList.remove('selecionagola');

    const selecionamod = document.querySelector('.selecionadamodelo');
    selecionamod.classList.remove('selecionadamodelo');

    document.querySelector('input').value = '';
}

function deuerrado() {
    const erro = document.querySelector('.erro');
    erro.classList.add('escondida');
    const esquerda = document.querySelector('.esquerda');
    esquerda.classList.remove('escondida');
}