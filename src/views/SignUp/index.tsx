import React, {useState,useCallback,FormEvent} from 'react'
import {useHistory, Link} from "react-router-dom"
import {toast} from "react-toastify"
import {Container} from "./style"
import {api} from "../../serverless/api"
import Loader from "../../components/Loader/index"
import "react-toastify/dist/ReactToastify.css"

interface IData {
    name:string;
    email:string;    
    senha:string;    
}

export default function SignUp() {
    const [data,setData]=useState<IData>({} as IData)
    const [load,setLoad]=useState(false);
    const history = useHistory()

    const handleSubmit = useCallback ((e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoad(true)
        api.post("users",data).then(
            response=>{
                setLoad(false)
                console.log(response.data)
                toast.success("cadastro com sucesso!", {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                   onClose:()=> history.push("/signin")                           
                })                 
                                          
            }
        ).catch(e=>{toast.error("Oops,algo deu errado")})
        .finally(()=>setLoad(false))
    },[data,history])

    if(load){
        return <Loader/>
    }

    return (                
        <Container>           
            <div className="card">
            <h2>Cadastre-se</h2> 
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
                <input type="submit" value="Cadastrar" />
            </form>
            <Link to="/signin">Click para Login</Link>
            </div>            
        </Container>
    )
}
