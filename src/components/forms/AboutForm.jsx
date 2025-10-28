import { useState } from "react"

function AboutForm({ formData, updateFields, errors = {} }) {
  const [city, setCity] = useState(formData.location.split(", ")[0] || "")
  const [state, setState] = useState(formData.location.split(", ")[1] || "")

  function handleLocationChange(newCity, newState) {
    const combined = `${newCity}${newCity && newState ? ", " : ""}${newState}`
    updateFields("aboutMe", { location: combined })
  }

  function handleAddSocial(e) {
    e.preventDefault()
    const updatedSocials = [...formData.socials, { title: "", link: "" }]
    updateFields("aboutMe", { socials: updatedSocials })
  }

  function handleChange(e, i) {
    const { name, value } = e.target
    const updatedSocials = [...formData.socials]
    updatedSocials[i][name] = value
    updateFields("aboutMe", { socials: updatedSocials })
  }

  function handleDelete(e, i) {
    e.preventDefault()
    const updatedSocials = formData.socials.filter((_, index) => index !== i)
    updateFields("aboutMe", { socials: updatedSocials })
  }

  return (
    <div className="about-form">
      <h2>About You</h2>

      <div className="form-group">
        <label>Bio</label>
        <textarea
          value={formData.bio}
          onChange={(e) => updateFields("aboutMe", { bio: e.target.value })}
          placeholder="Write a short bio"
          className={errors.bio ? "input-error" : ""}
        />
        {errors.bio && <span className="error-text">{errors.bio}</span>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFields("aboutMe", { email: e.target.value })}
          placeholder="Enter your email"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFields("aboutMe", { phone: e.target.value })}
          placeholder="Enter phone number"
          className={errors.phone ? "input-error" : ""}
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>

      <div className="form-group location-block">
        <label>Location</label>
        <div className="location-inputs">
          <input
            type="text"
            value={city}
            onChange={(e) => {
              const val = e.target.value
              setCity(val)
              handleLocationChange(val, state)
            }}
            placeholder="City"
            className={errors.city ? "input-error" : ""}
          />
          <input
            type="text"
            value={state}
            onChange={(e) => {
              const val = e.target.value
              setState(val)
              handleLocationChange(city, val)
            }}
            placeholder="State"
            className={errors.state ? "input-error" : ""}
          />
        </div>
        {(errors.city || errors.state) && (
          <span className="error-text">
            {errors.city || errors.state}
          </span>
        )}
      </div>

      <div className="form-group">
        <label>Social Links</label>
        <button
          className="add-social-btn"
          onClick={handleAddSocial}
          disabled={formData.socials.length >= 3}
        >
          + Add Social
        </button>
        {formData.socials.map((soc, i) => (
          <div className="social-block" key={i}>
            <input
              type="text"
              name="title"
              value={soc.title}
              onChange={(e) => handleChange(e, i)}
              placeholder="Platform (e.g., LinkedIn)"
              className={errors[`social_${i}_title`] ? "input-error" : ""}
            />
            <input
              type="text"
              name="link"
              value={soc.link}
              onChange={(e) => handleChange(e, i)}
              placeholder="Profile link"
              className={errors[`social_${i}_link`] ? "input-error" : ""}
            />
            <button
              className="delete-social-btn"
              onClick={(e) => handleDelete(e, i)}
            >
              Delete
            </button>
            {(errors[`social_${i}_title`] || errors[`social_${i}_link`]) && (
              <span className="error-text">
                {errors[`social_${i}_title`] || errors[`social_${i}_link`]}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutForm