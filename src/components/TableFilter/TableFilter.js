import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Input, DatePicker, Select, Button, Icon, Cascader } from 'antd'
// import moment from 'moment'
import 'gobal'
import styles from './TableFilter.less'

const { RangePicker } = DatePicker
const FormItem = Form.Item
const Option = Select.Option
class TableFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showTheThing: true,
      formData: {},
      isFilterMode: {
        text: '收起',
        flag: false,
      },
    }
  }
  // form值获取
  getFormValue = () => {
    return this.props.form.getFieldsValue()
  }
  // 查询模式form渲染
  formType = (item, key) => {
    const { getFieldDecorator } = this.props.form
    let formItemDom = ''
    if (item.formType === 'input') {
      formItemDom = (<FormItem label={item.text} className={styles.formitem_inline_bottom} key={key}>
        { getFieldDecorator(item.key, { initialValue: this.props.filterDefaultValue[item.key] })(
          <Input placeholder={item.placeholder} />)
        }
      </FormItem>)
    } else if (item.formType === 'rangePicker') {
      formItemDom = (<FormItem label={item.text} className={styles.formitem_inline_bottom} key={key}>
        { getFieldDecorator(item.key)(
          <RangePicker
            format={'YYYY/MM/DD'}
          />)
        }
      </FormItem>)
    } else if (item.formType === 'select') {
      const optionDom = item.option.map((optionItem, optionKey) => (
        <Option value={optionItem.value} key={optionKey}>{optionItem.label}</Option>
      ))
      if (this.props.filterDefaultValue[item.key] === '' || this.props.filterDefaultValue[item.key] === null) this.props.filterDefaultValue[item.key] = undefined
      formItemDom = (<FormItem label={item.text} className={styles.formitem_inline_bottom} key={key}>
        { getFieldDecorator(item.key, { initialValue: this.props.filterDefaultValue[item.key] })(
          <Select
            showSearch
            style={item.styles}
            placeholder={item.placeholder}
            optionFilterProp="children"
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {optionDom}
          </Select>)
        }
      </FormItem>)
    } else if (item.formType === 'cascader') {
      formItemDom = (<FormItem label={item.text} key={key}>
        { getFieldDecorator(item.key, { initialValue: this.props.filterDefaultValue[item.key] })(
          <Cascader options={item.option} />)
        }
      </FormItem>)
    }
    return formItemDom
  }
  // 查看模式form渲染
  formViewType = (item, key) => {
    let formItemDom = ''
    if (this.state.formData[item.key] !== undefined) {
      if (item.formType === 'rangePicker') {
        formItemDom = (<FormItem label={item.text} className={styles.formitem_inline_bottom} key={key}>
          {this.state.formData[item.key][0].format('YYYY-MM-DD')} 到 {this.state.formData[item.key][1].format('YYYY-MM-DD')}
        </FormItem>)
      } else if (item.formType === 'select') {
        const optionText = item.option.filter(optionItem => (
          optionItem.value === this.state.formData[item.key]
        ))
        formItemDom = (<FormItem label={item.text} className={styles.formitem_inline_bottom} key={key}>
          {optionText[0].label}
        </FormItem>)
      } else if (item.formType === 'cascader') {
        if (this.state.formData[item.key].length > 0) {
          let optionLabel = ''
          const cascaderVal = this.state.formData[item.key]
          let getCascaderLabel = function (cascaderOption, index) {
            const optionText = cascaderOption.filter(optionItem => (
              optionItem.value === cascaderVal[index]
            ))
            optionLabel += `${optionText[0].label}/`
            return optionText[0]
          }
          let cascaderOption = item.option
          for (let i = 0, len = this.state.formData[item.key].length; i < len; i++) {
            const getOptionText = getCascaderLabel(cascaderOption, i)
            optionLabel
            cascaderOption = getOptionText.children
          }
          formItemDom = (<FormItem label={item.text} className={styles.formitem_inline_bottom} key={key}>
            {optionLabel.substr(0, optionLabel.length - 1)}
          </FormItem>)
        }
      } else {
        formItemDom = (<FormItem label={item.text} className={styles.formitem_inline_bottom} key={key}>
          {this.state.formData[item.key]}
        </FormItem>)
      }
    }
    return formItemDom
  }
  // 模式切换
  modeChange = () => {
    let stateMode = { flag: false, text: '', showTheThing: false }
    if (this.state.showTheThing) {
      stateMode.flag = true
      stateMode.text = '展开'
      stateMode.showTheThing = false
    } else {
      stateMode.flag = false
      stateMode.text = '收起'
      stateMode.showTheThing = true
    }
    this.setState({ showTheThing: stateMode.showTheThing })
    this.setState({ isFilterMode: { text: stateMode.text, flag: stateMode.flag } })
  }
  // form提交事件
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onClickFunc(this.getFormValue(), 'search')
  }
  // 重置按钮
  filterClearFun = () => {
    this.props.form.resetFields()
    this.props.onClickFunc(this.getFormValue(), 'clear')
  }
  render () {
    // 渲染form
    const formDom = this.props.filterData.map((item, key) => (
      this.formType(item, key)
    ))
    this.state.formData = this.getFormValue()
    const formFilterViewDom = this.props.filterData.map((item, key) => (
      this.formViewType(item, key)
    ))
    return (
      <div className="table-filter">
        <Form layout="inline" className={styles.form_inline_bottom} onSubmit={this.handleSubmit}>
          <div className={`${'table-filter-view'} ${this.state.showTheThing ? 'm_water_tohide' : 'm_water_inline'}`}>
            {formFilterViewDom}
          </div>
          <div className={`${'table-filter-edit'} ${this.state.showTheThing ? 'm_water_inline' : 'm_water_tohide'}`}>
            {formDom}
          </div>
          <Row>
            <Col span={24} className="m_water_width-right">
              <Button type="primary" htmlType="submit" className={`${'table-filter-edit'} ${this.state.showTheThing ? 'm_water_inline' : 'm_water_tohide'}`}>查询</Button>
              <Button onClick={this.filterClearFun} className={`${'table-filter-edit'} ${this.state.showTheThing ? 'm_water_inline' : 'm_water_tohide'}`}>重置</Button>
              <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.modeChange}>
                {this.state.isFilterMode.text} <Icon type={this.state.isFilterMode.flag ? 'down' : 'up'} />
              </a>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

TableFilter.propTypes = {
  filterData: PropTypes.array,
  filterDefaultValue: PropTypes.object,
  onClickFunc: PropTypes.func,
  form: PropTypes.any,
}

const TableFilterFrom = Form.create()(TableFilter)

export default TableFilterFrom
