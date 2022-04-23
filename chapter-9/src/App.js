import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import newJson from './news.json';
import News from './Components/News';
import FooterComponent from './Components/Footer';
import HeaderComponent from './Components/Header';
import Lifecycle from './Components/LifeCycle';
const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifeCycleActive: true,
      footerText: 'Ant Design ©2018 Created by Ant UED',
      news: newJson,
      filtered: newJson
    }
  }

  getKeywords = (keyword) => {
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword) > -1;
    });
    this.setState({ filtered });
  }

  render() {
    const { filtered, footerText, lifeCycleActive } = this.state;
    return (
      <Layout className="layout">
        <HeaderComponent getKeywords={this.getKeywords} />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content"><News news={filtered} /></div>
          {lifeCycleActive ? <Lifecycle /> : null}
        </Content>
        <FooterComponent footerText={footerText} />
      </Layout>
    );
  }
}

export default App;
