import './style.css';
import Icon from './sakura.png';

function component() {
  var elelment = document.createElement('div');
  elelment.innerHTML = 'Hello WebPack';
  elelment.classList.add('color_red');

  var img = new Image(200, 200);
  img.src = Icon;
  elelment.appendChild(img);

  return elelment;
}

document.body.appendChild(component());