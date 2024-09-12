var indbut = 1;

function SelectionMenu() {
    indbut = indbut + 1;
    if (indbut > 2) {
        indbut = 1;
    }

    if (indbut === 2) {
        create_buton();
    } else if (indbut === 1) {
        eliminatebut();
    } else {
        console.error("Não foi ativo a função");
    }
}

function eliminatebut() {
    
    var container = document.getElementById('mensele');
    var buttons = container.querySelectorAll('button:not(#menu)');
    buttons.forEach(function(button) {
        container.removeChild(button);
    });
}

function create_buton() {
    var container = document.getElementById('mensele');
    
    var existingButtons = container.querySelectorAll('button:not(#menu)');
    existingButtons.forEach(function(button) {
        container.removeChild(button);
    });

    var botao1 = document.createElement('button');
    var botao2 = document.createElement('button');
    var botao3 = document.createElement('button');
    var botao4 = document.createElement('button');
    var botao5 = document.createElement('button');
    var botao6 = document.createElement('button');
    var botao7 = document.createElement('button');

    botao1.textContent = 'Tela 1';
    botao2.textContent = 'Tela 2';
    botao3.textContent = 'Tela 3';
    botao4.textContent = 'Tela 4';
    botao5.textContent = 'Tela 5';
    botao6.textContent = 'Tela 6';
    botao7.textContent = 'Tela 7';

    container.appendChild(botao1);
    container.appendChild(botao2);
    container.appendChild(botao3);
    container.appendChild(botao4);
    container.appendChild(botao5);
    container.appendChild(botao6);
    container.appendChild(botao7);
}
