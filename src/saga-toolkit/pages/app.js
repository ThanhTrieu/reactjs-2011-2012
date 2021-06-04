import { useEffect } from 'react';
import ListUsers from '../components/list-users';
import { useDispatch, useSelector } from 'react-redux';
import { requestDataServer } from '../actions/users-action';
import { Row, Col, Skeleton} from 'antd';
import { loadingReselect } from '../reselect/user-reselect';
import { createStructuredSelector } from 'reselect';

const AppListUsers = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(createStructuredSelector({
    loading: loadingReselect
  }));

  useEffect(() => {
    dispatch(requestDataServer());
  },[dispatch]);

  if(loading){
    return(
      <Row>
        <Col span={20} offset={2}>
          <Skeleton active />
        </Col>
      </Row>
    )
  }

  return(
    <ListUsers/>
  )
}
export default AppListUsers;