import React, { ReactNode } from 'react';
import { ButtonWrapper, Container } from './Button.styled';

export interface IButton {
	buttonType?: string;
	onClick?: () => void;
	text: string | ReactNode;
	disabled?: boolean;
}

const Button = ({
	buttonType = 'hollow',
	onClick = undefined,
	text,
	disabled = false,
}: IButton) => {
	return (
		<ButtonWrapper onClick={onClick} buttonType={buttonType} disabled={disabled}>
			{text}
		</ButtonWrapper>
	);
};

export default Button;

export interface IButtonContainer {
	orientation: string;
	children: ReactNode;
}

export const ButtonContainer = ({ orientation = 'right', children = null }: IButtonContainer) => {
	return (
		<Container key={orientation} layout transition={{ duration: 0.2 }} orient={orientation}>
			{children}
		</Container>
	);
};
