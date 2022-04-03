import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/store";
import thunkMiddleware from "redux-thunk";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { Header, Content, Footer } = Layout;

  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  return (
    <Provider store={store}>
      <Layout>
        <Header className="header-section" style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Component {...pageProps} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          FOOTER
        </Footer>
      </Layout>
    </Provider>
  );
}

export default MyApp;
