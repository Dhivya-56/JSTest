const coordinatesDisplay = document.getElementById('coordinates');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  
  coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;
});
