import create from 'zustand';
import axios from 'axios';

const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

interface ITechBook {
	idCode: string;
	title: string;
	description: string;
	language: string;
}

interface IStore {
	message: string;
	setMessage: (message: string) => void;
	colors: string[];
	addColor: (color: string) => void;
	deleteColor: () => void;
	deleteAllColors: () => void;
	deleteVowelsAndRed: () => void;
	currentUserStatus: {
		isOnline: boolean;
		emailIsConfirmed: boolean;
	};
	toggleCurrentUserStatusOnline: () => void;
	toggleCurrentUserStatusEmail: () => void;
	techBooks: ITechBook[];
	loadTechBooks: () => void;
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

		// CHANGE MULTIPLE STATE VARIABLES
		deleteVowelsAndRed: () => {
			set((state) => {
				const _state = { ...state };
				_state.message = _state.message.replace(/[aeiou]/gi, '');
				_state.colors = _state.colors.filter((m) => m !== 'red');
				return _state;
			});
		},

		// OBJECT
		currentUserStatus: {
			isOnline: false,
			emailIsConfirmed: true,
		},
		toggleCurrentUserStatusOnline: () => {
			set((state) => {
				const _state = { ...state };
				_state.currentUserStatus.isOnline =
					!_state.currentUserStatus.isOnline;
				return _state;
			});
		},
		toggleCurrentUserStatusEmail: () => {
			set((state) => {
				const _state = { ...state };
				_state.currentUserStatus.emailIsConfirmed =
					!_state.currentUserStatus.emailIsConfirmed;
				return _state;
			});
		},

		// API CALL
		techBooks: [],
		loadTechBooks: async () => {
			const rawTechBooks = (await axios.get(techBooksUrl)).data;
			const _techBooks: ITechBook[] = [];
			rawTechBooks.forEach((rawTechBook: any) => {
				const techBook: ITechBook = {
					title: 'ttt',
					description: 'ddd',
					language: 'lll',
					idCode: 'iii'
				};
				_techBooks.push(techBook);
			});
console.log(rawTechBooks);
console.log(_techBooks);
		}
	})
);
