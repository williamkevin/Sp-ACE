import React from 'react'
import  { Container } from '../components/Styles/Container/Container.style.js'
import { MainHeader, Header } from '../components/Styles/Header/Header.styled.js';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Grid } from 'semantic-ui-react';
import Buttons from "../components/Likebuttons.js";

import sw from "../images/sw.jpeg";

import ApplicationButton from '../components/ApplicationButton.js';

const Profile = () => {
  return (
    <div>
    <Container>
      <Header>
        <MainHeader>
          <h1>Profile</h1>
        </MainHeader>
      </Header>
    </Container>

    <Grid centered>
        <Grid.Row>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sw} centerd/>
      <Card.Body>
        <Card.Title>김세원</Card.Title>
        <Card.Text>
          서울시립대학교 전자전기컴퓨터공학 전공/Standford Computer Science PhD
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>(프로필)안녕하세요 :)
저는 현재 서울대 데이터사이언스 대학원에 재학중이며,
2년 반 가량의 경영 컨설턴트 경력을 보유한 30살 석사과정생입니다.

저는 학부를 경영학과로 입학했던 문과생 출신입니다. 때문에 문과 전공생이 AI, 데이터사이언스 대학원에 진학할 때의 고민을 알고 있기에, 준비하면 좋은 역량이나 방안 등을 제 생생한 경험을 토대로 말씀드릴 수 있습니다.

현재 재학중인 대학원 외에도, 타 대학의 AI대학원 역시 동시 합격한 바 있습니다. 이 두 대학원은 추구하는 성향이나 기대하는 지원자에 차이가 있습니다. 따라서 목표하시는 대학원에 따라 적절한 준비 방안, 면접 대비 등 차별화된 전략을 제시해드릴 수 있을 것입니다.

이 외에도 AI 관련 대학원에 궁금하신 사항이 있으시거나 제 경력이나 경험이 흥미로우시다면, 편하게 커피챗주세요!

제게 투자해주신 소중한 시간이 가치 있도록, 전달해주신 질문에 성실한 답변 드리겠습니다.

감사합니다 :)</ListGroup.Item>
        <ListGroup.Item>(잘 해줄 수 있는 답변)01.

문과 학생(또는 직장인)이 AI/데이터사이언스 대학원을 어떻게 준비하면 좋을까요? : 1년의 준비 과정
02.

AI/데이터사이언스 대학원의 면접은 어떤가요? : 고려대 AI, 성대 AI, 서울대 DS 면접 후기
03.

대학원 진학을 결정하고 직장을 퇴사하기까지 무엇이 힘들었나요? : 진학 상담 및 고민 공유
04.

데이터사이언스 대학원 생활이나 커리큘럼은 어떤가요? : 전일제/야간제 등의 제도 및 재학중인 대학원의 현황</ListGroup.Item>
        <ListGroup.Item>(후기)파트너님~ 시간이 종료되어 미처 인사드리지 못했네요 ㅠ 질문이 많았는데 마지막까지 잘 설명해주셔서 너무 감사했고 정말 많은 도움이 되었습니다! 말씀 주신 내용들 참고해서 진로 잘 고민해보도록 하겠습니다. 시간 내주셔서 감사하고 편안한 주말 보내시기 바랍니다~!!</ListGroup.Item>
        <ListGroup.Item><ApplicationButton/></ListGroup.Item>
      </ListGroup>
    </Card>
        </Grid.Row>
        <Grid.Row>
        <Buttons/>
        </Grid.Row>
    </Grid>
    <br/>

    {/* <Comments/> */}
    </div>
  )
}

export default Profile;