import p5 from 'p5';
import { Game } from '../core/Game';

export class CustomGame extends Game {
    color: string;
    constructor(viewportSelector: string) {
        super(viewportSelector);

        this.color = 'red';
    }

    mousePressed(p5: p5) {
        p5.fill('#3FF434')
        p5.rect(p5.mouseX, p5.mouseY, 10, 10)
    }

    keyPressed(p5: p5) {
        p5.fill('blue')
        p5.rect(p5.mouseX, p5.mouseY, 10, 10)
    }

    draw(p5: p5) {
        p5.fill('red')
        p5.rect(100, p5.mouseY, 10, 10)
    }
}
