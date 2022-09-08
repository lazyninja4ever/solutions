let clickBtn = document.getElementById('countBtn');
let clickCount = 0;

const clickInc = () => {
  clickCount++;
  clickBtn.innerHTML = `You clicked me ${clickCount} times`;
}

clickBtn.addEventListener('click', clickInc);