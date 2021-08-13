import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeGuess } from './redux/gameSlice';

const GuessForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				makeGuess({
					guess: value
				})
			);
		}
	};

	return (
		<form onSubmit={onSubmit} >
			<label>Guess</label>
			<input
				type='number'
				placeholder='Guess the temperature'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit'>
				Submit
			</button>
		</form>
	);
};

export default GuessForm;