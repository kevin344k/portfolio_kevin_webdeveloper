
import "./App.css";
import Aside from "./components/Aside";
import Section_big from "./components/Section_big";
import data from '../src/assets/data/data'

function App() {


  
 

  return (
    <div className="flex gap-3 w-full flex-col p-4">
      <Aside></Aside>
   <Section_big data={data}></Section_big>
    </div>
  );
}

export default App;
