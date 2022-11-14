import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('counter starts at 0', () => {
    render(<App />);
    const counter = screen.getByText(/0/i);
    expect(counter).toBeInTheDocument();
});

test('counter increments by 1', () => {
    render(<App />);
    const counter = screen.getByTestId('counter');
    const increment = screen.getByTestId('increment');
    fireEvent.click(increment);
    expect(counter).toHaveTextContent('1');
});

test('counter decrements by 1', () => {
    render(<App />);
    const counter = screen.getByTestId('counter');
    const decrement = screen.getByTestId('decrement');
    fireEvent.click(decrement);
    expect(counter).toHaveTextContent('-1');
});

test('counter resets to 0', () => {
    render(<App />);
    const counter = screen.getByTestId('counter');
    const increment = screen.getByTestId('increment');
    fireEvent.click(increment);
    const reset = screen.getByTestId('reset');
    fireEvent.click(reset);
    expect(counter).toHaveTextContent('0');
});
