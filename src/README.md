## Overview
Testing is an integral part of software development to ensure the reliability and stability of applications. 
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


`screen` was added in DOM Testing Library v6.11.0 (which means you should have access to it in @testing-library/react@>=9). It comes from the same import statement you get render from:

import {render, screen} from '@testing-library/react'
The benefit of using screen is you no longer need to keep the render call destructure up-to-date as you add/remove the queries you need. You only need to type screen. and let your editor's magic autocomplete take care of the rest.

The only exception to this is if you're setting the container or baseElement which you probably should avoid doing (I honestly can't think of a legitimate use case for those options anymore and they only exist for historical reasons at this point).