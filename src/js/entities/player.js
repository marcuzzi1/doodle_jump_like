import {AbstractEntity} from "./abstractEntity.js";

/**
 * This is the player class.
 * You can use it to create a Doodler.
 */
export class Player extends AbstractEntity{

    /**
     * Default constructor
     * @param _name The name of the entity
     * @param _coords The coordinates of the entity
     * @param _size The size of the entity
     * @param _color The color of the entity
     */
    constructor(_name, _coords, _size, _color) {
        super(_name, _coords, _size);
        this._color = _color; // We need this property for the first test
    }

    /**
     * This method is used to draw the entity on the canvas.
     * @param ctx The context of the canvas to draw the entity on
     */
    draw(ctx) {
        ctx.fillStyle = this._color;
        ctx.fillRect(this._coords.x, this._coords.y, this._size.width, this._size.height);
    }
}