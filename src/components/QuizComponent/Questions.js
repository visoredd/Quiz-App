import React, { useEffect, useState } from "react";
import { switchFunc, calc } from "../../utils/util";

function Questions({
	quizData,
	setQuizData,
	setStartQuiz,
	quesData,
	setQuesData,
	finalScore,
	setFinalScore,
	quesList,
	setQuesList,
}) {
	const [operand1, setOperand1] = useState(1);
	const [operand2, setOperand2] = useState(1);
	const [operatorList, setOperatorList] = useState([]);
	const [operator, setOperator] = useState("+");

	useEffect(() => {
		const myInerval = setInterval(() => {
			if (quesData.ques > quizData.noq) {
				clearInterval(myInerval);
				return;
			}
			if (quesData.timer > 0) {
				setQuesData({ ...quesData, timer: quesData.timer - 1 });
			}
			if (quesData.timer === 0) {
				checkResult();
				setQuesData({ ...quesData, timer: 20, ques: quesData.ques + 1 });
			}
		}, 1000);
		return () => {
			clearInterval(myInerval);
		};
	});

	const checkResult = () => {
		let correct = false;

		if (Math.floor(calc(operator, operand1, operand2)) === parseInt(quesData.result)) {
			setFinalScore(finalScore + 1);
			correct = true;
		}
		let q = {
			question: `Q${quesData.ques} : ${operand1} ${operator} ${operand2}? = ${quesData.result}`,
			answer: Math.floor(calc(operator, operand1, operand2)),
			correct,
		};
		setQuesList([...quesList, q]);
	};

	useEffect(() => {
		const l = [];
		for (let [key, value] of Object.entries(quizData.operator)) {
			if (value === true) {
				l.push(key);
			}
		}
		setOperatorList(l);
	}, [quizData]);

	useEffect(() => {
		setOperand1(Math.ceil(Math.random() * quizData.operand));
		setOperand2(Math.ceil(Math.random() * quizData.operand));
		switchFunc(operatorList[Math.floor(Math.random() * operatorList.length)], setOperator);
		setQuesData({ ...quesData, result: 1 });
	}, [quesData.ques, quizData, operatorList]);

	return (
		<div className='question-container'>
			{quesData.ques <= quizData.noq ? (
				<>
					<div className='question'>
						Q{quesData.ques} : {operand1} {operator} {operand2} =
						<input
							type='number'
							className='result-input'
							value={quesData.result}
							onChange={(e) => setQuesData({ ...quesData, result: e.target.value })}
						/>
						?
					</div>
					<div className='question-button'>
						<button
							onClick={() => {
								checkResult();

								setQuesData({
									...quesData,
									timer: 20,
									ques: quesData.ques + 1,
								});
							}}
						>
							Next
						</button>
						<button
							onClick={() => {
								setQuesData({
									...quesData,
									ques: 1,
									timer: 20,
									result: 1,
								});
								setFinalScore(0);
								setQuesList([]);
								setQuizData({
									noq: 20,
									operand: 10,
									operator: {
										Add: true,
										Subtract: true,
										Multiply: true,
										Divide: true,
									},
								});
								setStartQuiz(false);
							}}
						>
							Reset
						</button>
					</div>
					<div className='time-remaining'>Time Remaining : {quesData.timer}</div>
					<div className='final-score'>Score: {finalScore}</div>
				</>
			) : (
				<>
					<div className='question-button'>
						<button
							onClick={() => {
								setQuesData({
									...quesData,
									ques: 1,
									timer: 20,
									result: 1,
								});
								setFinalScore(0);
								setQuesList([]);
								setQuizData({
									noq: 20,
									operand: 10,
									operator: {
										Add: true,
										Subtract: true,
										Multiply: true,
										Divide: true,
									},
								});
								setStartQuiz(false);
							}}
						>
							Start Again
						</button>
					</div>
					<div className='final-score'>Score: {finalScore}</div>
					<div className='quesList'>
						{quesList.map((ques, i) => (
							<React.Fragment key={i}>
								{ques.correct ? (
									<>
										<div className='question'>{ques.question}</div>
									</>
								) : (
									<>
										<div className='question red-question'>{ques.question}</div>
										<div>Correct Answer: {ques.answer}</div>
									</>
								)}
							</React.Fragment>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Questions;
