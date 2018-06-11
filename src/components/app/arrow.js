import React from 'react';

const Arrow = (props) => (
	<div className={`direction ${props.direction}`}
	title={props.title}
	onClick={props.handleClick}> 
		<i className={props.icon}></i>
	</div>

);

export default Arrow;