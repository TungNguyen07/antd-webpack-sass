import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SnippetsOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link, Route, withRouter } from "react-router-dom";

import User from "./User";
import { connect } from "react-redux";
//import User from "./User";

const { Header, Sider, Content } = Layout;

function App({ state, dispatch }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">home</Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<SnippetsOutlined />}>
            <Link to="/task">Task</Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/user">User</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="header site-layout-background"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
              id: "icon",
            }
          )}
        </Header>
        <Content>
          <Route path="/user" component={User} />
        </Content>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
