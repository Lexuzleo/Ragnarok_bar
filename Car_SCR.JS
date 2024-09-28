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

    container.style.display = 'flex';
    container.style.flexDirection = 'column';

    var botao1 = document.createElement('button');
    var botao2 = document.createElement('button');
    var botao3 = document.createElement('button');
    var botao4 = document.createElement('button');
    var botao5 = document.createElement('button');
    var botao6 = document.createElement('button');
    var botao7 = document.createElement('button');

    botao1.textContent = 'Inicio';
    botao2.textContent = 'Cardapio';
    botao3.textContent = 'Tela 3';
    botao4.textContent = 'Tela 4';
    botao5.textContent = 'Tela 5';
    botao6.textContent = 'Tela 6';
    botao7.textContent = 'Tela 7';

    botao1.style.border = '2px solid red';
    botao2.style.border = '2px solid red';
    botao3.style.border = '2px solid red';
    botao4.style.border = '2px solid red';
    botao5.style.border = '2px solid red';
    botao6.style.border = '2px solid red';
    botao7.style.border = '2px solid red';
    botao1.style.backgroundColor = 'grey';
    botao2.style.backgroundColor = 'grey';
    botao3.style.backgroundColor = 'grey';
    botao4.style.backgroundColor = 'grey';
    botao5.style.backgroundColor = 'grey';
    botao6.style.backgroundColor = 'grey';
    botao7.style.backgroundColor = 'grey';

    container.appendChild(botao1);
    container.appendChild(botao2);
    container.appendChild(botao3);
    container.appendChild(botao4);
    container.appendChild(botao5);
    container.appendChild(botao6);
    container.appendChild(botao7);

    botao1.style.cursor = 'pointer';
    botao1.style.transition = 'background-color 0.3s';
    botao1.onmouseover = function() {
        botao1.style.backgroundColor = 'yellow';
    };

    botao1.onmouseout = function() {
        botao1.style.backgroundColor = 'grey';
    };

    botao2.style.cursor = 'pointer';
    botao2.style.transition = 'background-color 0.3s';
    botao2.onmouseover = function() {
        botao2.style.backgroundColor = 'yellow';
    };

    botao2.onmouseout = function() {
        botao2.style.backgroundColor = 'grey';
    };

    botao3.style.cursor = 'pointer';
    botao3.style.transition = 'background-color 0.3s';
    botao3.onmouseover = function() {
        botao3.style.backgroundColor = 'yellow';
    };

    botao3.onmouseout = function() {
        botao3.style.backgroundColor = 'grey';
    };

    botao4.style.cursor = 'pointer';
    botao4.style.transition = 'background-color 0.3s';
    botao4.onmouseover = function() {
        botao4.style.backgroundColor = 'yellow';
    };

    botao4.onmouseout = function() {
        botao4.style.backgroundColor = 'grey';
    };

    botao5.style.cursor = 'pointer';
    botao5.style.transition = 'background-color 0.3s';
    botao5.onmouseover = function() {
        botao5.style.backgroundColor = 'yellow';
    };

    botao5.onmouseout = function() {
        botao5.style.backgroundColor = 'grey';
    };

    botao6.style.cursor = 'pointer';
    botao6.style.transition = 'background-color 0.3s';
    botao6.onmouseover = function() {
        botao6.style.backgroundColor = 'yellow';
    };

    botao6.onmouseout = function() {
        botao6.style.backgroundColor = 'grey';
    };

    botao7.style.cursor = 'pointer';
    botao7.style.transition = 'background-color 0.3s';
    botao7.onmouseover = function() {
        botao7.style.backgroundColor = 'yellow';
    };

    botao7.onmouseout = function() {
        botao7.style.backgroundColor = 'grey';
    };
    
    botao1.onclick = function() {
        window.location.href = 'file:///C:/Users/manac/Desktop/Reposit%C3%B3rios/Trabalho%20de%20escola/Ragnarok_bar/Index.html';
    };
    
    botao2.onclick = function() {
        window.location.href = 'file:///C:/Users/manac/Desktop/Reposit%C3%B3rios/Trabalho%20de%20escola/Ragnarok_bar/Cardapio_INX.HTML';
    };
}