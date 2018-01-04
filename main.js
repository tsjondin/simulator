import Grid	from './simulator/grid.js';
import State from './simulator/state.js';


let app = new PIXI.Application({
	width: 800,
	height: 600
});

document.body.appendChild(app.view);
app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';

let rect = new PIXI.Graphics();
rect.beginFill(0xFF0000);
rect.drawRect(100, 100, 100, 100);
rect.endFill();
app.stage.addChild(rect);

const grid = new Grid(8, 8);
const view = grid.view(4, 4, 4, 4);
grid.set(5, 5, new State({'hello': 'world'}));
console.log(view);

for (let cell of view) {
	console.log(cell);
}
