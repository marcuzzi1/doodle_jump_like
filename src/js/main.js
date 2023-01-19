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
        this._initEvents();
    }

    /**
     * This method initializes the events of the game.
     * Whenever I have to register a new event, I just have to add it here.
     * @private
     */
    _initEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('%c Welcome to my mini-game!', 'font-size: 36px;');
        });
    }
}