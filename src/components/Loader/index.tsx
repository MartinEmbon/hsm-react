import React from 'react'
import {Container} from "./style"
import Lottie from 'react-lottie';
import animation from "../../animations/9764-loader.json"

export default function Loader() {
    
    const defaultOptions = {
        loop:true,
        autoplay:true,
        animationData:animation
    }
    
    return (
        <Container>
            <div>
            <h1>Cargando...</h1>
            <Lottie
            options={defaultOptions}
            width={200}
            height={200}
            />
            </div>            
        </Container>
    )
}
