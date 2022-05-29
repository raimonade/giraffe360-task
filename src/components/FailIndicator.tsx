import { motion } from 'framer-motion';
import React from 'react';

const FailIndicator = () => {
	return (
		<div style={{ padding: 10 }}>
			<svg
				width="60"
				height="60"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					animate={{
						rotate: 0,
					}}
					initial={{
						rotate: -25,
					}}
					transition={{
						duration: 0.3,
						type: 'spring',
						stiffness: 200,
						damping: 10,
					}}
					d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
					fill="#dc3545"
				/>
			</svg>
		</div>
	);
};

export default FailIndicator;
