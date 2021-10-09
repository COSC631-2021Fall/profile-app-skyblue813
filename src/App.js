import { BrowserRouter,Route ,Switch} from "react-router-dom";
import Module1 from "./Components/Module1";
import Module2 from "./Components/Module2";
import Navbar from "./Components/Navbar";
import {useState, useEffect} from "react" ;


function App() {
  const themes = ['yellow', 'tomato', 'olive'];
  const [themeId, setThemeId] = useState(0);
  const switchTheme= () =>{
    setThemeId((id) => (id+1)%3);
  }
  const handleKeydown=(event)=>{
    switch(event.key)
   {case "0":
   case"1":
   case"2":
   setThemeId(parseInt(event.key));
   break;
  }
  }

  useEffect(
    () =>{
      window.addEventListener("keydown",handleKeydown);
    }
  );
  return (
    <div style ={{backgroundColor:themes[themeId]}}>
     
        <Navbar />
        <center>
<h1>
<u>Priyadarshini G Thoppae</u>
<div> <button onClick ={switchTheme}>Switch </button> </div>
</h1>
</center>
      <main>
        
        <BrowserRouter>
           <Route path ="/Module1">
            <Module1/>
            </Route>

            <Route path ="/Module2">
        <Module2/>
            </Route >
        </BrowserRouter>
  </main>
    </div>
  );
}

export default App;
