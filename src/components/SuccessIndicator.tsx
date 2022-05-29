import { motion } from 'framer-motion';
import React from 'react';

const SuccessIndicator = () => {
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
						duration: 0.2,
						type: 'spring',
						stiffness: 200,
						damping: 10,
					}}
					d="M8.99999 16.2001L4.79999 12.0001L3.39999 13.4001L8.99999 19.0001L21 7.0001L19.6 5.6001L8.99999 16.2001Z"
					fill="#198754"
				/>
			</svg>
		</div>
	);
};

export default SuccessIndicator;
