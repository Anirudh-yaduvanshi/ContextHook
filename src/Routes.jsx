import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Services from "./Components/Pages/Services";
import Home from "./Components/Pages/Home";

const routes = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
    },
    {
        path: "services",
        element: <Services />,
    },
    {
        path: "home",
        element: <Home />,
    },
    {
        path: "",
        element: <Home />,
    },
],
},

]);

export default routes;
