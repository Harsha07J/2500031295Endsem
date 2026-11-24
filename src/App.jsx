
import { useState } from 'react';
import './App.css';

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(0);
    const [count, setCount] = useState(0);

    function add() {
        setResult(Number(num1) + Number(num2));
    }

    function subtract() {
        setResult(Number(num1) - Number(num2));
    }

    function multiply() {
        setResult(Number(num1) * Number(num2));
    }

    function divide() {
        if (Number(num2) === 0) {
            setResult("Cannot divide by zero");
        } else {
            setResult(Number(num1) / Number(num2));
        }
    }

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>

            <input
                type="number"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />

            <input
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />

            <div>
                <button onClick={add}>Addition (+)</button>
                <button onClick={subtract}>Subtraction (-)</button>
                <button onClick={multiply}>Multiplication (*)</button>
                <button onClick={divide}>Division (/)</button>
            </div>

            <h2>Result: {result}</h2>

            <hr />

            <h2>Counter: {count}</h2>

            <button onClick={increment}>Increment (+)</button>
            <button onClick={decrement}>Decrement (-)</button>
        </div>
    );
}

export default App;
