import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSelection from '../LanguageSelection';

describe('LanguageSelection component', () => {
  test('renders correctly with default locale', () => {
    render(<LanguageSelection />);
    // Default locale is English
    expect(screen.getByLabelText('English :')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Hello, World!')).toBeInTheDocument(); // Assuming 'Hello, World!' is the default content for English
  });
  test('changes locale on select change', () => {
    render(<LanguageSelection />);
    const selectElement = screen.getByLabelText('English :', {selector: 'label'});
    fireEvent.change(selectElement, { target: { value: 'nl-NL' } });
    expect(screen.getByLabelText('Dutch :')).toBeInTheDocument();
    expect(screen.getByText('Dutch')).toBeInTheDocument();
    expect(screen.getByText('Hallo, Wereld!')).toBeInTheDocument(); // Assuming 'Hallo, Wereld!' is the content for Dutch
  });
});