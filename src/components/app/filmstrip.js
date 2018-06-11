import React, { Component } from 'react';

class FilmStrip extends Component {
	render() {
		const {currentIndex} = this.props;
		const thumbnails = this.props.slides.map((item, index)=>{
			const name = (index===currentIndex) ? 'thumbnail active' : 'thumbnail';
			return (
				<div className={name} key={index} style={{backgroundImage:`url(${item.src})`}}
				onClick={()=>this.props.handleThumbnailClick(index)}></div>
			);
		});
		return (
			<div className='filmStrip'>
				{thumbnails}
			</div>
		);
	}
}

export default FilmStrip;