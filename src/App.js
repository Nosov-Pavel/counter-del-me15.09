import React, {useState} from "react";
import './App.css';

function App(){
    const initialCounters = [0,0,0];
    const [counters,setCounters] = useState(initialCounters);

    const addCounter = () => {
        const newCounters = [...counters];
        newCounters.push(0);
        setCounters(newCounters)
    }


    return(
      <div className="App">
          <button onClick={addCounter}> Add Counter </button>
          {counters.map(el => <li>
              <button>+</button>
              {el}
              <button>-</button>
          </li>)}
      </div>

    );
}

export default App;