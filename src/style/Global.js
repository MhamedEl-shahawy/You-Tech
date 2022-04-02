import { createGlobalStyle } from 'styled-components';

const Global =createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

*{
 	 margin: 0;
   padding: 0;
}
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
 font: inherit;
 border:1px solid #f1f1f1;
}
body,html { 
  transition: all 0.2s ease-in-out 0s;
  overflow-x:hidden;
  font-family: 'Open Sans', sans-serif;
      height:100%;
  width:100%;
  
}
ul{
  list-style:none;
}
a{
  text-decoration:none;
  color:#000;
  cursor:pointer;
}
`;

export default Global;