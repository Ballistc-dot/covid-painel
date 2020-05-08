import styled from 'styled-components';


export const Container = styled.div`
  background-color:#131925;
  width:100%;
  height:70px;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  header{
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 200px;
    border: 1px solid rgba(28,28,28,.07);
    box-shadow: 0 7px 6px 0 rgba(33,43,54,.04)
  }
   @media screen and (max-width:940px){
        header{
          margin-left: 0;
        }
      }
  span{
    color: #54BA78;
    font-weight: bold;
  }
`;
export const HeaderItens = styled.div`
  display:inline-flex;
  text-decoration:none;
  cursor:pointer;
`
export const Title = styled.h1`
  font-family:Arial, Helvetica, sans-serif;
  font-size:19pt;
  color:#b13d3d;
`
