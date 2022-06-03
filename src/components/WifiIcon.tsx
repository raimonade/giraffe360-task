import React from 'react';

// const barPos = [
// 	'M9 11.9985H9.01',
// 	'M5 7.99874C6.5 5.99874 8.01 6 9.005 6C10 6 11.5 5.99874 13 7.99874',
// 	'M1 4.99874C2 2.99874 5 1 9.005 1C13.01 1 16 2.99874 17 4.99874',
// ];

export interface WifiIconProps {
	bars?: number;
}

const WifiIcon = ({ bars = 3 }: WifiIconProps) => {
	return (
		<svg
			width="18"
			height="14"
			viewBox="0 0 18 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 4.99874C2 2.99874 5 1 9.005 1C13.01 1 16 2.99874 17 4.99874"
				stroke={bars >= 3 ? '#485363' : '#D6D6D6'}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{/* line2 */}
			<path
				d="M5 7.99874C6.5 5.99874 8.01 6 9.005 6C10 6 11.5 5.99874 13 7.99874"
				stroke={bars > 1 ? '#485363' : '#D6D6D6'}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{/* line1 */}
			<path
				d="M9 11.9985H9.01"
				stroke={bars > 0 ? '#485363' : '#D6D6D6'}
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default WifiIcon;

// D6D6D6 - empty
// 485363 - full
