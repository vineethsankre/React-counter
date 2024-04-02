import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">0</p>
        <div>
          <button className="button">Increment</button>
          <button className="button">Decrement</button>
        </div>
      </div>
    )
  }
}

export default Counter
