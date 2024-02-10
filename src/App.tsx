import React from 'react';

import './App.css';
import Connect from './components/Wallet/Connect';
import Home from './components/Home';
import Pass  from './components/Pass';

const App = () => {
	
	

	return (
		<div  className='App-header'>
		
		<Pass/>
		<h5>Pay fee to get premium access</h5>
		<Connect></Connect>
		</div>
		
	);
};

export default App;
