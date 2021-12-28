import { render, screen } from "@testing-library/react";
import Async from "./Async";

it("Should render posts", async () => {
    render(<Async />);

    const list = await screen.findAllByRole("listitem");
    expect(list.length).toBeGreaterThan(0);
})

it("will test a mock", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json : async () => [{
            id : 1,
            title : "test"
        }]
    });

    render(<Async />);

    const list = await screen.findAllByRole("listitem");
    expect(list.length).toBeGreaterThan(0);

})