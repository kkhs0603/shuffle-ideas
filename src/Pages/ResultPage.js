import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Organisms/Header'
import ResultButtons from '../Organisms/ResultButtons'

const ResultPage = () => {
  return(
    <>
      <Container>
        <div style={{height:'500px',border:'1px solid #aaa' ,borderRadius:'20px'}}>
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
        </div>
      </Container>
    </>
  )
}


export default ResultPage