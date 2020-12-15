import React, {useState} from 'react';
import "./App.css";

function App() {
    const threeCounters = [0,0,0];
    const [counters, setCounters] = useState(threeCounters);


    return (
        <div className="App">
            {counters}

        </div>
    );
}
export default App;
