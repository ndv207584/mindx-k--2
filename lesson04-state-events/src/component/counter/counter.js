import { useState } from "react";
const Counter = () => {
    // useState return về một mảng một chiều
    // mảng một chiều này có 2 giá trị
    const [count, setCount] = useState(0);

    // let count = 0;

    const onIncreaseHandler = () => {
        const newValue = count + 1;
        setCount(newValue);
    };

    const onDecreaseHandler = () => {
        const newValue = count - 1;
        setCount(newValue);
    };

    return (
        <div>
            <h1>Counter Example</h1>
            <button onClick={onIncreaseHandler}>Increase (+)</button>
            <span 
                style={{
                    padding: " 0 16px",
                }}
            >
                {count}
            </span>
            <button onClick={onDecreaseHandler}>Decrease (-)</button>
        </div>
    );
};

export default Counter;