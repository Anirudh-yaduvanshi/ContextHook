import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserContextProvider from "../src/context/usercontextprovider.jsx"
import ThemeContextProvider from "./context/Themecontextprovider.jsx";
import routes from "./Routes.jsx";

import { RouterProvider } from 'react-router'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <ThemeContextProvider>

        <RouterProvider router={routes} />  
        
      </ThemeContextProvider>
    </UserContextProvider>
  </StrictMode>
);
