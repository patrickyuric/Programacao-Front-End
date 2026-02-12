// Técnico em Desenvolvimento de Sistemas
// Professor: Patrick Yuri

// Aula 01 - Fundamentos - Modo Separado
// Neste exemplo, o JavaScript e o CSS estão em arquivos separados, promovendo uma melhor organização do código.


// Seleciona a caixa pelo ID
const caixa = document.getElementById("caixa"); 

// Adiciona um evento de mouseover para mudar a cor e o texto da caixa
caixa.addEventListener("mouseover", function() {
    caixa.style.backgroundColor = "green";
    caixa.innerText = "Mudou de cor!";
});

// Adiciona um evento de mouseout para restaurar a cor e o texto da caixa
caixa.addEventListener("mouseout", function() {
    caixa.style.backgroundColor = "coral";
    caixa.innerText = "Passe o mouse aqui!";
}); 