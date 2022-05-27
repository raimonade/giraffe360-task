import { createGlobalStyle } from 'styled-components';
import Variables, { Colors } from './Variables';
import Functions from './Functions';

const Global = createGlobalStyle`
    @font-face {
		font-family: 'Gilroy-Bold';
		font-style: normal;
		font-weight: normal;
		src:  url('Gilroy-Bold.woff2') format('woff2'),
			url('Gilroy-Bold.woff') format('woff');
    }
    
    @font-face {
		font-family: 'Gilroy-Regular';
		font-style: normal;
		font-weight: normal;
		src:  url('Gilroy-Regular.woff2') format('woff2'),
			url('Gilroy-Regular.woff') format('woff');

    }
    @font-face {
		font-family: 'Gilroy-Medium';
		font-style: normal;
		font-weight: normal;
		src:  url('Gilroy-Medium.woff2') format('woff2'),
			url('Gilroy-Medium.woff') format('woff');
    }

* {
	box-sizing: border-box;
	margin:0;
	padding:0;
}
html {
	overflow-x: hidden;
	overflow-y: scroll;
}
body {
	background-color: var(--background);
	color: var(--text);
	font-family: 'Gilroy-Regular', Tahoma, Helvetica, Arial, Roboto, sans-serif;
	font-size: 16px;
	transition: color ${Colors.transition}s, background-color ${Colors.transition}s;
	-webkit-font-smoothing: antialiased;
	font-smooth: always;
	-moz-osx-font-smoothing: auto;
}

html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }

a {
	color: var(--text);
	transition: color ${Colors.transition}s;
}
#app {
	min-height:  100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
}

button {
	border: none;
	background-color: inherit;
	padding: 0;
	:hover {
		cursor: pointer;
	}
}

.fade-enter {
  opacity: 0;
	transform: translateX(500px);
	position: absolute;
  z-index: 1;
}
.fade-enter.fade-enter-active {
  opacity: 1;
	transform: translateX(0px);
  transition: opacity 200ms ease-in-out, transform 200ms ease-out;
}

.fade-exit {
  opacity: 1;
	transform: translateX(0px);
}
.fade-exit-active {
  opacity: 0;
	transform: translateX(-500px);
  transition: opacity 200ms ease-in, transform 200ms ease-in;
}

:root {
	--gridMargin: ${Variables.gridMarginMobile};
	--gridGutter: ${Variables.gridGutterMobile};
	--textModuleGap: 4rem;
	--contentModuleGap: 12rem;

	--background: ${Colors.offWhite};
	--backgroundOff: ${Colors.grey};
	--graphic: ${Colors.grey};
	--text: ${Colors.darkBlue};
	--contrast: ${Colors.darkBlue};
	--contrastText: ${Colors.grey};
	--harsh: ${Colors.white};
	--border: ${Colors.darkGrey};
	--dark: ${Colors.darkBlue};
}

${Functions.breakpoint('mobile')} {
	:root {
		--gridMargin: ${Variables.gridMargin};
		--gridGutter: ${Variables.gridGutter};
	}
}

${Functions.breakpoint('desktop')} {
	:root {
		--gridMargin: ${Variables.gridMarginDesktop};
		--gridGutter: ${Variables.gridGutterDesktop};
	}
}
`;

export default Global;
