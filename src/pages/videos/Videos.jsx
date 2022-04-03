import { useEffect,useState,useRef } from "react";
import {Conatiner,Iframs,P,Ul,List,RelatedVideos,Video,H4,H3,Description} from "./style";
import { useParams,Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {getRelatedViedos} from "../../features/videosPlayer/videos";
const Videos = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.videos.data);
    const status = useSelector((state)=> state.videos.status);
    const [counter,setCounter] = useState(10);
    const relatedEle = useRef(null);
    const handleScroll = (e)=>{
     let resultCounter = counter;
     if(relatedEle.current.scrollTop +  relatedEle.current.offsetHeight >= relatedEle.current.scrollHeight){
      resultCounter +=10;
      setCounter(resultCounter)
      dispatch(getRelatedViedos({id,counter}));
     }        
    };
    useEffect(()=>{
        dispatch(getRelatedViedos({id,counter}));
       
    },[id])

  return(
      <Conatiner>
          <Iframs 
           src={"https://www.youtube.com/embed/"+id+"?autoplay=1"}
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen>
          </Iframs>
          <RelatedVideos>
              {status === "success" ?       
             <Ul onScroll={handleScroll} ref={relatedEle}>
             {data != undefined  && data.map((db,i)=>(
               <>
              {db["snippet"]?.title ? 
             <List key={db.etag+i}>
               <Link to={"/videos/"+db["id"].videoId}>
               <Video poster={db["snippet"]?.thumbnails["medium"]?.url}>
                <source src="/media/cc0-videos/flower.webm"
                  type="video/webm"/>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                 type="video/mp4"/>
              </Video> 
              <Description>
              <H3>{db["snippet"]?.title}</H3>
               <H4>{db["snippet"]?.channelTitle}</H4>
               <P>
                
                   {new Date(db["snippet"]?.publishTime).toLocaleDateString('en-gb',{year: 'numeric',month: 'long',day: 'numeric'})}
               </P>
               </Description>
               </Link>
             </List> 
             :""}
             </>
             ))}
          </Ul>
          :""}
          </RelatedVideos>
      </Conatiner>
  );
}
export default Videos;