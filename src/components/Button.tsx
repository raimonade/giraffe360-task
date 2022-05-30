import React from 'react';
import styled from '@emotion/styled';
import Functions from '@/styles/Functions';
import { motion } from 'framer-motion';

export const ButtonWrapper = styled.button<{ buttonType: string }>`
	/* height: 40px; */
	-webkit-appearance: none;
	-webkit-border-radius: none;
	left: 62px;
	--button-color: ${(props) =>
		props.buttonType === 'hollow' ? 'var(--background)' : 'var(--yellow)'};
	background: var(--button-color);
	--border: ${(props) => (props.buttonType === 'hollow' ? '2px solid var(--yellow)' : 'none')};
	border: 2px solid var(--yellow);

	border-radius: 6px;

	font-weight: bold;
	font-size: 14px;
	line-height: 20px;

	text-align: center;
	transition: 0.2s all;
	will-change: transform, border, width;
	transform: scale(1);
	/* width: 100%; */
	transition: 0.2s all;
	padding: 9px 22px 8px 22px;
	/* min-width: 116px; */
	/* white-space: nowrap; */

	&:hover {
		/* transform: scale(0.95); */
		/* background: ${(props) => (props.buttonType === 'hollow' ? 'var(--grey)' : '#ffd133')}; */
		background: ${(props) => (props.buttonType === 'hollow' ? '#ffc107' : '#ffca2c')};
	}

	&:focus {
		box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
	}

	&[disabled] {
		background: var(--grey);
		cursor: not-allowed;
		border-color: var(--grey);
	}
`;

const Button = ({ buttonType = 'hollow', onClick = null, text, disabled = false }) => {
	return (
		<ButtonWrapper onClick={onClick} buttonType={buttonType} disabled={disabled}>
			{text}
		</ButtonWrapper>
	);
};

export default Button;

const Container = styled(motion.div)<{ orient: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: auto;
	padding-top: 20px;
	/* margin-top: auto; */
	/* flex-wrap: wrap; */

	${Functions.breakpoint('mobile')} {
		justify-content: ${({ orient }) =>
			orient === 'right' ? 'flex-end' : orient === 'center' ? 'center' : 'flex-start'};
	}
	> button {
		&:not(:first-of-type) {
			margin-left: 20px;
		}
	}
`;

export const ButtonContainer = ({ orientation = 'right', children = null }) => {
	return (
		<Container key={orientation} layout transition={{ duration: 0.2 }} orient={orientation}>
			{children}
		</Container>
	);
};
