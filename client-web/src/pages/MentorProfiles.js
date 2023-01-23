import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'semantic-ui-react';

import sw3 from "../images/sw3.jpeg";
import steve from "../images/steve.jpeg"
import ed from "../images/ed.jpeg"
import song from "../images/song.jpeg"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const mentors = [{name: "에드시런", image: {ed}}, {name: "송중기", image: {song}}, {name: "스티븐 잡스", image: {steve}}, {name: "김세원", image: {sw3}}]


const mentorProfiles = () => {
  return (
    <div>
    <Container>
      <Row>
         <Col xs>      
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={sw3} />
       <Card.Body>
         <Card.Title>{mentors.name}</Card.Title>
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
         <Card.Link href="/Profile">프로필 자세히 보기</Card.Link>
       </Card.Body>
       </Card>
       </Col>


        <Col xs>        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={steve} />
      <Card.Body>
        <Card.Title>스티븐 잡스</Card.Title>
        <Card.Text>
            애플 창업자
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>APPLE 창업자</ListGroup.Item>
        <ListGroup.Item>대학교 중퇴</ListGroup.Item>
        <ListGroup.Item>사업가적 역량이 뛰어남</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">프로필 자세히 보기</Card.Link>
      </Card.Body>
      </Card>
      </Col>

        <Col xs={{ order: 'first' }}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ed} />
      <Card.Body>
        <Card.Title>에드 시런</Card.Title>
        <Card.Text>
            서울대학교
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>전자정보공학부 졸업</ListGroup.Item>
        <ListGroup.Item>삼성전자 반도체 사업부</ListGroup.Item>
        <ListGroup.Item>임원</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">프로필 자세히 보기</Card.Link>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={{ order: 'first' }}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={song} />
      <Card.Body>
        <Card.Title>송중기</Card.Title>
        <Card.Text>
            서강대학교 경영학과
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>서강대 전자공학석사</ListGroup.Item>
        <ListGroup.Item>삼성 SDS 근무</ListGroup.Item>
        <ListGroup.Item>소프트웨어에 관심이 많음</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">프로필 자세히 보기</Card.Link>
      </Card.Body>
      </Card>
        </Col>

      </Row>
    </Container>
    </div>
  )
}

export default mentorProfiles


