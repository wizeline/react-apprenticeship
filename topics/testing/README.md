## What is Testing?
Is the process of checking that the product we are building does what is supposed to do in the way it was planned to work. This can be traced back to feature planning, designs (system, UI) and overall requirements.
There are many steps in testing, actually testing by itself involves not only developers but a whole departament dedicated to the task. In this article we will focus in Unit tests.

## What are unit tests?
Unit testing is the practice of testing small units of a software system like methods to prove they work as expected. This is fundamental to ensure the quality of your product.


## What is TDD?
Test Driven Development or commonly known as TDD, is a testing technique used in software. 
In TDD we first create the tests and after that we start writing the actual code with just enough code to make the tests pass. The steps as described in the Book Test-Driven Development By Example from Kent Beck are:

1. Add a test
2. Run all tests. The new test should fail.
3. Write the simplest code that passes the new test.
4. All tests should pass.
5. Refactor as needed, using tests after each refactor to ensure that the functionality is preserved.
6. (REPEAT)


# Testing in React

For testing in React we will use two libraries, Jest and React Testing Library, this two are already installed when we create our project using create-react-app so it feels natural to make use of them.

Jest will be our testing suite, letting us run the actual tests, and React Testing Library will give us the methods to test our components.

## [Jest](https://jestjs.io/)

As mentioned before Jest is already installed with React. Jest will lookup for any file or folder that follows the following naming conventions:

 - Files with `.js` suffix in `\_\_tests_\_` folders.
 - Files with `.test.js` suffix.
 - Files with `.spec.js` suffix.

### Writing a test on Jest

To write a test we will create a file and inside this file we have access to a few functions

 - `test()`: We will use it to write our test
 - `it()`: Can be used instead of `test` and works the same
 - `describe()`: Allow us to "group" tests together

```javascript
describe("This is a group of tests", () => {
    test("This is a simple test in Jest", () => {
        expect(1).toBe(1)
    })
    it("This is a another simple test in Jest", () => {
        expect(2).not.toBe(1)
    })
})
```

> More info about `expect` can be found in the [official docs](https://jestjs.io/docs/expect)

### Running the tests.

Like we run `npm start`, we also have a command to run the tests, just type `npm test` and watch the console for more details.


## [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

React Testing Library will provide the means to test React components and even simulate user interaction.

Let's look at an example first.
```javascript
import Text from './Text'
import { render, screen, fireEvent } from '@testing-library/react'


it('should show text when button is clicked', () => {
    //Arrange
    render(<Text />)
    const button = screen.getByRole('button')

    //Act
    fireEvent.click(button)

    //Assert
    expect(screen.getByText('Hidden text')).toBeInTheDocument()
    })
```

As we can see, we still use Jest to host the tests but now we have access to a couple of methods (`render` and `screen`), for simulating the screen and fireEvent to simulate user interaction, all this provided by `@testing-library`.

### AAA
In the first part we `render` the component, then we find the button and make the click and finally we check if the result is what we expect.
This process can be divided in 3 steps:

 - `Arrange`: Setup the test
 - `Act`: Do the necesary interaction
 - `Assert`: Check for desired results


 ### Folder structure
 Is a good idea to have the test for your code next to the code you want to test, so typically you will see that every component has another file with the same name prefixed with `test` or `spec` and the file extension. Like for example `App.js` and `App.test.js`

# Next steps
 In this project you will find a `src` folder and the `Text.jsx` component with their test in a file next to it called `Text.test.js` following the general convention.

 1. Play with the test that already exists, break it and put it back together.
 2. Check the exercises file for more info [exercises.md](./src/exercises.md)