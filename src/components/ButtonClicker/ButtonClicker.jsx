import { useState } from 'react';
    // ^          ^  grab me something from in react

function ButtonClicker() {
    // track the value of count
    // let count = 0;
    let [count, setCount] = useState(0);
 /*
    ^^^ same as:
    let whateverUseStateReturns = useState(0);
    let count = whateverUseStateReturns[0];
    let setCount whateverUseStateReturns[1];
 */

    const onButtonClick = () => {
        // increase count when we click the button
        // count++;
        // setCount changes the value of count
        // and also tells React to re-render the DOM
        setCount(count + 1);
        console.log('onButtonClick', count);
        }

    return (
        <>
            <h3>ButtonClicker Component</h3>
            {/* // $(document).on('click', '.myBtn', onButtonClick);*/}
            <button onClick={onButtonClick}>Click me!</button>
            <h4>Click count: {count}</h4>
        </>
    );
}

// export our component function
// so others can use it
export default ButtonClicker;