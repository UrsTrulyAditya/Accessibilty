import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("UI: basic accessibility tests", () => {
    test("should have a visible Calculate button that can be clicked", () => {
        render(<App />);
    
        const calcDiv = screen.getByText(/calculate/i);
    
        expect(calcDiv).toBeInTheDocument();
    
        fireEvent.click(calcDiv);
        // console.log(calcDiv.tagName.toLowerCase());
        expect(calcDiv.tagName.toLowerCase()).toBe("button");
    
        expect(calcDiv).toHaveAttribute("role", "button");
      });
    test("image should have descriptive alt text", () => {
        render(<App />);
        const img = screen.getByRole("img");
        // console.log(img.getAttribute("alt"));
        expect(img).toHaveAttribute("alt");
        expect(img.getAttribute("alt")).not.toBe("");
      });
    test("textarea should have a label", () => {
        render(<App />);
        expect(screen.getByLabelText(/enter numbers/i)).toBeInTheDocument();
      });
});
