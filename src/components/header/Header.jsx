import {useEffect,useState,useRef} from "react";
import {Nav,Ul,List,Form,Input} from "./style";
import { useSelector,useDispatch } from "react-redux";
import {getSearchViedos,getHomeViedos} from "../../features/home/home";
const Header = ()=>{
    const dispatch = useDispatch();
    const refSearch = useRef(null);
    const handleSearch = (e)=>{
        e.preventDefault();
        if(refSearch.current.value) dispatch(getSearchViedos({topics:refSearch.current.value}))
        else dispatch(getHomeViedos());
    }
 return(
  <Nav>
     <Ul>
      <List>
          <Form role="search" onSubmit={(e)=>handleSearch(e)}  aria-labelledby="search topics form">
              <Input type="search" ref={refSearch}  name="search"   onBlur={(e)=> handleSearch(e)} placeholder="Search Topics"/>
          </Form>
      </List>
     </Ul>  
  </Nav>
 );
}
export default Header;