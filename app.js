cursorNoCampoNomeDoAmigo();
let nomeDoAmigo = [];

function cursorNoCampoNomeDoAmigo() {
  document.addEventListener('DOMContentLoaded', function() {
    const campoNome = document.getElementById('amigo');
    if (campoNome) {
      campoNome.focus();
    }
  });
}

function adicionarAmigo() {
  let nome = document.querySelector('input');
  if (nome.value == '') {
    alert('Por favor, digite um nome.');
  } else {
      if (nomeDoAmigo.includes(nome.value)) {
        alert('Por favor, digite outro nome, pois este nome já está na lista de amigos.');
        limparCampo();
      } else {
          nomeDoAmigo.push(nome.value);
          listarAmigosNaTela();
          limparCampo();
        }
    }
}

function limparCampo() {
  adicionar = document.querySelector('input');
  adicionar.value = '';
}

function listarAmigosNaTela() {
const listaDeAmigosNaTela = document.getElementById('listaAmigos');
listaDeAmigosNaTela.innerHTML = '';
let itensLista = nomeDoAmigo;
itensLista.forEach(function(itemTexto) {
  const li = document.createElement('li');
  li.textContent = itemTexto;
  listaDeAmigosNaTela.appendChild(li);
});
}