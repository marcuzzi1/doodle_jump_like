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
    }

    /**
     * This method is used to handle the 'key down' event.
     * @param key The key that is down
     */
    keyDownHandler(key) {
        // We only need to affect the player on that event
        let playerEntity = this._entities.find(entity => entity instanceof Player);
        playerEntity.manageKeyDown(this._ctx, key);
    }
}