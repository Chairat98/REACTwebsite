
import Home from "./pages/Home"
import Publication from "./pages/Publication";
import Event from "./pages/Event";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>}/>
          <Route path="/header" element={< Header/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/public" element={<Publication/>} />
          <Route path="/event" element={<Event/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
