import './App.css';
import Base1 from './components/Base1';
import Base2 from './components/Base2';
import Base3 from './components/Base3';
import Base4 from './components/Base4';
import Base5 from './components/Base5';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';
import Form5 from './components/Form5';

function App() {

  // const obj = { //for task 5 
  //   objColor: "brown", 
  //   objText1:"first text in object", 
  //   objText2:"second text in object"
  // }

  return ( 
    <div className="App">
      <Base1/>
  <hr></hr>
  <br></br>
      <Base2
      	atributas1="Tekstas"
				atributas2={4}
				atributas3={true}
				atributas4={new Date()}
				atributas5={() => console.log("Anonimine funkcija")}
				atributas6={["vienas", "du", "trys"]}
				atributas7={{ name: "Justinas", age: 24 }}
				atributas8={
					class Zmogus {
						constructor(name, surname) {
							this.name = name;
							this.surname = surname;
						}
					}
				}
				atributas9={<Base1 />}
			/>
  <hr></hr>
  <br></br>
      <Base3 mode={1} />
  <hr></hr>
  <br></br>
      <Base4 text1="text1" text2="text2"/>
          {/* <Base4>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, magni.</p>
            </Base4> */}
  <hr></hr>
  <br></br>
      <Base5 text1="first text" text2="second text" color="purple"/> 
            {/* <Base5 text1="text1" text2="text2" color="orange" obj={obj}/>  */}
  <hr></hr>
  <br></br>
      <Form1  />
  <hr></hr>
  <br></br>
      <Form2 />
  <hr></hr>
  <br></br>
      <Form3 />
  <hr></hr>
  <br></br>
      <Form4 />
  <hr></hr>
  <br></br>
      <Form5 />
  <hr></hr>
  <br></br>
    </div>
  );
} 
export default App;