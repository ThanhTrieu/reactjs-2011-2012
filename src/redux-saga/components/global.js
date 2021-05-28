import React from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { getDataGlobalVirus } from '../reselect/conrona-reselect';
import { createStructuredSelector } from 'reselect';

const GlobalCorona = () => {
  const { globals } = useSelector(createStructuredSelector({
    globals: getDataGlobalVirus
  }));
  
  if(globals === null){
    return (
      <Skeleton active />
    )
  }

  return (
    <>
      <Row style={{ margin: '30px 0px' }}>
        <Col span={8}>
          <Card title="Confirmed" bordered={true}>
            <p>New Confirmed: {globals.NewConfirmed}</p>
            <p>Total Confirmed: {globals.TotalConfirmed}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Deaths" bordered={true}>
            <p>New Deaths: {globals.NewDeaths}</p>
            <p>Total Deaths: {globals.TotalDeaths}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Recovered" bordered={true}>
            <p>New Recovered: {globals.NewRecovered}</p>
            <p>Total Recovered: {globals.TotalRecovered}</p>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default React.memo(GlobalCorona);