import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "home", element: <Home></Home> },
    // { path: "contact", element: <Contact></Contact> },
    // { path: "services", element: <Services></Services> },
    // { path: "career", element: <Career></Career> },
    // { path: "about", element: <About></About> },
    // { path: "*", element: <NotFound></NotFound> },
    // { path: "termsCondition", element: <TermsCondition></TermsCondition> },
    // { path: "privacyPolicy", element: <PrivacyPolicy></PrivacyPolicy> },





  ])

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
