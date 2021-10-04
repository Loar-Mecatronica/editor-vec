import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { PAGE_OFF } from '../../store/actions';
import { LeftTitle, NavBarLayout, RightControls } from './NavBar.styles';

export const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <NavBarLayout>
      <LeftTitle
        onClick={() => {
          dispatch({ type: PAGE_OFF });
          history.push('/');
        }}
      >
        Editor de Estaciones
      </LeftTitle>
      <RightControls>
        <FontAwesomeIcon
          icon={faHome}
          style={{ color: '#09779c', cursor: 'pointer' }}
          onClick={() => history.replace('/')}
        />
      </RightControls>
      {/*<RightControls>
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
        <ItemControl
          selected={location === 'Componentes'}
          onClick={() => {
            dispatch({ type: PAGE_OFF });
            history.push(`${path}/componente`);
          }}
        >
          Componentes
        </ItemControl>
        </RightControls>*/}
    </NavBarLayout>
  );
};
