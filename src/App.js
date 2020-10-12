////////////////////////
//   ** Kenneth **   //
// Diving Djursland //
/////////////////////

import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Header from './components/Layout/Header/Header';
import Home from './pages/Home';
import Spotpage from './pages/Spotpage';
import Booking from './pages/Booking'
import Kontakt from './pages/Kontakt'
import Info from './pages/Info'
import Dykkerspots from './pages/Dykkerspots'
import Divingmap from './pages/divingspots/Divingmap'
import Footer from './pages/Footer';
import ScrollToTop from './scripts/ScrollToTop'
import SpotContextProvider from './pages/SpotContext';
import './App.scss';



function App() {
  return (
    <SpotContextProvider>
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/dykkerspots/:spotID" component={Spotpage}/>
          <Route path="/Booking" component={Booking} />
          <Route path="/Kontakt" component={Kontakt} />
          <Route path="/Dykkerspots" component={Dykkerspots} />
          <Route path="/Info" component={Info} />
          <Route path="/Divingmap" component={Divingmap} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    </SpotContextProvider>
  );
}


export default App;
