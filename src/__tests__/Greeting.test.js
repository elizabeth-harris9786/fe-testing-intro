import { render, screen } from '@testing-library/react'

const Greeting = () => {
    return <h1>Hello ING</h1>
};

it('should print the Greeting component', () => {
    render(<Greeting/>);
    screen.debug();
});