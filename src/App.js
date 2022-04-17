import "./App.css";
import {Homepage} from "./Pages/Homepage/Homepage";
import {Productpage} from "./Pages/Productpage/Productpage";
// import {MockAPI} from "./Pages/Mockman/Mockman"
import { Routes, Route} from "react-router-dom";
import {Loginpage} from "./Pages/Authpage/Loginpage"
import {Signuppage} from "./Pages/Authpage/Signuppage"
import {Cartpage} from "./Pages/Cartpage/Cartpage"
import {Wishlistpage} from "./Pages/Wishlistpage/Wishlistpage"

function App() {
  return (

    <div className="App">
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/Cartpage" element={<Cartpage />} />
        <Route path="/Signup" element={<Loginpage />} />
        <Route path="/Login" element={<Signuppage />} />
        <Route path="/Wishlist" element={<Wishlistpage />} />
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
