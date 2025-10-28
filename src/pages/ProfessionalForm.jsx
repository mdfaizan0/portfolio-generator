import { useState } from 'react'
import { formStructure } from '../utils/staticData'
import MultiStepForm from '../components/MultiStepForm'
import { useSearchParams } from 'react-router-dom';

function ProfessionalForm() {
  const [searchParams] = useSearchParams();
  const templateName = searchParams.get("template")
  const [formData, setFormData] = useState({ ...formStructure, template: templateName })

  function updateFields(sectionName, updatedData) {
    setFormData(prev => {
      const prevSection = prev[sectionName]
      if (Array.isArray(prevSection)) {
        return { ...prev, [sectionName]: updatedData }
      }
      return ({
        ...prev,
        [sectionName]: {
          ...prevSection,
          ...updatedData
        }
      })
    })
  }

  return (
    <div className='portfolio-form'>
      <MultiStepForm formData={formData} updateFields={updateFields} />
    </div>
  )
}

export default ProfessionalForm