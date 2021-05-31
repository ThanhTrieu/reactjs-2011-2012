import React from 'react';
import { Row, Col, Card } from 'antd';
import { getDataMovies } from '../reselect/movie-reselect';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';


const { Meta } = Card;

const Movies = () => {
  const { dataMovies } = useSelector(createStructuredSelector({
    dataMovies: getDataMovies
  }));

  if(dataMovies === null){
    return null;
  }

  return (
    <>
      <Row style={{ margin: '30px 0px' }}>
        <Col span={20} offset={2}>
          <Row>
            {dataMovies.map((item,key) => (
              <Col span={6} key={key}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                >
                  <Meta title={item.title} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  )
}
export default React.memo(Movies);
