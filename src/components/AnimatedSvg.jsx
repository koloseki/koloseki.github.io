import React, { useState, useEffect } from 'react';
import './styles/Footer.css';

const AnimatedSVG = () => {
	const [position, setPosition] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setPosition((prevPosition) => (prevPosition === 0 ? 20 : 0));
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<a href="/" className="animated-svg-container">
			<svg
				className="animated-svg"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				style={{ transform: `translateY(${position}%)`, fill: '#fffafa', width: '50px', height: '50px', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }}
			>
				<path
					d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
					className="shape-fill"
				></path>
			</svg>
		</a>
	);
};

export default AnimatedSVG;
