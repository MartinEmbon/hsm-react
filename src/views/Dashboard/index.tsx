import {useState,useEffect} from 'react'
import {Link} from "react-router-dom"

import {useDispatch} from "react-redux"
import addNewUser from "../../store/modules/user/action"

import {api} from "../../serverless/api"
import Loader from "../../components/Loader"
import {Container} from "./style"

interface ICollaborator{
    id:number;
    name:string;
    email:string;
    photo:{
        path:string;
    }    
}


export default function Dasbhoard() {
    const [data,setData]=useState<ICollaborator[]>([])
    const [isLoad,setIsLoad] = useState(false)
    const token = localStorage.getItem("gamaServiceToken")?.replace(/["]/g,"")
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        api.get("collaborator",{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(response=>{
            setIsLoad(true)
            setData(response.data)            
        }).finally(()=>setIsLoad(false))
    },[token])

    useEffect(()=>{
        data.map(user=>dispatch((addNewUser(user))))
    },[data,dispatch])

    if(isLoad){
        return <Loader/>
    }

    return (
        <Container>            
            <div className="wrapper">
                <h1>Dashboard</h1>
                <div>
                {/* <img src="https://computerworld.com.br/wp-content/uploads/2020/01/Em-meio-a-investiga%C3%A7%C3%B5es-e-protestos-Bezos-anuncia-US-1-bilh%C3%A3o-para-%C3%8Dndia.jpg"/> */}
                {data?.map(el=>{
                        <div key={el.id} className="card">
                            <img src="https://computerworld.com.br/wp-content/uploads/2020/01/Em-meio-a-investiga%C3%A7%C3%B5es-e-protestos-Bezos-anuncia-US-1-bilh%C3%A3o-para-%C3%8Dndia.jpg"/>
                            <div className="content-information">
                                <p>Nome: {el.name}</p>
                                <p>Email: {el.email}</p>
                            </div>                            
                        </div>
                    })}
                </div>    
                <Link to="/">Retornar para home</Link>           
            </div>
        </Container>
    )
}
