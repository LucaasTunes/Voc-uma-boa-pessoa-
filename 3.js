const botao1 = document.querySelector('.buttons');

botao1.addEventListener("click", function() {
    alert("Botão Errado!");
});

const meuElemento = document.getElementById('buttlegal');
const alterarBtn = document.getElementById('alterarBtn');

alterarBtn.addEventListener("click", function() {
    meuElemento.textContent = "SIM, VOCÊ É!";
    meuElemento.style.color = 'red';
    meuElemento.style.backgroundColor = 'yellow';
    meuElemento.style.fontSize = '200px';
    meuElemento.style.fontWeight = 'bold';

    meuElemento.classList.add('moved'); // Adiciona a classe 'moved' para mover o elemento
    setTimeout(function() {
        meuElemento.style.color = ''; 
        meuElemento.style.backgroundColor = '';
        meuElemento.style.fontSize = '';
        meuElemento.style.fontWeight = '';
        meuElemento.textContent = "Você é uma boa pessoa?";

    }, 4000);
});
/*LucaasTunes*/