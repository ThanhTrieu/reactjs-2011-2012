import React from 'react';
import { Row, Col, Card } from 'antd';
import { helper } from '../helpers/common';
import { userReselect } from '../reselect/user-reselect';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const { Meta } = Card;

const ListUsers = () => {
  const { users } = useSelector(createStructuredSelector({
    users: userReselect
  }));

  if(helper.isEmptyObject(users)){
    return(
      <Row>
        <Col span={20} offset={2}>
          <h2>Not found data</h2>
        </Col>
      </Row>
    )
  }

  return(
    <>
      <Row>
        <Col span={20} offset={2}>
          <Row style={{ margin: '30px 0px' }}>
            {users.map((item, index) => (
              <Col span={4} key={index}>
                <Card
                  hoverable
                  style={{ margin: '5px' }}
                  cover={<img alt={item.name} src={item.avatar} />}
                >
                  <Meta title={item.name} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  )
}
export default React.memo(ListUsers);