import { screen, render, fireEvent } from "@testing-library/react";
import Exercise from "./Exercise";

describe("Exercise", () => {
    it("Should have a title with specific text", () => {
        render(<Exercise />);
        expect(screen.getByText("Put your name on the input")).toBeInTheDocument();
    })

    it("Should have an input field", () => {
        render(<Exercise />);
        const input = screen.getByRole("textbox");

        expect(input).toBeInTheDocument();
    })

    it("Should have a button", () => {
        render(<Exercise />);
        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    })

    it("Should have a greeting when user clicks button", () => {
        const person = "John Doe";

        render(<Exercise />);
        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button");
        fireEvent.change(input, { target: { value: person } });
        fireEvent.click(button);

        expect(screen.getByText(`Hello ${person}`)).toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.queryByText(`Hello ${person}`)).toBeNull();
        expect(screen.queryByText(`Hello ${person}`)).not.toBeInTheDocument();
        
    })
})