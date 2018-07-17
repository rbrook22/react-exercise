import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div className="container">
      <button>CLICK ME!</button>
      <div className="counter-box">
        <Counter initialValue="42"/>
        <Counter initialValue="24"/>
        <Counter initialValue="34"/>
      </div>
    </div>

  );
};

export default App;
