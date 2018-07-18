import React from 'react';
import Counter from './Counter';

// const handleClick= () => {
//   console.log('haaaayyyy');
// };

function converNumToCounter(value) {
  return (
    <Counter initialValue={value} />
  );
}
// NOt quite the react way
// let counterValues=[42, 3, 18, 29, 86, 2];
// let counterElements = counterValues.map(converNumToCounter);

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counterValues: [3,11,12]
    };
  }

  _handleClick = () => {
    console.log('haaaayyyy yoooooooo');
    this.setState({
      counterValues: this.state.counterValues.concat(0)
    });
  }

  render() {
    return (
      <div className="container">
        <button onClick={this._handleClick}>CLICK ME!</button>
        <div className="counter-box">
          {this.state.counterValues.map(converNumToCounter)}
        </div>
      </div>
    );
  }
}
// const App = () => {
//   return (
//     <div className="container">
//       <button onClick={handleClick}>CLICK ME!</button>
//       <div className="counter-box">
//         {counterElements}
//       </div>
//     </div>

//   );
// };

export default App;
