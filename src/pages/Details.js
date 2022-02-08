import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Details() {
  let params = useParams()
  const [companyData, setCompanyData] = useState(null)

  useEffect(() => {
    const currentCompany = Object.entries(
      JSON.parse(localStorage.getItem("companies"))
    ).filter((i) => i[0] === params?.companyId)

    setCompanyData(currentCompany[0][1])
  }, [])

  return (
    <div>
      <h2>Details:</h2>
      <div>
        {companyData?.logo && <img src={companyData.logo} alt={companyData?.name} />}
        <h3>{companyData?.name}</h3>
        {companyData?.domain}
        <p>{companyData?.description}</p>
        <p>{companyData?.industry}</p>
      </div>
    </div>
  )
}
