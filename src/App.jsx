
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./route/routes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route,index)=>(<Route  path={route.path} element={<route.component />} key={index} />))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
