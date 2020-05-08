import React from 'react';

import { Container, HeaderItens,Title } from './styles';


function Header() {
  return (
    <Container>
      <header>
        <HeaderItens>
          <Title>Corona Vírus</Title>
          <span>Brasil</span>
        </HeaderItens>
      </header>
    </Container>
  )
}

export default Header;