import './App.css';
import Ejercicios from './components/Ejercicios';
import Saludos from './components/Saludos';
import Tareas from './components/Tareas';

function App() {
  return (
    <div className="App">
      <h1>Primeros pasos con REACT</h1>
      <h2>Bienvenidos </h2>
      <Saludos nombre="Daniel" apellidos=" Trejo"/>
      <Ejercicios nombre="Ethan" edad="22" pasatiempo="Escuchar Musica"/>
      <Tareas/>
    </div>
  );
}

export default App;
