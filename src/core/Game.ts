import p5 from 'p5';

export class Game {
    p5: p5;
    width: number;
    height: number;

    constructor(viewportSelector: string, width = 900, height = 600) {
        const viewport = document.querySelector<HTMLElement>(viewportSelector);
        if (null === viewport) {
            throw new Error(`Viewport ${viewportSelector} not found`);
        }

        viewport.addEventListener('contextmenu', e => e.preventDefault());

        this.width = width;
        this.height = height;

        this.p5 = new p5((sketch: p5) => {
            sketch.setup = () => {
                this.setup(sketch);
            };
            sketch.draw = () => {
                this.draw(sketch);
            };
            sketch.mousePressed = () => {
                this.mousePressed(sketch);
            };
            sketch.keyPressed = () => {
                this.keyPressed(sketch);
            };
        }, viewport);
    }

    setup(p5: p5) {
        p5.createCanvas(this.width, this.height);
        p5.background('#f1f1f1');
    }

    mousePressed(p5: p5) {
        p5.fill('green');
        p5.rect(p5.mouseX, p5.mouseY, 10, 10);
    }

    keyPressed(p5: p5) {
        p5.fill('blue');
        p5.rect(p5.mouseX, p5.mouseY, 10, 10);
    }

    draw(p5: p5) {
        p5.fill('red');
        p5.rect(100, p5.mouseY, 10, 10);
    }
}
