import "./ContactForm.css"
import { useState } from "react"

function ContactForm({ formData, updateFields }) {
  const [errors, setErrors] = useState({
    messageText: "",
    email: "",
    phone: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    const updatedForm = { ...formData, [name]: value }
    updateFields("contact", updatedForm)

    let error = ""

    if (!value.trim()) {
      error = `${name === "messageText"
        ? "Message"
        : name.charAt(0).toUpperCase() + name.slice(1)
      } is required`
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      error = "Enter a valid email address"
    } else if (name === "phone" && !/^\d{10}$/.test(value.trim())) {
      error = "Phone must be a 10-digit number"
    }

    setErrors(prev => ({ ...prev, [name]: error }))
  }

  return (
    <div className="contact-form">
      <h2>Enter Your Contact Details</h2>

      <div className="contact-field">
        <input
          type="text"
          name="messageText"
          value={formData.messageText}
          onChange={handleChange}
          placeholder="E.g. Wanna ping me? Let’s talk!"
          className={errors.messageText ? "invalid" : ""}
        />
        {errors.messageText && <small className="error">{errors.messageText}</small>}
      </div>

      <div className="contact-field">
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={errors.email ? "invalid" : ""}
        />
        {errors.email && <small className="error">{errors.email}</small>}
      </div>

      <div className="contact-field">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className={errors.phone ? "invalid" : ""}
        />
        {errors.phone && <small className="error">{errors.phone}</small>}
      </div>
    </div>
  )
}

export default ContactForm