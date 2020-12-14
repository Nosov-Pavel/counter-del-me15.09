import React, {useState} from "react";
import './App.css';

function App(){
    const initialCounters = [0,0,0];
    const [counters,setCounters] = useState(initialCounters);


    return(
      <div className="App">
          {counters.map(el => <li>
              <button></button>
              {el}</li>)}
      </div>

    );
}

export default App;