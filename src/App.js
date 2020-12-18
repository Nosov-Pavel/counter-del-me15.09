import React, {useState} from "react";
import "./App.css"

function App() {
    const initialCounters = [0, 0, 0];
    const [counters, setCounters] = useState(initialCounters);

    const addCounter = () => {
        const newCounters = [...counters];
        newCounters.push(0);
        setCounters(newCounters)
    }

    const intCounters = [1, 1, 1];
    const [counters1, setCounters1] = useState(intCounters);

    const addCounter1 = () => {
        const newCounters1 = [...counters1];
        newCounters1.push(1);
        setCounters1(newCounters1)
    }

    const moreCounters = [2, 2, 2];
    const [counters3, setCounters3] = useState(moreCounters);

    return (
        <div className='App'>
            <button onClick={addCounter}>AddCounter</button>
            {counters.map(el => <li>
                <button>+</button>
                {el}
                <button>-</button>
            </li>)}
            <br/>
            <button onClick={addCounter1}>AddCounter1</button>
            {counters1.map(el => <li>
                <button>+</button>
                {el}
                <button>-</button>
            </li>)}
            <br/>
            {counters3}
        </div>
    );
}

export default App;