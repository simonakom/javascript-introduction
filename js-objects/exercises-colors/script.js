// Sukurkite klasę, skirtą darbui su spalvomis, pagrindinių spalvos kodų gavimui norimais formatais bei dviejų spalvų sujungimui. klasė Color turės:

//privačius laukus:
//red, green, blue; - (sveikųjų skaičių reikšmės nuo 0 iki 255);

//Konstruktorių: sukuriamas objektas iš RGB reikšmių; Jei bent viena paduodama reikšmė yra didesnė nei 255 arba mažesnė nei 0, išmesti error pasinaudojant: 
//throw new Error(‘Blogos reikšmės’);

//Geterius:
//a. rgb - gražinantis RGB spalvos kodą, kaip string reikšmę
//b. hsl - gražinantis HSL spalvos kodą, kaip string reikšmę
//c. hex - gražinantis HEX spalvos kodą, kaip string reikšmę



class Color {
    constructor(red, green, blue) {

    //checking provided values for red, green, and blue if they fall within the valid range (0 to 255).
    if (red < 0 || red> 255 || green< 0 || green > 255 || blue < 0 || blue > 255) {
        throw new Error("Invalid values");
    }
      //Object Properties
      this.red = red;
      this.green = green;
      this.blue = blue;
    }

//------------------------Getting colour codes in rgb, hsl, hex-------------------------------------------------//

    //Getter:
    get rgb() {
      return `RGB: (${this.red}, ${this.green}, ${this.blue})`;
    }
    
    get hex () {
        //Function to convert rgb ---> hex
        const toHex = (value) => { //function to convert a decimal value to its hexadecimal value
            const hex = value.toString(16); //16 as the radix. When toString is called with a radix of 16, it converts the number to base-16, which is the hexadecimal base.
            return hex.length === 1 ? '0' + hex : hex; //ensures that the resulting hexadecimal string always has two characters.
        };

        const hexRed = toHex(this.red);
        const hexGreen = toHex(this.green);
        const hexBlue = toHex(this.blue);

        return `HEX: #${hexRed}${hexGreen}${hexBlue}`
    }

    get hsl () {
        //Function to convert rgb ---> hsl

        // RGB values are 0 -1
        const r = this.red / 255;
        const g = this.green / 255;
        const b = this.blue / 255;
    
        //Calculate Max and Min:
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        // Lightness
        const lightness = (max + min) / 2;
        
        // Saturation
        const d = max - min;
        const saturation = lightness > 0.5 ? d / (2-max - min) : d / (max + min);

        // Hue
        let hue;
        switch (max) {
            case r:
                hue = ((g - b) / d + (g < b ? 6 : 0)) * 60;
                break;
            case g:
                hue = ((b - r) / d + 2) * 60;
                break;
            case b:
                hue = ((r - g) / d + 4) * 60;
                break;
            default:
                hue = 0;
                break;
        }
        return `HSL: (${Math.round(hue)},${Math.round(saturation * 100)},${Math.round(lightness * 100)})`;
    }
}

//---------------------------------------------Mixing two colors-------------------------------------------------//

// Sukurti klasę ColorPalette, kuri turi:

// Statinius geterius, grąžinsiančius Color Objektą:
// WHITE
// BLACK
// BROWN
// PINK
// RED
// ORANGE
// YELLOW
// GREEN
// CYAN
// BLUE
// PURPLE

// Statinį metodą, kuris sujungia dvi spalvas - gražina Color objektą

class ColorPalette {
    static get WHITE() {
      return new Color(255, 255, 255);
    }
  
    static get BLACK() {
      return new Color(0, 0, 0);
    }
  
    static get BROWN() {
      return new Color(165, 42, 42);
    }
  
    static get PINK() {
      return new Color(255, 182, 193);
    }
  
    static get RED() {
      return new Color(255, 0, 0);
    }
  
    static get ORANGE() {
      return new Color(255, 165, 0);
    }
  
    static get YELLOW() {
      return new Color(255, 255, 0);
    }
  
    static get GREEN() {
      return new Color(0, 128, 0);
    }
  
    static get CYAN() {
      return new Color(0, 255, 255);
    }
  
    static get BLUE() {
      return new Color(0, 0, 255);
    }
  
    static get PURPLE() {
      return new Color(128, 0, 128);
    }
  

//takes two Color objects and combines them
static mixColors(color1, color2) { 
    const blendedRed = Math.round((color1.red + color2.red) / 2);
    const blendedGreen = Math.round((color1.green + color2.green) / 2);
    const blendedBlue = Math.round((color1.blue + color2.blue) / 2);

    return new Color(blendedRed, blendedGreen, blendedBlue);
    }
}

//---------------------------------------------Results-------------------------------------------------//
    // colour codes in rgb, hsl, hex
    const color = new Color(200, 104, 145);
    console.log(color.rgb);
    console.log(color.hex);
    console.log(color.hsl);

    
    const white = ColorPalette. ORANGE;
    const black = ColorPalette.BLUE;
    const combinedColor = ColorPalette.mixColors(white, black);
    console.log(white.rgb);
    console.log(black.rgb);
    console.log(combinedColor.rgb);
    console.log(combinedColor.hex);
    console.log(combinedColor.hsl);










  