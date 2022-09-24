import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Post/Post";
import Navigation from "./components/Navigation/Navigation";
import ItemDeser from "./components/Deser/Deser";



function App() {
	return (
		<div>
			<Navigation />
			<Blog />
		
			<ItemDeser />
			
		</div>
	);
}

export default App;
