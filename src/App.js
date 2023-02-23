import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Error from "./pages/Error/error";
import Lodging from "./pages/Lodging/lodging";

function App() {
    return (
        <Router>      
            <Routes>        
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/lodging/:id" element={<Lodging />} />                
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default App;
