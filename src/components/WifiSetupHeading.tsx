import Functions from '@/styles/Functions';
import React, { memo } from 'react';
import styled from '@emotion/styled';

const Heading = styled.div`
	width: 100%;
	/* height: 60px; */
	min-height: 100px;
	background: var(--grey);

	${Functions.breakpoint('mobile')} {
		min-height: 230px;
	}
`;

const HeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: calc(100% - var(--gridMargin) * 2);
	margin: auto;
	height: 100%;
`;

const HeadingContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: auto;
	display: grid;
	place-content: center;
	font-family: 'Gilroy';
	padding: 30px;
	text-align: center;

	${Functions.breakpoint('mobile')} {
		padding: 0;
		justify-content: flex-start;
		text-align: left;
	}

	${Functions.breakpoint('laptop')} {
		margin: 0;
		width: ${Functions.col(6, 12)};
	}
`;

const Heading1 = styled.h1`
	font-size: 24px;

	${Functions.breakpoint('desktop')} {
		font-size: 30px;
	}
`;
const Heading2 = styled.h2`
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
