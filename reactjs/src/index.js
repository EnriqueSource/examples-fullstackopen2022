import React, {useState} from 'react'; // Import useState
import ReactDOM from 'react-dom';


const App = () => {
  // Creamos una constante que es un array con la
  // variable "clicks" y la función "setClicks". Le asignamos
  // la función "useState()", dentro de la cual creamos
  // el objeto que contiene el recuento de clicks de los
  // botones "left" y Right".
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  });

  // Manejador de eventos para click izquierdo
  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left +1
    }
    setClicks(newClicks);
  }

  // Manejador de eventos para click derecho
  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks);
  }

  // Retornamos lo que se verá en pantalla
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
} 

ReactDOM.render(
  <App />,
  document.getElementById('root')
)