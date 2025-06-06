import About from "../pages/About"
import ContactUs from "../pages/ContactUs"
import Home from "../pages/Home"
import HowItWorks from "../pages/HowItWorks"
import Library from "../pages/Library"
import Libraryowners from "../pages/Libraryowners"
import Pricing from "../pages/Pricing"


 const routes = [
    {
      path: "/",
      component: Home,
      name: "Home",
      icon: "ri-dashboard-line",
    },
    {
      path: "/About",
      component: About,
      name: "About",
      icon: "ri-dashboard-line",
    },
    {
      path: "/HowItWorks",
      component: HowItWorks,
      name: "How It Works ",
      icon: "ri-dashboard-line",
    },
    {
      path: "/libraryowners",
      component: Libraryowners,
      name: "Owner Onboarding Benifits",
      icon: "ri-dashboard-line",
    },
    {
      path: "/Library",
      component: Library,
      name: "Library Registration ",
      icon: "ri-dashboard-line",
    },
    {
      path: "/Contact",
      component: ContactUs,
      name: "Contact Us",
      icon: "ri-dashboard-line",
    },
    


]

export default routes