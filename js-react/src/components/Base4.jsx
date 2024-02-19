// Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage. 

import Base2 from "./Base2";

export default function  Base4({
    text1 = "pirmas defoult tekstas",
    text2 = "antras defoult tekstas",
}) {
    return (
    <>
        <Base2 atributas1={"4task " + text1} />
        <h2>4task.{text2}</h2>
    </>
    );
}

// //childern spec. props - nreikia nurodyti app.js atributa 
// export default function Base4 ({children}) {
//     return (
//     <>
//         <h1>Vienas</h1> 
//         <h2 style = {{ background: "Red", padding:"2rem", color: "white"}}>{children}</h2>
//     </>
//     );
// }