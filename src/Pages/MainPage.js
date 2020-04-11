import React from 'react';
import Header from '../Organisms/Header'
import IdeasFactory from '../Organisms/IdeasFactory'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const MainPage = () => {
  return(
    <>
      <Container>
        <Row>
          <Col>
            <Header text="Idea Shuffle"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <IdeasFactory/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MainPage