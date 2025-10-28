import "./Template2.css"

function Template2({ portfolio }) {
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
    <div className="template-two">
      {/* Hero Section */}
      <section className="hero">
        <img
          src={professionalInfo.profileImage}
          alt={professionalInfo.name}
          className="hero-image"
        />
        <div className="hero-content">
          <h1>{professionalInfo.name}</h1>
          <h2>{professionalInfo.title}</h2>
          <p className="tagline">{professionalInfo.tagline}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h3>About Me</h3>
        <p>{aboutMe.bio}</p>
        <div className="about-details">
          <span>{aboutMe.location}</span>
          <span>{aboutMe.email}</span>
          <span>{aboutMe.phone}</span>
        </div>

        {/* Updated Social Links */}
        <div className="social-links">
          {aboutMe.socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-btn ${social.title?.toLowerCase()}`}
            >
              {social.title}
            </a>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Services Section */}
      <section className="services">
        <h3>Services</h3>
        <div className="service-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h3>Portfolio</h3>
        <div className="project-grid">
          {projects.map((proj, i) => (
            <div key={i} className="project-card">
              <img src={proj.image} alt={proj.title} />
              <div className="project-info">
                <h4>{proj.title}</h4>
                <p>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3>Testimonials</h3>
        {testimonials.map((t, i) => {
          if (t.message !== "" && t.name !== "") {
            return (
              <blockquote key={i}>
                <p>"{t.message}"</p>
                <footer>— {t.name}</footer>
              </blockquote>
            )
          }
        })}
      </section>

      {/* Blog */}
      <section className="blog">
        <h3>Latest Blog</h3>
        <h4>{blog.title}</h4>
        <p>{blog.summary}</p>
      </section>

      {/* Contact */}
      <section className="contact">
        <h3>Contact</h3>
        <p>{contact.messageText}</p>
        <div className="contact-info">
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
        </div>
      </section>
    </div>
  )
}

export default Template2