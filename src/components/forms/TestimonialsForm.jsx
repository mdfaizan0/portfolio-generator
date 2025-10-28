import "./TestimonialsForm.css"
import { useState } from "react"

function TestimonialsForm({ formData, updateFields }) {
  const [errors, setErrors] = useState([])

  function handleAddTestimonials() {
    const updatedTestimo = [...formData, { name: "", message: "" }]
    updateFields("testimonials", updatedTestimo)
    setErrors([...errors, { name: "", message: "" }])
  }

  function handleChange(e, i) {
    const { name, value } = e.target
    const updatedTestimo = [...formData]
    updatedTestimo[i][name] = value
    updateFields("testimonials", updatedTestimo)

    // Inline validation
    const updatedErrors = [...errors]
    if (!value.trim()) {
      updatedErrors[i][name] = `${name === "name" ? "Name" : "Message"} is required`
    } else if (name === "name" && value.trim().length < 2) {
      updatedErrors[i][name] = "Name must be at least 2 characters"
    } else if (name === "message" && value.trim().length < 5) {
      updatedErrors[i][name] = "Message must be at least 5 characters"
    } else {
      updatedErrors[i][name] = ""
    }
    setErrors(updatedErrors)
  }

  function handleDelete(i) {
    const updatedTestimo = formData.filter((_, index) => index !== i)
    const updatedErrors = errors.filter((_, index) => index !== i)
    updateFields("testimonials", updatedTestimo)
    setErrors(updatedErrors)
  }

  return (
    <div className="testimonials-form">
      <button
        type="button"
        disabled={formData.length >= 3}
        onClick={handleAddTestimonials}
        className="add-btn"
      >
        Add Testimonials
      </button>

      {formData.map((test, i) => (
        <div className="testimonials-block" key={i}>
          <input
            type="text"
            name="name"
            value={test.name}
            onChange={(e) => handleChange(e, i)}
            placeholder="Name of the entity"
            className={errors[i]?.name ? "invalid" : ""}
          />
          {errors[i]?.name && <small className="error">{errors[i].name}</small>}

          <input
            type="text"
            name="message"
            value={test.message}
            onChange={(e) => handleChange(e, i)}
            placeholder="What did they say?"
            className={errors[i]?.message ? "invalid" : ""}
          />
          {errors[i]?.message && <small className="error">{errors[i].message}</small>}

          <button type="button" onClick={() => handleDelete(i)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default TestimonialsForm