import React from 'react';
import Header from '../Organisms/Header'
import IdeasFactory from '../Organisms/IdeasFactory'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const MainPage = () => {
  return(
    <div>
      <Container>
        <div style={{height:'500px',border:'1px solid #aaa' ,borderRadius:'20px'}}>
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

        </div>
      </Container>
    </div>
  )
}

export default MainPage