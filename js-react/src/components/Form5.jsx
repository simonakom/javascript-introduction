// Sukurti komponentą su dviem range tipo įvedimais https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range vienu color įvedimu https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color ir mygtukais sukurti ir išsaugoti. Paspaudus mygtuką sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei juodu fonu. Keičiant range ir color įvedimus keičiasi ir kvadrato išvaizda. Kvadrato išvaizdą nustato įvedimai: range tipo įvedimai nuo 10 iki 200 ir nustato plotį ir aukštį pikseliais, color - fono spalvą. Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma ir į nustatymus nebereguoja. Vėl paspaudus mygtuką sukurti- atsiranda naujas reguliuojamas kvadratas.

import { useState } from 'react';

export default function Form5(){
  const [boxes, setBoxes] = useState ([]);
  const [width, setWidth] = useState (0);
  const [height, setHeight] = useState (0);
  const [color, setColor] = useState ("black");

return (
  <div className="mt-5 bg-blue-200 min-h-[70vh] pb-1 font-semibold border-2 border-purple-400 rounded">
    <div className='flex gap-5 items-center p-5 bg-blue-300'>
      <button 
        className='border-2 border-pink-400 px-3 py-1 bg-pink-200' 
        onClick={()=>{
          setWidth(100); //creating box
          setHeight(100) //creating box
      }}> Create 
      </button>

      <button 
        className='border-2 border-pink-400 px-3 py-1 bg-pink-200' 
        onClick={()=>{
          setBoxes([...boxes, {width: width, height: height, color: color}]) // updates the state variable boxes by adding the content of the currentBox array to it
          setWidth(0); //resetting
          setHeight(0) //resetting
      }}> Save 
      </button>

      <span>Width {width}px</span>
      <input 
        className="cursor-pointer" 
        type="range"
        min="10"
        max="200"
        value={width}
        onChange={(e)=> setWidth(e.target.value)} 
      />

      <span>Height {height}px</span>
      <input 
        className="cursor-pointer text-red-950" 
        type="range"
        min="10"
        max="200"
        value={height}
        onChange={(e)=> setHeight(e.target.value)} 
      />

      <span>Color</span>
      <input 
        className="cursor-pointer border-pink-400  bg-blue-300" 
        type="color"
        value={color}
        onChange={(e)=> setColor(e.target.value)} 
      />  
    </div>

    <div className='flex justify-center gap-5 border-2 py-5 border-purple-300 min-h-[300px] m-5 bg-blue-200'>
      <div className='w-[30%]'>
        <div className='m-5'> View:</div>
        <div className='bg-slate-200 min-h-[300px] w-[100%] flex flex-wrap justify-center items-center '>
            <div
              style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: color,
              }}>
            </div>
        </div>
      </div>

      <div className='w-[50%]'>
        <div className='m-5'>Created Boxes:</div>
        <div className='bg-slate-200 min-h-[300px] w-[100%] flex flex-wrap gap-10 justify-start items-center p-10'>
          {boxes.map((box, index) => (
            <div
            key={index}
            style={{
              width: `${box.width}px`,
              height: `${box.height}px`,
              backgroundColor: box.color,
            }}>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}


// export default function Form5(){
//     const [width, setWidth] = useState(100);
//     const [height, setHeight] = useState(100);
//     const [color, setColor] = useState("#000000");
//     const [savedSquare, setSavedSquare] = useState(null);
  
//     const updateSquare = () => {
//         const newSquare = (
//           <div
//             style={{
//               width: `${width}px`,
//               height: `${height}px`,
//               backgroundColor: color,
//             }}
//           />
//         );
//         setSavedSquare(newSquare);
//       };
    
//       const handleCreate = () => {
//         updateSquare();
//       };
    
//       const handleSave = () => {
//         setSavedSquare(null);
//       };
    
//       return (
//         <div>
//           <input
//             type="range"
//             min="10"
//             max="200"
//             value={width}
//             onChange={(e) => setWidth(e.target.value)}
//             onInput={updateSquare}
//           />
//           <input
//             type="range"
//             min="10"
//             max="200"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//             onInput={updateSquare}
//           />
//           <input
//             type="color"
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//             onInput={updateSquare}
//           />

//           <button onClick={handleCreate}>Create</button>

//           {savedSquare && (
//             <div>
//               {savedSquare}
//               <button onClick={handleSave}>Save</button>
//             </div>
//           )}

          
//         </div>
//       );
//     };