import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import { Card } from '../../components/Card/Card';
import { PAGE_OFF, SET_LOCATION } from '../../store/actions';
import { AppState } from '../../store/App-state.interfaces';
import { StationsLayout } from './Stations.styles';
import { StationView } from '../Station/Station';

export const StationsView = () => {
  const location = useSelector((state: AppState) => state.session.location);
  const dispatch = useDispatch();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  useEffect(() => {
    dispatch({ type: SET_LOCATION, payload: 'Estaciones' });
  }, [location, dispatch]);
  return (
    <Switch>
      <Route path={`${path}/:stationId`}>
        <StationView />
      </Route>
      <Route exact path={path}>
        <StationsLayout>
          <Card
            handleClick={() => {
              dispatch({ type: PAGE_OFF });
              setTimeout(() => history.push(`${url}/${'Estación1'}`), 500);
            }}
          >
            Estación 1
          </Card>
        </StationsLayout>
      </Route>
    </Switch>
  );
};
