import React, { useState } from 'react';
function App() {
    const [counter, setCounter] = useState(0);
    const onIncrement = () => {
        setCounter(counter => counter + 1);
    };
    const onDecrement = () => {
        setCounter(counter => counter - 1);
    };
    return React.createElement("div", null,
        React.createElement("h1", null,
            "Counter: ",
            counter),
        React.createElement("button", { onClick: onDecrement }, "-"),
        React.createElement("button", { onClick: onIncrement }, "+"));
}
export default App;
//# sourceMappingURL=App.js.map