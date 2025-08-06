// Espera que o DOM esteja totalmente carregado para garantir que o elemento existe
    document.addEventListener('DOMContentLoaded', function() {
      // Obtém o elemento do campo de input pelo ID
      const campoNome = document.getElementById('amigo');

      // Coloca o foco no campo, o que também ativa o cursor
      if (campoNome) { // Verifica se o elemento foi encontrado
        campoNome.focus();
      }
    });
