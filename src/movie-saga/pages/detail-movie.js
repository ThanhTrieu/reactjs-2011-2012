import { useEffect } from 'react';
import DetailMovie from '../components/detail';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataDetailMovie } from '../actions/index';
import { createStructuredSelector } from 'reselect';
import { getLoadingDetail } from '../reselect/detail-movie-reselect';
import { Skeleton } from 'antd';

const DetailMoviePage = () => {
  // lay id bo phim tu tren param url cua trinh duyet
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector(createStructuredSelector({
    loading: getLoadingDetail
  }))

  useEffect(() => {
    dispatch(getDataDetailMovie(id));
  },[id, dispatch]);

  if(loading){
    return (
      <Skeleton active />
    )
  } 

  return (
    <DetailMovie/>
  )
}
export default DetailMoviePage;