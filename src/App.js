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
    const [counters2, setCounters2] = useState(moreCounters);

    const addCounter2 = () => {
        const newCounters2 = [...counters2];
        newCounters2.push(2);
        setCounters2(newCounters2)
    }

    const moreCounters3 = [3, 3, 3];
    const [couters3, setCounters3] = useState(moreCounters3);

    const addCounter3 = () => {
        const newCounter3 = [...moreCounters3];
        newCounter3.push(3);
        setCounters3(newCounter3)
    }

    const moreCounters4 = [4, 4, 4];
    const [counters4, setCounters4] = useState(moreCounters4);

    const addCounter4 = () => {
        const newCounter4 = [...moreCounters4];
        newCounter4.push(4);
        setCounters4(newCounter4)
    }
    const  moreCounters5 = [5, 5, 5];
    const [counters5, setCounters5] = useState()



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
            <button onClick={addCounter2}>AddCounter2</button>
            {counters2.map(el => <li>
                <button>+</button>
                {el}
                <button>-</button>
            </li>)}
            <br/>
            <button onClick={addCounter3}>AddCounter3</button>
            {couters3.map(el => <li>
                <button>+</button>
                {el}
                <button>-</button>
            </li>)}
            <br/>
            <button onChange={addCounter4}>AddCounter4</button>
            {counters4.map(el => <li>
                <button>+</button>
                {el}
                <button>-</button>
            </li>)}
        </div>
    );
}

export default App;