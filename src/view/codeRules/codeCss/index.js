import React from 'react'
import { Row, Col, Card } from 'antd'
import 'gobal'

class App extends React.Component {
  state = { visible: false }
  render () {
    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="layer">
              <span className="m_water_f-keyword">width，height:100%</span><br />
              m_water_height-100<br />
              m_water_width-100<br /><br />
              <span className="m_water_f-keyword">margin：（sm,md,lg）</span><br />小 m_water_margin-sm
              <br />中 m_water_margin-md
              <br />大 m_water_margin-lg
              <br />
              <br />
              <span className="m_water_f-keyword">margin的左右上下分别为(以小尺寸为例)：</span><br />m_water_margin-sm-l<br />
              m_water_margin-sm-r<br />
              m_water_margin-sm-t<br />
              m_water_margin-sm-b<br />
            </Card>
          </Col>
          <Col lg={12} md={24} className="m_water_padding-lg">
            <Card title="layer">
              <span className="m_water_f-keyword">width，height:100%</span><br />
              m_water_height-100<br />
              m_water_width-100<br /><br />
              <span className="m_water_f-keyword">padding：（sm,md,lg）</span><br />小 m_water_margin-sm
              <br />中 m_water_padding-md
              <br />大 m_water_padding-lg
              <br />
              <br />
              <span className="m_water_f-keyword">padding的左右上下分别为(以小尺寸为例)：</span><br />m_water_margin-sm-l<br />
              m_water_padding-sm-r<br />
              m_water_padding-sm-t<br />
              m_water_padding-sm-b<br />
              <i className="iconfont">&#xe610;</i>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
export default App
