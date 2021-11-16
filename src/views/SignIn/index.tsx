import React, {useState,useCallback,FormEvent} from 'react'
import {useNavigate, Link} from "react-router-dom"
import {toast} from "react-toastify"

import Loader from "../../components/Loader/index"
import {Container} from "./style"
import {api} from "../../serverless/api"

interface IData {
    name:string;
    email:string;    
    senha:string;    
}

export default function SignUp() {
    const [data,setData]=useState<IData>({} as IData)
    const [load,setLoad]=useState(false);
    const navigate = useNavigate()

    const handleSubmit = useCallback ((e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoad(true)
        api.post("session",data).then(
            response=>{
                const sessionToken = JSON.stringify(response.data.token)
                localStorage.setItem("gamaServiceToken",sessionToken)
                setLoad(false)
                console.log(response.data)
                toast.success("Login com sucesso!", {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    onClose:()=> navigate("/dashboard")                           
                })                 
                
                          
            }
        ).catch(e=>{toast.error("Oops,algo deu errado")})
        .finally(()=>setLoad(false))
    },[data,navigate])

    if(load){
        return <Loader/>
    }

    return (                
        <Container>           
            <div className="card">
            <h2>Logar no Sistema</h2> 
            <form onSubmit={handleSubmit}>                
                <input 
                onChange={e=>setData({...data,name:e.target.value})}
                type="text" 
                placeholder="seu nome" />
                <input 
                onChange={e=>setData({...data,email:e.target.value})}
                type="text" 
                placeholder="seu email" />                
                <input 
                onChange={e=>setData({...data,senha:e.target.value})}
                type="string" 
                placeholder="sea senha" />
                <input type="submit" value="Logar" />
            </form>
            <Link to="/signup">Click para cadastrar.</Link>
            </div>            
        </Container>
    )
}
