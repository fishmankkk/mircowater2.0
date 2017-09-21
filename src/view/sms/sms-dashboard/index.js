import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
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
    dispatch({ type: 'smsDashboard/query' })
  }
  function delectColFunc (index, record) {
    console.log(index)
    console.log(record)
  }
  function editColFunc (index, record) {
    console.log(index)
    console.log(record)
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
  // 表单数据
  const formData = [{
    key: 'username',
    text: '通道',
    placeholder: '请输入通道',
    formType: 'input',
    rules: [{ required: true, message: '请填写通道' }],
  },
  {
    key: 'username1',
    text: '类型',
    placeholder: '请填写类型',
    formType: 'input',
    rules: [{ required: true, message: '请填写类型' }],
  },
  {
    key: 'signName',
    text: '签名',
    placeholder: '请填写签名',
    formType: 'input',
    rules: [{ required: true, message: '请填写签名' }],
  },
  {
    key: 'signName1',
    text: '服务号',
    placeholder: '请填写服务号',
    formType: 'input',
    rules: [{ required: true, message: '请填写服务号' }],
  },
  // {
  //   key: 'data',
  //   text: '日期',
  //   placeholder: '请输入帐号',
  //   formType: 'rangePicker',
  //   rules: [{ required: true, message: '请选择日期' }],
  // },
  // {
  //   key: 'signname1',
  //   text: '签名',
  //   placeholder: '请选择的签名',
  //   formType: 'select',
  //   styles: { width: 200 },
  //   option: [{
  //     label: '华南申通',
  //     value: 'hn',
  //   },
  //   {
  //     label: '东北申通',
  //     value: 'db',
  //   },
  //   {
  //     label: '华中申通',
  //     value: 'hz',
  //   }],
  //   rules: [{ required: true, message: '请选择签名' }],
  // },
  // {
  //   key: 'passageway',
  //   text: '通道/签名',
  //   placeholder: '请选择的通道/签名',
  //   formType: 'cascader',
  //   option: [
  //     {
  //       value: 'zhejiang',
  //       label: '汽车行业',
  //       children: [
  //         {
  //           value: 'hangzhou',
  //           label: '陆丰汽车',
  //         },
  //         {
  //           value: 'nanjing',
  //           label: '广汽本田',
  //         },
  //       ],
  //     },
  //     {
  //       value: 'jiangsu',
  //       label: '快递行业',
  //       children: [
  //         {
  //           value: 'sto',
  //           label: '申通快递',
  //         },
  //         {
  //           value: 'zt',
  //           label: '中通快递',
  //         },
  //       ],
  //     },
  //   ],
  // },
  ]
  // 隐藏弹窗
  const hideModal = () => {
    dispatch({ type: 'smsDashboard/hideModelView' })
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
      console.log('修改签名')
    },
  }, {
    icon: 'link',
    color: color.purple,
    title: '绑定帐号',
    onClickFunc: () => {
      dispatch({ type: 'smsDashboard/bindAccount', payload: { smsPopTitle: 'P版绑定帐号' } })
    },
  },
  // {
  //   icon: 'disconnect',
  //   color: color.red,
  //   title: '修改帐号',
  //   onClickFunc: () => {
  //     console.log('修改帐号')
  //   },
  // },
  ]
  const { smsAccountTableData, smsAccountTableCol, tableFilterDataVal, tableFilterData, modelViewFlag, smsPopupBody, smsPopTitle } = smsDashboard

  const numberCards = smsBtns.map((item, key) => (<Col key={key} lg={7} md={12}>
    <BtnCard {...item} />
  </Col>))

  return (
    <div>
      <Loader spinning={loading.models.smsDashboard} />
      <Row gutter={24} type="flex" justify="space-between">
        {numberCards}
        <Col lg={24} md={24}>
          <Card title="短信剩余条数" bordered={false} {...bodyStyle} className="m_water_margin-lg-t">
            <MwaterTable
              filterData={tableFilterData}
              onClickFunc={tableFilterClick}
              delectColFunc={delectColFunc}
              editColFunc={editColFunc}
              filterDefaultValue={tableFilterDataVal}
              tableColumns={smsAccountTableCol}
              tableData={smsAccountTableData}
              tableDataOperation={tableDataOperation}
            />
          </Card>
        </Col>
      </Row>
      <FormPop
        title={smsPopTitle}
        popViewFlag={modelViewFlag}
        filterData={smsPopupBody}
        onSureClickFunc={popModelSure}
        onCanelFunc={hideModal}
        filterDefaultValue={formDataVal}
      />
    </div>
  )
}

SMSDashboard.propTypes = {
  smsDashboard: PropTypes.object,
  loading: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ smsDashboard, loading }) => ({ smsDashboard, loading }))(SMSDashboard)
