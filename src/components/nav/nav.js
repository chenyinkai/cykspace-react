import React from 'react'
import { Layout, Menu } from 'antd'
import './nav.less'
const { Header } = Layout

class Nav extends React.Component {
  state = {
    current: '1'
  }
  componentDidMount() {
    this.setState({
      current: '2'
    })
  }
  handleClick = e => {
    this.setState({
      current: e.key
    })
  }
  render() {
    const navList = ['nav1', 'nav2', 'nav3']
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
              return(
              <Menu.Item
                key={i}
                className={
                  i === +this.state.current ? 'ant-menu-item-selected' : ''
                }
              >
                {k}
              </Menu.Item>
            )})}
          </Menu>
        </Header>
      </Layout>
    )
  }
}

export default Nav
