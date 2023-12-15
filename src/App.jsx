import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import { AppProvider } from "./context/context";

function App() {
	return (
		<>
			<AppProvider>
				<Search />
				<Pagination />
				<Stories />
			</AppProvider>
		</>
	);
}

export default App;
