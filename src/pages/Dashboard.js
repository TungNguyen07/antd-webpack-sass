import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Input } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SnippetsOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { CLICK_STARTED } from "../constants/count";
import { connect } from "react-redux";
import { INSERT_STARTED } from "../constants/user";

const { Header, Sider, Content } = Layout;

function App({ state, dispatch }) {
  const [collapsed, setCollapsed] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleInsertName = () => {
    dispatch({ type: INSERT_STARTED, payload: name });
    setName("");
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<SnippetsOutlined />}>
            Task
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            User
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
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <p>
            {state.userReducer.name} clicked {state.countReducer} time(s)
          </p>
          <Button
            className="click-count-button"
            onClick={() =>
              dispatch({ type: CLICK_STARTED, payload: state.countReducer })
            }
          >
            Click
          </Button>
          <div>
            <Input
              placeholder="Type name"
              onChange={handleChange}
              className="input-name"
              value={name}
            />
            <Button className="insert-name-button" onClick={handleInsertName}>
              Insert
            </Button>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
