/**
 * Abstract entity class
 * This one is the mother class of all spawn-able entities/
 */
export class AbstractEntity {

    /**
     * Default constructor
     * @param _name The name of the entity
     * @param _coords The coordinates of the entity
     * @param _size The size of the entity
     */
    constructor(_name, _coords, _size) {
        // Adding the properties
        this._name = _name;
        this._coords = _coords;
        this._size = _size;

        // Throwing an error if the class is instantiated
        if (new.target === AbstractEntity) {
            throw new TypeError("Cannot construct AbstractEntity instances directly");
        }
    }

    /**
     * This method is used to draw the entity on the canvas.
     * Each entity should have its own draw method by overriding this one.
     * @param ctx The context of the canvas to draw the entity on
     */
    draw(ctx) {};
}