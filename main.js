function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

 //eventos do teclado onkeydowne onkeyup.
 //adicionar e remover classes em um elemento HTML através do JavaScript, com as funções add e remove do classList.   
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

/*Template string é uma forma de facilitar a exibição de texto no JavaScript, 
ele permite agrupar textos (strings) com outros tipos de informação, como number, boolean, array, entre outros.

Estrutura de repetição for(significa para). 
Estrutura condicional if(significa se).

Operador de igualdade ==, estritamente igual (===), e o operador or (||).

A estruturas condicionais if e else juntas. 
O operador not equals (!=), operador lógico and (&&) e o valor null.*/