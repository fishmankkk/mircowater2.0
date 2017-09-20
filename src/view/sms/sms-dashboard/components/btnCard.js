import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, Row, Col } from 'antd'
import 'gobal'

function btnCard ({ icon, color, title, onClickFunc }) {
  return (
    <Card className="m_water_cusor-point m_water_margin-lg-b m_water_padding-lg m_water_bg-white m_water_align-center" 
      bordered={false}
      bodyStyle={{ padding: 0, width: '100%' }}
      onClick={onClickFunc}
    >
      <Row gutter={24} type="flex" align="middle">
        <Col lg={8} md={8} className="m_water_flex m_water_flex-right">
          <Icon className="m_water_icon-font-l" style={{ color }} type={icon} />
        </Col>
        <Col lg={16} md={16}>
          <p className="m_water_font-b m_water_f-keyword">{title || 'No Title'}</p>
        </Col>
      </Row>
    </Card>
  )
}

btnCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  onClickFunc: PropTypes.func,
}

export default btnCard
