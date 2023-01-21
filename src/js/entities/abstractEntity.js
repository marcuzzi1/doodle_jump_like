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
        this._name = _name;
        this._coords = _coords;
        this._size = _size;
    }
}