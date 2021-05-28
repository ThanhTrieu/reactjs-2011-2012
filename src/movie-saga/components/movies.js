import React from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const Movies = () => {
  return (
    <>
      <Row style={{ margin: '30px 0px' }}>
        <Col span={20} offset={2}>
          <Row>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="Europe Street beat" />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
export default React.memo(Movies);
