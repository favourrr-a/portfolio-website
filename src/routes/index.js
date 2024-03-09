import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact"



const Router = () => {

    return (
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="home" element={<Home/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
        </Routes>
    );
}


export default Router;