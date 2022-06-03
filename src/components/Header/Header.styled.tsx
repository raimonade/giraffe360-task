import Functions from '@/styles/Functions';
import styled from '@emotion/styled';
import { ReactComponent as Logo } from '@/assets/logo.svg';

export const Heading = styled.div`
	width: 100%;
	height: 60px;
	background: var(--text);
`;

export const StyledLogo = styled(Logo)`
	width: 102px;
`;

export const HeadingContainer = styled.div`
	width: calc(100% - var(--gridMargin) * 2);
	margin: auto;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	${Functions.breakpoint('mobile')} {
		justify-content: flex-start;
	}
`;
