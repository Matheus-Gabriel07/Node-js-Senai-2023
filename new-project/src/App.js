import "./App.css";
import Futebol from "./Futebol";
import Contador from "./Contador";
import Temporizador from "./Temporizador";

function App() {
  return (
    <div>
      <Futebol fezGol={true}/>
      <Contador/>
      <Temporizador/>
    </div>
  );
}

export default App;
