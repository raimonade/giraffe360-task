import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { Colors } from '@/styles/Variables';

type Props = {
	isOn: boolean;
	onClick: () => void;
	className?: string;
	size?: number;
};

const Text = styled(motion.div)<{ x: number }>`
	position: absolute;
	/* top: calc(50% + 1px); */
	top: 50%;
	transform: translate(${({ x }) => x}px, -50%);
	z-index: 1;
	color: var(--text);
	font-weight: bold;
	font-size: 10px;
`;

const Switch = ({ className, onClick, isOn, size = 24 }) => {
	return (
		<motion.button
			initial={false}
			animate={{ backgroundColor: isOn ? Colors.yellow : Colors.grey }}
			className={className}
			onClick={onClick}
			onMouseDown={(e) => e.preventDefault()}
		>
			<Text
				x={14}
				animate={{ opacity: isOn ? 1 : 0 }}
				transition={{ duration: 0.1 }}
				initial={false}
			>
				ON
			</Text>
			<Text
				x={35}
				animate={{ opacity: isOn ? 0 : 1 }}
				transition={{ duration: 0.1 }}
				initial={false}
			>
				OFF
			</Text>
			<motion.div
				layout
				// animate
				className="knob"
				animate={{
					x: isOn ? size * 1.65 + 2 : 0,
					// borderColor: isOn ? Colors.yellow : Colors.grey,
				}}
				initial={false}
				transition={{
					type: 'spring',
					stiffness: 450,
					damping: 27,
				}}
			/>
		</motion.button>
	);
};

export default styled(Switch)<Props>(
	({ theme, size = 24, isOn = false }) => css`
		position: relative;
		width: ${size * 2.75}px;
		height: ${size}px;
		border-radius: ${size}px;
		padding: ${size / 8 + 1}px;
		box-sizing: content-box;
		display: flex;
		overflow: hidden;

		.knob {
			box-sizing: content-box;
			width: ${size}px;
			height: ${size}px;
			background: white;
			border-radius: ${size}px;
			z-index: 6;
		}
	`
);
