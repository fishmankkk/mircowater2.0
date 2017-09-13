import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Col, Form, Input, Card } from 'antd'
import { config } from 'utils'
import 'gobal'

const FormItem = Form.Item

const Logout = ({
  logout,
  dispatch,
  form: {
    getFieldValue,
    validateFields,
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  const { loginLoading, confirmDirty } = logout

  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'logout/logout', payload: values })
    })
  }
  function gotoLogin () {
    dispatch({ type: 'logout/goLogin' })
  }
  function checkPassword (rule, value, callback) {
    if (value && value !== getFieldValue('confirm_password')) {
      callback('两个密码必须一致！')
    } else {
      callback()
    }
  }
  function checkConfirm (rule, value, callback) {
    if (value && confirmDirty) {
      validateFields(['confirm'], { force: true })
    }
    callback()
  }
  return (
    <Row type="flex" justify="center" align="middle" className="m_water_p-a m_water_height-100 m_water_width-100">
      <Card className="m_water_width-center m_water_flex-center m_water_flex">
        <Row type="flex" align="top">
          <Col span={2}>
            <img alt={'logo'} src={config.logo} className="m_water_width-100" />
          </Col>
          <Col span={19}>
            <h3 className="m_water_f-keyword m_water_fc-blue">{config.name}</h3>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={6}>
            <h2 className="m_water_f-keyword m_water_margin-lg">注册</h2>
          </Col>
        </Row>
        <form>
          <FormItem hasFeedback>
            {getFieldDecorator('logout_username', {
              rules: [{ required: true, message: '请输入帐号' }],
            })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('logout_password', {
              rules: [{ type: 'string', required: true, message: '请正确填写密码' }, {
                validator: checkConfirm,
              }],
            })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('confirm_password', {
              rules: [{ type: 'string', required: true, message: '请再次填写密码' }, {
                validator: checkPassword,
              }],
            })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="确认密码" />)}
          </FormItem>
          <Button className="m_water_width-100 m_water_margin-none" type="primary" size="large" onClick={handleOk} loading={loginLoading}>
            注册
          </Button>
          <p className="m_water_flex m_water_flex-right m_water_cusor-point" onClick={gotoLogin} role="button">
            我已经有帐号？
          </p>
        </form>
      </Card>
    </Row>
  )
}

Logout.propTypes = {
  form: PropTypes.object,
  logout: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ logout }) => ({ logout }))(Form.create()(Logout))
