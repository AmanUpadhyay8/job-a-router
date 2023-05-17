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
import CareersDetails, { careerDetailLoader } from "./Pages/careers/CareersDetails";
import CareerError from "./Pages/careers/CareerError";
import NotFound from "./Pages/NotFound";
  
import RootLayout from "./Layout/RootLayout";
import HelpLayout from "./Layout/HelpLayout";
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

        <Route path="careers" element={<CareersLayout/>} errorElement = {<CareerError />} >
          <Route 
            index 
            element={ <Careers /> } 
            loader={careersLoader} 
          />
          <Route
            path=":id"
            element = {<CareersDetails />}
            loader={careerDetailLoader}
          />
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
