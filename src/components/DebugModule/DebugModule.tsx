import React, { useEffect, useState } from 'react';
import Variables, { Breakpoints } from '@/styles/Variables';
import { Column, Grid } from './DebugModule.styled';

export default function DebugModule() {
	const [gridVisible, setGridVisible] = useState(false);
	const [gridData, setGrid] = useState({
		columns: Variables.gridColumns,
		margin: Variables.gridMargin,
		gutter: Variables.gridGutter,
	});

	useEffect(() => {
		if (window.localStorage.getItem('DebugModule_gridVisible') === 'true') setGridVisible(true);

		const keyDown = (e: KeyboardEvent) => {
			let active = document.activeElement;
			if (active && active.tagName.toLowerCase() == 'input') return;

			if (e.key == 'g') {
				setGridVisible((gridVisible) => {
					let souldBeVisible = !gridVisible;
					window.localStorage.setItem(
						'DebugModule_gridVisible',
						souldBeVisible ? 'true' : 'false'
					);
					return souldBeVisible;
				});
			}
		};

		const internalResize = () => {
			if (typeof window == 'undefined') return;
			if (window.innerWidth <= parseInt(Breakpoints.mobile)) {
				setGrid(() => {
					return {
						columns: Variables.gridColumnsMobile,
						margin: Variables.gridMarginMobile,
						gutter: Variables.gridGutterMobile,
					};
				});
			} else if (window.innerWidth <= parseInt(Breakpoints.desktop)) {
				setGrid(() => {
					return {
						columns: Variables.gridColumns,
						margin: Variables.gridMargin,
						gutter: Variables.gridGutter,
					};
				});
			} else {
				setGrid(() => {
					return {
						columns: Variables.gridColumns,
						margin: Variables.gridMarginDesktop,
						gutter: Variables.gridGutterDesktop,
					};
				});
			}
		};

		window.addEventListener('keydown', keyDown);
		window.addEventListener('resize', internalResize);
		internalResize();

		return () => {
			window.removeEventListener('keydown', keyDown);
			window.removeEventListener('resize', internalResize);
		};
	}, []);

	const columns = [];

	for (let i = 1; i <= gridData.columns; i++) {
		columns.push(<Column key={i}>{i}</Column>);
	}

	return (
		<Grid gridVisible={gridVisible} margin={gridData.margin} gutter={gridData.gutter}>
			{columns}
		</Grid>
	);
}
