import React, { useEffect, useState } from "react";
import QuizForm from "./QuizForm";
import Questions from "./Questions";
import useDidMountEffect from "../../utils/useDidMount";
import "./quiz.css";

function Quiz() {
	const [startQuiz, setStartQuiz] = useState(false);
	const [startQuiz2, setStartQuiz2] = useState(false);
	const [finalScore1, setFinalScore1] = useState(0);
	const [finalScore2, setFinalScore2] = useState(0);
	const [quesList, setQuesList] = useState([]);
	const [quesList2, setQuesList2] = useState([]);
	const [quesData, setQuesData] = useState({
		ques: 1,
		timer: 20,
		result: 1,
	});
	const [quesData2, setQuesData2] = useState({
		ques: 1,
		timer: 20,
		result: 1,
	});
	const [quizData, setQuizData] = useState({
		noq: 20,
		operand: 10,
		operator: { Add: true, Subtract: true, Multiply: true, Divide: true },
	});
	const [quizData2, setQuizData2] = useState({
		noq: 20,
		operand: 10,
		operator: { Add: true, Subtract: true, Multiply: true, Divide: true },
	});
	useEffect(() => {
		const quiz = JSON.parse(window.localStorage.getItem("localState"));
		if (quiz !== null) {
			setStartQuiz(quiz.startQuiz);
			setStartQuiz2(quiz.startQuiz2);
			setFinalScore1(parseInt(quiz.finalScore1));
			setFinalScore2(parseInt(quiz.finalScore2));
			setQuesData(quiz.quesData);
			setQuesData2(quiz.quesData2);
			setQuizData(quiz.quizData);
			setQuizData2(quiz.quizData2);
			setQuesList(quiz.quesList);
			setQuesList2(quiz.quesList2);
		}
	}, []);
	useDidMountEffect(() => {
		const quiz = {
			startQuiz,
			startQuiz2,
			finalScore1,
			finalScore2,
			quesList2,
			quesData,
			quesData2,
			quesList,
			quizData,
			quizData2,
		};
		window.localStorage.setItem("localState", JSON.stringify(quiz));
	}, [
		startQuiz,
		startQuiz2,
		finalScore1,
		finalScore2,
		quesList2,
		quesData,
		quesData2,
		quesList,
		quizData,
		quizData2,
	]);
	return (
		<div>
			<div style={{ textAlign: "center" }} id='heading'>
				Quiz
				<div>
					{finalScore1 || finalScore2 ? (
						<>Total Score: {finalScore1 + finalScore2}</>
					) : (
						<></>
					)}
				</div>
			</div>

			<div className='quiz'>
				<div className='quiz-card'>
					<h2 style={{ textAlign: "center" }}>Arithmetic Quiz 1</h2>
					{startQuiz ? (
						<Questions
							quizData={quizData}
							setQuizData={setQuizData}
							setStartQuiz={setStartQuiz}
							quesData={quesData}
							setQuesData={setQuesData}
							finalScore={finalScore1}
							setFinalScore={setFinalScore1}
							quesList={quesList}
							setQuesList={setQuesList}
						/>
					) : (
						<QuizForm
							startQuiz={setStartQuiz}
							quizData={quizData}
							setQuizData={setQuizData}
						/>
					)}
				</div>
				<div className='quiz-card'>
					<h2 style={{ textAlign: "center" }}>Arithmetic Quiz 2</h2>
					{startQuiz2 ? (
						<Questions
							quizData={quizData2}
							setQuizData={setQuizData2}
							setStartQuiz={setStartQuiz2}
							quesData={quesData2}
							setQuesData={setQuesData2}
							finalScore={finalScore2}
							setFinalScore={setFinalScore2}
							quesList={quesList2}
							setQuesList={setQuesList2}
						/>
					) : (
						<QuizForm
							startQuiz={setStartQuiz2}
							quizData={quizData2}
							setQuizData={setQuizData2}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Quiz;
