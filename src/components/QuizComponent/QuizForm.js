import React from "react";

function QuizForm({ startQuiz, quizData, setQuizData }) {
	const handleChange = ({ name, value }) => {
		setQuizData({
			...quizData,
			[name]: value,
		});
	};
	return (
		<div className='quiz-card2'>
			<div className='quiz-grid'>
				<div>Number of Questions: </div>
				<div>
					<input
						name='noq'
						value={quizData.noq}
						type='number'
						onChange={(e) => handleChange(e.target)}
						placeholder='10'
						className='quiz-input'
						step={5}
						min={10}
						max={30}
					/>
				</div>
				<div>Max Operands: </div>
				<div>
					<input
						value={quizData.operand}
						name='operand'
						type='number'
						className='quiz-input'
						onChange={(e) => handleChange(e.target)}
						placeholder='10'
						step={10}
						min={10}
						max={1000}
					/>
				</div>
				<div>Select Opeartor: </div>
				<div>
					{Object.keys(quizData.operator).map((item) => {
						if (item !== "undefined") {
							return (
								<React.Fragment key={item}>
									<label>
										<input
											type='checkbox'
											checked={quizData.operator[item]}
											onChange={() =>
												setQuizData({
													...quizData,
													operator: {
														...quizData.operator,
														[item]: !quizData.operator[item],
													},
												})
											}
										/>
										{item}
									</label>
								</React.Fragment>
							);
						}
						return <></>;
					})}
				</div>
				<div>
					<button
						onClick={() => {
							startQuiz(true);
						}}
					>
						Start Quiz
					</button>
				</div>
			</div>
		</div>
	);
}

export default QuizForm;
