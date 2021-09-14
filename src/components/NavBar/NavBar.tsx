import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { PAGE_OFF, PAGE_ON } from '../../store/actions';
import { AppState } from '../../store/App-state.interfaces';
import {
  ItemControl,
  LeftTitle,
  NavBarLayout,
  RightControls,
} from './NavBar.styles';

export const NavBar = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const location = useSelector((state: AppState) => state.session.location);

  return (
    <NavBarLayout>
      <LeftTitle
        onClick={() => {
          dispatch({ type: PAGE_OFF });
          history.push('/');
        }}
      >
        Editor Vec
      </LeftTitle>
      <RightControls>
        <ItemControl
          selected={location === 'Lineas'}
          onClick={() => {
            dispatch({ type: PAGE_OFF });
            setTimeout(() => history.push(`${path}/linea`), 500);
            setTimeout(() => dispatch({ type: PAGE_ON }), 500);
          }}
        >
          Lineas
        </ItemControl>
        <ItemControl
          selected={location === 'Componentes'}
          onClick={() => {
            dispatch({ type: PAGE_OFF });
            history.push(`${path}/componente`);
          }}
        >
          Componentes
        </ItemControl>
        <ItemControl
          selected={location === 'Estaciones'}
          onClick={() => {
            dispatch({ type: PAGE_OFF });
            history.push(`${path}/estacion`);
            setTimeout(() => dispatch({ type: PAGE_ON }), 500);
          }}
        >
          Estaciones
        </ItemControl>
      </RightControls>
    </NavBarLayout>
  );
};