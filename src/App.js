import "./App.css";
import {Homepage} from "./Pages/Homepage/Homepage";
import {Productpage} from "./Pages/Productpage/Productpage";
// import {MockAPI} from "./Pages/Mockman/Mockman"
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productpage" element={<Productpage />} />
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
