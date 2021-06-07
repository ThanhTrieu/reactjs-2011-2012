import React from 'react';
import MasterLayoutView from '../../components/layout';
import { Row, Col } from 'antd';

const HomePage = () => {
  return(
    <MasterLayoutView>
      <Row>
        <Col span={24}>
          <h3>This is home page</h3>
        </Col>
      </Row>
    </MasterLayoutView>
  )
}
export default React.memo(HomePage);