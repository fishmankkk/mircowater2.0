import React from 'react'
import { Button, Row, Col, Card, Menu, Dropdown, Icon } from 'antd'
import 'gobal'

function handleMenuClick (e) {
  console.log('click', e)
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
)

// const DropOptionPage = () => {
class App extends React.Component {
  state = {
    iconLoading: false,
  };
  enterIconLoading = () => {
    this.setState({ iconLoading: true })
  }
  render () {
    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col lg={8} md={12}>
            <Card title="普通按钮">
              <div>
                <p>
                  <Button type="primary">普通</Button>
                  <Button>默认</Button>
                  <Button type="dashed">Dashed</Button>
                  <Button type="danger">危险</Button>
                  <Button type="primary" disabled>禁止</Button>
                </p>
                <Button type="primary" size="large">普通大</Button>
                <Button type="primary">普通中</Button>
                <Button type="primary" size="small">普通小</Button>
              </div>
            </Card>
          </Col>
          <Col lg={8} md={12}>
            <Card title="其他类型的按钮">
              <div>
                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary" icon="search">Search</Button>
                <Button type="primary" loading>
                  Loading
                </Button>
                <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                  Click me!
                </Button>
                <br />
                <Dropdown overlay={menu}>
                  <Button>
                    more <Icon type="down" />
                  </Button>
                </Dropdown>
                <br />
              </div>,
            </Card>
          </Col>
          <Col lg={8} md={12}>
            <Card title="基础样式">
              <p className="m_water_font-b">大</p>
              <p className="">普通</p>
              <p className="m_water_font-s">小</p>
            </Card>
          </Col>
        </Row>
        <h2 style={{ margin: '16px 0' }}>Props</h2>
      </div>
    )
  }
}

export default App
