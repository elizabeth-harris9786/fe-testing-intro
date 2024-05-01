import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const GreetingFormTest = () => {
    return(
        <form>
            <label role="textbox" htmlFor="greeting">
                Greeting:
            </label>
            <input type="text" id="greeting" />
            <button type="submit">Submit</button>
        </form>
    );
};

it('should show text content as Hello!', () => {
    render(<GreetingFormTest />);
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    // Simulate typing 'Hello!'
    userEvent.type(textbox, 'Hello!');
    // Simulate clicking button
    userEvent.click(button);

    // Assert textbox has text content 'Hello!'
    expect(textbox).toHaveValue('Hello!');
});