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
import Careers , { careersLoader } from "./Pages/careers/Careers";
  
import RootLayout from "./Layout/RootLayout";
import HelpLayout from "./Layout/HelpLayout";
import NotFound from "./Pages/NotFound";
import CareersLayout from "./Layout/CareersLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />


        <Route path="help" element={<HelpLayout />}> 
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />}/>
        </Route>

        <Route path="careers" element={<CareersLayout/>} >
          <Route index element={ <Careers /> } loader={careersLoader} />
        </Route>

        <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

function App() {
  return (
    
    <RouterProvider router={router}/>
    
  );
}

export default App
