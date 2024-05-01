import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

const HeaderTest = () => {
    return <h1 className='title'>I am a header</h1>
};

it('should show the button as disabled', () => {
    // render Button component
    render(<HeaderTest />);
    // Extract header
    const header = screen.getByRole('heading');
    // Use jest-dom assertions
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('I am a header');
    expect(header).toHaveClass('title');
});