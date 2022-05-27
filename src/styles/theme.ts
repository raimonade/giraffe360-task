import { Colors } from './Variables';

export const lightTheme = {
	background: Colors.lightGrey,
	backgroundGraphic: Colors.grey,
	offcolor: Colors.grey,
	text: Colors.darkBlue,
	box: Colors.darkBlue,
	boxText: Colors.grey,
};

export const darkTheme: Theme = {
	background: Colors.darkBlue,
	backgroundGraphic: Colors.lightBlue,
	offcolor: Colors.deepDarkBlue,
	text: Colors.grey,
	box: Colors.lightBlue,
	boxText: Colors.darkBlue,
};

export const themeTransition = 0.5;

export type Theme = typeof lightTheme;

export interface ThemeProps {
	theme: Theme;
}
