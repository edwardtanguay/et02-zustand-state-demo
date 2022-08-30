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
						<input type="text" value={store.message} onChange={(e) => store.setMessage(e.target.value)} />
					</div>
				</section>
				<section className="dataArea">
					<InfoBox/>
				</section>
			</main>
		</div>
	);
}

export default App;
