/* 
Objetivo - quando clicar no botão, é necessário a mudança da imagen de fundo.

- Passo 1: da um jeito de pegar o elemento HTML dos botões;
- Passo 2: fazer com que seja identificado o clique no botão;
- Passo 3: desmarcar o botão selecionado anteriormente;
- Passo 4: marcar o botão clicado como se ele estivesse selecionado;
- Passo 5: esconder a imagem anterior;
- Passo 6: fazer aparecer a imagem de fundo correspondente clicada;

*/
// - Passo 1: da um jeito de pegar o elemento HTML dos botões;
        const botoesCarrossel = document.querySelectorAll('.botao'); //const é variavel. Nunca dar espaço entre o nome da variável. Iniciar minúscula.
        const imagens = document.querySelectorAll('.imagem');

//- Passo 2: fazer com que seja identificado o clique no botão;

/* JEITO ERRADO DE FAZER(POIS SE REPETIRIA O CODIGO 6 VEZES) : const botao1 = document.getElementById('botao1');
botao1.addEventListener('click', () => {
    console.log('clicou no botao 1'); //addEL é para entender a ação.
    // () => {} é uma função que será executada.
})*/
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        

        //- Passo 3: desmarcar o botão selecionado anteriormente;
        const botaoSelecionado = document.querySelector('.selecionado')
        botaoSelecionado.classList.remove('selecionado');

        //- Passo 4: marcar o botão clicado como se ele estivesse selecionado;
        botao.classList.add('selecionado');

        //- Passo 5: esconder a imagem anterior;
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa'); //remove a classe quando o botao for selecionado
    

        //- Passo 6: fazer aparecer a imagem de fundo correspondente clicada;
        imagens [indice].classList.add('ativa');
        


    })
})