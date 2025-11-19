const procurar = document.getElementById('procurarTreino');
const treinoInput = document.getElementById('treino');

const listaTreinos = document.getElementById('listaTreinos');
const treinosAdicionados = [];

function adicionarTreino(nome, descricao, series, observacao, imagem, video ) {

  // Evita duplicados
  if (treinosAdicionados.includes(nome)) {
    alert(`${nome} já está na lista!`);
    return;
  }

  treinosAdicionados.push(nome);

  // --- CARD ---
  const card = document.createElement('div');
  card.classList.add('treinoCard');

  // --- IMAGEM ---
  const img = document.createElement('img');
  img.src = imagem || 'img/placeholder.jpg';
  img.alt = nome;

  // --- TEXTOS ---
  const h3 = document.createElement('h3');
  h3.textContent = nome;

const p3 = document.createElement('p');
  p3.textContent = descricao;


  const p1 = document.createElement('p');
  p1.textContent = series;

  const p2 = document.createElement('p');
  p2.textContent = observacao;

  // --- BOTÃO ASSISTIR ---
  const botaoAssistir = document.createElement('button');
  botaoAssistir.textContent = 'Assistir vídeo';
  botaoAssistir.classList.add('assistirBtn');
  botaoAssistir.addEventListener('click', () => {
    window.open(video, '_blank'); // abre o vídeo em nova aba
  });

  // --- BOTÃO REMOVER ---
  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'Remover treino';
  botaoRemover.classList.add('removerBtn');
  botaoRemover.addEventListener('click', () => {
    listaTreinos.removeChild(card);
    const index = treinosAdicionados.indexOf(nome);
    if (index !== -1) treinosAdicionados.splice(index, 1);
  });

  // --- MONTAGEM DO CARD ---
  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(p3);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(botaoAssistir);
  card.appendChild(botaoRemover);

  listaTreinos.appendChild(card);
}


// --- SISTEMA DE BUSCA ---
procurar.addEventListener('click', () => {

  const treino = treinoInput.value.trim().toLowerCase();

  if (treino === 'supino inclinado') {
      adicionarTreino(
          'Supino Inclinado',
          'Deite no banco inclinado, segure a barra, abaixe até o peito e empurre de volta',
          '3 séries de 10 repetições',
          'Peso: Moderado',
          './imagens/incline-bench-press-800.jpg',
          'https://youtube.com/shorts/NrurrUZ9bfw?si=lxbkKnMSPIyEiP7l'
      );
  }

});
