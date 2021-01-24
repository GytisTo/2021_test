import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import GalleryItemContainer from './pages/GalleryItem/GalleryItemContainer';
import IndexContainer from './pages/Index/IndexContainer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/galleryItem/:id" render={() => <GalleryItemContainer /> } />
        {/* <Route exact path="/gallery" render={() => <GalleryContainer /> } /> */}
        <Route path="/" render={() => <IndexContainer /> } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
