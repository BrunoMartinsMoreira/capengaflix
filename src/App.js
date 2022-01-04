import React, { useEffect } from "react";
import TmDbConfig from "./TmDbConfig";

const App = () => {
  useEffect(() => {
    const loadAll = async () => {
      let list = await TmDbConfig.getHomeList();
      console.log(list);
    };
    loadAll();
  }, []);

  return <div className="App">Olaaaa</div>;
};

export default App;
