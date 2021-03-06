import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import { Card } from '../../components/Card/Card';
import { PAGE_OFF, PAGE_ON, SET_LOCATION } from '../../store/actions';
import { AppState } from '../../store/App-state.interfaces';
import { ComponentsViewLayout } from './Components-view.styled';
import { ComponentView } from '../Component-view/Component-view';
export const ComponentsView = () => {
  const location = useSelector((state: AppState) => state.session.location);
  const dispatch = useDispatch();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  useEffect(() => {
    dispatch({ type: SET_LOCATION, payload: 'Componentes' });
    setTimeout(() => dispatch({ type: PAGE_ON }), 500);
  }, [location, dispatch]);
  return (
    <Switch>
      <Route path={`${path}/:componentId`}>
        <ComponentView />
      </Route>
      <Route exact path={path}>
        <ComponentsViewLayout>
          <Card
            handleClick={() => {
              dispatch({ type: PAGE_OFF });
              setTimeout(() => history.push(`${url}/${'componente1'}`), 500);
            }}
          >
            Componente 1
          </Card>
        </ComponentsViewLayout>
      </Route>
    </Switch>
  );
};
