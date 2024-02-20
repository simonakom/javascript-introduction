// Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50. Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitęs.

import { useState } from "react";

export default function Form3(){
    const [first, setFirst] = useState (100)

    return (
    <div>
        <div>
            <span>First number</span>
            <input 
                type="number" 
                value={first} 
                onChange={(e)=>{
                    setFirst(e.target.value);}} />
        </div> 
        <div>
            <span>Second number</span>
            <input 
                type="number"
                value={first/2}
                onChange={(e)=>{
                    setFirst(e.target.value*2);}} />
        </div> 
    </div>
    );
}