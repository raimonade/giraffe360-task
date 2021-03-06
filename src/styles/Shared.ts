import styled from '@emotion/styled';
import { Colors } from './Variables';
import Functions from '@/styles/Functions';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	> div {
		flex-shrink: 0;
	}
`;

export const Page = styled(Wrapper)`
	min-height: 100vh;
	position: relative;
	display: flex;
	padding-bottom: 80px;
`;

export const PageContent = styled.div`
	max-width: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;

	${Functions.breakpoint('tablet')} {
		width: calc(100% - (var(--gridMargin) * 2));
	}
`;

export const SiteContent = styled(Wrapper)`
	min-height: 100vh;

	${Page} {
		background-color: var(--background);
		transition: background-color ${Colors.transition}s;
	}
`;
