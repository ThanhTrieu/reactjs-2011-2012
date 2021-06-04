import React from 'react';
import { Row, Col, Image } from 'antd';

const DetailMovie = () => {
  return (
    <Row style={{ marginTop: '30px' }}>
      <Col span={20} offset={2}>
        <Row>
          <Col span={8}>
            <Image
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <h4> dsdsdsdsd </h4>
          </Col>
          <Col span={8}>
            <p> - ten phim: </p>
            <p> - noi dung phim: </p> 
          </Col>
          <Col span={8}>

          </Col>
        </Row>
      </Col>
    </Row>
  )
}
export default DetailMovie;