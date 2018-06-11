import React from 'react';

const Arrow = (props) => (
	<div className={`direction ${props.direction}`}
	onClick={props.handleClick}
	> {props.icon}
	</div>

);

export default Arrow;