// Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.

import Base4 from "./Base4";

export default function  Base5 ({text1, text2, color = "green"}) {
    return (
    <div style={{color:color}}>
        <Base4 text1={"5task " + text1} text2={"5task " + text2} />
    </div>
    );
}