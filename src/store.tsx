import create from 'zustand';

interface IStore {
	message: string;
	setMessage: (message: string) => void;
	colors: string[]
}

export const useStore = create<IStore>(
	(set): IStore => ({
		message: 'test',
		setMessage: (message: string) =>
			set((state) => ({ ...state, message })),
		colors: ['blue', 'white', 'red', 'green', 'black', 'red']
	})
);
