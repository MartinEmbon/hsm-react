import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import PrivateRoute from "./private.routes"

import Home from "./views/Home"
import Courses from "./views/Courses"
import SignIn from "./views/SignIn"
import SignUp from "./views/SignUp"
import Dashboard from "./views/Dashboard"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component= {Home} />
                <Route  path="/courses" component={Courses} />                
                <Route  path="/signin"  component={SignIn}/>                
                <Route  path="/signup"  component={SignUp} />                                           
                <PrivateRoute  path="/dashboard" component={Dashboard}/>                                           
            </Switch>
        </BrowserRouter>
    )
}
