import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styles from "./Home.less";

const App: FC<RouteComponentProps> = () => {
  const [name, setName] = useState("cho");
  useEffect(() => {
    console.log("did mount");
  }, []);
  return (
    <>
      <h3>hello world</h3>
      <p>{name}</p>
    </>
  );
};

export default App;
