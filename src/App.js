import './App.css';
import { adatLista } from './adatok';
import Image from './compnent/Image';

import React, {useState} from 'react';

function App() {
	const [kepIndex, setNagykep] = useState(0);

	function nagykepCsere(id) {
		setNagykep(id);
	}


	return (
		<div className="App">
			<header className="App-header">
				<h1>Képagléria</h1>
			</header>
			<article>
				<div className='fokep'>
					<h3>Kép címe</h3>
					<Image data={adatLista[kepIndex]} />
					<p>Kép leírása...</p>
				</div>
				<div className='galeria'>
					{adatLista.map((element, index) => {
						return (
							<Image data={element} key={index} nagykepCsere={nagykepCsere} />
						);
					})}
				</div>
			</article>
			<footer>Péti Dominik</footer>
		</div>
  	);
}

export default App;
