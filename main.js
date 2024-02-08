let circles = document.querySelectorAll('.circle');
const button = document.getElementById('sortUser');
const numCirclesSelect = document.getElementById('numCirclesSelect');
let isLoading = false;
let sortIndex = 0;
let timeToStopAnimation = 600

const colors = [
  '#1976d2', '#424242', '#2196f3', '#ff9800', '#f4511e',
  '#ba68c8', '#00bcd4', '#4caf50', '#9c27b0', '#e91e63',
  '#795548', '#607d8b', '#ff5722', '#03a9f4', '#9e9e9e',
  '#8bc34a', '#ffc107', '#673ab7', '#cddc39', '#ffeb3b',
  '#009688', '#ff4081', '#00bcd4', '#ff9800', '#8bc34a'
];


button.addEventListener('click', async () => {
  if (isLoading) return;
  isLoading = true;
  numCirclesSelect.disabled = true
  button.textContent = "Aguarde...";
  circles.forEach((circle, index) => {
    const spinInterval = setInterval(() => {
      circle.textContent = Math.floor(Math.random() * 9);
    }, 100);
    
    setTimeout(() => {
      clearInterval(spinInterval);
      if (index == circles.length - 1) {
        numCirclesSelect.disabled = false
        isLoading = false;
        button.textContent = "Sortear números"


      }
    }, timeToStopAnimation * (index == 0 ? 1 : index));

  })
});

numCirclesSelect.addEventListener('change', () => {
  if (isLoading) return;
  const numCircles = parseInt(numCirclesSelect.value);
  updateNumCircles(numCircles);
});


function updateNumCircles(numCircles) {
  const container = document.getElementById('container');
  container.innerHTML = '';
  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = '?';
    circle.style.color = ""
    circle.style.background = colors[i];
    container.appendChild(circle);
  }

  circles = document.querySelectorAll('.circle');
}