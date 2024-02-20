// Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti. Rodyti visų įvestų katinukų sąrašą. Puslapiui persikrovus, katinukų sąrašas turi išlikti nepakitęs. Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio. Skaičiuoti ir atvaizduoti bendrą katinukų svorį.

import { useState } from "react";

export default function Form2(){
    //masyvas kuriame laikomos visos kates(vardas+kg). Kiekvieno rendering metu bus pridedama po viena reiksme
    // const [cats, setCats] = useState (getCatsFromLocalStorage [
    //     {name: "Petras", weight:2 }, 
    //     {name:"Tomas", weight:4.5},  
    //     {name:"Justinas", weight:0.5}
    // ]
    // ); 
    const [cats, setCats] = useState(getCatsFromLocalStorage); //paduodamas tik reference i funkcija bet nera iskvieciama
    const [newCatName, setNewCatName] = useState(""); //saugos nauja kates pavadinima ir svori iki pridejimo i masyva
    const [weight, setWeight] = useState(""); 

    //localstorage
    function getCatsFromLocalStorage() {
        const cats = JSON.parse(localStorage.getItem("cats") || "[]");
        console.log(cats);
        return cats;
      }

    //total weight
    function calculateTotalWeight() {
        return cats.reduce((total, cat) => total + parseFloat(cat.weight), 0);
    }

    return <div>
        <input 
            type="text" 
            placeholder="cat name" 
            value = {newCatName}
            //kiekvieno rendering metu reikia gauti is evento nauja reiksme.
            onChange={(e)=>{setNewCatName(e.target.value);}}
        />
        <input 
            type="number" 
            placeholder="kg" 
            value = {weight}
            min={0} 
            max={40} 
            className="weightInput"
            onChange={(e)=>{setWeight(e.target.value);}}
        />

        {/* kad pasiziureti koks masyva gaunamas */}
        <button onClick={()=>{console.log(cats)}}>parodyti masyva</button> 

        <button onClick={()=>{
            const newCat = {name: newCatName, weight: weight,}
            //sukuriamas naujas masyvas is praeitu kates masyvo reiskmiu + prisideda naujai ivesta kates reiksme
            const newArray = [...cats, newCat]
            setCats (newArray);
            localStorage.setItem("cats", JSON.stringify(newArray));

            //atsatyti inputa atgal i tuscias kabutes
            setNewCatName("");
            setWeight("");
        }}>add cat</button>

        {/* atvaizduojamas masyvo reiksmes (su map): */}
        <ul>
            {cats
            .sort((a, b) => b.weight - a.weight) //Rūšiavimas pagal svorį 
            .map((cat, index) => (
                <li key={index}>{cat.name} {cat.weight}kg</li>
            ))}
        </ul>

        {/* Įrašas apie bendrą katinų svorį */}
        <p>Total weight: {calculateTotalWeight()} kg</p>

    </div>
}