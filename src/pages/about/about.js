import React from 'react'
import { Icon } from 'antd'

class About extends React.Component {
  render() {
    return (
      <main>
        <div>
          <img src="../../assets/avatars.jpeg" alt="" />
        </div>
        <div>善良的乌贼</div>
        <div className="subtitle">请不要假装很努力,因为结果不会陪你演戏。</div>
        <Icon type="github" style={{ fontSize: '20px' }} />
      </main>
    )
  }
}

export default About
