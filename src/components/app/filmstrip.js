import React, { Component } from 'react';

class FilmStrip extends Component {
	render() {
		const thumbnails = this.props.slides.map((item, index)=>{
			return (
				<div className='thumbnail' key={index} style={{backgroundImage:`url(${item.src})`}}
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