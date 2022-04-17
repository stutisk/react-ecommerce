import "./App.css";
import {Homepage} from "./Pages/Homepage/Homepage";
import {Productpage} from "./Pages/Productpage/Productpage";
import {Cartpage} from "./Pages/Cartpage/Cartpage";
// import {MockAPI} from "./Pages/Mockman/Mockman"
import { Routes, Route} from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/Cartpage" element={<Cartpage />} />
      </Routes>
    </div>
  );
}

export default App;


// import React from "react";
// import Mockman from "mockman-js";
// function MockAPI() {
//   return (
//     <div className="MockAPI">
//       <Mockman />
//     </div>
//   );
// }

// export default MockAPI;
