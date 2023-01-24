import React, { useState } from 'react'

import  { Container } from '../components/Styles/Container/Container.style.js'
import { MainHeader, Header } from '../components/Styles/Header/Header.styled.js';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Grid } from 'semantic-ui-react';

import Button from 'react-bootstrap/Button';

import axios from 'axios';


const Signup = () => {

  function getData(val) {
    setData(val.target.value)
  }
  function getData2(val) {
    setData2(val.target.value)
  }
  function getData3(val) {
    setData3(val.target.value)
  }
  function getData4(val) {
    setData4(val.target.value)
  }
  function getData5(val) {
    setData5(val.target.value)
  }
  function getData6(val) {
    setData6(val.target.value)
  }
  function getData7(val) {
    setData7(val.target.value)
  }
  function getData8(val) {
    setData8(val.target.value)
  }
  function getData9(val) {
    setData9(val.target.value)
  }

  const [userId, setData] = useState(null);
  const [userName, setData2] = useState(null);
  const [userPw1, setData3] = useState(null);
  const [userPw2, setData4] = useState(null);
  const [userEmail, setData5] = useState(null);
  const [userJob, setData6] = useState(null);
  const [userCollege_department, setData7] = useState(null);
  const [userProfile, setData8] = useState(null);
  const [userIs_mentor, setData9] = useState(null);

  const register = () => {

    axios
      .post('http://127.0.0.1:8000/api/user/signup', {
        username: userName,
        password1: userPw1,
        password2: userPw2,
        email: userEmail,
        job : userJob,
        email: userEmail,
        profile : userProfile,
        college_department : userCollege_department,
        is_mentor : 1,
        admin : 0,
        question_authority : 0,
      })
      .then(response => {
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
 
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  }


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
        <Form.Control placeholder="ID" id = "userId" name = "id" onChange = {getData}/>
        </InputGroup>

        <InputGroup className="mb-3" id = "userName" onChange = {getData2}>
        <Form.Control placeholder="이름"/>
        </InputGroup>

        <InputGroup className="mb-3" id = "userPw1" onChange = {getData3}>
        <Form.Control placeholder="PW1"/>
        </InputGroup>

        <InputGroup className="mb-3" id = "userPw2" onChange = {getData4}>
        <Form.Control placeholder="PW2"/>
        </InputGroup>
        
        <InputGroup className="mb-3" id = "userEmail" onChange = {getData5}>
        <Form.Control placeholder="이메일"/>
        </InputGroup>

        <InputGroup className="mb-3" id = "userJob" onChange = {getData6}>
        <Form.Control placeholder="신분"/>
        </InputGroup>
        
        <InputGroup className="mb-3" id = "userCollege_department" onChange = {getData7}>
        <Form.Control placeholder="학교/학부/학과"/>
        </InputGroup>
        
        <InputGroup className="mb-3" id = "userProfile" onChange = {getData8}>
        <Form.Control placeholder="프로필 정보"/>
        </InputGroup>
        
        <InputGroup className="mb-3" id = "userIs_mentor" onChange = {getData9}>
        <Form.Control placeholder="멘토 여부"/>
        </InputGroup>

        </ListGroup.Item>
    
        <ListGroup.Item>
        <div className="d-grid gap-2">
           <Button href="#" onClick = {() => {register()}}
           variant="secondary" 
           size="lg">
              회원가입
           </Button>
        </div>
        </ListGroup.Item>
      </ListGroup>
          </Card>
        </Grid.Row>
    </Grid>
    </div>
  )
}

export default Signup

