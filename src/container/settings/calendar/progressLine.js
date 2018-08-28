import React, { Component } from 'react'
import './progressLine.css';

class ProgessLine extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        { id: 1, title: 'value1', progress: 10, loading: false },
        { id: 2, title: 'value2', progress: 15, loading: false },
        { id: 3, title: 'value3', progress: 10, loading: false },
        { id: 4, title: 'value4', progress: 25, loading: false },
        { id: 5, title: 'value5', progress: 30, loading: false },
        { id: 6, title: 'value6', progress: 10, loading: false },
      ]
    }
  }
  handleClick = (item) => {
      this.setState({
        data: [...this.state.data, { ...item, loading: true}]
      })

  }
  render() {
    const renderProgress = this.state.data.map((item, index) => {
      const flexBasis = `${item.progress}%`
      return (<div
        key={index}
        className="progress-item"
        style={{ flexBasis }}
        onClick={() => this.handleClick(item)}>
        {item.loading ? 'Loading...': item.title}
      </div>)
    })
    return (
      <div className="progress-line-wrapper">
        <div className="progress-line">
          {renderProgress}
        </div>
      </div>
    )
  }
}

export default ProgessLine;