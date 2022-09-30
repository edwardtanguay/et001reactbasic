import './App.scss';
import germanNouns from './data/germanNouns.json';

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
							<div className="singular">{germanNoun.article} {germanNoun.singular}</div>
							<div className="plural">{germanNoun.plural}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default App;
