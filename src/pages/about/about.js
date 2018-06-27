import React from 'react'
import { Icon, Spin } from 'antd'
import Avatars from '../../assets/avatars.jpeg'

class About extends React.Component {
  render() {
    const { isShow, onShow, onHide, changeStatus } = this.props
    const status = !isShow
    return (
      <main>
        <Spin spinning={isShow} />
        <button onClick={onShow}>show</button>
        <button onClick={onHide}>hide</button>
        <button onClick={() => changeStatus(status)}>changeStatus</button>
        <div>
          <img src={Avatars} alt="" width="100" height="100" />
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
