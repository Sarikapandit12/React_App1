import { HashRouter, Routes, Route, Link } from "react-router-dom";

import MyComp from "./basic/page1";
import MyEmp from "./basic/page2";
import MyCustom from "./basic/page3";
import Allitem from "./basic/page4";
import MyCity from "./basic/page6";

import Myhook1 from "./hooks/assign1";
import Myhook2 from "./hooks/assign2";
import Myhook3 from "./hooks/assign3";
import Myhook4 from "./hooks/assign4";
import Myhook5 from "./hooks/assign5";
import Myhook6 from "./hooks/assign6";
import Myapi1 from "./api/api1";

function App() {
  return (
    <HashRouter>
      <header>
        <Link to="/complist" className="toplink"> Company's Name </Link>
        <Link to="/citylist" className="toplink">  City Name </Link>
        <Link to="/emplist" className="toplink">  Employees Details </Link>
        <Link to="/customlist" className="toplink">  Customer List </Link>
        <Link to="/itemlist" className="toplink"> Item List </Link>
        <Link to="/hook1" className="toplink"> Hook-1 </Link>
        <Link to="/hook2" className="toplink"> Hook-2 </Link>
        <Link to="/hook3" className="toplink"> Hook-3 </Link>
        <Link to="/hook4" className="toplink"> Hook-4 </Link>
        <Link to="/hook5" className="toplink"> Hook-5 </Link>
        <Link to="/hook6" className="toplink"> Hook-6 </Link>   
        <Link to="/api1" className="toplink"> Api-1 </Link>       
      </header>

      <Routes>
      <Route exact path="/api1" element= {<Myapi1/> } />
      <Route exact path="/hook6" element= {<Myhook6/> } />
      <Route exact path="/hook6" element= {<Myhook6/> } />
      <Route exact path="/hook5" element= {<Myhook5/> } />
      <Route exact path="/hook4" element= {<Myhook4/> } />
      <Route exact path="/hook3" element= {<Myhook3/> } />
      <Route exact path="/hook2" element= {<Myhook2/> } />
      <Route exact path="/hook1" element= {<Myhook1/> } />
      <Route exact path="/complist" element={ <MyComp/>} />
      <Route exact path="/citylist" element={ <MyCity/>} />
      <Route exact path="/emplist" element= { <MyEmp/> } />    
      <Route exact path="/customlist" element={ <MyCustom/>} />
      <Route exact path="/itemlist" element={ <Allitem/>} />
      </Routes>

      <footer>
         <p> @ Developed By Sarika..  </p>
      </footer>
    </HashRouter>

    
    
  );
}

export default App;

  // MyUser(); -- function calling
  // <MyUser/> -- component calling