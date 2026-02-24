//hmm maybe we should use this modularly for some other projects on p5js (virtual pet redux?)

const DEFAULT_RED   = 0
// const DEFAULT_GREEN = 0
// const DEFAULT_BLUE  = 0

class Color {
    //supports a single argument better c:
    constructor(red, green, blue) {
        this.R = red   || DEFAULT_RED
        this.G = green || this.R
        this.B = blue  || this.G
    }

    setRed(newRed)     { this.R = newRed   || DEFAULT_RED }
    setGreen(newGreen) { this.G = newGreen || this.R }
    setBlue(newBlue)   { this.B = newBlue  || this.G }

    //instead of passing in numbers for the color() thing pass this in (yes this is tested and works)
    getColor() {
        return [this.R, this.G, this.B]
    }

    changeColor(red, green, blue) {
        this.setRed(red)
        this.setGreen(green)
        this.setBlue(blue)
    }

    mix(otherColor) {
        let red = (this.R + otherColor.R) / 2
        let green = (this.G + otherColor.G) / 2
        let blue = (this.B + otherColor.B) / 2

        this.changeColor(red, green, blue)
    }
    
    copy() {
        return new Color(this.R, this.G, this.B)
    }

    //you cant get THIS from a NUMBER!
    toInverted() {
        let red = 255 - this.R
        let green = 255 - this.G
        let blue = 255 - this.B

        this.changeColor(red, green, blue)
    }

    //bad grayscale filter
    toGrayscale() {
        let colorAvg = Math.round((this.R + this.G + this.B) / 3)

        this.changeColor(colorAvg)
    }
}