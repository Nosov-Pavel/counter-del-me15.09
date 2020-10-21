import React, {useState} from 'react';

const initialCounters = [
    { id: 1, title: 'Green', count: 5},
    { id: 2, title: 'Pink', count: 50}
    ];

function App() {
    const [counters, setCounters] = useState(initialCounters)

  return (
    <div>
        Counters

        <ul>
            {counters.map(el => <li key={el.id}>{el.title} {el.count}</li>)}

        </ul>




    </div>
  );
}

export default App;
