import "./PortfolioForm.css"

function PortfolioForm({ formData, updateFields, error }) {

  function handleAddPortfolio() {
    const updatedPortfolio = [
      ...formData,
      { title: "", image: "", description: "" }
    ];
    updateFields("portfolio", updatedPortfolio);
  }

  function handleChange(e, i) {
    const { name, value } = e.target;
    const updatedPortfolio = [...formData];
    updatedPortfolio[i][name] = value;
    updateFields("portfolio", updatedPortfolio);
  }

  function handleDelete(i) {
    const updatedPortfolio = formData.filter((_, index) => index !== i);
    updateFields("portfolio", updatedPortfolio);
  }

  return (
    <div className="portfolio-form">
      <h2>Portfolio</h2>
      <p className="form-subtext">
        Showcase up to 3 of your best projects.
      </p>

      <button
        type="button"
        disabled={formData.length >= 3}
        onClick={handleAddPortfolio}
        className="add-btn"
      >
        + Add Project
      </button>

      {formData.map((port, i) => (
        <div className="portfolio-block" key={i}>
          <input
            type="text"
            name="title"
            value={port.title}
            onChange={(e) => handleChange(e, i)}
            placeholder="Project title"
            className={error ? "error" : ""}
          />
          <input
            type="text"
            name="image"
            value={port.image}
            onChange={(e) => handleChange(e, i)}
            placeholder="Image URL"
            className={error ? "error" : ""}
          />
          <input
            type="text"
            name="description"
            value={port.description}
            onChange={(e) => handleChange(e, i)}
            placeholder="Project description"
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
  );
}

export default PortfolioForm;