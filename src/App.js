import React, {useState} from 'react';

const initialCounters = [
    {id: 1, title: 'Green', count: 5},
    {id: 2, title: 'Pink', count: 50},
    {id: 3, title: 'Orange', count: 7},
];

function App() {
    const [counters, setCounters] = useState(initialCounters);

    const deleteById = (id) => {
        console.log(id);
        const filteredCounters = counters.filter(el => el.id !== id);
        setCounters(filteredCounters);
    };


    return (
        <div>
            Counters

            <ul>
                {counters.map(el => <li key={el.id}>{el.title}
                    <button>-</button>
                    {el.count}
                    <button>+</button>
                    <button onClick={() => deleteById(el.id)}>Delete</button>
                    <button>UP</button>
                    <button>Down</button>
                </li>)}

            </ul>
            <input type="text" placeholder='Counter title'/>
            <input type="text" placeholder='Counter value'/>
            <button>Add counter</button>


        </div>
    );
}

export default App;
