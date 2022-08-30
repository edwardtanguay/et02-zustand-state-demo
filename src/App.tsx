import { useState } from 'react';
import './App.scss';

function App() {
	const [message, setMessage] = useState('');

	return (
		<div className="App">
			<h1>Zustand Demo Site</h1>
			<main>
				<section className="controlArea">
					<div className="data">
						<label>Message:</label>
						<input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
						<div>{message}</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
