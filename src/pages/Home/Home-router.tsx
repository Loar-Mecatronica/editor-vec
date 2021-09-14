import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { Lines } from '../Lines/Lines';
import { ComponentsView } from '../Components-view/Components-view';
import { StationsView } from '../Stations/Stations';
import { Page404 } from '../404 page/404-Page';

export const HomeRouter = () => {
  const { path, url } = useRouteMatch();
  const { pathname } = useLocation();
  return (
    <Switch>
      <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
      <Route exact path={`${path}`}>
        <Redirect to={`${url}/linea`} />
      </Route>
      <Route path={`${url}/linea`} component={Lines} />
      <Route path={`${url}/componente`} component={ComponentsView} />
      <Route path={`${url}/estacion`} component={StationsView} />
      <Route component={Page404} />
    </Switch>
  );
};
