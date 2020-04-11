import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Organisms/Header'
import ResultButtons from '../Organisms/ResultButtons'

const ResultPage = () => {
  return(
    <>
      <Container>
        <Row>
          <Col>
            <Header text="Result"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ResultButtons/>
          </Col>
        </Row>
      </Container>
    </>
  )
}


export default ResultPage