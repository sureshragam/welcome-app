// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {subscribed: false}

  onButton = () => {
    this.setState(prevState => {
      if (prevState.subscribed === false) {
        return {subscribed: true}
      }
      return {subscribed: false}
    })
  }

  render() {
    const {subscribed} = this.state

    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you Happy Learning</p>
        {subscribed ? (
          <button className="button" type="button" onClick={this.onButton}>
            subscribed
          </button>
        ) : (
          <button className="button" type="button" onClick={this.onButton}>
            subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
