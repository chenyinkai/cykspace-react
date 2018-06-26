import React from 'react'
import { Icon } from 'antd'
import Avatars from '../../assets/avatars.jpeg'

class About extends React.Component {
  render() {
    return (
      <main>
        <div>
          <img src={Avatars} alt="" />
        </div>
        <div>善良的乌贼</div>
        <div className="subtitle">请不要假装很努力,因为结果不会陪你演戏。</div>
        <div>社交与联系</div>
        <a href="https://github.com/chenyinkai">
          <Icon type="github" style={{ fontSize: '16px' }} />
          <span>Github</span>
        </a>
        <a href="https://github.com/chenyinkai">
          <Icon type="rocket" style={{ fontSize: '16px' }} />
          <span>掘金</span>
        </a>
        <a href="https://github.com/chenyinkai">
          <Icon type="star" style={{ fontSize: '16px' }} />
          <span>segmentfault</span>
        </a>
        <a href="https://github.com/chenyinkai">
          <Icon type="mail" style={{ fontSize: '16px' }} />
          <span>chenyinkai0223@gmail.com</span>
        </a>
        <a href="https://github.com/chenyinkai">
          <Icon type="qq" style={{ fontSize: '16px' }} />
          <span>287696322</span>
        </a>
      </main>
    )
  }
}

export default About
