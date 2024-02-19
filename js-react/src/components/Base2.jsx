// Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

//1. kai atributas naudojamas su "props":
export default function Base2 (props)  {
    // console.log("Komponentas buvo užkrautas")
    // console.log(props);
    return <h1>2task. {props.atributas1}</h1>;
}

// //2. kai atributas destrukturuojamas:
// export default function Base2({atributas1, atributas9}){
//     return <h1>{atributas1}</h1>;
// }

// //3. kai atributas nera paminetas app.js:
// export default function Base2({atributas20="Pridekite atributa 20 i app.js"}){ 
//     return <h1>{atributas20}</h1>;
// }