import styled from '@emotion/styled';
import { Index } from '@/styles/Variables';

export const Grid = styled.div<{ gridVisible: boolean; margin: string; gutter: string }>`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: calc(100% - (${(props) => props.margin} * 2));
	margin: 0 ${(props) => props.margin};
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: space-between;
	gap: ${(props) => props.gutter};
	z-index: ${Index.debug};
	pointer-events: none;

	${(props) => {
		if (!props.gridVisible) {
			return `
        display: none;
      `;
		}
	}}
`;

export const Column = styled.div`
	background-color: rgba(255, 0, 0, 0.2);
	color: #fff;
	flex: 1 0 0;
	text-align: center;
	font-size: 20px;
	vertical-align: bottom;
`;
