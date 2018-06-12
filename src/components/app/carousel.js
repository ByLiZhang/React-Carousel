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
			const hrName = (index===this.props.currentIndex) ? 'timeIndicator active' : 'timeIndicator';
			return (
				<div className="slideContainer" key={index} style={slideContainerStyles}>
					<div className="slideTitle">{topic}</div>
					<div className="slideMessage">{message}</div>
					<hr className={hrName}/>
					<div className="slide" style={slideStyles}
					onMouseLeave={this.props.handleMouseOut}
					onMouseEnter={this.props.handleHover}>
					</div>
					<hr className={hrName}/>
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