const stages = [
  { name: 'Plantio', impact: 'verde', description: 'Uso de sementes orgânicas e energia solar' },
  { name: 'Colheita', impact: 'verde', description: 'Máquinas eficientes e baixo consumo de diesel' },
  { name: 'Transporte', impact: 'amarelo', description: 'Transporte de 120 km, parcialmente sustentável' },
  { name: 'Distribuição', impact: 'verde', description: 'Armazém com refrigeração eficiente' },
  { name: 'Consumo', impact: 'verde', description: 'Produto chega fresco ao consumidor' }
];

document.getElementById('track-btn').addEventListener('click', () => {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';
  stages.forEach((stage, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.borderLeftColor = stage.impact === 'verde' ? 'green' : stage.impact === 'amarelo' ? 'orange' : 'red';
    card.innerHTML = `<h3>${stage.name}</h3><p>${stage.description}</p>`;
    timeline.appendChild(card);
    setTimeout(() => card.classList.add('show'), i * 500); // animação sequencial
  });
});