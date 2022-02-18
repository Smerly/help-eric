import React, { useEffect, useState } from 'react';

function Selection(props) {
	const { price, name, value, increment } = props;

	return (
		<div className="Selection">
			<h1 className="space">{name}</h1>
			<h1 className="space">${price}</h1>
			<button onClick={() => props.increment()} className="space">
				+
			</button>
			<h1>{value}</h1>
		</div>
	);
}

export default Selection;
