import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Video from './components/videoSection/Video';
import WeOffer from './components/WeOffer/weOffer';
import Off from './components/Off/Off';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
    return (
        <Router>
            <Fragment>
                <Navbar />

                <Route exact path="/" component={HeroSection} />

                <Switch>
                    <Route exact path="/home" component={HeroSection} />
                    {/* <Route exact path="/about" component={ser} /> */}
                    <Route exact path="/services" component={Services} />
                    {/* <Route exact path="/tour" component={tour} /> */}
                </Switch>
                <Services />
                <Video />
                <WeOffer />
                <Off />
                <Testimonials />
            </Fragment>
        </Router>
    );
}

export default App;
