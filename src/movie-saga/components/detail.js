import React from 'react';
import { Row, Col, Image, Button } from 'antd';
import { useSelector } from 'react-redux';
import { viewDataDetail } from '../reselect/detail-movie-reselect';
import { createStructuredSelector } from 'reselect';
import { helper } from '../helpers/common';
import { Link } from 'react-router-dom';

const DetailMovie = () => {
  const { detail } = useSelector(createStructuredSelector({
    detail: viewDataDetail
  }));

  if(helper.isEmptyObject(detail)){
    return (
      <Row style={{ marginTop: '30px' }}>
        <Col span={20} offset={2}>
          Not found data
        </Col>
      </Row>
    )
  }

  return (
    <Row style={{ marginTop: '30px' }}>
      <Col span={20} offset={2}>
        <Row>
          <Col span={8}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`}
            />
            <h4> {detail.original_title} </h4>
          </Col>
          <Col span={8}>
            <p> - ten phim: {detail.title}</p>
            <p> - noi dung phim: {detail.overview}</p> 
          </Col>
          <Col span={8}>
            <Link to='/'>
              <Button type="dashed"> Tim kiem phim </Button>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
export default DetailMovie;