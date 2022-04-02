import {useEffect,useState} from "react";
import {Nav,Ul,List,Form,Input} from "./style";
const Header = ()=>{
 return(
  <Nav>
     <Ul>
      <List>
          <Form>
              <Input type="search" placeholder="Search Topics"/>
          </Form>
      </List>
     </Ul>  
  </Nav>
 );
}
export default Header;