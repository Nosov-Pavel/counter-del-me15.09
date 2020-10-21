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
            <li><button>-</button>5<button>+</button></li>
            <li><button>-</button>15<button>+</button></li>
            <li><button>-</button>25<button>+</button></li>
        </ul>




    </div>
  );
}

export default App;
