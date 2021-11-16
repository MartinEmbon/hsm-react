import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  width:100%;
  background:#8c52e5;
  .wrapper{
      display:grid;
      .card{
          display:flex;
          justify-content:center;
          align-items:center;
          background:#fff;
          padding:12px;
          margin:22px 0;
          img {
          border-radius:50%;
            }
            .content-information{
                display:grid;
                margin-left:15px;
            }
        }
      
  }
`;


