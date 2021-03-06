const View = {
  render({ minutes, seconds }) {
    const timer = document.getElementById('timer');

    timer.innerHTML = `
      <p>Lembrar de tomar água!</p>
      <span>${minutes}:${seconds}</span>
    `;
  },
};

export { View };
