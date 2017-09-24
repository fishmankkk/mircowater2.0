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
  onChangeTable = (pagination, filters, sorter) => {
    console.log(pagination)
    this.props.onChangeTable(pagination, filters, sorter)
  }
  render () {
    return (
      <div className="mwater-table">
        <TableFilter filterData={this.props.filterData} onClickFunc={this.props.onClickFunc} filterDefaultValue={this.props.filterDefaultValue} />
        <TableContent delectColFunc={this.props.delectColFunc}
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
}

export default MwaterTable
