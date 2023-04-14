import {Routes ,Route} from "react-router-dom"
import Home from "./Component/Home";
import { Sucess } from "./Component/Sucess";
function App() {
      return (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paymentsucessfull" element={<Sucess />} />
          </Routes>
        </div>
      );



}

export default App;
