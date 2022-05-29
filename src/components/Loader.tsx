import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Loader = () => {
	const [looped, set] = useState(false);
	const circle = useAnimation();

	const switchVals = () => {
		set(!looped);
	};

	useEffect(() => {
		if (!looped) {
			circle.set({
				pathLength: 0.95,
				pathOffset: 0,
			});
			circle.start({
				pathLength: 0,
				pathOffset: 1,
			});
		} else {
			circle.set({
				pathLength: 0,
				pathOffset: 0,
			});
			circle.start({
				pathLength: 0.95,
				pathOffset: 0,
			});
		}
	}, [looped, circle]);

	return (
		<div style={{ padding: 10 }}>
			<motion.svg
				width="60"
				height="60"
				viewBox="0 0 60 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				initial={{
					rotate: 0,
				}}
				animate={{
					rotate: 360,
				}}
				transition={{
					repeat: Infinity,
					repeatDelay: 0,
					type: 'tween',
					ease: 'linear',
					repeatType: 'loop',
					duration: 4,
				}}
			>
				{/* <circle cx="30" cy="30" r="29" stroke="#D6D6D6" strokeWidth="2" /> */}
				<motion.circle
					initial={{
						pathLength: 1,
						pathOffset: 0,
					}}
					animate={circle}
					onAnimationComplete={switchVals}
					cx="30"
					cy="30"
					r="29"
					stroke="#1A222E"
					strokeWidth="2"
					transition={{
						duration: 2,
					}}
				/>
			</motion.svg>
		</div>
	);
};

export default Loader;
