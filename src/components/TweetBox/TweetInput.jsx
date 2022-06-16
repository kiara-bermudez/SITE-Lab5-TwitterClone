import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"

export default function TweetInput(props) {

  const handleOnFocus = (event) => {
    event.target.classList.add("expanded");
  }

  const handleOnBlur = (event) => {
    if(!props.value) {
      event.target.classList.remove("expanded");
    }
  }

  return (
    <div className="tweet-textarea">
      <AvatarIcon />

      <textarea name="new-tweet-input" type="text" placeholder="What's Happening?" value={props.value} onChange={props.handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} className=""></textarea>

      <SmileIcon/>
    </div>
  )
}

export const SmileIcon = () => <i className="fas fa-smile"></i>
export const ImageIcon = () => <i className="fas fa-image"></i>
