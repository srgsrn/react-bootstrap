import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Companies() {
  const [value, setValue] = useState()

  function handleChange(e) {
    setValue(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // localStorage.clear()

    const companyData = await getCompanyData(value)

    const initialData = JSON.parse(localStorage.getItem("companies")) || {}
    const localData = {
      ...initialData,
      [companyData.name.toLowerCase()]: companyData,
    }

    localStorage.setItem("companies", JSON.stringify(localData))
  }

  function getCompanyData(value) {
    // TODO: move to env vars
    const url = `https://company.clearbit.com/v2/companies/find?domain=${value}`
    const token = "Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49"

    return fetch(url, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((company) => company)
  }

  return (
    <>
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <label>
              Enter company domain:
              <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Send" />
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Companies: </h2>

          <ul>
            {Object.entries(JSON.parse(localStorage.getItem("companies"))).map(
              (company) => (
                <li key={company[1].id}>
                  <Link to={`details/${company[1].name?.toLowerCase()}`}>
                    <img width="50" src={company[1].logo} alt={company[1].name} />
                    {company[1].name} | {company[1].type}
                  </Link>
                </li>
              )
            )}
          </ul>
        </Col>
      </Row>
    </>
  )
}
