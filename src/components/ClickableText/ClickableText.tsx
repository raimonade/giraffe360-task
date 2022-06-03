import React from 'react';
import { Button } from './ClickableText.styled';

export interface IClickableText {
	onClick?: () => void | null;
	text: string;
	orient?: string;
}

const ClickableText = ({ onClick = null, text = '', orient = 'center' }: IClickableText) => {
	return (
		<Button orient={orient} onClick={onClick}>
			{text}
		</Button>
	);
};

export default ClickableText;
