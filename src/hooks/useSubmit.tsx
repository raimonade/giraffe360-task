import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '@/components/Loader';
import SuccessIndicator from '@/components/SuccessIndicator';
import styled from 'styled-components';
import Functions from '@/styles/Functions';

const Container = styled(motion.div)`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 150px;
`;

const ErrorText = styled(motion.span)`
	display: block;
	font-weight: bold;
	font-size: 16px;
	line-height: 25px;
	color: #ff2424;
	text-align: center;

	${Functions.breakpoint('mobile')} {
		font-size: 18px;
	}
`;

export const simulatePost = (handler, delay = 2000) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(handler);
		}, delay);
	});
};

export const useSubmit = ({ onSubmit = null }) => {
	const [state, setState] = useState({
		submitting: false,
		success: false,
		error: null,
	});
	return {
		error: state.error,
		success: state.success,
		submitting: state.submitting,
		clearError: () => {
			setState({ ...state, error: null, success: false });
		},

		submit: async (func) => {
			if (state.submitting) {
				return;
			}
			setState({
				...state,
				submitting: true,
				error: null,
			});
			const handler = await simulatePost(func);
			try {
				// @ts-ignore
				await handler();
				setState({
					...state,
					submitting: false,
					success: true,
				});
				setTimeout(() => {
					onSubmit();
				}, 800);
				setTimeout(() => {
					// clear success state
					setState({ ...state, error: null, success: false });
				}, 1200);
			} catch (e) {
				setState({
					...state,
					submitting: false,
					success: false,
					error: e.toString(),
				});
			}
			// setTimeout(() => {
			// 	// clear success state
			// 	setState({ ...state, success: false });
			// }, 2000);
		},
		feedback: (
			<AnimatePresence>
				{state.submitting || state.success || state.error ? (
					<Container>
						{state.submitting && (
							<Fade key="1">
								<Loader />
							</Fade>
						)}
						{state.success && (
							<Bounce key="2">
								<SuccessIndicator />
							</Bounce>
						)}
						{state.error && (
							<Fade key="1">
								<ErrorText>{state.error}</ErrorText>
							</Fade>
						)}
					</Container>
				) : null}
			</AnimatePresence>
		),
	};
};

function Fade({ children }) {
	return (
		<motion.span
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ position: 'absolute', opacity: 0, y: -30 }}
			transition={{
				duration: 0.2,
			}}
		>
			{children}
		</motion.span>
	);
}

function Bounce({ children }) {
	return (
		<motion.span
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: [0.9, 1.1, 1] }}
			exit={{ position: 'absolute', opacity: 0, scale: 0 }}
			transition={{
				duration: 0.15,
			}}
		>
			{children}
		</motion.span>
	);
}
