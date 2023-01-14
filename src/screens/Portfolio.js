import React from 'react'
import  {Container } from '../components/Styles/Container/Container.style.js'
import { MainHeader, Header } from '../components/Styles/Header/Header.styled.js';

import { Image, Icon, Divider, Grid } from 'semantic-ui-react';
import Buttons from "../buttons.js";

import Comments from '../comment.js';

import sw from "../sw.jpeg";


const Home = () => {
  return (
    <div>
    <Container>
      <Header>
        <MainHeader>
          <h1>This is my portfolio</h1>
        </MainHeader>
      </Header>
    </Container>

    <Grid centered>
        <Grid.Row>
          <Image src = {sw} centered />
        </Grid.Row>
        <Grid.Row>
        <Buttons/>
        </Grid.Row>
      </Grid>
    <br/>

    <Comments/>
    </div>
  )
}

export default Home;