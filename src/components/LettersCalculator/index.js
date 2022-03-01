// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letters: 0}

  onInput = event => {
    this.setState({letters: event.target.value.length})
  }

  render() {
    const {letters} = this.state
    return (
      <div className="mainbg">
        <div className="left-container">
          <h1 className="title">Calculate the Letters you enter</h1>
          <form>
            <label htmlFor="fname" className="phrase">
              Enter the phrase
            </label>
            <input
              className="input"
              id="fname"
              name="fname"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onInput}
            />
          </form>
          <p className="para">No.of letters: {letters}</p>
        </div>
        <div className="right-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
