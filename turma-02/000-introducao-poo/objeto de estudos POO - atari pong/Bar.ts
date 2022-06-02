export class Bar {
    private _height: number
    private _width: number
    private _speed: number
    private _direction: number = 0
    private _position: number = 100
    private _color: string

    constructor(
        height: number,
        width: number,
        speed: number,
        color: string,
    ) {
        this._height = height
        this._width = width
        this._speed = speed
        this._color = color
     }

     moveUp() { }

     moveDown() { }

     render() { }
}

const bar = new Bar(50, 10, 5, "red")