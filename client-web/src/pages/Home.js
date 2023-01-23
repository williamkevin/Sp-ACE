import React from 'react'
import  { Container } from '../components/Styles/Container/Container.style.js'
import { MainHeader, Header } from '../components/Styles/Header/Header.styled.js';


const Home = () => {
  return (
    <div>
    <Container>
      <Header>
        <MainHeader>
          <h1>Design Our Picture</h1>
        </MainHeader>
      </Header>
    </Container>
    </div>
  )
}

export default Home