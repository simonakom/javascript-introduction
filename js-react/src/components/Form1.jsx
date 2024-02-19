// Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į laukelį skaičių ir paspaudus mygtuką, atsiranda laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir paspaudus mygtuką, prie jau egzistuojančių kvadratėlių papildomai prisideda naujas laukelyje nurodytas kvadratėlių kiekis. Kiekvieno kvadratėlio viduryje turi būti pavaizduotas rand skaičius 100 - 200.


import { useState } from "react";
import { rand } from "./utils/rand";

function Square({ id }) {
	return <div className="box">{id}</div>;
}

export default function Form1() {
	const [boxArray, setBoxArray] = useState([]);
	const [numberOfNewBoxes, setNumberOfNewBoxes] = useState(0);

	function displayBox(box, index) {
		return <div asdfg={index}>{box}</div>;
	}

    // console.log (rand(100,200));
	return (
		<div>
			<input
				type="number"
				value={numberOfNewBoxes}
				onChange={(e) => {
                    // console.log(e);
                    // console.log(e.target.value);
                    setNumberOfNewBoxes(e.target.value);
				}}
				min={0}/>
            <button 
                onClick={()=>{
                    const newBoxes = [];
                    for (let i = 0; i < numberOfNewBoxes; i++)
                        newBoxes.push(<Square id={rand(100, 200)} />);
                    //sujungiami du masyvai, esamos reiksmes + naujos
                    setBoxArray([...boxArray, ...newBoxes]); 
                    // console.log(newBoxes)
                    setNumberOfNewBoxes(0);
                }} >Create boxes
            </button>
            <div className="box-container">{boxArray.map(displayBox)}</div>
		</div>  
	);
}