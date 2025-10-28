import "./SkillsForm.css"
import { useState } from "react"

function SkillsForm({ formData, updateFields, error }) {
  const [inputValue, setInputValue] = useState("")

  function handleInputChange(e) {
    const value = e.target.value

    if (value.includes(",")) {
      const newSkill = value.replace(",", "").trim()
      if (newSkill) {
        const emptyIndex = formData.findIndex(skill => skill === "")
        if (emptyIndex !== -1) {
          const updatedSkills = [...formData]
          updatedSkills[emptyIndex] = newSkill
          updateFields("skills", updatedSkills)
        }
      }
      setInputValue("")
    } else {
      setInputValue(value)
    }
  }

  function removeSkill(index) {
    const updatedSkill = [...formData]
    updatedSkill[index] = ""
    updateFields("skills", updatedSkill)
  }

  const filledSkills = formData.filter(s => s !== "")
  const skillCount = filledSkills.length

  return (
    <div className="skills-form">
      <h2>Skills</h2>
      <p className="form-subtext">Add up to 5 skills. Separate with commas.</p>

      <div className={`skills-container ${error ? "error-border" : ""}`}>
        {formData.map((skill, index) =>
          skill !== "" && (
            <div key={index} className="skill-capsule">
              <span>{skill}</span>
              <span
                type="button"
                onClick={() => removeSkill(index)}
                id="remove-skill"
              >
                ×
              </span>
            </div>
          )
        )}
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={
          skillCount >= 5
            ? "Maximum skills entered"
            : `Enter your skills (${filledSkills.length}/5) - Press comma`
        }
        disabled={skillCount >= 5}
        className={error ? "error" : ""}
      />

      {error && <span className="error-text">{error}</span>}
    </div>
  )
}

export default SkillsForm