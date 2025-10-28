import "./ServicesForm.css"

function ServicesForm({ formData, updateFields, error }) {
  function handleAddService() {
    const updatedServices = [...formData, { title: "", description: "" }]
    updateFields("services", updatedServices)
  }

  function handleChange(e, i) {
    const { name, value } = e.target
    const updatedServices = [...formData]
    updatedServices[i][name] = value
    updateFields("services", updatedServices)
  }

  function handleDelete(i) {
    const updatedServices = formData.filter((_, index) => index !== i)
    updateFields("services", updatedServices)
  }

  return (
    <div className="services-form">
      <h2>Services</h2>
      <p className="form-subtext">Add up to 3 services you offer.</p>

      <button
        type="button"
        disabled={formData.length >= 3}
        onClick={handleAddService}
        className="add-btn"
      >
        + Add Service
      </button>

      {formData.map((service, i) => (
        <div key={i} className="service-block">
          <input
            type="text"
            name="title"
            value={service.title}
            onChange={(e) => handleChange(e, i)}
            placeholder="Service title"
            className={error ? "error" : ""}
          />
          <input
            type="text"
            name="description"
            value={service.description}
            onChange={(e) => handleChange(e, i)}
            placeholder="Service description"
            className={error ? "error" : ""}
          />
          <button
            type="button"
            onClick={() => handleDelete(i)}
            className="delete-btn"
          >
            ×
          </button>
        </div>
      ))}

      {error && <span className="error-text">{error}</span>}
    </div>
  )
}

export default ServicesForm