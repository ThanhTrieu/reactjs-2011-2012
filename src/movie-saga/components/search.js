import React from 'react';
import { Row, Col, Input } from 'antd';

const { Search } = Input;

const SearchMovie = () => {
  return (
    <>
      <Row style={{ margin: '20px 0px'}}>
        <Col span={12} offset={6}>
          <Search
            placeholder="movie's name ... "
            enterButton="Search"
            size="large"
            loading
          />
        </Col>
      </Row>
    </>
  )
}
export default React.memo(SearchMovie);
