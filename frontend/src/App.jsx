import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<main className="">
				<h1 className="text-9xl text-center flex justify-center pt-32">
					Hello World
				</h1>
			</main>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
