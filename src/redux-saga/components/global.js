import React from 'react';
import { Row, Col, Card } from 'antd';

const GlobalCorona = () => {
  return (
    <>
      <Row style={{ margin: '30px 0px' }}>
        <Col span={8}>
          <Card title="Confirmed" bordered={true}>
            <p>New Confirmed: </p>
            <p>Total Confirmed: </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Deaths" bordered={true}>
            <p>New Deaths: </p>
            <p>Total Deaths: </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Recovered" bordered={true}>
            <p>New Recovered: </p>
            <p>Total Recovered: </p>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default React.memo(GlobalCorona);