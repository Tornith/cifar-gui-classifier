import React, {useState} from 'react';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div className="app-wrapper">
            <header>
                <h1>Counter app</h1>
            </header>
            <main>
                <div className="counter">
                    <div className="counter__value" data-testid="counter">{counter}</div>
                    <div className="counter__controls">
                        <button className="counter__button" onClick={increment} data-testid="increment">+</button>
                        <button className="counter__button" onClick={() => setCounter(0)} data-testid="reset">r</button>
                        <button className="counter__button" onClick={decrement} data-testid="decrement">-</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
