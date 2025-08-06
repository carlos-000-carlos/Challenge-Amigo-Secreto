let nomeDoAmigo = [];
console.log(nomeDoAmigo);

cursorNoCampoNomeDoAmigo();


function cursorNoCampoNomeDoAmigo() {

  // Espera que o DOM esteja totalmente carregado para garantir que o elemento existe
  document.addEventListener('DOMContentLoaded', function() {
    // Obtém o elemento do campo de input pelo ID
    const campoNome = document.getElementById('amigo');
    
    // Coloca o foco no campo, o que também ativa o cursor
    if (campoNome) { // Verifica se o elemento foi encontrado
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
    }
    else {
        nomeDoAmigo.push(nome.value);
        limparCampo();
    }
    console.log(nomeDoAmigo);
    }
  }

function limparCampo() {
    cursorNoCampoNomeDoAmigo();
    adicionar = document.querySelector('input');
    adicionar.value = '';
}