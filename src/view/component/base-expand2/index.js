import React from 'react'
import { Row, Col, Card, Tree, Alert, Modal, Button, message, notification, Progress, Spin, Popconfirm, BackTop } from 'antd'
import 'gobal'

const TreeNode = Tree.TreeNode
const confirm = Modal.confirm
function confirmPop (e) {
  console.log(e)
  message.success('Click on Yes')
}

function cancelPop (e) {
  console.log(e)
  message.error('Click on No')
}
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  })
}
const loadingMsg = () => {
  const hide = message.loading('Action in progress..', 0)
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500)
}
const successMsg = () => {
  message.success('This is a message of success')
}

const errorMsg = () => {
  message.error('This is a message of error')
}

const warningMsg = () => {
  message.warning('This is message of warning')
}
function info () {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk () {},
  })
}

function success () {
  Modal.success({
    title: 'This is a success message',
    content: 'some messages...some messages...',
  })
}

function error () {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  })
}

function warning () {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  })
}
function showConfirm () {
  confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk () {
      console.log('OK')
    },
    onCancel () {
      console.log('Cancel')
    },
  })
}

function showDeleteConfirm () {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk () {
      console.log('OK')
    },
    onCancel () {
      console.log('Cancel')
    },
  })
}
class App extends React.Component {
  state = { visible: false }
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info)
  }
  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  handleOk = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }
  render () {
    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="树">
              <Tree
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
              >
                <TreeNode title="parent 1" key="0-0">
                  <TreeNode title="parent 1-0" key="0-0-0" disabled>
                    <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                    <TreeNode title="leaf" key="0-0-0-1" />
                  </TreeNode>
                  <TreeNode title="parent 1-1" key="0-0-1">
                    <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
                  </TreeNode>
                </TreeNode>
              </Tree>
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="树">
              <Alert message="Success Text" type="success" showIcon className="m_water_margin-lg" />
              <Alert message="Info Text" type="info" showIcon className="m_water_margin-lg" />
              <Alert message="Warning Text" type="warning" showIcon className="m_water_margin-lg" />
              <Alert message="Error Text" type="error" showIcon className="m_water_margin-lg" />
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="模块">
              <Button type="primary" onClick={this.showModal}>Open</Button>
              <Button onClick={showConfirm}>
                Confirm
              </Button>
              <Button onClick={showDeleteConfirm} type="dashed">
                Delete
              </Button>
              <Button onClick={info}>Info</Button>
              <Button onClick={success}>Success</Button>
              <Button onClick={error}>Error</Button>
              <Button onClick={warning}>Warning</Button>
              <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="全局提醒">
              <Button onClick={successMsg}>Success</Button>
              <Button onClick={errorMsg}>Error</Button>
              <Button onClick={warningMsg}>Warning</Button>
              <Button onClick={loadingMsg}>Display a loading indicator</Button>
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="通知提醒框">
              <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
              <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
              <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
              <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="进度条">
              <Progress percent={30} strokeWidth={5} />
              <Progress percent={50} strokeWidth={5} status="active" />
              <Progress percent={70} strokeWidth={5} status="exception" />
              <Progress percent={100} strokeWidth={5} />
              <Progress type="circle" percent={30} width={80} className="m_water_margin-lg" />
              <Progress type="circle" percent={70} width={80} status="exception" className="m_water_margin-lg" />
              <Progress type="circle" percent={100} width={80} className="m_water_margin-lg" />
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="加载">
              <Spin tip="Loading...">
                <Alert
                  message="Alert message title"
                  description="Further details about the context of this alert."
                  type="info"
                />
              </Spin>
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="气泡确认框">
              <Popconfirm title="Are you sure delete this task?" onConfirm={confirmPop} onCancel={cancelPop} okText="Yes" cancelText="No">
                <a href="#">Delete</a>
              </Popconfirm>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
