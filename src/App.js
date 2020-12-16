import React, {useState} from "react";
import "./App.css"

function App() {
    const initialCounters = [0, 0, 0];
    const [counters, setCounters] = useState(initialCounters);

    const intCounters = [0, 0, 0];
    const [counters1, setCounters1] = useState(intCounters);

    const moreCounters =[0,0,0];
    const [counters3, setCounters3] = useState(moreCounters);

    return (
        <div className='App'>
            {counters}
            <br/>
            {counters1}
            <br/>
            {counters3}
        </div>
    );
}

export default App;