import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card, Modal } from 'antd'
import { Loader } from 'components'
import 'gobal'
import { color } from 'utils/theme'
import { BtnCard, RecentSales, TableFilter } from './components'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}
function SMSDashboard ({ smsDashboard, loading, dispatch }) {
  function tableFilterClick (object, string) {
    console.log(object)
    console.log(string)
  }
  const tableFilterData = [{
    key: 'username',
    text: '帐号',
    placeholder: '请输入帐号',
    formType: 'input',
  },
  {
    key: 'signName',
    text: '签名',
    placeholder: '请输入要搜索的签名',
    formType: 'input',
  },
  {
    key: 'data',
    text: '日期',
    placeholder: '请输入帐号',
    formType: 'rangePicker',
  },
  {
    key: 'signname1',
    text: '签名',
    placeholder: '请选择的签名',
    formType: 'select',
    styles: 'width: 200',
    option: [{
      text: '华南申通',
      value: 'hn',
    },
    {
      text: '东北申通',
      value: 'db',
    },
    {
      text: '华中申通',
      value: 'hz',
    }],
  },
  ]
  const hideModal = () => {
    dispatch({ type: 'smsDashboard/hideModelView' })
  }
  const smsBtns = [{
    icon: 'plus-square-o',
    color: color.green,
    title: '新增签名',
    onClickFunc: () => {
      dispatch({ type: 'smsDashboard/showModelView' })
    },
  }, {
    icon: 'edit',
    color: color.blue,
    title: '修改签名',
    onClickFunc: () => {
      console.log('修改签名')
    },
  }, {
    icon: 'link',
    color: color.purple,
    title: '绑定帐号',
    onClickFunc: () => {
      console.log('绑定帐号')
    },
  }, {
    icon: 'disconnect',
    color: color.red,
    title: '修改帐号',
    onClickFunc: () => {
      console.log('修改帐号')
    },
  },
  ]
  const { smsAccountTableData, smsAccountTableCol, modelViewFlag } = smsDashboard

  const numberCards = smsBtns.map((item, key) => (<Col key={key} lg={6} md={12}>
    <BtnCard {...item} />
  </Col>))

  return (
    <div>
      <Loader spinning={loading.models.smsDashboard} />
      <Row gutter={24} type="flex" justify="space-between">
        {numberCards}
        <Col lg={24} md={24}>
          <Card>
            <TableFilter filterData={tableFilterData} onClickFunc={tableFilterClick} />
          </Card>
        </Col>
        <Col lg={24} md={24}>
          <Card title="短信剩余条数" bordered={false} {...bodyStyle} className="m_water_margin-lg-t">
            <RecentSales data={smsAccountTableData} columns={smsAccountTableCol} />
          </Card>
        </Col>
      </Row>
      <Modal
        title="新增签名"
        visible={modelViewFlag}
        onOk={hideModal}
        onCancel={hideModal}
        okText="确认"
        cancelText="取消"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
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
