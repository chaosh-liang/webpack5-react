import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "@/view/Home";

import "./main.css";
const About = lazy(
  () => import(/* webpackChunkName: "chunk-about" */ "@/view/About")
);

const RenderJsx = () => (
  <HashRouter>
    <Suspense
      fallback={
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            fontSize: "14px",
            fontWeight: 500,
            color: "rgba(0, 0, 0, .65)",
            paddingTop: "40px",
            boxSizing: "border-box",
            backgroundColor: "#f0f2f5",
          }}
        >
          应用加载异常，请检查网络或联系管理员
        </div>
      }
    >
      <Switch>
        {/* 没有 exact 表示，此路由不管是否有子路由或参数，都渲染这个组件 */}
        <Route path="/home" render={(props) => <Home {...props} />} />
        <Route path="/about" render={(props) => <About {...props} />} />
        {/* 顶级路由不匹配时跳转至登录页 */}
        <Redirect to="/home" />
      </Switch>
    </Suspense>
  </HashRouter>
);

// 挂载
ReactDOM.render(
  process.env.NODE_ENV === "production" ? (
    // 严格模式报此警告："findDOMNode is deprecated in StrictMode" warning
    <React.StrictMode>
      <RenderJsx />
    </React.StrictMode>
  ) : (
    <RenderJsx />
  ),
  document.getElementById("root")
);
