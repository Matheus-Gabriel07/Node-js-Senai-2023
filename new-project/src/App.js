import "./App.css";
import Carro from "./Carro";
import Futebol from "./Futebol";

function App() {
  return (
    <div>
      <Carro cor="azul" />
      <Futebol fezGol={true}/>
    </div>
  );
}

export default App;
