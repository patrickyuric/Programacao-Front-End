// Usando const porque o botão não vai mudar de referência [cite: 3955]
const btnComprar = document.getElementById('btn-comprar');
const tituloProduto = document.querySelector('#titulo').innerText;

btnComprar.addEventListener('click', () => {
  btnComprar.style.backgroundColor = '#28a745';
  btnComprar.innerText = 'Adicionado!';
  alert(`Boa escolha! O ${tituloProduto} foi para o carrinho.`);
});