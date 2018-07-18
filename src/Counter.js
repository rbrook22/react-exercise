import React from 'react';

// const Counter = ({finalValue, initialValue}) => {
//     return (
//         <div className="counter">
//             {initialValue}
//         </div>
//     );
// };

// Rule Number One: Must extend Reac.Component
class Counter extends React.Component {
    // Rule Number 4: accept props in the constructor method
    constructor(props) {
        super(props);
        // State is *my* stuff and always an object
        this.state = {
            currentValue: props.initialValue
        };

        setInterval(this._increaseValue, 1000);
    }

// Helper Function for Timer
// Always write helper functions as arrow functions
_increaseValue = () => {
    // Calculate the new current value
    let newCurrentValue = this.state.currentValue + 1;
    // Then set the new CurrentValue in State
        // Rule Number 2: Must have a Render Method
    // but I must call this.setSTate I cannot alter this.state directly

    this.setState({
        currentValue: newCurrentValue
    });
}


    render() {
        // Rule Number 3: Must return some JSX or a call to React.createElement
        return(
            <div className="counter">
                {this.state.currentValue}       
            </div>
        );
    }
}

export default Counter;
