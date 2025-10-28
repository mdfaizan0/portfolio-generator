import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API } from "../utils/api"
import { demoObj, templates } from "../utils/staticData"
import "./PortfolioPage.css"

function PortfolioPage() {
  const [portfolioData, setPortfolioData] = useState(null)
  const [error, setError] = useState(null)
  const { id, templateKey } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function loadPortfolio() {
      try {
        // Demo template preview
        if (id === "demo") {
          if (templateKey && templates[templateKey]) {
            setPortfolioData({ ...demoObj, template: templateKey })
          } else {
            throw new Error("Demo template not found")
          }
          return
        }

        // Real portfolio by ID
        if (!isNaN(parseInt(id))) {
          const data = await API.getPortfolioByID(id)
          setPortfolioData(data)
        } else {
          throw new Error("Invalid portfolio ID")
        }
      } catch (err) {
        setError(err.message)
        navigate("/404", {
          replace: true,
          state: {
            from: window.location.pathname,
            status: 404,
            message: `Portfolio not found or invalid.`,
          },
        })
      }
    }

    loadPortfolio()
  }, [id, templateKey, navigate])

  if (error) {
    return (
      <div className="portfolio-page error-page">
        <h2>{error}</h2>
        <button onClick={() => navigate("/professionals")}>Go Back</button>
      </div>
    )
  }

  if (!portfolioData) {
    return (
      <div className="portfolio-page loading">
        <div className="loader"></div>
        <p>Loading portfolio...</p>
      </div>
    )
  }

  const TemplateComponent = templates[portfolioData.template]?.component

  if (!TemplateComponent) {
    return (
      <div className="portfolio-page error-page">
        <h2>Template not found.</h2>
        <button onClick={() => navigate("/templates")}>Choose Template</button>
      </div>
    )
  }

  return (
    <div className="portfolio-page">
      <TemplateComponent portfolio={portfolioData} />
    </div>
  )
}

export default PortfolioPage