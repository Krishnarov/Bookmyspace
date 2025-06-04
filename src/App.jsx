
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./route/routes";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route,index)=>(<Route  path={route.path} element={<route.component />} key={index} />))}
          <Route path="/terms-conditions" element={<TermsAndConditions/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
