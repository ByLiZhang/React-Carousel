import React from 'react';

const Arrow = (props) => (
	<div className={`direction ${props.direction}`}
	onClick={props.handleClick}> 
		<i className={props.icon}></i>
	</div>

);

export default Arrow;