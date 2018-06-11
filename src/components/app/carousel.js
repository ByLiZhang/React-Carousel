import React, { Component } from 'react';

class Carousel extends Component {

	render() {
		const slides = this.props.slides.map((item, index)=>{
			const {src, topic, message} = item;
			const slideStyles = {
				backgroundImage: `url(${src})`
			};
			const slideContainerStyles = {
				transform: `translateX(${this.props.currentIndex * -100}%)`,
				transition: '0.5s'
			}
			return (
				<div className="slideContainer" key={index} style={slideContainerStyles}>
					<div className="slideTitle">{topic}</div>
					<div className="slideMessage">{message}</div>
					<div className="slide" style={slideStyles}></div>
				</div>
			);
		});

		return (
			<div className='carousel'>
				{slides}
			</div>
		);
	}
}

export default Carousel;