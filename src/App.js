import React from 'react';
import Counter from './Counter';

const handleClick= () => {
  console.log('haaaayyyy');
};

function converNumToCounter(value) {
  return (
    <Counter initialValue={value} />
  );
}
// NOt quite the react way
let counterValues=[42, 3, 18, 29, 86, 2];
let counterElements = counterValues.map(converNumToCounter);


const App = () => {
  return (
    <div className="container">
      <button onClick={handleClick}>CLICK ME!</button>
      <div className="counter-box">
        {counterElements}
      </div>
    </div>

  );
};

export default App;
