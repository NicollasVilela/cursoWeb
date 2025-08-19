// Função para gerar a tabuada
function gerarTabuada() {
  const numeroTabuada = document.getElementById('tabuadaInput').value;
  const multiplicarAte = document.getElementById('multipInput').value;
  const resultado = document.getElementById('resultado');
  
  // Validar se os campos estão preenchidos
  if (!numeroTabuada || !multiplicarAte) {
    resultado.innerHTML = '<p style="color: red;">Por favor, preencha todos os campos!</p>';
    return;
  }
  
  // Converter para números
  const num = parseInt(numeroTabuada);
  const ate = parseInt(multiplicarAte);
  
  // Validar se são números válidos
  if (isNaN(num) || isNaN(ate) || ate <= 0) {
    resultado.innerHTML = '<p style="color: red;">Por favor, insira números válidos!</p>';
    return;
  }
  
  // Gerar a tabuada
  let tabuadaHTML = `<h3>Tabuada do ${num}:</h3>`;
  
  for (let i = 1; i <= ate; i++) {
    const multiplicacao = num * i;
    tabuadaHTML += `<div class="tabuada-item">${num} x ${i} = ${multiplicacao}</div>`;
  }
  
  resultado.innerHTML = tabuadaHTML;
}

// Adicionar evento de clique no botão
document.addEventListener('DOMContentLoaded', function() {
  const btnTabuada = document.getElementById('btnTabuada');
  btnTabuada.addEventListener('click', gerarTabuada);
  
  // Adicionar evento para calcular quando pressionar Enter
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        gerarTabuada();
      }
    });
  });
});
