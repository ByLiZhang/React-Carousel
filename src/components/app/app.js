import React, { Component } from 'react';
import Slides from './slides';
import Carousel from './carousel';
import Arrow from './arrow';
import '../../assets/styles/app.scss';

class App extends Component {

	constructor(props){
		super(props);
		this.slideLeft=this.slideLeft.bind(this);
		this.slideRight=this.slideRight.bind(this);

	}

	slideLeft(){
		console.log('left clicked');
	}

	slideRight(){
		console.log('right clicked');
	}	

	render() {
		return (
			<div className='container'>
				<div className="headerTitle">Carousel</div>
				<Carousel slides={Slides} />
				<Arrow direction='left' handleClick={this.slideLeft} icon='<' />
				<Arrow direction='right' handleClick={this.slideRight} icon='>' />
			</div>
		);
	}
} 

export default App;