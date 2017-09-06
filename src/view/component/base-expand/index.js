import React from 'react'
import { Row, Col, Card, Pagination, Steps, Transfer, Slider, Rate, Upload, Icon, Modal, Badge, Avatar, Carousel, Collapse, Popover, Button, Tooltip, Tabs, Radio, Tag, Timeline } from 'antd'
import 'gobal'

const TabPane = Tabs.TabPane
const Panel = Collapse.Panel
const Step = Steps.Step
const mockData = []
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  })
}

const targetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key)

class App extends React.Component {
  state = {
    pageNumber: 1,
    targetKeys,
    selectedKeys: [],
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
    mode: 'top',
  }
  onChange = (pageNumber) => {
    console.log('Page: ', pageNumber)
  }
  handleModeChange = (e) => {
    const mode = e.target.value
    this.setState({ mode })
  }
  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys })

    console.log('targetKeys: ', targetKeys)
    console.log('direction: ', direction)
    console.log('moveKeys: ', moveKeys)
  }

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] })

    console.log('sourceSelectedKeys: ', sourceSelectedKeys)
    console.log('targetSelectedKeys: ', targetSelectedKeys)
  }

  handleScroll = (direction, e) => {
    console.log('direction:', direction)
    console.log('target:', e.target)
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render () {
    const state = this.state
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col lg={24} md={24}>
            <Card title="分页器">
              <Pagination showQuickJumper defaultCurrent={this.state.pageNumber} total={500} onChange={this.onChange} />
            </Card>
          </Col>
          <Col lg={24} md={12}>
            <Card title="进度">
              <Steps current={1}>
                <Step title="完成" description="This is a description." />
                <Step title="正在进行" description="This is a description." />
                <Step title="等待中" description="This is a description." />
              </Steps>
            </Card>
          </Col>
          <Col lg={12} md={24}>
            <Card title="穿梭框">
              <Transfer
                dataSource={mockData}
                showSearch
                titles={['Source', 'Target']}
                targetKeys={state.targetKeys}
                selectedKeys={state.selectedKeys}
                onChange={this.handleChange}
                onSelectChange={this.handleSelectChange}
                onScroll={this.handleScroll}
                render={item => item.title}
              />
            </Card>
          </Col>
          <Col lg={12} md={24}>
            <Card title="滑动输入条">
              <Slider tipFormatter={null} />
            </Card>
          </Col>
          <Col lg={12} md={24}>
            <Card title="评分">
              <Rate />
            </Card>
          </Col>
          <Col lg={12} md={24}>
            <Card title="上传">
              <div className="clearfix">
                <Upload
                  action="//jsonplaceholder.typicode.com/posts/"
                  listType="picture-card"
                  fileList={state.fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {state.fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={state.previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt="example" style={{ width: '100%' }} src={state.previewImage} />
                </Modal>
              </div>
            </Card>
          </Col>
          <Col lg={12} md={24}>
            <Card title="微标数">
              <Badge count={25} className="m_water_margin-sm" />
              <Badge count={4} className="m_water_margin-sm" style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
              <Badge count={109} className="m_water_margin-sm" style={{ backgroundColor: '#87d068' }} />
            </Card>
          </Col>
          <Col lg={12} md={24}>
            <Card title="头像">
              <Avatar size="large" icon="user" className="m_water_margin-sm" />
              <Avatar icon="user" className="m_water_margin-sm" />
              <Avatar size="small" icon="user" className="m_water_margin-sm" />
              <br />
              <Avatar shape="square" size="large" icon="user" className="m_water_margin-sm" />
              <Avatar shape="square" icon="user" className="m_water_margin-sm" />
              <Avatar shape="square" size="small" icon="user" className="m_water_margin-sm" />
            </Card>
          </Col>
          <Col lg={12} md={24}>
            <Card loading title="卡片">
              Whatever content
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="跑马灯">
              <Carousel autoplay>
                <div className="m_water_bg-blue" style={{ height: '160px' }}><h3>1</h3></div>
                <div className="m_water_bg-purple" style={{ height: '160px' }}><h3>2</h3></div>
                <div className="m_water_bg-cyan" style={{ height: '160px' }}><h3>3</h3></div>
                <div className="m_water_bg-green" style={{ height: '160px' }}><h3>4</h3></div>
              </Carousel>
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="手风琴">
              <Collapse accordion>
                <Panel header={'This is panel header 1'} key="1">
                  <p>A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.</p>
                </Panel>
                <Panel header={'This is panel header 2'} key="2">
                  <p>A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.</p>
                </Panel>
                <Panel header={'This is panel header 3'} key="3">
                  <p>A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.</p>
                </Panel>
              </Collapse>
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="气泡卡片">
              <Popover content={content} title="Title" trigger="hover">
                <Button>Hover me</Button>
              </Popover>
              <Popover content={content} title="Title" trigger="focus">
                <Button>Focus me</Button>
              </Popover>
              <Popover content={content} title="Title" trigger="click">
                <Button>Click me</Button>
              </Popover>
              <br />
              <Tooltip placement="topLeft" title="Prompt Text">
                <Button>Align edge / 边缘对齐</Button>
              </Tooltip>
              <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
                <Button>Arrow points to center / 箭头指向中心</Button>
              </Tooltip>
            </Card>
          </Col>
          <Col lg={24} md={24} className="m_water_padding-lg">
            <Card title="标签页">
              <Radio.Group onChange={this.handleModeChange} value={state.mode} style={{ marginBottom: 8 }}>
                <Radio.Button value="top">Horizontal</Radio.Button>
                <Radio.Button value="left">Vertical</Radio.Button>
              </Radio.Group>
              <Tabs
                defaultActiveKey="1"
                tabPosition={state.mode}
                style={{ height: 220 }}
              >
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="标签">
              <Tag>Tag 1</Tag>
              <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
              <Tag closable>Tag 2</Tag>
              <Tag closable>Prevent Default</Tag>
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="时间轴">
              <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
