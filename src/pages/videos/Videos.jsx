import { useEffect } from "react";
import {Conatiner,Iframs,P,Ul,List,RelatedVideos,Video,H4,H3,Description} from "./style";
import { useParams,Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {getRelatedViedos} from "../../features/videosPlayer/videos";
const Videos = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.videos.data);
    const status = useSelector((state)=> state.videos.status);

    useEffect(()=>{
        dispatch(getRelatedViedos({id}));
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
             <Ul>
             { data.map((db,i)=>(
               <>
              {db["snippet"]?.title ? 
             <List key={db.etag}>
               <Link to={"/videos/"+db["id"].videoId}>
               <Video poster={db["snippet"]?.thumbnails["medium"]?.url}>
                <source src="/media/cc0-videos/flower.webm"
                  type="video/webm"/>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                 type="video/mp4"/>
              </Video> 
              <Description>
              <H3><Link to="">{db["snippet"]?.title}</Link></H3>
               <H4><Link to="">{db["snippet"]?.channelTitle}</Link></H4>
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