import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import sw3 from "../sw3.jpeg";


const mentorProfiles = () => {
  return (
    <div> 
    <div class="container">
    <div class="row">

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sw3} />
      <Card.Body>
        <Card.Title>김세원</Card.Title>
        <Card.Text>
            서울시립대학교 전자전기컴퓨터공학부
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>UOSLife BE Developer</ListGroup.Item>
        <ListGroup.Item>서울시립대학교 감사위원</ListGroup.Item>
        <ListGroup.Item>로봇 분야 해외 대학원 희망</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">프로필 자세히 보기</Card.Link>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sw3} />
      <Card.Body>
        <Card.Title>김세원</Card.Title>
        <Card.Text>
            서울시립대학교 전자전기컴퓨터공학부
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>UOSLife BE Developer</ListGroup.Item>
        <ListGroup.Item>서울시립대학교 감사위원</ListGroup.Item>
        <ListGroup.Item>로봇 분야 해외 대학원 희망</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">프로필 자세히 보기</Card.Link>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sw3} />
      <Card.Body>
        <Card.Title>김세원</Card.Title>
        <Card.Text>
            서울시립대학교 전자전기컴퓨터공학부
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>UOSLife BE Developer</ListGroup.Item>
        <ListGroup.Item>서울시립대학교 감사위원</ListGroup.Item>
        <ListGroup.Item>로봇 분야 해외 대학원 희망</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">프로필 자세히 보기</Card.Link>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sw3} />
      <Card.Body>
        <Card.Title>김세원</Card.Title>
        <Card.Text>
            서울시립대학교 전자전기컴퓨터공학부
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>UOSLife BE Developer</ListGroup.Item>
        <ListGroup.Item>서울시립대학교 감사위원</ListGroup.Item>
        <ListGroup.Item>로봇 분야 해외 대학원 희망</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">프로필 자세히 보기</Card.Link>
      </Card.Body>
      </Card>

    </div>
    </div>
    </div>
  )
}

export default mentorProfiles


