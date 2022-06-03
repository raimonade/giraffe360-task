import Functions from '@/styles/Functions';
import styled from '@emotion/styled';

export const Container = styled.div`
	width: calc(100% - var(--gridMargin) * 2);
	margin: 0 auto;

	> div {
		margin-top: 50px;
		${Functions.breakpoint('laptop')} {
			width: ${Functions.col(6, 12)};
			/* background: red; */
			margin-left: auto;
			margin-right: auto;
		}
	}
`;
