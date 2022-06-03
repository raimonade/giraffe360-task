import Functions from '@/styles/Functions';
import styled from '@emotion/styled';

export const Upload = styled.div`
	height: 90px;
	width: 100%;
	border-bottom: 1px solid var(--border);
	/* 
	${Functions.breakpoint('mobile')} {
		width: calc(100% - var(--gridMargin) * 2);
	} */
`;
export const Container = styled.div`
	/* margin: auto; */
	height: 90px;
	/* width: calc(100% - var(--gridMargin) * 2); */
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: calc(100% - var(--gridMargin) * 2);

	margin: auto;

	span {
		font-weight: bold;
		font-size: 16px;
		line-height: 25px;
	}

	${Functions.breakpoint('mobile')} {
		font-size: 16px;

		/* width: ${Functions.colFixed(6)}; */
		margin: auto;
	}
	${Functions.breakpoint('laptop')} {
		width: ${Functions.colFixed(6)};
	}
`;
