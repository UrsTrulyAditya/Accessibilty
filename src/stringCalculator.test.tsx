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
      
});
