import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
