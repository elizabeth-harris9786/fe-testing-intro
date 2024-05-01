## Overview

As we all know, testing is an integral part of software development to ensure the reliability and stability of applications. 
In the context of React applications, frontend testing involves verifying that user interfaces behave as expected. 
As a data engineer, understanding frontend testing can enhance your skills and enable you to contribute effectively to projects involving data visualization or frontend-heavy applications.

## Types of Frontend Tests

1. Unit Tests
   * Aim: Test individual components or functions in isolation. 
   * Tools: Jest and React Testing Library. 
   * Approach: Test component rendering, state changes, and interactions. 
   * Example: Test a React component's rendering based on different props. 
2. Integration Tests
   * Aim: Test interactions between multiple components. 
   * Tools: Jest, React Testing Library, and Enzyme. 
   * Approach: Simulate user interactions and verify the expected outcome. 
   * Example: Test how a form component interacts with its child input components. 
3. End-to-End (E2E) Tests
   * Aim: Test the entire application flow from the user's perspective. 
   * Tools: Cypress and Selenium. 
   * Approach: Automate browser interactions to simulate user behavior. 
   * Example: Test the signup process, including form submission and redirection. 

## Best Practices for Frontend Testing
  * Isolation: Test components in isolation to ensure that failures are localized and easy to debug. 
  * Mocking: Use mocks to simulate external dependencies, such as API calls or data fetching functions. 
  * Readable Tests: Write descriptive test cases with meaningful names to enhance readability and maintainability. 
  * Test Coverage: Aim for high test coverage to mitigate the risk of undetected bugs. 
  * Continuous Integration (CI): Integrate tests into CI/CD pipelines to automate testing and ensure early detection of issues.

## Key things to know before we get started

### What is the DOM?

Key thing before we get start is that in web development, the Document Object Model (DOM) represents the structure of a webpage as a hierarchical tree of objects. 
Each element in an HTML document, such as `<div>`, `<p>`, or `<span>` is a node in this tree. 
The DOM allows developers to manipulate the content, structure, and style of a webpage dynamically using JavaScript.

**The Challenge:** 

As web applications become more complex and interactive, manipulating the DOM directly can be inefficient and lead to performance issues. 
Consider a scenario where multiple JavaScript functions update different parts of a webpage simultaneously. 
Each manipulation of the DOM triggers a browser reflow or repaint, impacting the application's responsiveness and user experience.

### Enter the Virtual DOM 

To address these challenges, frontend libraries like React introduced the concept of the Virtual DOM.

* What is it? 
  * The Virtual DOM is a lightweight, in-memory representation of the actual DOM. It mirrors the structure of the real DOM but exists entirely in memory. 
* How does it work? 
  * When you make changes to a webpage using React (or similar libraries), you're actually updating the Virtual DOM, not the real DOM directly. React then compares the Virtual DOM with the real DOM, identifies the differences (known as "diffing"), and applies only the necessary changes to the real DOM. This process is called reconciliation. 
* Why is it beneficial? 
  * By minimizing direct manipulations of the real DOM, React optimizes performance and improves efficiency. Batch updates and intelligent diffing reduce the number of browser reflows and repaints, resulting in smoother and faster user interfaces. 

#### Key Benefits: 

* Performance Optimization: 
  * Virtual DOM updates are faster and more efficient than direct DOM manipulation, leading to better overall performance. 
* Simplified Development: 
  * Developers can focus on writing declarative code to describe the desired UI state, while React handles the optimization and rendering process behind the scenes. 
* Cross-Platform Consistency: 
  * Since React manages the rendering process, developers can maintain consistent user experiences across different browsers and devices. 

In summary, the Virtual DOM is a fundamental concept in modern frontend development, particularly in libraries like React. By abstracting and optimizing DOM updates, it enables developers to build dynamic and responsive web applications with improved performance and user experience.

## Virtual DOM and Frontend Testing

The Virtual DOM significantly enhances the testing capabilities of React applications by providing a lightweight, isolated and efficient environment for rendering adn testing components. By leverging the Virtual DOM, developers can write comprehensive tests that verify component behavior, state and structure, ensuring the reliability and quality of their React applications.

## What is React Testing Library?
React Testing Library (RTL) is a library for testing React applications. 
React Testing Library focuses on testing components from the end-user’s experience rather than testing the implementation and logic of the underlying React components.

### RTL Terms
#### `render`

The React Testing Library (RTL) provides a `render()` method for virtually rendering React components in the testing environment. 
Once rendered in this way, the `screen.debug()` method can be used to view the virtually rendered DOM.

```js
import { render, screen } from '@testing-library/react'

const Greeting = () => {
  return <h1>Hello ING</h1>
};

it('should print the Greeting component', () => {
  render(<Greeting/>);
  screen.debug();
});
```

**Output**
```
<body>
  <div>
    <h1>
      Hello ING
    </h1>
  </div>
</body>
```

#### `screen`

`screen` was added in DOM Testing Library v6.11.0 (which means you should have access to it in @testing-library/react@>=9).
It comes from the same import statement you get render from: `import {render, screen} from '@testing-library/react'`
The benefit of using `screen` is you no longer need to keep the render call destructure up-to-date as you add/remove the queries you need.
You only need to type `screen.` and let your editor's magic autocomplete take care of the rest.

The only exception to this is if you're setting the container or baseElement which you probably should avoid doing
(I honestly can't think of a legitimate use case for those options anymore, and they only exist for historical reasons at this point).

#### `getByX` Queries

The screen object from the React Testing Library (RTL) provides methods for querying the rendered elements of the DOM in order to make assertions about their text content, attributes, and more.

The `screen.getByX()` methods (such as `screen.getByRole()` and `screen.getByText()`) return the matching DOM node for a query, or throw an error if no element is found.

```js
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
```

#### User Event

The `@testing-library/user-event` library is an extension of `@testing-library` that provides tools for simulating and applying user interactions to the virtual DOM. 
The provided userEvent object contains methods that can be used to simulate clicks, typing, and much more.