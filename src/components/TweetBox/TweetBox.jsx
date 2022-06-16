import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value);
  }

  const handleOnSubmit = () => {
    console.log("handleon submit");
    const newTweet= {
      id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0
    }
    props.setTweets([...props.tweets, newTweet]);
    props.setTweetText("");
  }

  const disable = !props.tweetText || props.tweetText.length > 140;

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} disable={disable}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  let charClasses = "tweet-length";
  {props.tweetText.length > 140 ? charClasses="tweet-length red" : charClasses="tweet-length"}
  // ADD CODE HERE
  return <span className={charClasses}>
    {props.tweetText ? 140-props.tweetText.length : ""}
  </span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} 
      disabled={props.disable}
      >Tweet</button>
    </div>
  )
}
