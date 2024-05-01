import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSelection from '../components/LanguageSelection';

describe('LanguageSelection component', () => {
  beforeEach(() => {
    render(<LanguageSelection />);
  })

  test('renders correctly with default locale', () => {
    // Default locale is English
    expect(screen.getByLabelText('Language', {exact:false})).toBeInTheDocument();
    expect(screen.getByText('English', {selector: 'option'})).toBeInTheDocument();
    expect(screen.getByText('Hello, World!', {selector: 'h2'})).toBeInTheDocument();
  });
  test('changes locale on select change', () => {
    const selectElement = screen.getByLabelText('Language', {exact:false});
    fireEvent.change(selectElement, { target: { value: 'nl-NL' } });
    expect(screen.getByText('Dutch', {selector: 'option'})).toBeInTheDocument();
    expect(screen.getByText('Hallo, Wereld!', {selector: 'h2'})).toBeInTheDocument();
  });
});