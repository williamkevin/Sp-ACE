import React from 'react'

import  { Container } from '../components/Styles/Container/Container.style.js'
import { MainHeader, Header } from '../components/Styles/Header/Header.styled.js';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Grid } from 'semantic-ui-react';
import SignupButton from '../components/SignupButton.js';
import sw from "../images/sw.jpeg";

import ApplicationButton from '../components/ApplicationButton.js';

const Signup = () => {
  return (
    <div>
    <Container>
      <Header>
        <MainHeader>
          <h1>회원가입</h1>
        </MainHeader>
      </Header>
    </Container>

    <Grid centered>
        <Grid.Row>
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>회원가입</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>

        <InputGroup className="mb-3">
        <Form.Control placeholder="ID"/>
        </InputGroup>

        <InputGroup className="mb-3">
        <Form.Control placeholder="PW1"/>
        </InputGroup>

        <InputGroup className="mb-3">
        <Form.Control placeholder="PW2"/>
        </InputGroup>

        <InputGroup className="mb-3">
        <Form.Control placeholder="이메일"/>
        </InputGroup>

        <InputGroup className="mb-3">
        <Form.Control placeholder="신분"/>
        </InputGroup>

        <InputGroup className="mb-3">
        <Form.Control placeholder="프로필 정보"/>
        </InputGroup>

        <InputGroup className="mb-3">
        <Form.Control placeholder="학교/학부/학과"/>
        </InputGroup>

        <InputGroup className="mb-3">
        <Form.Control placeholder="멘토 여부"/>
        </InputGroup>
        
        <InputGroup className="mb-3">
        <Form.Control placeholder="닉네임"/>
        </InputGroup>

        </ListGroup.Item>
    
        <ListGroup.Item><SignupButton/></ListGroup.Item>
      </ListGroup>
          </Card>
        </Grid.Row>
    </Grid>
    </div>
  )
}

export default Signup