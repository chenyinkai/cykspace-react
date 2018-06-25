import React from 'react'
import { Layout, Menu } from 'antd'
import './nav.less'
import { Link } from 'react-router-dom'
const { Header } = Layout

class Nav extends React.Component {
  state = {
    current: '0'
  }
  componentDidMount() {
    // this.setState({
    //   current: '2'
    // })
  }
  handleClick = e => {
    this.setState({
      current: e.key
    })
  }
  render() {
    const navList = ['首页', '标签', '归档', '关于']
    const pathArr = ['/', '/tags', 'archives', 'about']
    return (
      <Layout className="layout">
        <Header>
          <div className="logo">善良的乌贼</div>
          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px', marginLeft: '200px' }}
          >
            {navList.map((k, i) => {
              return (
                <Menu.Item
                  key={i}
                  className={
                    i === +this.state.current ? 'ant-menu-item-selected' : ''
                  }
                >
                  <Link to={pathArr[i]}>{k}</Link>
                </Menu.Item>
              )
            })}
          </Menu>
        </Header>
      </Layout>
    )
  }
}

export default Nav
