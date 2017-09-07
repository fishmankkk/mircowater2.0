import React from 'react'
import { Button, Row, Col, Card, Menu, Dropdown, Icon, Input, Select, Radio, Switch, Checkbox, DatePicker, Cascader, TreeSelect } from 'antd'
import 'gobal'

const TreeNode = TreeSelect.TreeNode
const Option = Select.Option
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group
const { MonthPicker, RangePicker } = DatePicker
const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}]

function onCascaderChange (value) {
  console.log(value)
}
function onDataChange (date, dateString) {
  console.log(date, dateString)
}

function handleMenuClick (e) {
  console.log('click', e)
}
const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

function handleChange (value) {
  console.log(`Selected: ${value}`)
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
    size: 'default',
    radiovalue: 1,
    checkedList: [],
    indeterminate: true,
    checkAll: false,
    treevalue: undefined,
  }
  onTreeChange = (treevalue) => {
    console.log(arguments)
    this.setState({ treevalue })
  }
  onCheckboxChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    })
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    })
  }
  onRadioChange = (e) => {
    this.setState({
      radiovalue: e.target.value,
    })
  }
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value })
  }
  enterIconLoading = () => {
    this.setState({ iconLoading: true })
  }
  render () {
    const { size } = this.state
    return (
      <div className="">
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
              <p>
                <span className="m_water_font-b">大</span>
                <span className="">普通</span>
                <span className="m_water_font-s">小</span>
              </p>
              <span className="m_water_fc-red">颜色</span>
              <span className="m_water_fc-blue">颜色</span>
              <span className="m_water_fc-purple">颜色</span>
              <span className="m_water_fc-cyan">颜色</span>
              <span className="m_water_fc-green">颜色</span>
              <span className="m_water_fc-pink">颜色</span>
              <span className="m_water_fc-orange">颜色</span>
              <span className="m_water_fc-yellow">颜色</span>
              <p className="m_water_f-keyword">加粗</p>
              <p className="m_water_fc-white">
                <p className="m_water_bg-white">背景</p>
                <p className="m_water_bg-black">背景</p>
                <p className="m_water_bg-red">背景</p>
                <p className="m_water_bg-blue">背景</p>
                <p className="m_water_bg-purple">背景</p>
                <p className="m_water_bg-cyan">背景</p>
                <p className="m_water_bg-green">背景</p>
                <p className="m_water_bg-pink">背景</p>
                <p className="m_water_bg-orange">背景</p>
                <p className="m_water_bg-yellow">背景</p>
              </p>
            </Card>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col lg={8} md={12}>
            <Card title="表单">
              <Input size="large" className="m_water_margin-sm" placeholder="大" />
              <Input className="m_water_margin-sm" placeholder="默认" />
              <Input className="m_water_margin-sm" size="small" placeholder="小" />
            </Card>
          </Col>
          <Col lg={8} md={12}>
            <Card title="下拉框">
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
              <br /><br />
              <Select
                size={size}
                defaultValue="a1"
                onChange={handleChange}
                style={{ width: 200 }}
              >
                {children}
              </Select>
              <br />
              <Select
                mode="combobox"
                size={size}
                defaultValue="a1"
                onChange={handleChange}
                style={{ width: 200 }}
              >
                {children}
              </Select>
              <br />
              <Select
                mode="multiple"
                size={size}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                style={{ width: '100%' }}
              >
                {children}
              </Select>
              <br />
              <Select
                mode="tags"
                size={size}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                style={{ width: '100%' }}
              >
                {children}
              </Select>
            </Card>
          </Col>
          <Col lg={8} md={12}>
            <Card title="表单">
              <Switch checkedChildren="开" unCheckedChildren="关" />
              <br />
              <br />
              <RadioGroup value={this.state.radiovalue} onChange={this.onRadioChange}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </RadioGroup>
              <br />
              <br />
              <Checkbox indeterminate={this.state.indeterminate} onChange={this.onCheckAllChange} checked={this.state.checkAll}>
                  全选
              </Checkbox>
              <br />
              <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onCheckboxChange} />
            </Card>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col lg={8} md={12}>
            <Card title="时间">
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" onChange={onDataChange} />
              <br />
              <MonthPicker onChange={onDataChange} placeholder="Select month" />
              <br />
              <RangePicker onChange={onDataChange} placeholder={['开始时间', '结束时间']} />
            </Card>
          </Col>
          <Col lg={8} md={12}>
            <Card title="级联">
              <Cascader options={options} onChange={onCascaderChange} placeholder="Please select" />
            </Card>
          </Col>
          <Col lg={8} md={12}>
            <Card title="树选择">
              <TreeSelect
                showSearch
                style={{ width: 300 }}
                value={this.state.treevalue}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={this.onTreeChange}
              >
                <TreeNode value="parent 1" title="parent 1" key="0-1">
                  <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                    <TreeNode value="leaf1" title="my leaf" key="random" />
                    <TreeNode value="leaf2" title="your leaf" key="random1" />
                  </TreeNode>
                  <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                    <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
