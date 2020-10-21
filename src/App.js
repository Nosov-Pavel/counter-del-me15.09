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
                    <button>Up</button>
                    <button>Down</button>
                </li>)}

            </ul>


        </div>
    );
}

export default App;
