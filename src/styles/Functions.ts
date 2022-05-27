import { Variables, Breakpoints } from './Variables';

const col = (
	colCount: number,
	maxColCount = Variables.gridColumns,
	addGutters = 0,
	extra = '0px',
	gutter = Variables.gridGutter
) => {
	if (addGutters !== 0) {
		return `calc(((100% + ${gutter}) / ${maxColCount}) * ${colCount} + (${gutter} * ${
			addGutters - 1
		}) + ${extra})`;
	} else {
		return `calc(((100% + ${gutter}) / ${maxColCount}) * ${colCount} + (${gutter} * ${-1}) + ${extra})`;
	}
};

const colFixed = (
	colCount: number,
	addGutters = 0,
	extra = '0px',
	maxColCount = Variables.gridColumns,
	gutter = Variables.gridGutter
) => {
	return `calc((((100% - var(--gridMargin) * 2) + ${gutter}) / ${maxColCount}) * ${colCount} + (${gutter} * ${
		addGutters - 1
	}) + ${extra})`;
};

const colAsNumber = (
	containerWidth: number,
	colCount: number,
	maxColCount = Variables.gridColumns,
	addGutters = 0,
	extra = 0,
	gutter = Variables.gridGutter
) => {
	let gutterNum = parseInt(gutter);
	return (
		((containerWidth + gutterNum) / maxColCount) * colCount +
		gutterNum * (addGutters - 1) +
		extra
	);
};

const Functions = {
	col: (colCount: number, maxColCount = Variables.gridColumns, addGutters = 0, extra = '0px') => {
		return col(colCount, maxColCount, addGutters, extra, 'var(--gridGutter)');
	},
	colMobile: (
		colCount: number,
		maxColCount = Variables.gridColumnsMobile,
		addGutters = 0,
		extra = '0px'
	) => {
		return col(colCount, maxColCount, addGutters, extra, Variables.gridGutterMobile);
	},
	colFixed: (colCount: number, addGutters = 0, extra = '0px') => {
		return colFixed(colCount, addGutters, extra, Variables.gridColumns, 'var(--gridGutter)');
	},
	colFixedMobile: (colCount: number, addGutters = 0, extra = '0px') => {
		return colFixed(
			colCount,
			addGutters,
			extra,
			Variables.gridColumnsMobile,
			Variables.gridGutterMobile
		);
	},
	colAsNumber: (
		currentContainerWidth: number,
		colCount: number,
		maxColCount = Variables.gridColumns,
		addGutters = 0,
		extra = 0
	) => {
		return colAsNumber(currentContainerWidth, colCount, maxColCount, addGutters, extra);
	},

	hexFromRGB: (color: any) => {
		return (
			'#' +
			((1 << 24) + (color.red << 16) + (color.green << 8) + color.blue).toString(16).slice(1)
		);
	},

	colAsNumberMobile: (
		currentContainerWidth: number,
		colCount: number,
		maxColCount = Variables.gridColumnsMobile,
		addGutters = 0,
		extra = 0
	) => {
		return colAsNumber(
			currentContainerWidth,
			colCount,
			maxColCount,
			addGutters,
			extra,
			Variables.gridGutterMobile
		);
	},
	colAsNumberDesktop: (
		currentContainerWidth: number,
		colCount: number,
		maxColCount = Variables.gridColumns,
		addGutters = 0,
		extra = 0
	) => {
		return colAsNumber(
			currentContainerWidth,
			colCount,
			maxColCount,
			addGutters,
			extra,
			Variables.gridGutterDesktop
		);
	},
	breakpoint: (key: string, minMax: 'min' | 'max' = 'min') => {
		let size = key;

		if (!key.endsWith('px')) {
			let i = Object.keys(Breakpoints).findIndex((b) => b === key);
			let arr = Object.values(Breakpoints);
			size = i >= 0 ? arr[i] : arr[0];
		}

		return `@media all and  (${minMax}-width: ${size})`;
	},
	limitText: (lines = 3, lineHeight = '1.25em') => {
		return `display: -webkit-box;
    box-sizing: content-box;

    line-height: ${lineHeight};
    max-height: calc(${lineHeight} * ${lines});

    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lines};

    overflow-wrap: break-word;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
		`;
	},
	hyphen: () => {
		return `overflow-wrap: break-word;
		-ms-word-wrap: break-word;
		word-wrap: break-word;
		-webkit-hyphens: auto;
		-moz-hyphens: auto;
		hyphens: auto;`;
	},
};

export default Functions;
