import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
}
html,
body,
#root {
	min-height: 100%;
}
html,
input,
button {
	font-family: 'Roboto', sans-serif;
}
a {
	text-decoration: none;
}
ul {
	list-style: none;
}
body {
	-webkit-font-smoothing: antialised !important;
	background: #81259D;
}

/* width */
::-webkit-scrollbar {
  width: 1%;
}

/* Track */
::-webkit-scrollbar-track {
  background: #81259D;
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #FFF;
  border-radius: 2px;
}

`;