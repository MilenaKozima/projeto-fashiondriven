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