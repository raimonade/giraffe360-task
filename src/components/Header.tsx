import Functions from '@/styles/Functions';
import React, { memo } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Logo } from '@/assets/logo.svg';

const Heading = styled.div`
	width: 100%;
	height: 60px;
	background: var(--text);
`;

const StyledLogo = styled(Logo)`
	width: 102px;
`;

const HeadingContainer = styled.div`
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

const Header = () => {
	return (
		<Heading>
			<HeadingContainer>
				<StyledLogo />
			</HeadingContainer>
		</Heading>
	);
};

export default memo(Header);
