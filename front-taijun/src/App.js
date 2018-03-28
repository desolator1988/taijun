import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { Layout, Menu, Icon, Input, Col, Row } from 'antd';
import Home from './page/home';
import About from './page/about';
import Case from './page/case';

const { Header, Footer, Content } = Layout;
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
          <Header>
            <Row gutter={24}>
              <Col span={4}>
                <div className='logo'>
                  <a id='logo'>
                    <Link to="/home">
                      <img alt='logo' src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
                      <img alt='name' src='https://gw.alipayobjects.com/zos/rmsportal/DmMsyewtkhAzjNkeGnYe.svg' />
                    </Link>
                  </a>
                </div>
              </Col>

              <Col span={15}>
                <Menu style={{ lineHeight: '64px' }} theme="dark" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                  <Menu.Item key="home">
                    <Link to="/home"><Icon type="home" />首页</Link>
                  </Menu.Item>
                  <Menu.Item key="case">
                    <Link to="/case"><Icon type="appstore" />项目案例</Link>
                  </Menu.Item>
                  <SubMenu title={<span><Icon type="setting" />服务内容</span>}>
                    <Menu.ItemGroup title="展会设计">
                      <Menu.Item key="setting:1">
                        <Link to="/setting1">APPLE设计方案</Link>
                      </Menu.Item>
                      <Menu.Item key="setting:2">
                        <Link to="/setting2">Intel设计方案</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="工程实施">
                      <Menu.Item key="setting:3">
                        <Link to="/setting3">上海会展</Link>
                      </Menu.Item>
                      <Menu.Item key="setting:4">
                        <Link to="/setting4">杭州会展</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                  <Menu.Item key="about">
                    <Link to='/about'><Icon type="user" />关于我们</Link>
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

          <Content>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>
              <Route path="/case" component={Case}/>
              <Route path="/about" component={About}/>
            </Switch>
          </Content>

          <Footer>
              Designed by DMFOUR @2018
          </Footer>
        </Layout>

      </div>
    );
  }
}

export default App;
