import Functions from '@/styles/Functions';
import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
	width: 100%;
	height: 60px;
`;

const HeadingContainer = styled.div`
	width: calc(100% - var(--gridMargin) * 2);
	margin: auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Gilroy-Bold';

	${Functions.breakpoint('mobile')} {
		justify-content: flex-start;
	}
`;

const Heading1 = styled.h1`
	font-size: 24px;
`;
const Heading2 = styled.h2`
	font-size: 10px;
	color: var(--contrast);
	line-height: 25px;

	span {
		color: var(--text);
	}
`;

const WifiSetupHeading = () => {
	return (
		<Heading>
			<HeadingContainer>
				<Heading1>Wi-Fi setup</Heading1>
				<Heading2>
					Camera ID: <span>00123P1</span>
				</Heading2>
			</HeadingContainer>
		</Heading>
	);
};

export default WifiSetupHeading;
