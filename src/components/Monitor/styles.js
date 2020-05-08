import styled from 'styled-components';


export const Container = styled.div`
margin-right: 200px;
  margin-left: 200px;
  display:flex;
  position:relative;
  flex-direction:column;
  justify-content:center;
  @media screen and (max-width:940px){
   margin-right: 0;
    margin-left: 0;
  }
  margin-top: 100px;
  h2{
    color:#fff;
  }
  b{
    font-weight:bold;
    font-style:oblique;
  }
  transition:2s;
`
export const Card = styled.div`
  height:70px;
  position:relative;
  margin-top:20px;
  border: 2px solid ${props => props.color};
  box-shadow: 0 7px 6px 0 rgba(33,43,54,.04);
  border-top:10px solid ${props => props.color};
  border-radius:10px;
  width:auto;
  min-width:200px;
  padding:10px 20px;
  text-align:center;
  @media screen and (max-width:940px){
    margin-left:0 !important;
  }
  
`

export const Confirmed = styled.span`
    font-family:Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    text-align:center;
`;

export const Value = styled.span`
    color:${props => props.color};
    font-weight:bold;
    font-size:22pt;
`



export const Description = styled.span`
  color:#fff;
  font-size:12pt;
  font-weight:bold;
`

export const New = styled.span`
  color: #fff;
  font-size: 8pt;
  font-weight: 600;


`