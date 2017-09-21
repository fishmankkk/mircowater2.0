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
  render () {
    return (
      <div className="mwater-table">
        <TableFilter filterData={this.props.filterData} onClickFunc={this.props.onClickFunc} filterDefaultValue={this.props.filterDefaultValue} />
        <TableContent delectColFunc={this.props.delectColFunc} editColFunc={this.props.editColFunc} data={this.props.tableData} columns={this.props.tableColumns} operation={this.props.tableDataOperation} />
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
  delectColFunc: PropTypes.func,
  editColFunc: PropTypes.func,
}

export default MwaterTable
