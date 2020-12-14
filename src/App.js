import React, {useState} from "react";
import './App.css';

function App(){
    const initialCounters = [0,0,0];
    const [counters,setCounters] = useState(initialCounters);

    const addCounter = {
        const
    }


    return(
      <div className="App">
          <button>Add</button>
          {counters.map(el => <li>
              <button>+</button>
              {el}
              <button>-</button>
          </li>)}
      </div>

    );
}

export default App;