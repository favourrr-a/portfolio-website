import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact"
import ThingsIveDone from "../pages/ThingsIveDone";



const Router = () => {

    return (
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="home" element={<Home/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
            <Route path="thingsIveDone" element={<ThingsIveDone/>}></Route>

        </Routes>
    );
}


export default Router;