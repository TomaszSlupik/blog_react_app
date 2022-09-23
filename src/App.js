import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Post/Post";
import Navigation from "./components/Navigation/Navigation";

function App() {
	return (
		<div>
			<Navigation />
			<Blog />
		</div>
	);
}

export default App;
