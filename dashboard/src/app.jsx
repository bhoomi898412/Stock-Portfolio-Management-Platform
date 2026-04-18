import Home from "./components/Home";
import { GeneralContextProvider } from "./components/GeneralContext";

function App(){
  return (
   <GeneralContextProvider>
      <Home />
    </GeneralContextProvider>
  )
}

export default App;