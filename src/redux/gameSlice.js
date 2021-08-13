import { createSlice } from '@reduxjs/toolkit';
import getCityTemp from '../utilities';

export const gameSlice = createSlice({
	name: 'game',
	initialState: {
        city: '',
        cityTemp: 0,
        guesses: []
    },	
	reducers: {
        selectCity: (state, action) => {
            const newCity = action.payload;
            state.game.city = action.payload.action.newCity;
            state.game.cityTemp = getCityTemp(action.payload.action.newCity);
        },
		makeGuess: (state, action) => {
			const guess = action.payload.guess;
			state.game.guesses.push(guess);
		},
        clearGuesses: (state, action) => {
			const guess = action.payload.guess;
			state.game.guesses = [];
		}
	},
});


export const { selectCity, makeGuess, clearGuesses } = gameSlice.actions;

export default gameSlice.reducer;
