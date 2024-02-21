// Sukurti komponentą su dviem range tipo įvedimais https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range vienu color įvedimu https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color ir mygtukais sukurti ir išsaugoti. Paspaudus mygtuką sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei juodu fonu. Keičiant range ir color įvedimus keičiasi ir kvadrato išvaizda. Kvadrato išvaizdą nustato įvedimai: range tipo įvedimai nuo 10 iki 200 ir nustato plotį ir aukštį pikseliais, color - fono spalvą. Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma ir į nustatymus nebereguoja. Vėl paspaudus mygtuką sukurti- atsiranda naujas reguliuojamas kvadratas.

import { useState } from 'react';

export default function Form5(){
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [color, setColor] = useState("#000000");
    const [savedSquare, setSavedSquare] = useState(null);
  
    const updateSquare = () => {
        const newSquare = (
          <div
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: color,
            }}
          />
        );
        setSavedSquare(newSquare);
      };
    
      const handleCreate = () => {
        updateSquare();
      };
    
      const handleSave = () => {
        setSavedSquare(null);
      };
    
      return (
        <div>
          <input
            type="range"
            min="10"
            max="200"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            onInput={updateSquare}
          />
          <input
            type="range"
            min="10"
            max="200"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onInput={updateSquare}
          />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            onInput={updateSquare}
          />

          <button onClick={handleCreate}>Create</button>

          {savedSquare && (
            <div>
              {savedSquare}
              <button onClick={handleSave}>Save</button>
            </div>
          )}

          
        </div>
      );
    };