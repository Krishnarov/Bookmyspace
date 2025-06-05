import ContactUs from "../dashboard/ContactUs";
import Dashboard from "../dashboard/Dashboard";
import RegisterLibrary from "../dashboard/RegisterLibrary";

const routes = [
     {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      icon: "ri-dashboard-line",
    },
     {
      path: "/dashboard/RegisterLibrary",
      component: RegisterLibrary,
      name: "Registerd Libraries",
      icon: "ri-book-line",
    },
     {
      path: "/dashboard/ContactUs",
      component: ContactUs,
      name: "Enquiries",
      icon: "ri-survey-line",
    },
]

export default routes;