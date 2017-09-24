import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import styles from './TableContent.less'

// function TableContent ({ data, columns }) {
class TableContent extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      columns: [],
      data: [],
      tableRenderFlag: true,
      hasEditFlag: true,
    }
  }
  onChangeTable = (pagination, filters, sorter) => {
    this.props.onChangeTable(pagination, filters, sorter)
  }
  getEditDom = (item, key, index, record) => {
    const tableEditDom = []
    if (item === 'edit') {
      tableEditDom.push(<span key={index}>
        <a onClick={() => this.editCol(index, record)} className="m_water_margin-md-l" key={index}>编辑</a>
      </span>)
    } else if (item === 'delect') {
      tableEditDom.push(<span key={index}>
        <a onClick={() => this.delectCol(index, record)} className="m_water_margin-md-l" key={index}>删除</a>
      </span>)
    }
    return tableEditDom
  }
  delectCol = (index, record) => {
    Modal.confirm({
      title: '确定删除该记录吗',
      content: '删除后将无法复原',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        this.props.delectColFunc(index, record)
      },
    })
  }
  editCol = (index, record) => {
    this.props.editColFunc(index, record)
  }
  // 编辑按钮
  addOperationCol = (operation, index, record) => {
    const editDom = operation.map((item, key) => (
      this.getEditDom(item, key, index, record)
    ))
    return editDom
  }
  rebuildCol = (col, operation) => {
    const flag = col.filter(item => (
      item.title === '编辑'
    ))
    if (flag.length === 0) {
      col.push({
        title: '编辑',
        dataIndex: 'operation',
        render: (text, record, index) => {
          return (this.addOperationCol(operation, index, record))
        },
      })
      this.state.columns = col
    }
  }
  render () {
    const columns = this.props.columns
    const operation = this.props.operation
    if (operation) {
      this.rebuildCol(columns, this.props.operation)
    } else {
      this.state.columns = this.props.columns
    }
    this.state.data = this.props.data
    return (
      <div className={styles.tablecontent}>
        <Table columns={this.state.columns} rowKey={(record, key) => key} dataSource={this.state.data} pagination={{ pageSize: 5 }} onChange={this.onChangeTable} />
      </div>
    )
  }
}

TableContent.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  operation: PropTypes.array,
  delectColFunc: PropTypes.func,
  editColFunc: PropTypes.func,
  onChangeTable: PropTypes.func,
}

export default TableContent
