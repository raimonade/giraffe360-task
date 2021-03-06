import styled from '@emotion/styled';
import Functions from '@/styles/Functions';

export const Button = styled.button<{ orient: string }>`
	/* width: 100%; */
	font-weight: bold;
	font-size: 14px;
	line-height: 20px;
	margin-top: 10px;
	text-align: center;

	/* Primary colors / Yellow */

	color: #ffc600;

	align-self: center;

	${Functions.breakpoint('mobile')} {
		align-self: ${(props) =>
			props.orient === 'left'
				? 'flex-start'
				: props.orient === 'center'
				? 'center'
				: 'flex-end'};
	}
`;
