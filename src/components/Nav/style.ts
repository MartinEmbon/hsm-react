import styled from "styled-components"

export const NavBar = styled.nav `
    
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content:space-between;
    margin:12px;
    img {
        width:300px;        
        height:auto;
    }
    .nav-links {
        display:flex;
        a {
            text-decoration:none;
            font-size:12px;
            font-family:arial;
            color:#000; 
            margin:12px;           
            text-transform:uppercase;
            transition:0.3s;
            &:hover{
                color:#676666;
            }
        }
        
    }
`