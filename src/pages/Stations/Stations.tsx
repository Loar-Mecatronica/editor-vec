import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import { Card } from '../../components/Card/Card';
import { PAGE_OFF, PAGE_ON, SET_LOCATION } from '../../store/actions';
import { AppState } from '../../store/App-state.interfaces';
import {
  CardHolder,
  FilterContainer,
  StationsLayout,
  TypesContainer,
} from './Stations.styles';
import { StationView } from '../Station/Station';
import { fetchStations, fetchLineas } from './Stations.requests';
import { Spinner } from '../../components/Spinner/Spinner';
import { SearcherSelect } from '../../components/SearcherSelect/SearcherSelect';

export const StationsView = () => {
  const location = useSelector((state: AppState) => state.session.location);
  const dispatch = useDispatch();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const [stations, setStations] = useState<any[]>([]);
  const [lines, setLines] = useState<any[]>([]);
  const [pickedLine, setPickedLine] = useState(21);
  const [pickedType, setPickedType] = useState('Subensamble');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch({ type: SET_LOCATION, payload: 'Estaciones' });
    setTimeout(() => dispatch({ type: PAGE_ON }), 500);
    fetchLineas(5).then((result) => {
      if (result.mensaje === 'OK') {
        setLines(result.filtros);
      } else {
        alert(result.mensaje);
      }
    });
  }, [location, dispatch]);

  useEffect(() => {
    const loaderTimeOut = setTimeout(() => setLoading(true), 300);
    fetchStations(pickedLine, pickedType)
      .then((result) => {
        if (result.mensaje === 'OK') {
          setStations(result.estaciones);
        } else {
          alert(result.mensaje);
        }
      })
      .finally(() => {
        clearTimeout(loaderTimeOut);
        setLoading(false);
      });
  }, [pickedLine, pickedType]);
  return (
    <Switch>
      <Route path={`${path}/:stationId`}>
        <StationView />
      </Route>
      <Route exact path={path}>
        <Spinner active={loading} />
        <StationsLayout>
          <FilterContainer>
            <TypesContainer>
              <SearcherSelect
                label="tipo de linea"
                options={[
                  { label: 'Subensamble', value: 'Subensamble' },
                  { label: 'Linea', value: 'Linea' },
                  { label: 'Probadora', value: 'Probadora' },
                ]}
              />
            </TypesContainer>
            <TypesContainer>
              <SearcherSelect
                label="linea"
                options={lines.map((l) => {
                  return { label: l.nombre, value: l.id };
                })}
              />
            </TypesContainer>
            {/*<TypesContainer>
              <LineButton
                onClick={() => setPickedType('Subensamble')}
                picked={pickedType === 'Subensamble'}
              >
                subensamble
              </LineButton>
              <LineButton
                onClick={() => setPickedType('Linea')}
                picked={pickedType === 'Linea'}
              >
                linea
              </LineButton>
              <LineButton
                onClick={() => setPickedType('Probadora')}
                picked={pickedType === 'Probadora'}
              >
                probadora
              </LineButton>
            </TypesContainer>
            <LinesContainer>
              {lines.map((line, index) => {
                return (
                  <LineButton
                    picked={pickedLine === line.id}
                    onClick={() => setPickedLine(line.id)}
                    key={`line${index}`}
                  >
                    {line.nombre}
                  </LineButton>
                );
              })}
            </LinesContainer>*/}
          </FilterContainer>
          <CardHolder>
            {stations.map((station, k) => {
              return (
                <Card
                  key={`station-${k}`}
                  handleClick={() => {
                    dispatch({ type: PAGE_OFF });
                    setTimeout(
                      () => history.push(`${url}/${station.IDestacion}`),
                      500
                    );
                  }}
                >
                  {station.Nombre}
                </Card>
              );
            })}
          </CardHolder>
        </StationsLayout>
      </Route>
    </Switch>
  );
};
