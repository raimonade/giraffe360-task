import Functions from '@/styles/Functions';
import styled from '@emotion/styled';

export const Heading = styled.div`
	display: flex;
	width: 100%;
	/* height: 60px; */
	min-height: 100px;
	background: var(--grey);

	${Functions.breakpoint('mobile')} {
		min-height: 230px;
	}
`;

export const HeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: calc(100% - var(--gridMargin) * 2);
	margin: auto;
	height: 100%;
`;

export const HeadingContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	font-family: 'Gilroy';
	padding: 30px;
	text-align: center;

	${Functions.breakpoint('mobile')} {
		padding: 0;
		justify-content: flex-start;
		align-items: flex-start;
		text-align: left;
	}

	${Functions.breakpoint('laptop')} {
		margin: 0;
		width: ${Functions.col(6, 12)};
	}
`;

export const Heading1 = styled.h1`
	font-size: 24px;

	${Functions.breakpoint('desktop')} {
		font-size: 30px;
	}
`;
export const Heading2 = styled.h2`
	font-size: 10px;
	color: var(--contrast);
	line-height: 25px;

	${Functions.breakpoint('desktop')} {
		font-size: 12px;
	}

	span {
		color: var(--text);
	}
`;
