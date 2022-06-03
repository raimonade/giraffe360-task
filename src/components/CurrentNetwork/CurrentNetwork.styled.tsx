import Functions from '@/styles/Functions';
import styled from '@emotion/styled';

export const Item = styled.div`
	width: 100%;
	border-bottom: 1px solid var(--border);
	min-height: 70px;
	padding: 20px 0;
	cursor: pointer;
`;

export const Wrapper = styled.div`
	${Functions.breakpoint('laptop')} {
		margin: 0 auto;
		width: calc(100% - var(--gridMargin) * 2);
	}
`;

export const Container = styled.div`
	width: calc(100% - var(--gridMargin) * 2);
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0 auto;

	${Functions.breakpoint('laptop')} {
		width: ${Functions.col(6, 12)};
	}

	> div {
		display: flex;
		flex-direction: column;

		p,
		span {
			font-weight: bold;
			font-size: 16px;
			/* line-height: 25px; */
			margin-left: 15px;
		}
		span {
			font-size: 14px;
			color: var(--yellow);
		}
	}
`;
