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
       {data.map((db,i)=>(
        <List>
          <Thumbnails>
          <Link to={"/videos/"+db.snippet["resourceId"].videoId}>
            <Img src={db["snippet"].thumbnails["medium"].url} alt="Video Thumnails" />
          </Link> 
          <P>{db["snippet"].description}</P>
          </Thumbnails>
          <H3><Link to={"/videos/"+db.snippet["resourceId"].videoId}>{db["snippet"].title}</Link></H3>
          <H4><Link to={"/videos/"+db.snippet["resourceId"].videoId}>{db["snippet"].channelTitle}</Link></H4>
        </List>   
        ))}
     </Ul>
     :""}
   </Container>
  );
}
export default Home;