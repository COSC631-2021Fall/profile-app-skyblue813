import { BrowserRouter,Route } from "react-router-dom";
import Module1 from "./Components/Module1";
import Module2 from "./Components/Module2";




function App() {
  return (
    <div>
      <header>
        <h1>Priyadarshini G Thoppae</h1>
        <BrowserRouter>
           <Route path ="/Module1">
            <Module1/>
            </Route>

            <Route path ="/Module2">
        <Module2/>
            </Route >
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
