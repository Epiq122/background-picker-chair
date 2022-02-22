document.getElementById('purple').onclick = partyPurple;
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;
document.getElementById('crimson').onclick = partyCrimson;

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)';
  document.querySelector('body').style.color = 'white';
  document.querySelector('#color-name').innerText = 'Purple';
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)';
  document.querySelector('body').style.color = 'white';
  document.querySelector('#color-name').innerText = 'Green';
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)';
  document.querySelector('body').style.color = 'white';
  document.querySelector('#color-name').innerText = 'Blue';
}

function partyCrimson() {
  document.querySelector('body').style.backgroundColor = 'rgb(220, 20, 60)';
  document.querySelector('body').style.bakcgroundColor = 'white';
  document.querySelector('#color-name').innerText = 'Crimson';
}
