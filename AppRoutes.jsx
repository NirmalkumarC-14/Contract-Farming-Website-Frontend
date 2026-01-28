import {Routes,Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Otp from "../pages/Otp";
import Dashboard from "../pages/Dashboard";


function AppRoutes(){
    return (
        
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/otp" element={<Otp/>}/>
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes> 
    );
}

export default AppRoutes;