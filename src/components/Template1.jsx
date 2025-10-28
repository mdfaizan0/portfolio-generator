import "./Template1.css"

function Template1({ portfolio }) {
  const {
    professionalInfo,
    aboutMe,
    skills,
    services,
    portfolio: projects,
    testimonials,
    blog,
    contact
  } = portfolio

  return (
    <div className="template-one">
      {/* Hero Section */}
      <header className="hero-section">
        <img
          src={professionalInfo.profileImage}
          alt={professionalInfo.name}
          className="hero-image"
        />
        <div className="hero-content">
          <h1>{professionalInfo.name}</h1>
          <h2>{professionalInfo.title}</h2>
          <p>{professionalInfo.tagline}</p>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>{aboutMe.bio}</p>
        <div className="contact-details">
          <p><strong>Email:</strong> {aboutMe.email}</p>
          <p><strong>Phone:</strong> {aboutMe.phone}</p>
          <p><strong>Location:</strong> {aboutMe.location}</p>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="services-section">
        <h2>Services</h2>
        <div className="services-grid">
          {services.map((srv, i) => (
            <div className="service-card" key={i}>
              <h3>{srv.title}</h3>
              <p>{srv.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="portfolio-section">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((proj, i) => (
            <div className="project-card" key={i}>
              <img src={proj.image} alt={proj.title} />
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {testimonials?.length > 0 && (
        <section className="testimonials-section">
          <h2>Testimonials</h2>
          {testimonials.map((t, i) => (
            <blockquote key={i}>
              <p>"{t.quote}"</p>
              <footer>- {t.author}</footer>
            </blockquote>
          ))}
        </section>
      )}

      {/* Blog */}
      {blog?.title && (
        <section className="blog-section">
          <h2>From My Blog</h2>
          <h3>{blog.title}</h3>
          <p>{blog.summary}</p>
        </section>
      )}

      {/* Contact */}
      <footer className="contact-section">
        <h2>{contact.messageText}</h2>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
      </footer>
    </div>
  )
}

export default Template1