import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./App.scss"

export default function App() {
  return (
    <Container>
      <Row>
        <Col>Header</Col>
      </Row>
      <Row>
        <Col sm={8}>1</Col>
        <Col sm={4}>2</Col>
      </Row>
      <Row>
        <Col>Footer</Col>
      </Row>
    </Container>
  )
}
