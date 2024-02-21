// Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo laukeliu. Įvedamas tekstas turi būti atvaizduojamas atskirai komponento apačioje. Select pasirinkimai sudaryti iš 5 skirtingų spalvų, 5 skirtingų fontų dydžių ir 5 skirtingų fontų (Arial, Times new Roman ar panašiai) Select pasirinkimų nustatymai turi keisti atvaizduojamo teksto išvaizdą.

import { useState } from "react";

export default function Form4(){
    const [text, setText] = useState ("")
    const [color, setColor] = useState ("Black")
    const [fontSize, setFontSize] = useState ("20px")
    const [font, setFont] = useState ("Times New Roman")

    //atvaziduojant is duomenu bazes:
    const colors = ["Red", "Black", "Purple", "Yellow", "Blue", "Orange", "Pink"];

    return (
    <div>
        <input 
            type="text" 
            placeholder="text"
            value={text} 
            onChange={(e) => setText(e.target.value)}
        />

        <select 
        value={color}
            onChange={(e)=>{
                setColor(e.target.value)
        }}>
{/*   
            <option>Black</option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
            <option>Orange</option> */}

        {colors.map((color, index)=>(<option key={index}>{color}</option>))}
        </select>

        <select 
            value={fontSize}
            onChange={(e)=>{
                setFontSize(e.target.value)
        }}>
            <option>20px</option>
            <option>22px</option>
            <option>24px</option>
            <option>26px</option>
            <option>29px</option>
        </select>

        <select 
            value={font}
            onChange={(e)=>{
                setFont(e.target.value)
        }}>
            <option>Times new Roman</option>
            <option>Arial</option>
            <option>Verdana</option>
            <option>Helvetica</option>
            <option>Georgia</option>
        </select>

        <div style={{
            color: color,
            fontSize: fontSize,
            fontFamily: font,
        }}>{text}
        </div>
      
    </div>
    );
} 