import create from 'zustand';

interface IStore {
	message: string;
	setMessage: (message: string) => void;
	colors: string[];
	addColor: (color: string) => void;
	deleteColor: () => void;
	deleteAllColors: () => void;
	deleteVowelsAndRed: () => void;
}

export const useStore = create<IStore>(
	(set): IStore => ({
		// STRING
		message: 'test',
		setMessage: (message: string) =>
			set((state) => ({ ...state, message })),

		// ARRAY OF STRINGS
		colors: ['blue', 'white', 'red', 'green', 'black', 'red'],
		addColor: (color: string) => {
			set((state) => {
				const _state = { ...state };
				_state.colors.push(color);
				return _state;
			});
		},
		deleteColor: () => {
			set((state) => {
				const _state = { ...state };
				_state.colors.pop();
				return _state;
			});
		},
		deleteAllColors: () => {
			set((state) => {
				const _state = { ...state };
				_state.colors = [];
				return _state;
			});
		},
		deleteVowelsAndRed: () => {
			set((state) => {
				const _state = { ...state };
				_state.message = _state.message.replace(/[aeiou]/gi, '');
				_state.colors = _state.colors.filter(m => m !== 'red');
				return _state;
			});
		},

		// CHANGE MULTIPLE STATE VARIABLES
	})
);
