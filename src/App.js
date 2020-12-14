import React, {useState} from "react";
import './App.css';

function App(){
    const initionCounters = [0,0,0];
    const [counters,setCounters] = useState(initionCounters);


    return(
      <div className="App">
          {counters.map(el => <li>{el}</li>)}
      </div>

    );
}

export default App;