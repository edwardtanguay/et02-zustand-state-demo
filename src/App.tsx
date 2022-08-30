import { useStore } from './store';
import './App.scss';
import { InfoBox } from './components/InfoBox';

function App() {
	const store = useStore((state) => state);

	return (
		<div className="App">
			<h1>Zustand Demo Site</h1>
			<main>
				<section className="controlArea">
					<div className="data">
						<label>Message:</label>
						<input
							type="text"
							value={store.message}
							onChange={(e) => store.setMessage(e.target.value)}
						/>
					</div>

					<div className="data">
						<label>Colors:</label>
						<button onClick={() => store.addColor('blue')}>
							blue
						</button>
						<button onClick={() => store.addColor('red')}>
							red
						</button>
						<button onClick={() => store.addColor('yellow')}>
							yellow
						</button>
						<button onClick={() => store.deleteColor()}>
							delete last color
						</button>
						<button onClick={() => store.deleteAllColors()}>
							delete all colors
						</button>
					</div>

					<div className="data">
						<label>Change multiple values:</label>
						<button onClick={() => store.deleteVowelsAndRed()}>
							Delete vowels and color red
						</button>
					</div>

					<div className="data">
						<button
							onClick={() =>
								store.toggleCurrentUserStatusOnline()
							}
						>
							toggle online status
						</button>
						<button
							onClick={() => store.toggleCurrentUserStatusEmail()}
						>
							toggle email status
						</button>
					</div>
					{store.techBooks.length === 0 && (
						<div className="data">
							<button
								disabled={store.techBooksAreLoading}
								onClick={() => store.loadTechBooks()}
							>
								Load Tech Books
							</button>
						</div>
					)}
					{store.techBooks.length > 0 && (
						<div className="data">
							<label>Search tech books:</label>
							<input type="text" />
						</div>
					)}
				</section>
				<section className="dataArea">
					<InfoBox />
				</section>
			</main>
		</div>
	);
}

export default App;
