import "./BlogForm.css"

function BlogForm({ formData, updateFields }) {

  function handleChange(e) {
    const { name, value } = e.target
    const updatedForm = { ...formData, [name]: value }
    updateFields("blog", updatedForm)
  }

  return (
    <div className="blog-form">
      <h2>Have you written any blog?</h2>
      <span className="blog-form-tip">Tip: Hit Next to skip this section.</span>
      <div className="blog-field">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter blog title"
        />
      </div>
      <div className="blog-field">
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          placeholder="Enter blog summary"
        />
      </div>
    </div>
  )
}

export default BlogForm