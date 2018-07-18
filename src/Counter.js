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
    // Rule Number 2: Must have a Render Method
    render() {
        // Rule Number 3: Must return some JSX or a call to React.createElement
        return(
            <div className="counter">
            3
            </div>
        );
    }
}

export default Counter;
