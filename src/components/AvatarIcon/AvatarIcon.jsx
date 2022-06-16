import * as React from "react"
import "./AvatarIcon.css"
import userImage from "../../assets/userImage.png"

export default function AvatarIcon() {
  return (
    <span className="avatar-icon fa-stack">
      <i className="fas fa-circle fa-stack-2x">
        <i className="fas fa-user fa-stack-1x">
        </i>
        <img className="fas fa-stack-2x" src={userImage} />
      </i>
    </span>
  )
}
