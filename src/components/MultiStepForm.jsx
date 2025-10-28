import "./forms.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMultiStepForm } from "../utils/useMultiStepForm"
import AboutForm from "./forms/AboutForm"
import HeroForm from "./forms/HeroForm"
import PortfolioForm from "./forms/PortfolioForm"
import ServicesForm from "./forms/ServicesForm"
import SkillsForm from "./forms/SkillsForm"
import TestimonialsForm from "./forms/TestimonialsForm"
import BlogForm from "./forms/BlogForm"
import ContactForm from "./forms/ContactForm"

export default function MultiStepForm({ formData, updateFields }) {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

  const stepLabels = [
    "Professional Info",
    "About",
    "Skills",
    "Services",
    "Portfolio",
    "Testimonials",
    "Blog",
    "Contact"
  ]

  const steps = [
    <HeroForm formData={formData.professionalInfo} updateFields={updateFields} errors={errors} />,
    <AboutForm formData={formData.aboutMe} updateFields={updateFields} errors={errors} />,
    <SkillsForm formData={formData.skills} updateFields={updateFields} errors={errors} />,
    <ServicesForm formData={formData.services} updateFields={updateFields} errors={errors} />,
    <PortfolioForm formData={formData.portfolio} updateFields={updateFields} errors={errors} />,
    <TestimonialsForm formData={formData.testimonials} updateFields={updateFields} errors={errors} />,
    <BlogForm formData={formData.blog} updateFields={updateFields} errors={errors} />,
    <ContactForm formData={formData.contact} updateFields={updateFields} errors={errors} />
  ]

  const { currentStep, next, back, currentStepIndex, isFirstStep, isLastStep } = useMultiStepForm(steps)

  function validateStep() {
    let newErrors = {}
    switch (currentStepIndex) {
      case 0: {
        const { name, title, tagline, profileImage } = formData.professionalInfo
        if (!name.trim()) newErrors.name = "Name is required"
        if (!title.trim()) newErrors.title = "Title is required"
        if (!tagline.trim()) newErrors.tagline = "Tagline is required"
        if (!profileImage.trim()) newErrors.profileImage = "Profile image URL is required"
        break
      }
      case 1: {
        const { bio, email, phone, location } = formData.aboutMe
        if (!bio.trim()) newErrors.bio = "Bio is required"
        if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Valid email required"
        if (!phone.trim()) newErrors.phone = "Phone is required"
        if (!location.trim()) newErrors.location = "Location is required"
        break
      }
      case 2: {
        const validSkills = formData.skills.filter(skill => skill.trim() !== "")
        if (validSkills.length < 3) newErrors.skills = "At least 3 skills are required"
        break
      }
      case 3: {
        if (formData.services.length === 0) newErrors.services = "Add at least one service"
        break
      }
      case 4: {
        if (formData.portfolio.length === 0) newErrors.portfolio = "Add at least one project"
        break
      }
      case 5: {
        if (formData.testimonials.length === 0) newErrors.testimonials = "Add at least one testimonial"
        break
      }
      case 7: {
        const { messageText, email, phone } = formData.contact
        if (!messageText.trim()) newErrors.messageText = "Message is required"
        if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Valid email required"
        if (!phone.trim()) newErrors.phone = "Phone is required"
        break
      }
      default:
        break
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleNext(e) {
    e.preventDefault()
    if (validateStep()) next()
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validateStep()) return
    fetch("http://localhost:3000/api/portfolios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to add portfolio")
        return res.json()
      })
      .then(newPortfolio => {
        console.log("Portfolio added:", newPortfolio)
        navigate(`/portfolio/${newPortfolio.id}`)
      })
      .catch(err => console.error("Error:", err))
  }

  return (
    <form className="multi-step-form" onSubmit={isLastStep ? handleSubmit : handleNext}>
      <div className="capsule-nav">
        {stepLabels.map((label, idx) => (
          <div
            key={idx}
            className={`capsule-step ${idx === currentStepIndex ? "active" : ""} ${
              idx < currentStepIndex ? "completed" : ""
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      <h2>Step {currentStepIndex + 1} of {steps.length}</h2>
      <div className="form-step">{currentStep}</div>

      <div className="form-navigation">
        {!isFirstStep && (
          <button type="button" className="nav-btn" onClick={back}>
            Back
          </button>
        )}
        <button type="submit" className="nav-btn primary">
          {isLastStep ? "Submit" : "Next"}
        </button>
      </div>
    </form>
  )
}