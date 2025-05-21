import { render, screen, fireEvent } from '@testing-library/react'
import React, { useState } from 'react'
import InputField from '../lib/InputField/InputField'


const placeholderText = 'Placeholder'
const helperText = 'Helper text'

describe('InputField ', () => {
  it('should call onChange when input value changes', () => {
    const TestComponent = () => {
      const [value, setValue] = useState('')
      const handleChange = (e) => setValue(e.target.value)
      return (
        <InputField
          onChange={handleChange}
          placeholder={placeholderText}
          value={value}
        />
      )
    }

    render(<TestComponent />)

    const input = screen.getByPlaceholderText(placeholderText)
    fireEvent.change(input, { target: { value: 'new value' } })

    expect(input.value).toBe('new value')
  })

  it('should render error state when error prop is true', () => {
    render(
      <InputField
        error
        helperText='Error message'
        onChange={() => {}}
        placeholder={placeholderText}
        value=''
      />
    )
    const errorText = screen.getByText('Error message')
    expect(errorText).toHaveClass('s2s-helper-text-error')
  })

  it('should render helper text', () => {
    render(
      <InputField
        helperText={helperText}
        onChange={() => {}}
        placeholder={placeholderText}
        value=''
      />
    )
    const helperTextElement = screen.getByText(helperText)
    expect(helperTextElement).toBeInTheDocument()
  })

  it("should render label when provided", () => {
    const labelText = "Test Label";
    render(
      <InputField
        label={labelText}
        onChange={() => {}}
        placeholder={placeholderText}
        value=""
      />
    );

    expect(screen.getByText(labelText)).toBeInTheDocument();

    const label = document.querySelector(".s2s-input-label");
    expect(label).toHaveTextContent(labelText);
  });

  it("should render search icon when search prop is true", () => {
    render(
      <InputField
        onChange={() => {}}
        placeholder={placeholderText}
        search
        value=""
      />
    );

    const searchIcon = document.querySelector(".s2s-search-icon");
    expect(searchIcon).toBeInTheDocument();
  });

})
