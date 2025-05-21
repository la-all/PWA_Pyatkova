// Элементы
const counterElement = document.getElementById('counter');
const clickBtn = document.getElementById('clickBtn');
const resetBtn = document.getElementById('resetBtn');
const animationElement = document.getElementById('animation');

// Начальное значение счетчика (загружаем из localStorage)
let count = localStorage.getItem('clickCount') || 0;
updateCounter();

// Обработчик клика
clickBtn.addEventListener('click', () => {
  count++;
  updateCounter();
  localStorage.setItem('clickCount', count);
  createAnimation();
});

// Сброс счетчика
resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
  localStorage.setItem('clickCount', count);
});

// Обновление счетчика на странице
function updateCounter() {
  counterElement.textContent = `Кликов: ${count}`;
}

// Анимация при клике
function createAnimation() {
  // Создаем элемент для анимации
  const anim = document.createElement('div');
  anim.className = 'click-animation';
  anim.style.left = `${Math.random() * 80 + 10}%`;
  anim.style.top = `${Math.random() * 50 + 20}%`;
  document.body.appendChild(anim);

  // Удаляем элемент после анимации
  setTimeout(() => {
    anim.remove();
  }, 1000);
}

// Стили для анимации (можно добавить в CSS)
const style = document.createElement('style');
style.textContent = `
  .click-animation {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #ff4081;
    border-radius: 50%;
    pointer-events: none;
    animation: fadeOut 1s forwards;
  }
  @keyframes fadeOut {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(3); opacity: 0; }
  }
`;
document.head.appendChild(style);