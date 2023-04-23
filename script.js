let modelo = '';
let gola = '';
let tecido = '';
let referencia = '';

// seleciona o campo de entrada de texto
const inputField = document.querySelector('input');

// adiciona um evento de escuta para quando o usuário digitar ou apagar algo
inputField.addEventListener('input', () => {
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
    modelo = seletor.innerHTML

    const selecionadoantes = document.querySelector('.selecionadamodelo');

    if(selecionadoantes !== null){
        selecionadoantes.classList.remove('selecionadamodelo');
    }

    seletor.classList.add('selecionadamodelo');
}

function selecionargola(seletor){
    gola = seletor.innerHTML

    const selecionadoantes = document.querySelector('.selecionagola');

    if(selecionadoantes !== null){
        selecionadoantes.classList.remove('selecionagola');
    }

    seletor.classList.add('selecionagola');
}

function selecionartecido(seletor){
    tecido = seletor.innerHTML

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
        "model": "t-shirst",
        "neck": "v-neck",
        "material": "silk",
        "image": 'https://umaurlaleatoria.com',
        "owner": 'string',
        "author": 'string'
    }
    const promessa = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', body);
    promessa.then(processarResposta);
    promessa.catch(processarErro);

}


function processarResposta(resposta) {
    console.log('SUCESSO', resposta.data);
}

function processarErro(resposta) {
    console.error('ERROR', resposta);
    console.error('ERROR MESSAGE', resposta.response.data.message);
}

function nome(){
    const nomeusu = prompt("Qual o seu nome ?");
    const elemento = document.querySelector('.usuario');

    elemento.innerHTML = `
    Olá, <strong class="nome">${nomeusu}!</strong>
    `;

}

nome();