import React, {useState} from 'react'; // Import useState
import ReactDOM from 'react-dom';

const App = () => {
  // Declare a new state variable, which we'll call "count"
  const [counter, setCounter] = useState(0)

  // The application calls the setTimeout JSfunction and
  // passes it two parameters: a function to increment
  // the state of the counter and a timeout of one second.
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  // register the values of the component variables
  // in the console. 
  console.log('rendering...', counter)

  return(
    <div>{counter}</div>
  )
} 

ReactDOM.render(
  <App />,
  document.getElementById('root')
)