import React from 'react';

function App() {

    const minus = () => {
        console.log('MINUS')
    }

  return (
    <div>
      <button onClick={minus}>-</button>
      3
      <button>+</button>

    </div>
  );
}

export default App;
