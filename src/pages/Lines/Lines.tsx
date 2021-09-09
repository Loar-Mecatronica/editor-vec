import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { Card } from '../../components/Card/Card';
import { PAGE_OFF, PAGE_ON } from '../../store/actions';
import { Route, Switch } from 'react-router-dom';
import { Line } from '../Line/Line';
//import { LinesProps } from './Lines.interfaces';
import { LinesLayout } from './Lines.styles';
export const Lines = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  useEffect(() => {
    dispatch({ type: PAGE_ON });
  }, [dispatch]);
  return (
    <Switch>
      <Route path={`${path}/:lineId`}>
        <Line />
      </Route>
      <Route exact path={path}>
        <LinesLayout>
          <Card
            handleClick={() => {
              dispatch({ type: PAGE_OFF });
              setTimeout(() => history.push(`${url}/${'linea1'}`), 500);
            }}
          >
            Linea 1
          </Card>
        </LinesLayout>
      </Route>
    </Switch>
  );
};
