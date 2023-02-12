import './style.css';
import { CustomGame } from './content/CustomGame';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>p5 Game</h1>
    <div id="viewport">
    </div>
  </div>
`;

new CustomGame('#viewport');
