import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
//import PrivateRoute from "./private.routes"

import Home from "./views/Home"
import Courses from "./views/Courses"
import SignIn from "./views/SignIn"
import SignUp from "./views/SignUp"
import Dashboard from "./views/Dashboard"

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/courses"  element={<Courses/>} />                
                <Route  path="/signin"  element={<SignIn/>} />                
                <Route  path="/signup"  element={<SignUp/>} />                                           
                <Route  path="/dashboard"  element={<Dashboard/>} />                                           
            </Routes>
        </BrowserRouter>
    )
}
