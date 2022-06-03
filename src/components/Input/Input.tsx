import React from 'react';
import { Label, Text, TextInput } from './Input.styled';

export interface IInput {
	label: string;
	value: string;
	onChange: (value: string) => void;
	inputType?: string;
}

const Input = ({ label = '', value, onChange, inputType = 'text' }: IInput) => {
	return (
		<Label>
			<Text>{label}</Text>
			<TextInput type={inputType} value={value} onChange={(e) => onChange(e.target.value)} />
		</Label>
	);
};

export default Input;
