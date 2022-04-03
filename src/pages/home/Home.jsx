import { useEffect } from "react";
import {Container,Ul,List,Img,H4,H3,P,Thumbnails} from "./style.js";
import { useSelector,useDispatch } from "react-redux";
import {getHomeViedos} from "../../features/home/home";
import {Link} from "react-router-dom"
const Home = ()=>{
  const status = useSelector((state)=> state.home.status);
  const data = useSelector((state)=> state.home.data);
  const dispatch = useDispatch();
  useEffect(()=>{ 
    dispatch(getHomeViedos());
  },[])
  return (
   <Container>
     {status === "success"? 
     <Ul>
       {data != undefined && data.map((db,i)=>(
         <>
      {db["snippet"]?.title ? 
        <List key={db.etag+i}>
                    <Link to={"/videos/"+db["id"].videoId}>
          <Thumbnails>
            <Img src={db["snippet"]?.thumbnails["medium"].url} alt={"Video cover for "+ db["snippet"]?.channelTitle} />
          </Thumbnails>
          <H3>{db["snippet"]?.title}</H3>
          <H4>{db["snippet"]?.channelTitle}</H4>
          </Link> 

        </List>
       :""}
       </>   
        ))}
     </Ul>
     :""}
   </Container>
  );
}
export default Home;