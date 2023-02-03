import './lib/matter.js';
import { keyMapper } from './lib/keyMap.js';
import { tickCounter } from './lib/tickCounter.js';
import { global } from './lib/global.js';
import Character from './Character.js';
import Platform from './Platform.js';
import Bob from './Bob.js';

function main() {

    const { Engine, Render, Runner, Composite, World } = Matter;

    // Create a running engine
    const engine = Engine.create({
        gravity: {
            x: 0,
            y: 1
        }
    });

    // Create a renderer
    const render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 1500,
            height: 700,
            wireframes: false
        }
    });

    // Add the engine, and an empty list of 'bodies' to the world
    World.add(engine.world, []);

    // Start the renderer
    Render.run(render);
    const runner = Runner.create();

    // Ensure that the physics runs at a constant speed regardless of framerate
    runner.isFixed = false;

    Runner.run(runner, engine); 

    // Define global variables:
    global.bodies = []; // List of physics 'bodies' in the world
    global.entities = []; // List of entities in the world
    global.world = engine.world;

    // Set function to run every game tick
    Matter.Events.on(runner, 'tick', tickCounter);

    // Check for keypresses and store them
    window.addEventListener('keydown', e => keyMapper(e))
    window.addEventListener('keyup', e => keyMapper(e))

    // Add entities here
    const player = new Character(50, 50, 50, 50);

    const ground = new Platform(100, 600, 400, 30);
    ground.body.render.fillStyle = '#00ff00'
    ground.add();

    const ground2 = new Platform(900, 600, 400, 30);
    ground2.body.render.fillStyle = '#00ff00'
    ground2.add();

    const platform1 = new Platform(500, 100, 50, 400)
    platform1.body.render.fillStyle = '#FF0000'
    platform1.add()

    const platform2 = new Platform(500, 700, 50, 400)
    platform2.body.render.fillStyle = '#FF0000'
    platform2.add()


    const myplayer = new Bob()
    myplayer.add()


}
window.onload = main;