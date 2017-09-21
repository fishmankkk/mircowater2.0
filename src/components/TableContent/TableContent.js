import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import styles from './TableContent.less'

// function TableContent ({ data, columns }) {
class TableContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: [],
      tableRenderFlag: true,
    }
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
    console.log(index, record)
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
    col.push({
      title: '编辑',
      dataIndex: 'operation',
      render: (text, record, index) => {
        return (this.addOperationCol(operation, index, record))
      },
    })
    this.state.columns = col
  }
  render () {
    const columns = this.props.columns
    const operation = this.props.operation
    if (columns.length > 0 && operation.length !== 0 && this.state.tableRenderFlag) {
      this.rebuildCol(columns, this.props.operation)
      this.state.tableRenderFlag = false
    }
    return (
      <div className={styles.tablecontent}>
        <Table columns={this.state.columns} rowKey={(record, key) => key} dataSource={this.props.data} pagination={{ pageSize: 5 }} />
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
}

export default TableContent
