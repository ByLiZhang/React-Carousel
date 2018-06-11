import React, { Component } from 'react';
import Slides from './slides';
import Carousel from './carousel';
import '../../assets/styles/app.scss';

class App extends Component {

	render() {
		return (
			<div className='container'>
				<div className="headerTitle">Carousel</div>
				<Carousel slides={Slides} />
			</div>
		);
	}
} 

export default App;