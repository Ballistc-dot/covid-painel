import React from 'react';

import { Container,Card,Confirmed,Value,Description,New } from './styles';
import api from '../../services/Api'

class Monitor extends React.Component {
  state = {
    deaths:0,
    newDeaths:0,
    confirmed:0,
    newConfirmed:0,
    recovered:0 ,
    newRecovered:0,
    lastUpdate:null
  }
  getData = async()=>{
    var response = await api.get('/br')
    var confirmed = response.data.confirmed.value
    var deaths = response.data.deaths.value
    var recovered = response.data.recovered.value
    var Ndeaths = localStorage.getItem('deaths')
    var Nconfirmed = localStorage.getItem('confirmed')
    var Nrecovered = localStorage.getItem('recovered')

    var lastUpdate = new Date(response.data.lastUpdate)
    this.setState({
      lastUpdate:lastUpdate.toLocaleString('pt-BR',{timeZone:"America/Sao_Paulo"})
    })
    for (let i = Ndeaths; i <= deaths; i++) {
      setTimeout((nr)=> {
        this.setState({
          deaths:nr
        }) ;
      }, i * 1 / deaths, i);
    }
    for (let i = Nconfirmed; i <= confirmed; i++) {
      setTimeout((nr)=> {
        this.setState({
          confirmed:nr
        }) ;
      }, i * 1 / confirmed, i);
    }
    for (let i = Nrecovered; i <= recovered; i++) {
      setTimeout((nr)=> {
        this.setState({
          recovered:nr
        }) ;
      }, i * 1 / recovered, i);
    }
    if(deaths !== Number(Ndeaths)){
      var newDeaths = deaths - Ndeaths
      this.setState({
      newDeaths:newDeaths
    })
    }else if(confirmed !== Number(Nconfirmed)){
      var newCases = confirmed - Nconfirmed
      this.setState({
        newConfirmed:newCases
      })
    }else if(recovered !== Number(Nrecovered)){
      var newRecovered = recovered - Nrecovered
      this.setState({
        newRecovered:newRecovered
      })
    }
    
    localStorage.setItem('deaths',deaths)
    localStorage.setItem('confirmed',confirmed)
    localStorage.setItem('recovered',recovered)
  }
  componentDidMount(){
    this.getData()
    setInterval(this.getData,14000)
  }
  render() {
    return (
      <Container>
      <h2>Ultima atualização: <b>{this.state.lastUpdate}</b></h2>
      <Card color="#5d78ff">
       <Confirmed>
      <Value color="#5d78ff">{this.state.confirmed}</Value>
         <Description>Casos Confirmados</Description>
       </Confirmed>
      <New>{`AGORA: + ${this.state.newConfirmed} casos`}</New>
     </Card>
     <Card color="#b13d3d">
       <Confirmed>
        <Value color="#b13d3d">{this.state.deaths}</Value>
         <Description>Mortes</Description>
       </Confirmed>
        <New>{`AGORA: + ${this.state.newDeaths} mortes`}</New>
     </Card>
     <Card color="#54BA78">
       <Confirmed>
          <Value color="#54BA78">{this.state.recovered}</Value>
         <Description>Recuperados</Description>
       </Confirmed>
        <New>{`AGORA: + ${this.state.newRecovered} recuperados`}</New>
     </Card>
   </Container>
      )
  }
}

export default Monitor;