import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, DatePicker, Select, Modal, Icon, Cascader } from 'antd'
import 'gobal'

const { RangePicker } = DatePicker
const FormItem = Form.Item
const Option = Select.Option
class TableFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {
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
      formItemDom = (<FormItem label={item.text} key={key}>
        { getFieldDecorator(item.key, { rules: item.rules }, { initialValue: this.props.filterDefaultValue[item.key] })(
          <Input placeholder={item.placeholder} />)
        }
      </FormItem>)
    } else if (item.formType === 'rangePicker') {
      formItemDom = (<FormItem label={item.text} key={key}>
        { getFieldDecorator(item.key, { rules: item.rules })(
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
      formItemDom = (<FormItem label={item.text} key={key}>
        { getFieldDecorator(item.key, { rules: item.rules }, { initialValue: this.props.filterDefaultValue[item.key] })(
          <Select
            showSearch
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
        { getFieldDecorator(item.key, { rules: item.rules }, { initialValue: this.props.filterDefaultValue[item.key] })(
          <Cascader options={item.option} />)
        }
      </FormItem>)
    }
    return formItemDom
  }
  // form提交事件
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.onSureClickFunc(this.getFormValue())
      }
    })
  }
  // 重置按钮
  filterClearFun = () => {
    this.props.form.resetFields()
  }
  render () {
    // 渲染form
    const formDom = this.props.filterData.map((item, key) => (
      this.formType(item, key)
    ))
    this.state.formData = this.getFormValue()
    return (
      <Modal
        title={this.props.title}
        visible={this.props.popViewFlag}
        onOk={this.handleSubmit}
        onCancel={this.props.onCanelFunc}
        okText="确认"
        cancelText="取消"
      >
        <a style={{ right: '17px', zIndex: 5 }} className="m_water_p-a m_water_cusor-point" onClick={this.filterClearFun}>
          <Icon type="reload" title="重置" /><span className="m_water_font-s">重置</span>
        </a>
        <div className="table-filter">
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            {formDom}
          </Form>
        </div>
      </Modal>
    )
  }
}

TableFilter.propTypes = {
  title: PropTypes.string,
  popViewFlag: PropTypes.bool,
  filterData: PropTypes.array,
  filterDefaultValue: PropTypes.object,
  onSureClickFunc: PropTypes.func,
  onCanelFunc: PropTypes.func,
  form: PropTypes.any,
}

const TableFilterFrom = Form.create()(TableFilter)

export default TableFilterFrom
