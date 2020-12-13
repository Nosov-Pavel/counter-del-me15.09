import React, {useState} from "react";

function App(){
    const initialCounters = [0,0,0];

    const [counters, setCounters] = useState(initialCounters)
    return(
        <div>
            {counters}

        </div>
    );
}

export default App;