import Text from './Text';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Text', () => {
    it('should show text when button is clicked', () => {
        //Arrange
        render(<Text />);
        const button = screen.getByRole('button');

        //Act
        fireEvent.click(button);

        //Assert
        expect(screen.getByText('Hidden text')).toBeInTheDocument();
    })
 //Paste the test from the exercise here
})