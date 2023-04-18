import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import NavigationRoutes from './routes/NavigationRoutes';
import PageLoading from './shared/PageLoading';
import CustomNavbar from './shared/CustomNavbar';
import CustomFooter from './shared/CustomFooter';

import "aos/dist/aos.css";

const AOS = require("aos");

function App() {

  useEffect(() => {
    AOS.init(
      {
        offset: 200,
        duration: 800,
        easing: "ease-in-out-sine",
        delay: 200,
        mirror: true,
      },
      []
    );
  });
  AOS.init();

  return (
    <Suspense fallback={<PageLoading />}>
      <Router>
        <CustomNavbar />
        <NavigationRoutes />
        <CustomFooter />
      </Router>
    </Suspense>
  );
}

export default App;
