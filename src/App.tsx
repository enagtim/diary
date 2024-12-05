import './App.css';
import Button from './components/Button/Button';
import ButtonAdd from './components/ButtonAdd/ButtonAdd';
import CardMemory from './components/CardMemory/CardMemory';
function App() {
	return (
		<div>
			<Button />
			<ButtonAdd />
			<CardMemory title="Гора" date={new Date()} description="Гора хорошая" />
		</div>
	);
}
export default App;
