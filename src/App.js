import {Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Videos from "./pages/videos/Videos";

import {ThemeProvider} from "styled-components";
import Global from "./style/Global";
function App() {
  const theme = {
    color:"#f00"
  };
  return (
    <ThemeProvider theme={theme}>
      <Global/>
    <Routes>
       <Route path="/" element={<Home/>} />  
       <Route path="/videos/:id" element={<Videos/>} />  

    </Routes>
    </ThemeProvider>
  );
}

export default App;
