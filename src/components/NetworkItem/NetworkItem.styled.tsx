import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const Item = styled(motion.li)`
	display: flex;
	height: 50px;
	width: 100%;
	align-items: center;
	cursor: pointer;

	span {
		font-weight: bold;
		font-size: 16px;
		/* line-height: 25px; */
		margin-left: 15px;
	}
`;
