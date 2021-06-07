import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from './partials/header';
import FooterComponent from './partials/footer';
import './layout.css';

const {  Content } = Layout;

const MasterLayout = (props) => {
  return (
    <Layout className="layout">
      <HeaderComponent/>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          {props.children}
        </div>
      </Content>
      <FooterComponent/>
    </Layout>
  )
}

export default React.memo(MasterLayout);