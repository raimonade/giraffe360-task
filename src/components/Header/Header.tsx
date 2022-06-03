import React, { memo } from 'react';
import { Heading, HeadingContainer, StyledLogo } from './Header.styled';

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
