import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	/* width: 100%; */
	font-weight: bold;
	font-size: 14px;
	line-height: 20px;
	margin-top: 10px;
	text-align: center;

	/* Primary colors / Yellow */

	color: #ffc600;

	align-self: ${(props) =>
		props.orient === 'left' ? 'flex-start' : props.orient === 'center' ? 'center' : 'flex-end'};
`;

const ClickableText = ({ onClick = null, text = '', orient = 'center' }) => {
	return <Button onClick={onClick}>{text}</Button>;
};

export default ClickableText;