import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
	width: 100%;
	height: 50px;
	background: var(--white);

	border: 1px solid var(--border);
	border-radius: 6px;

	padding: 0 20px;
`;

const Text = styled.span`
	font-family: 'Gilroy';
	font-weight: bold;
	font-size: 18px;
	line-height: 24px;
	padding-bottom: 8px;
	color: #1a222e;
	display: block;
`;

const Label = styled.label`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
`;

const Input = ({ label = '', value, onChange, inputType = 'text' }) => {
	return (
		<Label>
			<Text>{label}</Text>
			<TextInput type={inputType} value={value} onChange={(e) => onChange(e.target.value)} />
		</Label>
	);
};

export default Input;
