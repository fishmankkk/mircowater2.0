import { TableFilter, TableContent } from 'components'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import moment from 'moment'
import 'gobal'

class MwaterTable extends Component {
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
  onClickFunc = (data, type) => {
    let pagination = {
      pageSize: this.refs.tableContentRef.state.pageSize,
      currentPage: this.refs.tableContentRef.state.currentPage,
    }
    this.props.getTableAllFilter(pagination, data, type)
  }
  onChangeTable = (pagination, filters, sorter) => {
    this.props.getTableAllFilter(pagination, this.tableFilter.getFormValue(), 'changePage')
  }
  render () {
    return (
      <div className="mwater-table">
        <TableFilter
          wrappedComponentRef={(inst) => this.tableFilter = inst}
          filterData={this.props.filterData}
          onClickFunc={this.onClickFunc}
          filterDefaultValue={this.props.filterDefaultValue}
        />
        <TableContent ref="tableContentRef"
          wrappedComponentRef={(inst) => this.tableContentRef = inst}
          delectColFunc={this.props.delectColFunc}
          editColFunc={this.props.editColFunc}
          data={this.props.tableData}
          columns={this.props.tableColumns}
          operation={this.props.tableDataOperation}
          onChangeTable={this.onChangeTable}
        />
      </div>
    )
  }
}

MwaterTable.propTypes = {
  filterData: PropTypes.array,
  filterDefaultValue: PropTypes.object,
  onClickFunc: PropTypes.func,
  tableColumns: PropTypes.array,
  tableData: PropTypes.array,
  tableDataOperation: PropTypes.array,
  onChangeTable: PropTypes.func,
  delectColFunc: PropTypes.func,
  editColFunc: PropTypes.func,
  getTableAllFilter: PropTypes.func,
}

export default MwaterTable
