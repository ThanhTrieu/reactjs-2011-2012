import React from 'react';
import MasterLayoutView from '../../components/layout';
import { Row, Col } from 'antd';

const DetailPage = () => {
  return(
    <MasterLayoutView>
      <Row>
        <Col span={24}>
          <h3>This is  detail page</h3>
        </Col>
      </Row>
    </MasterLayoutView>
  )
}
export default React.memo(DetailPage);