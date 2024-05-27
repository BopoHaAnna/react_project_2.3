import React from 'react';
import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const handleButtonClick = (value) => {
		if (operator === '') {
			setOperand1(operand1 + value);
		} else {
			setOperand2(operand2 + value);
		}
		if (isResult) {
			setIsResult(false);
		}
	};

	const handleOperatorButtonClick = (operator) => {
		setOperator(operator);
		if (isResult) {
			setIsResult(false);
		}
	};

	const handleEqualsButtonClick = () => {
		let result;
		if (operator === '-') {
			result = operand1 - operand2;
		} else {
			result = operand1 + operand2;
		}
		setOperand1(result.toString());
		setOperator('');
		setOperand2('');
		setIsResult(true);
	};

	const handleResetButtonClick = () => {
		setOperand1('');
		setOperator('');
		setOperand2('');
		setIsResult(false);
	};
	const handleConditionButtonClick = (value) => {
		if (value === '+' || value === '-') {
			handleOperatorButtonClick(value);
		} else if (value === '=') {
			handleEqualsButtonClick();
		} else if (value === 'C') {
			handleResetButtonClick();
		} else {
			handleButtonClick(value);
		}
	};
	const displayValue = `${operand1} ${operator} ${operand2} `;

	return (
		<div className={styles.container}>
			<div>
				<h1>CALCULATOR</h1>
			</div>
			<div className={styles.resultContainer}>
				<input
					type="text"
					value={displayValue}
					readOnly
					className={`${styles.resultInput} ${isResult ? styles.result : ''}`}
				/>
			</div>
			<div id="calculator" className={styles.calculator}>
				{data.map((item, index) => (
					<button
						key={item.id}
						className={`${styles.button} ${item.value === 'C' || item.value === '=' ? styles.wider : ''}`}
						onClick={() => handleConditionButtonClick(item.value)}
					>
						{item.value}
					</button>
				))}
			</div>
		</div>
	);
};
