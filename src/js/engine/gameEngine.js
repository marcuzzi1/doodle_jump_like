import {Player} from "../entities/player.js";

/**
 * This class is the game engine.
 * It is used to manage the game loop.
 * It is also used to manage the entities and their interactions.
 */
export class GameEngine {
    /**
     * Default constructor
     * @param _ctx The context of the canvas
     * @param _entities The entities that are spawned in the game
     */
    constructor(_ctx, _entities) {
        this._ctx = _ctx;
        this._entities = _entities;
        this._frameCount = 0;
        // window.requestAnimationFrame(this.handleNewFrame.bind(this));
    }

    /**
     * This method is used to easily find the player entity.
     * @returns The player entity
     * @private
     */
    _findPlayerEntity() {
        return this._entities.find(entity => entity instanceof Player);
    }

    /**
     * This method is used to handle the 'key down' event.
     * @param key The key that is down
     */
    keyDownHandler(key) {
        // We only need to affect the player on that event
        this._findPlayerEntity().manageKeyDown(this._ctx, key);
    }

    /**
     * This method is used to update all entities coordinates.
     * @param ratioW The ratio of the width of the canvas
     * @param ratioH The ratio of the height of the canvas
     */
    calculateNewCoords(ratioW, ratioH) {
        this._entities.forEach(entity => entity.updateCoords(ratioW, ratioH));
    }

    /**
     * This method is the game loop.
     * It is used to update the game state and draw it.
     */
    handleNewFrame() {
        this._frameCount++;
        console.log("Frame: " + this._frameCount);
        window.requestAnimationFrame(this.handleNewFrame.bind(this));
    }
}