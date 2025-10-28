function HeroForm({ formData, updateFields, errors = {} }) {
  return (
    <div className="hero-form form-section">
      <h2 className="form-title">Professional Information</h2>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) =>
            updateFields("professionalInfo", { title: e.target.value })
          }
          placeholder="e.g., Full Stack Developer"
          className={errors.title ? "input-error" : ""}
        />
        {errors.title && <span className="error-text">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            updateFields("professionalInfo", { name: e.target.value })
          }
          placeholder="e.g., John Doe"
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Tagline</label>
        <input
          type="text"
          value={formData.tagline}
          onChange={(e) =>
            updateFields("professionalInfo", { tagline: e.target.value })
          }
          placeholder="e.g., Building seamless web experiences"
          className={errors.tagline ? "input-error" : ""}
        />
        {errors.tagline && <span className="error-text">{errors.tagline}</span>}
      </div>

      <div className="form-group">
        <label>Profile Image URL</label>
        <input
          type="text"
          value={formData.profileImage}
          onChange={(e) =>
            updateFields("professionalInfo", { profileImage: e.target.value })
          }
          placeholder="Paste your profile image link"
          className={errors.profileImage ? "input-error" : ""}
        />
        {errors.profileImage && (
          <span className="error-text">{errors.profileImage}</span>
        )}
      </div>
    </div>
  )
}

export default HeroForm