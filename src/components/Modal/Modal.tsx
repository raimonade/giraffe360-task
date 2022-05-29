import React, { memo, useState } from 'react';
import { useModal } from './ModalContext';
import styled from 'styled-components';
import Functions from '@/styles/Functions';
import { animated, config, Transition, useTransition } from 'react-spring';
import { motion, AnimatePresence } from 'framer-motion';

const ModalBody = styled(motion.div)`
	position: fixed;
	z-index: 999;
	min-width: 280px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: calc(100% - var(--gridMargin) * 2);
	background-color: var(--background);
	border-radius: 10px;
	padding: 30px;
	display:flex;
	flex-direction:column;

	${Functions.breakpoint('tablet')} {
		max-width: 600px;
	}

	/* > div {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		/* min-height: 300px; */
	} */

	transition: height 300ms;
`;

const Wrapper = styled(motion.div)`
	> div {
		width: 100%;
		min-height: 120px;
		position: relative;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

const Modal = ({ children, ...props }) => {
	return (
		<ModalBody {...props}>
			<AnimatePresence>
				<Wrapper layout>
					{/* <AnimatePresence>
				{children && (
					<motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} layout>
					</motion.div>
					)}
				</AnimatePresence> */}
					{children}
				</Wrapper>
			</AnimatePresence>
		</ModalBody>
	);
};

export default Modal;

const ModalHeader = styled.div<{ orient: string }>`
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 100%;

	${Functions.breakpoint('mobile')} {
		text-align: ${(props) =>
			props.orient === 'left' ? 'left' : props.orient === 'center' ? 'center' : 'right'};
	}

	h3 {
		font-weight: bold;
		font-size: 20px;
		line-height: 25px;
		color: var(--text);

		${Functions.breakpoint('mobile')} {
			font-size: 24px;
		}
		${Functions.breakpoint('desktop')} {
			font-size: 28px;
		}
	}
	span {
		display: block;
		font-weight: bold;
		font-size: 14px;
		line-height: 25px;
		color: var(--contrast);
		padding-bottom: 2px;

		${Functions.breakpoint('mobile')} {
			font-size: 16px;
			padding-bottom: 4px;
		}
		${Functions.breakpoint('desktop')} {
			font-size: 18px;
			padding-bottom: 8px;
		}
	}
`;

export const Title = ({ title = '', subtitle = '', orient = 'left' }) => {
	return (
		<ModalHeader orient={orient}>
			<AnimatePresence>
				<motion.div
					exit={{ opacity: 0, y: subtitle ? '-50%' : '50%', position: 'absolute' }}
					animate={{
						opacity: 1,
						y: '0%',
						position: 'relative',
						transition: { delay: 0.05 },
					}}
					initial={{ opacity: 0, y: subtitle ? '-50%' : '50%', position: 'absolute' }}
					key={title?.toString() + subtitle?.toString()}
					transition={{ duration: 0.1 }}
					layout
					style={{
						width: '100%',
					}}
				>
					{subtitle && <span>{subtitle}</span>}
					{title && <h3>{title}</h3>}
				</motion.div>
			</AnimatePresence>
		</ModalHeader>
	);
};

export const ModalTitle = memo(Title);
