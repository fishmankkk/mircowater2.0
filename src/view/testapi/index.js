import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form } from 'antd'
import 'gobal'
import styles from './index.less'

const Login = ({
  testapi,
  dispatch,
}) => {
  const { loginLoading } = testapi

  function handleOk () {
    dispatch({ type: 'testapi/login' })
  }

  return (
    <div className={styles.form}>
      <form>
        <Row>
          <Button type="primary" size="large" onClick={handleOk} loading={loginLoading}>
          接口测试
          </Button>
        </Row>

      </form>
    </div>
  )
}

Login.propTypes = {
  testapi: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ testapi }) => ({ testapi }))(Form.create()(Login))
