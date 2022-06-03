import React, { memo } from 'react';
import {
	Heading,
	HeadingWrapper,
	Heading2,
	Heading1,
	HeadingContainer,
} from './WifiSetupHeading.styled';

const WifiSetupHeading = () => {
	return (
		<Heading>
			<HeadingWrapper>
				<HeadingContainer>
					<Heading1>Wi-Fi setup</Heading1>
					<Heading2>
						Camera ID: <span>00123P1</span>
					</Heading2>
				</HeadingContainer>
			</HeadingWrapper>
		</Heading>
	);
};

export default memo(WifiSetupHeading);
