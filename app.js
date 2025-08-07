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
  if (nome.value == '' || nome.value[0] == ' ') {
    alert('Por favor, digite um nome.');
    limparCampo();
  } else {
      if (nomeDoAmigo.includes(nome.value)) {
        alert('Por favor, digite outro nome, pois este nome já está na lista de amigos.');
        limparCampo();
      } else {
          nomeDoAmigo.push(nome.value);
          atualizarAmigosNaTela();
          limparCampo();
        }
    }
}

function limparCampo() {
  adicionar = document.querySelector('input');
  adicionar.value = '';
}

function atualizarAmigosNaTela() {
const listaDeAmigosNaTela = document.getElementById('listaAmigos');
listaDeAmigosNaTela.innerHTML = '';
let itensLista = nomeDoAmigo;
itensLista.forEach(function(itemTexto) {
  const li = document.createElement('li');
  li.textContent = itemTexto;
  listaDeAmigosNaTela.appendChild(li);
});
}

function sortearAmigo() {
  if (nomeDoAmigo.length < 2) {
    alert('Você precisa digitar pelo menos o nome de dois amigos.');
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let indiceAmigo = Math.floor(Math.random() * nomeDoAmigo.length);
  let nomeSorteado = nomeDoAmigo[indiceAmigo];
  const li = document.createElement("li");
  li.textContent = `Amigo sorteado: ${nomeSorteado}`;
  resultado.appendChild(li);
  }
}