import { fireEvent, render, screen } from "@testing-library/react";
import Quiz from "./Quiz";

test("renders quiz component", () => {
	render(<Quiz />);
	const headElement = screen.getByText("Quiz");
	expect(headElement).toBeInTheDocument();
});

test("renders quiz-1 component", () => {
	render(<Quiz />);
	const quizComponent = screen.getByText("Arithmetic Quiz 1");
	expect(quizComponent).toBeInTheDocument();
});

test("renders quiz-2 component", () => {
	render(<Quiz />);
	const quizComponent = screen.getByText("Arithmetic Quiz 2");
	expect(quizComponent).toBeInTheDocument();
});
test("renders questions component", () => {
	render(<Quiz />);
	fireEvent.click(screen.getAllByText("Start Quiz")[0]);
	const nextButton = screen.getByText("Next");
	expect(nextButton).toBeInTheDocument();
});
test("renders back to quiz component after reset", () => {
	render(<Quiz />);
	fireEvent.click(screen.getAllByText("Reset")[0]);
	const nextButton = screen.getAllByText("Number of Questions:")[0];
	expect(nextButton).toBeInTheDocument();
});
test("renders 2nd questions component", () => {
	render(<Quiz />);
	fireEvent.click(screen.getAllByText("Start Quiz")[1]);
	const nextButton = screen.getByText("Next");
	expect(nextButton).toBeInTheDocument();
});
test("renders back to 2nd quiz component after reset", () => {
	render(<Quiz />);
	fireEvent.click(screen.getAllByText("Reset")[0]);
	const nextButton = screen.getAllByText("Number of Questions:")[1];
	expect(nextButton).toBeInTheDocument();
});
