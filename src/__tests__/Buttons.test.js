import { render, screen } from '@testing-library/react';

const Button = () => {
    return <button type="submit">Click Me</button>
};

// The button node can be extracted via its text content with screen.getByText()
it('Extract button node with getByText', () => {
    render(<Button/>);
    const button = screen.getByText('Click Me');
});

// The same button node can also be extracted with screen.getByRole()
it('Extract button node with getByRole', () => {
    render(<Button/>);
    const button = screen.getByRole('button');
});