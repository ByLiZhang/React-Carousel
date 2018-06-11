import React, { Component } from 'react';
import Slides from './slides';
import Carousel from './carousel';
import Arrow from './arrow';
import '../../assets/styles/app.scss';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			currentIndex: 0
		};
		this.intervalID = null;
		this.slideLeft = this.slideLeft.bind(this);
		this.slideRight = this.slideRight.bind(this);
		this.autoRotate();
	}

	slideLeft(){
		console.log('left clicked');
		let maxIndex = Slides.length-1;
		const {currentIndex} = this.state;
		const nextIndex = (currentIndex===0) ? maxIndex : currentIndex-1;
		this.setState({
			currentIndex: nextIndex
		});
	}

	slideRight(){
		console.log('right clicked');
		let maxIndex = Slides.length-1;
		const {currentIndex} = this.state;
		const nextIndex = (currentIndex===maxIndex) ? 0 : currentIndex+1;
		this.setState({
			currentIndex: nextIndex
		});
	}

	autoRotate(){
		this.intervalID = setInterval(this.slideRight, 2000);
	}


	render() {
		return (
			<div className='container'>
				<div className="headerTitle">Carousel</div>
				<Carousel slides={Slides} {...this.state} />
				<Arrow direction='left' handleClick={this.slideLeft} icon='<' />
				<Arrow direction='right' handleClick={this.slideRight} icon='>' />
			</div>
		);
	}
} 

export default App;