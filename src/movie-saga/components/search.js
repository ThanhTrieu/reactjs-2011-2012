import React from 'react';
import { Row, Col, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovie } from '../actions/index';
import { loadingSearch } from '../reselect/movie-reselect';
import { createStructuredSelector } from 'reselect';

const { Search } = Input;

const SearchMovie = () => {
  const { loading } = useSelector(createStructuredSelector({
    loading: loadingSearch
  }))
  const dispatch = useDispatch();

  const searchMovieByKeyword = (nameMovie) => {
    dispatch(searchMovie(nameMovie))
  }

  return (
    <>
      <Row style={{ margin: '20px 0px'}}>
        <Col span={12} offset={6}>
          <Search
            placeholder="movie's name ... "
            enterButton="Search"
            size="large"
            loading={loading}
            onSearch={val => searchMovieByKeyword(val)}
          />
        </Col>
      </Row>
    </>
  )
}
export default React.memo(SearchMovie);
