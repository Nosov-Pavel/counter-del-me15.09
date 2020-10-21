import React, {useState} from 'react';

const initialCounters = [
    {title: 'Green', count: 5},
    {title: 'Pink', count: 50}
    ];

function App() {
    const [counters, setCounters] = useState(initialCounters)

  return (
    <div>
        Counters

        <ul>
            {counters.map(el => <li>{el.title} {el.count}</li>)}

        </ul>




    </div>
  );
}

export default App;
