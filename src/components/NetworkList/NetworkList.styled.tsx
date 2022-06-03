import styled from '@emotion/styled';
import Functions from '@/styles/Functions';
import { motion } from 'framer-motion';

export const Container = styled.div`
	display: block;
	width: calc(100% - var(--gridMargin) * 2);
	margin: 0 auto;
	margin-top: 40px;
`;
export const Wrapper = styled(motion.div)`
	width: 100%;
	${Functions.breakpoint('laptop')} {
		margin: 0 auto;
		width: ${Functions.col(6, 12)};
	}

	> div {
		&:not(:first-of-type) {
			margin-top: 40px;
		}
	}
`;
export const List = styled.ul`
	> li {
		border-bottom: 1px solid var(--border);
	}
`;

export const Heading = styled.h3`
	color: var(--contrast);
	font-size: 14px;
	font-weight: bold;
	line-height: 25px;
	padding-bottom: 10px;
	margin-bottom: 5px;
	border-bottom: 1px solid var(--border);
`;
