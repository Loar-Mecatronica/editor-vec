import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import { Lines } from '../Lines/Lines';
export const HomeRouter = () => {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Redirect to={`${url}/linea`} />
      </Route>
      <Route path={`${url}/linea`} component={Lines} />
    </Switch>
  );
};
