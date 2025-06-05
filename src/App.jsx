import { Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./route/routes";
import SidebarRoutes from "./route/SidebarRaoute";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Layout from "./dashboard/Layout";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'remixicon/fonts/remixicon.css'
function App() {
  const user = useSelector((state) => state.auth.isLoggedIn);
  console.log(user);

  return (
    <>
    <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"

          />
      {!user ? (
        <Routes>
          
          {routes.map((route, index) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={index}
            />
          ))}
          <Route path="/login" element={<Login />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      ) : (
        <Layout>
          
          <Routes>
            {SidebarRoutes.map((route, index) => (
              <Route
                path={route.path}
                element={<route.component />}
                key={index}
              />
            ))}
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
