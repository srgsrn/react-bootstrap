import { Routes, Route } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

import Companies from "../../pages/Companies"
import Details from "../../pages/Details"

import "./App.scss"

export default function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Companies />} />
            <Route path="details/:companyId" element={<Details />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  )
}
