import styled from "styled-components";
export const Container = styled.section`
 width:100%;
 height:100%;
`;
export const Ul =styled.ul`
 width:100%;
 display:grid;
 grid-template-columns:repeat(4,1fr);
 grid-gap:1em;
 padding:1em;
`;
export const List = styled.li`
`;
export const Thumbnails = styled.div`
  width:100%;
  transition:0.5s ease-in-out all;

  position:relative;
  &:hover{
     p{
        display:block;
     }
  }

`; 
export const Img =styled.img`
max-width:100%;
`;
export const H3 = styled.h3`
  font-size:1em;
  margin-top:1em;
`;
export const H4 = styled.h4`
  font-size:0.7em;
  margin-top:1em;
`;
export const P = styled.p`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:#f1f1f1;
  padding:0.4em;
  padding-top:1em;
  text-overflow: ellipsis;
  overflow:hidden;
  display:none;
  transition:0.5s ease-in-out all;
`;