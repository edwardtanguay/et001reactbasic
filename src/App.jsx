import './App.scss';
import {GermanNouns} from './components/GermanNouns';

function App() {
	return (
		<div className="App">
			<h1>Test Site</h1>
			<GermanNouns article="das"/>
			<GermanNouns article="die"/>
			<GermanNouns article="der"/>
		</div>
	);
}
export default App;
