import {Player} from "./entities/player.js";

/**
 * This is the main class of the mini-game./
 */
export class Main {
    /**
     * Constructor of the class, just calls the init method
     */
    constructor() {
        this._init();
    }

    /**
     * This method is called when the class is instantiated.
     * It manages the main operations of the game.
     * @private
     */
    _init() {
        // Defining some properties

        this.canvas = document.querySelector('#mainBoard'); // The canvas element
        // Trying to get the context of the canvas
        try {
            this.ctx = this.canvas.getContext('2d');
        } catch (e) {
            throw e; // In case of error, we throw it
        }

        // Defining some props
        this.spanedEntities = []; // The entities that are spawned in the game

        // Initializing the events
        this._initEvents();
        // Resizing the canvas
        this._resizeCanvas();
        // Creating a player entity
        this.spanedEntities.push(new Player('player', {x: this.canvas.width / 2, y: this.canvas.height - 50}, {width: 50, height: 50}, 'red'));

        // Drawing the entities
        this._drawEntities();
    }

    /**
     * This method initializes the events of the game.
     * Whenever I have to register a new event, I just have to add it here.
     * @private
     */
    _initEvents() {
        // Content loaded event
        document.addEventListener('DOMContentLoaded', () => {
            console.log('%c Welcome to my mini-game!', 'font-size: 36px;');
        });

        // Window resize event
        window.addEventListener('resize', () => {
            this._resizeCanvas();
        });
    }

    /**
     * This method is used to resize the canvas with a proper ratio.
     * This should preserve a good quality of the game textures.
     * @private
     */
    _resizeCanvas() {
        let ratio = window.devicePixelRatio; // The ratio of the device
        this.canvas.width = document.querySelector('main').clientWidth * ratio; // The width of the canvas
        this.canvas.height = document.querySelector('main').clientHeight * ratio; // The height of the canvas
        this.ctx.scale(ratio, ratio); // Scaling the context
        this._drawEntities(); // Drawing the entities
    }

    /**
     * This method is used to draw the entities on the canvas.
     * It is called in the main loop of the game or when the canvas is resized.
     * @private
     */
    _drawEntities() {
        // Clearing the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Drawing the entities
        this.spanedEntities.forEach((entity) => {
            entity.draw(this.ctx);
        });
    }
}