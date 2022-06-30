import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders quiz app", () => {
	render(<App />);
	const headElement = screen.getByText("Quiz");
	expect(headElement).toBeInTheDocument();
});
