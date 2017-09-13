import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Col, Form, Input, Card } from 'antd'
import { config } from 'utils'
import 'gobal'

const FormItem = Form.Item

const Login = ({
  login,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  const { loginLoading } = login

  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }
  function gotoLogout () {
    dispatch({ type: 'login/goLogout' })
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
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: '请输入帐号',
                },
              ],
            })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [{ type: 'string', required: true, message: '请正确填写密码' }],
            })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
          </FormItem>
          <Row>
            <Button className="m_water_width-100 m_water_margin-none" type="primary" size="large" onClick={handleOk} loading={loginLoading}>
              登录
            </Button>
            <p className="m_water_flex m_water_flex-right m_water_cusor-point" onClick={gotoLogout} role="button">我要注册？</p>
            <Row type="flex" justify="space-around">
              <Col span={12}>Username：hxk</Col>
              <Col span={12} className="m_water_width-right">Password：hxk</Col>
            </Row>
          </Row>

        </form>
      </Card>
    </Row>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ login }) => ({ login }))(Form.create()(Login))
