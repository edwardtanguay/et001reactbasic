import './App.scss';
import _germanNouns from './data/germanNouns.json';

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex]
		];
	}

	return array;
}

// const germanNouns = shuffle(_germanNouns).filter(m => m.article === 'das');
const germanNouns = shuffle(_germanNouns);

function App() {
	return (
		<div className="App">
			<h1>Test Site</h1>
			<h2>German Nouns</h2>
			<p>There are {germanNouns.length} German nouns.</p>
			<div className="germanNouns">
				{germanNouns.map((germanNoun) => {
					return (
						<div className="germanNoun">
							<div className="singular">
								{germanNoun.article} {germanNoun.singular}
							</div>
							<div className="plural">{germanNoun.plural}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default App;
