import React from 'react';
import { Row, Col, Table } from 'antd';

const columns = [
  {
    title: 'Country',
    dataIndex: 'Country',
    key: 'Country'
  },
  {
    title: 'Country code',
    dataIndex: 'CountryCode',
    key: 'CountryCode'
  },
  {
    title: 'New Confirmed',
    dataIndex: 'NewConfirmed',
    key: 'NewConfirmed'
  },
  {
    title: 'Total Confirmed',
    dataIndex: 'TotalConfirmed',
    key: 'TotalConfirmed'
  },
  {
    title: 'New Deaths',
    dataIndex: 'NewDeaths',
    key: 'NewDeaths'
  },
  {
    title: 'Total Deaths',
    dataIndex: 'TotalDeaths',
    key: 'TotalDeaths'
  },
  {
    title: 'New Recovered',
    dataIndex: 'NewRecovered',
    key: 'NewRecovered'
  },
  {
    title: 'Total Recovered',
    dataIndex: 'TotalRecovered',
    key: 'TotalRecovered'
  }
];
const data = [];

const CountriesCorona = () => {
  return (
    <>
      <Row style={{ margin: '20px 0px' }}>
        <Col span={24}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </>
  )
}

export default React.memo(CountriesCorona);