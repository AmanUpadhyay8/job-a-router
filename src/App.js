import {
  Routes,
  Route, 
  Link, 
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import { Home } from "./Pages/Home"; 
import { About } from "./Pages/About";
import  Faq  from "./Pages/help/Faq";
import  Contact  from "./Pages/help/Contact";
  
import RootLayout from "./Layout/RootLayout";
import HelpLayout from "./Layout/HelpLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}> 
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />}/>
        </Route>
    </Route>
  )
)

function App() {
  return (
    
    <RouterProvider router={router}/>
    
  );
}

export default App
