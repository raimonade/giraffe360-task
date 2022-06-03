import styled from '@emotion/styled';

export const TextInput = styled.input`
	width: 100%;
	height: 50px;
	background: var(--white);

	border: 1px solid var(--border);
	border-radius: 6px;

	padding: 0 20px;
`;

export const Text = styled.span`
	font-family: 'Gilroy';
	font-weight: bold;
	font-size: 18px;
	line-height: 24px;
	padding-bottom: 8px;
	color: #1a222e;
	display: block;
`;

export const Label = styled.label`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
`;
