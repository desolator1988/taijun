import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Layout, Menu, Icon, Input, Col, Row } from 'antd';
import Home from './page/home';
import About from './page/about';

const { Header, Footer, Sider, Content } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;


class App extends Component {
  state = {
    current: 'home',
  };
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {

    return (
      <div className="App">
        <Layout>
          <Header style={{background: 'white', 'width': '100%'}}>
            <Row>
              <Col span={4}>
              <div className='logo'>
                <a id='logo'>
                  <img alt='logo' src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
                  <img alt='company-name' src='https://gw.alipayobjects.com/zos/rmsportal/DmMsyewtkhAzjNkeGnYe.svg' />
                </a>
              </div>
              </Col>

              <Col span={15}>
              <Menu style={{lineHeight: '64px'}} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                  <Icon type="home" />首页
                </Menu.Item>

                <Menu.Item key="company-case">
                  <Icon type="pie-chart" />项目案例
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />服务内容</span>}>
                  <Menu.ItemGroup title="展会设计">
                    <Menu.Item key="setting:1">APPLE设计方案</Menu.Item>
                    <Menu.Item key="setting:2">Intel设计方案</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="工程实施">
                    <Menu.Item key="setting:3">上海会展</Menu.Item>
                    <Menu.Item key="setting:4">杭州会展</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="about-us">
                  <Icon type="user" />关于我们
                </Menu.Item>
              </Menu>
              </Col>

              <Col span={5}>
              <Search
                placeholder="请输入搜索内容"
                onSearch={value => console.log(value)}
                enterButton
              />
              </Col>

            </Row>
          </Header>

          <Content style={{marginTop: '2px'}}>

            <Row>
              <Col span={24}>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                  </Switch>
                </BrowserRouter>
              </Col>
            </Row>

          </Content>

          <Footer>
              Designed by WY @2018
          </Footer>
        </Layout>

      </div>
    );
  }
}

export default App;
