import {Route,Navigate} from "react-router-dom"
import jwt_decode from "jwt-decode"

const PrivateRoute:any = ({component:Component,path:Path,...rest}:any) => {
    const isLoggedIn:string | null = localStorage.getItem("gamaServiceToken")
    const isSectionActive:any =() =>{
        if(isLoggedIn===null){
            return false
        } else {
            const onlyToken = isLoggedIn
            const tokenPayload:any = jwt_decode(onlyToken)
            const expSeconds = tokenPayload.exp;
            const timeNow = Date.now()/10000;
            return timeNow > expSeconds ? false : true
        }
    }

    return (
        <Route {...rest} render= { (props: JSX.IntrinsicAttributes) =>(
            isSectionActive() ? <Component{...props}/>: <Navigate to="/"/>
        ) } />
    )
}

export default PrivateRoute