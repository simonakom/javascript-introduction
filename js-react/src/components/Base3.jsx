// Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai, bet koks kitas skaičius nudažomas juodai.

export default function Base3({mode=0 }) {

    function decideColor(){
        if (mode === 1) return "blue";
        else if (mode === 2) return "red";
        else return "black";
    }
    return <h1 style = {{ color:decideColor() }}>3task. Zebrai ir Bebrai</h1>
}