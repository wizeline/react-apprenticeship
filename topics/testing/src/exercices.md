# Only Jest

Make the corresponding tests for the functions in lib/ExampleFunctions.js

# Make the test pass
 - Go to the file Text.test.js and paste the following test

        it('Should show a Header', () => {
            render(<Text />);
            const header = screen.getByRole('heading');

            expect(header).toBeInTheDocument();
        })

Write the code needed to make this test pass.


# TDD Approach

Implement the test first and after the code for:

Make a new component with a text title an input and a button. When the user clicks the button a text should appear that says Hello "name on the input" like shown in the image. Don't worry about styles and CSS.

![ExampleImage](exercise.png)


