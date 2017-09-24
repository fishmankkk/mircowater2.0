import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card, Modal, Spin } from 'antd'
import { Loader, FormPop } from 'components'
import { MwaterTable } from 'containers'
import 'gobal'
import { color } from 'utils/theme'
import { BtnCard } from './components'

const bodyStyle = {
  bodyStyle: {
    height: 450,
    background: '#fff',
    paddingTop: 1,
  },
}
function SMSDashboard ({ smsDashboard, loading, dispatch }) {
  // 表单查询事件
  function tableFilterClick (object, string) {
    console.log(object)
    console.log(string)
    dispatch({ type: 'smsDashboard/queryAccountGird' })
  }
  function delectColFunc (index, record) {
    console.log(index)
    console.log(record)
  }
  function editColFunc (index, record) {
    dispatch({ type: 'smsDashboard/editAutographPopup', payload: { smsPopTitle: '编辑签名', record } })
  }
  function delectColFunc1 (index, record) {
    console.log(index)
    console.log(record)
  }
  function editColFunc1 (index, record) {
    dispatch({ type: 'smsDashboard/editAutographPopup', payload: { smsPopTitle: '编辑签名', record } })
  }
  // 表单数据VALUE
  const tableDataOperation = ['edit', 'delect']
  const formDataVal = {
    username: '测试',
    username1: '测试',
    signName: '中国',
    data: ['2017/09/08', '2017/09/18'],
    signname1: 'hn',
    passageway: ['zhejiang', 'hangzhou'],
  }
  // 隐藏弹窗
  const hideModal = () => {
    dispatch({ type: 'smsDashboard/hideModelView' })
  }
  const hideTable = () => {
    dispatch({ type: 'smsDashboard/hideTableView' })
  }
  // 弹窗确定事件
  const popModelSure = (object) => {
    console.log(object)
    dispatch({ type: 'smsDashboard/hideModelView' })
  }
  // 大按钮配置
  const smsBtns = [{
    icon: 'plus-square-o',
    color: color.green,
    title: '新增签名',
    onClickFunc: () => {
      dispatch({ type: 'smsDashboard/newAutograph', payload: { smsPopTitle: '新增签名' } })
    },
  }, {
    icon: 'edit',
    color: color.blue,
    title: '修改签名',
    onClickFunc: () => {
      dispatch({ type: 'smsDashboard/autograph' })
    },
  }, {
    icon: 'link',
    color: color.purple,
    title: '绑定帐号',
    onClickFunc: () => {
      dispatch({ type: 'smsDashboard/bindAccount', payload: { smsPopTitle: 'P版绑定帐号' } })
    },
  },
  ]
  const { smsAccountTableData, smsAccountTableCol, tableFilterDataVal, tableFilterData,
    modelViewFlag, smsPopupBody, smsPopTitle, tableViewFlag, formDefaultValue,
    smsAccountTableLoading, smsAutographTableData, smsAutographTableCol } = smsDashboard

  const numberCards = smsBtns.map((item, key) => (<Col key={key} lg={7} md={12}>
    <BtnCard {...item} />
  </Col>))

  return (
    <div>
      {/*<Loader spinning={loading.models.smsDashboard} />*/}
      <Row gutter={24} type="flex" justify="space-between">
        {numberCards}
        <Col lg={24} md={24}>
          <Spin spinning={smsAccountTableLoading}>
            <Card loading={smsAccountTableLoading} title="短信剩余条数" bordered={false} {...bodyStyle} className="m_water_margin-lg-t">
              <MwaterTable
                filterData={tableFilterData}
                onClickFunc={tableFilterClick}
                filterDefaultValue={tableFilterDataVal}
                tableColumns={smsAccountTableCol}
                tableData={smsAccountTableData}
              />
            </Card>
          </Spin>
        </Col>
      </Row>
      <FormPop
        title={smsPopTitle}
        popViewFlag={modelViewFlag}
        filterData={smsPopupBody}
        onSureClickFunc={popModelSure}
        onCanelFunc={hideModal}
        filterDefaultValue={formDefaultValue}
      />
      <Modal
        visible={tableViewFlag}
        title="签名编辑"
        footer={null}
        width="1000px"
        onOk={popModelSure}
        onCancel={hideTable}
      >
        <MwaterTable
          filterData={tableFilterData}
          onClickFunc={tableFilterClick}
          delectColFunc={delectColFunc}
          editColFunc={editColFunc}
          filterDefaultValue={tableFilterDataVal}
          tableColumns={smsAutographTableCol}
          tableData={smsAutographTableData}
          tableDataOperation={tableDataOperation}
        />
      </Modal>
    </div>
  )
}

SMSDashboard.propTypes = {
  smsDashboard: PropTypes.object,
  loading: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ smsDashboard, loading }) => ({ smsDashboard, loading }))(SMSDashboard)
