import styled from 'styled-components';

export const Container  = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100vh;
    background:#8c52e5;
    .card{
        display:grid;
        background:#f9f9f9;
        max-width:300px;
        border-radius:22px;
        padding:22px;
         h2 {
             text-align:center;
         }
         a {
             text-decoration:none;
             text-align:center;
             color:#8c52e5;
             margin:12px auto;
         }
    }
     form {
        width:100%;
        margin:auto;        
      
        input {
             width:100%;
             height:32px;                          
             border-radius:22px;
             border:1px solid #e2e2e2;
             text-align:center;
             margin:10px auto;
         }
         input[type="submit"]{
            cursor:pointer; 
            border:none;
             background-color:#8c52e5;
             padding:5px;
             border-radius:12px;
             transition:0.6s;
             &:hover{
                 background:orange;
             }
         }
     }
`;

