import styled  from "styled-components";
export const Conatiner = styled.section`
 width:100%;
 height:100%;
 display:grid;
 grid-template-columns:repeat(1,2fr 1fr);
 grid-gap:1em;
`;
export const Iframs = styled.iframe`
  width:100%;
  height:25rem;
`;
export const RelatedVideos = styled.div`
 width:100%;
`;
export const  Video = styled.video`
  width:55%;
  height:7rem;
  object-fit:fill;
  margin-right:0.5em;
`;
export const H3 = styled.h3`
  font-size:0.8em;
  margin-top:1em;
  font-weight:600;
  
`;
export const H4 = styled.h4`
  font-size:0.7em;
  margin-top:1em;
  font-weight:700;
  line-height:1.5;
  height:1rem;
  text-overflow: ellipsis;
  overflow:hidden;
  a{
    color:#606060;
  }
`;
export const Ul =styled.ul`
 width:100%;
 height:100vh;
 overflow-y:auto;
 padding:1em;
`;
export const List = styled.li`
margin:auto;
margin-bottom:1em;

a{
   width:100%;
   display:flex;
align-items:flex-start;
}
`;
export const Description = styled.div`
 width:40%;
`;
export const P = styled.p`
font-size:0.7em;
  color:#606060;
`;
