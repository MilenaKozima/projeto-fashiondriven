let modelo = '';
let gola = '';
let tecido = '';
let referencia = '';
let nomeusu = '';
let tempo = 10;
let idInterval;

axios.defaults.headers.common['Authorization'] = 'xLBzuiWi6qYVmyUXY7S8o3l7';

// seleciona o campo de entrada de texto
let inputteste = document.querySelector('input');
// adiciona um evento de escuta para quando o usuário digitar ou apagar algo
inputteste.addEventListener('input', () => {
    referencia = document.querySelector('input').value;
  VerificarSelacao(); // chama a função verificar
})

function VerificarSelacao(){
    if (modelo !== ''){
        if (gola !== ''){
            if(tecido !== ''){
                if(document.querySelector('input').value !== ''){
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

function selecionarmodelo(seletor){
    let pai = seletor.parentNode;
    modelo = pai.querySelector('p').innerHTML;
    console.log(modelo);

    const selecionadoantes = document.querySelector('.selecionadamodelo');

    if(selecionadoantes !== null){
        selecionadoantes.classList.remove('selecionadamodelo');
    }

    seletor.classList.add('selecionadamodelo');
}

function selecionargola(seletor){
    let pai = seletor.parentNode;
    gola = pai.querySelector('p').innerHTML;
    console.log(gola);

    const selecionadoantes = document.querySelector('.selecionagola');

    if(selecionadoantes !== null){
        selecionadoantes.classList.remove('selecionagola');
    }

    seletor.classList.add('selecionagola');
}

function selecionartecido(seletor){
    let pai = seletor.parentNode;
    tecido = pai.querySelector('p').innerHTML;
    console.log(tecido);

    const selecionadoantes = document.querySelector('.selecionadatecido');

    if(selecionadoantes !== null){
        selecionadoantes.classList.remove('selecionadatecido');
    }

    seletor.classList.add('selecionadatecido');
}

function getRequest() {
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promessa.then(processarResposta);
    promessa.catch(processarErro);
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
}

function processarErro(resposta) {
    console.error('ERROR', resposta);
    console.error('ERROR MESSAGE', resposta.response.data.message);
    const erro = document.querySelector('.erro');
    erro.classList.remove('escondida');
    const esquerda = document.querySelector('.esquerda');
    esquerda.classList.add('escondida');
}

function nome(){
    nomeusu = prompt("Qual o seu nome ?");
    const elemento = document.querySelector('.usuario');

    elemento.innerHTML = `
    Olá, <strong class="nome">${nomeusu}!</strong>
    `;

}

nome();

function camiseta(){
    const elemento = document.querySelector('.sucesso');
    elemento.innerHTML = `         
    <p>Pedido feito com sucesso</p>
    <img class="imgref" src=${referencia}>
    <p class="tempo">Voltando para a pagina principal em x segundos</p>`;
}

camiseta();

function contar(){
    idInterval = setInterval(cronometro, 1000);
}

function cronometro(){
tempo--;
if(tempo >= 0){
const divcontador = document.querySelector('.contador');
divcontador.innerHTML = tempo;
} else{
    clearInterval(idInterval);
}
}