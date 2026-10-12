import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './../styles/App.css';

const App = () => {
return (
  <div>
  <BrowserRouter> 
  <Routes>
<Route path="/" element=<Home /> />
<Route path="/about" element=<About /> /> 
  </Routes>
  </BrowserRouter>


  {/* Do not remove the main div */}
</div>


);
};

export default App;
