import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Hotel from './Hotel';
import globalContext from '../context/globalContext';

export default function Router() {
  const [auth, setAuth] = useState(false);
  const [hotelId, setHotelId] = useState();
  const [hotelURL, setHotelURL] = useState();

  return (
    <BrowserRouter>
      <globalContext.Provider
        value={{
          auth,
          setAuth,
          hotelId,
          setHotelId,
          hotelURL,
          setHotelURL,
        }}
      >
        <Switch>
          <Route path={`/hotel/${hotelId}`} component={Hotel} />
          <Route path="/" component={Home} />
        </Switch>
      </globalContext.Provider>
    </BrowserRouter>
  );
}
