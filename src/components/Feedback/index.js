// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}
  onClickEmoji = () => {
    this.setState({isFeedbackGiven: true})
  }

  renderFeedackDisplay = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="heading">
          How satisfied are you with our <br /> customer support performance?
        </h1>

        <ul>
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button onClick={this.onClickEmoji}>
                <img src={emoji.imageUrl} alt={emoji.name} />
              </button>
              <p>{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThanksScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-question-container">
        <img src={loveEmojiUrl} alt="love emoji"/>
        <h1 className="heading">Thank You</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <div className="app-container">
        {!isFeedbackGiven && this.renderFeedackDisplay()}
        {isFeedbackGiven && this.renderThanksScreen()}
      </div>
    )
  }
}

export default Feedback
