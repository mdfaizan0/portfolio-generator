import { useNavigate } from "react-router-dom"
import "./ProfileCard.css"

function ProfileCard({ profileDetails }) {
  const { professionalInfo, aboutMe, skills } = profileDetails
  const { name, title, tagline, profileImage } = professionalInfo
  const { location } = aboutMe
  const navigate = useNavigate()

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src={profileImage || "/images/default-avatar.png"}
          alt={name}
          className="profile-avatar"
        />
        <div className="profile-info">
          <h3 className="profile-name">{name}</h3>
          <p className="profile-title">{title}</p>
          <p className="profile-tagline">“{tagline}”</p>
        </div>
      </div>

      <div className="profile-body">
        <p className="profile-location">{location}</p>
        <div className="profile-skills">
          {skills.slice(0, 3).map((skill, i) => (
            <span key={i} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>

      <div className="profile-footer">
        <button className="view-btn" onClick={() => navigate(`/portfolio/${profileDetails.id}`)}>View Portfolio</button>
      </div>
    </div>
  )
}

export default ProfileCard