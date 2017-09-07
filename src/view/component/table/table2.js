import React from 'react'
import { Table, Button, Row, Col, Card, Badge, Menu, Dropdown, Icon } from 'antd'

const menu = (
  <Menu>
    <Menu.Item>
      Action 1
    </Menu.Item>
    <Menu.Item>
      Action 2
    </Menu.Item>
  </Menu>
)
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 200,
  fixed: 'left',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Age',
  dataIndex: 'name2',
}, {
  title: 'Age',
  dataIndex: 'name3',
}, {
  title: 'Age',
  dataIndex: 'age1',
}, {
  title: 'Address',
  dataIndex: 'address',
}]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    name2: `Edward King ${i}`,
    name3: `Edward King ${i}`,
    age: 32,
    age1: 33,
    address: `London, Park Lane no. ${i}`,
  })
}

function NestedTable () {
  const expandedRowRender = () => {
    const columns2 = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <span className={'table-operation'}>
            <a href="#">Pause</a>
            <a href="#">Stop</a>
            <Dropdown overlay={menu}>
              <a href="#">
                More <Icon type="down" />
              </a>
            </Dropdown>
          </span>
        ),
      },
    ]

    const data1 = []
    for (let i = 0; i < 3; ++i) {
      data1.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      })
    }
    return (
      <Table
        columns={columns2}
        dataSource={data1}
        pagination={false}
      />
    )
  }

  const columns1 = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a href="#">Publish</a> },
  ]
  const selectedRowKeys1 = []
  const data1 = []
  for (let i = 0; i < 3; ++i) {
    data1.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    })
  }
  return (
    <Table
      rowSelection={selectedRowKeys1}
      className="components-table-demo-nested"
      columns={columns1}
      expandedRowRender={expandedRowRender}
      dataSource={data1}
    />
  )
}

class App extends React.Component {
  state = {
    selectedRowKeys: [],
    // Check here to configure the default column
    loading: false,
  };
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }
  start = () => {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      })
    }, 1000)
  }
  render () {
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = selectedRowKeys.length > 0
    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="分页选择">
              <div style={{ marginBottom: 16 }}>
                <Button
                  type="primary"
                  onClick={this.start}
                  disabled={!hasSelected}
                  loading={loading}
                >
                  Reload
                </Button>
                <span style={{ marginLeft: 8 }}>
                  {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
              </div>
              <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ y: 240, x: 2000 }} />
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="固定表头">
              <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
            </Card>
          </Col>
          <Col lg={24} md={24} className="m_water_padding-lg">
            <Card title="父子表">
              <NestedTable />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
