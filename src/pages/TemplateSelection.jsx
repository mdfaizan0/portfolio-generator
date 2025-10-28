import { useNavigate } from "react-router-dom"
import { templates } from "../utils/staticData"
import "./TemplateSelection.css"

function TemplateSelection() {
  const navigate = useNavigate()

  return (
    <div className="template-selection">
      <h1>Select Your Portfolio Template</h1>
      <p className="template-subtext">Choose a template that best represents your style — you can preview before finalizing.</p>

      <div className="template-grid">
        {Object.entries(templates).map(([key, value]) => (
          <div key={key} className="template-card">
            <img src={value.image} alt={`${key} preview`} className="template-image" />
            <div className="template-actions">
              <button 
                className="select-btn" 
                onClick={() => navigate(`/form?template=${key}`)}
              >
                Use Template
              </button>
              <button 
                className="preview-btn" 
                onClick={() => navigate(`/portfolio/demo/${key}`)}
              >
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemplateSelection